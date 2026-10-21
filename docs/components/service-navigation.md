## Service navigation

> Contains material from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) and the [GOV.UK Design System](https://design-system.service.gov.uk/), © Crown Copyright (Government Digital Service), released under the MIT licence. See [NOTICE.md](https://github.com/alextea/govuk-component-documentation/blob/main/NOTICE.md).

**Macro:** `govukServiceNavigation` · **Import:** `{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}`

**Design System guidance:** https://design-system.service.gov.uk/components/service-navigation/

### Guidance

Service navigation helps users understand that they’re using your service and lets them navigate around your service.

If you use the page template, you'll also get the Service navigation without having to add it, as it's included by default. However, if you want to customise the default Service navigation, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

#### When to use this component

Use the Service navigation to help users understand that they’re using your service.

To decide when to use navigation links in your service, see the [Help users to navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

#### How it works

Together, the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) and Service navigation component ensure users get a consistent experience on GOV.UK.

This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.

For guidance on how to plan your header and navigation, see the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

##### Showing your service name only

Use the Service navigation component to show your service name.

##### Showing service name and navigation links

Show navigation links to let users navigate to different parts of your service and find useful links and tools.

See when and how to show navigation links in the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

#### Use ‘slots’ to add custom HTML code

The Service navigation includes the option to use ‘slots’ to render custom HTML code at specific places inside the component.

You must provide your own styles and JavaScript for the custom HTML code within a slot, particularly if you’re not adding an existing component. You’ll need to decide on the most appropriate layout and positioning.

The Help users to navigate a service pattern includes some guidance on ‘[Adding other header and navigation elements](https://design-system.service.gov.uk/patterns/navigate-a-service/#adding-other-header-and-navigation-elements)’.

##### Adding language navigation

If you use the [trial Language navigation component](https://design-system.service.gov.uk/components/language-navigation) and provide your whole service in more than one language, you can use the 'end' slot to show language options within the Service navigation and align it with navigation items.

##### Align the end slot with the navigation items

When enough space is available on screen, the Service navigation component can render custom HTML inline with navigation items, to their right, rather than underneath the navigation items.

If you use HTML:

1. Place the custom HTML code in the end slot before the closing `</div>` of the `<div class="govuk-width-container">` element.
2. Add the `govuk-service-navigation__inlining-container` to the `<div class="govuk-width-container">` element.

If you use Nunjucks:

1. Place the custom HTML code in the `html` option of the `end` slot.
2. Set the `align` option of the `end` slot to `"inline"`.

This can help save space when showing tools users expect to see in that area, like a [language navigation](https://design-system.service.gov.uk/components/language-navigation), or authentication and account links.

##### Make sure the ‘aria-label’ is accurate for users of assistive technology

When a service name is shown, we let users know that there’s information about the service with a ‘region landmark’ using the `<section>` element.

Depending on what you add in the slots, you might need to rename the `aria-label` to accurately describe what’s in the section.

##### Test with each update of GOV.UK Frontend

There’s a risk that slot contents may look or work differently in a future release of GOV.UK Frontend.

You’ll need to ensure that slot content still works as intended after each update.

#### Brand refresh of the Service navigation component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `classes` | string | No | Classes to add to the service navigation container. |
| `attributes` | object | No | HTML attributes (for example, data attributes) to add to the service navigation container. |
| `ariaLabel` | string | No | The text for the `aria-label` which labels the service navigation container when a service name is included. Defaults to `"Service information"`. |
| `menuButtonText` | string | No | The text of the mobile navigation menu toggle. |
| `menuButtonLabel` | string | No | The screen reader label for the mobile navigation menu toggle. Defaults to the same value as `menuButtonText` if not specified. |
| `navigationLabel` | string | No | The screen reader label for the mobile navigation menu. Defaults to the same value as `menuButtonText` if not specified. |
| `navigationId` | string | No | The ID used to associate the mobile navigation toggle with the navigation menu. Defaults to `navigation`. |
| `navigationClasses` | string | No | Classes to add to the navigation menu container. |
| `collapseNavigationOnMobile` | boolean | No | Whether the navigation should be collapsed inside a menu on mobile. Defaults to true if there is more than one navigation item. |
| `serviceName` | string | No | The name of your service. |
| `serviceUrl` | string | No | The homepage of your service. |
| `navigation` | array | Yes | Used to add navigation to the service header. |
| `navigation[].current` | boolean | No | If `true`, indicates that the user is currently on this page. This takes precedence over `active`. |
| `navigation[].active` | boolean | No | If `true`, indicates that the user is within this group of pages in the navigation hierarchy. |
| `navigation[].html` | string | Yes | HTML for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation[].text` | string | Yes | Text for the navigation item. If `html` is provided, the `text` option will be ignored. |
| `navigation[].href` | string | No | URL of the navigation item anchor. |
| `navigation[].attributes` | object | No | HTML attributes (for example data attributes) to add to the navigation item anchor. |
| `slots` | object | No | Specified points for injecting custom HTML into the service header. |
| `slots.start` | string | No | HTML injected at the start of the service header container. |
| `slots.end` | string | No | HTML injected at the end of the service header container. |
| `slots.end` | object | No | Options for injecting HTML at the end of the service header container. |
| `slots.end.html` | string | No | HTML injected at the end of the service header container. |
| `slots.end.align` | string | No | By default, the `end` slot renders below the navigation items. Use `inline` to render it on the same line as the navigation items when space is available. |
| `slots.navigationStart` | string | No | HTML injected before the first list item in the navigation list. Requires `navigation` to be set. |
| `slots.navigationEnd` | string | No | HTML injected after the last list item in the navigation list. Requires `navigation` to be set. |

### Examples

#### Default

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2"
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

Renders as:

```html
<div class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
      <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      

      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden aria-hidden="true">
            Menu
          </button>

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">
                                    
Navigation item 1
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/2">
                                    
Navigation item 2
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/3">
                                    
Navigation item 3
                  </a>
              </li>

              
              <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/4">
                                    
Navigation item 4
                  </a>
              </li>

            </ul>
        </nav>
    </div>

    </div>

  </div>
```

#### With navigation with a current item

The current item indicates that the user is present on that exact page. It looks the same as an active item, but marks this item as the one the user is currently viewing in ARIA.

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      current: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

#### With large navigation

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/browse/benefits",
      text: "Benefits"
    },
    {
      href: "#/browse/births-deaths-marriages",
      text: "Births, deaths, marriages and care"
    },
    {
      href: "#/browse/business",
      text: "Business and self-employed"
    },
    {
      href: "#/browse/childcare-parenting",
      text: "Childcare and parenting"
    },
    {
      href: "#/browse/citizenship",
      text: "Citizenship and living in the UK"
    },
    {
      href: "#/browse/justice",
      text: "Crime, justice and the law"
    },
    {
      href: "#/browse/disabilities",
      text: "Disabled people"
    },
    {
      href: "#/browse/driving",
      text: "Driving and transport"
    },
    {
      href: "#/browse/education",
      text: "Education and learning"
    },
    {
      href: "#/browse/employing-people",
      text: "Employing people"
    },
    {
      href: "#/browse/environment-countryside",
      text: "Environment and countryside"
    },
    {
      href: "#/browse/housing-local-services",
      text: "Housing and local services"
    },
    {
      href: "#/browse/tax",
      text: "Money and tax"
    },
    {
      href: "#/browse/abroad",
      text: "Passports, travel and living abroad"
    },
    {
      href: "#/browse/visas-immigration",
      text: "Visas and immigration"
    },
    {
      href: "#/browse/working",
      text: "Working, jobs and pensions"
    }
  ]
}) }}
```

#### With HTML navigation items

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "#/1",
      html: "<em>Navigation item 1</em>"
    },
    {
      href: "#/2",
      html: "<em>Navigation item 2</em>"
    },
    {
      href: "#/3",
      html: "<em>Navigation item 3</em>"
    }
  ]
}) }}
```

#### With non link navigation items

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      text: "Navigation item 1"
    },
    {
      html: "<em>Navigation item 2</em>"
    },
    {
      text: "Navigation item 3"
    }
  ]
}) }}
```

