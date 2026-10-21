# GOV.UK Frontend component reference

> Generated from govuk-frontend v6.6.0. Do not edit by hand. Regenerate with `npm run reference`.
>
> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

## How to use this file (for coding agents)

- Read [govuk-frontend-guide.md](govuk-frontend-guide.md) first. It covers page templates, layout, typography and common patterns. Colours, spacing and override classes are in [govuk-frontend-styles.md](govuk-frontend-styles.md).
- Find the component in the table of contents, then read only that section. The line numbers point at its `##` heading. Each component is also in its own file in [components/](components/).
- Import each macro before using it: `{% from "govuk/components/<name>/macro.njk" import <macroName> %}`. In the GOV.UK Prototype Kit the macros are already imported, so you can leave this line out.
- Nunjucks must be configured with `node_modules/govuk-frontend/dist` on its search path.
- `text` is HTML-escaped and `html` is not. If both are set, `html` wins. Never put user input in `html`.
- Form components take nested `label`, `hint`, `fieldset` and `errorMessage` objects. These have the same options as the Label, Hint, Fieldset and Error message components.
- Setting `errorMessage` switches a form component to its error state. Pair it with an Error summary at the top of the page.
- Every component accepts `classes` (extra CSS classes) and `attributes` (an object of extra HTML attributes).
- Only use parameters listed in a component's table. Do not invent options or hand-write the HTML when a macro exists.

## Table of contents

