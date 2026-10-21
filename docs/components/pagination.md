## Pagination

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
