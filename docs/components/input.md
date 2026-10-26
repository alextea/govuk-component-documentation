## Input

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukInput` · **Import:** `{% from "govuk/components/input/macro.njk" import govukInput %}`

**Design System guidance:** https://design-system.service.gov.uk/components/text-input/

### Guidance

#### When to use this component

Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

#### When not to use this component

Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the [Textarea component](https://design-system.service.gov.uk/components/textarea/).

#### How it works

All text inputs must have labels, and in most cases the label should be visible.

You should align labels above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.

##### Avoid placeholder text

Do not use placeholder text in place of a label, or for hints or examples, as:

- it vanishes when the user starts typing, which can cause problems for users with memory conditions or when reviewing answers
- not all screen readers read it out
- its browser default styles often do not meet [WCAG 2.2 success criterion 1.4.3 Contrast (minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum)

##### If you're asking one question on the page

If you’re asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<label>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the text input component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

##### Use appropriately-sized text inputs

Help users understand what they should enter by making text inputs the right size for the content they’re intended for.

By default, the width of text inputs is fluid and will fit the full width of the container they are placed into.

If you want to make the input smaller, you can either use a fixed width input, or use the width override classes to create a smaller, fluid width input.

###### Fixed width inputs

Use fixed width inputs for content that has a specific, known length. Postcode inputs should be postcode-sized, phone number inputs should be phone number-sized.

The widths are designed for specific character lengths and to be consistent across a range of browsers. They include extra padding to fit icons that some browsers might insert into the input (for example to show or generate a password).

On fixed width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit.

###### Fluid width inputs

Use the width override classes to reduce the width of an input in relation to its parent container, for example, to two-thirds.

Fluid width inputs will resize with the viewport.

##### Hint text

Use hint text for help that’s relevant to the majority of users, like how their information will be used, or where to find it.

Keep hint text to a single short sentence, without any full stops.

Do not use links in hint text. While screen readers will read out the link text when describing the field, they usually do not tell users the text is a link.

###### When not to use hint text

Do not use hint text to explain anything that's longer than a short, simple sentence. Screen readers read out the entire text when users interact with the form element. This could frustrate users if the text is long.

If you’re asking a question that needs a detailed explanation, see [asking complex questions without using hint text](https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text).

###### Avoid links

Do not include links within hint text. While screen readers will read out the link text when describing the field, they will not tell users that the text is a link.

##### Numbers

###### Asking for whole numbers

If you're asking the user to enter a whole number, set the `inputmode` attribute to `numeric` to use the numeric keypad on devices with on-screen keyboards.

See how to do this by opening the HTML and Nunjucks tabs in this example:

There is specific guidance on:

- [how to ask for dates](https://design-system.service.gov.uk/patterns/dates/)
- [how to ask for phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/)

###### Asking for decimal numbers

If you're asking the user to enter a number that might include decimal places, set `inputmode` to `decimal`. Similar to `numeric`, this will show a numeric keypad to users on devices with on-screen keyboards, including a decimal separator.

Some devices do not allow users to enter negative values using the on-screen keypad. If you want to give users the option to enter a negative number, use `input type="text"` without the `inputmode` attribute.

###### Avoid using inputs with a type of number

Do not use `<input type="number">` unless your user research shows that there’s a need for it. With `<input type="number">` there’s a risk of users accidentally incrementing a number when they’re trying to do something else - for example, scroll up or down the page. And if the user tries to enter something that’s not a number, there’s no explicit feedback about what they’re doing wrong.

##### Codes and sequences

Help the user visually check the code they've typed is correct by styling the input's text to visually separate each character. This is important if you're asking the user to enter a code or sequence they're unlikely to have memorised, such as an application reference ID, account number or security code.

You do not need to do this for memorable information, such as phone numbers and postcodes.

There is specific guidance on:

- [how to ask for bank account details](https://design-system.service.gov.uk/patterns/bank-details/)
- [how to ask for National Insurance numbers](https://design-system.service.gov.uk/patterns/national-insurance-numbers/)
- [how to confirm a phone number](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/)

##### Prefixes and suffixes

Use prefixes and suffixes to help users enter things like currencies and measurements.

Prefixes and suffixes are useful when there's a commonly understood symbol or abbreviation for the type of information you're asking for. Do not rely on prefixes or suffixes alone, because screen readers will not read them out.

If you need a specific type of information, say so in the input label or hint text as well. For example, put 'Cost, in pounds' in the input label and use the '£' symbol in the prefix.

Position prefixes and suffixes so that they're outside of their input. This is to avoid interfering with some browsers that might insert an icon into the input (for example to show or generate a password).

Some users may miss that the input already has a suffix or prefix, and enter a prefix or suffix into the input. Allow for this in your validation and do not show an error.

###### Text inputs with a prefix

###### Text inputs with a suffix

##### Use the autocomplete attribute

Use the `autocomplete` attribute on text inputs to help users complete forms more quickly. This lets you specify an input's purpose so browsers can autofill the information on a user's behalf if they’ve entered it previously.

For example, to enable autofill on a postcode field, set the `autocomplete` attribute to `postal-code`. See how to do this in the HTML and Nunjucks tabs in the following example.

If you are working in production and there is a relevant [input purpose](https://www.w3.org/TR/WCAG22/#input-purposes), you'll need to use the `autocomplete` attribute to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose, level AA](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.

##### Do not disable copy and paste

Users often need to copy and paste information into a text input, so do not stop them from doing this.

##### Avoid restricting the length of a user's input

Using the `maxlength` attribute means there is no feedback to users that their text input is truncated. This is especially true where the text has been copied and pasted from elsewhere. This can cause users to accidentally provide incorrect or incomplete information.

A restrictive maximum length can stop users from formatting information in their usual way. For example, putting spaces in a postcode or commas in a large number.

Some assistive technologies do not tell users if an input has a `maxlength` set or if the user has passed the limit. Voice control software may insert additional spaces into the input.

If you must enforce a maximum length for technical reasons, inform the user of the limit in the hint, but allow them to provide more information. Only return an error if the value is longer than allowed after normalisation. For longer values, consider using the [Character count component](https://design-system.service.gov.uk/components/character-count/) instead.

##### How and when to spellcheck a user’s input

Sometimes, browsers will spellcheck the information a user puts into a text input. If a user enters something which is recognised as a spelling error, sighted users will see a red line under the word.

If you are asking users for information which is not appropriate to spellcheck, like a reference number, name, email address or National Insurance number, disable the spellcheck.

To do this set the `spellcheck` attribute to `false` as shown in this example.

Browsers do not consistently spellcheck user’s input by default. If you are asking a question where spellcheck would be useful, set the `spellcheck` attribute to `true`.

##### Error messages

Error messages should be styled like this:

###### If the input has a prefix or a suffix

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

###### If the input is empty

Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter your first name’.

###### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Address line 1 must be 35 characters or less’.

###### If the input is too short

Say ‘[whatever it is] must be [number] characters or more’.<br>
For example, ‘Full name must be 2 characters or more’.

###### If the input has both a minimum and maximum length

Say ‘[whatever it is] must be between [number] and [number] characters’.<br>
For example, ‘Last name must be between 2 and 35 characters’.

###### If the input uses characters that are not allowed and you know what the characters are

Say ‘[whatever it is] must not include [characters]’.<br>
For example, ‘Town or city must not include è and £’.

Support all the characters the user might need to enter, including numbers and symbols.

###### If the input uses characters that are not allowed and you do not know what the characters are

Say ‘[whatever it is] must only include [list of allowed characters]’.<br>
For example, ‘Full name must only include letters a to z, and special characters such as hyphens, spaces and apostrophes’.

Support all the characters the user might need to enter, including numbers and symbols.

###### If the input is not a number

Say ‘[whatever it is] must be a number [optional example]’.<br>
For example, ‘Hours worked a week must be a number, like 30’.

If the input requires a decimal, use a decimal in the example. If the input allows both whole numbers and decimals, use both in the example.

###### If the input is not a whole number

Say ‘[whatever it is] must be a whole number [optional example]’.<br>
For example, ‘Hours worked a week must be a whole number, like 30’.

###### If the number is too low

Say ‘[whatever it is] must be [lowest] or more’.<br>
For example, ‘Hours worked a week must be 16 or more’.

###### If the number is too high

Say ‘[whatever it is] must be [highest] or fewer’.<br>
For example, ‘Hours worked a week must be 99 or fewer’.

###### If the input must be between 2 numbers

Say ‘[whatever it is] must be between [lowest] and [highest]’.<br>
For example, ‘Hours worked a week must be between 16 and 99’.

###### If the input is an amount of money that needs decimals

Say ‘[whatever it is] must include pence, like 123.45 or 156.00’.<br>
For example, ‘How much you earn a week must include pence, like 123.45 or 156.00’.

###### If the input is an amount of money that must not have decimals

Say ‘[whatever it is] must not include pence, like 123 instead of 123.45’.<br>
For example, ‘How much you earn a week must not include pence, like 123 instead of 123.45’.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | No | The ID of the input. Defaults to the value of `name`. |
| `name` | string | Yes | The name of the input, which is submitted with the form data. |
| `type` | string | No | Type of input control to render, for example, a password input control. Defaults to `"text"`. |
| `inputmode` | string | No | Optional value for [the inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| `value` | string | No | Optional initial value of the input. |
| `disabled` | boolean | No | If `true`, input will be disabled. |
| `describedBy` | string | No | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | Yes | The label used by the text input component. See [Label](./label.md) for its options. |
| `hint` | object | No | Can be used to add a hint to a text input component. See [Hint](./hint.md) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](./error-message.md) for its options. |
| `prefix` | object | No | Can be used to add a prefix to the text input component. |
| `prefix.text` | string | Yes | Required. If `html` is set, this is not required. Text to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.html` | string | Yes | Required. If `text` is set, this is not required. HTML to use within the prefix. If `html` is provided, the `text` option will be ignored. |
| `prefix.classes` | string | No | Classes to add to the prefix. |
| `prefix.attributes` | object | No | HTML attributes (for example data attributes) to add to the prefix element. |
| `suffix` | object | No | Can be used to add a suffix to the text input component. |
| `suffix.text` | string | Yes | If `html` is set, this is not required. Text to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.html` | string | Yes | If `text` is set, this is not required. HTML to use within the suffix. If `html` is provided, the `text` option will be ignored. |
| `suffix.classes` | string | No | Classes to add to the suffix element. |
| `suffix.attributes` | object | No | HTML attributes (for example data attributes) to add to the suffix element. |
| `formGroup` | object | No | Additional options for the form group containing the text input component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | No | Content to add before the input used by the text input component. |
| `formGroup.beforeInput.text` | string | Yes | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | Yes | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | No | Content to add after the input used by the text input component. |
| `formGroup.afterInput.text` | string | Yes | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | Yes | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | No | Classes to add to the input. |
| `autocomplete` | string | No | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used. |
| `pattern` | string | No | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `spellcheck` | boolean | No | Optional field to enable or disable the `spellcheck` attribute on the input. |
| `autocapitalize` | string | No | Optional field to enable or disable autocapitalisation of user input. [See the Autocapitalization section in the HTML spec](https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization) for a full list of values that can be used. |
| `inputWrapper` | object | No | If any of `prefix`, `suffix`, `formGroup.beforeInput` or `formGroup.afterInput` have a value, a wrapping element is added around the input and inserted content. This object allows you to customise that wrapping element. |
| `inputWrapper.classes` | string | No | Classes to add to the wrapping element. |
| `inputWrapper.attributes` | object | No | HTML attributes (for example data attributes) to add to the wrapping element. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the input. |

### Examples

#### Default

```njk
{{ govukInput({
  label: {
    text: "National Insurance number"
  },
  name: "test-name"
}) }}
```

Renders as:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="test-name">
    National Insurance number
  </label>
  <input class="govuk-input" id="test-name" name="test-name" type="text">
</div>
```

