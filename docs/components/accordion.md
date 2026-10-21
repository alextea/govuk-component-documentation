## Accordion

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
