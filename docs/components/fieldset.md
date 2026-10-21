## Fieldset

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukFieldset` · **Import:** `{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}`

**Design System guidance:** https://design-system.service.gov.uk/components/fieldset/

### Guidance

Use the fieldset component to group related form inputs.

#### When to use this component

Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when [asking for an address in your service](https://design-system.service.gov.uk/patterns/addresses/).

If you’re using the examples or macros for a [Radios component](https://design-system.service.gov.uk/components/radios/), [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) or [Date input component](https://design-system.service.gov.uk/components/date-input/), the fieldset will already be included.

#### How it works

The first element inside a fieldset must be a `legend` which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.

If you’re asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

On [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/) containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that&nbsp;question.

Include general help text in the legend if it would help the user fill in the form, and you [cannot write it as hint text](https://design-system.service.gov.uk/components/text-input/#hint-text). However, try to keep it as short as possible.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `describedBy` | string | No | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `legend` | object | No | The legend for the fieldset component. |
| `legend.text` | string | Yes | If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `legend.html` | string | Yes | If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored. |
| `legend.classes` | string | No | Classes to add to the legend. |
| `legend.isPageHeading` | boolean | No | Whether the legend also acts as the heading for the page. |
| `classes` | string | No | Classes to add to the fieldset container. |
| `role` | string | No | Optional ARIA role attribute. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the fieldset container. |
| `html` | string | No | HTML to use/render within the fieldset element. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block. |

### Examples

#### Default

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?"
  }
}) }}
```

Renders as:

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    What is your address?
  </legend>
</fieldset>
```

#### Styled as xl text

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--xl"
  }
}) }}
```

#### Styled as large text

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l"
  }
}) }}
```

#### Styled as medium text

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--m"
  }
}) }}
```

#### Styled as small text

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--s"
  }
}) }}
```

#### As page heading xl

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--xl",
    isPageHeading: true
  }
}) }}
```

#### As page heading l

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) }}
```

#### As page heading m

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--m",
    isPageHeading: true
  }
}) }}
```

#### As page heading s

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--s",
    isPageHeading: true
  }
}) }}
```

#### As page heading without class

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    isPageHeading: true
  }
}) }}
```

---
