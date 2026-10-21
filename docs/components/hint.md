## Hint

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukHint` · **Import:** `{% from "govuk/components/hint/macro.njk" import govukHint %}`

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `id` | string | No | Optional ID attribute to add to the hint span tag. |
| `classes` | string | No | Classes to add to the hint span tag. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the hint span tag. |

### Examples

#### Default

```njk
{{ govukHint({
  text: "It's on your National Insurance card, benefit letter, payslip or P60.\nFor example, 'QQ 12 34 56 C'.\n"
}) }}
```

Renders as:

```html
<div class="govuk-hint">
  It&#39;s on your National Insurance card, benefit letter, payslip or P60.
For example, &#39;QQ 12 34 56 C&#39;.

</div>
```

#### With html

```njk
{{ govukHint({
  html: "It's on your National Insurance card, benefit letter, payslip or <a class=\"govuk-link\" href=\"#\">P60</a>.\nFor example, 'QQ 12 34 56 C'.\n"
}) }}
```

---