| Component | Macro | Line |
| --- | --- | --- |
| [Accordion](#accordion) | `govukAccordion` | 64 |
| [Back link](#back-link) | `govukBackLink` | 359 |
| [Breadcrumbs](#breadcrumbs) | `govukBreadcrumbs` | 436 |
| [Button](#button) | `govukButton` | 636 |
| [Character count](#character-count) | `govukCharacterCount` | 989 |
| [Checkboxes](#checkboxes) | `govukCheckboxes` | 1408 |
| [Cookie banner](#cookie-banner) | `govukCookieBanner` | 2188 |
| [Date input](#date-input) | `govukDateInput` | 2508 |
| [Details](#details) | `govukDetails` | 3292 |
| [Error message](#error-message) | `govukErrorMessage` | 3391 |
| [Error summary](#error-summary) | `govukErrorSummary` | 3588 |
| [Exit this page](#exit-this-page) | `govukExitThisPage` | 3755 |
| [Feedback](#feedback) | `govukFeedback` | 3891 |
| [Fieldset](#fieldset) | `govukFieldset` | 3989 |
| [File upload](#file-upload) | `govukFileUpload` | 4161 |
| [Footer](#footer) | `govukFooter` | 4500 |
| [Generic header](#generic-header) | `govukGenericHeader` | 5216 |
| [Header](#header) | `govukHeader` | 5344 |
| [Hint](#hint) | `govukHint` | 5481 |
| [Input](#input) | `govukInput` | 5526 |
| [Inset text](#inset-text) | `govukInsetText` | 6118 |
| [Label](#label) | `govukLabel` | 6186 |
| [Language navigation](#language-navigation) | `govukLanguageNavigation` | 6316 |
| [Notification banner](#notification-banner) | `govukNotificationBanner` | 6760 |
| [Pagination](#pagination) | `govukPagination` | 6921 |
| [Panel](#panel) | `govukPanel` | 7306 |
| [Password input](#password-input) | `govukPasswordInput` | 7467 |
| [Phase banner](#phase-banner) | `govukPhaseBanner` | 7722 |
| [Radios](#radios) | `govukRadios` | 7802 |
| [Select](#select) | `govukSelect` | 8633 |
| [Service navigation](#service-navigation) | `govukServiceNavigation` | 8845 |
| [Skip link](#skip-link) | `govukSkipLink` | 9447 |
| [Summary list](#summary-list) | `govukSummaryList` | 9517 |
| [Table](#table) | `govukTable` | 10543 |
| [Tabs](#tabs) | `govukTabs` | 10826 |
| [Tag](#tag) | `govukTag` | 11143 |
| [Task list](#task-list) | `govukTaskList` | 11292 |
| [Textarea](#textarea) | `govukTextarea` | 11809 |
| [Warning text](#warning-text) | `govukWarningText` | 12013 |

---
## Accordion

[↑ Back to top](#table-of-contents)

**Macro:** `govukAccordion` · **Import:** `{% from "govuk/components/accordion/macro.njk" import govukAccordion %}`

**Design System guidance:** https://design-system.service.gov.uk/components/accordion/

### Guidance

The accordion component lets users show and hide sections of related content on a page.

#### When to use this component

Only use an accordion if there's evidence it’s helpful for the user to:

- see an overview of multiple, related sections of content
- choose to show and hide sections that are relevant to them
- look across information that might otherwise be on different pages

For example, an accordion can work well if the user needs to reveal and compare information that’s relevant to them.

Accordions can also work well for people who use a service regularly. For example, users of caseworking systems who need to do familiar tasks quickly.

Test with users to decide if using an accordion outweighs the potential problems with hiding content.

#### When not to use this component

Accordions hide content from the user. Not all users will notice them or understand how they work. For this reason, you should only use them in specific situations and if user research supports it.

Do not use an accordion for content that all users need to see.

Test your content without an accordion first. Well-written and structured content, as shown in [GOV.UK writing standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/), can remove the need to use an accordion.

It’s usually better to:

- simplify and reduce the amount of content
- split the content across multiple pages
- keep the content on a single page, separated by headings
- use a list of links at the start of the page (known as 'anchor links') to take the user to particular sections of a page

Accordions work best for simple content and links. Do not use accordions to split up a series of questions. Use separate pages instead.

Do not put accordions within accordions, as it will make content difficult to find.

Do not use the accordion component if the amount of content inside will make the page slow to load.

#### Decide between using accordions, tabs and details

The Accordion component, [Tabs component](https://design-system.service.gov.uk/components/tabs/) and [Details component](https://design-system.service.gov.uk/components/details/) all work by hiding sections of content which a user can choose to reveal. Avoid using any of these components within one another.

If you decide to use one of these components, consider if:

- the user needs to look at more than one section at a time – an accordion can show multiple sections at a time, unlike tabs
- the user needs to switch quickly between sections – tabs can show content without pushing other sections down the page, unlike accordions
- there are many sections of content – accordions can fit more sections as they’re arranged vertically, unlike tabs which are arranged horizontally
- there’s only one or two pieces of short, less important content – the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs

#### How it works

There are 2 ways to use the accordion component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

The accordion component uses JavaScript. When JavaScript is not available, users will see all the content displayed with the section labels as headings.

If you are using HTML, you must add an 'id' attribute to the `<div>` tag with the `govuk-accordion` class. It must be unique across the service's domain to maintain the persistent expanded state of the accordion.

##### Section heading buttons

An accordion will usually start with all sections hidden. To show a section, the user can interact anywhere in the heading button.

The heading button includes all of these areas:

- heading text
- summary line (if you decide to add one)
- call-to-action text to 'show' or 'hide'

For users of screen readers, all the text in the button will be read as a single statement (separated by commas to allow for slight pauses). There’s also some visually hidden content in the heading text to help announce the call-to-action as 'show this section' or 'hide this section'.

###### Write clear button text

Write the heading and summary line like any other button text. Use sentence case, describe the content that will show, and keep it short.

Users of screen readers might find it difficult to navigate the accordion if the button text is too long.

If you struggle to come up with clear button text, it might be because the way you’ve separated the content is not clear. Organise sections in a way that makes sense to users, based on their needs.

###### Adding a summary line

Only add a summary line if it’s actually needed, as it's likely to make the button text too long.

If you’ve decided that you need the summary line, you must make it as short as possible.

###### Structure section headings with the rest of the page

The accordion component shows section headings as `<h2>` headings. If needed, change the heading level of the section headings to make them fit within the other headings on the page.

##### Starting with sections open

Users might need some sections to be open from the start. If they leave and then return to the page, they might also need sections they opened to stay open.

By default, if the user leaves and then returns to the page within the same page session, the accordion component will use ['session storage'](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to remember which sections were open. This functionality can be turned off by adding `rememberExpanded: false` to the Nunjucks macro.

To see the changes you've made, you may need to create a new 'session'. For example, by opening a page in a new tab or window.

Add the `govuk-accordion__section--expanded` class to the `govuk-accordion__section` `div` to make individual sections open from the start. You can also do this using nunjucks macro options, if you are using the nunjucks macro by setting the `expanded` option to `true` on the individual accordion items you want to be expanded.

You can configure sections to start and stay open, but not stay closed.

##### Do not disable sections

Disabling controls is normally confusing for users. If there is no content for a section, either remove the section or, if this would be confusing for your users, explain why there is no content when the section is opened.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Must be unique across the domain of your service if `rememberExpanded` is `true` (as the expanded state of individual instances of the component persists across page loads using [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)). Used as an `id` in the HTML for the accordion as a whole, and also as a prefix for the `id`s of the section contents and the buttons that open them, so that those `id`s can be the target of `aria-control` attributes. |
| `headingLevel` | integer | No | Heading level, from `1` to `6`. Default is `2`. |
| `classes` | string | No | Classes to add to the accordion. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the accordion. |
| `rememberExpanded` | boolean | No | Whether the expanded/collapsed state of the accordion should be saved when a user leaves the page and restored when they return. Default is `true`. |
| `hideAllSectionsText` | string | No | The text content of the 'Hide all sections' button at the top of the accordion when all sections are expanded. |
| `hideSectionText` | string | No | The text content of the 'Hide' button within each section of the accordion, which is visible when the section is expanded. |
| `hideSectionAriaLabelText` | string | No | Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is expanded. Defaults to `"Hide this section"`. |
| `showAllSectionsText` | string | No | The text content of the 'Show all sections' button at the top of the accordion when at least one section is collapsed. |
| `showSectionText` | string | No | The text content of the 'Show' button within each section of the accordion, which is visible when the section is collapsed. |
| `showSectionAriaLabelText` | string | No | Text made available to assistive technologies, like screen-readers, as the final part of the toggle's accessible name when the section is collapsed. Defaults to `"Show this section"`. |
| `items` | array | Yes | The sections within the accordion. |
| `items[].heading` | object | Yes | The heading of each accordion section. |
| `items[].heading.text` | string | Yes | If `html` is set, this is not required. The heading text of each section. If `html` is provided, the `text` option will be ignored. |
| `items[].heading.html` | string | Yes | If `text` is set, this is not required. The heading HTML content of each section. The header is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored. |
| `items[].summary` | object | No | The summary line of each accordion section. |
| `items[].summary.text` | string | No | The summary line text content of each section. If `html` is provided, the `text` option will be ignored. |
| `items[].summary.html` | string | No | The summary line HTML content of each section. The summary line is inside the HTML `<button>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. If `html` is provided, the `text` option will be ignored. |
| `items[].content` | object | Yes | The content of each accordion section. |
| `items[].content.text` | string | Yes | If `html` is set, this is not required. The text content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored. |
| `items[].content.html` | string | Yes | If `text` is set, this is not required. The HTML content of each section, which is hidden when the section is closed. If `html` is provided, the `text` option will be ignored. |
| `items[].expanded` | boolean | No | Sets whether the section should be expanded when the page loads for the first time. Defaults to `false`. |

### Examples

#### Default

```njk
{{ govukAccordion({
  id: "default-example",
  items: [
    {
      heading: {
        text: "Section A"
      },
      content: {
        text: "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post."
      }
    },
    {
      heading: {
        text: "Section B"
      },
      content: {
        html: "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="default-example">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="default-example-heading-1">
          Section A
        </span>
      </h2>
    </div>
    <div id="default-example-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">
        We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
      </p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="default-example-heading-2">
          Section B
        </span>
      </h2>
    </div>
    <div id="default-example-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>
```

#### With additional descriptions

```njk
{{ govukAccordion({
  id: "with-descriptions",
  items: [
    {
      heading: {
        text: "Test"
      },
      summary: {
        text: "Additional description"
      },
      content: {
        html: "<p class=\"govuk-body\">\n  We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.\n</p>\n<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 1</li>\n</ul>\n"
      }
    },
    {
      heading: {
        text: "Test 2"
      },
      summary: {
        html: "<span class=\"govuk-!-font-weight-regular\">Additional description (wrapped in span)</span>"
      },
      content: {
        html: "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}) }}
```

#### With long content and description

```njk
{{ govukAccordion({
  id: "with-long-content-and-description",
  items: [
    {
      heading: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis tortor porttitor."
      },
      summary: {
        text: "Etiam diam dui, tempus ut pharetra in, aliquet non dui. Nunc pulvinar maximus tortor, ac finibus augue congue vitae. Donec sed cursus lorem."
      },
      content: {
        html: "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 1</li>\n</ul>\n"
      }
    },
    {
      heading: {
        text: "Praesent faucibus leo feugiat libero pharetra lacinia. Aliquam aliquet ante vitae mollis vestibulum."
      },
      summary: {
        html: "<span class=\"govuk-!-font-weight-regular\">Maecenas nec <abbr>est</abbr> sapien. Etiam varius luctus mauris non porttitor. </span>"
      },
      content: {
        html: "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}) }}
```

#### With all sections already open

```njk
{{ govukAccordion({
  id: "all-sections-open-example",
  items: [
    {
      heading: {
        text: "Section A"
      },
      expanded: true,
      content: {
        html: "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 1</li>\n</ul>\n"
      }
    },
    {
      heading: {
        text: "Section B"
      },
      expanded: true,
      content: {
        html: "<ul class=\"govuk-list govuk-list--bullet\">\n  <li>Example item 2</li>\n</ul>\n"
      }
    }
  ]
}) }}
```

---
## Back link

[↑ Back to top](#table-of-contents)

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
## Breadcrumbs

[↑ Back to top](#table-of-contents)

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
## Button

[↑ Back to top](#table-of-contents)

**Macro:** `govukButton` · **Import:** `{% from "govuk/components/button/macro.njk" import govukButton %}`

**Design System guidance:** https://design-system.service.gov.uk/components/button/

### Guidance

#### When to use this component

Use the button component to help users carry out an action like starting an application or saving their information.

#### How it works

Write button text in sentence case, describing the action it performs. For example:

- ‘Start now’ at the [start of your service](https://design-system.service.gov.uk/patterns/start-using-a-service/)
- ‘Sign in’ to an account a user has already created
- ‘Continue’ when the service does not save a user’s information
- ‘Save and continue’ when the service does save a user’s information
- ‘Save and come back later’ when a user can save their information and come back later
- ‘Add another’ to add another item to a list or group
- ‘Pay’ to make a payment
- ‘Confirm and send’ on a [Check answers page](https://design-system.service.gov.uk/patterns/check-answers/) that does not have any legal content a user must agree to
- ‘Accept and send’ on a [Check answers page](https://design-system.service.gov.uk/patterns/check-answers/) that has legal content a user must agree to
- ‘Sign out’ when a user is signed in to an account

You may need to include more or different words to better describe the action. For example, ‘Add another address’ and ‘Accept and claim a tax refund’.

Align the primary action button to the left edge of your form.

There are 2 ways to use the Button component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Default buttons

Use a default button for the main call to action on a page.

Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next.

##### Start buttons

Use a start button for the main call to action on [your service’s Start page](https://design-system.service.gov.uk/patterns/start-using-a-service/).
Start buttons do not usually submit form data, so use a link tag instead of a button tag.

##### Secondary buttons

Use secondary buttons for secondary calls to action on a page.

Pages with too many calls to action make it hard for users to know what to do next. Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages.

You can also [group default and secondary buttons together](https://design-system.service.gov.uk/components/button/#grouping-buttons).

##### Warning buttons

Warning buttons are designed to make users think carefully before they use them. They only work if used very sparingly. Most services should not need one.

Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account.

When letting users carry out an action like this, it's a good idea to include an additional step which asks them to confirm it.

In this instance, use another style of button for the initial call to action, and a warning button for the final confirmation.

Do not only rely on the red colour of a warning button to communicate the serious nature of the action. This is because not all users will be able to see the colour or will understand what it signifies. Make sure the context and button text make clear what will happen if the user selects it.

##### Buttons on dark backgrounds

Use the `govuk-button--inverse` modifier class to show white buttons on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the button – the white button and background colour must have a contrast ratio of at least 4.5:1 to meet [WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

##### Disabled buttons

Disabled buttons have poor contrast and can confuse some users, so avoid them if&nbsp;possible.

Only use disabled buttons if research shows it makes the user interface easier to&nbsp;understand.

##### Grouping buttons

Use a button group when two or more buttons are placed together.

Any links within a button group will automatically align with the buttons.

##### Stop users from accidentally sending information more than once

Sometimes, users double click buttons because they:

- have used operating systems where they have to double click items to make them work
- are experiencing a slow connection which means they are not given feedback on their action quickly enough
- have motor impairments such as hand tremors which cause them to click the button involuntarily

In some cases, this can mean their information is sent twice.

For example, the GOV.UK Notify team discovered that a number of users were receiving invitations twice, because the person sending them was double clicking the 'send' button.

If you are working in production and research shows that users are frequently sending information twice, you can configure the button to ignore the second click.

To do this, set the `data-prevent-double-click` attribute to `true`. You can do this directly in the HTML or, if you’re using Nunjucks, you can use the Nunjucks macro as shown in this example.

This feature will prevent double clicks for users that have JavaScript enabled, however you should also think about the issue server-side to protect against attacks.

In the case of slow connections, aim to give the user information about what’s happening, for example, by showing a loading spinner or a modal, before using `data-prevent-double-click`.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text for the button. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML for the button. If `html` is provided, the `text` option will be ignored. |
| `type` | string | No | Type of the button, determining its behaviour in forms – `"button"`, `"submit"` or `"reset"`. Defaults to `"submit"`. This has no effect if `href` is set. |
| `name` | string | No | Name of the button, sent when a form is submitted. This has no effect if `href` is set. |
| `value` | string | No | Value of the button, sent when a form is submitted. This has no effect if `href` is set. |
| `disabled` | boolean | No | Whether the button should be disabled. `disabled` and `aria-disabled` attributes will be set automatically. This has no effect if `href` is set. |
| `href` | string | No | The URL that the button should link to. |
| `classes` | string | No | Classes to add to the button. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the button. |
| `preventDoubleClick` | boolean | No | Prevent accidental double clicks on submit buttons from submitting forms multiple times. This has no effect if `href` is set. |
| `isStartButton` | boolean | No | Use for the main call to action on your service's start page. |
| `id` | string | No | The ID of the button. |

### Examples

#### Default

```njk
{{ govukButton({
  text: "Save and continue"
}) }}
```

Renders as:

```html
<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
```

#### Default hover state

```njk
{{ govukButton({
  text: "Save and continue",
  classes: ":hover"
}) }}
```

#### Default active state

```njk
{{ govukButton({
  text: "Save and continue",
  classes: ":active"
}) }}
```

#### Default focus state

```njk
{{ govukButton({
  text: "Save and continue",
  classes: ":focus"
}) }}
```

#### Disabled

```njk
{{ govukButton({
  text: "Disabled button",
  disabled: true
}) }}
```

#### Link

```njk
{{ govukButton({
  text: "Link button",
  href: "/"
}) }}
```

#### Start

```njk
{{ govukButton({
  text: "Start now button",
  isStartButton: true
}) }}
```

#### Secondary

A button for secondary actions

```njk
{{ govukButton({
  name: "secondary",
  text: "Secondary button",
  classes: "govuk-button--secondary"
}) }}
```

#### Secondary hover state

```njk
{{ govukButton({
  name: "secondary",
  text: "Secondary button",
  classes: "govuk-button--secondary :hover"
}) }}
```

#### Secondary active state

```njk
{{ govukButton({
  name: "secondary",
  text: "Secondary button",
  classes: "govuk-button--secondary :active"
}) }}
```

#### Secondary focus state

```njk
{{ govukButton({
  name: "secondary",
  text: "Secondary button",
  classes: "govuk-button--secondary :focus"
}) }}
```

#### Secondary disabled

```njk
{{ govukButton({
  name: "secondary",
  text: "Secondary button disabled",
  classes: "govuk-button--secondary",
  disabled: true
}) }}
```

#### Warning

A button for actions that need a warning

```njk
{{ govukButton({
  name: "Warning",
  text: "Warning button",
  classes: "govuk-button--warning"
}) }}
```

#### Warning hover state

```njk
{{ govukButton({
  name: "Warning",
  text: "Warning button",
  classes: "govuk-button--warning :hover"
}) }}
```

#### Warning active state

```njk
{{ govukButton({
  name: "Warning",
  text: "Warning button",
  classes: "govuk-button--warning :active"
}) }}
```

#### Warning focus state

```njk
{{ govukButton({
  name: "Warning",
  text: "Warning button",
  classes: "govuk-button--warning :focus"
}) }}
```

#### Warning disabled

```njk
{{ govukButton({
  name: "warning",
  text: "Warning button disabled",
  classes: "govuk-button--warning",
  disabled: true
}) }}
```

#### Inverse

A button that appears on dark backgrounds

```njk
{{ govukButton({
  name: "Inverse",
  text: "Inverse button",
  classes: "govuk-button--inverse"
}) }}
```

#### Inverse hover state

```njk
{{ govukButton({
  name: "Inverse",
  text: "Inverse button",
  classes: "govuk-button--inverse :hover"
}) }}
```

#### Inverse active state

```njk
{{ govukButton({
  name: "Inverse",
  text: "Inverse button",
  classes: "govuk-button--inverse :active"
}) }}
```

#### Inverse focus state

```njk
{{ govukButton({
  name: "Inverse",
  text: "Inverse button",
  classes: "govuk-button--inverse :focus"
}) }}
```

#### Inverse disabled

```njk
{{ govukButton({
  name: "Inverse",
  text: "Inverse button",
  classes: "govuk-button--inverse",
  disabled: true
}) }}
```

---
## Character count

[↑ Back to top](#table-of-contents)

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
| `label` | object | Yes | The label used by the character count component. See [Label](#label) for its options. |
| `hint` | object | No | Can be used to add a hint to the character count component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the character count component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
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
## Checkboxes

[↑ Back to top](#table-of-contents)

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
| `fieldset` | object | No | Can be used to add a fieldset to the checkboxes component. See [Fieldset](#fieldset) for its options. |
| `hint` | object | No | Can be used to add a hint to the checkboxes component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the checkboxes component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
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
| `items[].label` | object | No | Subset of options for the label used by each checkbox item within the checkboxes component. See [Label](#label) for its options. |
| `items[].label.classes` | string | No | Classes to add to the label tag. |
| `items[].label.attributes` | object | No | HTML attributes (for example data attributes) to add to the label tag. |
| `items[].hint` | object | No | Can be used to add a hint to each checkbox item within the checkboxes component. See [Hint](#hint) for its options. |
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
## Cookie banner

[↑ Back to top](#table-of-contents)

**Macro:** `govukCookieBanner` · **Import:** `{% from "govuk/components/cookie-banner/macro.njk" import govukCookieBanner %}`

**Design System guidance:** https://design-system.service.gov.uk/components/cookie-banner/

### Guidance

Allow users to accept or reject cookies which are not essential to making your service work.

#### When to use this component

Use this component if your service sets any cookies on a user’s device.

Remember, you must:

- tell users about the cookies your service sets on their device
- let users accept or reject any cookies that are not essential to providing your service

The term ‘non-essential cookies’ includes:

- HTML5 local storage
- service workers
- any other technologies that store files on the user’s device

This cookie banner and the [Cookies page pattern](https://design-system.service.gov.uk/patterns/cookies-page/) are based on the approach to getting cookie consent used on the GOV.UK website.

This component page shows several options for using a cookie banner, based on the types of cookies you’re using in the service. We also tell you what to cover in your cookie banner, with some text examples.

##### Before you start

[Audit and categorise your cookies](https://design-system.service.gov.uk/patterns/cookies-page/#auditing-and-categorising-your-cookies) as shown in the cookies page pattern to help you choose the best option for your service.

You must not take the information on this page as legal advice. Your organisation is responsible and accountable for what they do to comply with data protection legislation, such as:

- Privacy and Electronic Communications Regulations (PECR)
- General Data Protection Regulation (GDPR)

Check with your organisation's privacy expert to see how data protection legislation affects your website and service.

#### How it works

Show the cookie banner every time the user accesses your service until they either:

- accept or reject cookies using the buttons in the cookie banner
- save their cookie preferences on [your service’s Cookies page](https://design-system.service.gov.uk/patterns/cookies-page/)

Once the user has accepted or rejected cookies, the cookie banner should:

- hide the cookie banner message
- show a confirmation message – and a 'hide' button to let the user close the banner
- set a cookie to save the user’s preferences for 1 year

Make sure the cookie banner does not:

- show when the user visits again, once their preferences have been saved
- set any non-essential cookies unless the user accepted them on a previous visit

Position the cookie banner after the opening `<body>` tag and before the ’skip to main content‘ link. If you're using the Nunjucks page template, use the `bodyStart` block.

Do not make the Cookie banner component ‘sticky’ to the top of the page by using `position: fixed` or any other method. This is to make sure it does not cover or obscure any content which has a focus applied. This is to comply with [WCAG 2.2 success criterion 2.4.11 Focus not obscured (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

##### Option 1: If you’re only using essential cookies

You can choose not to have a cookie banner if the service only sets essential or 'strictly necessary' cookies, as these do not need user consent.

However, you must tell users that you set essential cookies. You can do this with a cookies page – link to this page in the footer.

##### Option 2: If you set non-essential cookies for users (with or without JavaScript)

You can choose this option if your service sets non-essential cookies on the server – your service may also set non-essential cookies on the client.

To get consent from the user, display the cookie banner inside a form that lets them submit their choice to accept or reject cookies.

All users will be able to see the banner as this approach does not rely on JavaScript.

Here's an example of a cookie banner inside a form:

Once the user has accepted or rejected cookies and set their cookie preferences, reload the page to show a confirmation message.

Here's an example of a confirmation message inside a form:

###### Show the same message to all users

In the cookie banner, tell the user about all the cookies you’re using in the service – whether they've enabled JavaScript or not. This way, you will not need to ask the user to give their consent again on their next visit.

###### Help users keep their place using progressive enhancement

If the user is entering information into a form as part of the service, they might lose their place when they submit their choice to accept or reject cookies.

To help users running JavaScript on their device, you can write some JavaScript code to let them submit their choice and prevent the page from reloading.

Include all possible messages that the user could see in the cookie banner when the page loads. Hide these with the `hidden` HTML attribute where needed.

Here's an example of a progressively enhanced cookie banner that includes all possible messages which are hidden using HTML – the cookie banner message is shown using JavaScript to remove the `hidden` attribute:

Here's the same example of a progressively enhanced cookie banner, with the confirmation message shown instead:

##### Option 3: If you set non-essential cookies, but only using client-side JavaScript

You can choose to make your banner only work with JavaScript if your service only needs to set non-essential cookies on the client.

When the page loads, the `hidden` html attribute hides the component, as well as all the cookie banner messages it contains, which the user might otherwise see.

###### Show the cookie banner only to users that have enabled JavaScript

Use JavaScript to show cookie banner messages to users that have not accepted or rejected cookies by removing the `hidden` attribute as needed.

Write your own JavaScript code so that when the user accepts or rejects cookies, the cookie banner will:

- hide the cookie message by adding the hidden attribute
- show a confirmation message by removing its hidden attribute
- give the confirmation message the `tabindex="-1"` and `role="alert"` attributes – this will allow the element to be focused so assistive technology can read the message
- shift focus to the confirmation message

Here’s an example:

###### When the user has accepted cookies

Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the `hidden` attribute.

###### When the user has rejected cookies

#### What to cover in your cookie banner

Include the name of the service in the banner heading to help users understand that the cookies you’re talking about are different from the ones set by the main GOV.UK platform.

You’ll need to change the example cookie banner text if your service:

- allows third parties to set cookies (tell the user that both your organisation and other organisations will be setting cookies)
- uses cookies for reasons other than collecting analytics information or remembering the user’s settings

Keep the text as short as possible while making sure it’s an accurate description of how you use cookies. For example, if you use more than one ‘functional’ cookie and there’s not enough space to mention what each of them does, you could ask for permission to set cookies so ‘you can use as many of the service’s features as possible’.

[See the Cookies page pattern for more advice on writing about cookies](https://design-system.service.gov.uk/patterns/cookies-page/).

##### If you’re using essential cookies and analytics cookies

You can use this example text for a service which sets essential and analytics cookies. Analytics cookies are those set by your organisation to collect information about how people are using your digital service.

##### If you’re using more than one type of non-essential cookie

You can use this example text for a service that set:

- essential cookies
- analytics cookies
- functional cookies to remember the user’s settings but are not essential

#### Creating a cookies page

You’ll need a [Cookies page in your service](https://design-system.service.gov.uk/patterns/cookies-page/) as well as a cookie banner.

#### Brand refresh of the Cookie banner component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `ariaLabel` | string | No | The text for the `aria-label` which labels the cookie banner region. This region applies to all messages that the cookie banner includes. For example, the cookie message and the confirmation message. Defaults to `"Cookie banner"`. |
| `hidden` | boolean | No | Defaults to `false`. If you set this option to `true`, the whole cookie banner is hidden, including all messages within the banner. You can use `hidden` for client-side implementations where the cookie banner HTML is present, but hidden until the cookie banner is shown using JavaScript. |
| `classes` | string | No | The additional classes that you want to add to the cookie banner. |
| `attributes` | object | No | The additional attributes that you want to add to the cookie banner. For example, data attributes. |
| `messages` | array | Yes | The different messages you can pass into the cookie banner. For example, the cookie message and the confirmation message. |
| `messages[].headingText` | string | No | The heading text that displays in the message. You can use any string with this option. If you set `headingHtml`, `headingText` is ignored. |
| `messages[].headingHtml` | string | No | The heading HTML to use within the message. You can use any string with this option. If you set `headingHtml`, `headingText` is ignored. If you are not passing HTML, use `headingText`. |
| `messages[].text` | string | Yes | The text for the main content within the message. You can use any string with this option. If you set `html`, `text` is not required and is ignored. |
| `messages[].html` | string | Yes | The HTML for the main content within the message. You can use any string with this option. If you set `html`, `text` is not required and is ignored. If you are not passing HTML, use `text`. |
| `messages[].actions` | array | No | The buttons and links that you want to display in the message. `actions` defaults to `"button"` unless you set `href`, which renders the action as a link. |
| `messages[].actions[].text` | string | Yes | The button or link text. |
| `messages[].actions[].type` | string | No | The type of button – `"button"` or `"submit"`. If `href` is provided, set `type` to `"button"` render a link styled as a button. |
| `messages[].actions[].href` | string | No | The `href` for a link. Set `type` to `"button"` and set `href` to render a link styled as a button. |
| `messages[].actions[].name` | string | No | The name attribute for the button. Does not apply if you set `href`, which makes a link. |
| `messages[].actions[].value` | string | No | The value attribute for the button. Does not apply if you set `href`, which makes a link. |
| `messages[].actions[].classes` | string | No | The additional classes that you want to add to the button or link. |
| `messages[].actions[].attributes` | object | No | The additional attributes that you want to add to the button or link. For example, data attributes. |
| `messages[].hidden` | boolean | No | Defaults to `false`. If you set it to `true`, the message is hidden. You can use `hidden` for client-side implementations where the confirmation message HTML is present, but hidden on the page. |
| `messages[].role` | string | No | Set `role` to `"alert"` on confirmation messages to allow assistive tech to automatically read the message. You will also need to move focus to the confirmation message using JavaScript you have written yourself. |
| `messages[].classes` | string | No | The additional classes that you want to add to the message. |
| `messages[].attributes` | object | No | The additional attributes that you want to add to the message. For example, data attributes. |

### Examples

#### Default

```njk
{{ govukCookieBanner({
  messages: [
    {
      headingText: "Cookies on this government service",
      text: "We use analytics cookies to help understand how users use our service.",
      actions: [
        {
          text: "Accept analytics cookies",
          type: "submit",
          name: "cookies",
          value: "accept"
        },
        {
          text: "Reject analytics cookies",
          type: "submit",
          name: "cookies",
          value: "reject"
        },
        {
          text: "View cookie preferences",
          href: "/cookie-preferences"
        }
      ]
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookie banner">
  <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">
          Cookies on this government service
        </h2>
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">We use analytics cookies to help understand how users use our service.</p>
        </div>
      </div>
    </div>

    <div class="govuk-button-group">
      <button type="submit" value="accept" name="cookies" class="govuk-button" data-module="govuk-button">
        Accept analytics cookies
      </button>
      <button type="submit" value="reject" name="cookies" class="govuk-button" data-module="govuk-button">
        Reject analytics cookies
      </button>
      <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
    </div>

  </div>
</div>
```

#### Accepted confirmation banner

```njk
{{ govukCookieBanner({
  messages: [
    {
      text: "Your cookie preferences have been saved. You have accepted cookies.",
      role: "alert",
      actions: [
        {
          text: "Hide cookie message",
          type: "button"
        }
      ]
    }
  ]
}) }}
```

#### Rejected confirmation banner

```njk
{{ govukCookieBanner({
  messages: [
    {
      text: "Your cookie preferences have been saved. You have rejected cookies.",
      role: "alert",
      actions: [
        {
          text: "Hide cookie message",
          type: "button"
        }
      ]
    }
  ]
}) }}
```

#### With html

```njk
{{ govukCookieBanner({
  messages: [
    {
      headingHtml: "Cookies on <span>my service</span>",
      html: "<p class=\"govuk-body\">We use cookies in <span>our service</span>.</p>\n<p class=\"govuk-body\">We’d like to use analytics cookies so we can understand how you use the Design System and make improvements.</p>\n",
      actions: [
        {
          text: "Accept analytics cookies",
          type: "submit",
          name: "cookies",
          value: "accept"
        },
        {
          text: "Reject analytics cookies",
          type: "submit",
          name: "cookies",
          value: "reject"
        },
        {
          text: "View cookie preferences",
          href: "/cookie-preferences"
        }
      ]
    }
  ]
}) }}
```

---
## Date input

[↑ Back to top](#table-of-contents)

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
| `hint` | object | No | Can be used to add a hint to a date input component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the date input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the date input component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object | No | Content to add before the inputs used by the date input component. |
| `formGroup.beforeInputs.text` | string | Yes | Text to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | Yes | HTML to add before the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object | No | Content to add after the inputs used by the date input component. |
| `formGroup.afterInputs.text` | string | Yes | Text to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | Yes | HTML to add after the inputs. If `html` is provided, the `text` option will be ignored. |
| `fieldset` | object | No | Can be used to add a fieldset to the date input component. See [Fieldset](#fieldset) for its options. |
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
## Details

[↑ Back to top](#table-of-contents)

**Macro:** `govukDetails` · **Import:** `{% from "govuk/components/details/macro.njk" import govukDetails %}`

**Design System guidance:** https://design-system.service.gov.uk/components/details/

### Guidance

Make a page easier to scan by letting users reveal more detailed information only if they need it.

#### When to use this component

Use the details component to make a page easier to scan when it contains information that only some users will need.

#### When not to use this component

Do not use the details component to hide information that the majority of your users will need.

#### Decide between using details, accordions and tabs

The Details component, [Accordion component](https://design-system.service.gov.uk/components/accordion/), and [Tabs component](https://design-system.service.gov.uk/components/tabs/) all hide sections of content which a user can choose to reveal.

Use the details component instead of tabs or an accordion if you only have 1 section of content.

The details component is less visually prominent than tabs and accordions, so tends to work better for content which is not as important to users.

#### How it works

The details component is a short link that shows more detailed help text when a user clicks on it.

There are 2 ways to use the details component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Write clear link text

Make the link text short and descriptive so users can quickly work out if they need to click on it.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `summaryText` | string | Yes | If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `summaryHtml` | string | Yes | If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored. |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block. |
| `id` | string | No | ID to add to the details element. |
| `open` | boolean | No | If `true`, details element will be expanded. |
| `classes` | string | No | Classes to add to the `<details>` element. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the `<details>` element. |

### Examples

#### Default

```njk
{{ govukDetails({
  summaryText: "Help with nationality",
  text: "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post."
}) }}
```

Renders as:

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>
```

#### Expanded

```njk
{{ govukDetails({
  id: "help-with-nationality",
  summaryText: "Help with nationality",
  text: "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.",
  open: true
}) }}
```

#### With html

```njk
{{ govukDetails({
  summaryText: "Where to find your National Insurance Number",
  html: "Your National Insurance number can be found on\n<ul>\n  <li>your National Insurance card</li>\n  <li>your payslip</li>\n  <li>P60</li>\n  <li>benefits information</li>\n  <li>tax return</li>\n</ul>\n"
}) }}
```

---
## Error message

[↑ Back to top](#table-of-contents)

**Macro:** `govukErrorMessage` · **Import:** `{% from "govuk/components/error-message/macro.njk" import govukErrorMessage %}`

**Design System guidance:** https://design-system.service.gov.uk/components/error-message/

### Guidance

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Follow the [Validation pattern](https://design-system.service.gov.uk/patterns/validation/) and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.

#### When to use this component

Show an error message next to the field and in the [Error summary component](https://design-system.service.gov.uk/components/error-summary/) when there is a validation error.

Use standard messages for different components.

#### When not to use this component

Do not use error messages to tell a user that they are not eligible or do not have permission to do something. Or to tell them about a lack of capacity or other problem the user cannot fix - because the problem is with the service rather than with the information the user has provided.

Instead, take the user to a page that explains the problem (for example, telling them why they’re not eligible) and provides useful information about what to do next.

There are separate patterns for:

- ['There is a problem with the service' pages](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/)
- ['Page not found' pages](https://design-system.service.gov.uk/patterns/page-not-found-pages/)
- ['Service unavailable' pages](https://design-system.service.gov.uk/patterns/service-unavailable-pages/)

#### How it works

For each error:

- put the message in red after the question text and hint text
- use a red border to visually connect the message and the question it belongs to
- if the error relates to a specific field within the question, give it a red border and refer to that field in the error message - for example: "you must enter a year"

Do not clear any form fields when showing the Error message component. Keep both passing and failing answers.

Keeping information that caused errors helps users to:

- see what went wrong
- edit their previous answer
- avoid re-entering information

To help screen reader users, the error message component includes a hidden 'Error:' before the error message. These users will hear, for example, "Error: The date your passport was issued must be in the past".

If your error message is written in another language, you can change the prefix as needed, as shown in this example.

Summarise all errors at the top of the page the user is on using an [Error summary component](https://design-system.service.gov.uk/components/error-summary/).

There are 2 ways to use the error message component. You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

##### Legend

##### Label

##### Match up error messages to labels

Error messages should directly include language from the question or fieldset label. This helps match up the error message with the relevant form field.

Here are some examples of label and error message pairs.

Example 1:

- Label: ‘How many hours do you work a week?’
- Error message: ‘Enter how many hours you work a week’

Example 2:

- Label: ‘Address line 1’
- Error message: ‘Enter address line 1, typically the building and street’

##### Be clear and concise

Describe what has happened and tell them how to fix it. The message must be in plain English, use positive language and get to the point.

Do not use:

- technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’
- words like ‘forbidden’, ‘illegal’, ‘you forgot’ and ‘prohibited’
- ‘please’ because it implies a choice
- ‘sorry’ because it does not help fix the problem
- ‘valid’ and ‘invalid’ because they do not add anything to the message
- humourous, informal language like ‘oops’

Do not give an example in the error message if there is an example on the screen. For example, if you are asking for a National Insurance number and include ‘QQ 12 34 56 C’ as hint text, do not include an example in the error message.

Above all, aim for clarity.

Read the message out loud to see if it sounds like something you would say.

##### Be consistent

Use the same message next to the field and in the [Error summary component](https://design-system.service.gov.uk/components/error-summary/) so they:

- look, sound and mean the same
- make sense out of context
- reduce the cognitive effort needed to understand what has happened

##### Be specific

General errors are not helpful to everyone. They do not make sense out of context. Avoid messages like:

- ‘An error occurred’
- ‘Answer the question’
- ‘Select an option’
- ‘Fill in the field’
- ‘This field is required’

Different errors need different messages. For example, text fields may be:

- empty
- too long
- too short
- using characters that are not allowed
- in the wrong format

An error for a specific situation is more helpful. It will tell someone what has happened and how to fix it.

##### Use instructions and descriptions

Some errors work better as instructions and some work better as descriptions. For example:

- ‘Enter your first name’ is clearer, more direct and natural than ‘First name must have an entry’
- ‘Enter a first name that is 35 characters or less’ is wordier, less direct and natural than ‘First name must be 35 characters or less’
- ‘Enter a date after 31 August 2017 for when you started the course’ is wordier, less direct and natural than ‘Date you started the course must be after 31 August 2017’

Use both instructions and descriptions, but use them consistently. For example, use an instruction for empty fields like ‘Enter your name’, but a description like ‘Name must be 35 characters or less’ for entries that are too long.

##### Use error message templates

Use template messages for common errors on:

- [Addresses pattern](https://design-system.service.gov.uk/patterns/addresses/#error-messages)
- [Character count component](https://design-system.service.gov.uk/components/character-count/#error-messages)
- [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/#error-messages)
- [Date input component](https://design-system.service.gov.uk/components/date-input/#error-messages)
- [Email address pattern](https://design-system.service.gov.uk/patterns/email-addresses/#error-messages)
- [File upload component](https://design-system.service.gov.uk/components/file-upload/#error-messages)
- [Names pattern](https://design-system.service.gov.uk/patterns/names/#error-messages)
- [National Insurance numbers pattern](https://design-system.service.gov.uk/patterns/national-insurance-numbers/#error-messages)
- [Radios component](https://design-system.service.gov.uk/components/radios/#error-messages)
- [Phone numbers pattern](https://design-system.service.gov.uk/patterns/phone-numbers/#error-messages)
- [Text input component](https://design-system.service.gov.uk/components/text-input/#error-messages)
- [Textarea component](https://design-system.service.gov.uk/components/textarea/#error-messages)

##### Track errors

Find out how often people see them. This will let you:

- improve content
- A/B test variations
- redesign a journey

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored. |
| `id` | string | No | ID attribute to add to the error message `<p>` tag. |
| `classes` | string | No | Classes to add to the error message `<p>` tag. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the error message `<p>` tag. |
| `visuallyHiddenText` | string | No | A visually hidden prefix used before the error message. Defaults to `"Error"`. |

### Examples

#### Default

```njk
{{ govukErrorMessage({
  text: "Error message about full name goes here"
}) }}
```

Renders as:

```html
<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message about full name goes here
</p>
```

#### Translated

```njk
{{ govukErrorMessage({
  visuallyHiddenText: "",
  html: "<span class=\"govuk-visually-hidden\">Gwall:</span> Neges gwall am yr enw llawn yn mynd yma"
}) }}
```

---
## Error summary

[↑ Back to top](#table-of-contents)

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
## Exit this page

[↑ Back to top](#table-of-contents)

**Macro:** `govukExitThisPage` · **Import:** `{% from "govuk/components/exit-this-page/macro.njk" import govukExitThisPage %}`

**Design System guidance:** https://design-system.service.gov.uk/components/exit-this-page/

### Guidance

Give users a way to quickly and safely exit a service, website or application.

For service journeys, you must use this component with the [Exit a page quickly pattern](https://design-system.service.gov.uk/patterns/exit-a-page-quickly/).

#### When to use this component

Use the component on pages with sensitive information that could:

- put someone at risk of abuse or retaliation
- reveal someone’s plans to avoid or escape from harm

For example, when a potential victim is using a service to help them leave a domestic abuser.

You can use this component on either:

- all the pages in a service
- parts of the journey with sensitive information

You can also use this component for standalone content pages, such as dashboards and guidance.

#### When not to use this component

Do not use this component if the service or content is unlikely to put a user at risk. See the [Exit a page quickly pattern](https://design-system.service.gov.uk/patterns/exit-a-page-quickly/) for examples of at-risk and sensitive topics.

The 'Exit this page' component is a [Button component](https://design-system.service.gov.uk/components/button/) that has been marked up with addtional CSS and JavaScript functionality, to make it work in a specific way.

Keep in mind that seeing this component might discourage certain users from using your service. If the user does not identify themselves as being at risk, they might see the button on a service and decide it’s not relevant to them.

#### How it works

There are 2 ways to use this component. You can use HTML or, if you're using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

##### Adding the button

Position the component at the top of your page, above the beginning of the grid (`<div class="govuk-grid-row">`) but still within the width container (`<div class="govuk-width-container">`).

##### Choosing a different website to load

When activated, the component by default will take the user to the [homepage of BBC Weather](https://www.bbc.co.uk/weather). You can change this if there’s a more appropriate site for your users.

Avoid websites that might show personalised pages (such as frequently visited, last visited or suggested links), as this content could put the user at risk.

##### Adding the secondary link

Add the code for the 'secondary link' into the layout file of your service. The 'secondary link' is an additional `govuk-skip-link` that works in a similar way. Place it under the page template's default skip link at the very top of the body.

When the user interacts with the 'secondary link', it will perform the same action as pressing the button to activate Exit this Page.

The `href` for the 'secondary link' should be the same as the URL used for the button.

The component will still work if the 'secondary link' is not added, but it'll be less accessible overall.

#### Consider what to do with user session data

You’ll need to decide if your service will store the user’s session data after they’ve activated the Exit this page component and left your service.

For example, you could do this in 2 steps:

1. replace the default website link to a URL in your service, that when visited, will clear the user's session data
2. redirect the user to another website, such as BBC Weather

#### Enhancement features

These features are included in the component and should work automatically, as long as the user has enabled Javascript in their browser. You do not need to do anything to make these work.

##### Loading overlay

The 'loading overlay' will appear immediately when the user activates Exit this page.

The overlay helps users with slow connections clear their screen until the browser loads the next page.

##### Showing progress for 'shift key' presses

To show the user the number of times they’ve pressed the shift button, there’s a series of 3 progress dots under the button, provided as a visual enhancement. Each time the shift key is pressed, one of the dots will be filled.

The user has 5 seconds to press the shift key 3 times. After that, the sequence and progress dots will reset.

#### Accessibility features and considerations

In addition to the Exit this page button itself, users have 2 other options to activate the component. We've tested and iterated both of these options to be accessible, reliable and as discreet as possible for users.

The keyboard option, where the user can press shift 3 times, gives users a discreet way to activate the component, particularly keyboard-only users. We considered options that used a single key press (such as the 'esc' key), but we could not be confident that this would not interfere with other user actions.

The 'secondary link' option is a hidden link in the tab order of the page. This gives users of assistive technology an easier way to reliably activate the component.

To help users of speech recognition software activate the 'secondary link' more discreetly, we considered changing the link text to something else that hid its real purpose.

However, we decided this was more likely to confuse users. We're also confident about the other ways users can use speech recognition software to activate the 'secondary link' without saying the text out loud, such as choosing the link as an item number on a list.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | No | Text for the link. If `html` is provided, the `text` option will be ignored. Defaults to `"Emergency Exit this page"` with 'Emergency' visually hidden. |
| `html` | string | No | HTML for the link. If `html` is provided, the `text` option will be ignored. Defaults to `"Emergency Exit this page"` with 'Emergency' visually hidden. |
| `redirectUrl` | string | No | URL to redirect the current tab to. Defaults to `"https://www.bbc.co.uk/weather"`. |
| `id` | string | No | ID attribute to add to the exit this page container. |
| `classes` | string | No | Classes to add to the exit this page container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the exit this page container. |
| `activatedText` | string | No | Text announced by screen readers when Exit this Page has been activated via the keyboard shortcut. Defaults to `"Loading."`. |
| `timedOutText` | string | No | Text announced by screen readers when the keyboard shortcut has timed out without successful activation. Defaults to `"Exit this page expired."`. |
| `pressTwoMoreTimesText` | string | No | Text announced by screen readers when the user must press <kbd>Shift</kbd> two more times to activate the button. Defaults to `"Shift, press 2 more times to exit."`. |
| `pressOneMoreTimeText` | string | No | Text announced by screen readers when the user must press <kbd>Shift</kbd> one more time to activate the button. Defaults to `"Shift, press 1 more time to exit."`. |

### Examples

#### Default

```njk
{{ govukExitThisPage({
  redirectUrl: "/full-page-examples/announcements",
  attributes: {}
}) }}
```

Renders as:

```html
<div class="govuk-exit-this-page" data-module="govuk-exit-this-page">
  <a href="/full-page-examples/announcements" role="button" draggable="false" class="govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button" data-module="govuk-button" rel="nofollow noreferrer">
    <span class="govuk-visually-hidden">Emergency</span> Exit this page
  </a>
</div>
```

---
## Feedback

[↑ Back to top](#table-of-contents)

**Macro:** `govukFeedback` · **Import:** `{% from "govuk/components/feedback/macro.njk" import govukFeedback %}`

**Design System guidance:** https://design-system.service.gov.uk/components/feedback/

### Guidance

Ask users to give feedback about their experience using your service.

#### When to use this component

Use the Feedback component to give users the opportunity to give feedback at any point in their journey. This helps you gather a wide range of feedback to understand how well your service performs and improvements you can make.

#### How it works

Show the Feedback component on as many pages of your service as you can.

The component is designed to allow users to give feedback at any time without distracting them.

##### Ask for feedback at the end of each page

Place the Feedback component just before the GOV.UK footer component.

If your service is using Nunjucks, you can use the [GOV.UK Frontend page template](https://design-system.service.gov.uk/styles/page-template/) to add the Feedback component by placing it in the `footerStart` template block.

##### Asking users for feedback

The heading and message in the Feedback component should tell users:

- why you want feedback
- what you'll do with their feedback

Also try to give users some idea about:

- how long it'll take to give feedback
- the difference between giving feedback and asking for support

You must include a link to a feedback page, which could be either:

- [a GOV.UK feedback page](https://www.gov.uk/service-manual/service-assessments/get-feedback-page)
- a feedback page page of your own, if you need to ask specific questions

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `titleText` | string | Yes | Text to use within the title of the Feedback component. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleHtml` | string | Yes | HTML to use within the title of the Feedback component. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `headingLevel` | integer | No | Heading level, from `1` to `6`. Default is `2`. |
| `text` | string | Yes | Text to use within the Feedback component content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | HTML to use within the Feedback component content. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | No | Not strictly a parameter but a [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block lets you call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you'll need to wrap the entire Feedback component in a `call` block. |
| `classes` | string | No | Classes to add to the Feedback component container. |
| `attributes` | object | No | HTML attributes (for example, data attributes) to add to the Feedback component container. |

### Examples

#### Default

```njk
{{ govukFeedback({
  titleText: "Help us improve this service",
  html: "<p class=\"govuk-body\">Tell us about your experience using this service. <a href=\"#\" class=\"govuk-link\">Give us your feedback</a></p>\n"
}) }}
```

Renders as:

```html
<div class="govuk-feedback govuk-width-container">
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h2 class="govuk-feedback__title">
        Help us improve this service
      </h2>
        <div class="govuk-feedback__body">
            <p class="govuk-body">Tell us about your experience using this service. <a href="#" class="govuk-link">Give us your feedback</a></p>
        </div>
    </div>
  </div>
</div>
```

#### Silly example

In reality we'd recommend users only use the default example but this is to illustrate if a service team decides they want to add a lot of content

```njk
{{ govukFeedback({
  titleText: "Help us improve this service",
  html: "<p class=\"govuk-body\">Tell us about your experience using this service.</p>\n<p class=\"govuk-body\">Click this cool link to <a href=\"#\" class=\"govuk-link\">give us your feedback</a>.</p>\n<p class=\"govuk-body\">There's another paragraph here.</p>\n<ul class=\"govuk-list govuk-list--bullet\">\n  <li>There is also a list</li>\n  <li>With items in</li>\n  <li>How strange!</li>\n</ul>\n"
}) }}
```

---
## Fieldset

[↑ Back to top](#table-of-contents)

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
## File upload

[↑ Back to top](#table-of-contents)

**Macro:** `govukFileUpload` · **Import:** `{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}`

**Design System guidance:** https://design-system.service.gov.uk/components/file-upload/

### Guidance

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Help users select and upload a file.

#### When to use this component

You should only ask users to upload something if it’s critical to the delivery of your service.

We improved the component in March 2025, so you’ll need to enable the [improved File upload component](https://design-system.service.gov.uk/components/file-upload/#using-the-improved-file-upload-component) as a new feature.

Read a blog post about [design tips for helping users upload things](https://designnotes.blog.gov.uk/2017/02/14/some-design-tips-for-uploading-things/).

#### How it works

To upload a file, the user can either:

- use the ‘Choose file’ button
- drag and drop a file into the file upload input area

##### Let users reuse uploaded files

Make sure users can easily reuse a previously uploaded file within a single journey, unless doing so would be a major security or privacy concern.

For example, a user might need to upload a photo of their driving licence to prove their identity, and again to prove their address.

You can make it easier for the user to reuse a file by showing it as an option for the user to select so they do not need to upload it again. Consider users on public devices before choosing to make the file available to preview or download.

There are 2 ways to use the file upload component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Error messages

Error messages should be styled like this:

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

###### If no file has been selected

Say ‘Select a [whatever they need to select]’.<br>
For example, ‘Select a report’.

###### If the file is the wrong file type

Say ‘The selected file must be a [list of file types]’.<br>
For example, ‘The selected file must be a CSV or ODS’ or ‘The selected file must be a JPG, BMP, PNG, TIF or PDF’.

###### If the file is too big

Say ‘The selected file must be smaller than [largest file size]’.<br>
For example, ‘The selected file must be smaller than 2MB’.

###### If the file is empty

Say ‘The selected file is empty’.

###### If the file contains a virus

Say ‘The selected file contains a virus’.

###### If the file is password protected

Say ‘The selected file is password protected’.

###### If there was a problem and the file was not uploaded

Say ‘The selected file could not be uploaded – try again’.

###### If there is a limit on how many files the user can select

Say ‘You can only select up to [highest number] files at the same time’.<br>
For example, ‘You can only select up to 10 files at the same time’.

###### If the file is not in a template that must be used or the template has been changed

Say ‘The selected file must use the template’.

#### Using the improved File upload component

In March 2025, we introduced changes to the File upload component that service teams can opt in to as part of GOV.UK Frontend 5.9.0.

The improved component is intended to:

- fix accessibility issues
- improve the user experience
- allow text in the component to be translated

We recommend service teams start using the latest component to improve the experience for users. However, it's a visual change from the previous component and might affect existing designs and layouts.

To let teams migrate at their own pace, the improvements are only enabled if you use the `javascript` macro option or extra markup in your HTML.

This example shows you how to enable the improved File upload component:

##### About HTML attributes

JavaScript creates the improved version of the component out of the input (`<input type="file">`) and then hides the input from the user. The improved version consists of a `<button>` with a few `<span>` elements inside.

Some HTML attributes applied to the input might not work or work differently.

These attributes must stay in the original input since they're used by the button:

- `id` and its value are added to the button and renamed on the input
- `disabled` is copied and synchronised with any changes that happen on the input
- `aria-describedby` is copied

These attributes must stay in the original input since they only work in the input (and not the button):

- `name`
- `accept`
- `capture`
- `accesskey`
- `multiple`, which also changes the behaviour of the button as text is added when multiple files are selected

To add any other attributes to the improved version, you'll have to add them either to the parent `<div>` or through JavaScript to the button.

Screen readers will not read out the `required` attribute in the improved version. Although we [recommend not to use that attribute](https://design-system.service.gov.uk/patterns/validation/#turn-off-html5-validation).

##### Changes in the improved component

To make it easier for users to drag and drop files, we’ve made the drop zone:

- bigger
- visible at all times
- more visually responsive to user interactions

We’ve also changed the ‘Choose file’ button to be more consistent with the secondary button in the [Button component](https://design-system.service.gov.uk/components/button).

Service teams can change the text on the button and in the ‘No file chosen’ message. We decided to make this text changeable for translation purposes and to let teams be specific about the file to upload. However, teams should aim to keep the text as short as possible for accessibility purposes. For example, screen reader users might find it difficult to use the component if the text is too long.

All the text in the component can now be translated to match the language of the page content when JavaScript is running.

###### Improvements for assistive technology users

Users of Dragon, a speech recognition tool, [cannot activate their browser’s native file inputs](https://github.com/alphagov/govuk-frontend/issues/3686) by using commands for interacting with [web page controls](https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/Web/working_with_chrome.htm?Highlight=click%20button). They have to rely on [mouse commands](https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/CommandandControl/using_your_mouse.htm) or [keyboard commands](https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/CommandandControl/using_your_keyboard.htm), which take multiple steps to activate the component.

With the improved File upload component, users can say commands for interacting with web page controls to choose files.

However, due to [browser security features](https://developer.mozilla.org/en-US/docs/Web/Security/User_activation), this may not work right away or on subsequent interactions on the same page. If users cannot interact with the component, they'll first need to perform another action, such as a mouse click.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | The name of the input, which is submitted with the form data. |
| `id` | string | No | The ID of the input. Defaults to the value of `name`. If `javascript` is provided, this ID will be on the button of the improved version, and the hidden input's ID will get the suffix "-input". |
| `disabled` | boolean | No | If `true`, file input will be disabled. |
| `multiple` | boolean | No | If `true`, a user may select multiple files at the same time. The exact mechanism to do this differs depending on operating system. |
| `describedBy` | string | No | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | Yes | The label used by the file upload component. See [Label](#label) for its options. |
| `hint` | object | No | Can be used to add a hint to the file upload component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the file upload component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the file upload component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | No | Content to add before the input used by the file upload component. |
| `formGroup.beforeInput.text` | string | Yes | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | Yes | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | No | Content to add after the input used by the file upload component. |
| `formGroup.afterInput.text` | string | Yes | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | Yes | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `javascript` | boolean | No | Can be used to enable JavaScript enhancements for the component. |
| `chooseFilesButtonText` | string | No | The text of the button that opens the file picker. Default is `"Choose file"`. If `javascript` is not provided, this option will be ignored. |
| `dropInstructionText` | string | No | The text informing users they can drop files. Default is `"or drop file"`. If `javascript` is not provided, this option will be ignored. |
| `multipleFilesChosenText` | object | No | The text displayed when multiple files have been chosen by the user. The component will replace the `%{count}` placeholder with the number of files selected. [Our pluralisation rules apply to this macro option](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#understanding-pluralisation-rules). If `javascript` is not provided, this option will be ignored. |
| `noFileChosenText` | string | No | The text displayed when no file has been chosen by the user. Default is `"No file chosen"`. If `javascript` is not provided, this option will be ignored. |
| `enteredDropZoneText` | string | No | The text announced by assistive technology when user drags files and enters the drop zone. Default is `"Entered drop zone"`. If `javascript` is not provided, this option will be ignored. |
| `leftDropZoneText` | string | No | The text announced by assistive technology when user drags files and leaves the drop zone without dropping. Default is `"Left drop zone"`. If `javascript` is not provided, this option will be ignored. |
| `classes` | string | No | Classes to add to the file upload `<input>` element. If `javascript` is provided, these are not copied to the visible button. To use classes for the visible button, use the `wrapperClasses` option. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the file upload  `<input>` element. If `javascript` is provided, these are not copied to the visible button. To add attributes to the container, use the `wrapperAttributes` option instead. |
| `wrapperClasses` | string | No | Classes to add to the improved file upload component's wrapper. If `javascript` is not provided, this option will be ignored. |
| `wrapperAttributes` | object | No | HTML attributes (for example data attributes) to add to the improved file upload component's wrapper. If `javascript` is not provided, this option will be ignored. |

### Examples

#### Default

```njk
{{ govukFileUpload({
  name: "file-upload-1",
  label: {
    text: "Upload a file"
  }
}) }}
```

Renders as:

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>
```

#### With hint text

```njk
{{ govukFileUpload({
  id: "file-upload-2",
  name: "file-upload-2",
  label: {
    text: "Upload your photo"
  },
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."
  }
}) }}
```

#### With error message and hint

```njk
{{ govukFileUpload({
  id: "file-upload-3",
  name: "file-upload-3",
  label: {
    text: "Upload a file"
  },
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."
  },
  errorMessage: {
    text: "Error message goes here"
  }
}) }}
```

#### With label as page heading

```njk
{{ govukFileUpload({
  id: "file-upload-1",
  name: "file-upload-1",
  label: {
    text: "Upload a file",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

#### Enhanced

```njk
{{ govukFileUpload({
  id: "file-upload-1",
  name: "file-upload-1",
  label: {
    text: "Upload a file"
  },
  javascript: true
}) }}
```

#### Enhanced, with error message and hint

```njk
{{ govukFileUpload({
  javascript: true,
  id: "file-upload-3",
  name: "file-upload-3",
  label: {
    text: "Upload a file"
  },
  hint: {
    text: "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."
  },
  errorMessage: {
    text: "Error message goes here"
  }
}) }}
```

#### Enhanced, multiple files

```njk
{{ govukFileUpload({
  javascript: true,
  id: "file-upload-3",
  name: "file-upload-3",
  label: {
    text: "Upload files"
  },
  multiple: true
}) }}
```

#### Enhanced, custom wrapper classes and attributes

```njk
{{ govukFileUpload({
  javascript: true,
  id: "file-upload-3",
  name: "file-upload-3",
  label: {
    text: "Upload files"
  },
  wrapperClasses: "app-file-upload--custom-class",
  wrapperAttributes: {
    "data-custom-attribute": "custom-value",
    "data-custom-attribute-2": "custom-value-2"
  }
}) }}
```

#### Translated

```njk
{{ govukFileUpload({
  id: "file-upload-1",
  name: "file-upload-1",
  label: {
    text: "Llwythwch ffeil i fyny"
  },
  multiple: true,
  javascript: true,
  chooseFilesButtonText: "Dewiswch ffeil",
  dropInstructionText: "neu ollwng ffeil",
  noFileChosenText: "Dim ffeil wedi'i dewis",
  multipleFilesChosenText: {
    other: "%{count} ffeil wedi'u dewis",
    one: "%{count} ffeil wedi'i dewis"
  },
  enteredDropZoneText: "Wedi mynd i mewn i'r parth gollwng",
  leftDropZoneText: "Parth gollwng i'r chwith"
}) }}
```

---
## Footer

[↑ Back to top](#table-of-contents)

**Macro:** `govukFooter` · **Import:** `{% from "govuk/components/footer/macro.njk" import govukFooter %}`

**Design System guidance:** https://design-system.service.gov.uk/components/footer/

### Guidance

The GOV.UK footer provides copyright, licensing and other information about your service.

If you use the page template, you'll also get the footer without having to add it, as it's included by default. However, if you want to customise the default footer, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

#### When to use this component

Use the footer at the bottom of every page of your service.

#### How it works

Add a copyright notice to the footer to clarify who owns the copyright. For GOV.UK services, add the coat of arms to keep things consistent with the rest of GOV.UK.

Make it clear whether content is available for re-use - and if it is, under what sort of licence. Use an [Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) unless you have permission from the National Archives to use a [different type of licence](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/open-government-licence/other-licences/).

##### Footer without links

##### Footer with links

#### Adding links

You can add links to:

- [your service's privacy notice](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users)
- [your service's accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement)
- [your service's Cookies page](https://design-system.service.gov.uk/patterns/cookies-page/)
- terms and conditions
- help content

Use ‘Privacy’, ‘Accessibility’, ‘Cookies’ and ‘Terms and conditions’ for the link text.

If you include links to ‘help’ pages within the GOV.UK footer component, make sure to place those links consistently within the footer content.

Also make sure that ‘help’ links always function in a similar way across each page. This is to comply with [WCAG 2.2 success criterion 3.2.6 Consistent help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html).

#### Adding secondary navigation

Only add secondary GOV.UK navigation if you’re creating a GOV.UK service, and you want users to be able to navigate away from the service to somewhere else on the GOV.UK website. For example, you probably don’t want to encourage a user to navigate away from a linear, form-type service.

##### Footer with secondary navigation

##### Footer with links and secondary navigation

#### Brand refresh of the GOV.UK footer component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

With these changes, the GOV.UK header and GOV.UK footer components should now only be used by [services on the GOV.UK website](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk). Services outside of [the GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition) should stop using the header and footer components and instead create their own.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `meta` | object | No | The meta section of the footer after any navigation, before the copyright and license information. |
| `meta.visuallyHiddenTitle` | string | No | Title for a meta item section. Defaults to `"Support links"`. |
| `meta.html` | string | No | HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`. |
| `meta.text` | string | No | Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored. |
| `meta.items` | array | No | The meta `items` add content within a unordered list to the meta section of the footer component. These appear above any text or custom html in the meta section. |
| `meta.items[].text` | string | Yes | List item text in the meta section of the footer. |
| `meta.items[].href` | string | Yes | List item link `href` attribute in the meta section of the footer. |
| `meta.items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the anchor in the footer meta section. |
| `navigation` | array | No | The navigation section of the footer before a section break and the copyright and license information. |
| `navigation[].title` | string | Yes | Title for a section. |
| `navigation[].columns` | integer | No | Amount of columns to display items in navigation section of the footer. |
| `navigation[].width` | string | No | Width of each navigation section in the footer. You can pass any Design System grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"full"`. |
| `navigation[].items` | array | No | The items within the navigation section of the footer component. |
| `navigation[].items[].text` | string | Yes | List item text in the navigation section of the footer. |
| `navigation[].items[].href` | string | Yes | List item link `href` attribute in the navigation section of the footer. Both `text` and `href` attributes need to be present to create a link. |
| `navigation[].items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the anchor in the footer navigation section. |
| `contentLicence` | object | No | The content licence information within the footer component. If your service provides its information under a different license than OGL, use `null` to hide both the OGL logo and licence text. Defaults to Open Government Licence (OGL) v3 licence. |
| `contentLicence.text` | string | No | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, the text for the Open Government Licence is used. |
| `contentLicence.html` | string | No | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, the text for the Open Government Licence is used. The content licence is inside a `<span>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. |
| `copyright` | object | No | The copyright information in the footer component, this defaults to `"© Crown copyright"`. |
| `copyright.text` | string | No | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© Crown copyright"` is used. |
| `copyright.html` | string | No | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© Crown copyright"` is used. The copyright notice is inside an `<a>` element, so you can only use text formatting elements within it. |
| `containerClasses` | string | No | Classes that can be added to the inner container, useful if you want to make the footer full width. |
| `classes` | string | No | Classes to add to the footer component container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the footer component container. |

### Examples

#### Default

```njk
{{ govukFooter({}) }}
```

Renders as:

```html
<div class="govuk-footer">
  <div class="govuk-width-container">
  <svg
    focusable="false"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 60"
    height="30"
    width="32"
    fill="currentcolor" class="govuk-footer__crown"
  >    <g>
        <circle cx="20" cy="17.6" r="3.7"/>
        <circle cx="10.2" cy="23.5" r="3.7"/>
        <circle cx="3.7" cy="33.2" r="3.7"/>
        <circle cx="31.7" cy="30.6" r="3.7"/>
        <circle cx="43.3" cy="17.6" r="3.7"/>
        <circle cx="53.2" cy="23.5" r="3.7"/>
        <circle cx="59.7" cy="33.2" r="3.7"/>
        <circle cx="31.7" cy="30.6" r="3.7"/>
        <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z"/>
      </g>
  </svg>

    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
          <svg
            aria-hidden="true"
            focusable="false"
            class="govuk-footer__licence-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 483.2 195.7"
            height="17"
            width="41"
          >
            <path
              fill="currentColor"
              d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
            />
          </svg>
          <span class="govuk-footer__licence-description">
            All content is available under the
            <a
              class="govuk-footer__link"
              href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
              rel="license"
            >Open Government Licence v3.0</a>, except where otherwise stated
          </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a
          class="govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
        >
          © Crown copyright
        </a>
      </div>
    </div>
  </div>
</div>
```

#### With custom HTML content licence and copyright notice

Open Government Licence and Crown copyright notice translated into Welsh

```njk
{{ govukFooter({
  contentLicence: {
    html: "Mae’r holl gynnwys ar gael dan <a class=\"govuk-footer__link\" href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence-cymraeg/version/3/\" rel=\"license\">Drwydded y Llywodraeth Agored v3.0</a>, ac eithrio lle nodir yn wahanol"
  },
  copyright: {
    html: "<span>Hawlfraint y Goron</span>"
  }
}) }}
```

#### With custom text content licence and copyright notice

Open Government Licence and Crown copyright notice translated into Welsh

```njk
{{ govukFooter({
  contentLicence: {
    text: "Mae’r holl gynnwys ar gael dan Drwydded y Llywodraeth Agored v3.0, ac eithrio lle nodir yn wahanol"
  },
  copyright: {
    text: "© Hawlfraint y Goron"
  }
}) }}
```

#### With no content licence

Open Government Licence turned off

```njk
{{ govukFooter({
  contentLicence: null
}) }}
```

#### With custom meta

Custom meta section

```njk
{{ govukFooter({
  meta: {
    text: "GOV.UK Prototype Kit v7.0.1"
  }
}) }}
```

#### With only custom meta

custom meta without content licence

```njk
{{ govukFooter({
  meta: {
    text: "GOV.UK Prototype Kit v7.0.1"
  },
  contentLicence: null
}) }}
```

#### With meta links and meta content

Secondary navigation links and custom meta text

```njk
{{ govukFooter({
  meta: {
    items: [
      {
        href: "#1",
        text: "Bibendum Ornare"
      },
      {
        href: "#2",
        text: "Nullam"
      },
      {
        href: "#3",
        text: "Tortor Fringilla"
      },
      {
        href: "#4",
        text: "Tellus"
      },
      {
        href: "#5",
        text: "Egestas Nullam"
      },
      {
        href: "#6",
        text: "Euismod Etiam"
      },
      {
        href: "#7",
        text: "Fusce Sollicitudin"
      },
      {
        href: "#8",
        text: "Ligula Nullam Ultricies"
      }
    ],
    html: "Built by the <a href=\"#\" class=\"govuk-footer__link\">Department of Magical Law Enforcement</a>"
  }
}) }}
```

#### With only meta links

meta links without content licence

```njk
{{ govukFooter({
  meta: {
    items: [
      {
        href: "#1",
        text: "Bibendum Ornare"
      },
      {
        href: "#2",
        text: "Nullam"
      },
      {
        href: "#3",
        text: "Tortor Fringilla"
      },
      {
        href: "#4",
        text: "Tellus"
      },
      {
        href: "#5",
        text: "Egestas Nullam"
      },
      {
        href: "#6",
        text: "Euismod Etiam"
      },
      {
        href: "#7",
        text: "Fusce Sollicitudin"
      },
      {
        href: "#8",
        text: "Ligula Nullam Ultricies"
      }
    ]
  },
  contentLicence: null
}) }}
```

#### With default width navigation (one column)

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Navigation section",
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    }
  ]
}) }}
```

#### With default width navigation (two columns)

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Navigation section",
      columns: 2,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    }
  ]
}) }}
```

#### With navigation

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Two column list",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    },
    {
      title: "Single column list",
      width: "one-third",
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        }
      ]
    }
  ]
}) }}
```

#### Full GDS example

A full example based on GOV.UK's current footer

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Coronavirus (COVID-19)",
      width: "two-thirds",
      items: [
        {
          href: "/coronavirus",
          text: "Coronavirus (COVID-19): guidance and support"
        }
      ]
    },
    {
      title: "Brexit",
      width: "one-third",
      items: [
        {
          href: "/brexit",
          text: "Check what you need to do"
        }
      ]
    },
    {
      title: "Services and information",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          href: "/browse/benefits",
          text: "Benefits"
        },
        {
          href: "/browse/births-deaths-marriages",
          text: "Births, deaths, marriages and care"
        },
        {
          href: "/browse/business",
          text: "Business and self-employed"
        },
        {
          href: "/browse/childcare-parenting",
          text: "Childcare and parenting"
        },
        {
          href: "/browse/citizenship",
          text: "Citizenship and living in the UK"
        },
        {
          href: "/browse/justice",
          text: "Crime, justice and the law"
        },
        {
          href: "/browse/disabilities",
          text: "Disabled people"
        },
        {
          href: "/browse/driving",
          text: "Driving and transport"
        },
        {
          href: "/browse/education",
          text: "Education and learning"
        },
        {
          href: "/browse/employing-people",
          text: "Employing people"
        },
        {
          href: "/browse/environment-countryside",
          text: "Environment and countryside"
        },
        {
          href: "/browse/housing-local-services",
          text: "Housing and local services"
        },
        {
          href: "/browse/tax",
          text: "Money and tax"
        },
        {
          href: "/browse/abroad",
          text: "Passports, travel and living abroad"
        },
        {
          href: "/browse/visas-immigration",
          text: "Visas and immigration"
        },
        {
          href: "/browse/working",
          text: "Working, jobs and pensions"
        }
      ]
    },
    {
      title: "Departments and policy",
      width: "one-third",
      items: [
        {
          href: "/government/how-government-works",
          text: "How government works"
        },
        {
          href: "/government/organisations",
          text: "Departments"
        },
        {
          href: "/world",
          text: "Worldwide"
        },
        {
          href: "/government/policies",
          text: "Policies"
        },
        {
          href: "/government/publications",
          text: "Publications"
        },
        {
          href: "/government/announcements",
          text: "Announcements"
        }
      ]
    }
  ],
  meta: {
    items: [
      {
        href: "/help",
        text: "Help"
      },
      {
        href: "/help/cookies",
        text: "Cookies"
      },
      {
        href: "/contact",
        text: "Contact"
      },
      {
        href: "/help/terms-conditions",
        text: "Terms and conditions"
      },
      {
        href: "/cymraeg",
        text: "Rhestr o Wasanaethau Cymraeg"
      }
    ],
    html: "Built by the <a class=\"govuk-footer__link\" href=\"#\">Government Digital Service</a>"
  }
}) }}
```

#### Three equal columns

A full example to demonstrate three equal width columns

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Single column list 1",
      width: "one-third",
      columns: 1,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    },
    {
      title: "Single column list 2",
      width: "one-third",
      columns: 1,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    },
    {
      title: "Single column list 3",
      width: "one-third",
      columns: 1,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    }
  ]
}) }}
```

---
## Generic header

[↑ Back to top](#table-of-contents)

**Macro:** `govukGenericHeader` · **Import:** `{% from "govuk/components/generic-header/macro.njk" import govukGenericHeader %}`

**Design System guidance:** https://design-system.service.gov.uk/components/generic-header/

### Guidance

Use this generic version of the header to tell users they’re using a government service that’s not part of the GOV.UK website.

#### When to use this component

Use the Generic header component if your service is both:

- a public-facing government service
- not on the GOV.UK website (meaning that your service is not part of the [GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition/govuk-proposition))

This is to bring consistency and maintain user trust in journeys that move between the GOV.UK website and other government websites and services.

This component also helps ensure your non-GOV.UK service does not:

- identify itself as being part of GOV.UK
- use the crown or GOV.UK logotype in the header
- use the GDS Transport typeface
- use the [GOV.UK brand colours](https://brand.design-system.service.gov.uk/colour/govuk-blue/)

See the guidance on [if your service is not on GOV.UK in the Service manual](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk).

#### When not to use this component

If your service is hosted on one of these gov.uk domains, you must use the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) instead:

- gov.uk/[myservice]
- [myservice].service.gov.uk
- [myblog].blog.gov.uk

#### How it works

If you use the [page template](https://design-system.service.gov.uk/styles/page-template/), you’ll first need to replace the default GOV.UK header in the page template with the Generic header component.

Use the Generic header component to display your own:

- brand logo
- homepage link
- font for your service name (instead of GDS Transport)

You must also follow the steps in the [Using GOV.UK Frontend without GOV.UK branding guidance](https://frontend.design-system.service.gov.uk/using-govuk-frontend-without-govuk-branding/) to remove other GOV.UK brand elements elsewhere in your service.

##### Using your own brand logo

Follow your organisation’s guidelines and best practice to show your brand logo.

To make your logo image as accessible and optimised as possible, also see:

- Design System guidance on [using images](https://design-system.service.gov.uk/styles/images/)
- [Image guidance for GOV.UK content and publishers](https://guidance.publishing.service.gov.uk/formatting-content/images/)

##### Homepage link

By default, the homepage link points to `/`, which is the top level of your service’s domain. You should customise the link to point to wherever makes the most sense for your service.

##### Do not show navigation links in the Generic header component

As with the GOV.UK header component, you should not use the Generic header component to show navigation links. Use the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation) instead to let users navigate to different parts of your service and find useful links and tools.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | string | No | The URL of the logo link. Defaults to the root of the current web domain ("/"). |
| `logoText` | string | Yes | If `logoHtml` is set, this is not required. Text content for the logo section of the Generic header. |
| `logoHtml` | string | Yes | If `logoText` is set, this is not required. HTML content for the logo section of the Generic header. |
| `containerClasses` | string | No | Classes for the container. Useful if you want to make the Generic header fixed width. |
| `classes` | string | No | Classes to add to the Generic header container. |
| `attributes` | object | No | HTML attributes (for example, data attributes) to add to the Generic header container. |

### Examples

#### Default

```njk
{{ govukGenericHeader({
  logoText: "My cool service"
}) }}
```

Renders as:

```html
<div class="govuk-generic-header">
  <div class="govuk-generic-header__container govuk-width-container">
    <div class="govuk-generic-header__logo">
      <a href="/" class="govuk-generic-header__homepage-link">
        My cool service
      </a>
    </div>
  </div>
</div>
```

#### With image logo

```njk
{{ govukGenericHeader({
  logoHtml: "<svg width=\"28\" height=\"30\" viewBox=\"0 0 28 30\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<title>HM Pizza Finder service</title>\n<circle cx=\"13.5549\" cy=\"4.21349\" r=\"4.21349\"/>\n<circle cx=\"13.5549\" cy=\"25.7865\" r=\"4.21349\"/>\n<circle cx=\"22.8963\" cy=\"9.6068\" r=\"4.21349\"/>\n<circle cx=\"4.2135\" cy=\"20.3932\" r=\"4.21349\"/>\n<circle cx=\"22.8963\" cy=\"20.3932\" r=\"4.21349\"/>\n<circle cx=\"4.21351\" cy=\"9.60674\" r=\"4.21349\"/>\n</svg>\n"
}) }}
```

#### With text and image logo

```njk
{{ govukGenericHeader({
  logoHtml: "<svg width=\"28\" height=\"30\" viewBox=\"0 0 28 30\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<title>HM Pizza Finder service</title>\n<circle cx=\"13.5549\" cy=\"4.21349\" r=\"4.21349\"/>\n<circle cx=\"13.5549\" cy=\"25.7865\" r=\"4.21349\"/>\n<circle cx=\"22.8963\" cy=\"9.6068\" r=\"4.21349\"/>\n<circle cx=\"4.2135\" cy=\"20.3932\" r=\"4.21349\"/>\n<circle cx=\"22.8963\" cy=\"20.3932\" r=\"4.21349\"/>\n<circle cx=\"4.21351\" cy=\"9.60674\" r=\"4.21349\"/>\n</svg> | HM Pizza Finder service\n"
}) }}
```

#### Full width

```njk
{{ govukGenericHeader({
  containerClasses: "govuk-generic-header__container--full-width",
  logoHtml: "<svg width=\"28\" height=\"30\" viewBox=\"0 0 28 30\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<title>HM Pizza Finder service</title>\n<circle cx=\"13.5549\" cy=\"4.21349\" r=\"4.21349\"/>\n<circle cx=\"13.5549\" cy=\"25.7865\" r=\"4.21349\"/>\n<circle cx=\"22.8963\" cy=\"9.6068\" r=\"4.21349\"/>\n<circle cx=\"4.2135\" cy=\"20.3932\" r=\"4.21349\"/>\n<circle cx=\"22.8963\" cy=\"20.3932\" r=\"4.21349\"/>\n<circle cx=\"4.21351\" cy=\"9.60674\" r=\"4.21349\"/>\n</svg> | HM Pizza Finder service\n"
}) }}
```

---
## Header

[↑ Back to top](#table-of-contents)

**Macro:** `govukHeader` · **Import:** `{% from "govuk/components/header/macro.njk" import govukHeader %}`

**Design System guidance:** https://design-system.service.gov.uk/components/header/

### Guidance

The GOV.UK header component tells users they’re using a service on GOV.UK and lets them use GOV.UK-wide tools. Also known as the GOV.UK masthead.

If you use the page template, you'll also get the GOV.UK header without having to add it, as it's included by default. However, if you want to customise the default GOV.UK header, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

#### When to use this component

If your service is being hosted on one of these domains, use the GOV.UK header component:

- gov.uk/[myservice]
- [myservice].service.gov.uk
- [myblog].blog.gov.uk

You must use the GOV.UK header component at the top of every page. This is to maintain user trust as they move around the GOV.UK website and other government websites and services.

The Service Manual explains why it’s important for you to [make your service look like GOV.UK](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk).

#### When not to use this component

If your service is not hosted on one of the gov.uk domains outlined, you must not use the GOV.UK header component as it’s not considered part of GOV.UK.

Use the [Generic header component](https://design-system.service.gov.uk/components/generic-header/) instead to show your own organisation’s branding.

#### How it works

Together, the GOV.UK header and [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/) both ensure users get a consistent experience on GOV.UK.

This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.

For guidance on how to plan your header and navigation, see the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service).

##### Default GOV.UK header

Most services on GOV.UK should use the default GOV.UK header.

It should only show the GOV.UK logo and any GOV.UK-wide links and tools to help your users. [Do not add the menu of GOV.UK topic links](https://insidegovuk.blog.gov.uk/2021/11/11/launching-gov-uks-new-menu-bar/) to your service’s GOV.UK header.

##### Do not show service name or navigation links in the GOV.UK header

You can no longer use the GOV.UK header to show service name or navigation links. Use the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation) instead.

The [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service) shows how the GOV.UK header and Service navigation components work together to help users know they’re using your service and navigate around it.

##### GOV.UK header with One Login

GOV.UK One Login maintains their own header on the [Let users navigate to their GOV.UK One Login and sign out easily](https://www.sign-in.service.gov.uk/documentation/design-recommendations/let-users-navigate-sign-out) page.

#### Brand refresh of the GOV.UK header component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

With these changes, the GOV.UK header and GOV.UK footer components should now only be used by [services on the GOV.UK website](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk). Services outside of [the GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition) should stop using the header and footer components and instead create their own.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `homepageUrl` | string | No | The URL of the homepage. Defaults to the GOV.UK homepage. |
| `productName` | string | No | Product name, used when the product name follows on directly from ‘GOV.UK’. For example, GOV.UK Pay or GOV.UK Design System. In most circumstances, you should use the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/). |
| `containerClasses` | string | No | Classes for the container, useful if you want to make the header fixed width. |
| `classes` | string | No | Classes to add to the header container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the header container. |

### Examples

#### Default

The standard header as used on information pages on GOV.UK

```njk
{{ govukHeader({}) }}
```

Renders as:

```html
<div class="govuk-header">
  <div class="govuk-header__container govuk-width-container">
    <div class="govuk-header__logo">
      <a href="//gov.uk" class="govuk-header__homepage-link">
          <svg
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 324 60"
            height="30"
            width="162"
            fill="currentcolor" class="govuk-header__logotype" aria-label="GOV.UK"
          ><title>GOV.UK</title>    <g>
                <circle cx="20" cy="17.6" r="3.7"/>
                <circle cx="10.2" cy="23.5" r="3.7"/>
                <circle cx="3.7" cy="33.2" r="3.7"/>
                <circle cx="31.7" cy="30.6" r="3.7"/>
                <circle cx="43.3" cy="17.6" r="3.7"/>
                <circle cx="53.2" cy="23.5" r="3.7"/>
                <circle cx="59.7" cy="33.2" r="3.7"/>
                <circle cx="31.7" cy="30.6" r="3.7"/>
                <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z"/>
              </g>
              <circle class="govuk-logo-dot" cx="226" cy="36" r="7.3"/>
              <path d="M93.94 41.25c.4 1.81 1.2 3.21 2.21 4.62 1 1.4 2.21 2.41 3.61 3.21s3.21 1.2 5.22 1.2 3.61-.4 4.82-1c1.4-.6 2.41-1.4 3.21-2.41.8-1 1.4-2.01 1.61-3.01s.4-2.01.4-3.01v.14h-10.86v-7.02h20.07v24.08h-8.03v-5.56c-.6.8-1.38 1.61-2.19 2.41-.8.8-1.81 1.2-2.81 1.81-1 .4-2.21.8-3.41 1.2s-2.41.4-3.81.4a18.56 18.56 0 0 1-14.65-6.63c-1.6-2.01-3.01-4.41-3.81-7.02s-1.4-5.62-1.4-8.83.4-6.02 1.4-8.83a20.45 20.45 0 0 1 19.46-13.65c3.21 0 4.01.2 5.82.8 1.81.4 3.61 1.2 5.02 2.01 1.61.8 2.81 2.01 4.01 3.21s2.21 2.61 2.81 4.21l-7.63 4.41c-.4-1-1-1.81-1.61-2.61-.6-.8-1.4-1.4-2.21-2.01-.8-.6-1.81-1-2.81-1.4-1-.4-2.21-.4-3.61-.4-2.01 0-3.81.4-5.22 1.2-1.4.8-2.61 1.81-3.61 3.21s-1.61 2.81-2.21 4.62c-.4 1.81-.6 3.71-.6 5.42s.8 5.22.8 5.22Zm57.8-27.9c3.21 0 6.22.6 8.63 1.81 2.41 1.2 4.82 2.81 6.62 4.82S170.2 24.39 171 27s1.4 5.62 1.4 8.83-.4 6.02-1.4 8.83-2.41 5.02-4.01 7.02-4.01 3.61-6.62 4.82-5.42 1.81-8.63 1.81-6.22-.6-8.63-1.81-4.82-2.81-6.42-4.82-3.21-4.41-4.01-7.02-1.4-5.62-1.4-8.83.4-6.02 1.4-8.83 2.41-5.02 4.01-7.02 4.01-3.61 6.42-4.82 5.42-1.81 8.63-1.81Zm0 36.73c1.81 0 3.61-.4 5.02-1s2.61-1.81 3.61-3.01 1.81-2.81 2.21-4.41c.4-1.81.8-3.61.8-5.62 0-2.21-.2-4.21-.8-6.02s-1.2-3.21-2.21-4.62c-1-1.2-2.21-2.21-3.61-3.01s-3.21-1-5.02-1-3.61.4-5.02 1c-1.4.8-2.61 1.81-3.61 3.01s-1.81 2.81-2.21 4.62c-.4 1.81-.8 3.61-.8 5.62 0 2.41.2 4.21.8 6.02.4 1.81 1.2 3.21 2.21 4.41s2.21 2.21 3.61 3.01c1.4.8 3.21 1 5.02 1Zm36.32 7.96-12.24-44.15h9.83l8.43 32.77h.4l8.23-32.77h9.83L200.3 58.04h-12.24Zm74.14-7.96c2.18 0 3.51-.6 3.51-.6 1.2-.6 2.01-1 2.81-1.81s1.4-1.81 1.81-2.81a13 13 0 0 0 .8-4.01V13.9h8.63v28.15c0 2.41-.4 4.62-1.4 6.62-.8 2.01-2.21 3.61-3.61 5.02s-3.41 2.41-5.62 3.21-4.62 1.2-7.02 1.2-5.02-.4-7.02-1.2c-2.21-.8-4.01-1.81-5.62-3.21s-2.81-3.01-3.61-5.02-1.4-4.21-1.4-6.62V13.9h8.63v26.95c0 1.61.2 3.01.8 4.01.4 1.2 1.2 2.21 2.01 2.81.8.8 1.81 1.4 2.81 1.81 0 0 1.34.6 3.51.6Zm34.22-36.18v18.92l15.65-18.92h10.82l-15.03 17.32 16.03 26.83h-10.21l-11.44-20.21-5.62 6.22v13.99h-8.83V13.9"/>
          </svg>
        
      </a>
    </div>
  </div>
</div>
```

#### With product name

```njk
{{ govukHeader({
  productName: "Product Name"
}) }}
```

#### Full width

```njk
{{ govukHeader({
  containerClasses: "govuk-header__container--full-width"
}) }}
```

---
## Hint

[↑ Back to top](#table-of-contents)

**Macro:** `govukHint` · **Import:** `{% from "govuk/components/hint/macro.njk" import govukHint %}`

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` option will be ignored. |
| `id` | string | No | Optional ID attribute to add to the hint span tag. |
| `classes` | string | No | Classes to add to the hint span tag. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the hint span tag. |

### Examples

#### Default

```njk
{{ govukHint({
  text: "It's on your National Insurance card, benefit letter, payslip or P60.\nFor example, 'QQ 12 34 56 C'.\n"
}) }}
```

Renders as:

```html
<div class="govuk-hint">
  It&#39;s on your National Insurance card, benefit letter, payslip or P60.
For example, &#39;QQ 12 34 56 C&#39;.

</div>
```

#### With html

```njk
{{ govukHint({
  html: "It's on your National Insurance card, benefit letter, payslip or <a class=\"govuk-link\" href=\"#\">P60</a>.\nFor example, 'QQ 12 34 56 C'.\n"
}) }}
```

---
## Input

[↑ Back to top](#table-of-contents)

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

Say ‘[whatever it is] must not include pence, like 123 or 156’.<br>
For example, ‘How much you earn a week must not include pence, like 123 or 156’.

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
| `label` | object | Yes | The label used by the text input component. See [Label](#label) for its options. |
| `hint` | object | No | Can be used to add a hint to a text input component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
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
## Inset text

[↑ Back to top](#table-of-contents)

**Macro:** `govukInsetText` · **Import:** `{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}`

**Design System guidance:** https://design-system.service.gov.uk/components/inset-text/

### Guidance

#### When to use this component

Use the inset text component to differentiate a block of text from the content that surrounds it, for example:

- quotes
- examples
- additional information about the page

#### When not to use this component

Some users do not notice inset text if it’s used on complex pages or near to other visually prominent elements. For this reason, avoid using inset text as a way of highlighting very important information that users need to see.

If you need to draw attention to very important content, like legal information, use the [Warning text component](https://design-system.service.gov.uk/components/warning-text/) instead.

#### How it works

Use inset text very sparingly - it’s less effective if it’s overused.

There are 2 ways to use the inset text component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the inset text component. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire inset text component in a `call` block. |
| `id` | string | No | ID attribute to add to the inset text container. |
| `classes` | string | No | Classes to add to the inset text container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the inset text container. |

### Examples

#### Default

```njk
{{ govukInsetText({
  text: "It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application."
}) }}
```

Renders as:

```html
<div class="govuk-inset-text">
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
</div>
```

#### With html

```njk
{{ govukInsetText({
  html: "<p class=\"govuk-body\">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>\n<div class=\"govuk-warning-text\">\n  <span class=\"govuk-warning-text__icon\" aria-hidden=\"true\">!</span>\n  <strong class=\"govuk-warning-text__text\">\n    <span class=\"govuk-warning-text__assistive\">Warning</span>\n    You can be fined up to £5,000 if you don’t register.\n  </strong>\n</div>\n<p class=\"govuk-body\">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>\n"
}) }}
```

---
## Label

[↑ Back to top](#table-of-contents)

**Macro:** `govukLabel` · **Import:** `{% from "govuk/components/label/macro.njk" import govukLabel %}`

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored. |
| `for` | string | No | The value of the `for` attribute, the ID of the input the label is associated with. |
| `isPageHeading` | boolean | No | Whether the label also acts as the heading for the page. |
| `classes` | string | No | Classes to add to the label tag. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the label tag. |

### Examples

#### Default

```njk
{{ govukLabel({
  text: "National Insurance number"
}) }}
```

Renders as:

```html
<label class="govuk-label">
  National Insurance number
</label>
```

#### With bold text

```njk
{{ govukLabel({
  classes: "govuk-label--s",
  text: "National Insurance number"
}) }}
```

#### Styled as xl text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--xl"
}) }}
```

#### Styled as large text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--l"
}) }}
```

#### Styled as medium text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--m"
}) }}
```

#### Styled as small text

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--s"
}) }}
```

#### As page heading xl

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--xl",
  isPageHeading: true
}) }}
```

#### As page heading l

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--l",
  isPageHeading: true
}) }}
```

#### As page heading m

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--m",
  isPageHeading: true
}) }}
```

#### As page heading s

```njk
{{ govukLabel({
  text: "National Insurance number",
  classes: "govuk-label--s",
  isPageHeading: true
}) }}
```

#### As page heading without class

```njk
{{ govukLabel({
  text: "National Insurance number",
  isPageHeading: true
}) }}
```

---
## Language navigation

[↑ Back to top](#table-of-contents)

**Macro:** `govukLanguageNavigation` · **Import:** `{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}`

**Design System guidance:** https://design-system.service.gov.uk/components/language-navigation/

### Guidance

The Language navigation component helps users choose and switch between languages when using a service.

#### When to use this component

Use the Language navigation component when you can provide your service in more than one language.

For example, to help users switch from a page in English to a version of the same page in Welsh.

How you use this component will depend on whether you offer a choice of languages for:

- [specific pages within your service](https://design-system.service.gov.uk/components/language-navigation/#if-you-only-offer-specific-pages-in-another-language)
- [your whole service](https://design-system.service.gov.uk/components/language-navigation/#if-you-offer-your-whole-service-in-another-language)

#### When not to use this component

Do not use this component unless you can provide all the same key information on a page in another language.

#### How it works

The Language navigation component shows users a choice of languages and helps the user choose and switch between them.

Use the native name of each language, such as <span lang="cy">Cymraeg</span> for Welsh. This helps speakers of that language recognise the link.

The component does not translate content. You'll need to create, test and maintain content for all the languages you offer your service in.

See some of the other things you might need to do as part of [designing services that offer multiple languages](https://design-system.service.gov.uk/components/language-navigation/#designing-services-that-offer-multiple-languages).

Make sure the user does not lose any data they've entered when they navigate to another language. Do not ask the user to re-enter information they've already given.

##### Placement on pages

Where you place the Language navigation component helps users understand whether they can use your entire service or only specific pages in another language.

Choose a single consistent location that works best for your users.

Use the same placement throughout your service in all languages. This helps users in many ways. For example, some users often switch languages throughout their journey as a way to check their understanding of a page.

##### If you only offer specific pages in another language

You could place the language navigation at the top of a page, after the `h1` element.

If you choose to place the language navigation elsewhere on a page, it should be in a sensible place in the page heading structure with its own visible or hidden heading.

##### If you offer your whole service in another language

If users can change the language for your whole service, you can place the [Language navigation component into the Service navigation component](https://design-system.service.gov.uk/components/service-navigation/#adding-language-navigation).

The Service navigation component includes options to align the language navigation with navigation items as shown in this example.

##### Ensure hidden text and attributes are in the correct languages

The code in this component contains a navigation landmark and some hidden text to help users, including users of assistive technology. Make sure to translate these attributes as needed.

`aria-label` (or `ariaLabel` in Nunjucks) labels the component's navigation landmark. By default the label is 'language', which will be announced by a screen reader as 'language navigation'. Translate this label to the language of the page it's on.

Hidden text within the link for each language option (or `languageDescriptionText` in Nunjucks) explains what the link will do. For example, 'Change the language to English'. Translate these to the language you're linking to.

##### Language navigation on dark backgrounds

Use the `govuk-language-navigation--inverse` modifier class to show white links and text on a dark background – for example, inside a Service navigation with a dark background.

Make sure all users can see the language navigation – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

#### Designing services that offer multiple languages

GOV.UK Content and publishing guidance gives some advice on things you need to [consider when translating content](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/consider-translations/).

Test your service with users in your intended language to spot potential issues such as word inaccuracies and cultural differences. The Service Manual for Wales shows how you can [consider bilingualism in your research](https://digitalpublicservices.gov.wales/guidance-and-standards/service-manual/researching-your-users-and-testing-your-service/considering-bilingualism-in-your-research/).

##### Internationalisation and localisation

If you choose to show larger parts of your service in another language, consider if you need to translate the text within components such as navigation, buttons and accordions.

Our components use English by default but include methods to translate text within them. Follow our documentation on how to [localise GOV.UK Frontend](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#localise-gov-uk-frontend/).

For some languages, you’ll need to [modify components](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/) to make sure text displays well and is understandable by users of assistive technologies. For example, to show languages using scripts that read from right to left, such as Arabic, you’ll need to make changes to components and layouts.

See [W3C’s introduction to internationalisation](https://www.w3.org/International/i18n-drafts/nav/about) for more about some of the things you might need to consider.

Keep in mind that language and regional differences can affect the format users expect to see and enter information such as names, numbers and addresses.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | array | Yes | The languages to display within the language navigation. |
| `items[].text` | string | Yes | If `html` is set, this is not required. Name of the language, written in that language (for example, <span lang="cy">"Cymraeg"</span> for Welsh). If `html` is provided, the `text` option will be ignored. |
| `items[].html` | string | Yes | If `text` is set, this is not required. HTML to use for the language item. If `html` is provided, the `text` option will be ignored. |
| `items[].lang` | string | Yes | The language tag for the language item text (for example, `cy` for Welsh). Added as a `lang` attribute so that assistive technologies pronounce the language name correctly. |
| `items[].hrefLang` | string | No | The language tag for the linked page (for example, `cy` for Welsh). Added as an `hreflang` attribute for search engines and other machine readers. Defaults to `lang` when omitted. |
| `items[].dir` | string | No | The text direction of the script the language name is written in (`ltr` for left-to-right scripts or `rtl` for right-to-left). Set this on every item if the navigation includes scripts written in different directions. |
| `items[].href` | string | No | Link to the current page in this language. |
| `items[].current` | boolean | No | Whether this is the language of the current page. Defaults to `true` when `href` is not provided. |
| `items[].languageDescriptionText` | string | No | Visually hidden text after a language link to indicate what the link will do. Write it in the language of the link (for example, "Change the language to English"). |
| `items[].classes` | string | No | Classes to add to the language item anchor. |
| `items[].attributes` | object | No | HTML attributes to add to the language item anchor. |
| `ariaLabel` | string | No | Plain text label identifying the navigation landmark to screen readers. Write it in the language of the current page. Defaults to "Language". |
| `classes` | string | No | Classes to add to the language navigation container. |
| `attributes` | object | No | HTML attributes to add to the language navigation container. |

### Examples

#### Default

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Cymraeg",
      lang: "cy",
      href: "#/cy"
    }
  ]
}) }}
```

Renders as:

```html
<nav class="govuk-language-navigation" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" rel="alternate" lang="cy" hreflang="cy">Cymraeg      </a>
    </li>
  </ul>
</nav>
```

#### With multiple languages

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Français",
      lang: "fr",
      href: "#/fr"
    },
    {
      text: "हिंदी",
      lang: "hi",
      href: "#/hi"
    },
    {
      text: "日本語",
      lang: "ja",
      href: "#/ja"
    },
    {
      text: "اردو",
      lang: "ur",
      href: "#/ur"
    },
    {
      text: "中文",
      lang: "zh",
      href: "#/zh"
    }
  ]
}) }}
```

#### With large amount of multiple languages

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "العربيَّة",
      lang: "ar",
      href: "#/ar"
    },
    {
      text: "български",
      lang: "bg",
      href: "#/bg"
    },
    {
      text: "বাংলা",
      lang: "bn",
      href: "#/bn"
    },
    {
      text: "Deutsch",
      lang: "de",
      href: "#/de"
    },
    {
      text: "Ελληνικά",
      lang: "el",
      href: "#/el"
    },
    {
      text: "Español",
      lang: "es",
      href: "#/es"
    },
    {
      text: "فارسی",
      lang: "fa",
      href: "#/fa"
    },
    {
      text: "Français",
      lang: "fr",
      href: "#/fr"
    },
    {
      text: "જોર્જિયન",
      lang: "gu",
      href: "#/gu"
    },
    {
      text: "हिंदी",
      lang: "hi",
      href: "#/hi"
    },
    {
      text: "Magyar",
      lang: "hu",
      href: "#/hu"
    },
    {
      text: "Italiano",
      lang: "it",
      href: "#/it"
    },
    {
      text: "Lietuvių",
      lang: "lt",
      href: "#/lt"
    },
    {
      text: "Latviešu",
      lang: "lv",
      href: "#/lv"
    },
    {
      text: "नेपाली",
      lang: "ne",
      href: "#/ne"
    },
    {
      text: "ਪੰਜਾਬੀ ਗੁਰਮੁਖੀ",
      lang: "pa",
      href: "#/pa"
    },
    {
      text: "Polski",
      lang: "pl",
      href: "#/pl"
    },
    {
      text: "پښتو",
      lang: "ps",
      href: "#/ps"
    },
    {
      text: "Português",
      lang: "pt",
      href: "#/pt"
    },
    {
      text: "Română",
      lang: "ro",
      href: "#/ro"
    },
    {
      text: "Русский язык",
      lang: "ru",
      href: "#/ru"
    },
    {
      text: "Slovensky",
      lang: "sk",
      href: "#/sk"
    },
    {
      text: "Soomaali",
      lang: "so",
      href: "#/so"
    },
    {
      text: "Shqip",
      lang: "sq",
      href: "#/sq"
    },
    {
      text: "தமிழ்",
      lang: "ta",
      href: "#/ta"
    },
    {
      text: "Türkçe",
      lang: "tr",
      href: "#/tr"
    },
    {
      text: "Українська",
      lang: "uk",
      href: "#/uk"
    },
    {
      text: "اردو",
      lang: "ur",
      href: "#/ur"
    },
    {
      text: "简体中文",
      lang: "zh",
      href: "#/zh"
    },
    {
      text: "w\">繁體中文（臺灣）",
      lang: "zh",
      href: "#/zh"
    }
  ]
}) }}
```

#### Inverse

Language navigation that appears on dark backgrounds

```njk
{{ govukLanguageNavigation({
  classes: "govuk-language-navigation--inverse",
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Cymraeg",
      lang: "cy",
      href: "#/cy"
    }
  ]
}) }}
```

#### With translated navigation label

When the current page is not in English, translate the `ariaLabel` into the language of the current page.

```njk
{{ govukLanguageNavigation({
  ariaLabel: "Dewis iaith",
  attributes: {
    lang: "cy"
  },
  items: [
    {
      text: "English",
      lang: "en",
      href: "#/en"
    },
    {
      text: "Cymraeg",
      lang: "cy",
      current: true
    }
  ]
}) }}
```

#### With mixed text directions

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      dir: "ltr",
      current: true
    },
    {
      text: "العربية",
      lang: "ar",
      dir: "rtl",
      href: "#/ar"
    }
  ]
}) }}
```

#### With language description

Add visually hidden text, written in the language of the link, so screen reader users know that selecting a link leads to a translation of the page".

```njk
{{ govukLanguageNavigation({
  attributes: {
    lang: "cy"
  },
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Cymraeg",
      lang: "cy",
      href: "#/cy",
      languageDescriptionText: "Newid yr iaith i'r Cymraeg"
    }
  ]
}) }}
```

---
## Notification banner

[↑ Back to top](#table-of-contents)

**Macro:** `govukNotificationBanner` · **Import:** `{% from "govuk/components/notification-banner/macro.njk" import govukNotificationBanner %}`

**Design System guidance:** https://design-system.service.gov.uk/components/notification-banner/

### Guidance

Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content.

#### When to use this component

A notification banner lets you tell the user about something that’s not directly relevant to the thing they’re trying to do on that page of the service. For example:

- telling the user about a problem that’s affecting the service as a whole (for example, delays in processing applications because of an emergency)
- telling the user about something that affects them in particular (for example, an approaching deadline they need to meet)
- telling the user about the outcome of something they've just done on a previous page (for example, confirming that an email has been sent)

#### When not to use this component

Use notification banners sparingly. There’s [evidence that people often miss them](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/), and using them too often is likely to make this problem worse.

If the information is directly relevant to the thing the user is doing on that page, put the information in the main page content instead. Use an [Inset text component](https://design-system.service.gov.uk/components/inset-text/) or [Warning text component](https://design-system.service.gov.uk/components/warning-text/) if it needs to stand out.

Do not:

- use a notification banner to tell the user about validation errors - use an [Error message component](https://design-system.service.gov.uk/components/error-message/) and [Error summary component](https://design-system.service.gov.uk/components/error-summary/) instead
- show a notification banner and an [Error summary component](https://design-system.service.gov.uk/components/error-summary/) on the same page - just show the error summary

#### How it works

Position a notification banner immediately before the page `h1`. The notification banner should be the same width as the page's other content, such as components, headings and body text. For example, if the other content takes up two-thirds of the screen on desktop devices, then the notification banner should also take up two-thirds. [Read about how to lay out pages](https://design-system.service.gov.uk/styles/layout/).

Use `role="region"` and `aria-labelledby="govuk-notification-banner-title"` (with `id="govuk-notification-banner-title"` on `<govuk-notification-banner__title>`) so that screen reader users can navigate to the notification banner.

Avoid showing more than one notification banner on the same page. Instead, combine the messages in a single notification banner. If the messages are too different to combine, only show the highest priority notification banner.

##### Notification banner headings

You can use `<h3>` headings in the `govuk-notification-banner__content` to help structure your content.

Avoid using headings for single-line notifications that do not need them.

#### Telling the user about a problem that affects the whole service

Use a ‘neutral’ blue notification banner if the user needs to know about a problem with the service as a whole.

For example:

- in a service that lets the user register or apply for something, they might need to know that it’s taking longer than usual to process applications because of an emergency
- in an account-type service, the user might need to know that the service will be down for scheduled maintenance

If your service is on GOV.UK and it’s affected by an emergency, ask your department’s content team to [make a request to add a downtime message on GOV.UK content that links to it](https://guidance.publishing.service.gov.uk/accounts-support/make-content-requests/ask-downtime-messages/).
If your service is getting more demand than usual, check that you’ve set up [There is a problem with the service pages](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/) and [Service unavailable pages](https://design-system.service.gov.uk/patterns/service-unavailable-pages/), and the wording is up to date.

#### Telling the user about something that’s happening elsewhere

Use a ‘neutral’ notification banner if the user needs to know about something that’s happening elsewhere in the service. For example:

- in a case working system, the user might need to know that there are new cases waiting for their attention
- in an account-type service, you might need to tell the user that there’s a deadline approaching or that a payment is overdue

#### Reacting to something the user has done

You can also use a notification banner to tell the user about the outcome of something they’ve just done - but they have not finished the current journey, so it does not make sense to use a [Confirmation page at this point in your service](https://design-system.service.gov.uk/patterns/confirmation-pages/).

Using a notification banner is unlikely to be the right approach in a linear service - for example, a service that lets the user register or apply for a thing. For a linear service, it will usually make sense to stick to the [‘one thing per page’ approach](https://www.gov.uk/service-manual/design/form-structure), and avoid using a notification banner.

Use a [Confirmation page in a linear service](https://design-system.service.gov.uk/patterns/confirmation-pages/) to tell users that they’ve finished using the service instead of a notification banner.

Use the green version of the notification banner to confirm that something they’re expecting to happen has happened.

Since you’re using the notification banner to tell the user about the outcome of something they’ve just done, add `role="alert"` so focus shifts to the notification banner on page load.

Remove a green notification banner when the user moves to a new page.

To make the green version of the notification banner accessible:

- use headings like ‘Success’ - so that you’re not relying on colour alone to convey meaning – to [meet WCAG 2.2 success criterion 1.4.1 Use of colour](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- use the same heading for green notification banners within the same service - so that you’re identifying components that work in the same way consistently – this is to [meet WCAG 2.2 success criterion 3.2.4 Consistent identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification)

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored. |
| `html` | string | Yes | The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire notification banner component in a `call` block. |
| `titleText` | string | No | The title text that displays in the notification banner. You can use any string with this option. Use this option to set text that does not contain HTML. The available default values are 'Important', 'Success', and null: - if you do not set `type`, `titleText` defaults to `"Important"` - if you set `type` to `success`, `titleText` defaults to `"Success"` - if you set `titleHtml`, this option is ignored  |
| `titleHtml` | string | No | The title HTML to use within the notification banner. You can use any string with this option. Use this option to set text that contains HTML. If you set `titleHtml`, the `titleText` option is ignored. |
| `titleHeadingLevel` | string | No | Sets heading level for the title only. You can only use values between `1` and `6` with this option. The default is `2`. |
| `type` | string | No | The type of notification to render. You can use only `"success"` or `null` values with this option. If you set `type` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `type`, the notification banner sets `role` to `"region"`. |
| `role` | string | No | Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `type` to `"success"`, `role` defaults to `"alert"`. |
| `titleId` | string | No | The `id` for the banner title, and the `aria-labelledby` attribute in the banner. Defaults to `"govuk-notification-banner-title"`. |
| `disableAutoFocus` | boolean | No | If you set `type` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`. |
| `classes` | string | No | The classes that you want to add to the notification banner. |
| `attributes` | object | No | The HTML attributes that you want to add to the notification banner, for example, data attributes. |

### Examples

#### Default

```njk
{{ govukNotificationBanner({
  text: "This publication was withdrawn on 7 March 2014."
}) }}
```

Renders as:

```html
<div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <p class="govuk-notification-banner__heading">
      This publication was withdrawn on 7 March 2014.
    </p>
  </div>
</div>
```

#### With text as html

```njk
{{ govukNotificationBanner({
  html: "<h3 class=\"govuk-notification-banner__heading\">\n  This publication was withdrawn on 7 March 2014\n</h3>\n<p class=\"govuk-body\">\n  The following 4 files are available\n</p>\n<ul class=\"govuk-list govuk-list--bullet govuk-!-margin-bottom-0\">\n  <li><a href=\"#\" class=\"govuk-notification-banner__link\">government-strategy.pdf</a></li>\n  <li><a href=\"#\" class=\"govuk-notification-banner__link\">government-strategy-v2.pdf</a></li>\n  <li><a href=\"#\" class=\"govuk-notification-banner__link\">government-strategy-v3-FINAL.pdf</a></li>\n  <li><a href=\"#\" class=\"govuk-notification-banner__link\">government-strategy-v4-FINAL-v2.pdf</a></li>\n</ul>\n"
}) }}
```

#### With type as success

```njk
{{ govukNotificationBanner({
  type: "success",
  text: "Email sent to example@email.com"
}) }}
```

#### With long heading

```njk
{{ govukNotificationBanner({
  text: "This publication was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters."
}) }}
```

#### With lots of content

```njk
{{ govukNotificationBanner({
  html: "<h3 class=\"govuk-notification-banner__heading\">\n  Check if you need to apply the reverse charge to this application\n</h3>\n<p class=\"govuk-body\">\n  You will have to apply the <a href=\"#\" class=\"govuk-notification-banner__link\">reverse charge</a> if the applicant supplies any of these services:\n</p>\n<ul class=\"govuk-list govuk-list--bullet govuk-list--spaced\">\n  <li>constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services</li>\n  <li>constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours</li>\n</ul>\n"
}) }}
```

---
## Pagination

[↑ Back to top](#table-of-contents)

**Macro:** `govukPagination` · **Import:** `{% from "govuk/components/pagination/macro.njk" import govukPagination %}`

**Design System guidance:** https://design-system.service.gov.uk/components/pagination/

### Guidance

Help users navigate forwards and backwards through a series of pages. For example, search results or guidance that's divided into multiple website pages.

#### When to use this component

Consider using pagination when:

- showing all the content on a single page makes the page take too long to load
- most users will only need the content on the first page or first few pages

#### When not to use this component

Only break up content onto separate pages if it improves the performance or usability of your service.

Avoid using the 'infinite scroll' technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users.

Do not use this Pagination component for linear journeys – for example, where you’re asking the user to complete a form. Instead, use the [Button component](https://design-system.service.gov.uk/components/button/) (usually a 'Continue' button) to let the user move to the next page – and a [Back link component](https://design-system.service.gov.uk/components/back-link/) to let them move to the previous page.

#### How it works

Add the pagination component after the content on each page that you're paginating.

[View an example of Pagination in a standard GOV.UK page template](in-page/index.html).

Do not show pagination if there's only one page of content.

Redirect users to the first page if they enter a URL of a page that no longer exists.

#### For navigating between content pages

Use the 'block' style of pagination to let users navigate through related content that has been split across multiple pages. Stack the links vertically, so they’re more obvious to screen magnifier users when they’re zoomed in.

You can use link labels to give context on what the neighbouring pages are about.

#### For navigating between pages of items

Use a list-type layout if users need to navigate through pages of similar items. For example, a list of search results or a list of cases in a case working system.

Show the page number in the page `<title>` so that screen reader users know they’ve navigated to a different page. For example, 'Search results (page 1 of 4)'.

Show an appropriate number of pages to fit the horizontal space available.

For smaller screens, show page numbers for:

- the current page
- previous and next pages
- first and last pages

For larger screens, show page numbers for:

- the current page
- at least one page immediately before and after the current page
- first and last pages

Use ellipses (…) to replace any skipped pages. For example:

- **[1]** 2 … 100
- 1 **[2]** 3 … 100
- 1 2 **[3]** 4 … 100
- 1 2 3 **[4]** 5 … 100
- 1 … 4 **[5]** 6 … 100
- 1 … 97 **[98]** 99 100
- 1 … 98 **[99]** 100
- 1 … 99 **[100]**

##### First and last pages

Do not show the previous page link on the first page – and do not show the next page link on the last page.

##### Filtering and sorting

Consider adding filtering or sorting options if it helps users to find what they need in a long list of pages. For example, [the business support finder on GOV.UK](https://www.gov.uk/business-finance-support) has filtering options.

If the user filters or sorts the list of pages, apply this to the whole list (not just the current page) and redirect them back to the first page of the new results.

Set defaults to minimise how many pages most users have to click through to find what they need.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | array | No | The items within the pagination component. |
| `items[].number` | string | No | The pagination item text – usually a page number.  Required unless the item is an ellipsis. |
| `items[].visuallyHiddenText` | string | No | The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1". |
| `items[].href` | string | No | The link's URL. Required unless the item is an ellipsis. |
| `items[].current` | boolean | No | Set to `true` to indicate the current page the user is on. |
| `items[].ellipsis` | boolean | No | Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored. |
| `items[].attributes` | object | No | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `previous` | object | No | A link to the previous page, if there is a previous page. |
| `previous.text` | string | No | The text content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.html` | string | No | The HTML content of the link to the previous page. Defaults to `"Previous page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `previous.labelText` | string | No | The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes. |
| `previous.href` | string | Yes | The previous page's URL. |
| `previous.attributes` | object | No | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `next` | object | No | A link to the next page, if there is a next page. |
| `next.text` | string | No | The text content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.html` | string | No | The HTML content of the link to the next page. Defaults to `"Next page"`, with 'page' being visually hidden. If `html` is provided, the `text` option will be ignored. |
| `next.labelText` | string | No | The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes. |
| `next.href` | string | Yes | The next page's URL. |
| `next.attributes` | object | No | The HTML attributes (for example, data attributes) you want to add to the anchor. |
| `landmarkLabel` | string | No | The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`. |
| `classes` | string | No | The classes you want to add to the pagination `nav` parent. |
| `attributes` | object | No | The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent. |

### Examples

#### Default

```njk
{{ govukPagination({
  previous: {
    href: "/previous"
  },
  next: {
    href: "/next"
  },
  items: [
    {
      number: 1,
      href: "/page/1"
    },
    {
      number: 2,
      href: "/page/2",
      current: true
    },
    {
      number: 3,
      href: "/page/3"
    }
  ]
}) }}
```

Renders as:

```html
<nav class="govuk-pagination" aria-label="Pagination">
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="/previous" rel="prev">
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="govuk-pagination__list">
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
        1
      </a>
    </li>
      <li class="govuk-pagination__item govuk-pagination__item--current">
      <a class="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2" aria-current="page">
        2
      </a>
    </li>
      <li class="govuk-pagination__item">
      <a class="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3">
        3
      </a>
    </li>
  </ul>
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="/next" rel="next">
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
    </a>
  </div>
</nav>
```

#### With custom link and item text

```njk
{{ govukPagination({
  previous: {
    href: "/previous",
    text: "Previous page"
  },
  next: {
    href: "/next",
    text: "Next page"
  },
  items: [
    {
      number: "one",
      href: "/page/1"
    },
    {
      number: "two",
      href: "/page/2",
      current: true
    },
    {
      number: "three",
      href: "/page/3"
    }
  ]
}) }}
```

#### With many pages

```njk
{{ govukPagination({
  previous: {
    href: "/previous"
  },
  next: {
    href: "/next"
  },
  items: [
    {
      number: 1,
      href: "/page/1"
    },
    {
      ellipsis: true
    },
    {
      number: 8,
      href: "/page/8"
    },
    {
      number: 9,
      href: "/page/9"
    },
    {
      number: 10,
      href: "/page/10",
      current: true
    },
    {
      number: 11,
      href: "/page/11"
    },
    {
      number: 12,
      href: "/page/12"
    },
    {
      ellipsis: true
    },
    {
      number: 40,
      href: "/page/40"
    }
  ]
}) }}
```

#### First page

```njk
{{ govukPagination({
  next: {
    href: "/next"
  },
  items: [
    {
      number: 1,
      href: "/page/1",
      current: true
    },
    {
      number: 2,
      href: "/page/2"
    },
    {
      number: 3,
      href: "/page/3"
    }
  ]
}) }}
```

#### Last page

```njk
{{ govukPagination({
  previous: {
    href: "/previous"
  },
  items: [
    {
      number: 1,
      href: "/page/1"
    },
    {
      number: 2,
      href: "/page/2"
    },
    {
      number: 3,
      href: "/page/3",
      current: true
    }
  ]
}) }}
```

#### With prev and next only

```njk
{{ govukPagination({
  previous: {
    href: "/previous"
  },
  next: {
    href: "/next"
  }
}) }}
```

#### With prev and next only and labels

```njk
{{ govukPagination({
  previous: {
    text: "Previous page",
    labelText: "Paying VAT and duty",
    href: "/previous"
  },
  next: {
    text: "Next page",
    labelText: "Registering an imported vehicle",
    href: "/next"
  }
}) }}
```

#### With prev and next only and very long labels

```njk
{{ govukPagination({
  previous: {
    text: "Previous page",
    labelText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "/previous"
  },
  next: {
    text: "Next page",
    labelText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "/next"
  }
}) }}
```

#### With previous only

```njk
{{ govukPagination({
  previous: {
    href: "/previous"
  }
}) }}
```

#### With next only

```njk
{{ govukPagination({
  next: {
    href: "/next"
  }
}) }}
```

---
## Panel

[↑ Back to top](#table-of-contents)

**Macro:** `govukPanel` · **Import:** `{% from "govuk/components/panel/macro.njk" import govukPanel %}`

**Design System guidance:** https://design-system.service.gov.uk/components/panel/

### Guidance

The Panel component is a visible container used to highlight important content.

#### When to use this component

Use the Panel component to display important information within:

- [Confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages/), which tell the user they’ve successfully completed the transaction
- [Interruption pages](https://design-system.service.gov.uk/patterns/interruption-pages/), which pause the user journey to give important information

#### When not to use this component

Never use the Panel component to highlight any other information.

#### How it works

There are 2 ways to use the panel component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Confirmation panel

The confirmation panel is part of a [Confirmation page](https://design-system.service.gov.uk/patterns/confirmation-pages/) and tells the user the outcome of their journey as a heading. You might also give more detailed information as description text.

##### How to write confirmation panel text

Keep your panel text brief, as it's only meant for a high-level explanation of what has happened.

Aim to use short words and phrases to make sure highlighted information is easy to read at different screen sizes. For example, shorter amounts of information are less likely to wrap around the panel, which can happen when using the zoom function on mobiles.

#### Interruption panel

The interruption panel is part of an [Interruption page](https://design-system.service.gov.uk/patterns/interruption-pages/) and shows the user important information that they’d miss if shown any other way.

Within the panel is a button that the user must interact with to resume their journey.

The information itself is usually shown as heading with some description text, possibly with bullet points and numbered steps.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `titleText` | string | Yes | If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `titleHtml` | string | Yes | If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored. |
| `headingLevel` | integer | No | Heading level, from `1` to `6`. Default is `1`. |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the panel content. If `html` is provided, the `text` option will be ignored. |
| `caller` | nunjucks-block | No | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire panel component in a `call` block. |
| `classes` | string | No | Classes to add to the panel container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the panel container. |
| `actions` | object | No | Can be used when creating an [interruption panel](https://design-system.service.gov.uk/components/panel/#interruption-panel) which will add a button or link. Default is `button` unless you set `href` which will show the action as a link. |
| `actions.items` | array | No | The list of buttons or links to display at the end of an Interruption panel. |
| `actions.items[].text` | string | Yes | The button or link text. |
| `actions.items[].type` | string | No | The type of button – `"button"` or `"submit"`. If `href` is provided, set `type` to `"button"` render a link styled as a button. |
| `actions.items[].href` | string | No | The `href` for a link. Set `type` to `"button"` and set `href` to render a link styled as a button. |
| `actions.items[].classes` | string | No | The additional classes that you want to add to the button or link. |
| `actions.items[].attributes` | object | No | The additional attributes that you want to add to the button or link. For example, data attributes. |
| `actions.classes` | string | No | The additional classes that you want to add to the `govuk-panel__actions` element that wraps the buttons or links. |
| `actions.attributes` | object | No | The additional attributes that you want to add to the `govuk-panel__actions` element that wraps the buttons or links. For example, data attributes. |

### Examples

#### Default

```njk
{{ govukPanel({
  titleHtml: "Application complete",
  html: "Your reference number<br><strong>HDJ2123F</strong>"
}) }}
```

Renders as:

```html
<div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">
    Application complete
  </h1>
  <div class="govuk-panel__body">
    Your reference number<br><strong>HDJ2123F</strong>
  </div>
</div>
```

#### Interruption

```njk
{{ govukPanel({
  classes: "govuk-panel--interruption",
  titleText: "Is your age correct?",
  html: "<p class=\"govuk-body\">You entered your age as <strong>109</strong>.</p>\n",
  actions: {
    items: [
      {
        text: "Yes, this is correct",
        type: "button"
      },
      {
        text: "No, change my age",
        href: "#"
      }
    ]
  }
}) }}
```

#### Interruption with content with long line length

```njk
{{ govukPanel({
  classes: "govuk-panel--interruption",
  titleText: "Are you sure you want to change this?",
  html: "<p class=\"govuk-body\">You've changed the person's address from Wales to England. This means that the referral needs to be cancelled.</p>\n<p class=\"govuk-body\">Previous home address: 1 Willow Lane, Newchurch, Kington, HR5 3QF</p>\n<p class=\"govuk-body\">New home address: 9 Elm Street, Whitney-on-Wye, Hereford, HR3 6EH</p>\n<p class=\"govuk-body\">You can go back to undo this change.</p>\n",
  actions: {
    items: [
      {
        text: "Are you sure you want to change this?",
        type: "submit",
        attributes: {
          form: "the-form-id"
        }
      },
      {
        text: "Go back to application",
        href: "#"
      }
    ]
  }
}) }}
```

#### Interruption with headings content and lists

```njk
{{ govukPanel({
  classes: "govuk-panel--interruption",
  titleText: "Your new answer affects other sections of this application",
  html: "<h2 class=\"govuk-heading-m\">Question: Where is Andy Cooke located?</h2>\n<p class=\"govuk-body\">\n  Previous answer: Custody<br>\n  New answer: Released\n</p>\n<p class=\"govuk-body govuk-!-margin-bottom-2\">You need to:</p>\n<ul class=\"govuk-list govuk-list--bullet\">\n  <li>enter their custody information</li>\n  <li>update the licence conditions section</li>\n</ul>\n",
  actions: {
    items: [
      {
        text: "Continue to other sections",
        type: "submit"
      },
      {
        text: "Go back to application",
        href: "#"
      }
    ]
  }
}) }}
```

---
## Password input

[↑ Back to top](#table-of-contents)

**Macro:** `govukPasswordInput` · **Import:** `{% from "govuk/components/password-input/macro.njk" import govukPasswordInput %}`

**Design System guidance:** https://design-system.service.gov.uk/components/password-input/

### Guidance

Help users to create and enter passwords.

#### When to use this component

Use this component whenever you need users to create or enter a password.

Before using this component, you should also read the guidance on the [Ask users for passwords pattern](https://design-system.service.gov.uk/patterns/passwords/) and [Creating user accounts pattern](https://design-system.service.gov.uk/patterns/create-accounts/).

#### When not to use this component

Do not use this component to ask for any information other than a password.

Use a [Text input component](https://design-system.service.gov.uk/components/text-input/) to ask for other security information, such as:

- multi-factor authentication codes
- answers to security questions
- other personally identifiable information

Also see the [Confirm a phone number pattern](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/).

#### How it works

This component allows users to enter a password, with an option to show what they’ve entered as plain text.

This allows users to visually check their password before they submit it, which helps them reduce errors and choose passwords that are more unique and secure.

##### Error messages

If the user enters their account details incorrectly, do not reveal whether they got the username or password wrong. Clear any information entered into the password input.

Revealing the source of the error can help fraudsters break into people’s accounts.

See how to handle incorrect login attempts and help users who forget their password in the [Ask users for passwords pattern](https://design-system.service.gov.uk/patterns/passwords/).

##### Showing and hiding passwords

Hide passwords by default until the user chooses to show it using the ‘show’ button. Users might not be in a private space when entering or creating a password, so you should hide passwords by default.

If you do choose to include two or more password inputs on a page, the ‘show’ and ‘hide’ toggles and labels for each password input must be different.

For example, you can label:

- the first input as 'Password' with a toggle of 'show password'
- the second input as 'Re-enter password' with a toggle of 'show re-entered password'

##### Avoid adding a ‘confirm password’ field

It’s not necessary to add a second password field, also known as a ‘confirm password’ field, particularly as this component allows users to show and hide passwords.

See [Research on this component](https://design-system.service.gov.uk/components/password-input/#research-on-this-component) and why we decided having a second field is not helpful for users.

##### Define the input’s type as ‘password’

When the form is submitted, the password input should automatically change its `type` to `password`, if it has not already done so.

This is to prevent browsers from remembering it as a previously-provided value and potentially displaying it as an autofill option on non-password inputs.

##### Use the autocomplete attribute

Use the `autocomplete` attribute on password inputs to help users complete forms faster.

`Autocomplete` indicates to browsers and password managers what kind of password is needed so it can be entered for the user.

Set the `autocomplete` attribute to `new-password` if the user is creating a password. Otherwise, use `current-password`.

Many browsers will autofill password inputs, even when the `autocomplete` attribute is missing or set to `off`.

##### Allow copy and paste

Always allow users to copy and paste in password fields. People may have very good reasons why they want to do this, for example if they’re using a password manager.

###### Copying text from password fields

Users can copy any text from a password field when it’s set on ‘show’ – this is a feature of browser behaviour and cannot be overridden.

This can be useful for users, such as to save a password that the browser has suggested into a separate password manager.

##### Avoid restricting the user's input

See the [Ask users for passwords pattern](https://design-system.service.gov.uk/patterns/passwords/) to see how to help users choose strong passwords.

Support all the characters users may need to enter a password, including numbers and symbols.

If you must place password restrictions on users, such as for technical or security reasons, be clear and consistent.

Any restrictions must be identical wherever the user creates or enters a password. If you change the restrictions over time, you must continue to support existing user passwords or ask them to set a new one.

###### Do not use maxlength to restrict password length

Users will not get any feedback when they’ve reached the `maxlength` and their text input has been truncated. This happens when a user has pasted text from elsewhere or it’s been autofilled by a password manager.

If you must restrict the length of a password, show an error message instead using the [Validation pattern](https://design-system.service.gov.uk/patterns/validation/).

##### Do not spellcheck or autocapitalise the user's input

Some browsers might automatically change what the user is typing when the input’s text is visible, such as correcting spelling or automatically turning on upper case letters at the start of sentences.

You can tell browsers not to correct spellings by setting the `spellcheck` attribute to `false`.

Doing this can [avoid making your service vulnerable to ‘spell-jacking’](https://www.itpro.com/security/vulnerability/370010/what-is-spell-jacking), where security researchers have found some spell checking tools gathering personal identifiable information, even user’s passwords, from password input fields to send to third party services.

You can tell browsers not to autocapitalise values by setting the `autocapitalize` attribute to `off`.

##### Known issues

Some apps and tools will add their own native functionality to show and hide passwords.

These tools include:

- browsers (particularly when suggesting new passwords)
- password managers
- screen readers

We’ve tried to minimise duplicate functionality by hiding other types of ‘show password’ buttons where possible.

There’s also other instances where a password could be ‘shown’ or ‘hidden’ without the use of a button – causing a mismatch with the button label (in other words, the user would see a button to ‘show’ a password that’s already visible).

[We found this mismatch happens in some browsers](https://github.com/alphagov/govuk-design-system/issues/3552#issuecomment-1976660248) when:

- a keyboard shortcut is pressed
- a suggested password is created

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | No | The ID of the input. Defaults to the value of `name`. |
| `name` | string | Yes | The name of the input, which is submitted with the form data. |
| `value` | string | No | Optional initial value of the input. |
| `disabled` | boolean | No | If `true`, input will be disabled. |
| `describedBy` | string | No | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | Yes | The label used by the text input component. See [Label](#label) for its options. |
| `hint` | object | No | Can be used to add a hint to a text input component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
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
| `autocomplete` | string | No | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used. Default is `"current-password"`. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the input. |
| `showPasswordText` | string | No | Button text when the password is hidden. Defaults to `"Show"`. |
| `hidePasswordText` | string | No | Button text when the password is visible. Defaults to `"Hide"`. |
| `showPasswordAriaLabelText` | string | No | Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string | No | Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`. |
| `passwordShownAnnouncementText` | string | No | Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`. |
| `passwordHiddenAnnouncementText` | string | No | Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`. |
| `button` | object | No | Optional object allowing customisation of the toggle button. |
| `button.classes` | string | No | Classes to add to the button. |

### Examples

#### Default

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  name: "password"
}) }}
```

Renders as:

```html
<div class="govuk-form-group govuk-password-input" data-module="govuk-password-input">
  <label class="govuk-label" for="password">
    Password
  </label>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>
```

#### With hint text

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it."
  },
  id: "password-input-with-hint-text",
  name: "test-name-2"
}) }}
```

#### With error message

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it."
  },
  id: "password-input-with-error-message",
  name: "test-name-3",
  errorMessage: {
    text: "Error message goes here"
  }
}) }}
```

#### With label as page heading

```njk
{{ govukPasswordInput({
  label: {
    text: "Password",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "password-input-with-page-heading",
  name: "test-name"
}) }}
```

#### With input width class

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  id: "password-input-width",
  name: "password",
  classes: "govuk-input--width-10"
}) }}
```

---
## Phase banner

[↑ Back to top](#table-of-contents)

**Macro:** `govukPhaseBanner` · **Import:** `{% from "govuk/components/phase-banner/macro.njk" import govukPhaseBanner %}`

**Design System guidance:** https://design-system.service.gov.uk/components/phase-banner/

### Guidance

Use the phase banner component to show users your service is still being worked on.

#### When to use this component

Services hosted on a service.gov.uk domain must use the phase banner until they pass a live assessment.

#### How it works

There are 2 ways to use the phase banner component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

Use an alpha banner when your service is in alpha, and a beta banner if your service is in private or public beta.

Show the Phase banner inside the `<header>` element, directly after either:

- the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/)
- the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) (if your service does not use the Service navigation component)

If you use Nunjucks, use the `headerEnd` block to place the Phase banner on your page.

See ['Add extra content at the start or end of the `<header>` element' in 'Page template: Blocks and options'](https://design-system.service.gov.uk/styles/page-template/#add-extra-content-at-the-start-or-end-of-the-header-element).

Phase banners are shown across all pages of a service, so users should understand it as a service-level message.

You can choose to place the Phase banner in a more appropriate place for your service, however you’ll need to customise the component and provide your own CSS code to make it show correctly.

##### Collect feedback from users

Use the [Feedback component](https://design-system.service.gov.uk/components/feedback/) to ask users to give feedback about your service and provide them with a link to a feedback page.

[Find out what feedback you need to collect at each phase](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction#user-satisfaction-through-each-service-phase) in the GOV.UK Service Manual.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the phase banner. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the phase banner. If `html` is provided, the `text` option will be ignored. |
| `tag` | object | Yes | The tag used by the phase banner component. See [Tag](#tag) for its options. |
| `classes` | string | No | Classes to add to the phase banner container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the phase banner container. |

### Examples

#### Default

```njk
{{ govukPhaseBanner({
  tag: {
    text: "Alpha"
  },
  html: "This is a new service - your <a href=\"#\" class=\"govuk-link\">feedback</a> will help us to improve it."
}) }}
```

Renders as:

```html
<div class="govuk-phase-banner govuk-width-container">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      Alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service - your <a href="#" class="govuk-link">feedback</a> will help us to improve it.
    </span>
  </p>
</div>
```

---
## Radios

[↑ Back to top](#table-of-contents)

**Macro:** `govukRadios` · **Import:** `{% from "govuk/components/radios/macro.njk" import govukRadios %}`

**Design System guidance:** https://design-system.service.gov.uk/components/radios/

### Guidance

#### When to use this component

Use the radios component when users can only select one option from a list.

#### When not to use this component

Do not use the radios component if users might need to select more than one option. In this case, you should use the [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) instead.

#### How it works

Always position radios to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.

Unlike with checkboxes, users can only select one option from a list of radios. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.

If needed, add a hint explaining this, for example, 'Select one option'.

Do not pre-select radio options as this makes it more likely that users will:

- not realise they've missed a question
- submit the wrong answer

Users cannot go back to having no option selected once they have selected one, without refreshing their browser window. Therefore, you should include 'None of the above' or 'I do not know' if they are valid options.

Order radio options alphabetically by default.

In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for 'Where do you live?' based on population size.

However you should do this with extreme caution as it can reinforce bias in your service. If in doubt, order alphabetically.

Group radios together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.

##### If you’re asking one question on the page

If you are asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the radios component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

##### Inline radios

In some cases, you can choose to display radios 'inline' beside one another (horizontally).

Only use inline radios when:

- the question only has two options
- both options are short

Remember that on small screens such as mobile devices, the radios will still be 'stacked' on top of one another (vertically).

##### Radio items with hints

You can add hints to radio items to provide additional information about the options.

Keep each hint to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with an item. This could frustrate users if the text is long.

Do not use links in hint text. While screen readers will read out the link text when describing the item, they usually do not tell users the text is a link.

##### Radio items with a text divider

If one or more of your radio options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.

##### Conditionally revealing a related question

You can ask the user a related question when they select a particular radio option, so they only see the question when it's relevant to them.

This might make two related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the 'Contact me by phone' option.

Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead.

Do not conditionally reveal questions to inline radios, such as ‘yes’ and ‘no’ options placed next to each other.

Conditionally reveal questions only - do not show or hide anything that is not a question.

###### Known issues

Users are not always notified when a conditionally revealed question is shown or hidden. This fails [WCAG 2.2 success criterion 4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html).

However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long it’s kept simple. Users we tested with did get confused when complicated questions were conditionally revealed to them, particularly questions with more than one part.

We’ll keep looking for opportunities to [learn more about how conditionally revealed questions be used in services](https://github.com/alphagov/govuk-design-system/discussions/6055).

##### Smaller radios

Use standard-sized radios in nearly all cases. However, smaller versions work well on pages where it’s helpful to make them less visually prominent.

For example, on a page of search results, the primary user need is to see the results. Using smaller radios lets users see and change search filters without distracting them from the main content.

Small radios can work well on information dense screens in services designed for repeat use, like caseworking systems.

In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times.

##### Error messages

Display an error message if the user has not:

- selected any radios
- answered a conditionally revealed question

Error messages should be styled like this:

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

###### If it’s a ‘yes’ or ‘no’ question

Say ‘Select yes if [whatever it is is true]’. For example, ‘Select yes if Sarah normally lives with you’.

###### If there are two options which are not ‘yes’ and ‘no’

Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.

###### If there are more than two options

Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.

###### If it's a conditionally revealed question

Include an [Error message component](https://design-system.service.gov.uk/components/error-message/) that is clearly related to the initial question.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `fieldset` | object | No | The fieldset used by the radios component. See [Fieldset](#fieldset) for its options. |
| `hint` | object | No | Can be used to add a hint to the radios component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the radios component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the radios component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInputs` | object | No | Content to add before all radio items within the radios component. |
| `formGroup.beforeInputs.text` | string | Yes | Text to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInputs.html` | string | Yes | HTML to add before all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs` | object | No | Content to add after all radio items within the radios component. |
| `formGroup.afterInputs.text` | string | Yes | Text to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInputs.html` | string | Yes | HTML to add after all radio items. If `html` is provided, the `text` option will be ignored. |
| `idPrefix` | string | No | Optional prefix. This is used to prefix the `id` attribute for each radio input, hint and error message, separated by `-`. Defaults to the `name` option value. |
| `name` | string | Yes | Name attribute for the radio items. |
| `items` | array | Yes | The radio items within the radios component. |
| `items[].text` | string | Yes | If `html` is set, this is not required. Text to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items[].html` | string | Yes | If `text` is set, this is not required. HTML to use within each radio item label. If `html` is provided, the `text` option will be ignored. |
| `items[].id` | string | No | Specific ID attribute for the radio item. If omitted, then `idPrefix` string will be applied. |
| `items[].value` | string | Yes | Value for the radio input. |
| `items[].label` | object | No | Subset of options for the label used by each radio item within the radios component. See [Label](#label) for its options. |
| `items[].label.classes` | string | No | Classes to add to the label tag. |
| `items[].label.attributes` | object | No | HTML attributes (for example data attributes) to add to the label tag. |
| `items[].hint` | object | No | Can be used to add a hint to each radio item within the radios component. See [Hint](#hint) for its options. |
| `items[].divider` | string | No | Divider text to separate radio items, for example the text `"or"`. |
| `items[].checked` | boolean | No | Whether the radio should be checked when the page loads. Takes precedence over the top-level `value` option. |
| `items[].conditional` | object | No | Provide additional content to reveal when the radio is checked. |
| `items[].conditional.html` | string | Yes | The HTML to reveal when the radio is checked. |
| `items[].disabled` | boolean | No | If `true`, radio will be disabled. |
| `items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the radio input tag. |
| `value` | string | No | The value for the radio which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item. |
| `classes` | string | No | Classes to add to the radio container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the radio container. |

### Examples

#### Default

```njk
{{ govukRadios({
  name: "example-default",
  fieldset: {
    legend: {
      text: "Have you changed your name?"
    }
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-default" name="example-default" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example-default">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-default-2" name="example-default" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="example-default-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>
```

#### With hint

```njk
{{ govukRadios({
  name: "example-with-hint",
  fieldset: {
    legend: {
      text: "Have you changed your name?"
    }
  },
  hint: {
    text: "This includes changing your last name or spelling your name differently."
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    }
  ]
}) }}
```

#### Inline

```njk
{{ govukRadios({
  idPrefix: "example",
  classes: "govuk-radios--inline",
  name: "example",
  fieldset: {
    legend: {
      text: "Have you changed your name?"
    }
  },
  hint: {
    text: "This includes changing your last name or spelling your name differently."
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No",
      checked: true
    }
  ]
}) }}
```

#### With legend as page heading

```njk
{{ govukRadios({
  idPrefix: "housing-act",
  name: "housing-act",
  fieldset: {
    legend: {
      text: "Which part of the Housing Act was your licence issued under?",
      classes: "govuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  hint: {
    text: "Select one of the options below."
  },
  items: [
    {
      value: "part-2",
      html: "<span class=\"govuk-heading-s govuk-!-margin-bottom-1\">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people"
    },
    {
      value: "part-3",
      html: "<span class=\"govuk-heading-s govuk-!-margin-bottom-1\">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council"
    }
  ]
}) }}
```

#### With a divider

```njk
{{ govukRadios({
  idPrefix: "example-divider",
  name: "example",
  fieldset: {
    legend: {
      text: "How do you want to sign in?"
    }
  },
  items: [
    {
      value: "government-gateway",
      text: "Use Government Gateway"
    },
    {
      value: "govuk-verify",
      text: "Use GOV.UK Verify"
    },
    {
      divider: "or"
    },
    {
      value: "create-account",
      text: "Create an account"
    }
  ]
}) }}
```

#### With hints on items

```njk
{{ govukRadios({
  idPrefix: "gov",
  name: "gov",
  fieldset: {
    legend: {
      text: "How do you want to sign in?",
      classes: "govuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  items: [
    {
      value: "gateway",
      text: "Sign in with Government Gateway",
      id: "gateway",
      hint: {
        text: "You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
      }
    },
    {
      value: "verify",
      text: "Sign in with GOV.UK Verify",
      id: "verify",
      hint: {
        text: "You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      }
    }
  ]
}) }}
```

#### Without fieldset

```njk
{{ govukRadios({
  name: "colours",
  items: [
    {
      value: "red",
      text: "Red"
    },
    {
      value: "green",
      text: "Green"
    },
    {
      value: "blue",
      text: "Blue"
    }
  ]
}) }}
```

#### With fieldset and error message

```njk
{{ govukRadios({
  idPrefix: "example",
  name: "example",
  errorMessage: {
    text: "Please select an option"
  },
  fieldset: {
    legend: {
      text: "Have you changed your name?"
    }
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No",
      checked: true
    }
  ]
}) }}
```

#### With very long option text

```njk
{{ govukRadios({
  name: "waste",
  hint: {
    text: "Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  errorMessage: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
{{ govukRadios({
  idPrefix: "how-contacted",
  name: "how-contacted",
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

#### With conditional item checked

```njk
{{ govukRadios({
  idPrefix: "how-contacted-checked",
  name: "how-contacted-checked",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      checked: true,
      conditional: {
        html: "<label class=\"govuk-label\" for=\"context-email\">Email</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
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
{{ govukRadios({
  idPrefix: "how-contacted-2",
  name: "how-contacted-2",
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
{{ govukRadios({
  idPrefix: "how-contacted-2",
  name: "how-contacted-2",
  formGroup: {
    classes: "govuk-radios--small"
  },
  fieldset: {
    legend: {
      text: "How do you want to be contacted?"
    }
  },
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

#### Small with long text

```njk
{{ govukRadios({
  idPrefix: "foo",
  name: "foo",
  classes: "govuk-radios--small",
  fieldset: {
    legend: {
      text: "Venenatis Condimentum"
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
{{ govukRadios({
  idPrefix: "how-contacted-2",
  name: "how-contacted-2",
  formGroup: {
    classes: "govuk-radios--small"
  },
  fieldset: {
    legend: {
      text: "How do you want to be contacted?"
    }
  },
  errorMessage: {
    text: "Select a thing"
  },
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

#### Small with hint

```njk
{{ govukRadios({
  idPrefix: "how-contacted-2",
  name: "how-contacted-2",
  formGroup: {
    classes: "govuk-radios--small"
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
      hint: {
        text: "Hint for email address"
      }
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

#### Small with conditional reveal

```njk
{{ govukRadios({
  idPrefix: "how-contacted-2",
  name: "how-contacted-2",
  formGroup: {
    classes: "govuk-radios--small"
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
        html: "<label class=\"govuk-label\" for=\"context-email\">Foo</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
      }
    },
    {
      value: "phone",
      text: "Phone"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

#### Small inline

```njk
{{ govukRadios({
  idPrefix: "sort",
  classes: "govuk-radios--small govuk-radios--inline",
  name: "example",
  fieldset: {
    legend: {
      text: "Sort by"
    }
  },
  items: [
    {
      value: "relevance",
      text: "relevance"
    },
    {
      value: "title",
      text: "A to Z"
    },
    {
      value: "created",
      text: "creation date"
    }
  ]
}) }}
```

#### Small with a divider

```njk
{{ govukRadios({
  idPrefix: "example-small-divider",
  name: "example",
  fieldset: {
    legend: {
      text: "How do you want to sign in?"
    }
  },
  classes: "govuk-radios--small",
  items: [
    {
      value: "government-gateway",
      text: "Use Government Gateway"
    },
    {
      value: "govuk-verify",
      text: "Use GOV.UK Verify"
    },
    {
      divider: "or"
    },
    {
      value: "create-account",
      text: "Create an account"
    }
  ]
}) }}
```

#### With conditional items and pre checked value

```njk
{{ govukRadios({
  idPrefix: "how-contacted-checked",
  name: "how-contacted-checked",
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
        html: "<label class=\"govuk-label\" for=\"context-email\">Email</label>\n<input class=\"govuk-input govuk-!-width-one-third\" name=\"context-email\" type=\"text\" id=\"context-email\">\n"
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
  ],
  value: "text"
}) }}
```

---
## Select

[↑ Back to top](#table-of-contents)

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
| `label` | object | Yes | The label used by the select component. See [Label](#label) for its options. |
| `hint` | object | No | Can be used to add a hint to the select component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the select component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
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
## Service navigation

[↑ Back to top](#table-of-contents)

**Macro:** `govukServiceNavigation` · **Import:** `{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}`

**Design System guidance:** https://design-system.service.gov.uk/components/service-navigation/

### Guidance

Service navigation helps users understand that they’re using your service and lets them navigate around your service.

If you use the page template, you'll also get the Service navigation without having to add it, as it's included by default. However, if you want to customise the default Service navigation, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

#### When to use this component

Use the Service navigation to help users understand that they’re using your service.

To decide when to use navigation links in your service, see the [Help users to navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

#### How it works

Together, the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) and Service navigation component ensure users get a consistent experience on GOV.UK.

This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.

For guidance on how to plan your header and navigation, see the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

##### Showing your service name only

Use the Service navigation component to show your service name.

##### Showing service name and navigation links

Show navigation links to let users navigate to different parts of your service and find useful links and tools.

See when and how to show navigation links in the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

#### Use ‘slots’ to add custom HTML code

The Service navigation includes the option to use ‘slots’ to render custom HTML code at specific places inside the component.

You must provide your own styles and JavaScript for the custom HTML code within a slot, particularly if you’re not adding an existing component. You’ll need to decide on the most appropriate layout and positioning.

The Help users to navigate a service pattern includes some guidance on ‘[Adding other header and navigation elements](https://design-system.service.gov.uk/patterns/navigate-a-service/#adding-other-header-and-navigation-elements)’.

##### Adding language navigation

If you use the [trial Language navigation component](https://design-system.service.gov.uk/components/language-navigation) and provide your whole service in more than one language, you can use the 'end' slot to show language options within the Service navigation and align it with navigation items.

##### Align the end slot with the navigation items

When enough space is available on screen, the Service navigation component can render custom HTML inline with navigation items, to their right, rather than underneath the navigation items.

If you use HTML:

1. Place the custom HTML code in the end slot before the closing `</div>` of the `<div class="govuk-width-container">` element.
2. Add the `govuk-service-navigation__inlining-container` to the `<div class="govuk-width-container">` element.

If you use Nunjucks:

1. Place the custom HTML code in the `html` option of the `end` slot.
2. Set the `align` option of the `end` slot to `"inline"`.

This can help save space when showing tools users expect to see in that area, like a [language navigation](https://design-system.service.gov.uk/components/language-navigation), or authentication and account links.

##### Make sure the ‘aria-label’ is accurate for users of assistive technology

When a service name is shown, we let users know that there’s information about the service with a ‘region landmark’ using the `<section>` element.

Depending on what you add in the slots, you might need to rename the `aria-label` to accurately describe what’s in the section.

##### Test with each update of GOV.UK Frontend

There’s a risk that slot contents may look or work differently in a future release of GOV.UK Frontend.

You’ll need to ensure that slot content still works as intended after each update.

#### Brand refresh of the Service navigation component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `classes` | string | No | Classes to add to the service navigation container. |
| `attributes` | object | No | HTML attributes (for example, data attributes) to add to the service navigation container. |
| `ariaLabel` | string | No | The text for the `aria-label` which labels the service navigation container when a service name is included. Defaults to `"Service information"`. |
| `menuButtonText` | string | No | The text of the mobile navigation menu toggle. |
| `menuButtonLabel` | string | No | The screen reader label for the mobile navigation menu toggle. Defaults to the same value as `menuButtonText` if not specified. |
| `navigationLabel` | string | No | The screen reader label for the mobile navigation menu. Defaults to the same value as `menuButtonText` if not specified. |
| `navigationId` | string | No | The ID used to associate the mobile navigation toggle with the navigation menu. Defaults to `navigation`. |
| `navigationClasses` | string | No | Classes to add to the navigation menu container. |
| `collapseNavigationOnMobile` | boolean | No | Whether the navigation should be collapsed inside a menu on mobile. Defaults to true if there is more than one navigation item. |
| `serviceName` | string | No | The name of your service. |
| `serviceUrl` | string | No | The homepage of your service. |
| `navigation` | array | Yes | Used to add navigation to the service header. |
| `navigation[].current` | boolean | No | If `true`, indicates that the user is currently on this page. This takes precedence over `active`. |
| `navigation[].active` | boolean | No | If `true`, indicates that the user is within this group of pages in the navigation hierarchy. |
| `navigation[].html` | string | Yes | HTML for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation[].text` | string | Yes | Text for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation[].href` | string | No | URL of the navigation item anchor. |
| `navigation[].attributes` | object | No | HTML attributes (for example data attributes) to add to the navigation item anchor. |
| `slots` | object | No | Specified points for injecting custom HTML into the service header. |
| `slots.start` | string | No | HTML injected at the start of the service header container. |
| `slots.end` | string | No | HTML injected at the end of the service header container. |
| `slots.end` | object | No | Options for injecting HTML at the end of the service header container. |
| `slots.end.html` | string | No | HTML injected at the end of the service header container. |
| `slots.end.align` | string | No | By default, the `end` slot renders below the navigation items. Use `inline` to render it on the same line as the navigation items when space is available. |
| `slots.navigationStart` | string | No | HTML injected before the first list item in the navigation list. Requires `navigation` to be set. |
| `slots.navigationEnd` | string | No | HTML injected after the last list item in the navigation list. Requires `navigation` to be set. |

### Examples

#### Default

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2"
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
Navigation item 2
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>
```

#### With navigation with a current item

The current item indicates that the user is present on that exact page. It looks the same as an active item, but marks this item as the one the user is currently viewing in ARIA.

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      current: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

#### With large navigation

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/browse/benefits",
      text: "Benefits"
    },
    {
      href: "#/browse/births-deaths-marriages",
      text: "Births, deaths, marriages and care"
    },
    {
      href: "#/browse/business",
      text: "Business and self-employed"
    },
    {
      href: "#/browse/childcare-parenting",
      text: "Childcare and parenting"
    },
    {
      href: "#/browse/citizenship",
      text: "Citizenship and living in the UK"
    },
    {
      href: "#/browse/justice",
      text: "Crime, justice and the law"
    },
    {
      href: "#/browse/disabilities",
      text: "Disabled people"
    },
    {
      href: "#/browse/driving",
      text: "Driving and transport"
    },
    {
      href: "#/browse/education",
      text: "Education and learning"
    },
    {
      href: "#/browse/employing-people",
      text: "Employing people"
    },
    {
      href: "#/browse/environment-countryside",
      text: "Environment and countryside"
    },
    {
      href: "#/browse/housing-local-services",
      text: "Housing and local services"
    },
    {
      href: "#/browse/tax",
      text: "Money and tax"
    },
    {
      href: "#/browse/abroad",
      text: "Passports, travel and living abroad"
    },
    {
      href: "#/browse/visas-immigration",
      text: "Visas and immigration"
    },
    {
      href: "#/browse/working",
      text: "Working, jobs and pensions"
    }
  ]
}) }}
```

#### With HTML navigation items

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/1",
      html: "<em>Navigation item 1</em>"
    },
    {
      href: "#/2",
      html: "<em>Navigation item 2</em>"
    },
    {
      href: "#/3",
      html: "<em>Navigation item 3</em>"
    }
  ]
}) }}
```

#### With non link navigation items

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      text: "Navigation item 1"
    },
    {
      html: "<em>Navigation item 2</em>"
    },
    {
      text: "Navigation item 3"
    }
  ]
}) }}
```

#### With service name

```njk
{{ govukServiceNavigation({
  serviceName: "Service name"
}) }}
```

#### With service link

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#/"
}) }}
```

#### With long service name

```njk
{{ govukServiceNavigation({
  serviceName: "Apply to receive a rare holofoil Charizard Pokémon card from the King",
  serviceUrl: "#/"
}) }}
```

#### With service name and navigation

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

#### Inverse

Service navigation that appears sandwiched between other areas of brand blue, such as the GOV.UK header and a custom page masthead.

```njk
{{ govukServiceNavigation({
  classes: "govuk-service-navigation--inverse",
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

#### With collapseNavigationOnMobile set to false

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ],
  collapseNavigationOnMobile: false
}) }}
```

#### With a single navigation item

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Log out"
    }
  ]
}) }}
```

#### With a single navigation item and collapseNavigationOnMobile set to true

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Log out"
    }
  ],
  collapseNavigationOnMobile: true
}) }}
```

#### With language navigation

HTML rendered by the language navigation component can be injected into the `end` slot of the service header.

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1",
      active: true
    },
    {
      href: "#/2",
      text: "Navigation item 2"
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    }
  ],
  slots: {
    end: "<nav class=\"govuk-language-navigation\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
  }
}) }}
```

#### With right aligned language navigation

HTML rendered by the language navigation component can be injected into the `end` slot of the service header.

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1",
      active: true
    },
    {
      href: "#/2",
      text: "Navigation item 2"
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    }
  ],
  slots: {
    end: {
      align: "inline",
      html: "<nav class=\"govuk-language-navigation\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
    }
  }
}) }}
```

#### Inverse with language navigation

Service navigation that appears sandwiched between other areas of brand blue, such as the GOV.UK header and a custom page masthead.

```njk
{{ govukServiceNavigation({
  classes: "govuk-service-navigation--inverse",
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ],
  slots: {
    end: "<nav class=\"govuk-language-navigation govuk-language-navigation--inverse\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
  }
}) }}
```

#### With `inline` end slot

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    }
  ],
  slots: {
    end: {
      html: "<div>[end]</div>",
      align: "inline"
    }
  }
}) }}
```

---
## Skip link

[↑ Back to top](#table-of-contents)

**Macro:** `govukSkipLink` · **Import:** `{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}`

**Design System guidance:** https://design-system.service.gov.uk/components/skip-link/

### Guidance

Use the skip link component to help keyboard-only users skip to the main content on a page.

If you use the page template, you'll also get the skip link without having to add it, as it's included by default. However, if you want to customise the default skip link, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

#### When to use this component

All GOV.UK pages must include a skip link. Usually, you should place the skip link immediately after the opening `<body>` tag. However, if you're using a [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/), place the skip link immediately after the cookie banner.

Some automated accessibility testing tools may warn that the skip link element is not inside a landmark. This warning does not apply to skip links, so you can ignore it. Do not wrap the skip link in a `<nav>` region, or move it inside the header.

#### How it works

Some people use the tab key on their keyboard to navigate through the links and form elements on a web page.

Including the skip link component gives users the option to bypass the top-level navigation links and jump to the main content on a page.

The skip link component is visually hidden until a keyboard press activates it.

There are 2 ways to use the skip link component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the skip link component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the skip link component. If `html` is provided, the `text` option will be ignored. |
| `href` | string | No | The value of the skip link’s `href` attribute. Defaults to `"#content"` if you do not provide a value. |
| `classes` | string | No | Classes to add to the skip link. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the skip link. |

### Examples

#### Default

```njk
{{ govukSkipLink({
  text: "Skip to main content",
  href: "#test-target-element"
}) }}
```

Renders as:

```html
<a href="#test-target-element" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
```

#### With focus

Simulate triggering the :focus CSS pseudo-class, not available in the production build.

```njk
{{ govukSkipLink({
  classes: ":focus",
  text: "Skip to main content",
  href: "#test-target-element"
}) }}
```

---
## Summary list

[↑ Back to top](#table-of-contents)

**Macro:** `govukSummaryList` · **Import:** `{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}`

**Design System guidance:** https://design-system.service.gov.uk/components/summary-list/

### Guidance

Use a summary list to summarise information, for example, a user’s responses at the end of a form.

#### When to use this component

Use a summary list to show information as a list of key facts.

You can use it to display metadata like ‘Last updated’ with a date like ‘22 June 2018’, or to summarise a user’s responses at the end of a form like the [Check answers pattern](https://design-system.service.gov.uk/patterns/check-answers/).

[Summary cards are a variant within this component](https://design-system.service.gov.uk/components/summary-list/#summary-cards). You can use summary cards to show multiple summary lists that describe the same type of thing, such as people. You can also add card actions that apply to the entire summary list.

#### When not to use this component

The summary list uses the description list (`<dl>`) HTML element, so only use it to present information that has a key and at least one value.

Do not use it for tabular data or a simple list of information or tasks, like a [Task list component](https://design-system.service.gov.uk/components/task-list/). For those use a `<table>`, `<ul>` or `<ol>`.

#### How it works

Each row of a summary list is made up of a:

- ‘key’ that’s a description or label of a piece of information, like “Name”
- ‘value’ which is the piece of information itself, such as “John Smith”

You can show a single or multiple summary lists on a page. If you’re showing multiple summary lists on a page, you can add structure by using headings or summary cards.

There are 2 ways to use the summary list component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

##### Adding actions to each row

You can add ‘row actions’ to a summary list. For example, you can help users go back and edit an answer by adding a ‘change’ link.

When navigating visually, the borders above and below each row help to show which row action is tied to which piece of information.

Assistive technology users, including those who use a screen reader, might hear a row action link out of context and might not know what it will do. To give more context, add visually hidden text to the links. This means a screen reader user will hear the row action and the ‘key’ label for the information it will affect, like ‘Change name’ or ‘Change date of birth’.

If a user decides to go back to a previous answer through a card or row action, make sure information they've already entered is pre-populated.

###### Showing rows with and without actions

If you’re showing a mix of rows (where some rows include actions and some do not), add the `govuk-summary-list__row--no-actions` modifier class to the rows without actions. This is to ensure the bottom border is drawn correctly in some browsers.

##### Removing the borders

The summary list includes separating borders to help users by joining the information on each row and its action together.

Think carefully before you remove row borders. Borders help many users find and read information that’s laid out in rows, especially users who zoom in on pages or use assistive technologies to magnify their screen.

If your summary list does not have any actions, you can choose to remove the separating borders with the `govuk-summary-list--no-border` class.

To remove borders on a single row, use the `govuk-summary-list__row--no-border` class.

##### Showing missing information

In some contexts, you might need to show rows that have missing information. This can happen when:

- a user returns to an incomplete journey
- you've added or changed the questions in a service.

Show a link to the appropriate question page in the `value` column so the user can enter the missing information, instead of showing a 'change' link on that row.

#### Summary cards

If you’re showing multiple summary lists on a page, you can show each list within a summary card. This lets you visually separate each summary list and give each a title and some actions.

Use summary cards when you need to show:

- multiple summary lists that all describe the same type of thing, such as people
- actions that will apply to all the items in a list

Summary cards are often used in case working systems to help users quickly view a set of information and related actions.

Do not use summary cards if you only need to show a small amount of related information. Use summary lists instead, and structure them with headings if needed.

If you’re showing summary cards at the end of a longer journey, you might want to familiarise the user with them earlier on – such as when the user reviews individual sections.

##### Card titles

Use the summary card’s header area to give each summary list a title.

Each title must be unique and help identify what the summary list describes. For example, this could be the name of a specific person, organisation or professional qualification.

Try to keep titles short and relevant. You can use one or two important values in the summary list – such as the first and last name of a person.

##### Adding card actions

You can add card actions in the header, which will be shown after the summary card's title.

For example, if you have multiple rows with "change" actions that all take the user to the same place, you can show a single “change” card action instead. This helps avoid repeating the same row action on every row.

Card actions are shown in bold text to make them visually distinct from row actions – and help alert the user that the card action will affect the entire summary card.

Write link text for card actions to tell the user what the card action will do and that it will apply to the entire summary card. It should also be as short as possible, usually 2 words.

Example card actions include:

- Remove tenant
- Edit qualification
- Update issue
- Approve application
- Cancel order

Keep it short and do not add more than 2 to 3 actions in a header.

If a card action cannot easily be undone or might have serious consequences, consider adding a warning or asking the user for confirmation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `rows` | array | Yes | The rows within the summary list component. |
| `rows[].classes` | string | No | Classes to add to the row `div`. |
| `rows[].key` | object | Yes | The reference content (key) for each row item in the summary list component. |
| `rows[].key.text` | string | Yes | If `html` is set, this is not required. Text to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows[].key.html` | string | Yes | If `text` is set, this is not required. HTML to use within each key. If `html` is provided, the `text` option will be ignored. |
| `rows[].key.classes` | string | No | Classes to add to the key wrapper. |
| `rows[].value` | object | Yes | The value for each row item in the summary list component. |
| `rows[].value.text` | string | Yes | If `html` is set, this is not required. Text to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows[].value.html` | string | Yes | If `text` is set, this is not required. HTML to use within each value. If `html` is provided, the `text` option will be ignored. |
| `rows[].value.classes` | string | No | Classes to add to the value wrapper. |
| `rows[].actions` | object | No | The action link content for each row item in the summary list component. |
| `rows[].actions.items` | array | No | The action link items within the row item of the summary list component. |
| `rows[].actions.items[].href` | string | Yes | The value of the link's `href` attribute for an action item. |
| `rows[].actions.items[].text` | string | Yes | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows[].actions.items[].html` | string | Yes | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `rows[].actions.items[].visuallyHiddenText` | string | No | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `rows[].actions.items[].classes` | string | No | Classes to add to the action item. |
| `rows[].actions.items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the action item. |
| `rows[].actions.classes` | string | No | Classes to add to the actions wrapper. |
| `card` | object | No | Can be used to wrap a summary card around the summary list component. If any of these options are present, a summary card will wrap around the summary list. |
| `card.title` | object | No | Data for the summary card header. |
| `card.title.text` | string | No | Text to use within each title. If `html` is provided, the `text` option will be ignored. |
| `card.title.html` | string | No | Text to use within each title. If `html` is provided, the `text` option will be ignored. |
| `card.title.headingLevel` | integer | No | Heading level, from `1` to `6`. Default is `2`. |
| `card.title.classes` | string | No | Classes to add to the title wrapper. |
| `card.actions` | object | No | The action link content shown in the header of each summary card wrapped around the summary list component. |
| `card.actions.items` | array | No | The action link items shown in the header within the summary card wrapped around the summary list component. |
| `card.actions.items[].href` | string | Yes | The value of the link's `href` attribute for an action item. |
| `card.actions.items[].text` | string | Yes | If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `card.actions.items[].html` | string | Yes | If `text` is set, this is not required. HTML to use within each action item. If `html` is provided, the `text` option will be ignored. |
| `card.actions.items[].visuallyHiddenText` | string | No | Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios. |
| `card.actions.items[].classes` | string | No | Classes to add to the action item. |
| `card.actions.items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the action item. |
| `card.actions.classes` | string | No | Classes to add to the actions wrapper. |
| `card.classes` | string | No | Classes to add to the container. |
| `card.attributes` | object | No | HTML attributes (for example data attributes) to add to the container. |
| `classes` | string | No | Classes to add to the container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the container. |

### Examples

#### Default

```njk
{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      }
    }
  ]
}) }}
```

Renders as:

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Firstname Lastname
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      13/08/1980
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact information
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">
        email@email.com
      </p>
      <p class="govuk-body">
        Address line 1<br>
        Address line 2<br>
        Address line 3<br>
        Address line 4<br>
        Address line 5
      </p>
    </dd>
  </div>
</dl>
```

#### With actions

```njk
{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Edit",
            visuallyHiddenText: "name"
          },
          {
            href: "#",
            text: "Delete",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Edit",
            visuallyHiddenText: "contact information"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact information"
          }
        ]
      }
    }
  ]
}) }}
```

#### No border

```njk
{{ govukSummaryList({
  classes: "govuk-summary-list--no-border",
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      }
    }
  ]
}) }}
```

#### No border on last row

```njk
{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "<p class=\"govuk-body\">\n  email@email.com\n</p>\n<p class=\"govuk-body\">\n  Address line 1<br>\n  Address line 2<br>\n  Address line 3<br>\n  Address line 4<br>\n  Address line 5\n</p>\n"
      },
      classes: "govuk-summary-list__row--no-border"
    }
  ]
}) }}
```

#### Extreme

```njk
{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Buy"
          },
          {
            href: "#",
            text: "Use"
          },
          {
            href: "#",
            text: "Break"
          },
          {
            href: "#",
            text: "Fix"
          },
          {
            href: "#",
            text: "Trash"
          },
          {
            href: "#",
            text: "Change"
          },
          {
            href: "#",
            text: "Mail"
          },
          {
            href: "#",
            text: "Upgrade"
          },
          {
            href: "#",
            text: "Charge"
          },
          {
            href: "#",
            text: "Point"
          },
          {
            href: "#",
            text: "Zoom"
          },
          {
            href: "#",
            text: "Press"
          },
          {
            href: "#",
            text: "Snap"
          },
          {
            href: "#",
            text: "Work"
          },
          {
            href: "#",
            text: "Quick"
          },
          {
            href: "#",
            text: "Erase"
          }
        ]
      }
    },
    {
      key: {
        text: "Long website address"
      },
      value: {
        html: "<a class=\"govuk-link\" href=\"https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch\">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>\n"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "long website address"
          }
        ]
      }
    },
    {
      key: {
        text: "Long email address"
      },
      value: {
        html: "<a class=\"govuk-link\" href=\"mailto:webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com\">webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com</a>\n"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "long email address"
          }
        ]
      }
    },
    {
      key: {
        text: "No wrapping allowed"
      },
      value: {
        html: "<p class=\"govuk-body\" style=\"white-space: nowrap;\">michelle.longish.name@example.com</p>\n"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "no wrapping allowed"
          }
        ]
      }
    },
    {
      key: {
        text: "Pneumonoultramicroscopicsilicovolcanoconiosis"
      },
      value: {
        html: "<p class=\"govuk-body\">Pneumonoultramicroscopicsilicovolcanoconiosis is a word coined by the president of the National Puzzlers’ League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the Oxford English Dictionary, which defines it as \"an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust.\"</p>\n<p class=\"govuk-body\">Silicosis is a form of occupational lung disease caused by inhalation of crystalline silica dust, and is marked by inflammation and scarring in the form of nodular lesions in the upper lobes of the lungs. It is a type of pneumoconiosis.</p>\n"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Write"
          },
          {
            href: "#",
            text: "Cut"
          },
          {
            href: "#",
            text: "Paste"
          },
          {
            href: "#",
            text: "Save"
          },
          {
            href: "#",
            text: "Load"
          },
          {
            href: "#",
            text: "Check"
          },
          {
            href: "#",
            text: "Quick"
          },
          {
            href: "#",
            text: "Rewrite"
          },
          {
            href: "#",
            text: "Plug"
          },
          {
            href: "#",
            text: "Play"
          },
          {
            href: "#",
            text: "Burn"
          },
          {
            href: "#",
            text: "Rip"
          },
          {
            href: "#",
            text: "Drag and drop"
          },
          {
            href: "#",
            text: "Zip"
          },
          {
            href: "#",
            text: "Unzip"
          },
          {
            href: "#",
            text: "Lock"
          },
          {
            href: "#",
            text: "Fill"
          },
          {
            href: "#",
            text: "Curl"
          },
          {
            href: "#",
            text: "Find"
          },
          {
            href: "#",
            text: "View"
          }
        ]
      }
    },
    {
      key: {
        text: "Its vanished trees, the trees that had made way for Gatsby’s house, Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder."
      },
      value: {
        text: "The Great Gatsby"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Code"
          },
          {
            href: "#",
            text: "Jam"
          },
          {
            href: "#",
            text: "Unlock"
          },
          {
            href: "#",
            text: "Surf"
          },
          {
            href: "#",
            text: "Scroll"
          },
          {
            href: "#",
            text: "Pose"
          },
          {
            href: "#",
            text: "Click"
          },
          {
            href: "#",
            text: "Cross"
          },
          {
            href: "#",
            text: "Crack"
          },
          {
            href: "#",
            text: "Twitch"
          },
          {
            href: "#",
            text: "Update"
          },
          {
            href: "#",
            text: "Name"
          },
          {
            href: "#",
            text: "Read"
          },
          {
            href: "#",
            text: "Tune"
          },
          {
            href: "#",
            text: "Print"
          },
          {
            href: "#",
            text: "Scan"
          },
          {
            href: "#",
            text: "Send"
          },
          {
            href: "#",
            text: "Fax"
          },
          {
            href: "#",
            text: "Rename"
          },
          {
            href: "#",
            text: "Touch"
          },
          {
            href: "#",
            text: "Bring"
          },
          {
            href: "#",
            text: "Pay"
          },
          {
            href: "#",
            text: "Watch"
          },
          {
            href: "#",
            text: "Turn"
          },
          {
            href: "#",
            text: "Leave"
          },
          {
            href: "#",
            text: "Stop"
          },
          {
            href: "#",
            text: "Format"
          }
        ]
      }
    }
  ]
}) }}
```

#### As a summary card with a text header

```njk
{{ govukSummaryList({
  card: {
    title: {
      text: "Undergraduate teaching assistant"
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      }
    }
  ]
}) }}
```

#### As a summary card with a html header

```njk
{{ govukSummaryList({
  card: {
    title: {
      html: "<em>Undergraduate teaching assistant</em>"
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      }
    }
  ]
}) }}
```

#### As a summary card with actions

```njk
{{ govukSummaryList({
  card: {
    title: {
      text: "Undergraduate teaching assistant"
    },
    actions: {
      items: [
        {
          text: "Delete job history",
          href: "#"
        },
        {
          text: "Withdraw job history",
          href: "#"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      }
    }
  ]
}) }}
```

#### As a summary card with actions plus summary list actions

```njk
{{ govukSummaryList({
  card: {
    title: {
      text: "Undergraduate teaching assistant"
    },
    actions: {
      items: [
        {
          text: "Delete job history",
          href: "#"
        },
        {
          text: "Withdraw job history",
          href: "#"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Firstname Lastname"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Edit",
            visuallyHiddenText: "name"
          },
          {
            href: "#",
            text: "Delete",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "13/08/1980"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    }
  ]
}) }}
```

#### As a summary card extreme

```njk
{{ govukSummaryList({
  card: {
    title: {
      text: "Senior mid-level customer experience enhancement consultant"
    },
    actions: {
      items: [
        {
          text: "Bop it",
          href: "#"
        },
        {
          text: "Twist it",
          href: "#"
        },
        {
          text: "Pull it",
          href: "#"
        },
        {
          text: "Flick it",
          href: "#"
        },
        {
          text: "Spin it",
          href: "#"
        },
        {
          text: "Shout it",
          href: "#"
        },
        {
          text: "Shake it",
          href: "#"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Buy"
          },
          {
            href: "#",
            text: "Use"
          },
          {
            href: "#",
            text: "Break"
          },
          {
            href: "#",
            text: "Fix"
          },
          {
            href: "#",
            text: "Trash"
          },
          {
            href: "#",
            text: "Change"
          },
          {
            href: "#",
            text: "Mail"
          },
          {
            href: "#",
            text: "Upgrade"
          },
          {
            href: "#",
            text: "Charge"
          },
          {
            href: "#",
            text: "Point"
          },
          {
            href: "#",
            text: "Zoom"
          },
          {
            href: "#",
            text: "Press"
          },
          {
            href: "#",
            text: "Snap"
          },
          {
            href: "#",
            text: "Work"
          },
          {
            href: "#",
            text: "Quick"
          },
          {
            href: "#",
            text: "Erase"
          }
        ]
      }
    },
    {
      key: {
        text: "Long website address"
      },
      value: {
        html: "<a class=\"govuk-link\" href=\"https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch\">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>\n"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "long website address"
          }
        ]
      }
    }
  ]
}) }}
```

---
## Table

[↑ Back to top](#table-of-contents)

**Macro:** `govukTable` · **Import:** `{% from "govuk/components/table/macro.njk" import govukTable %}`

**Design System guidance:** https://design-system.service.gov.uk/components/table/

### Guidance

Use the table component to make information easier to compare and scan for users.

#### When to use this component

Use the table component to let users compare information in rows and columns.

#### When not to use this component

Never use the table component to layout content on a page. Instead, use the [grid system](https://design-system.service.gov.uk/styles/layout/#using-the-grid-system).

#### How it works

##### Table captions

Use the `<caption>` element to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.

There are other styling options for table captions. You can use `govuk-table__caption--s`, `govuk-table__caption--m`, `govuk-table__caption--l` and `govuk-table__caption--xl` classes to make them larger or smaller from the default.

##### Table headers

Use table headers to tell users what the rows and columns represent. Use the `scope` attribute to help users of assistive technology distinguish between row and column headers.

There are 2 ways to use the table component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

#### Numbers in a table

When comparing columns of numbers, align the numbers to the right in table cells.

#### Custom column widths

You can use the [width override classes](https://design-system.service.gov.uk/styles/layout/#width-override-classes) to set the width of table columns.

If the [width override classes](https://design-system.service.gov.uk/styles/layout/#width-override-classes) do not meet your needs you can create your own width classes and apply them to the cells in the table head. These can be added using the `classes` option in the Nunjucks macro or adding the class directly to the individual cells within `govuk-table__head` as below.

To learn more about this, read guidance on [extending and modifying components in production](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/).

#### Tables with a lot of data

If possible, you should aim to have less data in your tables. If you have a lot of data, try to organise it into multiple tables or multiple pages.

If you cannot split your data, you can use the CSS class `govuk-table--small-text-until-tablet`. This class reduces the size of the text on small screens so large amounts of data has more empty space around it. This makes it easier to visually differentiate between each piece of data when read on small screens.

  <p>The CSS class <code>govuk-table--small-text-until-tablet</code> is only available in version 5.2 of GOV.UK Frontend and later.</p>
  <p>Read about <a href="/get-started/new-type-scale/">updating your service to use the new type scale</a>.</p>

You should not use this class on tables unless your table has a lot of data, because a smaller amount of data is easier to read if the text is larger.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `rows` | array | Yes | The rows within the table component. |
| `rows[].text` | string | Yes | If `html` is set, this is not required. Text for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows[].html` | string | Yes | If `text` is set, this is not required. HTML for cells in table rows. If `html` is provided, the `text` option will be ignored. |
| `rows[].format` | string | No | Specify format of a cell. Currently we only use "numeric". |
| `rows[].classes` | string | No | Classes to add to the table row cell. |
| `rows[].colspan` | integer | No | Specify how many columns a cell extends. |
| `rows[].rowspan` | integer | No | Specify how many rows a cell extends. |
| `rows[].attributes` | object | No | HTML attributes (for example data attributes) to add to the table cell. |
| `head` | array | No | Can be used to add a row of table header cells (`<th>`) at the top of the table component. |
| `head[].text` | string | No | If `html` is set, this is not required. Text for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head[].html` | string | No | If `text` is set, this is not required. HTML for table head cells. If `html` is provided, the `text` option will be ignored. |
| `head[].format` | string | No | Specify format of a cell. Currently we only use "numeric". |
| `head[].classes` | string | No | Classes to add to the table head cell. |
| `head[].colspan` | integer | No | Specify how many columns a cell extends. |
| `head[].rowspan` | integer | No | Specify how many rows a cell extends. |
| `head[].attributes` | object | No | HTML attributes (for example data attributes) to add to the table cell. |
| `caption` | string | No | Caption text. |
| `captionClasses` | string | No | Classes for caption text size. Classes should correspond to the available typography heading classes. |
| `firstCellIsHeader` | boolean | No | If set to `true`, the first cell in each row will be a table header (`<th>`). |
| `classes` | string | No | Classes to add to the table container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the table container. |

### Examples

#### Default

```njk
{{ govukTable({
  rows: [
    [
      {
        text: "January"
      },
      {
        text: "£85",
        format: "numeric"
      },
      {
        text: "£95",
        format: "numeric"
      }
    ],
    [
      {
        text: "February"
      },
      {
        text: "£75",
        format: "numeric"
      },
      {
        text: "£55",
        format: "numeric"
      }
    ],
    [
      {
        text: "March"
      },
      {
        text: "£165",
        format: "numeric"
      },
      {
        text: "£125",
        format: "numeric"
      }
    ]
  ]
}) }}
```

Renders as:

```html
<table class="govuk-table">
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">January</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">February</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">March</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>
```

#### With head

```njk
{{ govukTable({
  head: [
    {
      text: "Month you apply"
    },
    {
      text: "Rate for bicycles",
      format: "numeric"
    },
    {
      text: "Rate for vehicles",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "January"
      },
      {
        text: "£85",
        format: "numeric"
      },
      {
        text: "£95",
        format: "numeric"
      }
    ],
    [
      {
        text: "February"
      },
      {
        text: "£75",
        format: "numeric"
      },
      {
        text: "£55",
        format: "numeric"
      }
    ],
    [
      {
        text: "March"
      },
      {
        text: "£165",
        format: "numeric"
      },
      {
        text: "£125",
        format: "numeric"
      }
    ]
  ]
}) }}
```

#### With head and caption

```njk
{{ govukTable({
  caption: "Caption 1: Months and rates",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Month you apply"
    },
    {
      text: "Rate for bicycles",
      format: "numeric"
    },
    {
      text: "Rate for vehicles",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "January"
      },
      {
        text: "£85",
        format: "numeric"
      },
      {
        text: "£95",
        format: "numeric"
      }
    ],
    [
      {
        text: "February"
      },
      {
        text: "£75",
        format: "numeric"
      },
      {
        text: "£55",
        format: "numeric"
      }
    ],
    [
      {
        text: "March"
      },
      {
        text: "£165",
        format: "numeric"
      },
      {
        text: "£125",
        format: "numeric"
      }
    ]
  ]
}) }}
```

---
## Tabs

[↑ Back to top](#table-of-contents)

**Macro:** `govukTabs` · **Import:** `{% from "govuk/components/tabs/macro.njk" import govukTabs %}`

**Design System guidance:** https://design-system.service.gov.uk/components/tabs/

### Guidance

The tabs component lets users navigate between related sections of content, displaying one section at a time.

#### When to use this component

Tabs can be a helpful way of letting users quickly switch between related information if:

- your content can be usefully separated into clearly labelled sections
- the first section is more relevant than the others for most users
- users will not need to view all the sections at once

Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use.

#### When not to use this component

Do not use the tabs component if the total amount of content the tabs contain will make the page slow to load. For this reason, do not use the tabs component as a form of page navigation.

Tabs hide content from users and not everyone will notice them or understand how they work.

Do not use tabs if your users might need to:

- read through all of the content in order, for example, to understand a step-by-step process
- compare information in different tabs - having to memorise the information and switch backwards and forwards can be frustrating and difficult

Test your content without tabs first. Consider if it’s better to:

- simplify and reduce the amount of content
- split the content across multiple pages
- keep the content on a single page, separated by headings
- use a table of contents to let users navigate quickly to specific sections of content

#### Decide between using tabs, accordion and details

The Tabs component, [Accordion component](https://design-system.service.gov.uk/components/accordion/), and [Details component](https://design-system.service.gov.uk/components/details/) all hide sections of content which a user can choose to reveal.

If you decide to use one of these components, consider if:

- the user does not need to view more than one section at a time – consider using tabs
- the user needs to switch quickly between sections – tabs can show content without pushing other sections down the page, unlike accordions
- there are many pieces of content – tabs can fit fewer sections as they’re arranged horizontally, unlike accordions which are arranged vertically
- there’s only one or two pieces of short, less important content – the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs

#### How it works

There are 2 ways to use the tabs component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

The tabs component uses JavaScript. When JavaScript is not available, users will see the tabbed content on a single page, in order from first to last, with a table of contents that links to each of the sections.

This is also how the component currently behaves on small screens, though more research is needed on this.

##### The current tab gets stored in the URL

When moving between tabs, the URL gets updated with a fragment (`#id-of-the-tab`) corresponding to the current tab's `id` attribute's value.

If the tab's name is "United Kingdom" then the fragment could be `#tab_united-kingdom`.

Because of this feature, pressing the browser's 'back' button should navigate back to the previous tab.

##### Use clear labels

Tabs hide content, so the tab labels need to make it very clear what they link to, otherwise users will not know if they need to click on them.

If you struggle to come up with clear labels, it might be because the way you’ve separated the content is not clear.

##### Order the tabs according to user needs

The first tab should be the most commonly-needed section. Arrange the other tabs in the order that makes most sense for your users.

##### Do not disable tabs

Disabling elements is normally confusing for users. If there is no content for a tab, either remove the tab or, if that would be confusing for your users, explain why there is no content when the tab is selected.

##### Avoid tabs that wrap over more than one line

If you use too many tabs or they have long labels then they may wrap over more than one line. This makes it harder for users to see the connection between the selected tab and its content.

##### Add headings to tab content

Include a heading at the beginning of each tab that duplicates the information in the tab label. Providing a heading improves navigation on smaller screen sizes and for screen reader users.

#### Research and testing

This component has not yet been tried in research with users.

The design, code and guidance here are based on recommendations from [Inclusive Components](https://inclusive-components.design/tabbed-interfaces/) and the [Nielsen Norman Group](https://www.nngroup.com/articles/tabs-used-right/) as well as user research findings and examples of tabs in the following services:

- Manage bereavement support payment (DWP)
- Support for check your state pension (DWP)
- Access to work integrated system (DWP)
- Bank holidays (GDS)
- Universal Credit (DWP)
- Criminal Justice Services (CPP)
- Judiciary UI internal systems (HMCTS)
- Rural Payments (Defra)

##### Next steps

User research is needed to confirm:

- which types of services tabs work best in
- that this approach to tabs is the best option for screen reader users and sighted keyboard users
- how this component should behave on small screen sizes

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | No | This is used for the main component and to compose the ID attribute for each item. |
| `idPrefix` | string | No | Optional prefix. This is used to prefix the `id` attribute for each tab item and panel, separated by `-`. |
| `title` | string | No | Title for the tabs table of contents. |
| `items` | array | Yes | The individual tabs within the tabs component. |
| `items[].id` | string | Yes | Specific ID attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| `items[].label` | string | Yes | The text label of a tab item. |
| `items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the tab. |
| `items[].panel` | object | Yes | The contents of each tab within the tabs component. This is referenced as a panel. |
| `items[].panel.text` | string | Yes | If `html` is set, this is not required. Text to use within each tab panel. If `html` is provided, the `text` option will be ignored. |
| `items[].panel.html` | string | Yes | If `text` is set, this is not required. HTML to use within each tab panel. If `html` is provided, the `text` option will be ignored. |
| `items[].panel.attributes` | object | No | HTML attributes (for example data attributes) to add to the tab panel. |
| `classes` | string | No | Classes to add to the tabs component. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the tabs component. |

### Examples

#### Default

```njk
{{ govukTabs({
  items: [
    {
      label: "Past day",
      id: "past-day",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Past day</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">3</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">1</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">2</td>\n      <td class=\"govuk-table__cell\">0</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      label: "Past week",
      id: "past-week",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Past week</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">24</td>\n      <td class=\"govuk-table__cell\">18</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">16</td>\n      <td class=\"govuk-table__cell\">20</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">24</td>\n      <td class=\"govuk-table__cell\">27</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      label: "Past month",
      id: "past-month",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Past month</h2>\n<table class=\"govuk-table\">\n  <thead class=\"govuk-table__head\">\n    <tr class=\"govuk-table__row\">\n      <th class=\"govuk-table__header\" scope=\"col\">Case manager</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases opened</th>\n      <th class=\"govuk-table__header\" scope=\"col\">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class=\"govuk-table__body\">\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">David Francis</td>\n      <td class=\"govuk-table__cell\">98</td>\n      <td class=\"govuk-table__cell\">95</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Paul Farmer</td>\n      <td class=\"govuk-table__cell\">122</td>\n      <td class=\"govuk-table__cell\">131</td>\n    </tr>\n    <tr class=\"govuk-table__row\">\n      <td class=\"govuk-table__cell\">Rita Patel</td>\n      <td class=\"govuk-table__cell\">126</td>\n      <td class=\"govuk-table__cell\">142</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    },
    {
      label: "Past year",
      id: "past-year",
      panel: {
        text: "There is no data for this year yet, check back later"
      }
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>
  <ul class="govuk-tabs__list">
    <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#past-day">
        Past day
      </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-week">
        Past week
      </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-month">
        Past month
      </a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-year">
        Past year
      </a>
    </li>
  </ul>
  <div class="govuk-tabs__panel" id="past-day">
    <h2 class="govuk-heading-l">Past day</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">3</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">2</td>
          <td class="govuk-table__cell">0</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
    <h2 class="govuk-heading-l">Past week</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">18</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">16</td>
          <td class="govuk-table__cell">20</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">27</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
    <h2 class="govuk-heading-l">Past month</h2>
    <table class="govuk-table">
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
          <th class="govuk-table__header" scope="col">Case manager</th>
          <th class="govuk-table__header" scope="col">Cases opened</th>
          <th class="govuk-table__header" scope="col">Cases closed</th>
        </tr>
      </thead>
      <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">98</td>
          <td class="govuk-table__cell">95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">122</td>
          <td class="govuk-table__cell">131</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">126</td>
          <td class="govuk-table__cell">142</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
    <p class="govuk-body">There is no data for this year yet, check back later</p>
  </div>
</div>
```

#### Tabs with anchor in panel

Ensure that anchors that are in tab panels work correctly

```njk
{{ govukTabs({
  items: [
    {
      label: "Tab 1",
      id: "tab-1",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Tab 1</h2>\n<p class=\"govuk-body\">Testing that when you click the anchor it moves to the anchor point successfully</p>\n<p class=\"govuk-body\"><a class=\"govuk-link\" href=\"#anchor\">Anchor</a></p>\n<p class=\"govuk-body\"><a id=\"anchor\" tabindex=\"0\">Anchor Point</a></p>\n"
      }
    },
    {
      label: "Tab 2",
      id: "tab-2",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Tab 2</h2>\n"
      }
    }
  ]
}) }}
```

---
## Tag

[↑ Back to top](#table-of-contents)

**Macro:** `govukTag` · **Import:** `{% from "govuk/components/tag/macro.njk" import govukTag %}`

**Design System guidance:** https://design-system.service.gov.uk/components/tag/

### Guidance

Use the Tag component to show users the status of something.

#### When to use this component

Use the Tag component when it’s possible for something to have more than one status and it’s useful for the user to know about that status. For example, you can use a tag to show whether an item in a [Task list component](https://design-system.service.gov.uk/components/task-list/) has been ‘completed’.

#### How it works

There are two ways to use the Tag component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

Tags are only used to indicate a status. Do not make a tag interactive by making it into a link or button. Use adjectives (descriptive words) and not verbs (action words) for the names of your tags. Using a verb might make a user think that clicking on them will do something.

Do not use tags to create links, buttons or other interactive elements, as users:

- are unlikely to identify the tags as something they’re meant to interact with
- would see no visual difference between interactive and non-interactive tags

#### Showing one or two statuses

Sometimes a single status is enough. For example if you need to tell users which parts of an application they’ve finished and which they have not, you may only need a ‘Completed’ tag. Because the user understands that if something does not have a tag, that means it’s incomplete.

The [Complete multiple tasks pattern](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) has an example of how to show one status using tags.

Or it can make sense to have two statuses. For example you may find that there’s a need to have one tag for ‘Active’ users and one for ‘Inactive’ users.

#### Showing multiple statuses

Tags should be helpful to users. The more you add, the harder it is for users to remember them. So start with the smallest number of statuses you think might work, then add more if your user research shows there’s a need for them.

#### Using colour with tags

You can use colour to help distinguish between different tags – or to help draw the user’s attention to a tag if it’s especially important. For example, it probably makes sense to use `govuk-tag--red` for a tag that reads ‘Urgent’.

Do not use colour alone to convey information, because it’s not accessible. If you use the same tag in more than one place, make sure you keep the colour consistent. This is to [meet WCAG 2.2 success criterion 1.4.1 Use of colour](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

##### Additional colours

If you need more tag colours, you can use the following colours.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | No | Classes to add to the tag. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the tag. |

### Examples

#### Default

```njk
{{ govukTag({
  text: "Alpha"
}) }}
```

Renders as:

```html
<strong class="govuk-tag">
  Alpha
</strong>
```

#### Grey

```njk
{{ govukTag({
  text: "Grey",
  classes: "govuk-tag--grey"
}) }}
```

#### Turquoise

```njk
{{ govukTag({
  text: "Teal",
  classes: "govuk-tag--teal"
}) }}
```

#### Green

```njk
{{ govukTag({
  text: "Green",
  classes: "govuk-tag--green"
}) }}
```

#### Purple

```njk
{{ govukTag({
  text: "Purple",
  classes: "govuk-tag--purple"
}) }}
```

#### Pink

```njk
{{ govukTag({
  text: "Magenta",
  classes: "govuk-tag--magenta"
}) }}
```

#### Red

```njk
{{ govukTag({
  text: "Red",
  classes: "govuk-tag--red"
}) }}
```

#### Orange

```njk
{{ govukTag({
  text: "Orange",
  classes: "govuk-tag--orange"
}) }}
```

#### Yellow

```njk
{{ govukTag({
  text: "Yellow",
  classes: "govuk-tag--yellow"
}) }}
```

---
## Task list

[↑ Back to top](#table-of-contents)

**Macro:** `govukTaskList` · **Import:** `{% from "govuk/components/task-list/macro.njk" import govukTaskList %}`

**Design System guidance:** https://design-system.service.gov.uk/components/task-list/

### Guidance

The task list component displays all the tasks a user needs to do, and allows users to easily identify which ones are done and which they still need to do.

#### When to use this component

Use the task list to give users more control over how they complete long, complex services.

Only use the task list if there’s evidence that users:

- do not want to, or cannot, complete all the tasks in one sitting
- need to be able to choose the order they complete the tasks in

#### When not to use this component

Try to simplify the service before you use a task list. If you’re able to reduce the number of tasks or steps involved, you might not need one.

Do not use the task list for a long service that needs to be completed in a specific order. If it needs to be completed over multiple sessions, consider allowing users to save their progress, and then to continue where they left off when they return. Use the start page to explain what users will be expected to do during the service.

The task list should not be used as a way of showing users their answers. For this, you should use a [Summary list component](https://design-system.service.gov.uk/components/summary-list/) instead.

#### How it works

There are 2 ways to use the task list component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/), you can use the Nunjucks macro.

Users should be able to complete tasks in whatever order they like.

The status alongside the task indicates whether they can start it. Users can select a task to start completing it. Once they have completed it and returned to the task list, the status for that task will have changed to ‘Completed’.

Users can only move on from the task list when all tasks are shown as ‘Completed’.

Read the [Complete multiple tasks pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) for more information on how to use the task list within a service.

##### Tasks

Tasks are usually actions that the user needs to take to complete a service. In a task list, the user should be able to choose to complete tasks in any order that works for them.

Each task within a task list includes a task name and a status. It can also include hint text if you decide this is needed.

The whole row is linked, allowing users to select anywhere within it to start the task.

###### Write clear task descriptions

The task name gives users a reasonable expectation of what that task is about. For example, ‘Your contact details’ or ‘Upload evidence’. Use sentence case, and keep it short. Users of screen readers might find it difficult to navigate the task list if the task names are too long.

If you’re finding it difficult to come up with a clear and concise task name, it might be because the task itself is too complex and may need to be separated into smaller tasks. Group questions and actions into tasks in a way that makes sense to users, based on their needs.

###### Adding hint text

Only use hint text if there is evidence that the user needs more information about what the task will include.

Keep hint text to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with the task link. This could frustrate users if the text is long.

Do not include links within the hint text. The whole task row links users to the task itself, so any links within the hint text will not work.

###### Grouping tasks

If there are a lot of tasks to complete, you might find that grouping them makes it easier for users to understand and plan what they need to do. Tasks can be grouped into separate task lists on a page. Give each task list a short heading that clearly explains the grouping.

Read the [Complete multiple tasks pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) for more information on grouping tasks.

##### Statuses

Statuses use colour and a short descriptor to give users a quick overview of how much of the task list they have completed, and how much is left to do.

Read the [Complete multiple tasks pattern guidance](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) for more information on status colours and text.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | array | Yes | The items for each task within the task list component. |
| `items[].title` | object | Yes | The main title for the task within the task list component. |
| `items[].title.text` | string | Yes | Text to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items[].title.html` | string | Yes | HTML to use within the title. If `html` is provided, the `text` argument will be ignored. |
| `items[].title.classes` | string | No | Classes to add to the title wrapper. |
| `items[].hint` | object | No | Can be used to add a hint to each task within the task list component. |
| `items[].hint.text` | string | Yes | Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items[].hint.html` | string | Yes | HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| `items[].status` | object | Yes | The status for each task within the task list component. |
| `items[].status.tag` | object | No | Can be used to add a tag to the status of the task within the task list component. See [Tag](#tag) for its options. |
| `items[].status.text` | string | No | Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items[].status.html` | string | No | HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| `items[].status.classes` | string | No | Classes to add to the status container. |
| `items[].href` | string | No | The value of the link’s `href` attribute for the task list item. |
| `items[].classes` | string | No | Classes to add to the item `div`. |
| `classes` | string | No | Classes to add to the `ul` container for the task list. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the `ul` container for the task list. |
| `idPrefix` | string | No | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `-`. Defaults to `"task-list"`. |

### Examples

#### Default

```njk
{{ govukTaskList({
  items: [
    {
      title: {
        text: "Company Directors"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    },
    {
      title: {
        text: "Registered company details"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Business plan"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    }
  ]
}) }}
```

Renders as:

```html
<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
</ul>
```

#### Forced hover state

```njk
{{ govukTaskList({
  items: [
    {
      title: {
        text: "Company Directors"
      },
      href: "#",
      status: {
        text: "Completed"
      },
      classes: ":hover"
    },
    {
      title: {
        text: "Registered company details"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Business plan"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    }
  ]
}) }}
```

#### With hint text and additional states

```njk
{{ govukTaskList({
  items: [
    {
      title: {
        text: "Company Directors"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    },
    {
      title: {
        text: "Registered company details"
      },
      href: "#",
      status: {
        tag: {
          text: "Not started",
          classes: "govuk-tag--teal"
        }
      }
    },
    {
      title: {
        text: "Business plan"
      },
      href: "#",
      hint: {
        text: "Ensure the plan covers objectives, strategies, sales, marketing and financial forecasts."
      },
      status: {
        tag: {
          text: "Review",
          classes: "govuk-tag--magenta"
        }
      }
    },
    {
      title: {
        text: "Documentation"
      },
      href: "#",
      status: {
        tag: {
          text: "In progress",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Charitable status"
      },
      href: "#",
      status: {
        tag: {
          text: "Error",
          classes: "govuk-tag--red"
        }
      }
    },
    {
      title: {
        text: "Payment"
      },
      hint: {
        text: "It will cost between £15 and £75"
      },
      status: {
        text: "Cannot start yet",
        classes: "govuk-task-list__status--cannot-start-yet"
      }
    }
  ]
}) }}
```

#### With all possible colours

```njk
{{ govukTaskList({
  items: [
    {
      title: {
        text: "Task A"
      },
      href: "#",
      status: {
        text: "Text colour"
      }
    },
    {
      title: {
        text: "Task B"
      },
      href: "#",
      status: {
        text: "Secondary text colour",
        classes: "govuk-task-list__status--cannot-start-yet"
      }
    },
    {
      title: {
        text: "Task C"
      },
      href: "#",
      status: {
        tag: {
          text: "Grey",
          classes: "govuk-tag--grey"
        }
      }
    },
    {
      title: {
        text: "Task D"
      },
      href: "#",
      status: {
        tag: {
          text: "Blue",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Task E"
      },
      href: "#",
      status: {
        tag: {
          text: "Teal",
          classes: "govuk-tag--teal"
        }
      }
    },
    {
      title: {
        text: "Task F"
      },
      href: "#",
      status: {
        tag: {
          text: "Green",
          classes: "govuk-tag--green"
        }
      }
    },
    {
      title: {
        text: "Task G"
      },
      href: "#",
      status: {
        tag: {
          text: "Purple",
          classes: "govuk-tag--purple"
        }
      }
    },
    {
      title: {
        text: "Task H"
      },
      href: "#",
      status: {
        tag: {
          text: "Magenta",
          classes: "govuk-tag--magenta"
        }
      }
    },
    {
      title: {
        text: "Task I"
      },
      href: "#",
      status: {
        tag: {
          text: "Red",
          classes: "govuk-tag--red"
        }
      }
    },
    {
      title: {
        text: "Task J"
      },
      href: "#",
      status: {
        tag: {
          text: "Orange",
          classes: "govuk-tag--orange"
        }
      }
    },
    {
      title: {
        text: "Task K"
      },
      href: "#",
      status: {
        tag: {
          text: "Yellow",
          classes: "govuk-tag--yellow"
        }
      }
    }
  ]
}) }}
```

#### With very long single word tags

```njk
{{ govukTaskList({
  items: [
    {
      title: {
        text: "Company Directors"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    },
    {
      title: {
        text: "Registered company details"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "A very very very long Business plan"
      },
      href: "#",
      status: {
        tag: {
          text: "Thisisaverylongwaytosaythatsomethingisincomplete",
          classes: "govuk-tag--blue"
        }
      }
    }
  ]
}) }}
```

#### With empty values

```njk
{{ govukTaskList({
  items: [
    null,
    null,
    {
      title: {
        text: "Task A"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    },
    false,
    "",
    {
      title: {
        text: "Task B"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    }
  ]
}) }}
```

---
## Textarea

[↑ Back to top](#table-of-contents)

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
| `label` | object | Yes | The label used by the textarea component. See [Label](#label) for its options. |
| `hint` | object | No | Can be used to add a hint to the textarea component. See [Hint](#hint) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the textarea component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](#error-message) for its options. |
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
## Warning text

[↑ Back to top](#table-of-contents)

**Macro:** `govukWarningText` · **Import:** `{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}`

**Design System guidance:** https://design-system.service.gov.uk/components/warning-text/

### Guidance

#### When to use this component

Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might&nbsp;take.

#### How it works

There are 2 ways to use the warning text component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

You might need to rewrite the hidden text (‘Warning’ in the example) to make it appropriate for your context.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | Yes | If `html` is set, this is not required. Text to use within the warning text component. If `html` is provided, the `text` option will be ignored. |
| `html` | string | Yes | If `text` is set, this is not required. HTML to use within the warning text component. If `html` is provided, the `text` option will be ignored. |
| `iconFallbackText` | string | No | The fallback text for the icon. Defaults to `"Warning"`. |
| `classes` | string | No | Classes to add to the warning text. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the warning text. |

### Examples

#### Default

```njk
{{ govukWarningText({
  text: "You can be fined up to £5,000 if you don’t register.",
  iconFallbackText: "Warning"
}) }}
```

Renders as:

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You can be fined up to £5,000 if you don’t register.
  </strong>
</div>
```

#### Multiple lines

```njk
{{ govukWarningText({
  text: "If you are not covered by this License), You must: (a) comply with the terms stated above for the purpose of this license. It explains, for example, the production of a Source form, including but not limited to, the implied warranties or conditions of this License, without any additional file created by such Respondent to you under Sections 2.1 and 2.2 above. Larger Works. You may choose to distribute such a notice and a brief idea of what it does.",
  iconFallbackText: "Warning"
}) }}
```

---
