## Date input

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukDateInput` · **Import:** `{% from "govuk/components/date-input/macro.njk" import govukDateInput %}`

**Design System guidance:** https://design-system.service.gov.uk/components/date-input/

### Guidance

Use the date input component to help users enter a memorable date or one they can easily look up.

#### When to use this component

Use the date input component when you’re asking users for a date they’ll already know, or can look up without using a calendar.

#### When not to use this component

Do not use the date input component if users are unlikely to know the exact date of the event you’re asking about.

Read more in the [Ask users for dates pattern](https://design-system.service.gov.uk/patterns/dates/).

#### How it works

The date input component consists of 3 fields to let users enter a day, month and year.

The 3 date fields are grouped together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘What is your date of birth?’.

If you’re asking [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page), you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

Make sure that any example dates you use in hint text are valid for the question being asked.

Accept month names written out in full or abbreviated form (for example, ‘january’ or ‘jan’) as some users may enter months in this way.

There are 2 ways to use the date input component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

Never automatically tab users between the fields of the date input because this can be confusing and may clash with normal keyboard controls.

##### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

##### Use the autocomplete attribute for a date of birth

Use the `autocomplete` attribute on the date input component when you're asking for a date of birth. This lets browsers autofill the information on a user's behalf if they’ve entered it previously.

To do this, set the `autocomplete` attribute on the 3 fields to `bday-day`, `bday-month` and `bday-year`. See how to do this in the HTML and Nunjucks tabs in the following example.

If you are working in production you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5: Identify input purpose, level AA](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

##### Error messages

If you’re highlighting the whole date, style all the fields like this:

If you’re highlighting just one field - either the day, month or year - only style the field that has an error. The error message must say which field has an error, like this:

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

If there’s more than one error, show the highest priority error message. In order of priority, show error messages about:

- missing or incomplete information
- information that cannot be correct (for example, the number ‘13’ in the month field)
- information that fails validation for another reason

###### If nothing is entered

Highlight the date input as a whole.<br>

Say ‘Enter [whatever it is]’. For example, ‘Enter your date of birth’.

###### If the date is incomplete

Highlight the day, month or year field where the information is missing or incomplete. If more than one field is missing information, highlight the fields the user needs to fill in.<br>

Say ‘[whatever it is] must include a [whatever is missing]’.<br>

For example, ‘Date of birth must include a month’, ‘Date of birth must include a day and month’ or ‘Year must include 4 numbers’.

###### If the date entered cannot be correct

For example, ‘13’ in the month field cannot be correct.<br>

Highlight the day, month or year field with the incorrect information. Or highlight the date as a whole if there’s incorrect information in more than one field, or it's not clear which field is incorrect.<br>

Say ‘[Whatever it is] must be a real date’. For example, ‘Date of birth must be a real date’.

###### If the date is in the future when it needs to be in the past

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be in the past’. For example, ‘Date of birth must be in the past’.

###### If the date is in the future when it needs to be today or in the past

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be today or in the past’. For example, ‘Date of birth must be today or in the past’.

###### If the date is in the past when it needs to be in the future

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be in the future’. For example, ‘The date your course ends must be in the future’.

###### If the date is in the past when it needs to be today or in the future

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be today or in the future’. For example, ‘The date your course ends must be today or in the future’.

###### If the date must be the same as or after another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be the same as or after [date and optional description]’. For example, ‘The date your course ends must be the same as or after 1 September 2017 when you started the course’.

###### If the date must be after another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be after [date and optional description]’. For example, ‘The day your course ends must be after 1 September 2017’.

###### If the date must be the same as or before another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be the same as or before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017 when they left school’.

###### If the date must be before another date

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017’.

###### If the date must be between two dates

Highlight the date input as a whole.<br>

Say ‘[whatever it is] must be between [date] and [date and optional description]’. For example, ‘The date your contract started must be between 1 September 2017 and 30 September 2017 when you were self-employed’.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | This is used for the main component and to compose the ID attribute for each item. |
| `namePrefix` | string | No | Optional prefix. This is used to prefix each item `name`, separated by `-`. |
| `items` | array | No | The inputs within the date input component. |
| `items[].id` | string | No | Item-specific ID. If provided, it will be used instead of the generated ID. |
| `items[].name` | string | Yes | Item-specific name attribute. |
| `items[].label` | string | No | Item-specific label text. If provided, this will be used instead of `name` for item label text. |
| `items[].value` | string | No | If provided, it will be used as the initial value of the input. |
| `items[].error` | boolean | No | If set to `true`, it will show a red error border on the item input. If provided, you must set the top-level `errorMessage` option to add an error message to the date input component. |
| `items[].autocomplete` | string | No | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html), for instance `"bday-day"`. See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) section in the HTML standard for full list of attributes that can be used. |
| `items[].pattern` | string | No | Attribute to [provide a regular expression pattern](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute), used to match allowed character combinations for the input value. |
| `items[].classes` | string | No | Classes to add to date input item. |
| `items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the date input tag. |
| `hint` | object | No | Can be used to add a hint to a date input component. See [Hint](./hint.md) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](./error-message.md) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the date input component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object | No | Content to add before the inputs used by the date input component. |
| `formGroup.beforeInputs.text` | string | Yes | Text to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | Yes | HTML to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object | No | Content to add after the inputs used by the date input component. |
| `formGroup.afterInputs.text` | string | Yes | Text to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | Yes | HTML to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `fieldset` | object | No | Can be used to add a fieldset to the date input component. See [Fieldset](./fieldset.md) for its options. |
| `day` | object | No | Options for the day input within the date input component. See items. |
| `month` | object | No | Options for the month input within the date input component. See items. |
| `year` | object | No | Options for the year input within the date input component. See items. |
| `values` | object | No | Specify `value` attributes for the date parts without setting items. You can also use the `name` for the fields as keys, including any `namePrefix`. |
| `values.day` | string | No | The `value` attribute for the day input. |
| `values.month` | string | No | The `value` attribute for the month input. |
| `values.year` | string | No | The `value` attribute for the year input. |
| `classes` | string | No | Classes to add to the date-input container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the date-input container. |

