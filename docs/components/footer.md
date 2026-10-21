## Footer

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukFooter` · **Import:** `{% from "govuk/components/footer/macro.njk" import govukFooter %}`

**Design System guidance:** https://design-system.service.gov.uk/components/footer/

### Guidance

The GOV.UK footer provides copyright, licensing and other information about your service.

If you use the page template, you'll also get the footer without having to add it, as it's included by default. However, if you want to customise the default footer, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

#### When to use this component

Use the footer at the bottom of every page of your service.

#### How it works

Add a copyright notice to the footer to clarify who owns the copyright. For GOV.UK services, add the coat of arms to keep things consistent with the rest of GOV.UK.

Make it clear whether content is available for re-use - and if it is, under what sort of licence. Use an [Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) unless you have permission from the National Archives to use a [different type of licence](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/open-government-licence/other-licences/).

##### Footer without links

##### Footer with links

#### Adding links

You can add links to:

- [your service's privacy notice](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users)
- [your service's accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement)
- [your service's Cookies page](https://design-system.service.gov.uk/patterns/cookies-page/)
- terms and conditions
- help content

Use ‘Privacy’, ‘Accessibility’, ‘Cookies’ and ‘Terms and conditions’ for the link text.

If you include links to ‘help’ pages within the GOV.UK footer component, make sure to place those links consistently within the footer content.

Also make sure that ‘help’ links always function in a similar way across each page. This is to comply with [WCAG 2.2 success criterion 3.2.6 Consistent help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html).

#### Adding secondary navigation

Only add secondary GOV.UK navigation if you’re creating a GOV.UK service, and you want users to be able to navigate away from the service to somewhere else on the GOV.UK website. For example, you probably don’t want to encourage a user to navigate away from a linear, form-type service.

##### Footer with secondary navigation

##### Footer with links and secondary navigation

#### Brand refresh of the GOV.UK footer component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

With these changes, the GOV.UK header and GOV.UK footer components should now only be used by [services on the GOV.UK website](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk). Services outside of [the GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition) should stop using the header and footer components and instead create their own.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `meta` | object | No | The meta section of the footer after any navigation, before the copyright and license information. |
| `meta.visuallyHiddenTitle` | string | No | Title for a meta item section. Defaults to `"Support links"`. |
| `meta.html` | string | No | HTML to add to the meta section of the footer, which will appear below any links specified using meta `items`. |
| `meta.text` | string | No | Text to add to the meta section of the footer, which will appear below any links specified using meta `items`. If meta `html` is specified, this option is ignored. |
| `meta.items` | array | No | The meta `items` add content within a unordered list to the meta section of the footer component. These appear above any text or custom html in the meta section. |
| `meta.items[].text` | string | Yes | List item text in the meta section of the footer. |
| `meta.items[].href` | string | Yes | List item link `href` attribute in the meta section of the footer. |
| `meta.items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the anchor in the footer meta section. |
| `navigation` | array | No | The navigation section of the footer before a section break and the copyright and license information. |
| `navigation[].title` | string | Yes | Title for a section. |
| `navigation[].columns` | integer | No | Amount of columns to display items in navigation section of the footer. |
| `navigation[].width` | string | No | Width of each navigation section in the footer. You can pass any Design System grid width here – for example, `"one-third"`, `"two-thirds"` or `"one-half"`. Defaults to `"full"`. |
| `navigation[].items` | array | No | The items within the navigation section of the footer component. |
| `navigation[].items[].text` | string | Yes | List item text in the navigation section of the footer. |
| `navigation[].items[].href` | string | Yes | List item link `href` attribute in the navigation section of the footer. Both `text` and `href` attributes need to be present to create a link. |
| `navigation[].items[].attributes` | object | No | HTML attributes (for example data attributes) to add to the anchor in the footer navigation section. |
| `contentLicence` | object | No | The content licence information within the footer component. If your service provides its information under a different license than OGL, use `null` to hide both the OGL logo and licence text. Defaults to Open Government Licence (OGL) v3 licence. |
| `contentLicence.text` | string | No | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, the text for the Open Government Licence is used. |
| `contentLicence.html` | string | No | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, the text for the Open Government Licence is used. The content licence is inside a `<span>` element, so you can only add [phrasing content](https://html.spec.whatwg.org/#phrasing-content) to it. |
| `copyright` | object | No | The copyright information in the footer component, this defaults to `"© Crown copyright"`. |
| `copyright.text` | string | No | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© Crown copyright"` is used. |
| `copyright.html` | string | No | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored. If neither are provided, `"© Crown copyright"` is used. The copyright notice is inside an `<a>` element, so you can only use text formatting elements within it. |
| `containerClasses` | string | No | Classes that can be added to the inner container, useful if you want to make the footer full width. |
| `classes` | string | No | Classes to add to the footer component container. |
| `attributes` | object | No | HTML attributes (for example data attributes) to add to the footer component container. |

### Examples

#### Default

```njk
{{ govukFooter({}) }}
```

Renders as:

```html
<div class="govuk-footer">
  <div class="govuk-width-container">
  <svg
    focusable="false"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 60"
    height="30"
    width="32"
    fill="currentcolor" class="govuk-footer__crown"
  >    <g>
        <circle cx="20" cy="17.6" r="3.7"/>
        <circle cx="10.2" cy="23.5" r="3.7"/>
        <circle cx="3.7" cy="33.2" r="3.7"/>
        <circle cx="31.7" cy="30.6" r="3.7"/>
        <circle cx="43.3" cy="17.6" r="3.7"/>
        <circle cx="53.2" cy="23.5" r="3.7"/>
        <circle cx="59.7" cy="33.2" r="3.7"/>
        <circle cx="31.7" cy="30.6" r="3.7"/>
        <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z"/>
      </g>
  </svg>

    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
          <svg
            aria-hidden="true"
            focusable="false"
            class="govuk-footer__licence-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 483.2 195.7"
            height="17"
            width="41"
          >
            <path
              fill="currentColor"
              d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
            />
          </svg>
          <span class="govuk-footer__licence-description">
            All content is available under the
            <a
              class="govuk-footer__link"
              href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
              rel="license"
            >Open Government Licence v3.0</a>, except where otherwise stated
          </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a
          class="govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
        >
          © Crown copyright
        </a>
      </div>
    </div>
  </div>
</div>
```

#### With custom HTML content licence and copyright notice

Open Government Licence and Crown copyright notice translated into Welsh

```njk
{{ govukFooter({
  contentLicence: {
    html: "Mae’r holl gynnwys ar gael dan <a class=\"govuk-footer__link\" href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence-cymraeg/version/3/\" rel=\"license\">Drwydded y Llywodraeth Agored v3.0</a>, ac eithrio lle nodir yn wahanol"
  },
  copyright: {
    html: "<span>Hawlfraint y Goron</span>"
  }
}) }}
```

#### With custom text content licence and copyright notice

Open Government Licence and Crown copyright notice translated into Welsh

```njk
{{ govukFooter({
  contentLicence: {
    text: "Mae’r holl gynnwys ar gael dan Drwydded y Llywodraeth Agored v3.0, ac eithrio lle nodir yn wahanol"
  },
  copyright: {
    text: "© Hawlfraint y Goron"
  }
}) }}
```

#### With no content licence

Open Government Licence turned off

```njk
{{ govukFooter({
  contentLicence: null
}) }}
```

#### With custom meta

Custom meta section

```njk
{{ govukFooter({
  meta: {
    text: "GOV.UK Prototype Kit v7.0.1"
  }
}) }}
```

#### With only custom meta

custom meta without content licence

```njk
{{ govukFooter({
  meta: {
    text: "GOV.UK Prototype Kit v7.0.1"
  },
  contentLicence: null
}) }}
```

#### With meta links and meta content

Secondary navigation links and custom meta text

```njk
{{ govukFooter({
  meta: {
    items: [
      {
        href: "#1",
        text: "Bibendum Ornare"
      },
      {
        href: "#2",
        text: "Nullam"
      },
      {
        href: "#3",
        text: "Tortor Fringilla"
      },
      {
        href: "#4",
        text: "Tellus"
      },
      {
        href: "#5",
        text: "Egestas Nullam"
      },
      {
        href: "#6",
        text: "Euismod Etiam"
      },
      {
        href: "#7",
        text: "Fusce Sollicitudin"
      },
      {
        href: "#8",
        text: "Ligula Nullam Ultricies"
      }
    ],
    html: "Built by the <a href=\"#\" class=\"govuk-footer__link\">Department of Magical Law Enforcement</a>"
  }
}) }}
```

#### With only meta links

meta links without content licence

```njk
{{ govukFooter({
  meta: {
    items: [
      {
        href: "#1",
        text: "Bibendum Ornare"
      },
      {
        href: "#2",
        text: "Nullam"
      },
      {
        href: "#3",
        text: "Tortor Fringilla"
      },
      {
        href: "#4",
        text: "Tellus"
      },
      {
        href: "#5",
        text: "Egestas Nullam"
      },
      {
        href: "#6",
        text: "Euismod Etiam"
      },
      {
        href: "#7",
        text: "Fusce Sollicitudin"
      },
      {
        href: "#8",
        text: "Ligula Nullam Ultricies"
      }
    ]
  },
  contentLicence: null
}) }}
```

#### With default width navigation (one column)

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Navigation section",
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    }
  ]
}) }}
```

#### With default width navigation (two columns)

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Navigation section",
      columns: 2,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    }
  ]
}) }}
```

