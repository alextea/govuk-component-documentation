## Cookie banner

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukCookieBanner` · **Import:** `{% from "govuk/components/cookie-banner/macro.njk" import govukCookieBanner %}`

**Design System guidance:** https://design-system.service.gov.uk/components/cookie-banner/

### Guidance

Allow users to accept or reject cookies which are not essential to making your service work.

#### When to use this component

Use this component if your service sets any cookies on a user’s device.

Remember, you must:

- tell users about the cookies your service sets on their device
- let users accept or reject any cookies that are not essential to providing your service

The term ‘non-essential cookies’ includes:

- HTML5 local storage
- service workers
- any other technologies that store files on the user’s device

This cookie banner and the [Cookies page pattern](https://design-system.service.gov.uk/patterns/cookies-page/) are based on the approach to getting cookie consent used on the GOV.UK website.

This component page shows several options for using a cookie banner, based on the types of cookies you’re using in the service. We also tell you what to cover in your cookie banner, with some text examples.

##### Before you start

[Audit and categorise your cookies](https://design-system.service.gov.uk/patterns/cookies-page/#auditing-and-categorising-your-cookies) as shown in the cookies page pattern to help you choose the best option for your service.

You must not take the information on this page as legal advice. Your organisation is responsible and accountable for what they do to comply with data protection legislation, such as:

- Privacy and Electronic Communications Regulations (PECR)
- General Data Protection Regulation (GDPR)

Check with your organisation's privacy expert to see how data protection legislation affects your website and service.

#### How it works

Show the cookie banner every time the user accesses your service until they either:

- accept or reject cookies using the buttons in the cookie banner
- save their cookie preferences on [your service’s Cookies page](https://design-system.service.gov.uk/patterns/cookies-page/)

Once the user has accepted or rejected cookies, the cookie banner should:

- hide the cookie banner message
- show a confirmation message – and a 'hide' button to let the user close the banner
- set a cookie to save the user’s preferences for 1 year

Make sure the cookie banner does not:

- show when the user visits again, once their preferences have been saved
- set any non-essential cookies unless the user accepted them on a previous visit

Position the cookie banner after the opening `<body>` tag and before the ’skip to main content‘ link. If you're using the Nunjucks page template, use the `bodyStart` block.

Do not make the Cookie banner component ‘sticky’ to the top of the page by using `position: fixed` or any other method. This is to make sure it does not cover or obscure any content which has a focus applied. This is to comply with [WCAG 2.2 success criterion 2.4.11 Focus not obscured (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

##### Option 1: If you’re only using essential cookies

You can choose not to have a cookie banner if the service only sets essential or 'strictly necessary' cookies, as these do not need user consent.

However, you must tell users that you set essential cookies. You can do this with a cookies page – link to this page in the footer.

##### Option 2: If you set non-essential cookies for users (with or without JavaScript)

You can choose this option if your service sets non-essential cookies on the server – your service may also set non-essential cookies on the client.

To get consent from the user, display the cookie banner inside a form that lets them submit their choice to accept or reject cookies.

All users will be able to see the banner as this approach does not rely on JavaScript.

Here's an example of a cookie banner inside a form:

Once the user has accepted or rejected cookies and set their cookie preferences, reload the page to show a confirmation message.

Here's an example of a confirmation message inside a form:

###### Show the same message to all users

In the cookie banner, tell the user about all the cookies you’re using in the service – whether they've enabled JavaScript or not. This way, you will not need to ask the user to give their consent again on their next visit.

###### Help users keep their place using progressive enhancement

If the user is entering information into a form as part of the service, they might lose their place when they submit their choice to accept or reject cookies.

To help users running JavaScript on their device, you can write some JavaScript code to let them submit their choice and prevent the page from reloading.

Include all possible messages that the user could see in the cookie banner when the page loads. Hide these with the `hidden` HTML attribute where needed.

Here's an example of a progressively enhanced cookie banner that includes all possible messages which are hidden using HTML – the cookie banner message is shown using JavaScript to remove the `hidden` attribute:

Here's the same example of a progressively enhanced cookie banner, with the confirmation message shown instead:

##### Option 3: If you set non-essential cookies, but only using client-side JavaScript

You can choose to make your banner only work with JavaScript if your service only needs to set non-essential cookies on the client.

When the page loads, the `hidden` html attribute hides the component, as well as all the cookie banner messages it contains, which the user might otherwise see.

###### Show the cookie banner only to users that have enabled JavaScript

Use JavaScript to show cookie banner messages to users that have not accepted or rejected cookies by removing the `hidden` attribute as needed.

Write your own JavaScript code so that when the user accepts or rejects cookies, the cookie banner will:

- hide the cookie message by adding the hidden attribute
- show a confirmation message by removing its hidden attribute
- give the confirmation message the `tabindex="-1"` and `role="alert"` attributes – this will allow the element to be focused so assistive technology can read the message
- shift focus to the confirmation message

Here’s an example:

###### When the user has accepted cookies

Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the `hidden` attribute.

###### When the user has rejected cookies

#### What to cover in your cookie banner

Include the name of the service in the banner heading to help users understand that the cookies you’re talking about are different from the ones set by the main GOV.UK platform.

You’ll need to change the example cookie banner text if your service:

- allows third parties to set cookies (tell the user that both your organisation and other organisations will be setting cookies)
- uses cookies for reasons other than collecting analytics information or remembering the user’s settings

Keep the text as short as possible while making sure it’s an accurate description of how you use cookies. For example, if you use more than one ‘functional’ cookie and there’s not enough space to mention what each of them does, you could ask for permission to set cookies so ‘you can use as many of the service’s features as possible’.

[See the Cookies page pattern for more advice on writing about cookies](https://design-system.service.gov.uk/patterns/cookies-page/).

##### If you’re using essential cookies and analytics cookies

You can use this example text for a service which sets essential and analytics cookies. Analytics cookies are those set by your organisation to collect information about how people are using your digital service.

##### If you’re using more than one type of non-essential cookie

You can use this example text for a service that set:

- essential cookies
- analytics cookies
- functional cookies to remember the user’s settings but are not essential

#### Creating a cookies page

You’ll need a [Cookies page in your service](https://design-system.service.gov.uk/patterns/cookies-page/) as well as a cookie banner.

#### Brand refresh of the Cookie banner component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `ariaLabel` | string | No | The text for the `aria-label` which labels the cookie banner region. This region applies to all messages that the cookie banner includes. For example, the cookie message and the confirmation message. Defaults to `"Cookie banner"`. |
| `hidden` | boolean | No | Defaults to `false`. If you set this option to `true`, the whole cookie banner is hidden, including all messages within the banner. You can use `hidden` for client-side implementations where the cookie banner HTML is present, but hidden until the cookie banner is shown using JavaScript. |
| `classes` | string | No | The additional classes that you want to add to the cookie banner. |
| `attributes` | object | No | The additional attributes that you want to add to the cookie banner. For example, data attributes. |
| `messages` | array | Yes | The different messages you can pass into the cookie banner. For example, the cookie message and the confirmation message. |
| `messages[].headingText` | string | No | The heading text that displays in the message. You can use any string with this option. If you set `headingHtml`, `headingText` is ignored. |
| `messages[].headingHtml` | string | No | The heading HTML to use within the message. You can use any string with this option. If you set `headingHtml`, `headingText` is ignored. If you are not passing HTML, use `headingText`. |
| `messages[].text` | string | Yes | The text for the main content within the message. You can use any string with this option. If you set `html`, `text` is not required and is ignored. |
| `messages[].html` | string | Yes | The HTML for the main content within the message. You can use any string with this option. If you set `html`, `text` is not required and is ignored. If you are not passing HTML, use `text`. |
| `messages[].actions` | array | No | The buttons and links that you want to display in the message. `actions` defaults to `"button"` unless you set `href`, which renders the action as a link. |
| `messages[].actions[].text` | string | Yes | The button or link text. |
| `messages[].actions[].type` | string | No | The type of button – `"button"` or `"submit"`. If `href` is provided, set `type` to `"button"` render a link styled as a button. |
| `messages[].actions[].href` | string | No | The `href` for a link. Set `type` to `"button"` and set `href` to render a link styled as a button. |
| `messages[].actions[].name` | string | No | The name attribute for the button. Does not apply if you set `href`, which makes a link. |
| `messages[].actions[].value` | string | No | The value attribute for the button. Does not apply if you set `href`, which makes a link. |
| `messages[].actions[].classes` | string | No | The additional classes that you want to add to the button or link. |
| `messages[].actions[].attributes` | object | No | The additional attributes that you want to add to the button or link. For example, data attributes. |
| `messages[].hidden` | boolean | No | Defaults to `false`. If you set it to `true`, the message is hidden. You can use `hidden` for client-side implementations where the confirmation message HTML is present, but hidden on the page. |
| `messages[].role` | string | No | Set `role` to `"alert"` on confirmation messages to allow assistive tech to automatically read the message. You will also need to move focus to the confirmation message using JavaScript you have written yourself. |
| `messages[].classes` | string | No | The additional classes that you want to add to the message. |
| `messages[].attributes` | object | No | The additional attributes that you want to add to the message. For example, data attributes. |

### Examples

#### Default

```njk
{{ govukCookieBanner({
  messages: [
    {
      headingText: "Cookies on this government service",
      text: "We use analytics cookies to help understand how users use our service.",
      actions: [
        {
          text: "Accept analytics cookies",
          type: "submit",
          name: "cookies",
          value: "accept"
        },
        {
          text: "Reject analytics cookies",
          type: "submit",
          name: "cookies",
          value: "reject"
        },
        {
          text: "View cookie preferences",
          href: "/cookie-preferences"
        }
      ]
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookie banner">
  <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">
          Cookies on this government service
        </h2>
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">We use analytics cookies to help understand how users use our service.</p>
        </div>
      </div>
    </div>

    <div class="govuk-button-group">
      <button type="submit" value="accept" name="cookies" class="govuk-button" data-module="govuk-button">
        Accept analytics cookies
      </button>
      <button type="submit" value="reject" name="cookies" class="govuk-button" data-module="govuk-button">
        Reject analytics cookies
      </button>
      <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
    </div>

  </div>
</div>
```

#### Accepted confirmation banner

```njk
{{ govukCookieBanner({
  messages: [
    {
      text: "Your cookie preferences have been saved. You have accepted cookies.",
      role: "alert",
      actions: [
        {
          text: "Hide cookie message",
          type: "button"
        }
      ]
    }
  ]
}) }}
```

#### Rejected confirmation banner

```njk
{{ govukCookieBanner({
  messages: [
    {
      text: "Your cookie preferences have been saved. You have rejected cookies.",
      role: "alert",
      actions: [
        {
          text: "Hide cookie message",
          type: "button"
        }
      ]
    }
  ]
}) }}
```

#### With html

```njk
{{ govukCookieBanner({
  messages: [
    {
      headingHtml: "Cookies on <span>my service</span>",
      html: "<p class=\"govuk-body\">We use cookies in <span>our service</span>.</p>\n<p class=\"govuk-body\">We’d like to use analytics cookies so we can understand how you use the Design System and make improvements.</p>\n",
      actions: [
        {
          text: "Accept analytics cookies",
          type: "submit",
          name: "cookies",
          value: "accept"
        },
        {
          text: "Reject analytics cookies",
          type: "submit",
          name: "cookies",
          value: "reject"
        },
        {
          text: "View cookie preferences",
          href: "/cookie-preferences"
        }
      ]
    }
  ]
}) }}
```

---
