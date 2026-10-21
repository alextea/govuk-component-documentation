## Table

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
