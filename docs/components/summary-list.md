## Summary list

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
