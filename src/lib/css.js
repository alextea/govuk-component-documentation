// Minimal parser for GOV.UK Frontend's compiled (minified) CSS. It only needs to
// understand plain rules, nested @media blocks and other at-rules to skip.

const tabletQuery = /min-width:\s*40\.0625(em|rem)/;

// Index of the brace that closes the one at `open`, skipping quoted strings
function closingBrace(css, open) {
    let depth = 0;
    for (let i = open; i < css.length; i++) {
        const char = css[i];
        if (char === '"' || char === "'") {
            i = css.indexOf(char, i + 1);
        } else if (char === '{') {
            depth++;
        } else if (char === '}' && --depth === 0) {
            return i;
        }
    }
    return css.length;
}

export function parseCss(css) {
    const rules = [];
    const source = css.replace(/\/\*[\s\S]*?\*\//g, '');

    (function parseBlock(start, end, media) {
        let i = start;
        while (i < end) {
            const open = source.indexOf('{', i);
            if (open === -1 || open >= end) break;
            // Drop statements like @charset "UTF-8"; that precede the rule
            const prelude = source.slice(i, open).split(';').pop().trim();
            const close = closingBrace(source, open);

            if (prelude.startsWith('@media')) {
                parseBlock(open + 1, close, prelude.slice(6).trim());
            } else if (!prelude.startsWith('@')) {
                rules.push({
                    media,
                    selectors: prelude.split(',').map(selector => selector.replace(/\\/g, '').trim()),
                    declarations: parseDeclarations(source.slice(open + 1, close))
                });
            }
            i = close + 1;
        }
    })(0, source.length, null);

    return rules;
}

function parseDeclarations(block) {
    return block.split(';').filter(Boolean).map(declaration => {
        const colon = declaration.indexOf(':');
        return [
            declaration.slice(0, colon).trim(),
            declaration.slice(colon + 1).replace(/\s*!important/, '').trim()
        ];
    });
}

// Which breakpoint a rule applies at: 'base', 'tablet', 'print', or null for anything else
export function breakpoint(media) {
    if (!media) return 'base';
    if (media === 'print') return 'print';
    if (tabletQuery.test(media) && !media.includes('max-width')) return 'tablet';
    return null;
}

// Declarations for an exact selector, grouped by breakpoint: { base: {prop: value}, tablet: {...}, print: {...} }
export function stylesFor(rules, selector) {
    const result = {};
    for (const rule of rules) {
        if (!rule.selectors.includes(selector)) continue;
        const point = breakpoint(rule.media);
        if (!point) continue;
        result[point] = Object.assign(result[point] || {}, Object.fromEntries(rule.declarations));
    }
    return result;
}

// Every class selector in the stylesheet that starts with `prefix`, in source order
export function classesWithPrefix(rules, prefix) {
    const found = new Set();
    for (const rule of rules) {
        for (const selector of rule.selectors) {
            const match = selector.match(/^\.([\w!-]+)$/);
            if (match && match[1].startsWith(prefix)) found.add(match[1]);
        }
    }
    return [...found];
}

// `1.3125rem` → 21, `19px` → 19. Anything else is returned unchanged
export function toPixels(value, rootFontSize = 16) {
    const match = /^([\d.]+)(rem|px)$/.exec(value || '');
    if (!match) return value;
    const pixels = match[2] === 'rem' ? parseFloat(match[1]) * rootFontSize : parseFloat(match[1]);
    return Math.round(pixels * 100) / 100;
}

// A font-size and line-height pair as `21px / 25px`
export function typeSize(styles) {
    if (!styles || !styles['font-size']) return null;
    const size = toPixels(styles['font-size']);
    const lineHeight = styles['line-height'];
    if (typeof size !== 'number') return `${styles['font-size']} / ${lineHeight}`;
    const lineHeightPixels = /^[\d.]+$/.test(lineHeight) ? Math.round(size * parseFloat(lineHeight)) : toPixels(lineHeight);
    return `${size}px / ${lineHeightPixels}px`;
}
