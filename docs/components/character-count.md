## Character count

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukCharacterCount` · **Import:** `{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}`

**Design System guidance:** https://design-system.service.gov.uk/components/character-count/

### Guidance

Help users know how much text they can enter when there is a limit on the number of characters.

#### When to use this component

Always test your service without a character count first.

Only use the character count component when there is a good reason for limiting the number of characters users can enter. For example, if there is:

- evidence that users are likely to enter more information than they need to
- a legal or technical reason that means an entry must be no more than a certain number of characters

#### When not to use this component

If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.

#### How it works

It tells users how many characters they have remaining as they type into a [Textarea component](https://design-system.service.gov.uk/components/textarea/) with a character limit.

Users will get updates at a pace that works best for the way they interact with the textarea. This means:

- sighted users will see a count message that updates as they type
- screen reader users will hear the count announcement when they stop typing.

This component does not restrict the user from entering information. The user can enter more than the character limit, but are told they've entered too many characters. This lets them type or copy and paste their full answer, then edit it down.

The count message appears below the textarea so that:

- it’s clearly separate from any hint text or error message above the textarea
- if it’s below the visible screen area, users will still see it again when they scroll down to send their response

This component uses JavaScript. If JavaScript is not available, users will see a static message in place of the count message, telling them how many characters they can enter.

There are 2 ways to use the character count component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

##### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

##### Consider if a word count is more helpful

In some cases it may be more helpful to show a word count. For example, if your question requires a longer answer.

Do this by setting `data-count-type="words"` and then `data-maxlength` in the component markup.

For example, for a word limit of 150 set these options as: `data-count-type="words" data-maxlength="150"`.

##### Avoid narrow limits

When using a character count, try to set the limit higher than most users will need. Find out what this is by doing user research and data analysis.

###### If the limit is far higher than users are likely to reach

You can choose to display a character count message when the length of text within the textarea passes a certain 'threshold' of characters. This is useful when a character limit is needed due to the technical limitations of the service, but users are unlikely to reach that limit.

To do this, set the threshold in the component markup as a percentage. For example, `data-threshold="75"` will show the count message only when the user has entered a length of text that's 75% of the limit or more.

Screen reader users will hear the character limit when they first interact with a textarea using the threshold option. Sighted users will not see anything until the count message is shown – though you might choose to include the character limit in the hint text.

##### Error messages

Error messages should be styled like this:

If a user tries to send their response with too many characters, you must show an error message above the field as well as the count message below it.

The error message tells users what went wrong and how to fix it. The count message provides live feedback and updates as a user types.

The input shows a red border only when the user tries to enter more than the character limit. If the number of characters is within the limit, the input does not show this border even when there's been an error. We felt it might cause the user difficulty if the border disappeared once they started typing.

Make sure errors follow GOV.UK guidance on [writing error messages](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise) and have specific error messages for specific error states.

###### If the input is empty

Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter a summary’.

###### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Summary must be 400 characters or less’.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | No | The ID of the textarea. Defaults to the value of `name`. |
| `name` | string | Yes | The name of the textarea, which is submitted with the form data. |
| `rows` | string | No | Optional number of textarea rows (default is 5 rows). |
| `value` | string | No | Optional initial value of the textarea. |
| `maxlength` | string | Yes | The maximum number of characters (or words if `countType` is set to `"words"`). |
| `maxwords` | string | Yes | **Deprecated in 6.6.0.** The maximum number of words. Replaced by the `maxlength` and `countType: "words"` options. |
| `threshold` | string | No | The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. |
| `countType` | string | No | The count type used to count the text – `"length"` or `"words"`. Defaults to `"length"`. |
| `label` | object | Yes | The label used by the character count component. See [Label](./label.md) for its options. |
| `hint` | object | No | Can be used to add a hint to the character count component. See [Hint](./hint.md) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](./error-message.md) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the character count component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | No | Content to add before the textarea used by the character count component. |
| `formGroup.beforeInput.text` | string | Yes | Text to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | Yes | HTML to add before the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | No | Content to add after the textarea used by the character count component. |
| `formGroup.afterInput.text` | string | Yes | Text to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | Yes | HTML to add after the textarea. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | No | Classes to add to the textarea. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the textarea. |
| `spellcheck` | boolean | No | Optional field to enable or disable the `spellcheck` attribute on the character count. |
| `countMessage` | object | No | Additional options for the count message used by the character count component. |
| `countMessage.classes` | string | No | Classes to add to the count message. |
| `textareaDescriptionText` | string | No | Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page if `countType` is not supported or JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` parameter. |
| `charactersUnderLimitText` | object | No | Message displayed when the number of characters is under the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining characters. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |
| `charactersAtLimitText` | string | No | Message displayed when the number of characters reaches the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. |
| `charactersOverLimitText` | object | No | Message displayed when the number of characters is over the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum.[Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |
| `wordsUnderLimitText` | object | No | Message displayed when the number of words is under the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining words. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |
| `wordsAtLimitText` | string | No | Message displayed when the number of words reaches the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. |
| `wordsOverLimitText` | object | No | Message displayed when the number of words is over the configured maximum, `maxlength` with `countType: "words"`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of words above the maximum. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). |

