## Language navigation

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukLanguageNavigation` · **Import:** `{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}`

**Design System guidance:** https://design-system.service.gov.uk/components/language-navigation/

### Guidance

The Language navigation component helps users choose and switch between languages when using a service.

#### When to use this component

Use the Language navigation component when you can provide your service in more than one language.

For example, to help users switch from a page in English to a version of the same page in Welsh.

How you use this component will depend on whether you offer a choice of languages for:

- [specific pages within your service](https://design-system.service.gov.uk/components/language-navigation/#if-you-only-offer-specific-pages-in-another-language)
- [your whole service](https://design-system.service.gov.uk/components/language-navigation/#if-you-offer-your-whole-service-in-another-language)

#### When not to use this component

Do not use this component unless you can provide all the same key information on a page in another language.

#### How it works

The Language navigation component shows users a choice of languages and helps the user choose and switch between them.

Use the native name of each language, such as <span lang="cy">Cymraeg</span> for Welsh. This helps speakers of that language recognise the link.

The component does not translate content. You'll need to create, test and maintain content for all the languages you offer your service in.

See some of the other things you might need to do as part of [designing services that offer multiple languages](https://design-system.service.gov.uk/components/language-navigation/#designing-services-that-offer-multiple-languages).

Make sure the user does not lose any data they've entered when they navigate to another language. Do not ask the user to re-enter information they've already given.

##### Placement on pages

Where you place the Language navigation component helps users understand whether they can use your entire service or only specific pages in another language.

Choose a single consistent location that works best for your users.

Use the same placement throughout your service in all languages. This helps users in many ways. For example, some users often switch languages throughout their journey as a way to check their understanding of a page.

##### If you only offer specific pages in another language

You could place the language navigation at the top of a page, after the `h1` element.

If you choose to place the language navigation elsewhere on a page, it should be in a sensible place in the page heading structure with its own visible or hidden heading.

##### If you offer your whole service in another language

If users can change the language for your whole service, you can place the [Language navigation component into the Service navigation component](https://design-system.service.gov.uk/components/service-navigation/#adding-language-navigation).

The Service navigation component includes options to align the language navigation with navigation items as shown in this example.

##### Ensure hidden text and attributes are in the correct languages

The code in this component contains a navigation landmark and some hidden text to help users, including users of assistive technology. Make sure to translate these attributes as needed.

`aria-label` (or `ariaLabel` in Nunjucks) labels the component's navigation landmark. By default the label is 'language', which will be announced by a screen reader as 'language navigation'. Translate this label to the language of the page it's on.

Hidden text within the link for each language option (or `languageDescriptionText` in Nunjucks) explains what the link will do. For example, 'Change the language to English'. Translate these to the language you're linking to.

##### Language navigation on dark backgrounds

Use the `govuk-language-navigation--inverse` modifier class to show white links and text on a dark background – for example, inside a Service navigation with a dark background.

Make sure all users can see the language navigation – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

#### Designing services that offer multiple languages

GOV.UK Content and publishing guidance gives some advice on things you need to [consider when translating content](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/consider-translations/).

Test your service with users in your intended language to spot potential issues such as word inaccuracies and cultural differences. The Service Manual for Wales shows how you can [consider bilingualism in your research](https://digitalpublicservices.gov.wales/guidance-and-standards/service-manual/researching-your-users-and-testing-your-service/considering-bilingualism-in-your-research/).

##### Internationalisation and localisation

If you choose to show larger parts of your service in another language, consider if you need to translate the text within components such as navigation, buttons and accordions.

Our components use English by default but include methods to translate text within them. Follow our documentation on how to [localise GOV.UK Frontend](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#localise-gov-uk-frontend/).

For some languages, you’ll need to [modify components](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/) to make sure text displays well and is understandable by users of assistive technologies. For example, to show languages using scripts that read from right to left, such as Arabic, you’ll need to make changes to components and layouts.

See [W3C’s introduction to internationalisation](https://www.w3.org/International/i18n-drafts/nav/about) for more about some of the things you might need to consider.

Keep in mind that language and regional differences can affect the format users expect to see and enter information such as names, numbers and addresses.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | array | Yes | The languages to display within the language navigation. |
| `items[].text` | string | Yes | If `html` is set, this is not required. Name of the language, written in that language (for example, <span lang="cy">"Cymraeg"</span> for Welsh). If `html` is provided, the `text` option will be ignored. |
| `items[].html` | string | Yes | If `text` is set, this is not required. HTML to use for the language item. If `html` is provided, the `text` option will be ignored. |
| `items[].lang` | string | Yes | The language tag for the language item text (for example, `cy` for Welsh). Added as a `lang` attribute so that assistive technologies pronounce the language name correctly. |
| `items[].hrefLang` | string | No | The language tag for the linked page (for example, `cy` for Welsh). Added as an `hreflang` attribute for search engines and other machine readers. Defaults to `lang` when omitted. |
| `items[].dir` | string | No | The text direction of the script the language name is written in (`ltr` for left-to-right scripts or `rtl` for right-to-left). Set this on every item if the navigation includes scripts written in different directions. |
| `items[].href` | string | No | Link to the current page in this language. |
| `items[].current` | boolean | No | Whether this is the language of the current page. Defaults to `true` when `href` is not provided. |
| `items[].languageDescriptionText` | string | No | Visually hidden text after a language link to indicate what the link will do. Write it in the language of the link (for example, "Change the language to English"). |
| `items[].classes` | string | No | Classes to add to the language item anchor. |
| `items[].attributes` | object | No | HTML attributes to add to the language item anchor. |
| `ariaLabel` | string | No | Plain text label identifying the navigation landmark to screen readers. Write it in the language of the current page. Defaults to "Language". |
| `classes` | string | No | Classes to add to the language navigation container. |
| `attributes` | object | No | HTML attributes to add to the language navigation container. |

### Examples

#### Default

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Cymraeg",
      lang: "cy",
      href: "#/cy"
    }
  ]
}) }}
```