### Examples

#### Default

```njk
{{ govukDateInput({
  id: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  }
}) }}
```

Renders as:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### With translations

```njk
{{ govukDateInput({
  id: "with-translations",
  fieldset: {
    legend: {
      text: "Pryd gafodd eich pasbort ei gyhoeddi?"
    }
  },
  hint: {
    text: "Er enghraifft, 27 3 2007"
  },
  day: {
    label: "Dydd"
  },
  month: {
    label: "Mis"
  },
  year: {
    label: "Blwyddyn"
  }
}) }}
```

#### With values

```njk
{{ govukDateInput({
  id: "with-values",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  values: {
    day: 31,
    month: 3,
    year: 1980
  }
}) }}
```

#### With values and name prefix

```njk
{{ govukDateInput({
  id: "with-values-name-prefix",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  values: {
    "dob-day": 31,
    "dob-month": 3,
    "dob-year": 1980
  }
}) }}
```

#### With values, name prefix and custom names

```njk
{{ govukDateInput({
  id: "with-values-name-prefix-custom",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  day: {
    label: "Day",
    name: "user1-day"
  },
  month: {
    label: "Month",
    name: "user1-month"
  },
  year: {
    label: "Year",
    name: "user1-year"
  },
  values: {
    "dob-user1-day": 31,
    "dob-user1-month": 3,
    "dob-user1-year": 1980
  }
}) }}
```

#### Day and month

```njk
{{ govukDateInput({
  id: "bday",
  namePrefix: "bday",
  fieldset: {
    legend: {
      text: "What is your birthday?"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  year: false
}) }}
```

#### Day and month (using items)

