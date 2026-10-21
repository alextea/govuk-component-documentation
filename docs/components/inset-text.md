## Inset text

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukInsetText` · **Import:** `{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}`

**Design System guidance:** https://design-system.service.gov.uk/components/inset-text/

### Guidance

#### When to use this component

Use the inset text component to differentiate a block of text from the content that surrounds it, for example:

- quotes
- examples
- additional information about the page

#### When not to use this component

Some users do not notice inset text if it’s used on complex pages or near to other visually prominent elements. For this reason, avoid using inset text as a way of highlighting very important information that users need to see.

If you need to draw attention to very important content, like legal information, use the [Warning text component](https://design-system.service.gov.uk/components/warning-text/) instead.

#### How it works

Use inset text very sparingly - it’s less effective if it’s overused.

There are 2 ways to use the inset text component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire inset text component in a `call` block. |
| `id` | string | No | ID attribute to add to the inset text container. |
| `classes` | string | No | Classes to add to the inset text container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the inset text container. |

### Examples

#### Default

```njk
{{ govukInsetText({
  text: "It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application."
}) }}
```

Renders as:

```html
<div class="govuk-inset-text">
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
</div>
```

#### With html

```njk
{{ govukInsetText({
  html: "<p class=\"govuk-body\">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>\n<div class=\"govuk-warning-text\">\n  <span class=\"govuk-warning-text__icon\" aria-hidden=\"true\">!</span>\n  <strong class=\"govuk-warning-text__text\">\n    <span class=\"govuk-warning-text__assistive\">Warning</span>\n    You can be fined up to £5,000 if you don’t register.\n  </strong>\n</div>\n<p class=\"govuk-body\">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>\n"
}) }}
```

---
