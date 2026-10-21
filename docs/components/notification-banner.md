## Notification banner

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

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