#### With service name

```njk
{{ govukServiceNavigation({
  serviceName: "Service name"
}) }}
```

#### With service link

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#/"
}) }}
```

#### With long service name

```njk
{{ govukServiceNavigation({
  serviceName: "Apply to receive a rare holofoil Charizard Pokémon card from the King",
  serviceUrl: "#/"
}) }}
```

#### With service name and navigation

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

#### Inverse

Service navigation that appears sandwiched between other areas of brand blue, such as the GOV.UK header and a custom page masthead.

```njk
{{ govukServiceNavigation({
  classes: "govuk-service-navigation--inverse",
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ]
}) }}
```

#### With collapseNavigationOnMobile set to false

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ],
  collapseNavigationOnMobile: false
}) }}
```

#### With a single navigation item

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Log out"
    }
  ]
}) }}
```

#### With a single navigation item and collapseNavigationOnMobile set to true

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Log out"
    }
  ],
  collapseNavigationOnMobile: true
}) }}
```

#### With language navigation

HTML rendered by the language navigation component can be injected into the `end` slot of the service header.

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1",
      active: true
    },
    {
      href: "#/2",
      text: "Navigation item 2"
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    }
  ],
  slots: {
    end: "<nav class=\"govuk-language-navigation\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
  }
}) }}
```

#### With right aligned language navigation

HTML rendered by the language navigation component can be injected into the `end` slot of the service header.

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1",
      active: true
    },
    {
      href: "#/2",
      text: "Navigation item 2"
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    }
  ],
  slots: {
    end: {
      align: "inline",
      html: "<nav class=\"govuk-language-navigation\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
    }
  }
}) }}
```

#### Inverse with language navigation

Service navigation that appears sandwiched between other areas of brand blue, such as the GOV.UK header and a custom page masthead.

```njk
{{ govukServiceNavigation({
  classes: "govuk-service-navigation--inverse",
  serviceName: "Apply for a juggling license",
  serviceUrl: "#/",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    },
    {
      href: "#/2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#/3",
      text: "Navigation item 3"
    },
    {
      href: "#/4",
      text: "Navigation item 4"
    }
  ],
  slots: {
    end: "<nav class=\"govuk-language-navigation govuk-language-navigation--inverse\" aria-label=\"Language navigation\">\n  <ul class=\"govuk-language-navigation__list\">\n    <li class=\"govuk-language-navigation__list-item\">\n      <span class=\"govuk-language-navigation__text\" lang=\"en\" aria-current=\"true\">English</span>\n    </li>\n    <li class=\"govuk-language-navigation__list-item\">\n      <a class=\"govuk-language-navigation__link\" href=\"#/cy\" lang=\"cy\" hreflang=\"cy\" rel=\"alternate\">Cymraeg</a>\n    </li>\n  </ul>\n</nav>"
  }
}) }}
```

#### With `inline` end slot

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  navigation: [
    {
      href: "#/1",
      text: "Navigation item 1"
    }
  ],
  slots: {
    end: {
      html: "<div>[end]</div>",
      align: "inline"
    }
  }
}) }}
```

---
