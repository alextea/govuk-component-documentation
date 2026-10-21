## Select

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukSelect` · **Import:** `{% from "govuk/components/select/macro.njk" import govukSelect %}`

**Design System guidance:** https://design-system.service.gov.uk/components/select/

### Guidance

#### When to use this component

The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.

#### When not to use this component

The select component allows users to choose an option from a long list. Before using the select component, try asking users questions which will allow you to present them with fewer options.

Asking questions means you’re less likely to need to use the select component, and can consider using a different solution, such as a [Radios component](https://design-system.service.gov.uk/components/radios/).

#### How it works

If you use the component for settings, you can make an option pre-selected by default when users first see it.

If you use the component for questions, you should not pre-select any of the options in case it influences users' answers.

There are 2 ways to use the select component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Select with hint

You can add hint text to help the user understand the options and choose one of them.

Keep hint text to a single short sentence, without any full stops.

Do not use links in hint text. While screen readers will read out the link text, they usually do not tell users the text is a link.

##### Error messages

Display an error message if the user has not selected an option.

Style error messages as shown in the example:

##### Avoid adding functionality to allow selecting multiple options

The select component does not support selecting multiple options, [as there’s a history of poor usability and assistive technology support for `<select multiple>`](https://www.24a11y.com/2019/select-your-poison/). If you need to ask the user to pick more than one item from a list, it’s almost always better to use another method, such as a list of checkboxes.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | No | ID for the select box. Defaults to the value of `name`. |
| `name` | string | Yes | Name property for the select. |
| `items` | array | Yes | The items within the select component. |
| `items[].value` | string | No | Value for the option. If this is omitted, the value is taken from the text content of the option element. |
| `items[].text` | string | Yes | Text for the option item. |
| `items[].selected` | boolean | No | Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option. |
| `items[].disabled` | boolean | No | Sets the option item as disabled. |
| `items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the option. |
| `value` | string | No | Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item. |
| `disabled` | boolean | No | If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options. |
| `describedBy` | string | No | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | Yes | The label used by the select component. See [Label](./label.md) for its options. |
| `hint` | object | No | Can be used to add a hint to the select component. See [Hint](./hint.md) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](./error-message.md) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the select component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | No | Content to add before the select used by the select component. |
| `formGroup.beforeInput.text` | string | Yes | Text to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | Yes | HTML to add before the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | No | Content to add after the select used by the select component. |
| `formGroup.afterInput.text` | string | Yes | Text to add after the select. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | Yes | HTML to add after the select. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | No | Classes to add to the select. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the select. |

### Examples

#### Default

```njk
{{ govukSelect({
  name: "select-1",
  label: {
    text: "Label text goes here"
  },
  items: [
    {
      value: 1,
      text: "GOV.UK frontend option 1"
    },
    {
      value: 2,
      text: "GOV.UK frontend option 2",
      selected: true
    },
    {
      value: 3,
      text: "GOV.UK frontend option 3",
      disabled: true
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select" id="select-1" name="select-1">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```

#### With hint text and error message

```njk
{{ govukSelect({
  id: "select-2",
  name: "select-2",
  label: {
    text: "Label text goes here"
  },
  hint: {
    text: "Hint text goes here"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  items: [
    {
      value: 1,
      text: "GOV.UK frontend option 1"
    },
    {
      value: 2,
      text: "GOV.UK frontend option 2"
    },
    {
      value: 3,
      text: "GOV.UK frontend option 3"
    }
  ]
}) }}
```

#### With label as page heading

```njk
{{ govukSelect({
  id: "select-3",
  name: "select-3",
  label: {
    text: "Label text goes here",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  items: [
    {
      value: 1,
      text: "GOV.UK frontend option 1"
    },
    {
      value: 2,
      text: "GOV.UK frontend option 2",
      selected: true
    },
    {
      value: 3,
      text: "GOV.UK frontend option 3",
      disabled: true
    }
  ]
}) }}
```

#### With full width override

```njk
{{ govukSelect({
  id: "select-1",
  name: "select-1",
  classes: "govuk-!-width-full",
  label: {
    text: "Label text goes here"
  },
  items: [
    {
      value: 1,
      text: "GOV.UK frontend option 1"
    },
    {
      value: 2,
      text: "GOV.UK frontend option 2",
      selected: true
    },
    {
      value: 3,
      text: "GOV.UK frontend option 3",
      disabled: true
    }
  ]
}) }}
```

---
