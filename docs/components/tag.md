## Tag

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
