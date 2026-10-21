## Warning text

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukWarningText` · **Import:** `{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}`

**Design System guidance:** https://design-system.service.gov.uk/components/warning-text/

### Guidance

#### When to use this component

Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might&nbsp;take.

#### How it works

There are 2 ways to use the warning text component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

You might need to rewrite the hidden text (‘Warning’ in the example) to make it appropriate for your context.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the warning text component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the warning text component. If `html` is provided, the `text` option will be ignored. |
| `iconFallbackText` | string | No | The fallback text for the icon. Defaults to `"Warning"`. |
| `classes` | string | No | Classes to add to the warning text. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the warning text. |

### Examples

#### Default

```njk
{{ govukWarningText({
  text: "You can be fined up to £5,000 if you don’t register.",
  iconFallbackText: "Warning"
}) }}
```

Renders as:

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You can be fined up to £5,000 if you don’t register.
  </strong>
</div>
```

#### Multiple lines

```njk
{{ govukWarningText({
  text: "If you are not covered by this License), You must: (a) comply with the terms stated above for the purpose of this license. It explains, for example, the production of a Source form, including but not limited to, the implied warranties or conditions of this License, without any additional file created by such Respondent to you under Sections 2.1 and 2.2 above. Larger Works. You may choose to distribute such a notice and a brief idea of what it does.",
  iconFallbackText: "Warning"
}) }}
```

---
