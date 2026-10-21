# GOV.UK Frontend guide for coding agents

This guide covers what the component reference does not: how to set up pages, lay them out and put components together. Read it before building GOV.UK pages. Then:

- look up each component's parameters in [govuk-frontend-component-reference.md](govuk-frontend-component-reference.md) or [components/](components/)
- look up colours, the type scale, spacing and `govuk-!-` override classes in [govuk-frontend-styles.md](govuk-frontend-styles.md)

It's written for GOV.UK Frontend v6.

> Includes guidance adapted from the [GOV.UK Service Manual](https://www.gov.uk/service-manual) and the [GOV.UK Design System](https://design-system.service.gov.uk/). Contains public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

This file is maintained by hand. The component reference is generated.

## Ground rules

- Use the Nunjucks macros. Do not hand-write component HTML when a macro exists, and do not invent macro parameters. If a parameter is not in the reference, it does not exist.
- Only use `govuk-` classes that are documented here or in the references. Do not write custom CSS to restyle components.
- Never hard-code colours. In Sass, use `govuk-functional-colour("<name>")`. In CSS, use `var(--govuk-<name>-colour)`. The [styles reference](govuk-frontend-styles.md#colour) lists them.
- Prefer component options and typography classes to `govuk-!-` override classes. Use overrides sparingly, for things like spacing tweaks.
- Use `text` for plain content. Only use `html` when you need markup, and never put user input in `html`.
- Write in sentence case, in plain English. Labels, legends and buttons describe what the user needs to do, such as "What is your date of birth?" or "Save and continue".
- Ask one question per page wherever you can.
- Check the parameter table before using an option. Options marked **Deprecated** still work but should not be used in new code.

## Progressive enhancement

All government services must follow progressive enhancement: build the page so it works with HTML first, then add CSS, then JavaScript as an enhancement. JavaScript fails more often than people expect, for example because of network errors, browser extensions or corporate firewalls, and some users turn it off. When it fails, the service must still work. The reasons and details are in the Service Manual's [guidance on progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement).

When building pages:
- **Make every journey work with plain HTML.** Use real `<a href>` links and `<form method="post">` forms that the server handles with a full page load. Do not submit forms with `fetch`, and do not use `<div>` or `<span>` with click handlers in place of links and buttons.
- **Validate on the server.** Browser or JavaScript validation can be extra, but it must never be the only check. That's why forms use `novalidate`.
- **Use JavaScript only to enhance HTML that already works.** For example, an autocomplete should enhance a working `<select>`. GOV.UK Frontend's components already work this way. For example, the accordion shows every section when JavaScript does not run.
- **Do not build single-page applications.** Let the browser load each page. Single-page apps break the back button and focus handling, and they hide page changes from assistive technology.
- **Do not add a client-side framework** such as React or Vue to a service built from GOV.UK components. If part of the interface truly cannot be built with HTML and CSS, limit the framework to that part, as a separate component.
- **Do not use CSS-in-JS.** Styles must still load when JavaScript does not.
- **Look for a simpler HTML alternative before reaching for JavaScript.** For example, show a chart's data in a table, or as a pre-rendered image.

## Setting up Nunjucks

GOV.UK Frontend templates live in `node_modules/govuk-frontend/dist`. Add that folder to the Nunjucks search path, alongside your own views:

```js
import express from 'express'
import nunjucks from 'nunjucks'

const app = express()

nunjucks.configure(['node_modules/govuk-frontend/dist', 'app/views'], {
  autoescape: true,
  express: app
})

app.set('view engine', 'njk')

// Fonts and images. The CSS expects these at /assets
app.use('/assets', express.static('node_modules/govuk-frontend/dist/govuk/assets'))
// Compiled CSS and JavaScript
app.use('/stylesheets', express.static('node_modules/govuk-frontend/dist/govuk'))
app.use('/javascripts', express.static('node_modules/govuk-frontend/dist/govuk'))
```

Import each macro before you use it:

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}
```

## Page template

Extend `govuk/template.njk`. It provides the `<html>` element, the skip link, the GOV.UK header, the service navigation, a `govuk-width-container`, a `<main id="main-content">` and the footer.

```njk
{% extends "govuk/template.njk" %}

{% from "govuk/components/back-link/macro.njk" import govukBackLink %}

{% set serviceName = "Apply for a licence" %}
{% set serviceUrl = "/" %}

{% block head %}
  <link rel="stylesheet" href="/stylesheets/govuk-frontend.min.css">
{% endblock %}

{% block pageTitle %}What is your name? – Apply for a licence – GOV.UK{% endblock %}

{% block beforeContent %}
  {{ govukBackLink({ text: "Back", href: "/previous-page" }) }}
{% endblock %}

{% block content %}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Page heading</h1>
    </div>
  </div>
{% endblock %}

{% block bodyEnd %}
  <script type="module" src="/javascripts/govuk-frontend.min.js"></script>
  <script type="module">
    import { initAll } from '/javascripts/govuk-frontend.min.js'
    initAll()
  </script>
{% endblock %}
```

The template's structure, with the blocks you can override:

```
head, headIcons, pageTitle        inside <head>
bodyStart
govukSkipLink
header                            <header>, only output if it has content
  headerStart
  govukHeader                     default: govukHeader()
  govukServiceNavigation          default: service navigation if serviceName is set
  headerEnd
container                         <div class="govuk-width-container">
  containerStart
    beforeContent                 back link, breadcrumbs, phase banner
  main                            <main class="govuk-main-wrapper" id="main-content">
    content                       your page
  containerEnd
footer                            <footer>, only output if it has content
  footerStart
  govukFooter                     default: govukFooter()
  footerEnd
bodyEnd                           scripts
```

Variables you can set with `{% set %}`:
- **Content:** `serviceName`, `serviceUrl`
- **Classes:** `htmlClasses`, `bodyClasses`, `headerClasses`, `containerClasses`, `mainClasses`, `footerClasses`
- **Attributes:** `bodyAttributes`, `headerAttributes`, `containerAttributes`, `mainAttributes`, `footerAttributes`
- **Language:** `htmlLang`, `mainLang`, `pageTitleLang`
- **Assets and metadata:** `assetPath`, `assetUrl`, `opengraphImageUrl`, `themeColor`, `cspNonce`

Things to know about the template:
- Put the back link and breadcrumbs in `beforeContent`, not `content`. They need to sit before `<main>` so the skip link jumps past them.
- Setting `serviceName` (and optionally `serviceUrl`) adds the service navigation under the header. To add navigation links, override the `govukServiceNavigation` block and call `govukServiceNavigation` yourself with `navigation` items. The header component no longer has a `serviceName` option.
- To change the header or footer, override the `govukHeader` or `govukFooter` block rather than the outer `header` or `footer` block.
- Interactive components only work once `initAll()` has run. These include accordion, character count, checkboxes and radios with conditional reveals, error summary, header, password input, service navigation and tabs.
- Page titles follow the pattern "Page heading – Service name – GOV.UK". When a page has errors, start the title with "Error: ".

## Layout

The template already wraps `content` in `govuk-width-container` and `govuk-main-wrapper`, so don't add them again.

Use the grid for columns:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <!-- main content -->
  </div>
  <div class="govuk-grid-column-one-third">
    <!-- related links -->
  </div>
</div>
```

- Column widths are `full`, `three-quarters`, `two-thirds`, `one-half`, `one-third` and `one-quarter`, for example `govuk-grid-column-one-half`.
- Add `-from-desktop` to keep a column full width on small screens until desktop size, for example `govuk-grid-column-two-thirds-from-desktop`.
- Put forms and long text in `govuk-grid-column-two-thirds` so lines stay readable.
- Wrap buttons that sit side by side, such as a primary and a secondary button, or a button and a cancel link, in `<div class="govuk-button-group">`.

## Typography

Use GOV.UK classes on plain HTML elements:

| Element | Classes |
| --- | --- |
| Headings | `govuk-heading-xl`, `govuk-heading-l`, `govuk-heading-m`, `govuk-heading-s` |
| Caption above a heading | `govuk-caption-xl`, `govuk-caption-l`, `govuk-caption-m` |
| Paragraphs | `govuk-body` (default), `govuk-body-l`, `govuk-body-lead`, `govuk-body-s` |
| Links | `govuk-link`, plus modifiers `--no-visited-state`, `--muted`, `--text-colour`, `--inverse`, `--no-underline` |
| Lists | `govuk-list`, plus `govuk-list--bullet`, `govuk-list--number` or `govuk-list--spaced` |
| Section break | `<hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible">` (sizes `--m`, `--l`, `--xl`) |
| Screen reader only text | `govuk-visually-hidden` |

Rules:
- Every page has exactly one `<h1>`. On a question page it is usually a `govuk-heading-l`.
- Every element needs its class: write `<p class="govuk-body">`, not a bare `<p>`. GOV.UK Frontend does not style bare elements.

The [styles reference](govuk-frontend-styles.md) has the sizes behind each class, the full type scale, the spacing scale, and the `govuk-!-` override classes for font size, weight, spacing, width and display.

## Forms

### A question page

When a page asks a single question, make the label or legend the page heading. Don't add a separate `<h1>`:

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/button/macro.njk" import govukButton %}

<form method="post" novalidate>
  {{ govukInput({
    label: {
      text: "What is your full name?",
      classes: "govuk-label--l",
      isPageHeading: true
    },
    id: "full-name",
    name: "fullName",
    autocomplete: "name",
    spellcheck: false
  }) }}

  {{ govukButton({ text: "Continue" }) }}
</form>
```

For radios, checkboxes and date input, use `fieldset.legend` instead of a label:

```njk
fieldset: {
  legend: {
    text: "Where do you live?",
    isPageHeading: true,
    classes: "govuk-fieldset__legend--l"
  }
}
```

- Add `novalidate` to the `<form>` so browser validation messages don't appear. Validate on the server instead.
- Use the macro's own `hint` option for hint text, not a paragraph.
- Give a text input an appropriate `autocomplete` value and `inputmode` where they apply. Set a `type` such as `email` or `tel` for those fields.
- Size inputs to the answer they expect with `govuk-input--width-2`, `-3`, `-4`, `-5`, `-10`, `-20` or `-30`, or the fluid `govuk-!-width-one-half` and similar classes.
- Use `govukDateInput` for dates people already know, like their date of birth. Do not use a date picker.

### Errors

When validation fails, re-render the same page with:

1. "Error: " at the start of the `<title>`.
2. A `govukErrorSummary` as the first thing in `content`, above the `<h1>`. Each entry in `errorList` has an `href` that points at the `id` of the field it's about.
3. An `errorMessage` on each field that has an error. Use the same text as in the summary.
4. The values the user entered, so they can correct them.

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    { text: "Enter your full name", href: "#full-name" }
  ]
}) }}

{{ govukInput({
  label: { text: "What is your full name?", classes: "govuk-label--l", isPageHeading: true },
  id: "full-name",
  name: "fullName",
  value: values.fullName,
  errorMessage: { text: "Enter your full name" } if errors.fullName
}) }}
```

How to target the `href`:
- For radios and checkboxes, link to the first item's `id`. By default this is the `idPrefix`, or the `name` if no `idPrefix` is set.
- For a date input, link to the first part that has an error, such as `#dob-day`.

Write error messages that say what to do, such as "Enter your full name" or "Select if you have a passport". Do not write "Invalid input" or "This field is required".

## Common page patterns

| Page | Components |
| --- | --- |
| Start page | `govuk-heading-xl`, body text, a start button (`govukButton` with `isStartButton: true` and `href`) |
| Question page | `govukBackLink` in `beforeContent`, a single form component with its label or legend as the page heading, `govukButton` "Continue" |
| Check your answers | `govuk-heading-l`, a `govukSummaryList` with a "Change" link in `actions` on each row, then a "Accept and send" button |
| Confirmation | `govukPanel` with the title and reference number, then body text saying what happens next |
| Task list | `govukTaskList` with a `govukTag` showing each task's status |
| Interruption or warning | `govukWarningText`, `govukInsetText` or `govukNotificationBanner`. Use the banner sparingly. |

Choosing between similar components:
- **Radios** let the user choose one option, **checkboxes** choose one or more, and a **select** is a last resort.
- A **single checkbox** is for confirming something, such as "I agree".
- Use **conditional reveals** (`items[].conditional.html`) only for a short follow-up question. Use a separate page for anything longer.
- **Details** hides a small amount of optional help. **Accordion** and **tabs** are for longer content, and only when research supports them.

Patterns not covered here are on the [GOV.UK Design System patterns pages](https://design-system.service.gov.uk/patterns/). These include addresses, names, dates, email addresses, phone numbers, "add another" and question pages.

## GOV.UK Prototype Kit

If the project uses the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk) (v13 or later):

- Pages go in `app/views/` as `.html` files and extend `layouts/main.html`:
  ```njk
  {% extends "layouts/main.html" %}
  {% block pageTitle %}Question – {{ serviceName }} – GOV.UK Prototype Kit{% endblock %}
  {% block beforeContent %}{{ govukBackLink({ text: "Back", href: "javascript:window.history.back()" }) }}{% endblock %}
  {% block content %}...{% endblock %}
  ```
- The GOV.UK Frontend macros are already imported, so leave out the `{% from %}` lines.
- Answers submitted with a form's `name` are saved in the session automatically. Read them back with `data['fieldName']`.
- To show saved answers again, set `value: data['fullName']` on inputs, `value: data['where-do-you-live']` on radios and `values: data['nationality']` on checkboxes.
- Write simple journeys as a form whose `action` is the next page. For branching, add a route in `app/routes.js`:
  ```js
  router.post('/where-do-you-live-answer', function (req, res) {
    if (req.session.data['where-do-you-live'] === 'england') {
      res.redirect('/england')
    } else {
      res.redirect('/ineligible')
    }
  })
  ```
- Prototypes don't need real validation. Only add error states when the user asks for them.
