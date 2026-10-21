## Skip link

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukSkipLink` · **Import:** `{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}`

**Design System guidance:** https://design-system.service.gov.uk/components/skip-link/

### Guidance

Use the skip link component to help keyboard-only users skip to the main content on a page.

If you use the page template, you'll also get the skip link without having to add it, as it's included by default. However, if you want to customise the default skip link, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

#### When to use this component

All GOV.UK pages must include a skip link. Usually, you should place the skip link immediately after the opening `<body>` tag. However, if you're using a [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/), place the skip link immediately after the cookie banner.

Some automated accessibility testing tools may warn that the skip link element is not inside a landmark. This warning does not apply to skip links, so you can ignore it. Do not wrap the skip link in a `<nav>` region, or move it inside the header.

#### How it works

Some people use the tab key on their keyboard to navigate through the links and form elements on a web page.

Including the skip link component gives users the option to bypass the top-level navigation links and jump to the main content on a page.

The skip link component is visually hidden until a keyboard press activates it.

There are 2 ways to use the skip link component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the skip link component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the skip link component. If `html` is provided, the `text` option will be ignored. |
| `href` | string | No | The value of the skip link’s `href` attribute. Defaults to `"#content"` if you do not provide a value. |
| `classes` | string | No | Classes to add to the skip link. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the skip link. |

### Examples

#### Default

```njk
{{ govukSkipLink({
  text: "Skip to main content",
  href: "#test-target-element"
}) }}
```

Renders as:

```html
<a href="#test-target-element" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
```

#### With focus

Simulate triggering the :focus CSS pseudo-class, not available in the production build.

```njk
{{ govukSkipLink({
  classes: ":focus",
  text: "Skip to main content",
  href: "#test-target-element"
}) }}
```

---
