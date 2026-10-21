## Label

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukLabel` · **Import:** `{% from "govuk/components/label/macro.njk" import govukLabel %}`

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `for` | string | No | The value of the `for` attribute, the ID of the input the label is associated with. |
| `isPageHeading` | boolean | No | Whether the label also acts as the heading for the page. |
| `classes` | string | No | Classes to add to the label tag. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the label tag. |

### Examples

#### Default

```njk
{{ govukLabel({
  text: "National Insurance number"
}) }}
```

Renders as:

```html
<label class="govuk-label">
  National Insurance number
</label>
```

#### With bold text

```njk
{{ govukLabel({
  classes: "govuk-label--s",
  text: "National Insurance number"
}) }}
```

#### Styled as xl text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--xl"
}) }}
```

#### Styled as large text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--l"
}) }}
```

#### Styled as medium text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--m"
}) }}
```

#### Styled as small text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--s"
}) }}
```

#### As page heading xl

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--xl",
  isPageHeading: true
}) }}
```

#### As page heading l

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--l",
  isPageHeading: true
}) }}
```

#### As page heading m

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--m",
  isPageHeading: true
}) }}
```

#### As page heading s

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--s",
  isPageHeading: true
}) }}
```

#### As page heading without class

```njk
{{ govukLabel({
  text: "National Insurance number",
  isPageHeading: true
}) }}
```

---
