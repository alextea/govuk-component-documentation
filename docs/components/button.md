## Button

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
