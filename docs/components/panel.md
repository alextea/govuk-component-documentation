## Panel

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
