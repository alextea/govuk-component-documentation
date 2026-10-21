// Builds the styles reference: colours, the type scale, spacing and the `govuk-!-`
// override classes, all read from the installed govuk-frontend package so the
// values match the CSS, alongside guidance from the Design System's Styles pages.

import fs from 'fs/promises';
import path from 'path';
import { parseCss, stylesFor, classesWithPrefix, typeSize } from './lib/css.js';
import { loadGuidance, designSystemSite } from './lib/guidance.js';

// The Design System's Styles pages, in its navigation order
const pages = [
    ['colour', 'Colour'],
    ['font-override-classes', 'Font override classes'],
    ['headings', 'Headings'],
    ['images', 'Images'],
    ['layout', 'Layout'],
    ['links', 'Links'],
    ['lists', 'Lists'],
    ['page-template', 'Page template'],
    ['paragraphs', 'Paragraphs'],
    ['section-break', 'Section break'],
    ['spacing', 'Spacing'],
    ['type-scale', 'Type scale'],
    ['typeface', 'Typeface']
];

// Typography classes to map onto the type scale
const typographyClasses = [
    'govuk-heading-xl', 'govuk-heading-l', 'govuk-heading-m', 'govuk-heading-s',
    'govuk-caption-xl', 'govuk-caption-l', 'govuk-caption-m',
    'govuk-body-lead', 'govuk-body-l', 'govuk-body', 'govuk-body-m', 'govuk-body-s'
];

const table = (head, rows) => [
    `| ${head.join(' | ')} |`,
    `| ${head.map(() => '---').join(' | ')} |`,
    ...rows.map(row => `| ${row.join(' | ')} |`)
].join('\n');

const code = text => `\`${text}\``;
const css = declarations => Object.entries(declarations || {}).map(([prop, value]) => `${prop}: ${value}`).join('; ');

// ---------------------------------------------------------------------------
// Colours
// ---------------------------------------------------------------------------

