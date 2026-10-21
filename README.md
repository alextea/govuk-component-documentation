# GOV.UK Frontend documentation for coding agents

Documentation that helps coding agents like Claude Code, Copilot and Cursor build pages with the [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) Nunjucks macros. Agents can use it to write correct macro calls, use real parameters and follow [GOV.UK Design System](https://design-system.service.gov.uk/) guidance.

Inspired by [NHS-LLM-documentation](https://github.com/edwardhorsford/NHS-LLM-documentation).

This documentation references and includes sections of the comprehensive human-focussed guidance and documentation from the [GOV.UK Design System](https://design-system.service.gov.uk/), [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [Service Manual](https://www.gov.uk/service-manual). Many thanks to the humans who have written and contributed to those resources.

## What's included

| File | What it is |
| --- | --- |
| [docs/govuk-frontend-guide.md](docs/govuk-frontend-guide.md) | **Written by hand.** Covers progressive enhancement (based on the [Service Manual](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)), Nunjucks setup, the page template, layout, typography, forms and errors, common page patterns and the Prototype Kit. |
| [docs/govuk-frontend-component-reference.md](docs/govuk-frontend-component-reference.md) | **Generated.** Every component in one file, with a line-numbered table of contents. |
| [docs/components/](docs/components/) | **Generated.** The same reference with one file per component, so agents only read what they need. |
| [docs/govuk-frontend-styles.md](docs/govuk-frontend-styles.md) | **Generated.** The Design System's [Styles](https://design-system.service.gov.uk/styles/) guidance, with colours, the type scale, spacing and every `govuk-!-` override class. |
| [llms.txt](llms.txt) | **Generated.** An index of the above, following [llmstxt.org](https://llmstxt.org). |

Each component in the reference has:

- its macro name and the line that imports it
- a link to the Design System guidance, plus the guidance text itself: when to use the component, when not to, and how it works
- a table of every parameter, including nested ones like `items[].conditional.html`, with deprecated options marked
- every public example from GOV.UK Frontend's own test fixtures, as a ready-to-use Nunjucks call
- the rendered HTML for the first example

The styles reference has one section per Design System Styles page. Where a page has values, the generator adds tables built from GOV.UK Frontend's compiled CSS and Sass settings:

- **Colour:**
  - functional colours, with their CSS custom property, palette colour, hex and legacy Sass variable
  - the full web palette, with tints and shades
  - v5 colour names and their replacements
- **Type scale:** each point's size on small screens, large screens and in print, and the classes that use it
- **Spacing:** the responsive and static spacing scales, and the override class names
- **Font override classes** and **Layout:** what each `govuk-!-` class does, including at the tablet breakpoint and in print

## Using it in your project

Copy `docs/` into your project, for example as `docs/govuk/`. Then point your agent at it.

**Claude Code**: add this to `CLAUDE.md`. **Codex and others**: add it to `AGENTS.md`. **GitHub Copilot**: add it to `.github/copilot-instructions.md`.

```markdown
## GOV.UK Frontend

This project uses GOV.UK Frontend Nunjucks macros.

- Before building or changing a page, read `docs/govuk/govuk-frontend-guide.md`.
- Before using a component, read its file in `docs/govuk/components/` (for example `docs/govuk/components/radios.md`). Use only the parameters listed there.
- Use the macros. Do not hand-write component HTML or invent parameters.
- Follow progressive enhancement. Every page and form must work without JavaScript, with server-side validation and no single-page app.
- For colours, spacing, typography and `govuk-!-` override classes, check `docs/govuk/govuk-frontend-styles.md`. Never hard-code hex colours.
```

### Optional: team conventions

These docs only cover building pages. If your team follows the [GDS Way](https://gds-way.digital.cabinet-office.gov.uk/), you can also add its git conventions to the same instructions file, so agents follow them when they commit:

```markdown
## Git conventions (GDS Way)

Follow the GDS Way on working with git: https://gds-way.digital.cabinet-office.gov.uk/standards/source-code/working-with-git.html

- Start commit messages with a summary of 50 characters or fewer. Write it in the imperative ("Add date input to start page", not "Added…"), with a leading capital and no full stop.
- Leave a blank line, then write a body wrapped at about 72 characters that explains why the change was made, not just what changed.
- A ticket link is not a substitute for a message. The message must make sense on its own.
- Keep each commit atomic: one self-contained, logical step, in a sensible order. Prefer several small commits to one commit per pull request.
- Work on a short-lived feature branch, not on `main`. Update it with `git rebase`, not a merge commit.
- Never use `git push -f`. Use `--force-with-lease`, and do not rewrite commits that are already on `main`.
```

For chat tools like Claude.ai or ChatGPT, upload the guide, the styles reference and the component files you need. Uploading the whole component reference uses more context.

## Regenerating the reference

You need Node.js 18 or later.

```bash
npm install
npm run reference
```

All the data comes from the installed `govuk-frontend` package, which ships two files for every component:

- `macro-options.json`: every parameter, with its type, whether it's required, and a description
- `fixtures.json`: the examples GOV.UK Frontend uses in its own tests, with their rendered HTML

The styles data comes from the same package:

- **Override classes, the type scale and the spacing scale:** read from the compiled `govuk-frontend.min.css`
- **Colours:** read from the CSS custom properties on `:root` and the Sass palette in `settings/`

The guidance text comes from each component's and styles page's `index.md` in [alphagov/govuk-design-system](https://github.com/alphagov/govuk-design-system). The generator:

- removes the YAML frontmatter, the template tags and the research sections, and keeps code samples intact
- makes the links absolute
- puts each generated table under the guidance heading it belongs to

`npm run reference` also checks the output, and fails if any check fails:

- It renders every generated example and compares the result with the HTML in the fixtures.
- It checks each functional colour's hex value against the palette colour it's meant to use.

Generator options (`node src/generate-reference.js ...`):

| Option | Effect |
| --- | --- |
| `--guidance` | Fetch the guidance from GitHub |
| `--guidance=/path/to/govuk-design-system` | Read the guidance from a local clone instead |
| `--all-examples` | Also include the hidden test fixtures, which are edge cases and not usually useful as examples |
| `--verify` | Check the examples against the fixture HTML |
| `--dry-run` | Don't write any files. `npm test` runs `--verify --dry-run` |

The version of `govuk-frontend` in `package.json` decides which version the reference describes. To document a different version, run `npm install govuk-frontend@<version>`, then regenerate.

## Keeping it up to date

[.github/workflows/update-reference.yml](.github/workflows/update-reference.yml) runs every Monday, and you can also run it by hand. It:

1. updates `govuk-frontend` to the latest release
2. regenerates the reference
3. opens a pull request if anything changed

For the pull request step to work, turn on **Settings → Actions → General → Allow GitHub Actions to create and approve pull requests**.

The guide is written by hand, so review it when GOV.UK Frontend releases a major version.

## Related resources

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend)
- [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/)
- [GOV.UK Service Manual](https://www.gov.uk/service-manual), including [building a robust frontend using progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)
- [The GDS Way](https://gds-way.digital.cabinet-office.gov.uk/)

## Licence

The generator code and the hand-written guide are released under the [MIT licence](LICENSE).

The generated documentation contains material from GOV.UK Frontend and the GOV.UK Design System, © Crown Copyright (Government Digital Service), released under the MIT licence. The guide and README summarise guidance from the GOV.UK Service Manual and the GDS Way. [NOTICE.md](NOTICE.md) lists what comes from where.

Contains public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

If you copy `docs/` into your own project, keep the attribution notes at the top of each file.
