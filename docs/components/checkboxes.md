## Checkboxes

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukCheckboxes` · **Import:** `{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}`

**Design System guidance:** https://design-system.service.gov.uk/components/checkboxes/

### Guidance

Let users select one or more options by using the checkboxes component.

#### When to use this component

Use the checkboxes component when you need to help users:

- select multiple options from a list
- toggle a single option on or off

#### When not to use this component

Do not use the checkboxes component if users can only choose one option from a selection. In this case, use the [Radios component](https://design-system.service.gov.uk/components/radios/).

#### How it works

Always position checkboxes to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.

Unlike with radios, users can select multiple options from a list of checkboxes. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.

If needed, add a hint explaining this, for example, 'Select all that apply'.

Do not pre-select checkbox options as this makes it more likely that users will:

- not realise they’ve missed a question
- submit the wrong answer

Order checkbox options alphabetically by default.

In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for ‘What is your nationality?’ based on population size.

Group checkboxes together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘How would you like to be contacted?’.

##### If you’re asking one question on the page

If you're asking just [one question per page](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the checkboxes component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

##### Checkbox items with hints

You can add hints to checkbox items to provide additional information about the options.

Keep each hint to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with an item. This could frustrate users if the text is long.

Do not use links in hint text. While screen readers will read out the link text when describing the item, they usually do not tell users the text is a link.

##### Add an option for ‘none’

When 'none' would be a valid answer, give users the option to check a box to say none of the other options apply to them – without this option, users would have to leave all of the boxes unchecked. Giving users this option also makes sure they do not skip the question by accident.

Remember to [start by asking one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page). You might be able to remove the need for a 'none' option by asking the user a better question or filtering them out with a ‘filter question’ beforehand. The GOV.UK Service Manual has guidance on [designing good questions](https://www.gov.uk/service-manual/design/designing-good-questions).

Show the ‘none’ option last. Separate it from the other options using a divider. The text is usually the word ‘or’.

Write a label that repeats the key part of the question.

For example, for the question 'Will you be travelling to any of these countries?', say 'No, I will not be travelling to any of these countries.'

To enable some JavaScript that unchecks all other checkboxes when the user clicks 'None', add the `exclusive` behaviour to the 'none' checkbox.

If JavaScript is unavailable, and a user selects both the ‘none’ checkbox and another checkbox, display an error message.

##### Conditionally revealing a related question

You can ask the user a related question when they select a particular checkbox, so they only see the question when it's relevant to them.

This might make 2 related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the 'Contact me by phone' option.

Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead.

You should only conditionally reveal questions - do not show or hide anything that is not a question.

###### Known issues

Users are not always notified when a conditionally revealed question is shown or hidden. This fails [WCAG 2.2 success criterion 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html).

However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long as it’s kept simple. It confused our test users when we conditionally revealed complicated questions to them.

We’ll keep looking for opportunities to [learn more about how conditionally revealed questions should be used in services](https://github.com/alphagov/govuk-design-system/discussions/6087).

##### Smaller checkboxes

Use standard-sized checkboxes in most cases. However, smaller checkboxes work well on pages where it’s helpful to make them less visually prominent.

For example, on a page of search results, the main user need is to see the results. Using smaller checkboxes lets users see and change search filters without distracting them from the main content.

Small checkboxes can work well on information dense screens in services designed for repeat use, like caseworking systems.

In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times.

##### Error messages

Error messages should be styled like this:

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

###### If nothing is selected and the question has options in it

Say ‘Select if [whatever it is]’.<br>
For example, ‘Select if you are British, Irish or a citizen of a different country’.

###### If nothing is selected and the question does not have options in it

Say ‘Select [whatever it is]’.<br>
For example, ‘Select your nationality or nationalities’.

###### If users check both a 'none' checkbox and another checkbox

Say:

<div class="govuk-inset-text">Select [option label text] or select ‘[none of the above label text]’</div>

For example:

<div class="govuk-inset-text">Select countries you will be travelling to, or select ‘No, I will not be travelling to any of these countries’</div>

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `describedBy` | string | No | One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users. |
| `fieldset` | object | No | Can be used to add a fieldset to the checkboxes component. See [Fieldset](./fieldset.md) for its options. |
| `hint` | object | No | Can be used to add a hint to the checkboxes component. See [Hint](./hint.md) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](./error-message.md) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the checkboxes component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object | No | Content to add before all checkbox items within the checkboxes component. |
| `formGroup.beforeInputs.text` | string | Yes | Text to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | Yes | HTML to add before all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object | No | Content to add after all checkbox items within the checkboxes component. |
| `formGroup.afterInputs.text` | string | Yes | Text to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | Yes | HTML to add after all checkbox items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string | No | Optional prefix. This is used to prefix the `id` attribute for each checkbox item input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | Yes | Name attribute for all checkbox items. |
| `items` | array | Yes | The checkbox items within the checkboxes component. |
| `items[].text` | string | Yes | If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items[].html` | string | Yes | If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored. |
| `items[].id` | string | No | Specific ID attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied. |
| `items[].name` | string | No | Specific name for the checkbox item. If omitted, then component global `name` string will be applied. |
| `items[].value` | string | Yes | Value for the checkbox input. |
| `items[].label` | object | No | Subset of options for the label used by each checkbox item within the checkboxes component. See [Label](./label.md) for its options. |
| `items[].label.classes` | string | No | Classes to add to the label tag. |
| `items[].label.attributes` | object | No | HTML attributes (for example data attributes) to add to the label tag. |
| `items[].hint` | object | No | Can be used to add a hint to each checkbox item within the checkboxes component. See [Hint](./hint.md) for its options. |
| `items[].divider` | string | No | Divider text to separate checkbox items, for example the text `"or"`. |
| `items[].checked` | boolean | No | Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option. |
| `items[].conditional` | object | No | Provide additional content to reveal when the checkbox is checked. |
| `items[].conditional.html` | string | Yes | The HTML to reveal when the checkbox is checked. |
| `items[].behaviour` | string | No | If set to `"exclusive"`, implements a 'None of these' type behaviour via JavaScript when checkboxes are clicked. |
| `items[].disabled` | boolean | No | If `true`, checkbox will be disabled. |
| `items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the checkbox input tag. |
| `values` | array | No | Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string | No | Classes to add to the checkboxes container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the checkboxes container. |

### Examples

#### Default

```njk
{{ govukCheckboxes({
  name: "nationality",
  fieldset: {
    legend: {
      text: "What is your nationality?"
    }
  },
  items: [
    {
      value: "british",
      text: "British"
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "other",
      text: "Citizen of another country"
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
    </div>
  </div>
</fieldset>
</div>
```

#### With hint

```njk
{{ govukCheckboxes({
  name: "nationality",
  fieldset: {
    legend: {
      text: "What is your nationality?"
    }
  },
  hint: {
    text: "Select all that apply"
  },
  items: [
    {
      value: "british",
      text: "British"
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "other",
      text: "Citizen of another country"
    }
  ]
}) }}
```

#### With pre checked values

```njk
{{ govukCheckboxes({
  name: "how-contacted-checked",
  idPrefix: "how-contacted-checked",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?"
    }
  },
  values: [
    "email",
    "text"
  ],
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"context-email\">Email address</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"contact-phone\">Phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-phone\" type=\"text\" id=\"contact-phone\">\n"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"contact-text-message\">Mobile phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-text-message\" type=\"text\" id=\"contact-text-message\">\n"
      }
    }
  ]
}) }}
```

#### With divider and None

```njk
{{ govukCheckboxes({
  name: "with-divider-and-none",
  fieldset: {
    legend: {
      text: "Which types of waste do you transport regularly?"
    }
  },
  items: [
    {
      value: "animal",
      text: "Waste from animal carcasses"
    },
    {
      value: "mines",
      text: "Waste from mines or quarries"
    },
    {
      value: "farm",
      text: "Farm or agricultural waste"
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "None of these",
      behaviour: "exclusive"
    }
  ]
}) }}
```

#### With divider, None and conditional items

```njk
{{ govukCheckboxes({
  name: "with-divider-and-none-and-conditional-items",
  fieldset: {
    legend: {
      text: "Do you have any access needs?"
    }
  },
  items: [
    {
      value: "accessible-toilets",
      text: "Accessible toilets available"
    },
    {
      value: "braille",
      text: "Braille translation service available"
    },
    {
      value: "disabled-car-parking",
      text: "Disabled car parking available"
    },
    {
      value: "another-access-need",
      text: "Another access need",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"other-access-needs\">Other access needs</label>\n<textarea class=\"govuk-textarea govuk-!-width-one-third\" name=\"other-access-needs\" id=\"other-access-needs\"></textarea>\n"
      }
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "None of these",
      behaviour: "exclusive"
    }
  ]
}) }}
```

#### With hints on items

```njk
{{ govukCheckboxes({
  name: "with-hints-on-items",
  fieldset: {
    legend: {
      text: "How do you want to sign in?"
    }
  },
  items: [
    {
      name: "gateway",
      id: "government-gateway",
      value: "gov-gateway",
      text: "Sign in with Government Gateway",
      hint: {
        text: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
      }
    },
    {
      name: "verify",
      id: "govuk-verify",
      value: "gov-verify",
      text: "Sign in with GOV.UK Verify",
      hint: {
        text: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      }
    }
  ]
}) }}
```

#### With legend as a page heading

```njk
{{ govukCheckboxes({
  name: "waste",
  fieldset: {
    legend: {
      text: "Which types of waste do you transport regularly?",
      classes: "govuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  hint: {
    text: "Select all that apply"
  },
  items: [
    {
      value: "animal",
      text: "Waste from animal carcasses"
    },
    {
      value: "mines",
      text: "Waste from mines or quarries"
    },
    {
      value: "farm",
      text: "Farm or agricultural waste"
    }
  ]
}) }}
```

#### With error message

```njk
{{ govukCheckboxes({
  name: "waste",
  errorMessage: {
    text: "Please select an option"
  },
  fieldset: {
    legend: {
      text: "Which types of waste do you transport regularly?"
    }
  },
  items: [
    {
      value: "animal",
      text: "Waste from animal carcasses",
      hint: {
        text: "Nullam id dolor id nibh ultricies vehicula ut id elit."
      }
    },
    {
      value: "mines",
      text: "Waste from mines or quarries",
      hint: {
        text: "Nullam id dolor id nibh ultricies vehicula ut id elit."
      }
    },
    {
      value: "farm",
      text: "Farm or agricultural waste",
      hint: {
        text: "Nullam id dolor id nibh ultricies vehicula ut id elit."
      }
    }
  ]
}) }}
```

#### With very long option text

```njk
{{ govukCheckboxes({
  name: "waste",
  hint: {
    text: "Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  fieldset: {
    legend: {
      text: "Maecenas faucibus mollis interdum?"
    }
  },
  items: [
    {
      value: "nullam",
      text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."
    },
    {
      value: "aenean",
      text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."
    },
    {
      value: "fusce",
      text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis."
    }
  ]
}) }}
```

#### With conditional items

```njk
{{ govukCheckboxes({
  name: "with-conditional-items",
  idPrefix: "how-contacted",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"context-email\">Email address</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"contact-phone\">Phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-phone\" type=\"text\" id=\"contact-phone\">\n"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"contact-text-message\">Mobile phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-text-message\" type=\"text\" id=\"contact-text-message\">\n"
      }
    }
  ]
}) }}
```

#### With optional form group classes showing group error

```njk
{{ govukCheckboxes({
  name: "how-contacted-checked",
  idPrefix: "how-contacted-checked",
  formGroup: {
    classes: "govuk-form-group--error"
  },
  fieldset: {
    legend: {
      text: "How do you want to be contacted?"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"context-email\">Email address</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      value: "phone",
      text: "Phone",
      checked: true,
      conditional: {
        html: "<label class=\"govuk-label\" for=\"contact-phone\">Phone number</label>\n<span id=\"contact-phone-error\" class=\"govuk-error-message\">Problem with input</span>\n<input class=\"govuk-input govuk-input--error govuk-!-width-one-third\" name=\"contact-phone\" type=\"text\" id=\"contact-phone\" aria-describedby=\"contact-phone-error\">\n"
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"contact-text-message\">Mobile phone number</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"contact-text-message\" type=\"text\" id=\"contact-text-message\">\n"
      }
    }
  ]
}) }}
```

#### Small

```njk
{{ govukCheckboxes({
  idPrefix: "nationality",
  name: "nationality",
  classes: "govuk-checkboxes--small",
  fieldset: {
    legend: {
      text: "Filter by"
    }
  },
  items: [
    {
      value: "a",
      text: "a thing"
    },
    {
      value: "b",
      text: "another thing"
    },
    {
      value: "c",
      text: "this thing"
    }
  ]
}) }}
```

#### Small with long text

```njk
{{ govukCheckboxes({
  idPrefix: "nationality",
  name: "nationality",
  classes: "govuk-checkboxes--small",
  fieldset: {
    legend: {
      text: "Filter by"
    }
  },
  items: [
    {
      value: "nullam",
      text: "Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."
    },
    {
      value: "aenean",
      text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."
    },
    {
      value: "fusce",
      text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis."
    }
  ]
}) }}
```

#### Small with error

```njk
{{ govukCheckboxes({
  idPrefix: "nationality",
  name: "nationality",
  classes: "govuk-checkboxes--small",
  errorMessage: {
    text: "Select a thing"
  },
  fieldset: {
    legend: {
      text: "Filter by"
    }
  },
  items: [
    {
      value: "a",
      text: "a thing"
    },
    {
      value: "b",
      text: "another thing"
    },
    {
      value: "c",
      text: "this thing"
    }
  ]
}) }}
```

#### Small with hint

```njk
{{ govukCheckboxes({
  idPrefix: "nationality",
  name: "nationality",
  classes: "govuk-checkboxes--small",
  fieldset: {
    legend: {
      text: "Filter by"
    }
  },
  items: [
    {
      value: "a",
      text: "a thing",
      hint: {
        text: "hint for a thing"
      }
    },
    {
      value: "b",
      text: "another thing"
    },
    {
      value: "c",
      text: "this thing"
    }
  ]
}) }}
```

#### Small with conditional reveal

```njk
{{ govukCheckboxes({
  name: "how-contacted",
  idPrefix: "how-contacted",
  classes: "govuk-checkboxes--small",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?"
    }
  },
  items: [
    {
      value: "a",
      text: "a thing",
      conditional: {
        html: "<label class=\"govuk-label\" for=\"context-email\">Foo</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      value: "b",
      text: "another thing"
    }
  ]
}) }}
```

#### Small with divider and None

```njk
{{ govukCheckboxes({
  name: "small-with-divider-and-none",
  classes: "govuk-checkboxes--small",
  fieldset: {
    legend: {
      text: "Which types of waste do you transport regularly?"
    }
  },
  items: [
    {
      value: "animal",
      text: "Waste from animal carcasses"
    },
    {
      value: "mines",
      text: "Waste from mines or quarries"
    },
    {
      value: "farm",
      text: "Farm or agricultural waste"
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "None of these",
      behaviour: "exclusive"
    }
  ]
}) }}
```

---