#### With hint text

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-with-hint-text",
  name: "test-name-2"
}) }}
```

#### With error message

```njk
{{ govukInput({
  label: {
    text: "National Insurance number"
  },
  id: "input-with-error-message",
  name: "test-name-3",
  errorMessage: {
    text: "Enter a National Insurance number in the correct format"
  }
}) }}
```

#### With error and hint

```njk
{{ govukInput({
  id: "with-error-hint",
  name: "with-error-hint",
  label: {
    text: "National insurance number"
  },
  errorMessage: {
    text: "Enter a National Insurance number in the correct format"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  }
}) }}
```

#### With width 2 class

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-width-2",
  name: "test-width-2",
  classes: "govuk-input--width-2"
}) }}
```

#### With width 3 class

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-width-3",
  name: "test-width-3",
  classes: "govuk-input--width-3"
}) }}
```

#### With width 4 class

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-width-4",
  name: "test-width-4",
  classes: "govuk-input--width-4"
}) }}
```

#### With width 5 class

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-width-5",
  name: "test-width-5",
  classes: "govuk-input--width-5"
}) }}
```

#### With width 10 class

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-width-10",
  name: "test-width-10",
  classes: "govuk-input--width-10"
}) }}
```

#### With width 20 class

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-width-20",
  name: "test-width-20",
  classes: "govuk-input--width-20"
}) }}
```

#### With width 30 class

```njk
{{ govukInput({
  label: {
    text: "National insurance number"
  },
  hint: {
    text: "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  id: "input-width-30",
  name: "test-width-30",
  classes: "govuk-input--width-30"
}) }}
```

#### With label as page heading

```njk
{{ govukInput({
  label: {
    text: "National Insurance number",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "input-with-page-heading",
  name: "test-name"
}) }}
```

#### With prefix

```njk
{{ govukInput({
  label: {
    text: "Amount, in pounds"
  },
  id: "input-with-prefix",
  name: "amount",
  prefix: {
    text: "£"
  }
}) }}
```

#### With suffix

```njk
{{ govukInput({
  label: {
    text: "Weight, in kilograms"
  },
  id: "input-with-suffix",
  name: "weight",
  suffix: {
    text: "kg"
  }
}) }}
```

#### With prefix and suffix

```njk
{{ govukInput({
  label: {
    text: "Cost per item, in pounds"
  },
  id: "input-with-prefix-suffix",
  name: "cost",
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  }
}) }}
```

#### With prefix and suffix and error

```njk
{{ govukInput({
  label: {
    text: "Cost per item, in pounds"
  },
  id: "input-with-prefix-suffix",
  name: "cost",
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  },
  errorMessage: {
    text: "Error message goes here"
  }
}) }}
```

#### With prefix and suffix and width modifier

```njk
{{ govukInput({
  label: {
    text: "Cost per item, in pounds"
  },
  id: "input-with-prefix-suffix",
  name: "cost",
  classes: "govuk-input--width-5",
  prefix: {
    text: "£"
  },
  suffix: {
    text: "per item"
  }
}) }}
```

#### With extra letter spacing

```njk
{{ govukInput({
  id: "input-with-extra-letter-spacing",
  name: "input-with-extra-letter-spacing",
  label: {
    text: "National insurance number"
  },
  classes: "govuk-input--width-30 govuk-input--extra-letter-spacing",
  value: "QQ 12 34 56 C"
}) }}
```

---