Renders as:

```html
<nav class="govuk-language-navigation" aria-label="Language">
  <ul class="govuk-language-navigation__list">
    <li class="govuk-language-navigation__list-item">
      <span class="govuk-language-navigation__text"
        aria-current="true" lang="en">English</span>
    </li>
    <li class="govuk-language-navigation__list-item">
      <a class="govuk-language-navigation__link" href="#/cy" rel="alternate" lang="cy" hreflang="cy">Cymraeg      </a>
    </li>
  </ul>
</nav>
```

#### With multiple languages

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Français",
      lang: "fr",
      href: "#/fr"
    },
    {
      text: "हिंदी",
      lang: "hi",
      href: "#/hi"
    },
    {
      text: "日本語",
      lang: "ja",
      href: "#/ja"
    },
    {
      text: "اردو",
      lang: "ur",
      href: "#/ur"
    },
    {
      text: "中文",
      lang: "zh",
      href: "#/zh"
    }
  ]
}) }}
```

#### With large amount of multiple languages

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "العربيَّة",
      lang: "ar",
      href: "#/ar"
    },
    {
      text: "български",
      lang: "bg",
      href: "#/bg"
    },
    {
      text: "বাংলা",
      lang: "bn",
      href: "#/bn"
    },
    {
      text: "Deutsch",
      lang: "de",
      href: "#/de"
    },
    {
      text: "Ελληνικά",
      lang: "el",
      href: "#/el"
    },
    {
      text: "Español",
      lang: "es",
      href: "#/es"
    },
    {
      text: "فارسی",
      lang: "fa",
      href: "#/fa"
    },
    {
      text: "Français",
      lang: "fr",
      href: "#/fr"
    },
    {
      text: "જોર્જિયન",
      lang: "gu",
      href: "#/gu"
    },
    {
      text: "हिंदी",
      lang: "hi",
      href: "#/hi"
    },
    {
      text: "Magyar",
      lang: "hu",
      href: "#/hu"
    },
    {
      text: "Italiano",
      lang: "it",
      href: "#/it"
    },
    {
      text: "Lietuvių",
      lang: "lt",
      href: "#/lt"
    },
    {
      text: "Latviešu",
      lang: "lv",
      href: "#/lv"
    },
    {
      text: "नेपाली",
      lang: "ne",
      href: "#/ne"
    },
    {
      text: "ਪੰਜਾਬੀ ਗੁਰਮੁਖੀ",
      lang: "pa",
      href: "#/pa"
    },
    {
      text: "Polski",
      lang: "pl",
      href: "#/pl"
    },
    {
      text: "پښتو",
      lang: "ps",
      href: "#/ps"
    },
    {
      text: "Português",
      lang: "pt",
      href: "#/pt"
    },
    {
      text: "Română",
      lang: "ro",
      href: "#/ro"
    },
    {
      text: "Русский язык",
      lang: "ru",
      href: "#/ru"
    },
    {
      text: "Slovensky",
      lang: "sk",
      href: "#/sk"
    },
    {
      text: "Soomaali",
      lang: "so",
      href: "#/so"
    },
    {
      text: "Shqip",
      lang: "sq",
      href: "#/sq"
    },
    {
      text: "தமிழ்",
      lang: "ta",
      href: "#/ta"
    },
    {
      text: "Türkçe",
      lang: "tr",
      href: "#/tr"
    },
    {
      text: "Українська",
      lang: "uk",
      href: "#/uk"
    },
    {
      text: "اردو",
      lang: "ur",
      href: "#/ur"
    },
    {
      text: "简体中文",
      lang: "zh",
      href: "#/zh"
    },
    {
      text: "w\">繁體中文（臺灣）",
      lang: "zh",
      href: "#/zh"
    }
  ]
}) }}
```

#### Inverse

Language navigation that appears on dark backgrounds

```njk
{{ govukLanguageNavigation({
  classes: "govuk-language-navigation--inverse",
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Cymraeg",
      lang: "cy",
      href: "#/cy"
    }
  ]
}) }}
```

#### With translated navigation label

When the current page is not in English, translate the `ariaLabel` into the language of the current page.

```njk
{{ govukLanguageNavigation({
  ariaLabel: "Dewis iaith",
  attributes: {
    lang: "cy"
  },
  items: [
    {
      text: "English",
      lang: "en",
      href: "#/en"
    },
    {
      text: "Cymraeg",
      lang: "cy",
      current: true
    }
  ]
}) }}
```

#### With mixed text directions

```njk
{{ govukLanguageNavigation({
  items: [
    {
      text: "English",
      lang: "en",
      dir: "ltr",
      current: true
    },
    {
      text: "العربية",
      lang: "ar",
      dir: "rtl",
      href: "#/ar"
    }
  ]
}) }}
```

#### With language description

Add visually hidden text, written in the language of the link, so screen reader users know that selecting a link leads to a translation of the page".

```njk
{{ govukLanguageNavigation({
  attributes: {
    lang: "cy"
  },
  items: [
    {
      text: "English",
      lang: "en",
      current: true
    },
    {
      text: "Cymraeg",
      lang: "cy",
      href: "#/cy",
      languageDescriptionText: "Newid yr iaith i'r Cymraeg"
    }
  ]
}) }}
```

---