#### With navigation

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Two column list",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    },
    {
      title: "Single column list",
      width: "one-third",
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        }
      ]
    }
  ]
}) }}
```

#### Full GDS example

A full example based on GOV.UK's current footer

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Coronavirus (COVID-19)",
      width: "two-thirds",
      items: [
        {
          href: "/coronavirus",
          text: "Coronavirus (COVID-19): guidance and support"
        }
      ]
    },
    {
      title: "Brexit",
      width: "one-third",
      items: [
        {
          href: "/brexit",
          text: "Check what you need to do"
        }
      ]
    },
    {
      title: "Services and information",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          href: "/browse/benefits",
          text: "Benefits"
        },
        {
          href: "/browse/births-deaths-marriages",
          text: "Births, deaths, marriages and care"
        },
        {
          href: "/browse/business",
          text: "Business and self-employed"
        },
        {
          href: "/browse/childcare-parenting",
          text: "Childcare and parenting"
        },
        {
          href: "/browse/citizenship",
          text: "Citizenship and living in the UK"
        },
        {
          href: "/browse/justice",
          text: "Crime, justice and the law"
        },
        {
          href: "/browse/disabilities",
          text: "Disabled people"
        },
        {
          href: "/browse/driving",
          text: "Driving and transport"
        },
        {
          href: "/browse/education",
          text: "Education and learning"
        },
        {
          href: "/browse/employing-people",
          text: "Employing people"
        },
        {
          href: "/browse/environment-countryside",
          text: "Environment and countryside"
        },
        {
          href: "/browse/housing-local-services",
          text: "Housing and local services"
        },
        {
          href: "/browse/tax",
          text: "Money and tax"
        },
        {
          href: "/browse/abroad",
          text: "Passports, travel and living abroad"
        },
        {
          href: "/browse/visas-immigration",
          text: "Visas and immigration"
        },
        {
          href: "/browse/working",
          text: "Working, jobs and pensions"
        }
      ]
    },
    {
      title: "Departments and policy",
      width: "one-third",
      items: [
        {
          href: "/government/how-government-works",
          text: "How government works"
        },
        {
          href: "/government/organisations",
          text: "Departments"
        },
        {
          href: "/world",
          text: "Worldwide"
        },
        {
          href: "/government/policies",
          text: "Policies"
        },
        {
          href: "/government/publications",
          text: "Publications"
        },
        {
          href: "/government/announcements",
          text: "Announcements"
        }
      ]
    }
  ],
  meta: {
    items: [
      {
        href: "/help",
        text: "Help"
      },
      {
        href: "/help/cookies",
        text: "Cookies"
      },
      {
        href: "/contact",
        text: "Contact"
      },
      {
        href: "/help/terms-conditions",
        text: "Terms and conditions"
      },
      {
        href: "/cymraeg",
        text: "Rhestr o Wasanaethau Cymraeg"
      }
    ],
    html: "Built by the <a class=\"govuk-footer__link\" href=\"#\">Government Digital Service</a>"
  }
}) }}
```

#### Three equal columns

A full example to demonstrate three equal width columns

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Single column list 1",
      width: "one-third",
      columns: 1,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    },
    {
      title: "Single column list 2",
      width: "one-third",
      columns: 1,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    },
    {
      title: "Single column list 3",
      width: "one-third",
      columns: 1,
      items: [
        {
          href: "#1",
          text: "Navigation item 1"
        },
        {
          href: "#2",
          text: "Navigation item 2"
        },
        {
          href: "#3",
          text: "Navigation item 3"
        },
        {
          href: "#4",
          text: "Navigation item 4"
        },
        {
          href: "#5",
          text: "Navigation item 5"
        },
        {
          href: "#6",
          text: "Navigation item 6"
        }
      ]
    }
  ]
}) }}
```

---
