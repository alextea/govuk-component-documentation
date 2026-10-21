## Textarea

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukTextarea` · **Import:** `{% from "govuk/components/textarea/macro.njk" import govukTextarea %}`

**Design System guidance:** https://design-system.service.gov.uk/components/textarea/

### Guidance

#### When to use this component

Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.

#### When not to use this component

Users can find open-ended questions difficult to answer. It might be better to break up one complex question into a series of simple ones, for example where users can select from options using a [Radios component](https://design-system.service.gov.uk/components/radios/).

##### If you need to ask an open question

Do not use the textarea component if you need to let users enter shorter answers no longer than a single line, such as a phone number or name. In this case, you should use the [Text input component](https://design-system.service.gov.uk/components/text-input/).

#### How it works

You must label textareas. Placeholder text is not a suitable substitute for a label, as it disappears when users click inside the textarea.

Labels must be aligned above the textarea they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.

There are 2 ways to use the textarea component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Use appropriately-sized textareas

Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by specifying the `rows` attribute.

##### Do not disable copy and paste

Users will often need to copy and paste information into a textarea, so do not stop them from doing this.

##### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

##### Limiting the number of characters

If there’s a good reason to limit the number of characters users can enter, you can use the [Character count component](https://design-system.service.gov.uk/components/character-count/).

##### Error messages

Error messages should be styled like this:

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

###### If the input is empty

Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter summary’.

###### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Summary must be 400 characters or less’.

###### If the input is too short

Say ‘[whatever it is] must be [number] characters or more’.<br>
For example, ‘Summary must be 10 characters or more’.

###### If the input is too long or too short

Say ‘[whatever it is] must be between [number] and [number] characters’.<br>
For example, ‘Summary must be between 10 and 400 characters’.

###### If the input uses characters that are not allowed and you know what the characters are

Say ‘[whatever it is] must not include [characters]’.<br>
For example, ‘Summary must not include è and £’.

###### If the input uses characters that are not allowed and you do not know what the characters are

Say ‘[whatever it is] must only include [list of allowed characters]’.<br>
For example, ‘Summary must only include letters a to z, hyphens, spaces and apostrophes.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | No | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | Yes | The name of the textarea, which is submitted with the form data. |
| `spellcheck` | boolean | No | Optional field to enable or disable the `spellcheck` attribute on the textarea. |
| `rows` | string | No | Optional number of textarea rows (default is 5 rows). |
| `value` | string | No | Optional initial value of the textarea. |
| `disabled` | boolean | No | If `true`, textarea will be disabled. |
| `describedBy` | string | No | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | Yes | The label used by the textarea component. See [Label](./label.md) for its options. |
| `hint` | object | No | Can be used to add a hint to the textarea component. See [Hint](./hint.md) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](./error-message.md) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the textarea component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | No | Content to add before the textarea used by the textarea component. |
| `formGroup.beforeInput.text` | string | Yes | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | Yes | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | No | Content to add after the textarea used by the textarea component. |
| `formGroup.afterInput.text` | string | Yes | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | Yes | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | No | Classes to add to the textarea. |
| `autocomplete` | string | No | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the textarea. |

### Examples

#### Default

```njk
{{ govukTextarea({
  name: "more-detail",
  label: {
    text: "Can you provide more detail?"
  }
}) }}
```

Renders as:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5"></textarea>
</div>
```

#### With hint

```njk
{{ govukTextarea({
  name: "more-detail",
  id: "more-detail",
  label: {
    text: "Can you provide more detail?"
  },
  hint: {
    text: "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

#### With error message

```njk
{{ govukTextarea({
  name: "no-ni-reason",
  id: "no-ni-reason",
  label: {
    text: "Why can’t you provide a National Insurance number?"
  },
  errorMessage: {
    text: "You must provide an explanation"
  }
}) }}
```

#### With default value

```njk
{{ govukTextarea({
  id: "full-address",
  name: "address",
  value: "221B Baker Street\nLondon\nNW1 6XE\n",
  label: {
    text: "Full address"
  }
}) }}
```

#### With custom rows

```njk
{{ govukTextarea({
  id: "full-address",
  name: "address",
  label: {
    text: "Full address"
  },
  rows: 8
}) }}
```

#### With label as page heading

```njk
{{ govukTextarea({
  id: "textarea-with-page-heading",
  name: "address",
  label: {
    text: "Full address",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

---
