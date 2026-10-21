## Back link

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukBackLink` · **Import:** `{% from "govuk/components/back-link/macro.njk" import govukBackLink %}`

**Design System guidance:** https://design-system.service.gov.uk/components/back-link/

### Guidance

Use the back link component to help users go back to the previous page in a multi-page transaction.

Although browsers have a back button, some sites break when you use it - so many users avoid it, instead of losing their progress in a service. Also, not all users are aware of the back button.

#### When to use this component

Always include the Back link component on GOV.UK [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/).

You can include a back link on other pages within a multi-page transaction, if it makes sense to do so.

#### When not to use this component

Never use the back link component together with the [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/). If necessary, you should do research with your users to learn which they find more helpful in your service.

#### How it works

Always place back links at the top of a page, before the `<main>` element. Placing them here means that the 'Skip to main content' link allows the user to skip all navigation links, including the back link.

Make sure the link takes users to the previous page they were on, in the state they last saw it.

Where possible, ensure the back link works even when JavaScript is not available. If this is not possible, you should hide the back link when JavaScript is not available.

There are 2 ways to use the back link component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

Using the default link text ('Back') is ideal for services with a simple journey. For example, [applying for a National Insurance number](https://www.gov.uk/apply-national-insurance-number). Users will only ever go back to the previous page in the service.

For more complex user journeys, consider using different link text, like 'Go back to [page]'. For example, in an admin system with many different areas. In this case, if you used 'Back', it might not be clear to users what they are going back to.

##### Back links on dark backgrounds

Use the `govuk-back-link--inverse` modifier class to show a white link on a dark background – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the back link – the background colour must have a contrast ratio of at least 4.5:1 with white to meet [WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | No | Text to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`. |
| `html` | string | No | HTML to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`. |
| `href` | string | Yes | The value of the link's `href` attribute. |
| `classes` | string | No | Classes to add to the anchor tag. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the anchor tag. |

### Examples

#### Default

```njk
{{ govukBackLink({}) }}
```

Renders as:

```html
<a href="#" class="govuk-back-link">Back</a>
```

#### Inverse

```njk
{{ govukBackLink({
  classes: "govuk-back-link--inverse"
}) }}
```

---
