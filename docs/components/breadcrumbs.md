## Breadcrumbs

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukBreadcrumbs` · **Import:** `{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}`

**Design System guidance:** https://design-system.service.gov.uk/components/breadcrumbs/

### Guidance

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

#### When to use this component

Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.

#### When not to use this component

Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.

If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.

#### How it works

Always place breadcrumbs at the top of a page, before the `<main>` element. Placing them here means that the 'Skip to main content' link allows the user to skip all navigation links, including breadcrumbs.

The breadcrumbs should start with your 'home' page and end with the parent section of the current page.

There are 2 ways to use the breadcrumbs component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Collapsing breadcrumbs on mobile devices

If you have long breadcrumbs you can configure the component to only show the first and last items on mobile devices.

To do this, add a `govuk-breadcrumbs--collapse-on-mobile` class to the outer `<div>` element of the component HTML. Or if you’re using Nunjucks, add `collapseOnMobile: true` to the Nunjucks macro as shown in this example.

##### Breadcrumbs on dark backgrounds

Use the `govuk-breadcrumbs--inverse` modifier class to show white links and arrows on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the breadcrumbs – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | array | Yes | The items within breadcrumbs. |
| `items[].text` | string | Yes | If `html` is set, this is not required. Text to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored. |
| `items[].html` | string | Yes | If `text` is set, this is not required. HTML to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored. |
| `items[].href` | string | No | Link for the breadcrumbs item. If not specified, breadcrumbs item is a normal list item. |
| `items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the individual crumb. |
| `classes` | string | No | Classes to add to the breadcrumbs container. |
| `collapseOnMobile` | boolean | No | When true, the breadcrumbs will collapse to the first and last item only on tablet breakpoint and below. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the breadcrumbs container. |
| `labelText` | string | No | Plain text label identifying the landmark to screen readers. Defaults to "Breadcrumb". |

### Examples

#### Default

```njk
{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Section",
      href: "/section"
    },
    {
      text: "Sub-section",
      href: "/section/sub-section"
    },
    {
      text: "Sub Sub-section",
      href: "/section/sub-section/sub-sub-section"
    }
  ]
}) }}
```

Renders as:

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section">Sub-section</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section/sub-sub-section">Sub Sub-section</a>
    </li>
  </ol>
</nav>
```

#### With one level

```njk
{{ govukBreadcrumbs({
  items: [
    {
      text: "Section",
      href: "/section"
    }
  ]
}) }}
```

#### Without the home section

```njk
{{ govukBreadcrumbs({
  items: [
    {
      text: "Service Manual",
      href: "/service-manual"
    },
    {
      text: "Agile Delivery",
      href: "/service-manual/agile-delivery"
    }
  ]
}) }}
```

#### With last breadcrumb as current page

```njk
{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Passports, travel and living abroad",
      href: "/browse/abroad"
    },
    {
      text: "Travel abroad"
    }
  ]
}) }}
```

#### With collapse on mobile

```njk
{{ govukBreadcrumbs({
  collapseOnMobile: true,
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Education, training and skills",
      href: "/education"
    },
    {
      text: "Special educational needs and disability (SEND) and high needs",
      href: "/education/special-educational-needs-and-disability-send-and-high-needs"
    }
  ]
}) }}
```

#### Inverse

Breadcrumbs that appear on dark backgrounds

```njk
{{ govukBreadcrumbs({
  classes: "govuk-breadcrumbs--inverse",
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Passports, travel and living abroad",
      href: "/browse/abroad"
    },
    {
      text: "Travel abroad"
    }
  ]
}) }}
```

---
