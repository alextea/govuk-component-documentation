## Details

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukDetails` · **Import:** `{% from "govuk/components/details/macro.njk" import govukDetails %}`

**Design System guidance:** https://design-system.service.gov.uk/components/details/

### Guidance

Make a page easier to scan by letting users reveal more detailed information only if they need it.

#### When to use this component

Use the details component to make a page easier to scan when it contains information that only some users will need.

#### When not to use this component

Do not use the details component to hide information that the majority of your users will need.

#### Decide between using details, accordions and tabs

The Details component, [Accordion component](https://design-system.service.gov.uk/components/accordion/), and [Tabs component](https://design-system.service.gov.uk/components/tabs/) all hide sections of content which a user can choose to reveal.

Use the details component instead of tabs or an accordion if you only have 1 section of content.

The details component is less visually prominent than tabs and accordions, so tends to work better for content which is not as important to users.

#### How it works

The details component is a short link that shows more detailed help text when a user clicks on it.

There are 2 ways to use the details component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Write clear link text

Make the link text short and descriptive so users can quickly work out if they need to click on it.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `summaryText` | string | Yes | If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `summaryHtml` | string | Yes | If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block. |
| `id` | string | No | ID to add to the details element. |
| `open` | boolean | No | If `true`, details element will be expanded. |
| `classes` | string | No | Classes to add to the `<details>` element. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the `<details>` element. |

### Examples

#### Default

```njk
{{ govukDetails({
  summaryText: "Help with nationality",
  text: "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post."
}) }}
```

Renders as:

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>
```

#### Expanded

```njk
{{ govukDetails({
  id: "help-with-nationality",
  summaryText: "Help with nationality",
  text: "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.",
  open: true
}) }}
```

#### With html

```njk
{{ govukDetails({
  summaryText: "Where to find your National Insurance Number",
  html: "Your National Insurance number can be found on\n<ul>\n  <li>your National Insurance card</li>\n  <li>your payslip</li>\n  <li>P60</li>\n  <li>benefits information</li>\n  <li>tax return</li>\n</ul>\n"
}) }}
```

---
