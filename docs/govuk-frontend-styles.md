# GOV.UK Frontend styles reference

> Generated from govuk-frontend v6.6.0. Do not edit by hand. Regenerate with `npm run reference`.
>
> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

## How to use this file (for coding agents)

- Find the topic in the table of contents, then read only that section. The line numbers point at its `##` heading.
- Colour values, the type scale, the spacing scale and every `govuk-!-` class are read from GOV.UK Frontend's compiled CSS, so they match what the classes really do.
- Use component options and the typography classes first. Only reach for `govuk-!-` override classes to adjust spacing, width or font size where nothing else fits.
- Never hard-code hex colours. Use functional colours, through `govuk-functional-colour()` in Sass or `var(--govuk-*-colour)` in CSS.

## Table of contents

| Topic | Line |
| --- | --- |
| [Colour](#colour) | 33 |
| [Font override classes](#font-override-classes) | 162 |
| [Headings](#headings) | 256 |
| [Images](#images) | 277 |
| [Layout](#layout) | 502 |
| [Links](#links) | 632 |
| [Lists](#lists) | 676 |
| [Page template](#page-template) | 699 |
| [Paragraphs](#paragraphs) | 1004 |
| [Section break](#section-break) | 1025 |
| [Spacing](#spacing) | 1036 |
| [Type scale](#type-scale) | 1273 |
| [Typeface](#typeface) | 1351 |

---
## Colour

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/colour/

Always use the GOV.UK colour palette.

### Colour contrast

You must make sure that the contrast ratio of text and interactive elements in your service meets [Web Content Accessibility Guidelines (WCAG 2.2) success criterion 1.4.3 Contrast (minimum) level AA](https://www.w3.org/TR/WCAG22/#contrast-minimum).

The WCAG 2.2 criterion for Contrast (minimum) is the same as WCAG 2.1.

### Functional colours

The GOV.UK Design System has a set of functional colours for essential page elements. These help apply colours across the Design System in a way that makes interactions predictable and consistent to users.

#### Assign colours using `govuk-functional-colour`

To access these colours, use the `govuk-functional-colour` Sass function. The colours available using this function are based on specific purposes and contexts, so that function will automatically assign appropriate colours.

Do not copy the specific hexadecimal (hex) colour values. For example, use `govuk-functional-colour("brand")` rather than `#1d70b8`.

This means that your service will always use the most recent colour palette whenever you update.

Only use the variables in the context they're designed for. In all other cases, you should reference the [GOV.UK web palette](https://design-system.service.gov.uk/styles/colour/#govuk-web-palette) directly. For example, if you wanted to use red, you should use `govuk-colour("red")` rather than `govuk-functional-colour("error")`.

In Sass, use `govuk-functional-colour("<name>")`. In plain CSS, use the custom property, which GOV.UK Frontend defines on `:root`. Do not copy the hex values into your code.

| Name | CSS custom property | Palette colour | Hex | Legacy Sass variable | Notes |
| --- | --- | --- | --- | --- | --- |
| `brand` | `var(--govuk-brand-colour)` | `blue` | `#1d70b8` | `$govuk-brand-colour` |  |
| `text` | `var(--govuk-text-colour)` | `black` | `#0b0c0c` | `$govuk-text-colour` |  |
| `inverse-text` | `var(--govuk-inverse-text-colour)` | `white` | `#fff` |  |  |
| `template-background` | `var(--govuk-template-background-colour)` | `blue` `tint-95` | `#f4f8fb` | `$govuk-template-background-colour` | The background colour of the template. This is intended to be the same as `surface-background` for the purposes of making the Footer and Cookie banner components merge seamlessly with the template. |
| `body-background` | `var(--govuk-body-background-colour)` | `white` | `#fff` | `$govuk-body-background-colour` |  |
| `secondary-text` | `var(--govuk-secondary-text-colour)` | `black` `tint-25` | `#484949` | `$govuk-secondary-text-colour` | Used in for example 'muted' text and help text. |
| `focus` | `var(--govuk-focus-colour)` | `yellow` | `#fd0` | `$govuk-focus-colour` | Used for outline (and background, where appropriate) when interactive elements (links, form controls) have keyboard focus. |
| `focus-text` | `var(--govuk-focus-text-colour)` | `black` | `#0b0c0c` | `$govuk-focus-text-colour` | Ensure that the contrast between the text and background colour passes WCAG Level AA contrast requirements. |
| `error` | `var(--govuk-error-colour)` | `red` | `#ca3535` | `$govuk-error-colour` | Used to highlight error messages and form controls in an error state |
| `success` | `var(--govuk-success-colour)` | `green` | `#0f7a52` | `$govuk-success-colour` | Used to highlight success messages and banners |
| `border` | `var(--govuk-border-colour)` | `black` `tint-80` | `#cecece` | `$govuk-border-colour` | Used in for example borders, separators, rules and keylines. |
| `input-border` | `var(--govuk-input-border-colour)` | `black` | `#0b0c0c` | `$govuk-input-border-colour` | Used for form inputs and controls |
| `hover` | `var(--govuk-hover-colour)` | `black` `tint-80` | `#cecece` | `$govuk-hover-colour` | Used for hover states on form controls |
| `link` | `var(--govuk-link-colour)` | `blue` `shade-10` | `#1a65a6` | `$govuk-link-colour` | Standard links (on white) |
| `link-visited` | `var(--govuk-link-visited-colour)` | `purple` | `#54319f` | `$govuk-link-visited-colour` |  |
| `link-hover` | `var(--govuk-link-hover-colour)` | `blue` `shade-50` | `#0f385c` | `$govuk-link-hover-colour` |  |
| `link-active` | `var(--govuk-link-active-colour)` | `black` | `#0b0c0c` | `$govuk-link-active-colour` |  |
| `surface-background` | `var(--govuk-surface-background-colour)` | `blue` `tint-95` | `#f4f8fb` |  | 'Surfaces' are our name for components that have different colour palettes to typical page content. This is the generic surface. |
| `surface-text` | `var(--govuk-surface-text-colour)` | `black` | `#0b0c0c` |  |  |
| `surface-border` | `var(--govuk-surface-border-colour)` | `blue` `tint-50` | `#8eb8dc` |  |  |

### GOV.UK web palette

The GOV.UK web palette works as part of the [GOV.UK brand guidelines](https://www.gov.uk/government/publications/govuk-brand-guidelines). Use these colours for supporting elements in your service like illustrations, or in custom components where appropriate.

The web palette is organised into colour groups. Each colour group includes:

- a 'primary' variant
- tints – lighter variants of each colour
- shades – darker variants of each colour

#### Add colours using `govuk-colour`

You can access the full web palette, and all its available colours, using the `govuk-colour` function.

By default, the function will return the ‘primary’ variant of each colour. For example: `govuk-colour("blue")` will return ‘Primary blue’ ` #1d70b8`.

Access tints and shades of colour groups using the ` $variant` option.

For example:

- `govuk-colour("red", $variant: "tint-25")` will return ‘Red tint 25%’, which is a variant of red with a tint of 25%
- ` govuk-colour("blue", $variant: "shade-50")` will return ‘Blue shade 50%’, which is a variant of blue with a shade of 50%

Most colours include these variants:

- tints at 25% (`tint-25`), 50% (`tint-50`), 80% (`tint-80`) and 95% (`tint-95`)
- shades at 25% (`shade-25`) and 50% (`shade-50`)

Black includes a ‘primary’ black, with tints to show greys. White has no variants.

Use the palette for supporting elements like illustrations, or custom components where no functional colour fits. In Sass, use `govuk-colour("<colour>")` for the primary variant, or `govuk-colour("<colour>", $variant: "<variant>")`, for example `govuk-colour("blue", $variant: "tint-25")`.

| Colour | `primary` | `tint-25` | `tint-50` | `tint-80` | `tint-95` | `shade-25` | `shade-50` | `shade-10` | `accent` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `blue` | `#1d70b8` | `#5694ca` | `#8eb8dc` | `#d2e2f1` | `#f4f8fb` | `#16548a` | `#0f385c` | `#1a65a6` |  |
| `green` | `#0f7a52` | `#4b9b7d` | `#87bca8` | `#cfe4dc` | `#f3f8f6` | `#0b5c3e` | `#083d29` |  |  |
| `teal` | `#158187` | `#50a1a5` | `#8ac0c3` | `#d0e6e7` | `#f3f9f9` | `#106165` | `#0b4144` |  | `#00ffe0` |
| `purple` | `#54319f` | `#7f65b7` | `#aa98cf` | `#ddd6ec` | `#f6f5fa` | `#3f2577` | `#2a1950` |  |  |
| `magenta` | `#ca357c` | `#d7689d` | `#e59abe` | `#f4d7e5` | `#fcf5f8` | `#98285d` | `#651b3e` |  |  |
| `red` | `#ca3535` | `#d76868` | `#e59a9a` | `#f4d7d7` | `#fcf5f5` | `#982828` | `#651b1b` |  |  |
| `orange` | `#f47738` | `#f7996a` | `#fabb9c` | `#fde4d7` | `#fef8f5` | `#b7592a` | `#7a3c1c` |  |  |
| `yellow` | `#ffdd00` | `#ffe640` | `#ffee80` | `#fff8cc` | `#fffdf2` | `#bfa600` | `#806f00` |  |  |
| `brown` | `#99704a` | `#b39477` | `#ccb8a5` |  | `#faf8f6` |  |  |  |  |
| `black` | `#0b0c0c` | `#484949` | `#858686` | `#cecece` | `#f3f3f3` |  |  |  |  |
| `white` | `#ffffff` |  |  |  |  |  |  |  |  |

### Organisation colours

You can find brand colours for government departments and organisations in the [\_colours-organisations file in GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/blob/main/packages/govuk-frontend/src/govuk/settings/_colours-organisations.scss).

This file is maintained on a best effort basis and is assembled from a number of sources, including:

- [UK Government brand resource centre](https://brand.gov.uk/)
- Cabinet Office branding team
- [Design102](https://design102.co.uk/), the government's in-house design studio
- Communications teams from individual organisations

### Colour names from earlier versions

GOV.UK Frontend v5 and earlier used these colour names. If you're updating older code, replace them with the palette colour shown.

| Old name | Use instead |
| --- | --- |
| `light-pink` | `govuk-colour("magenta", $variant: "tint-50")` |
| `pink` | `govuk-colour("magenta")` |
| `light-green` | `govuk-colour("green", $variant: "tint-25")` |
| `turquoise` | `govuk-colour("teal")` |
| `light-blue` | `govuk-colour("blue", $variant: "tint-25")` |
| `dark-blue` | `govuk-colour("blue", $variant: "shade-50")` |
| `light-purple` | `govuk-colour("purple", $variant: "tint-25")` |
| `bright-purple` | `govuk-colour("magenta", $variant: "shade-25")` |
| `dark-grey` | `govuk-colour("black", $variant: "tint-25")` |
| `mid-grey` | `govuk-colour("black", $variant: "tint-80")` |
| `light-grey` | `govuk-colour("black", $variant: "tint-95")` |

---
## Font override classes

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/font-override-classes/

Use font override classes sparingly to change the default styling of text on a page.

You can use the font override classes in your HTML or reference the ([`govuk-font` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font) or [`govuk-font-size` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font-size)) in your own components.

### Text alignment

If you need to align text differently to how it usually displays on the page, you can use text alignment override classes.

Use:

- `govuk-!-text-align-left` to align text to the left
- `govuk-!-text-align-right` to align text to the right
- `govuk-!-text-align-centre` to align text to the centre

As the most commonly used languages on GOV.UK are written left-to-right, you should usually left-align body copy text. Right-aligned body copy text can be hard for users to find and read when they magnify their screen. Use right-aligned body copy text if you are translating content into a language which is written right-to-left.

Do not 'justify' blocks of body copy text so it's aligned to both the left and right margins. Doing this creates wider spaces between words, which can make the text hard to read.

| Class | CSS |
| --- | --- |
| `govuk-!-text-align-left` | `text-align: left` |
| `govuk-!-text-align-centre` | `text-align: center` |
| `govuk-!-text-align-right` | `text-align: right` |

### Font size

The full GOV.UK typography scale goes from 16px up to 80px on large screens. You can add these font size override classes to any other typographic class or element and they will change the font size.

| Class | Small screens | Large screens |
| --- | --- | --- |
| `govuk-!-font-size-80` | 53px / 55px | 80px / 80px |
| `govuk-!-font-size-48` | 32px / 35px | 48px / 50px |
| `govuk-!-font-size-36` | 27px / 30px | 36px / 40px |
| `govuk-!-font-size-27` | 21px / 25px | 27px / 30px |
| `govuk-!-font-size-24` | 21px / 25px | 24px / 30px |
| `govuk-!-font-size-19` | 19px / 25px | 19px / 25px |
| `govuk-!-font-size-16` | 16px / 20px | 16px / 20px |

### Font weight

As with the font size, you can add a font weight override class to any other typographic class or element to change the font weight to regular or bold weight.

#### Bold text

Use bold text sparingly - using too much will make it difficult for users to know which parts of your content needs their attention the most.

You can use bold to highlight critical information and emphasise particular words in a transaction.

For example, "Your reference number is **ABC12345678**. Use this to track your application. Updates will be sent to **name<i></i>@example.com**"

| Class | CSS |
| --- | --- |
| `govuk-!-font-weight-regular` | `font-weight: 400` |
| `govuk-!-font-weight-bold` | `font-weight: 700` |

### Tabular numbers

Tabular numbers are an alternative style where each digit is given equal width.

Using tabular numbers can make numbers intended for comparison to one another easier to read. For example, numbers in data tables, or reference numbers where the additional spacing makes it easier to read each digit individually.

You can also use tabular numbers for numbers that dynamically update, such as in a counter. The equal width of each digit prevents the numbers from visually moving towards and away from each other as the counter updates.

Activate tabular numbers by using `govuk-!-font-tabular-numbers`.

| Class | CSS |
| --- | --- |
| `govuk-!-font-tabular-numbers` | `font-variant-numeric: tabular-nums` |

### Breaking up long words

You might need to show long words that cannot be changed or broken into smaller parts, such as:

- technical or scientific terms
- long email addresses
- words from other languages

Long words can create issues in constrained spaces such as mobile device screens and data tables. They can 'break out' of the layout, resulting in a broken visual appearance and requiring users to scroll horizontally to view all of your content.

You can help to reduce these issues by surrounding content likely to 'break out' with `govuk-!-text-break-word`.

This class forcibly splits long words onto multiple lines when they become longer than the width of the container. It'll make the split exactly where the word would otherwise 'break out', which might make compound words more difficult to read. You can control where words can be split by inserting [the `wbr` HTML tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/wbr) into your content.

| Class | CSS |
| --- | --- |
| `govuk-!-text-break-word` | `word-wrap: break-word; overflow-wrap: break-word` |

---
## Headings

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/headings/

Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page. Apply a heading class, such as `govuk-heading-l`, to style them visually. Style headings consistently to create a clear content structure throughout your service.

For [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/), or pages with long headings, follow the usual hierarchy of heading levels and styles associated with them. For example, `govuk-heading-l` for an `<h1>`, followed by `govuk-heading-m` for an `<h2>` and so on. In rare cases, you might want to alter how you use the headings hierarchy to achieve a better visual balance. An example of this is in [the design system's notification banner](https://design-system.service.gov.uk/components/notification-banner/success/) which uses heading levels in a different order to emphasise the most important information. If you do change the heading hierarchy in a similar way, it needs to go through accessibility testing before use.

Write all headings in sentence case.

If your page has lots of long form content, start with `govuk-heading-xl` for an `<h1>`, `govuk-heading-l` for an `<h2>`, and so on.

### Headings with captions

Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading with a caption above it.

If the caption should be considered part of the page heading, you can also nest the caption within the `<h1>`.

---
## Images

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/images/

Avoid using images for unnecessary decoration. Only use images if there’s a real user need.

Make sure any information contained in an image can be understood by someone who cannot see it. Also consider partially-sighted users with visual impairments and the assistive technologies they might use.

This guidance is for government teams that build online services. To learn how to use images as a GOV.UK content publisher, go to [GOV.UK content guidance for images](https://guidance.publishing.service.gov.uk/formatting-content/images/).

### Using images to give information

Services usually work best without relying on images. Focus on writing clear, simple content for your service first.

Adding images can sometimes help users better understand instructions. However, images should only be visual aids – written content must contain all the information the user needs to complete the service.

If you choose to add an image to your service, you’ll need to carefully decide if the image needs to be described with [alternative text (alt text)](https://design-system.service.gov.uk/styles/images/#alt-text).

### Photography

Use photography when it’s important to show a lifelike representation of something. For example, showing a preview of a document a user has uploaded.

Do not use photography to represent abstract concepts, such as to convey an impression or emotion to the user. Avoid using generic stock photography in your service.

### Illustrations

Use illustrations to show a simplified image of something complex. For example:

- to demonstrate a physical interaction, like scanning a passport
- to help users find something on a document, like a reference number

#### Creating illustrations

Use as few visual elements as possible to communicate your message.

Start by following the [guidance on colour, and use the GOV.UK colour palette](https://design-system.service.gov.uk/styles/colour/).

If you need more colours, try to use tints of the colour palette.

Use flat blocks of colour. Avoid using shadows or gradients, except when needed to show a distinctive feature of an object or to communicate layering or depth.

If you're creating multiple illustrations for a service, use consistent colours, line widths and border radiuses across them all.

Avoid depicting people in illustrations. If you need to show people, think carefully about how you represent the people that use your service – do not only show one kind of person.

For example, only depicting people of a particular age, gender or ethnicity can exclude people and reinforce negative stereotypes.

### Icons

Avoid using icons in most cases. People can understand a single icon to mean different things, so they can be confusing.

Icons can be more useful in case working systems, where users are familiar with the interface and return to it frequently. In this context, they can help users to scan pages more quickly. In most cases it’s still helpful to include a visible text label alongside any icons.

Do not use a single icon to represent more than one thing. For example, the search icon (magnifying glass) should only be used for search functionality, and not also for screen magnification.

### Avoid images that contain text

Generally, you should avoid using images that contain any sort of text. Use written content or other alternatives wherever possible.

Any text inside an image will be difficult to read, especially for users that need to read text using:

- screen readers
- copy and paste
- highlight
- resize
- recolour

Remember to avoid using images for unnecessary decoration, even if it’s an 'image of text'.

#### Show text as written content, instead of images

It’s usually unnecessary to use an image to merely show some text (known as an ‘image of text’).

Give the information as written content instead, or use other alternatives.

Examples of unnecessary ‘images of text’ include images that show:

- the contents of a post from social media
- an excerpt from a document
- key facts from a slide presentation

If you do choose to use the image anyway, include written content nearby that conveys the same meaning and context.

[Find out more about ‘images of text’](https://www.w3.org/WAI/tutorials/images/textual/#styled-text-decorative-effect) on the Web Accessibility Initiative website.

#### If text is not the focus of an image

It’s okay to use an image that just happens to have text in it.

So if you choose to use an image to visually show something, and there’s text in it that’s not meant to be the focus of attention, it’s fine to leave the text in the image.

Examples of images that just happen to have text:

- a photo of a library with book covers and signs in the background
- a collage to promote UK tourism that includes the Brighton Palace Pier sign
- an illustration of a Manchester street with store signs in the background

Write alt text that explains the meaning and context of the visual. Where the visual is essential to the user journey, include written content nearby that conveys the same meaning and context.

However, make sure the image actually benefits the user and is not just for decoration.

#### Essential text in images

There are some rare cases where you can use an image that contains text.

Text in an image is considered essential if:

- the text provides an intentional meaning and context
- removing the text would cause the image to lose that intended meaning and context

In other words, you cannot give this same information as written content or any other way.

Essential text must be relevant to the information you need to give.

Examples of essential text in images might be:

- a portion of the Magna Carta, showing its handwriting style
- showing what a store’s sign looks like on their shopfront

There can also be essential text when the text needs to be shown in a specific way to communicate an identity.

Examples of these might be:

- text within an organisation’s logo (known as logotype)
- a signature, signed in a distinctive way

Read more about essential text in [WCAG 2.2 success criterion 1.4.5 Images of text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html).

##### What to do with essential text in images

You’ll need to decide whether an image is necessary, and whether any text within it is essential, to the information you want to give.

You should also consider some of the other alternatives suggested on this page.

If you do choose to use an image with essential text, you should add alt text to convey the meaning and context of the image.

Be sure to follow the guidance on this page about writing good alt text.

#### Possible alternatives

If it's not practical to avoid using an image that contains text (and replace it with written content), there’s a few other ways to replace it.

You should consider these options even if the text in an image is essential, as it will make your information easier to read for users that customise the way they look at web pages.

In any case, make sure that the contrast ratio of text colour and all portions of the image that overlap the text [meets WCAG 2.2 success criterion 1.4.3 Contrast (minimum) level AA](https://www.w3.org/TR/WCAG22/#contrast-minimum).

##### Show HTML text over an image

You could place HTML text so that it shows over the image.

You’ll still need to make sure there is enough contrast, between the text colour and all portions of the image that overlap the text, on all screen sizes and all zoom levels.

##### Use a vector graphic image file

You could create the image and text as a vector graphic, such as an SVG file. This ensures that any text stays crisp and readable when the user zooms in. Text within other rasterised image formats such as PNG, JPEG can become pixellated or unreadable when zoomed in.

Remember to follow the guidance on contrast ratios.

#### Text in charts, diagrams and complex images

It takes effort to make charts, diagrams and complex images accessible. Consider whether you can give the same information well enough using a table or other text-based option.

In general, you must write short alt text that explains the meaning and context of the image. You must also write any further, and more complex, information contained in the image in a longer text description.

Make sure the long description (or a link or button that shows it) is visible to sighted users.

Some charts and diagrams can be built in an accessible way using HTML, CSS, JavaScript or SVG. Accessible charts and diagrams must make the data within the chart available as text.

### Alt text

Alternative text, or alt text, is read out by screen readers and displayed if an image does not load or if images have been switched off.

All images should include the alt attribute, even if it’s left empty without alt text (`alt=""`).

#### When to use alt text

Only add alt text when you need to describe visual details you cannot practically include in the written content.

There are some cases when an empty `alt=""` attribute is more appropriate. These include:

- a decorative image that does not include important content
- an icon with a text label, where the alt text would repeat the text label
- an image used in a link, where the image is not needed to understand the link

To decide if an image needs alt text, see the [Web Accessibility Initiative alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).

#### Writing good alt text

Good alt text:

- tells people what information the image provides
- describes the content and function of the image
- is specific, meaningful and concise

Use normal punctuation, like commas and full stops, so the text is easy to read and understand.

Generally, aim for no more than 2 sentences of alt text.

Do not write alt text that:

- includes the name of the photographer or person who created the image
- starts with ‘Image of’, ‘Graphic of’ or common information that would repeat across every image
- repeats information from the page
- includes extra information not in the image

### Research on images

In March 2023, we updated this page to help teams make decisions on when to use images in their services.

In particular, we added a section on how to use images and ensure they’re as accessible as possible – giving advice to teams on how to meet or surpass relevant WCAG AA guidelines, in line with the [GOV.UK Design System accessibility strategy](https://design-system.service.gov.uk/accessibility/accessibility-strategy/).

To help us validate that this guidance is useful and practical for service teams across government, we want to hear from you.

We’re looking for feedback about any of these areas:

- how you use images to give information to users
- examples of the types of images used in services
- how you create and choose images to use in your service
- how you implement images (for frontend performance)

Give us your feedback and examples by [posting a comment on the ‘Images’ discussion on GitHub](https://github.com/alphagov/govuk-design-system/discussions/6013).

---
## Layout

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/layout/

### Screen size

Design for small screens first, starting with a single-column layout.

For most types of page, we recommend using either a 'two-thirds' or a 'two-thirds and one-third' layout. That stops lines of text getting so long that the page becomes difficult to read on desktop devices. This would usually mean no more than 75 characters per line.

Never make assumptions about what devices people are using. Design for different screen sizes rather than specific devices.

The default maximum page width is 1020px, but you can make it wider if your content requires it.

### Common layouts

#### Two-thirds

#### Two-thirds and one-third

#### Row 1: Two-thirds <br>Row 2: Two-thirds and one-third

### Setting up page wrappers

If you want to build your layout from scratch, or understand what each of the parts are responsible for, here’s an explanation of how the page wrappers work.

#### Limiting width of content

To set up your layout you will need to create 2 wrappers. The first should have the class `govuk-width-container`, which sets the maximum width of the content but does not add any vertical margin or padding.

If your design requires them, you should place components such as the [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/), [Back link component](https://design-system.service.gov.uk/components/back-link/) and [Phase banner component](https://design-system.service.gov.uk/components/phase-banner/) inside this wrapper so that they sit directly underneath the header.

#### Add vertical space

Within `govuk-width-container` you should add the `govuk-main-wrapper` class to your `<main>` element. This adds responsive padding to the top and bottom of the page and will be the container for your main content.

If you’re not using the [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/) or [Back link component](https://design-system.service.gov.uk/components/back-link/) in your design, add the correct amount of vertical padding above the content by adding one of the following to your `<main>` element:

- the `govuk-main-wrapper--auto-spacing` class
- the `govuk-main-wrapper--l` class - if `govuk-main-wrapper--auto-spacing` does not work for your service

#### Exploded view of page wrappers

#### Exploded view of page wrappers without a back link, breadcrumbs or phase banner

### Using the grid system

Use the grid system to lay out the content on your service’s pages.

Most GOV.UK pages follow a 'two-thirds and one-third' layout, but the grid system allows for a number of additional combinations when necessary.

Your main content should always be in a two-thirds column even if you’re not using a corresponding one-third column for secondary content.

#### Understanding the grid system

The grid is structured with a `govuk-grid-row` wrapper which acts as a row to contain your grid columns.

You can add columns inside this wrapper to create your layout. To define your columns add the class beginning with `govuk-grid-column-` to a new container followed by the width, for example `govuk-grid-column-one-third` to apply your desired width.

The available widths are:

#### Full width

#### One-half

#### One-third

#### Two-thirds

#### One-quarter

#### Three-quarters

#### Example combinations

#### Desktop specific grid classes

To specify a width at the desktop breakpoint you can use the desktop specific grid classes. For example `govuk-grid-column-two-thirds-from-desktop` will set your column width to be two-thirds width at the desktop breakpoint only.

The desktop specific classes also allow you to set the width of the tablet breakpoint by using them in combination with the standard grid classes. For example using `govuk-grid-column-one-half` and `govuk-grid-column-two-thirds-from-desktop` together will mean the column will be one-half at the tablet breakpoint and two-thirds width at desktop.

#### Nested grids

### Width override classes

If you need to constrain the width of an element independently of the grid system, you can use width override classes.

The width override classes start with `govuk-!-width-`, followed by the width on larger screen sizes. For example, `govuk-!-width-one-half` will apply a width of 50% and `govuk-!-width-two-thirds`will apply a width of 66.66%.

These examples are for the generic width override classes - read specific [guidance on setting text input width](https://design-system.service.gov.uk/components/text-input/#use-appropriately-sized-text-inputs).

| Class | CSS |
| --- | --- |
| `govuk-!-width-full` | `width: 100%` |
| `govuk-!-width-three-quarters` | `width: 100%`, `from tablet: width: 75%` |
| `govuk-!-width-two-thirds` | `width: 100%`, `from tablet: width: 66.66%` |
| `govuk-!-width-one-half` | `width: 100%`, `from tablet: width: 50%` |
| `govuk-!-width-one-third` | `width: 100%`, `from tablet: width: 33.33%` |
| `govuk-!-width-one-quarter` | `width: 100%`, `from tablet: width: 25%` |

### Override how elements display

You can use display override classes if you need to override how elements display on the page.

Use:

- `govuk-!-display-block` to display as a block
- `govuk-!-display-inline` to display inline
- `govuk-!-display-inline-block` to display as an inline block
- `govuk-!-display-none` to remove the element from the page

You can also remove elements from the printed version of the page using `govuk-!-display-none-print`.

| Class | CSS |
| --- | --- |
| `govuk-!-display-inline` | `display: inline` |
| `govuk-!-display-inline-block` | `display: inline-block` |
| `govuk-!-display-block` | `display: block` |
| `govuk-!-display-none` | `display: none` |
| `govuk-!-display-none-print` | `when printed: display: none` |

### Hide elements and keep them accessible to screen readers

You can stop elements from being displayed on the page and keep their contents available to screen readers using `govuk-visually-hidden`. You can use this to present content to screen reader users that sighted users do not need.

If the element is focusable, such as a link, you can make it become visible when receiving keyboard focus using `govuk-visually-hidden-focusable`.

---
## Links

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/links/

Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

### Links without a visited state

Use the `govuk-link--no-visited-state` modifier class where it is not helpful to distinguish between visited and unvisited states, for example when linking to pages with frequently-changing content such as the dashboard for an admin interface.

### External links

If it's an external link to a non-government website, make that clear in the link text. For example, 'read advice on writing link text from [name of organisation]'. There's no need to say explicitly that you're linking to an external site. [Do not use an external link icon](https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/).

### Opening links in a new tab

Avoid opening links in a new tab or window. It can be disorienting - and [can cause accessibility problems for people who cannot visually perceive that the new tab has opened](https://www.w3.org/TR/WCAG20-TECHS/G200.html).

If you need a link to open in a new tab, include the words ‘opens in new tab’ as part of the link. A use case example is to stop the user losing information they’ve entered into a form. There's no need to tell the user the new tab opens in a new window as this is the default behaviour for most browsers.

Include `rel="noreferrer noopener"` along with `target="_blank"` to reduce the risk of [reverse tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing). The following example shows how to do this in HTML.

If you're displaying lots of links together and want to save space and avoid repetition, consider doing both of the following:

- adding a line of text before the links saying 'The following links open in a new tab'
- including `<span class="govuk-visually-hidden">(opens in new tab)</span>` as part of the link text, so that part of the link text is visually hidden but still accessible to screen readers

### Links on dark backgrounds

Use the `govuk-link--inverse` modifier class to show white links on dark backgrounds. For example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the links. The white links and background colour must have a contrast ratio of at least 4.5:1 to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

### Links without underlines

Use the `govuk-link--no-underline` modifier class to remove underlines from links.

Only do this if the context tells the user that the text is a link, even without the underline.

For example, links in a header or side navigation might not need underlines. Users will understand that they’re links because of where they are on the page.

---
## Lists

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/lists/

Use lists to make blocks of text easier to read, and to break information into manageable chunks.

### Bulleted lists

Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end.

### Numbered lists

Use numbered lists instead of bulleted lists when the order of the items is relevant.

You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop because each should be a complete sentence.

### Adding extra spacing between list items

If a list is hard to read because the items run across multiple lines you can add extra spacing.

---
## Page template

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/page-template/

Use this template to keep your pages consistent with the rest of GOV.UK.

This page template combines the boilerplate markup and [components](https://design-system.service.gov.uk/components/) needed for a basic GOV.UK page. It includes:

- JavaScript that adds a `.govuk-frontend-supported` class, which is required by components with JavaScript behaviour
- the [Skip link component](https://design-system.service.gov.uk/components/skip-link/), [Header component](https://design-system.service.gov.uk/components/header/) and [Footer component](https://design-system.service.gov.uk/components/footer/)
- the favicon, and other related theme icons

In the examples provided, we show both HTML and [Nunjucks](https://frontend.design-system.service.gov.uk/use-nunjucks/).

You can use the HTML examples if you are not able to use Nunjucks. If you use HTML you’ll need to update it manually when new versions are released.

If you're using Nunjucks you can get this page template by installing GOV.UK Frontend.
You’ll get updates to the page template when we update GOV.UK Frontend.

### Default

This example shows the minimum required for a GOV.UK page.

### Customised page template

You can customise the page template, for example, by:

- adding a service name and navigation
- including a [Back link component](https://design-system.service.gov.uk/components/back-link/) or [Phase banner component](https://design-system.service.gov.uk/components/phase-banner/)

### Changing template content

If you’re using Nunjucks, you can change the template’s content using options.

How you set an option depends on whether it's a 'variable' option or a 'block' option.

To set a 'variable' option, use `set` to pass in a single value or string. For example, to add a class to the `<body>` element using the `bodyClasses` option:

```njk
{% set bodyClasses = "EXAMPLE-CLASS" %}
```

By default, the template contains a [Skip link component](https://design-system.service.gov.uk/components/skip-link/), [Header component](https://design-system.service.gov.uk/components/header/) and [Footer component](https://design-system.service.gov.uk/components/footer/), all of which require 'blocks' to change.

To set a 'block' option, use `block` to pass in a multiline value or HTML markup. For example, to add a block of HTML before the closing `</body>` element in the page template using the `bodyEnd` option:

```njk
{% block bodyEnd %}
  <div>
    <p>Example text</p>
  </div>
{% endblock %}
```

To change the components that are included in the page template by default, set their equivalent blocks. For example:

```njk
{% block govukHeader %}
  {{ govukHeader ({
    homepageUrl: "/custom-url"
  }) }}
{% endblock %}
```

### Template blocks and options

Options are listed within the template blocks where they're used:

- [`<html>` and `<body>`](https://design-system.service.gov.uk/styles/page-template/#html-and-body)
- [`<head>` and metadata](https://design-system.service.gov.uk/styles/page-template/#head-and-metadata)
- [page header](https://design-system.service.gov.uk/styles/page-template/#page-header)
- [width container and main content](https://design-system.service.gov.uk/styles/page-template/#width-container-and-main-content)
- [footer](https://design-system.service.gov.uk/styles/page-template/#footer)
- [other options](https://design-system.service.gov.uk/styles/page-template/#other-options)

#### `<html>` and `<body>`

Use options in `<html>` and `<body>` to:

- [configure classes and attributes on the `<html>` element](https://design-system.service.gov.uk/styles/page-template/#configure-classes-and-attributes-on-the-html-element)
- [configure classes and attributes on the `<body>` element](https://design-system.service.gov.uk/styles/page-template/#configure-classes-and-attributes-on-the-body-element)
- [add content at the start or end of the `<body>` element](https://design-system.service.gov.uk/styles/page-template/#add-content-at-the-start-or-end-of-the-body-element)

**Configure classes and attributes on the `<html>` element**

- `htmlClasses` (variable):
Add a class to the `<html>` element.

- `htmlLang` (variable):
Set the language of the whole document. If your `<title>` and `<main>` element are in a different language to the rest of the page, use `htmlLang` to set the language of the rest of the page.

**Configure classes and attributes on the `<body>` element**

- `bodyClasses` (variable):
Add a class to the `<body>` element.

- `bodyAttributes` (variable):
Add attributes to the `<body>` element. Add each attribute and its value in the `bodyAttributes` object.

**Add content at the start or end of the `<body>` element**

- `bodyStart` (block):
Add content after the opening `<body>` element.
For example: the [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/).

- `bodyEnd` (block):
Add content just before the closing `</body>` element.

#### `<head>` and metadata

Use options in `<head>` and metadata to:

- [configure where your page can access GOV.UK Frontend assets](https://design-system.service.gov.uk/styles/page-template/#configure-where-your-page-can-access-govuk-frontend-assets)
- [customise icons and theme colours](https://design-system.service.gov.uk/styles/page-template/#customise-icons-and-theme-colours)
- [set the page’s title](https://design-system.service.gov.uk/styles/page-template/#set-the-pages-title)
- [add custom metadata to the `<head>` element](https://design-system.service.gov.uk/styles/page-template/#add-custom-metadata-to-the-head-element) (like a `<link>` to your services stylesheet)

<!-- Without this comment, the option is rendered as part of a `<li>` from the previous list -->

**Configure where your page can access GOV.UK Frontend assets**

- `assetPath` (variable):
Specify a path to the [GOV.UK Frontend assets](https://frontend.design-system.service.gov.uk/import-font-and-images-assets/) (icons, images, font files). If you're using the refreshed GOV.UK brand, you may need to update this path to point to the updated assets.

- `assetUrl` (variable):
Set the domain for assets where an absolute URL is required, for example the Open Graph image.

**Customise icons and theme colours**

- `opengraphImageUrl` (variable):
Set the URL for the Open Graph image meta tag. The URL must be absolute, including the protocol and domain name. If you're using the refreshed GOV.UK brand, you may need to update this path to point to the updated assets.

- `themeColor` (variable):
Set the [toolbar colour on some devices](https://developer.chrome.com/blog/support-for-theme-color-in-chrome-39-for-android).

- `headIcons` (block):
Override the default icons used for GOV.UK branded pages.
For example: `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />`.

**Set the page's title**

- `pageTitle` (block):
Override the default page title (`<title>` element).

- `pageTitleLang` (variable):
Set the language of the `<title>` element if it's different to [`htmlLang`](https://design-system.service.gov.uk/styles/page-template/#htmllang-variable).

**Add custom metadata to the `<head>` element**

- `head` (block):
Add additional items inside the `<head>` element.
For example: `<meta name="description" content="My page description">`.

#### Page header

Use options in page header to:

- [replace the Skip Link rendered before the `<header>`](https://design-system.service.gov.uk/styles/page-template/#replace-the-skip-link-rendered-before-the-header)
- [add classes or attributes to the `<header>` element](https://design-system.service.gov.uk/styles/page-template/#add-classes-or-attributes-to-the-header-element)
- [add extra content at the start or end of the `<header>` element](https://design-system.service.gov.uk/styles/page-template/#add-extra-content-at-the-start-or-end-of-the-header-element)
- [add a Service Navigation component](https://design-system.service.gov.uk/styles/page-template/#add-a-service-navigation-component)
- [replace the default content from the header](https://design-system.service.gov.uk/styles/page-template/#replace-the-default-content-from-the-header)

**Replace the Skip Link rendered before the `<header>`**

- `skipLink` (block):
Deprecated - use [`govukSkipLink`](https://design-system.service.gov.uk/styles/page-template/#govukskiplink-block) instead.
Override the default [Skip link component](https://design-system.service.gov.uk/components/skip-link/).

- `govukSkipLink` (block):
Override the default [Skip link component](https://design-system.service.gov.uk/components/skip-link/).

**Add classes or attributes to the `<header>` element**

- `headerClasses` (variable):
Add a class to the `<header>` element.

- `headerAttributes` (variable):
Add attributes to the `<header>` element. Add each attribute and its value in the `headerAttributes` object.

**Add extra content at the start or end of the `<header>` element**

- `headerStart` (block):
Add content after the opening `<header>` element.

- `headerEnd` (block):
Add content just before the closing `</header>` element.
For example: the [Phase banner component](https://design-system.service.gov.uk/components/phase-banner/).

**Add a Service Navigation component**

- `serviceName` (variable):
Renders a Service Navigation with the given `serviceName` if present.
If you need to add navigation items, you’ll need to [replace the default Service Navigation with your own](https://design-system.service.gov.uk/styles/page-template/#govukservicenavigation-block).

- `govukServiceNavigation` (block):
Override the Service Navigation rendered if [`serviceName`](https://design-system.service.gov.uk/styles/page-template/#servicename-variable) is set or add your custom Service Navigation without affecting the rest of the `<header>` element.

**Replace the default content from the header**

- `header` (block):
Override the `<header>` element and the [`headerStart`](https://design-system.service.gov.uk/styles/page-template/#headerstart-block), [`govukHeader`](https://design-system.service.gov.uk/styles/page-template/#govukheader-block), [`govukServiceNavigation`](https://design-system.service.gov.uk/styles/page-template/#govukservicenavigation-block), and [`headerEnd`](https://design-system.service.gov.uk/styles/page-template/#headerend-block) blocks.

- `govukHeader` (block):
Override the GOV.UK Header without changing the rest of the `<header>` element.

#### Width container and main content

The page template [renders your content](https://design-system.service.gov.uk/styles/page-template/#render-your-content-inside-the-template) in a `<main>` tag, wrapped in a container limiting the content’s width.

Use options in width container and main content to:

- [add classes to the container limiting the content’s width](https://design-system.service.gov.uk/styles/page-template/#add-classes-or-attributes-to-the-container)
- [add content at the start or end of the container](https://design-system.service.gov.uk/styles/page-template/#add-extra-content-at-the-start-or-end-of-the-container)
- [add classes or attributes to the `<main>` element](https://design-system.service.gov.uk/styles/page-template/#add-classes-or-attributes-to-the-main-element)
- [replace the container or `<main>` element](https://design-system.service.gov.uk/styles/page-template/#replace-the-container-or-main-element) with your own

**Render your content inside the template**

- `content` (block):
Add content that needs to appear in the `<main>` element.

**Add classes or attributes to the container**

- `containerClasses` (variable):
Add a class to the container. This is useful if you want to make the page wrapper a fixed width.

- `containerAttributes` (variable):
Add other attributes than `class` to the container element. Add each attribute and its value in the `containerAttributes` object.

**Add extra content at the start or end of the container**

- `containerStart` (block):
Add content after the opening `<div class=”govuk-width-container”>` element that limits the width of the page.
For example: the [Back link component](https://design-system.service.gov.uk/components/back-link), [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs).

- `beforeContent` (block):
Deprecated - Use [`containerStart`](https://design-system.service.gov.uk/styles/page-template/#containerstart-block) instead.
Add content that needs to appear outside the `<main>` element.
For example: the [Back link component](https://design-system.service.gov.uk/components/back-link), [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs).

- `containerEnd` (block):
Add content just before the closing `</div>` of the width container.

**Add classes or attributes to the `<main>` element**

- `mainClasses` (variable):
Add a class to the `<main>` element.

- `mainLang` (variable):
Set the language of the `<main>` element if it’s different to [`htmlLang`](https://design-system.service.gov.uk/styles/page-template/#htmllang-variable).

- `mainAttributes` (variable):
Add other attributes than `class` and `lang` to the `<main>` element. Add each attribute and its value in the `mainAttributes` object.

**Replace the container or `<main>` element**

- `container` (block):
Override the default container limiting the width of the page, including the `<main>` element it wraps.

- `main` (block):
Override the whole `<main>` element.

#### Footer

Use options in footer to:

- [add classes or attributes to the `<footer>` element](https://design-system.service.gov.uk/styles/page-template/#add-classes-or-attributes-to-the-footer-element)
- [add extra content at the start or end of the `<footer>` element](https://design-system.service.gov.uk/styles/page-template/#add-extra-content-at-the-start-or-end-of-the-footer-element)
- [replace the default content from the footer](https://design-system.service.gov.uk/styles/page-template/#replace-the-default-content-from-the-footer)

**Add classes or attributes to the `<footer>` element**

- `footerClasses` (variable):
Add a class to the `<footer>` element.

- `footerAttributes` (variable):
Add attributes to the `<footer>` element. Add each attribute and its value in the `footerAttributes` object.

**Add extra content at the start or end of the `<footer>` element**

- `footerStart` (block):
Add content after the opening `<footer>` element.

- `footerEnd` (block):
Add content just before the closing `</footer>` element.

**Replace the default content from the footer**

- `footer` (block):
Override the `<footer>` element and the `govukFooter`, `footerStart`, and `footerEnd` blocks.

- `govukFooter` (block):
Override the GOV.UK Footer without changing the rest of the `<footer>` element.

#### Other options

**Security**

- `cspNonce` (variable):
Add a nonce attribute to the script for your Content Security Policy (CSP). Provide a nonce that hostile actors cannot guess, as otherwise they can easily find a way around your CSP. However, you should use this attribute only if you’re not able to include the hash for the inline scripts in your service’s CSP.

---
## Paragraphs

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/paragraphs/

The default paragraph font size is 19px.

You can also add classes to create a lead paragraph or smaller body copy to convey hierarchy in your page.

### Lead paragraph

A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content. Lead paragraphs use 24px type on desktop and if it’s needed you should only use it once per page.

### Body small

You can use the `govuk-body-s` class sparingly to make your paragraph font size 16px instead of 19px.

The majority of your body copy should use the standard 19px paragraph size.

---
## Section break

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/section-break/

You can use the `govuk-section-break` classes on an `<hr>` element to create a thematic break between sections of content. `govuk-section-break` has class-based modifiers for different size margins.

By default `govuk-section-break` is only visible by its margin. You can add the `govuk-section-break--visible` class to make it visible with a separator line.

---
## Spacing

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/spacing/

The Design System uses two different spacing scales – responsive and static.

### Responsive spacing

The responsive spacing scale adapts based on screen size.

The spacing for 'large screens' is used when the screen is wider than the tablet breakpoint (640px). Spacing for the smallest units (0-3) stays the same for all screen sizes.

<table class="govuk-table app-table--constrained">
  <caption class="govuk-table__caption small govuk-visually-hidden">The responsive spacing scale</caption>
  <thead>
    <tr>
      <th class="govuk-table__header" scope="col">Spacing unit</th>
      <th class="govuk-table__header govuk-table__header--numeric" scope="col">Small screens</th>
      <th class="govuk-table__header govuk-table__header--numeric" scope="col">Large screens</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="govuk-table__header" scope="row">0</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">0</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">0</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">1</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">5px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">5px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">2</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">10px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">10px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">3</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">15px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">15px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">4</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">15px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">20px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">5</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">15px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">25px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">6</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">20px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">30px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">7</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">25px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">40px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">8</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">30px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">50px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">9</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">40px</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">60px</td>
    </tr>
  </tbody>
</table>

### Static spacing

The static spacing scale stays the same for all screen sizes, and uses the same spacing as 'large screens' in the responsive spacing scale.

<table class="govuk-table app-table--constrained">
  <caption class="govuk-table__caption small govuk-visually-hidden">The static spacing scale</caption>
  <thead>
    <tr>
      <th class="govuk-table__header" scope="col">Spacing unit</th>
      <th class="govuk-table__header govuk-table__header--numeric" scope="col">All screens</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="govuk-table__header" scope="row">0</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">0</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">1</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">5px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">2</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">10px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">3</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">15px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">4</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">20px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">5</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">25px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">6</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">30px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">7</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">40px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">8</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">50px</td>
    </tr>
    <tr>
      <th class="govuk-table__header" scope="row">9</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">60px</td>
    </tr>
  </tbody>
</table>

Responsive spacing changes at the tablet breakpoint (640px). Static spacing is the same at every screen size.

| Point | Responsive: small screens | Responsive: large screens | Static |
| --- | --- | --- | --- |
| `0` | 0 | 0 | 0 |
| `1` | 5px | 5px | 5px |
| `2` | 10px | 10px | 10px |
| `3` | 15px | 15px | 15px |
| `4` | 15px | 20px | 20px |
| `5` | 15px | 25px | 25px |
| `6` | 20px | 30px | 30px |
| `7` | 25px | 40px | 40px |
| `8` | 30px | 50px | 50px |
| `9` | 40px | 60px | 60px |

In Sass, use `govuk-spacing(<point>)` for a static value, or `@include govuk-responsive-margin(<point>, "bottom")` and `@include govuk-responsive-padding(<point>)`.

### Applying spacing in your own CSS

If you want to reference the spacing scale in your CSS, use the spacing helpers.

#### Using the responsive spacing helper

To use the responsive spacing scale, include either:

- the [`govuk-responsive-margin`](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-responsive-margin) mixin
- the [`govuk-responsive-padding`](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-responsive-padding) mixin

For example, to apply spacing unit 6 for 30px padding on large screens and 20px on small screens, use:

```scss
@include govuk-responsive-padding(6);
```

You can also add an argument to apply margin or padding in a single direction.

For example, to apply spacing unit 6 for a 30px bottom margin on large screens and a 20px bottom margin on small screens, use:

```scss
@include govuk-responsive-margin(6, "bottom");
```

#### Using the static spacing helper

For the static spacing scale, use the [`govuk-spacing` function](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-spacing).

For example, to apply spacing unit 6 for 30px top padding on all screens, use:

```scss
padding-top: govuk-spacing(6);
```

For negative spacing, use a negative spacing unit number.

For example, to apply spacing unit -3 for a negative 15px top margin all screens, use:

```scss
margin-top: govuk-spacing(-3);
```

### Overriding spacing

Occasionally, you might need to make minor adjustments like adding or removing spacing to elements of your design. You can use the spacing override classes for this.

#### Responsive spacing override classes

The responsive spacing override classes start with: `govuk-!-`, followed by either `margin-` or `padding-`, and then a spacing unit number.

To apply spacing in a single direction, include `left-`, `right-`, `top-`, or `bottom-` just before the spacing unit.

For example, use:

- `govuk-!-margin-9` to apply a 40px margin to all sides of the element on small screens, increasing to 60px on large screens
- `govuk-!-padding-right-5` to apply 15px of padding to the right side of the element on small screens, increasing to 25px on large screens
- `govuk-!-margin-0` to remove all margins at all screen sizes

#### Static spacing override classes

The static spacing override classes start with `govuk-!-static`. Use them the same way as the responsive spacing override classes.

For example, use:

- `govuk-!-static-margin-9` to apply a 60px margin to all sides of the element at all screen sizes
- `govuk-!-static-padding-right-5` to apply 25px of padding to the right side of the element at all screen sizes
- `govuk-!-static-margin-0` to remove all margins at all screen sizes, same as `govuk-!-margin-0`

#### Examples

Replace `<point>` with a point from the scale, for example `govuk-!-margin-bottom-6`.

| Responsive | Static |
| --- | --- |
| `govuk-!-margin-<point>` | `govuk-!-static-margin-<point>` |
| `govuk-!-margin-top-<point>` | `govuk-!-static-margin-top-<point>` |
| `govuk-!-margin-right-<point>` | `govuk-!-static-margin-right-<point>` |
| `govuk-!-margin-bottom-<point>` | `govuk-!-static-margin-bottom-<point>` |
| `govuk-!-margin-left-<point>` | `govuk-!-static-margin-left-<point>` |
| `govuk-!-padding-<point>` | `govuk-!-static-padding-<point>` |
| `govuk-!-padding-top-<point>` | `govuk-!-static-padding-top-<point>` |
| `govuk-!-padding-right-<point>` | `govuk-!-static-padding-right-<point>` |
| `govuk-!-padding-bottom-<point>` | `govuk-!-static-padding-bottom-<point>` |
| `govuk-!-padding-left-<point>` | `govuk-!-static-padding-left-<point>` |

---
## Type scale

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/type-scale/

The type scale is a collection of font sizes and line heights that underpin all of the typographic styles on GOV.UK. It has been [tested and iterated](https://designnotes.blog.gov.uk/2022/12/12/making-the-gov-uk-frontend-typography-scale-more-accessible/) for readability on different devices.

When creating new components, always start by using the existing typography styles. If you need to create a new style, align it with one of the points on the type scale.

### How it works

Like the [spacing scale](https://design-system.service.gov.uk/styles/spacing/), every point on the type scale uses a line height in a multiple of 5px. This creates a consistent vertical rhythm, which makes pages easier to scan and read.

GOV.UK Frontend outputs CSS in relative units like `em` or `rem`. This helps the type resize better when zoomed or magnified. We've used pixels (px) here so it's easier to understand.

### Responsive behaviour

The type scale changes based on screen size.

The scale for ‘large screens’ is used when the screen is wider than the tablet breakpoint (640px).

Sizes are font size / line height. "Large screens" means the tablet breakpoint (640px) and wider. GOV.UK Frontend outputs these in `rem`, shown here in pixels.

| Point | Small screens | Large screens | Print | Used by |
| --- | --- | --- | --- | --- |
| `80` | 53px / 55px | 80px / 80px | 53pt / 1.1 |  |
| `48` | 32px / 35px | 48px / 50px | 32pt / 1.15 | `govuk-heading-xl` |
| `36` | 27px / 30px | 36px / 40px | 24pt / 1.05 | `govuk-heading-l` |
| `27` | 21px / 25px | 27px / 30px | 18pt / 1.15 | `govuk-caption-xl` |
| `24` | 21px / 25px | 24px / 30px | 18pt / 1.15 | `govuk-heading-m`, `govuk-caption-l`, `govuk-body-lead`, `govuk-body-l` |
| `19` | 19px / 25px | 19px / 25px | 14pt / 1.15 | `govuk-heading-s`, `govuk-caption-m`, `govuk-body`, `govuk-body-m` |
| `16` | 16px / 20px | 16px / 20px | 14pt / 1.2 | `govuk-body-s` |

### Using the type scale in your own CSS

Include the [`govuk-font` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font) to use GOV.UK typography in your CSS.

For example, if you want a custom element to use type scale point 19, use:

```scss
@include govuk-font($size: 19);
```

You can add additional arguments to control font weight, use tabular font spacing, or to override the line height:

```scss
@include govuk-font($size: 19, $weight: bold, $tabular: true);
```

#### If you only want to set the font size

Do not use `govuk-font` if you only want to change the font size and line height as it includes additional typography-related CSS like the New Transport font family. Instead, you should use the [`govuk-font-size` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font-size):

```scss
@include govuk-font-size($size: 19);
```

### Typography classes

Use these classes on headings, captions and paragraphs. In Sass, use `@include govuk-font($size: <point>)` for a point on the scale, with `$weight: bold` if needed.

| Class | Point | Small screens | Large screens | Weight |
| --- | --- | --- | --- | --- |
| `govuk-heading-xl` | `48` | 32px / 35px | 48px / 50px | Bold |
| `govuk-heading-l` | `36` | 27px / 30px | 36px / 40px | Bold |
| `govuk-heading-m` | `24` | 21px / 25px | 24px / 30px | Bold |
| `govuk-heading-s` | `19` | 19px / 25px | 19px / 25px | Bold |
| `govuk-caption-xl` | `27` | 21px / 25px | 27px / 30px | Regular |
| `govuk-caption-l` | `24` | 21px / 25px | 24px / 30px | Regular |
| `govuk-caption-m` | `19` | 19px / 25px | 19px / 25px | Regular |
| `govuk-body-lead` | `24` | 21px / 25px | 24px / 30px | Regular |
| `govuk-body-l` | `24` | 21px / 25px | 24px / 30px | Regular |
| `govuk-body` | `19` | 19px / 25px | 19px / 25px | Regular |
| `govuk-body-m` | `19` | 19px / 25px | 19px / 25px | Regular |
| `govuk-body-s` | `16` | 16px / 20px | 16px / 20px | Regular |

---
## Typeface

[↑ Back to top](#table-of-contents)

**Design System guidance:** https://design-system.service.gov.uk/styles/typeface/

If your service is on the service.gov.uk subdomain you must use the GDS Transport font.

### When not to use the GDS Transport font

If your service is publicly available on a subdomain other than service.gov.uk, use an alternative typeface. Read our guidance on [Using GOV.UK Frontend without GOV.UK branding](https://frontend.design-system.service.gov.uk/using-govuk-frontend-without-govuk-branding/) for how to change your service’s font to a similar typeface.

If you’re not sure whether you should use GDS Transport, do one of the following:

- read the service manual section [‘If your service is not on GOV.UK’ section on ‘Making your service look like GOV.UK’](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk#if-your-service-is-not-on-govuk)
- contact the [Design System team](https://design-system.service.gov.uk/contact/)

---
