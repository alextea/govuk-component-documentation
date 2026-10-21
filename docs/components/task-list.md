## Task list

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
| `items[].status.tag` | object | No | Can be used to add a tag to the status of the task within the task list component. See [Tag](./tag.md) for its options. |
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
