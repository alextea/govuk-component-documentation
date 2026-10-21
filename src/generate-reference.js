// Generates LLM-friendly references for GOV.UK Frontend.
//
// Components: data comes from the installed govuk-frontend package, which ships for every component:
//   - macro-options.json  every parameter, with type, required flag and description
//   - fixtures.json       the examples used by GOV.UK Frontend's own tests, with rendered HTML
// Styles: colours, the type scale, spacing and override classes are read from the
// package's compiled CSS and Sass settings (see styles.js).
//
// Optional usage guidance is pulled from the govuk-design-system repo, either a local clone or GitHub.
//
// Usage:
//   node src/generate-reference.js [--guidance[=/path/to/govuk-design-system]] [--all-examples] [--verify] [--dry-run]

import fs from 'fs/promises';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import nunjucks from 'nunjucks';
import { loadGuidance, designSystemSite } from './lib/guidance.js';
import { buildStyles } from './styles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const frontendRoot = path.dirname(require.resolve('govuk-frontend/package.json'));
const frontendDist = path.join(frontendRoot, 'dist');
const componentsDir = path.join(frontendDist, 'govuk/components');
const frontendVersion = require('govuk-frontend/package.json').version;

const outputDir = path.join(__dirname, '../docs');
const componentsFile = path.join(outputDir, 'govuk-frontend-component-reference.md');
const stylesFile = path.join(outputDir, 'govuk-frontend-styles.md');
const splitDir = path.join(outputDir, 'components');
const llmsFile = path.join(__dirname, '../llms.txt');

// Where the Design System's name for a component differs from GOV.UK Frontend's.
// Hint and label have no page of their own; they are documented under the form components.
const designSystemSlugs = { input: 'text-input' };
const designSystemSlug = name => designSystemSlugs[name] || name;
const withoutDesignSystemPage = ['hint', 'label'];

const args = process.argv.slice(2);
const guidanceArg = args.find(arg => arg.startsWith('--guidance'));
const guidanceSource = guidanceArg ? (guidanceArg.split('=')[1] || 'github') : null;
const allExamples = args.includes('--all-examples');
const verify = args.includes('--verify');
const dryRun = args.includes('--dry-run');

const env = nunjucks.configure(frontendDist, { autoescape: true });

const titleCase = slug => slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

// ---------------------------------------------------------------------------
// Nunjucks serialisation: turn a fixture's options object into a macro call
// ---------------------------------------------------------------------------

const isIdentifier = key => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key);

function toNunjucks(value, keepNulls, indent = '') {
    const next = indent + '  ';

    if (value === null || value === undefined) return 'null';
    if (typeof value === 'string') return JSON.stringify(value);
    if (typeof value !== 'object') return String(value);

    if (Array.isArray(value)) {
        if (!value.length) return '[]';
        return `[\n${value.map(item => next + toNunjucks(item, keepNulls, next)).join(',\n')}\n${indent}]`;
    }

    const entries = Object.entries(value).filter(([, val]) => keepNulls || val !== null);
    if (!entries.length) return '{}';
    return `{\n${entries
        .map(([key, val]) => `${next}${isIdentifier(key) ? key : JSON.stringify(key)}: ${toNunjucks(val, keepNulls, next)}`)
        .join(',\n')}\n${indent}}`;
}

const macroCall = (macroName, options, keepNulls = false) => `{{ ${macroName}(${toNunjucks(options, keepNulls)}) }}`;

// ---------------------------------------------------------------------------
// Parameters table
// ---------------------------------------------------------------------------

const escapeCell = text => (text || '').replace(/\|/g, '\\|').replace(/\n+/g, ' ');

function parameterRows(params, prefix = '') {
    return params.flatMap(param => {
        const name = prefix + param.name;
        let description = param.description;
        if (param.isComponent) {
            const slug = param.name.replace(/([A-Z])/g, '-$1').toLowerCase();
            description += ` See [${titleCase(slug)}](#${slug}) for its options.`;
        }
        if (param.deprecated) description = `**Deprecated in ${param.deprecated}.** ${description}`;

        const row = `| \`${name}\` | ${param.type} | ${param.required ? 'Yes' : 'No'} | ${escapeCell(description)} |`;
        const childPrefix = param.type === 'array' ? `${name}[].` : `${name}.`;
        return [row, ...parameterRows(param.params || [], childPrefix)];
    });
}

// ---------------------------------------------------------------------------
// Verification: render the generated Nunjucks and compare with the fixture HTML
// ---------------------------------------------------------------------------

const normaliseHtml = html => html.replace(/\s+/g, ' ').replace(/\s*(<|>)\s*/g, '$1').trim();

