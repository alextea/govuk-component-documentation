## Exit this page

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