```njk
{{ govukDateInput({
  id: "bday",
  namePrefix: "bday",
  fieldset: {
    legend: {
      text: "What is your birthday?"
    }
  },
  hint: {
    text: "For example, 5 12"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2"
    },
    {
      name: "month",
      classes: "govuk-input--width-2"
    }
  ]
}) }}
```

#### Month and year

```njk
{{ govukDateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "When did you move to this property?"
    }
  },
  hint: {
    text: "For example, 3 1980"
  },
  day: false
}) }}
```

#### Month and year (using items)

```njk
{{ govukDateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "When did you move to this property?"
    }
  },
  hint: {
    text: "For example, 3 1980"
  },
  items: [
    {
      name: "month",
      classes: "govuk-input--width-2"
    },
    {
      name: "year",
      classes: "govuk-input--width-4"
    }
  ]
}) }}
```

#### With errors only

```njk
{{ govukDateInput({
  id: "dob-errors",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  day: {
    error: true
  },
  month: {
    error: true
  },
  year: {
    error: true
  }
}) }}
```

#### With errors only (using classes)

```njk
{{ govukDateInput({
  id: "dob-errors",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  day: {
    classes: "govuk-input--error"
  },
  month: {
    classes: "govuk-input--error"
  },
  year: {
    classes: "govuk-input--error"
  }
}) }}
```

#### With errors only (using items)

```njk
{{ govukDateInput({
  id: "dob-errors",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2",
      error: true
    },
    {
      name: "month",
      classes: "govuk-input--width-2",
      error: true
    },
    {
      name: "year",
      classes: "govuk-input--width-4",
      error: true
    }
  ]
}) }}
```

#### With errors only (using items and classes)

```njk
{{ govukDateInput({
  id: "dob-errors",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2 govuk-input--error"
    },
    {
      name: "month",
      classes: "govuk-input--width-2 govuk-input--error"
    },
    {
      name: "year",
      classes: "govuk-input--width-4 govuk-input--error"
    }
  ]
}) }}
```

#### With error message and hint

```njk
{{ govukDateInput({
  id: "dob-errors",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  }
}) }}
```

#### With error message and hint (using items)

```njk
{{ govukDateInput({
  id: "dob-errors",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2"
    },
    {
      name: "month",
      classes: "govuk-input--width-2"
    },
    {
      name: "year",
      classes: "govuk-input--width-4"
    }
  ]
}) }}
```

#### With error on day input

```njk
{{ govukDateInput({
  id: "dob-day-error",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  day: {
    error: true
  }
}) }}
```

#### With error on day input (using items)

```njk
{{ govukDateInput({
  id: "dob-day-error",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2",
      error: true
    },
    {
      name: "month",
      classes: "govuk-input--width-2"
    },
    {
      name: "year",
      classes: "govuk-input--width-4"
    }
  ]
}) }}
```

#### With error on month input

```njk
{{ govukDateInput({
  id: "dob-month-error",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  month: {
    error: true
  }
}) }}
```

#### With error on month input (using items)

```njk
{{ govukDateInput({
  id: "dob-month-error",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2"
    },
    {
      name: "month",
      classes: "govuk-input--width-2",
      error: true
    },
    {
      name: "year",
      classes: "govuk-input--width-4"
    }
  ]
}) }}
```

#### With error on year input

```njk
{{ govukDateInput({
  id: "dob-year-error",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  year: {
    error: true
  }
}) }}
```

#### With error on year input (using items)

```njk
{{ govukDateInput({
  id: "dob-year-error",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Error message goes here"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2"
    },
    {
      name: "month",
      classes: "govuk-input--width-2"
    },
    {
      name: "year",
      classes: "govuk-input--width-4",
      error: true
    }
  ]
}) }}
```

#### With items

```njk
{{ govukDateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2"
    },
    {
      name: "month",
      classes: "govuk-input--width-2"
    },
    {
      name: "year",
      classes: "govuk-input--width-4"
    }
  ]
}) }}
```

---
