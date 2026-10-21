## Error summary

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukErrorSummary` · **Import:** `{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}`

**Design System guidance:** https://design-system.service.gov.uk/components/error-summary/

### Guidance

Use this component at the top of a page to summarise any errors a user has made.

When a user makes an error, you must show both an error summary and an [Error message component](https://design-system.service.gov.uk/components/error-message/) next to each answer that contains an error.

#### When to use this component

Always show an error summary when there is a validation error, even if there’s only one.

#### How it works

You must:

- move keyboard focus to the error summary (the govuk-frontend javascript will do this for you)
- include the heading ‘There is a problem’
- link to each of the answers that have validation errors
- make sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors

As well as showing an error summary, follow the [Validation pattern](https://design-system.service.gov.uk/patterns/validation/) - for example, by adding ‘Error: ’ to the beginning of the page `<title>` so screen readers read it out as soon as possible.

And [make your error messages clear and concise](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise).

There are 2 ways to use the error summary component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Linking from the error summary to each answer

You must link the errors in the error summary to the answer they relate to.

For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the field.

When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error.

If you do not know which field contains an error, link to the first field.

For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox.

##### Where to put the error summary

Put the error summary at the top of the `main` container. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `titleText` | string | Yes | If `titleHtml` is set, this is not required. Text to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `titleHtml` | string | Yes | If `titleText` is set, this is not required. HTML to use for the heading of the error summary block. If `titleHtml` is provided, `titleText` will be ignored. |
| `descriptionText` | string | No | Text to use for the description of the errors. If you set `descriptionHtml`, the component will ignore `descriptionText`. |
| `descriptionHtml` | string | No | HTML to use for the description of the errors. If you set this option, the component will ignore `descriptionText`. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire error summary component in a `call` block. |
| `errorList` | array | No | A list of errors to include in the error summary. |
| `errorList[].href` | string | No | Href attribute for the error link item. If provided item will be an anchor. |
| `errorList[].text` | string | Yes | If `html` is set, this is not required. Text for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList[].html` | string | Yes | If `text` is set, this is not required. HTML for the error link item. If `html` is provided, the `text` option will be ignored. |
| `errorList[].attributes` | object | No | HTML attributes (for example data attributes) to add to the error link anchor. |
| `disableAutoFocus` | boolean | No | Prevent moving focus to the error summary when the page loads. |
| `classes` | string | No | Classes to add to the error-summary container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the error-summary container. |

### Examples

#### Default

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "The date your passport was issued must be in the past",
      href: "#example-error-1"
    },
    {
      text: "Enter a postcode, like AA1 1AA",
      href: "#example-error-2"
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#example-error-1">The date your passport was issued must be in the past</a>
          </li>
          <li>
            <a href="#example-error-2">Enter a postcode, like AA1 1AA</a>
          </li>
        </ul>
    </div>
  </div>
</div>
```

#### Without links

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Invalid username or password"
    }
  ]
}) }}
```

#### Mixed with and without links

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Invalid username or password"
    },
    {
      text: "Agree to the terms of service to log in",
      href: "#example-error-1"
    }
  ]
}) }}
```

#### With description only

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  descriptionText: "The file couldn't be loaded. Try again later."
}) }}
```

#### With everything

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  descriptionText: "Please fix the errors below.",
  errorList: [
    {
      text: "Invalid username or password"
    },
    {
      text: "Agree to the terms of service to log in",
      href: "#example-error-1"
    }
  ]
}) }}
```

---
