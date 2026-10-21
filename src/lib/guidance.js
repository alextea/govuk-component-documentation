// Usage guidance from the GOV.UK Design System website's source, converted into
// plain markdown that reads well without the site's Nunjucks rendering.

import fs from 'fs/promises';
import path from 'path';

export const designSystemSite = 'https://design-system.service.gov.uk';
const designSystemRaw = 'https://raw.githubusercontent.com/alphagov/govuk-design-system/main/src';

const skippedSections = /^(research on this component|next steps|help improve|known issues)/i;

// `source` is 'github' or the path to a local govuk-design-system clone.
// `section` is the site section, such as 'components' or 'styles'.
export async function loadGuidance(source, section, slug, { headingOffset = 2 } = {}) {
    try {
        const markdown = source === 'github'
            ? await fetch(`${designSystemRaw}/${section}/${slug}/index.md`).then(res => (res.ok ? res.text() : null))
            : await fs.readFile(path.join(source, 'src', section, slug, 'index.md'), 'utf8');
        return markdown ? cleanGuidance(markdown, `${designSystemSite}/${section}/${slug}/`, headingOffset) : null;
    } catch {
        return null;
    }
}

const count = (text, char) => text.split(char).length - 1;

export function cleanGuidance(markdown, pageUrl, headingOffset) {
    const lines = markdown.replace(/^---\n[\s\S]*?\n---\n/, '').split('\n');
    const kept = [];
    let inFence = false;
    let skipping = false;
    let macroDepth = 0;

    for (const line of lines) {
        if (/^\s*```/.test(line)) {
            inFence = !inFence;
            if (!skipping) kept.push(line);
            continue;
        }

        if (inFence) {
            // Code samples wrap Nunjucks in {% raw %} so the site shows it rather than running it
            if (!skipping && !/^\s*\{%-?\s*(end)?raw\s*-?%\}\s*$/.test(line)) kept.push(line);
            continue;
        }

        // {{ macro(...) }} calls render live examples and tables on the site, and can span many lines
        if (macroDepth > 0 || /^\s*\{\{/.test(line)) {
            macroDepth += count(line, '{') - count(line, '}');
            continue;
        }

        // The page template's option lists are built with these two macros
        const optionList = line.match(/\{%-?\s*call\(options\)\s*nunjucksOptions\("(.*)"\)\s*-?%\}/);
        const option = line.match(/\{%-?\s*call\s+addNunjucksOption\(options,\s*'(\w+)',\s*'(\w+)'\)\s*-?%\}/);
        if (optionList) {
            if (!skipping) kept.push('', `**${optionList[1]}**`, '');
            continue;
        }
        if (option) {
            if (!skipping) kept.push(`- \`${option[1]}\` (${option[2].toLowerCase()}):`);
            continue;
        }

        // Any other template tag on its own line ({% from %}, {% include %}, {% call %}...)
        if (/^\s*\{%[\s\S]*%\}\s*$/.test(line)) continue;

        const heading = line.match(/^(#{2,})\s+(.*)$/);
        if (heading && heading[1].length === 2) skipping = skippedSections.test(heading[2]);
        if (skipping) continue;

        if (heading) {
            kept.push(`${'#'.repeat(Math.min(heading[1].length + headingOffset, 6))} ${heading[2]}`);
            continue;
        }

        kept.push(line
            .replace(/\]\((\/[^)]*)\)/g, `](${designSystemSite}$1)`) // site-relative links
            .replace(/\]\((#[^)]*)\)/g, `](${pageUrl}$1)`)); // in-page anchors
    }

    return kept.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