### Examples

#### Default

```njk
{{ govukCharacterCount({
  name: "more-detail",
  maxlength: 10,
  label: {
    text: "Can you provide more detail?"
  }
}) }}
```

Renders as:

```html
<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-info"></textarea>
  <div id="more-detail-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>
```

#### With hint

```njk
{{ govukCharacterCount({
  name: "with-hint",
  id: "with-hint",
  maxlength: 10,
  label: {
    text: "Can you provide more detail?"
  },
  hint: {
    text: "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

#### With hint and error

```njk
{{ govukCharacterCount({
  name: "with-error",
  id: "with-error",
  maxlength: 10,
  label: {
    text: "Can you provide more detail?"
  },
  errorMessage: {
    text: "Please provide more detail"
  },
  hint: {
    text: "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

#### With default value

```njk
{{ govukCharacterCount({
  id: "with-default-value",
  name: "default-value",
  maxlength: 100,
  label: {
    text: "Full address"
  },
  value: "221B Baker Street\nLondon\nNW1 6XE\n"
}) }}
```

#### With default value exceeding limit

```njk
{{ govukCharacterCount({
  id: "exceeding-characters",
  name: "exceeding",
  maxlength: 10,
  value: "221B Baker Street\nLondon\nNW1 6XE\n",
  label: {
    text: "Full address"
  },
  errorMessage: {
    text: "Please do not exceed the maximum allowed limit"
  }
}) }}
```

#### With custom rows

```njk
{{ govukCharacterCount({
  id: "custom-rows",
  name: "custom",
  maxlength: 10,
  label: {
    text: "Full address"
  },
  rows: 8
}) }}
```

#### With label as page heading

```njk
{{ govukCharacterCount({
  id: "textarea-with-page-heading",
  name: "address",
  maxlength: 10,
  label: {
    text: "Full address",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

#### With maxwords

```njk
{{ govukCharacterCount({
  id: "maxwords",
  name: "maxwords",
  maxwords: 10,
  label: {
    text: "Full address"
  }
}) }}
```

#### With count type 'length'

```njk
{{ govukCharacterCount({
  id: "with-count-type-length",
  name: "example",
  countType: "length",
  maxlength: 200,
  label: {
    text: "Enter a job description"
  }
}) }}
```

#### With count type 'characters'

```njk
{{ govukCharacterCount({
  id: "with-count-type-characters",
  name: "example",
  countType: "characters",
  maxlength: 200,
  label: {
    text: "Enter a job description"
  }
}) }}
```

#### With count type 'characters' and value

```njk
{{ govukCharacterCount({
  id: "with-count-type-characters-value",
  name: "example",
  countType: "characters",
  maxlength: 350,
  label: {
    text: "Enter a job description"
  },
  value: "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

#### With count type 'characters' and error message

```njk
{{ govukCharacterCount({
  id: "with-count-type-characters-error",
  name: "example",
  countType: "characters",
  maxlength: 350,
  label: {
    text: "Enter a job description"
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  },
  value: "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### With count type 'characters' and threshold

```njk
{{ govukCharacterCount({
  id: "with-count-type-characters-threshold",
  name: "example",
  countType: "characters",
  maxlength: 112,
  threshold: 75,
  label: {
    text: "Enter a job description"
  },
  value: "Type another letter into this field after this message to see the threshold feature"
}) }}
```

#### With count type 'words'

```njk
{{ govukCharacterCount({
  id: "with-count-type-words",
  name: "example",
  countType: "words",
  maxlength: 50,
  label: {
    text: "Enter a job description"
  }
}) }}
```

#### With count type 'words' and value

```njk
{{ govukCharacterCount({
  id: "with-count-type-words-value",
  name: "example",
  countType: "words",
  maxlength: 51,
  label: {
    text: "Enter a job description"
  },
  value: "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
}) }}
```

#### With count type 'words' and error message

```njk
{{ govukCharacterCount({
  id: "with-count-type-words-error",
  name: "example",
  countType: "words",
  maxlength: 51,
  label: {
    text: "Enter a job description"
  },
  errorMessage: {
    text: "Job description must be 51 words or less"
  },
  value: "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
}) }}
```

#### With count type 'words' and threshold

```njk
{{ govukCharacterCount({
  id: "with-count-type-words-threshold",
  name: "example",
  countType: "words",
  maxlength: 51,
  threshold: 30,
  label: {
    text: "Enter a job description"
  },
  value: "Type another word into this field after this message to see the threshold feature"
}) }}
```

#### With threshold

```njk
{{ govukCharacterCount({
  id: "with-threshold",
  name: "with-threshold",
  maxlength: 10,
  threshold: 75,
  label: {
    text: "Full address"
  }
}) }}
```

---
