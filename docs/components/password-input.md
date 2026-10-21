## Password input

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukPasswordInput` · **Import:** `{% from "govuk/components/password-input/macro.njk" import govukPasswordInput %}`

**Design System guidance:** https://design-system.service.gov.uk/components/password-input/

### Guidance

Help users to create and enter passwords.

#### When to use this component

Use this component whenever you need users to create or enter a password.

Before using this component, you should also read the guidance on the [Ask users for passwords pattern](https://design-system.service.gov.uk/patterns/passwords/) and [Creating user accounts pattern](https://design-system.service.gov.uk/patterns/create-accounts/).

#### When not to use this component

Do not use this component to ask for any information other than a password.

Use a [Text input component](https://design-system.service.gov.uk/components/text-input/) to ask for other security information, such as:

- multi-factor authentication codes
- answers to security questions
- other personally identifiable information

Also see the [Confirm a phone number pattern](https://design-system.service.gov.uk/patterns/confirm-a-phone-number/).

#### How it works

This component allows users to enter a password, with an option to show what they’ve entered as plain text.

This allows users to visually check their password before they submit it, which helps them reduce errors and choose passwords that are more unique and secure.

##### Error messages

If the user enters their account details incorrectly, do not reveal whether they got the username or password wrong. Clear any information entered into the password input.

Revealing the source of the error can help fraudsters break into people’s accounts.

See how to handle incorrect login attempts and help users who forget their password in the [Ask users for passwords pattern](https://design-system.service.gov.uk/patterns/passwords/).

##### Showing and hiding passwords

Hide passwords by default until the user chooses to show it using the ‘show’ button. Users might not be in a private space when entering or creating a password, so you should hide passwords by default.

If you do choose to include two or more password inputs on a page, the ‘show’ and ‘hide’ toggles and labels for each password input must be different.

For example, you can label:

- the first input as 'Password' with a toggle of 'show password'
- the second input as 'Re-enter password' with a toggle of 'show re-entered password'

##### Avoid adding a ‘confirm password’ field

It’s not necessary to add a second password field, also known as a ‘confirm password’ field, particularly as this component allows users to show and hide passwords.

See [Research on this component](https://design-system.service.gov.uk/components/password-input/#research-on-this-component) and why we decided having a second field is not helpful for users.

##### Define the input’s type as ‘password’

When the form is submitted, the password input should automatically change its `type` to `password`, if it has not already done so.

This is to prevent browsers from remembering it as a previously-provided value and potentially displaying it as an autofill option on non-password inputs.

##### Use the autocomplete attribute

Use the `autocomplete` attribute on password inputs to help users complete forms faster.

`Autocomplete` indicates to browsers and password managers what kind of password is needed so it can be entered for the user.

Set the `autocomplete` attribute to `new-password` if the user is creating a password. Otherwise, use `current-password`.

Many browsers will autofill password inputs, even when the `autocomplete` attribute is missing or set to `off`.

##### Allow copy and paste

Always allow users to copy and paste in password fields. People may have very good reasons why they want to do this, for example if they’re using a password manager.

###### Copying text from password fields

Users can copy any text from a password field when it’s set on ‘show’ – this is a feature of browser behaviour and cannot be overridden.

This can be useful for users, such as to save a password that the browser has suggested into a separate password manager.

##### Avoid restricting the user's input

See the [Ask users for passwords pattern](https://design-system.service.gov.uk/patterns/passwords/) to see how to help users choose strong passwords.

Support all the characters users may need to enter a password, including numbers and symbols.

If you must place password restrictions on users, such as for technical or security reasons, be clear and consistent.

Any restrictions must be identical wherever the user creates or enters a password. If you change the restrictions over time, you must continue to support existing user passwords or ask them to set a new one.

###### Do not use maxlength to restrict password length

Users will not get any feedback when they’ve reached the `maxlength` and their text input has been truncated. This happens when a user has pasted text from elsewhere or it’s been autofilled by a password manager.

If you must restrict the length of a password, show an error message instead using the [Validation pattern](https://design-system.service.gov.uk/patterns/validation/).

##### Do not spellcheck or autocapitalise the user's input

Some browsers might automatically change what the user is typing when the input’s text is visible, such as correcting spelling or automatically turning on upper case letters at the start of sentences.

You can tell browsers not to correct spellings by setting the `spellcheck` attribute to `false`.

Doing this can [avoid making your service vulnerable to ‘spell-jacking’](https://www.itpro.com/security/vulnerability/370010/what-is-spell-jacking), where security researchers have found some spell checking tools gathering personal identifiable information, even user’s passwords, from password input fields to send to third party services.

You can tell browsers not to autocapitalise values by setting the `autocapitalize` attribute to `off`.

##### Known issues

Some apps and tools will add their own native functionality to show and hide passwords.

These tools include:

- browsers (particularly when suggesting new passwords)
- password managers
- screen readers

We’ve tried to minimise duplicate functionality by hiding other types of ‘show password’ buttons where possible.

There’s also other instances where a password could be ‘shown’ or ‘hidden’ without the use of a button – causing a mismatch with the button label (in other words, the user would see a button to ‘show’ a password that’s already visible).

[We found this mismatch happens in some browsers](https://github.com/alphagov/govuk-design-system/issues/3552#issuecomment-1976660248) when:

- a keyboard shortcut is pressed
- a suggested password is created

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | No | The ID of the input. Defaults to the value of `name`. |
| `name` | string | Yes | The name of the input, which is submitted with the form data. |
| `value` | string | No | Optional initial value of the input. |
| `disabled` | boolean | No | If `true`, input will be disabled. |
| `describedBy` | string | No | One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users. |
| `label` | object | Yes | The label used by the text input component. See [Label](./label.md) for its options. |
| `hint` | object | No | Can be used to add a hint to a text input component. See [Hint](./hint.md) for its options. |
| `errorMessage` | object | No | Can be used to add an error message to the text input component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [Error message](./error-message.md) for its options. |
| `formGroup` | object | No | Additional options for the form group containing the text input component. |
| `formGroup.classes` | string | No | Classes to add to the form group (for example to show error state for the whole group). |
| `formGroup.attributes` | object | No | HTML attributes (for example data attributes) to add to the form group. |
| `formGroup.beforeInput` | object | No | Content to add before the input used by the text input component. |
| `formGroup.beforeInput.text` | string | Yes | Text to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.beforeInput.html` | string | Yes | HTML to add before the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput` | object | No | Content to add after the input used by the text input component. |
| `formGroup.afterInput.text` | string | Yes | Text to add after the input. If `html` is provided, the `text` option will be ignored. |
| `formGroup.afterInput.html` | string | Yes | HTML to add after the input. If `html` is provided, the `text` option will be ignored. |
| `classes` | string | No | Classes to add to the input. |
| `autocomplete` | string | No | Attribute to meet [WCAG success criterion 1.3.5: Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). See the [Autofill section in the HTML standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used. Default is `"current-password"`. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the input. |
| `showPasswordText` | string | No | Button text when the password is hidden. Defaults to `"Show"`. |
| `hidePasswordText` | string | No | Button text when the password is visible. Defaults to `"Hide"`. |
| `showPasswordAriaLabelText` | string | No | Button text exposed to assistive technologies, like screen readers, when the password is hidden. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string | No | Button text exposed to assistive technologies, like screen readers, when the password is visible. Defaults to `"Hide password"`. |
| `passwordShownAnnouncementText` | string | No | Announcement made to screen reader users when their password has become visible in plain text. Defaults to `"Your password is visible"`. |
| `passwordHiddenAnnouncementText` | string | No | Announcement made to screen reader users when their password has been obscured and is not visible. Defaults to `"Your password is hidden"`. |
| `button` | object | No | Optional object allowing customisation of the toggle button. |
| `button.classes` | string | No | Classes to add to the button. |

### Examples

#### Default

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  name: "password"
}) }}
```

Renders as:

```html
<div class="govuk-form-group govuk-password-input" data-module="govuk-password-input">
  <label class="govuk-label" for="password">
    Password
  </label>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>
```

#### With hint text

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it."
  },
  id: "password-input-with-hint-text",
  name: "test-name-2"
}) }}
```

#### With error message

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  hint: {
    text: "It probably has some letters, numbers and maybe even some symbols in it."
  },
  id: "password-input-with-error-message",
  name: "test-name-3",
  errorMessage: {
    text: "Error message goes here"
  }
}) }}
```

#### With label as page heading

```njk
{{ govukPasswordInput({
  label: {
    text: "Password",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "password-input-with-page-heading",
  name: "test-name"
}) }}
```

#### With input width class

```njk
{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  id: "password-input-width",
  name: "password",
  classes: "govuk-input--width-10"
}) }}
```

---