// Reads a `"name": (...)` or `"name": #hex` Sass map, keeping `//` comments above each entry
function sassMapEntries(source) {
    const entries = [];
    const pattern = /((?:[ \t]*\/\/[^\n]*\n)*)[ \t]*"([\w-]+)":\s*(\([^()]*\)|#[0-9a-f]+)/gi;
    for (const [, comments, key, value] of source.matchAll(pattern)) {
        entries.push({
            key,
            value,
            comment: comments.split('\n').map(line => line.replace(/^\s*\/\/\s?/, '').trim()).filter(Boolean).join(' ')
        });
    }
    return entries;
}

function sassMap(source, variable) {
    const start = source.indexOf(`${variable}: (`);
    return start === -1 ? '' : source.slice(start, source.indexOf('\n);', start));
}

async function loadColours(settingsDir, rules) {
    const read = file => fs.readFile(path.join(settingsDir, file), 'utf8');
    const [paletteSource, functionalSource, legacySource] = await Promise.all([
        read('_colours-palette--internal.scss'),
        read('_colours-functional.scss'),
        read('_colours-legacy-functional.scss').catch(() => '')
    ]);

    // The palette is a map of colour → (variant → hex), apart from white which is a single hex
    const paletteMap = sassMap(paletteSource, '$govuk-palette');
    const palette = {};
    for (const [, colour, body] of paletteMap.matchAll(/"([\w-]+)":\s*(\([^()]*\)|#[0-9a-f]+)/gi)) {
        if (body.startsWith('#')) {
            palette[colour] = { primary: body };
            continue;
        }
        palette[colour] = Object.fromEntries([...body.matchAll(/"([\w-]+)":\s*(#[0-9a-f]+)/gi)].map(([, variant, hex]) => [variant, hex]));
    }

    const preBrand = [...sassMap(paletteSource, '$govuk-pre-brand-colours').matchAll(/"([\w-]+)":\s*"([\w-]+)"\s+"([\w-]+)"/g)]
        .map(([, legacy, colour, variant]) => ({ legacy, colour, variant }));

    // Compiled hex values come from the CSS custom properties on :root
    const rootProperties = stylesFor(rules, ':root').base || {};

    const functional = sassMapEntries(sassMap(functionalSource, '$govuk-default-functional-colours')).map(({ key, value, comment }) => {
        const name = value.match(/name:\s*"([\w-]+)"/)?.[1];
        const variant = value.match(/variant:\s*"([\w-]+)"/)?.[1] || 'primary';
        const legacyVariable = new RegExp(`\\$govuk-${key}-colour:`).test(legacySource) ? `$govuk-${key}-colour` : null;
        return {
            key,
            comment,
            paletteColour: name ? { name, variant } : null,
            hex: rootProperties[`--govuk-${key}-colour`] || (value.startsWith('#') ? value : null),
            legacyVariable
        };
    });

    // Cross-check: each functional colour's compiled hex should be its palette colour
    const warnings = functional
        .filter(({ paletteColour, hex }) => paletteColour && hex)
        .filter(({ paletteColour: { name, variant }, hex }) => !sameHex(palette[name]?.[variant], hex))
        .map(({ key, hex, paletteColour: { name, variant } }) =>
            `Functional colour "${key}" is ${hex} in the CSS but ${name} ${variant} is ${palette[name]?.[variant]} in the palette`);

    return { palette, preBrand, functional, warnings };
}

// #fff and #ffffff are the same colour
function sameHex(a, b) {
    const expand = hex => (hex || '').toLowerCase().replace(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/, '#$1$1$2$2$3$3');
    return expand(a) === expand(b);
}

// Each generated table is a "part". `match` is the guidance subsection it belongs at the end of.
// `guidanceCovers` parts are left out when that subsection exists.
const part = (heading, body, { match = heading, guidanceCovers = false } = {}) => ({ heading, match, body, guidanceCovers });

function colourParts({ palette, preBrand, functional }) {
    const variantLabel = (name, variant) => (variant === 'primary' ? code(name) : `${code(name)} ${code(variant)}`);
    const sassCall = (name, variant) => (variant === 'primary'
        ? `govuk-colour("${name}")`
        : `govuk-colour("${name}", $variant: "${variant}")`);

    const variants = [...new Set(Object.values(palette).flatMap(Object.keys))];

    return [
        part('Functional colours', [
            'In Sass, use `govuk-functional-colour("<name>")`. In plain CSS, use the custom property, which GOV.UK Frontend defines on `:root`. Do not copy the hex values into your code.',
            '',
            table(
            ['Name', 'CSS custom property', 'Palette colour', 'Hex', 'Legacy Sass variable', 'Notes'],
            functional
                .filter(({ key }) => key !== 'print-text')
                .map(({ key, paletteColour, hex, legacyVariable, comment }) => [
                    code(key),
                    code(`var(--govuk-${key}-colour)`),
                    paletteColour ? variantLabel(paletteColour.name, paletteColour.variant) : '',
                    hex ? code(hex) : '',
                    legacyVariable ? code(legacyVariable) : '',
                    comment.replace(/\|/g, '\\|')
                ])
            )
        ].join('\n')),

        part('Web palette', [
            'Use the palette for supporting elements like illustrations, or custom components where no functional colour fits. In Sass, use `govuk-colour("<colour>")` for the primary variant, or `govuk-colour("<colour>", $variant: "<variant>")`, for example `' + sassCall('blue', 'tint-25') + '`.',
            '',
            table(
                ['Colour', ...variants.map(code)],
                Object.entries(palette).map(([name, shades]) => [code(name), ...variants.map(variant => (shades[variant] ? code(shades[variant]) : ''))])
            )
        ].join('\n'), { match: 'GOV.UK web palette' }),

        ...(preBrand.length ? [part('Colour names from earlier versions', [
            'GOV.UK Frontend v5 and earlier used these colour names. If you\'re updating older code, replace them with the palette colour shown.',
            '',
            table(['Old name', 'Use instead'], preBrand.map(({ legacy, colour, variant }) => [code(legacy), code(sassCall(colour, variant))]))
        ].join('\n'))] : []),

        part('Organisation colours',
            'Brand colours for government departments are available with `govuk-organisation-colour("<organisation>")`. See [`_colours-organisations.scss`](https://github.com/alphagov/govuk-frontend/blob/main/packages/govuk-frontend/src/govuk/settings/_colours-organisations.scss) for the list.',
            { guidanceCovers: true })
    ];
}

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

function typeScale(rules) {
    const points = classesWithPrefix(rules, 'govuk-!-font-size-').map(name => {
        const styles = stylesFor(rules, `.${name}`);
        return {
            point: name.replace('govuk-!-font-size-', ''),
            className: name,
            small: typeSize(styles.base),
            large: typeSize(styles.tablet) || typeSize(styles.base),
            print: typeSize(styles.print)
        };
    });

    const classes = typographyClasses.map(className => {
        const styles = stylesFor(rules, `.${className}`);
        const small = typeSize(styles.base);
        const large = typeSize(styles.tablet) || small;
        const point = points.find(candidate => candidate.small === small && candidate.large === large);
        return { className, small, large, weight: styles.base?.['font-weight'] === '700' ? 'Bold' : 'Regular', point: point?.point };
    }).filter(({ small }) => small);

    return { points, classes };
}

function typeScaleParts({ points, classes }) {
    return [
        part('Type scale values', [
            'Sizes are font size / line height. "Large screens" means the tablet breakpoint (640px) and wider. GOV.UK Frontend outputs these in `rem`, shown here in pixels.',
            '',
            table(
                ['Point', 'Small screens', 'Large screens', 'Print', 'Used by'],
                points.map(({ point, small, large, print }) => [
                    code(point),
                    small,
                    large,
                    print || '',
                    classes.filter(item => item.point === point).map(item => code(item.className)).join(', ')
                ])
            )
        ].join('\n'), { match: 'Responsive behaviour' }),

        part('Typography classes', [
            'Use these classes on headings, captions and paragraphs. In Sass, use `@include govuk-font($size: <point>)` for a point on the scale, with `$weight: bold` if needed.',
            '',
            table(
                ['Class', 'Point', 'Small screens', 'Large screens', 'Weight'],
                classes.map(({ className, point, small, large, weight }) => [code(className), point ? code(point) : '', small, large, weight])
            )
        ].join('\n'))
    ];
}

// Classes that set a fixed set of declarations, such as `govuk-!-font-weight-bold`
function overrideTable(rules, names) {
    return table(
        ['Class', 'CSS'],
        names.map(name => {
            const { base, tablet, print } = stylesFor(rules, `.${name}`);
            const parts = [
                base && css(base),
                tablet && `from tablet: ${css(tablet)}`,
                print && `when printed: ${css(print)}`
            ].filter(Boolean);
            return [code(name), parts.map(code).join(', ')];
        })
    );
}

function fontOverrideParts(rules, { points }) {
    return [
        part('Font size', table(
            ['Class', 'Small screens', 'Large screens'],
            points.map(({ className, small, large }) => [code(className), small, large])
        )),
        part('Font weight', overrideTable(rules, classesWithPrefix(rules, 'govuk-!-font-weight-'))),
        part('Tabular numbers', overrideTable(rules, classesWithPrefix(rules, 'govuk-!-font-tabular-numbers'))),
        part('Breaking up long words', overrideTable(rules, classesWithPrefix(rules, 'govuk-!-text-break-word'))),
        part('Text alignment', overrideTable(rules, classesWithPrefix(rules, 'govuk-!-text-align-')))
    ];
}

function layoutParts(rules) {
    return [
        part('Width override classes', overrideTable(rules, classesWithPrefix(rules, 'govuk-!-width-'))),
        part('Override how elements display', overrideTable(rules, classesWithPrefix(rules, 'govuk-!-display-')))
    ];
}

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------

function spacingParts(rules) {
    const scale = classesWithPrefix(rules, 'govuk-!-margin-')
        .filter(name => /^govuk-!-margin-\d+$/.test(name))
        .map(name => {
            const point = name.replace('govuk-!-margin-', '');
            const responsive = stylesFor(rules, `.${name}`);
            const fixed = stylesFor(rules, `.govuk-!-static-margin-${point}`);
            return {
                point,
                small: responsive.base?.margin,
                large: responsive.tablet?.margin || responsive.base?.margin,
                fixed: fixed.base?.margin
            };
        });

    const directions = ['', '-top', '-right', '-bottom', '-left'];

    return [
        part('Spacing scale values', [
            'Responsive spacing changes at the tablet breakpoint (640px). Static spacing is the same at every screen size.',
            '',
            table(
                ['Point', 'Responsive: small screens', 'Responsive: large screens', 'Static'],
                scale.map(({ point, small, large, fixed }) => [code(point), small, large, fixed || ''])
            ),
            '',
            'In Sass, use `govuk-spacing(<point>)` for a static value, or `@include govuk-responsive-margin(<point>, "bottom")` and `@include govuk-responsive-padding(<point>)`.'
        ].join('\n'), { match: 'Static spacing' }),

        part('Spacing override classes', [
            'Replace `<point>` with a point from the scale, for example `govuk-!-margin-bottom-6`.',
            '',
            table(
                ['Responsive', 'Static'],
                ['margin', 'padding'].flatMap(property => directions.map(direction => [
                    code(`govuk-!-${property}${direction}-<point>`),
                    code(`govuk-!-static-${property}${direction}-<point>`)
                ]))
            )
        ].join('\n'), { match: 'Overriding spacing' })
    ];
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

// Put each part at the end of its matching `###` guidance subsection, or append it under its own heading
function placeParts(guidance, parts) {
    const lines = guidance ? guidance.split('\n') : [];
    const appended = [];

    for (const { heading, match, body, guidanceCovers } of parts) {
        const start = lines.findIndex(line => line.startsWith('### ') && line.slice(4).trim().toLowerCase() === match.toLowerCase());
        if (start === -1) {
            appended.push(`### ${heading}`, '', body, '');
            continue;
        }
        if (guidanceCovers) continue;
        const next = lines.findIndex((line, index) => index > start && /^#{2,3} /.test(line));
        lines.splice(next === -1 ? lines.length : next, 0, '', body, '');
    }

    return [...lines, '', ...appended].join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

export async function buildStyles({ frontendDist, guidanceSource }) {
    const govukDir = path.join(frontendDist, 'govuk');
    const rules = parseCss(await fs.readFile(path.join(govukDir, 'govuk-frontend.min.css'), 'utf8'));
    const colours = await loadColours(path.join(govukDir, 'settings'), rules);
    const scale = typeScale(rules);

    const generated = {
        'colour': colourParts(colours),
        'font-override-classes': fontOverrideParts(rules, scale),
        'layout': layoutParts(rules),
        'spacing': spacingParts(rules),
        'type-scale': typeScaleParts(scale)
    };

    const sections = [];
    for (const [slug, title] of pages) {
        const guidance = guidanceSource ? await loadGuidance(guidanceSource, 'styles', slug, { headingOffset: 1 }) : null;
        if (!guidance && !generated[slug]) continue;
        sections.push({
            slug,
            title,
            markdown: [
                `## ${title}`,
                '',
                '[↑ Back to top](#table-of-contents)',
                '',
                `**Design System guidance:** ${designSystemSite}/styles/${slug}/`,
                '',
                placeParts(guidance, generated[slug] || []),
                '',
                '---',
                ''
            ].join('\n')
        });
    }

    return { sections, warnings: colours.warnings };
}