const renderCall = (name, macroName, call) =>
    env.renderString(`{% from "govuk/components/${name}/macro.njk" import ${macroName} %}${call}`);

// Fixtures often set options to null just to test defaults, which is noise in an example.
// But some nulls change the output (for example footer `contentLicence: null` hides the licence),
// so only leave them out when the call still renders the fixture's HTML.
function exampleCall(name, macroName, fixture) {
    const withoutNulls = macroCall(macroName, fixture.options);
    const matches = normaliseHtml(renderCall(name, macroName, withoutNulls)) === normaliseHtml(fixture.html);
    return matches ? withoutNulls : macroCall(macroName, fixture.options, true);
}

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

async function loadComponent(name) {
    const dir = path.join(componentsDir, name);
    const [macroSource, params, fixtures] = await Promise.all([
        fs.readFile(path.join(dir, 'macro.njk'), 'utf8'),
        fs.readFile(path.join(dir, 'macro-options.json'), 'utf8').then(JSON.parse),
        fs.readFile(path.join(dir, 'fixtures.json'), 'utf8').then(JSON.parse)
    ]);
    const macroName = macroSource.match(/\{%-?\s*macro\s+(\w+)/)[1];
    const examples = fixtures.fixtures
        .filter(fixture => allExamples || !fixture.hidden)
        .map(fixture => ({ ...fixture, call: exampleCall(name, macroName, fixture) }));
    const hasPage = !withoutDesignSystemPage.includes(name);
    const guidance = guidanceSource && hasPage ? await loadGuidance(guidanceSource, 'components', designSystemSlug(name)) : null;
    return { name, macroName, params, examples, guidance, hasPage };
}

function renderComponent({ name, macroName, params, examples, guidance, hasPage }) {
    const lines = [
        `## ${titleCase(name)}`,
        '',
        '[↑ Back to top](#table-of-contents)',
        '',
        `**Macro:** \`${macroName}\` · **Import:** \`{% from "govuk/components/${name}/macro.njk" import ${macroName} %}\``,
        ''
    ];

    if (hasPage) lines.push(`**Design System guidance:** ${designSystemSite}/components/${designSystemSlug(name)}/`, '');
    if (guidance) lines.push('### Guidance', '', guidance, '');

    lines.push(
        '### Parameters',
        '',
        '| Name | Type | Required | Description |',
        '| --- | --- | --- | --- |',
        ...parameterRows(params),
        '',
        '### Examples',
        ''
    );

    examples.forEach((example, index) => {
        lines.push(`#### ${titleCase(example.name)}`, '');
        if (example.description) lines.push(example.description, '');
        lines.push('```njk', example.call, '```', '');
        // Rendered HTML only for the first example, to show the markup and classes without bloating the file
        if (index === 0) lines.push('Renders as:', '', '```html', example.html.trim(), '```', '');
    });

    lines.push('---', '');
    return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Documents
// ---------------------------------------------------------------------------

// No generation date, so regenerating without upstream changes produces no diff
const attribution = 'Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).';

const generatedNote = `> Generated from govuk-frontend v${frontendVersion}. Do not edit by hand. Regenerate with \`npm run reference\`.
>
> ${attribution}`;

const componentsPreamble = `${generatedNote}

## How to use this file (for coding agents)

- Read [govuk-frontend-guide.md](govuk-frontend-guide.md) first. It covers page templates, layout, typography and common patterns. Colours, spacing and override classes are in [govuk-frontend-styles.md](govuk-frontend-styles.md).
- Find the component in the table of contents, then read only that section. The line numbers point at its \`##\` heading. Each component is also in its own file in [components/](components/).
- Import each macro before using it: \`{% from "govuk/components/<name>/macro.njk" import <macroName> %}\`. In the GOV.UK Prototype Kit the macros are already imported, so you can leave this line out.
- Nunjucks must be configured with \`node_modules/govuk-frontend/dist\` on its search path.
- \`text\` is HTML-escaped and \`html\` is not. If both are set, \`html\` wins. Never put user input in \`html\`.
- Form components take nested \`label\`, \`hint\`, \`fieldset\` and \`errorMessage\` objects. These have the same options as the Label, Hint, Fieldset and Error message components.
- Setting \`errorMessage\` switches a form component to its error state. Pair it with an Error summary at the top of the page.
- Every component accepts \`classes\` (extra CSS classes) and \`attributes\` (an object of extra HTML attributes).
- Only use parameters listed in a component's table. Do not invent options or hand-write the HTML when a macro exists.
`;

const stylesPreamble = `${generatedNote}

## How to use this file (for coding agents)

- Find the topic in the table of contents, then read only that section. The line numbers point at its \`##\` heading.
- Colour values, the type scale, the spacing scale and every \`govuk-!-\` class are read from GOV.UK Frontend's compiled CSS, so they match what the classes really do.
- Use component options and the typography classes first. Only reach for \`govuk-!-\` override classes to adjust spacing, width or font size where nothing else fits.
- Never hard-code hex colours. Use functional colours, through \`govuk-functional-colour()\` in Sass or \`var(--govuk-*-colour)\` in CSS.
`;

// A document with a table of contents whose line numbers point at each section's heading
function documentWithToc({ title, preamble, columns, rows, sections }) {
    const header = tocRows => [
        `# ${title}`,
        '',
        preamble,
        '## Table of contents',
        '',
        `| ${[...columns, 'Line'].join(' | ')} |`,
        `| ${[...columns, 'Line'].map(() => '---').join(' | ')} |`,
        ...tocRows,
        '',
        '---',
        ''
    ].join('\n');

    let line = header(sections.map(() => '')).split('\n').length;
    const tocRows = sections.map((section, index) => {
        const row = `| ${[...rows[index], line].join(' | ')} |`;
        line += section.split('\n').length - 1;
        return row;
    });

    return header(tocRows) + sections.join('');
}

// https://llmstxt.org index pointing agents at the guide and per-component files
function llmsTxt(components) {
    return [
        '# GOV.UK Frontend for coding agents',
        '',
        `> Reference for building pages with the GOV.UK Frontend (v${frontendVersion}) Nunjucks macros and styles, with usage guidance from the GOV.UK Design System.`,
        '',
        'Read the guide first, then only the component files you need.',
        '',
        '## Guides',
        '',
        '- [GOV.UK Frontend guide](docs/govuk-frontend-guide.md): progressive enhancement, page template, layout, typography, forms and errors, Prototype Kit',
        '- [Styles reference](docs/govuk-frontend-styles.md): colours, type scale, spacing, layout and the `govuk-!-` override classes',
        '- [Full component reference](docs/govuk-frontend-component-reference.md): every component in one file, with a line-numbered table of contents',
        '',
        '## Components',
        '',
        ...components.map(({ name, macroName }) => `- [${titleCase(name)}](docs/components/${name}.md): \`${macroName}\``),
        ''
    ].join('\n');
}

async function main() {
    const names = (await fs.readdir(componentsDir, { withFileTypes: true }))
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
        .sort();

    const components = await Promise.all(names.map(loadComponent));
    const styles = await buildStyles({ frontendDist, guidanceSource });

    styles.warnings.forEach(warning => console.warn(`Warning: ${warning}`));

    if (verify) {
        let failures = 0;
        for (const { name, macroName, examples } of components) {
            for (const example of examples) {
                const rendered = renderCall(name, macroName, example.call);
                if (normaliseHtml(rendered) !== normaliseHtml(example.html)) {
                    failures++;
                    console.warn(`Mismatch: ${name} / ${example.name}`);
                }
            }
        }
        const total = components.reduce((sum, component) => sum + component.examples.length, 0);
        console.log(`Verified ${total - failures}/${total} examples render to the fixture HTML`);
        if (failures || styles.warnings.length) process.exitCode = 1;
    }

    if (dryRun) return;

    const componentSections = components.map(renderComponent);

    await fs.mkdir(splitDir, { recursive: true });
    await fs.writeFile(componentsFile, documentWithToc({
        title: 'GOV.UK Frontend component reference',
        preamble: componentsPreamble,
        columns: ['Component', 'Macro'],
        rows: components.map(({ name, macroName }) => [`[${titleCase(name)}](#${name})`, `\`${macroName}\``]),
        sections: componentSections
    }), 'utf8');

    await Promise.all(components.map(({ name }, index) =>
        fs.writeFile(path.join(splitDir, `${name}.md`), componentSections[index]
            .replace('[↑ Back to top](#table-of-contents)\n\n', `> ${attribution}\n\n`)
            .replace(/\]\(#([a-z-]+)\)/g, '](./$1.md)'), 'utf8')
    ));

    await fs.writeFile(stylesFile, documentWithToc({
        title: 'GOV.UK Frontend styles reference',
        preamble: stylesPreamble,
        columns: ['Topic'],
        rows: styles.sections.map(({ slug, title }) => [`[${title}](#${slug})`]),
        sections: styles.sections.map(({ markdown }) => markdown)
    }), 'utf8');

    await fs.writeFile(llmsFile, llmsTxt(components), 'utf8');

    const relative = file => path.relative(process.cwd(), file);
    console.log(`Wrote ${relative(componentsFile)}, ${components.length} files in ${relative(splitDir)}/, ${relative(stylesFile)} and llms.txt`);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
