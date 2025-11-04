# GOV.UK Design System Components

## Table of Contents

- [Accordion](#accordion)
- [Back Link](#back-link)
- [Breadcrumbs](#breadcrumbs)
- [Button](#button)
- [Character Count](#character-count)
- [Checkboxes](#checkboxes)
- [Cookie Banner](#cookie-banner)
- [Date Input](#date-input)
- [Details](#details)
- [Error Message](#error-message)
- [Error Summary](#error-summary)
- [Exit This Page](#exit-this-page)
- [Fieldset](#fieldset)
- [File Upload](#file-upload)
- [Footer](#footer)
- [Header](#header)
- [Inset Text](#inset-text)
- [Notification Banner](#notification-banner)
- [Pagination](#pagination)
- [Panel](#panel)
- [Password Input](#password-input)
- [Phase Banner](#phase-banner)
- [Radios](#radios)
- [Select](#select)
- [Service Navigation](#service-navigation)
- [Skip Link](#skip-link)
- [Summary List](#summary-list)
- [Table](#table)
- [Tabs](#tabs)
- [Tag](#tag)
- [Task List](#task-list)
- [Text Input](#text-input)
- [Textarea](#textarea)
- [Warning Text](#warning-text)

---

## Accordion {#accordion}

<hr>
<h2>title: Accordion
description: The accordion component lets users show and hide sections of related content on a page
section: Components
aliases:
backlogIssueId: 1
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>The accordion component lets users show and hide sections of related content on a page.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;accordion&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Only use an accordion if there&#39;s evidence it’s helpful for the user to:</p>
<ul>
<li>see an overview of multiple, related sections of content</li>
<li>choose to show and hide sections that are relevant to them</li>
<li>look across information that might otherwise be on different pages</li>
</ul>
<p>For example, an accordion can work well if the user needs to reveal and compare information that’s relevant to them.</p>
<p>Accordions can also work well for people who use a service regularly. For example, users of caseworking systems who need to do familiar tasks quickly.</p>
<p>Test with users to decide if using an accordion outweighs the potential problems with hiding content.</p>
<h2>When not to use this component</h2>
<p>Accordions hide content from the user. Not all users will notice them or understand how they work. For this reason, you should only use them in specific situations and if user research supports it.</p>
<p>Do not use an accordion for content that all users need to see.</p>
<p>Test your content without an accordion first. Well-written and structured content, as shown in the <a href="https://www.gov.uk/guidance/content-design/writing-for-gov-uk">Content design: writing for GOV.UK</a> guidance, can remove the need to use an accordion.</p>
<p>It’s usually better to:</p>
<ul>
<li>simplify and reduce the amount of content</li>
<li>split the content across multiple pages</li>
<li>keep the content on a single page, separated by headings</li>
<li>use a list of links at the start of the page (known as &#39;anchor links&#39;) to take the user to particular sections of a page</li>
</ul>
<p>Accordions work best for simple content and links. Do not use accordions to split up a series of questions. Use separate pages instead.</p>
<p>Do not put accordions within accordions, as it will make content difficult to find.</p>
<p>Do not use the accordion component if the amount of content inside will make the page slow to load.</p>
<h2>Decide between using accordions, tabs and details</h2>
<p>The Accordion component, <a href="/components/tabs/">Tabs component</a> and <a href="/components/details/">Details component</a> all work by hiding sections of content which a user can choose to reveal. Avoid using any of these components within one another.</p>
<p>If you decide to use one of these components, consider if:</p>
<ul>
<li>the user needs to look at more than one section at a time – an accordion can show multiple sections at a time, unlike tabs</li>
<li>the user needs to switch quickly between sections – tabs can show content without pushing other sections down the page, unlike accordions</li>
<li>there are many sections of content – accordions can fit more sections as they’re arranged vertically, unlike tabs which are arranged horizontally</li>
<li>there’s only one or two pieces of short, less important content – the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs</li>
</ul>
<h2>How it works</h2>
<p>There are 2 ways to use the accordion component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.</p>
<p>The accordion component uses JavaScript. When JavaScript is not available, users will see all the content displayed with the section labels as headings.</p>
<p>If you are using HTML, you must add an &#39;id&#39; attribute to the <code>&lt;div&gt;</code> tag with the <code>govuk-accordion</code> class. It must be unique across the service&#39;s domain to maintain the persistent expanded state of the accordion.</p>
<h3>Section heading buttons</h3>
<p>An accordion will usually start with all sections hidden. To show a section, the user can interact anywhere in the heading button.</p>
<p>The heading button includes all of these areas:</p>
<ul>
<li>heading text</li>
<li>summary line (if you decide to add one)</li>
<li>call-to-action text to &#39;show&#39; or &#39;hide&#39;</li>
</ul>
<p>For users of screen readers, all the text in the button will be read as a single statement (separated by commas to allow for slight pauses). There’s also some visually hidden content in the heading text to help announce the call-to-action as &#39;show this section&#39; or &#39;hide this section&#39;.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;accordion&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h4>Write clear button text</h4>
<p>Write the heading and summary line like any other button text. Use sentence case, describe the content that will show, and keep it short.</p>
<p>Users of screen readers might find it difficult to navigate the accordion if the button text is too long.</p>
<p>If you struggle to come up with clear button text, it might be because the way you’ve separated the content is not clear. Organise sections in a way that makes sense to users, based on their needs.</p>
<h4>Adding a summary line</h4>
<p>Only add a summary line if it’s actually needed, as it&#39;s likely to make the button text too long.</p>
<p>If you’ve decided that you need the summary line, you must make it as short as possible.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;accordion&quot;, example: &quot;with-summary-section&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<h4>Structure section headings with the rest of the page</h4>
<p>The accordion component shows section headings as <code>&lt;h2&gt;</code> headings. If needed, change the heading level of the section headings to make them fit within the other headings on the page.</p>
<h3>Starting with sections open</h3>
<p>Users might need some sections to be open from the start. If they leave and then return to the page, they might also need sections they opened to stay open.</p>
<p>By default, if the user leaves and then returns to the page within the same page session, the accordion component will use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage">&#39;session storage&#39;</a> to remember which sections were open. This functionality can be turned off by adding <code>rememberExpanded: false</code> to the Nunjucks macro.</p>
<p>To see the changes you&#39;ve made, you may need to create a new &#39;session&#39;. For example, by opening a page in a new tab or window.</p>
<p>Add the <code>govuk-accordion__section--expanded</code> class to the <code>govuk-accordion__section</code> <code>div</code> to make individual sections open from the start. You can also do this using nunjucks macro options, if you are using the nunjucks macro by setting the <code>expanded</code> option to <code>true</code> on the individual accordion items you want to be expanded.</p>
<p>You can configure sections to start and stay open, but not stay closed.</p>
<h3>Do not disable sections</h3>
<p>Disabling controls is normally confusing for users. If there is no content for a section, either remove the section or, if this would be confusing for your users, explain why there is no content when the section is opened.</p>
<h2>Research on this component</h2>
<p>We updated this component in December 2021 to solve an accessibility issue where the buttons and section labels might be mistaken for links.</p>
<p><a href="https://github.com/alphagov/govuk-design-system-backlog/issues/1#issuecomment-995675898">Read about the research and development that went into improving the accordion component</a>.</p>
<p>The team made sure the component is accessible, for example that users can interact with it using just the keyboard.</p>
<h3>Users that navigate using ‘elements lists’</h3>
<p>We need to find out more about users that navigate using ‘elements lists’ of headings, buttons, links and other elements – such as users of speech recognition software and partially-sighted users of screen readers.</p>
<p>For these users, it might not be clear enough that the section headings are considered buttons. This could mislead them to navigate (less efficiently) using the show or hide labels.</p>
<p>While this experience is inconvenient at first, it&#39;s likely the user will better understand the button area once they interact with it and see its focus state. <a href="https://github.com/alphagov/govuk-frontend/issues/2295#issuecomment-906449543">See ‘Testing with Dragon’ in the accessibility clinic summary</a>.</p>
<p>We want to hear about any user research done in this area so we can identify potential issues.</p>
<h3>Known issues and gaps</h3>
<p>Adding a summary line with more than a few short words will likely make the button text too long, particularly for users of screen readers.</p>
<p>We need to better understand when service teams use summary lines and how this affects users of screen readers. <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/1">Share your findings and research with us</a>.</p>
<p>We want to get feedback to inform us what to do next.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Accordion
layout: layout-example.njk
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

{{ govukAccordion({
  id: "accordion-default",
  items: [
    {
      heading: {
        text: "Writing well for the web"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Writing well for the web.</p>'
      }
    },
    {
      heading: {
        text: "Writing well for specialists"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Writing well for specialists.</p>'
      }
    },
    {
      heading: {
        text: "Know your audience"
      },
      content: {
        html: '<p class="govuk-body">This is the content for Know your audience.</p>'
      }
    },
    {
      heading: {
        text: "How people read"
      },
      content: {
        html: '<p class="govuk-body">This is the content for How people read.</p>'
      }
    }
  ]
}) }}

```

```html
---
title: Accordion
layout: layout-example.njk
---




<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  
    
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-1">
          Writing well for the web
        </span>
      </h2>
      
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content">
    
      <p class="govuk-body">This is the content for Writing well for the web.</p>
    
    </div>
  </div>

  
    
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-2">
          Writing well for specialists
        </span>
      </h2>
      
    </div>
    <div id="accordion-default-content-2" class="govuk-accordion__section-content">
    
      <p class="govuk-body">This is the content for Writing well for specialists.</p>
    
    </div>
  </div>

  
    
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-3">
          Know your audience
        </span>
      </h2>
      
    </div>
    <div id="accordion-default-content-3" class="govuk-accordion__section-content">
    
      <p class="govuk-body">This is the content for Know your audience.</p>
    
    </div>
  </div>

  
    
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-4">
          How people read
        </span>
      </h2>
      
    </div>
    <div id="accordion-default-content-4" class="govuk-accordion__section-content">
    
      <p class="govuk-body">This is the content for How people read.</p>
    
    </div>
  </div>

  
</div>


```

## Back Link {#back-link}

<hr>
<h2>title: Back link
description: Use the back link component to help users go back to the previous page in a multi-page transaction
section: Components
aliases: return link, back button
backlogIssueId: 32
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use the back link component to help users go back to the previous page in a multi-page transaction.</p>
<p>Although browsers have a back button, some sites break when you use it - so many users avoid it, instead of losing their progress in a service. Also, not all users are aware of the back button.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;back-link&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Always include the Back link component on GOV.UK <a href="/patterns/question-pages/">Question pages in your service</a>.</p>
<p>You can include a back link on other pages within a multi-page transaction, if it makes sense to do so.</p>
<h2>When not to use this component</h2>
<p>Never use the back link component together with the <a href="/components/breadcrumbs/">Breadcrumbs component</a>. If necessary, you should do research with your users to learn which they find more helpful in your service.</p>
<h2>How it works</h2>
<p>Always place back links at the top of a page, before the <code>&lt;main&gt;</code> element. Placing them here means that the &#39;Skip to main content&#39; link allows the user to skip all navigation links, including the back link.</p>
<p>Make sure the link takes users to the previous page they were on, in the state they last saw it.</p>
<p>Where possible, ensure the back link works even when JavaScript is not available. If this is not possible, you should hide the back link when JavaScript is not available.</p>
<p>There are 2 ways to use the back link component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;back-link&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<p>Using the default link text (&#39;Back&#39;) is ideal for services with a simple journey. For example, <a href="https://www.gov.uk/apply-national-insurance-number">applying for a National Insurance number</a>. Users will only ever go back to the previous page in the service.</p>
<p>For more complex user journeys, consider using different link text, like &#39;Go back to [page]&#39;. For example, in an admin system with many different areas. In this case, if you used &#39;Back&#39;, it might not be clear to users what they are going back to.</p>
<h3>Back links on dark backgrounds</h3>
<p>Use the <code>govuk-back-link--inverse</code> modifier class to show a white link on a dark background – for example, in headers, custom components, and patterns with darker backgrounds.</p>
<p>Make sure all users can see the back link – the background colour must have a contrast ratio of at least 4.5:1 with white to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;back-link&quot;, example: &quot;inverse&quot;, html: true, nunjucks: true, open: false }) }}</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Back link
layout: layout-example.njk
---

{% from "govuk/components/back-link/macro.njk" import govukBackLink %}

{{ govukBackLink({
  text: "Back",
  href: "#"
}) }}

```

```html
---
title: Back link
layout: layout-example.njk
---



<a href="#" class="govuk-back-link">Back</a>


```

## Breadcrumbs {#breadcrumbs}

<hr>
<h2>title: Breadcrumbs
description: Help users orientate themselves and navigate pages within a hierarchical structure
section: Components
aliases: navigation path, cookie crumb
backlogIssueId: 33
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;breadcrumbs&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.</p>
<h2>When not to use this component</h2>
<p>Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.</p>
<p>If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.</p>
<h2>How it works</h2>
<p>Always place breadcrumbs at the top of a page, before the <code>&lt;main&gt;</code> element. Placing them here means that the &#39;Skip to main content&#39; link allows the user to skip all navigation links, including breadcrumbs.</p>
<p>The breadcrumbs should start with your &#39;home&#39; page and end with the parent section of the current page.</p>
<p>There are 2 ways to use the breadcrumbs component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;breadcrumbs&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Collapsing breadcrumbs on mobile devices</h3>
<p>If you have long breadcrumbs you can configure the component to only show the first and last items on mobile devices.</p>
<p>To do this, add a <code>govuk-breadcrumbs--collapse-on-mobile</code> class to the outer <code>&lt;div&gt;</code> element of the component HTML. Or if you’re using Nunjucks, add <code>collapseOnMobile: true</code> to the Nunjucks macro as shown in this example.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;breadcrumbs&quot;, example: &quot;collapse-mobile&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Breadcrumbs on dark backgrounds</h3>
<p>Use the <code>govuk-breadcrumbs--inverse</code> modifier class to show white links and arrows on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.</p>
<p>Make sure all users can see the breadcrumbs – the background colour must have a contrast ratio of at least 4.5:1 with white to <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;breadcrumbs&quot;, example: &quot;inverse&quot;, html: true, nunjucks: true, open: false }) }}</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Breadcrumbs
layout: layout-example.njk
---

{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Passports, travel and living abroad",
      href: "#"
    },
    {
      text: "Travel abroad",
      href: "#"
    }
  ]
}) }}

```

```html
---
title: Breadcrumbs
layout: layout-example.njk
---



<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">

  
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Home</a>
    </li>
  

  
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Passports, travel and living abroad</a>
    </li>
  

  
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="#">Travel abroad</a>
    </li>
  

  </ol>
</nav>


```

## Button {#button}

<hr>
<h2>title: Button
description: Use the button component to help users carry out an action
section: Components
aliases:
backlogIssueId: 34
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the button component to help users carry out an action like starting an application or saving their information.</p>
<h2>How it works</h2>
<p>Write button text in sentence case, describing the action it performs. For example:</p>
<ul>
<li>‘Start now’ at the <a href="/patterns/start-using-a-service/">start of your service</a></li>
<li>‘Sign in’ to an account a user has already created</li>
<li>‘Continue’ when the service does not save a user’s information</li>
<li>‘Save and continue’ when the service does save a user’s information</li>
<li>‘Save and come back later’ when a user can save their information and come back later</li>
<li>‘Add another’ to add another item to a list or group</li>
<li>‘Pay’ to make a payment</li>
<li>‘Confirm and send’ on a <a href="/patterns/check-answers/">Check answers page</a> that does not have any legal content a user must agree to</li>
<li>‘Accept and send’ on a <a href="/patterns/check-answers/">Check answers page</a> that has legal content a user must agree to</li>
<li>‘Sign out’ when a user is signed in to an account</li>
</ul>
<p>You may need to include more or different words to better describe the action. For example, ‘Add another address’ and ‘Accept and claim a tax refund’.</p>
<p>Align the primary action button to the left edge of your form.</p>
<p>There are 2 ways to use the Button component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<h3>Default buttons</h3>
<p>Use a default button for the main call to action on a page.</p>
<p>Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Start buttons</h3>
<p>Use a start button for the main call to action on <a href="/patterns/start-using-a-service/">your service’s Start page</a>.
Start buttons do not usually submit form data, so use a link tag instead of a button tag.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;start&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Secondary buttons</h3>
<p>Use secondary buttons for secondary calls to action on a page.</p>
<p>Pages with too many calls to action make it hard for users to know what to do next. Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;secondary&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>You can also <a href="#grouping-buttons">group default and secondary buttons together</a>.</p>
<h3>Warning buttons</h3>
<p>Warning buttons are designed to make users think carefully before they use them. They only work if used very sparingly. Most services should not need one.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;warning&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account.</p>
<p>When letting users carry out an action like this, it&#39;s a good idea to include an additional step which asks them to confirm it.</p>
<p>In this instance, use another style of button for the initial call to action, and a warning button for the final confirmation.</p>
<p>Do not only rely on the red colour of a warning button to communicate the serious nature of the action. This is because not all users will be able to see the colour or will understand what it signifies. Make sure the context and button text make clear what will happen if the user selects it.</p>
<h3>Buttons on dark backgrounds</h3>
<p>Use the <code>govuk-button--inverse</code> modifier class to show white buttons on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.</p>
<p>Make sure all users can see the button – the white button and background colour must have a contrast ratio of at least 4.5:1 to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;inverse&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Disabled buttons</h3>
<p>Disabled buttons have poor contrast and can confuse some users, so avoid them if&nbsp;possible.</p>
<p>Only use disabled buttons if research shows it makes the user interface easier to&nbsp;understand.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;disabled&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Grouping buttons</h3>
<p>Use a button group when two or more buttons are placed together.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;secondary-combo&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>Any links within a button group will automatically align with the buttons.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;button-group&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Stop users from accidentally sending information more than once</h3>
<p>Sometimes, users double click buttons because they:</p>
<ul>
<li>have used operating systems where they have to double click items to make them work</li>
<li>are experiencing a slow connection which means they are not given feedback on their action quickly enough</li>
<li>have motor impairments such as hand tremors which cause them to click the button involuntarily</li>
</ul>
<p>In some cases, this can mean their information is sent twice.</p>
<p>For example, the GOV.UK Notify team discovered that a number of users were receiving invitations twice, because the person sending them was double clicking the &#39;send&#39; button.</p>
<p>If you are working in production and research shows that users are frequently sending information twice, you can configure the button to ignore the second click.</p>
<p>To do this, set the <code>data-prevent-double-click</code> attribute to <code>true</code>. You can do this directly in the HTML or, if you’re using Nunjucks, you can use the Nunjucks macro as shown in this example.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;button&quot;, example: &quot;prevent-double-click&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>This feature will prevent double clicks for users that have JavaScript enabled, however you should also think about the issue server-side to protect against attacks.</p>
<p>In the case of slow connections, aim to give the user information about what’s happening, for example, by showing a loading spinner or a modal, before using <code>data-prevent-double-click</code>.</p>
<h2>Research on this component</h2>
<p>Testing on GOV.UK has shown that <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/34#issuecomment-699537400">the green colour of start buttons has improved click-through rates</a>.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Button
layout: layout-example-form.njk
---

{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Save and continue"
}) }}

```

```html
---
title: Button
layout: layout-example-form.njk
---




  
    
  

<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>


```

## Character Count {#character-count}

<hr>
<h2>title: Character count
description: Tell users how many characters or words they can enter into a textarea
section: Components
aliases: word count
backlogIssueId: 67
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Help users know how much text they can enter when there is a limit on the number of characters.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;character-count&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Always test your service without a character count first.</p>
<p>Only use the character count component when there is a good reason for limiting the number of characters users can enter. For example, if there is:</p>
<ul>
<li>evidence that users are likely to enter more information than they need to</li>
<li>a legal or technical reason that means an entry must be no more than a certain number of characters</li>
</ul>
<h2>When not to use this component</h2>
<p>If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.</p>
<h2>How it works</h2>
<p>It tells users how many characters they have remaining as they type into a <a href="/components/textarea/">Textarea component</a> with a character limit.</p>
<p>Users will get updates at a pace that works best for the way they interact with the textarea. This means:</p>
<ul>
<li>sighted users will see a count message that updates as they type</li>
<li>screen reader users will hear the count announcement when they stop typing.</li>
</ul>
<p>This component does not restrict the user from entering information. The user can enter more than the character limit, but are told they&#39;ve entered too many characters. This lets them type or copy and paste their full answer, then edit it down.</p>
<p>The count message appears below the textarea so that:</p>
<ul>
<li>it’s clearly separate from any hint text or error message above the textarea</li>
<li>if it’s below the visible screen area, users will still see it again when they scroll down to send their response</li>
</ul>
<p>This component uses JavaScript. If JavaScript is not available, users will see a static message in place of the count message, telling them how many characters they can enter.</p>
<p>There are 2 ways to use the character count component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;character-count&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h3>If you’re asking more than one question on the page</h3>
<p>If you&#39;re asking more than one question on the page, do not set the contents of the <code>&lt;label&gt;</code> as the page heading. Read more about <a href="/patterns/question-pages/#asking-multiple-questions-on-a-page">asking multiple questions on Question pages</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;character-count&quot;, example: &quot;without-heading&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Consider if a word count is more helpful</h3>
<p>In some cases it may be more helpful to show a word count. For example, if your question requires a longer answer.</p>
<p>Do this by setting <code>data-maxwords</code> in the component markup. For example, <code>data-maxwords=&quot;150&quot;</code> will set a word limit of 150.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;character-count&quot;, example: &quot;word-count&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Avoid narrow limits</h3>
<p>When using a character count, try to set the limit higher than most users will need. Find out what this is by doing user research and data analysis.</p>
<h4>If the limit is far higher than users are likely to reach</h4>
<p>You can choose to display a character count message when the length of text within the textarea passes a certain &#39;threshold&#39; of characters. This is useful when a character limit is needed due to the technical limitations of the service, but users are unlikely to reach that limit.</p>
<p>To do this, set the threshold in the component markup as a percentage. For example, <code>data-threshold=&quot;75&quot;</code> will show the count message only when the user has entered a length of text that&#39;s 75% of the limit or more.</p>
<p>Screen reader users will hear the character limit when they first interact with a textarea using the threshold option. Sighted users will not see anything until the count message is shown – though you might choose to include the character limit in the hint text.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;character-count&quot;, example: &quot;threshold&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Error messages</h3>
<p>Error messages should be styled like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;character-count&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>If a user tries to send their response with too many characters, you must show an error message above the field as well as the count message below it.</p>
<p>The error message tells users what went wrong and how to fix it. The count message provides live feedback and updates as a user types.</p>
<p>The input shows a red border only when the user tries to enter more than the character limit. If the number of characters is within the limit, the input does not show this border even when there&#39;s been an error. We felt it might cause the user difficulty if the border disappeared once they started typing.</p>
<p>Make sure errors follow GOV.UK guidance on <a href="/components/error-message/#be-clear-and-concise">writing error messages</a> and have specific error messages for specific error states.</p>
<h4>If the input is empty</h4>
<p>Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter a summary’.</p>
<h4>If the input is too long</h4>
<p>Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Summary must be 400 characters or less’.</p>
<h2>Research on this component</h2>
<p>In 2017, the Government Digital Service (GDS) <a href="https://github.com/alphagov/govuk-design-system/wiki/Character-count-testing-and-user-research">developed and tested this component</a> in a prototype of the ‘Apply for a temporary event notice’ service. During this research, the component was tested with 17 users, including those with low digital skills and users with disabilities.</p>
<p>In 2022, the GOV.UK Design System team <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/67#issuecomment-1131719459">updated the component to make it more accessible</a>, stopping the character count being announced twice by some screenreaders.</p>
<h3>Known issues and gaps</h3>
<p>In Internet Explorer 11, JAWS will ignore any set threshold and announce the character count, even if the user entered less than the threshold.</p>
<p>In Chrome version 99, JAWS will not announce the hint or character count of a pre-populated textarea. This is a <a href="https://github.com/FreedomScientific/VFO-standards-support/issues/201">known issue for the developer of JAWS</a>.</p>
<p>Also, this component <a href="https://github.com/alphagov/govuk-frontend/issues/1104">counts some characters as multiple characters</a>. For example, emojis and some non-Latin characters.</p>
<h3>Services using this component</h3>
<p>The component is used in a number of services, including the following.</p>
<p><strong>Department for Education</strong><br>
Publish teacher training courses</p>
<p><strong>Government Digital Service</strong><br>
Content publisher application</p>
<h3>Next steps</h3>
<p>More user research is needed to find out:</p>
<ul>
<li>how to decide between a character limit and a word limit</li>
<li>if highlighting characters over the limit in red would be helpful for users</li>
<li>how the component might work with lower as well as upper limits</li>
<li>if enabling a character count on text inputs would be useful</li>
</ul>
<p>If you’ve used this component, get in touch to share your user research findings.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Character count
layout: layout-example-form.njk
---

{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  name: "withHint",
  id: "with-hint",
  maxlength: 200,
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information like your National Insurance number or credit card details"
  }
}) }}

```

```html
---
title: Character count
layout: layout-example-form.njk
---






<div class="govuk-form-group govuk-character-count"
    
        
      
    
        
      
    
    
    
   data-module="govuk-character-count" data-maxlength="200">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="with-hint">
      Can you provide more detail?
    </label>
  </h1>

  
  
  <div id="with-hint-hint" class="govuk-hint">
    Do not include personal or financial information like your National Insurance number or credit card details
  </div>



  <textarea class="govuk-textarea govuk-js-character-count" id="with-hint" name="withHint" rows="5" aria-describedby="with-hint-info with-hint-hint"></textarea>

  <div id="with-hint-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 200 characters
  </div>

</div>


```

## Checkboxes {#checkboxes}

<hr>
<h2>title: Checkboxes
description: Let users select one or more options by using the checkboxes component
section: Components
aliases: check boxes, tickboxes, tick boxes
backlogIssueId: 37
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Let users select one or more options by using the checkboxes component.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the checkboxes component when you need to help users:</p>
<ul>
<li>select multiple options from a list</li>
<li>toggle a single option on or off</li>
</ul>
<h2>When not to use this component</h2>
<p>Do not use the checkboxes component if users can only choose one option from a selection. In this case, use the <a href="/components/radios/">Radios component</a>.</p>
<h2>How it works</h2>
<p>Always position checkboxes to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.</p>
<p>Unlike with radios, users can select multiple options from a list of checkboxes. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.</p>
<p>If needed, add a hint explaining this, for example, &#39;Select all that apply&#39;.</p>
<p>Do not pre-select checkbox options as this makes it more likely that users will:</p>
<ul>
<li>not realise they’ve missed a question</li>
<li>submit the wrong answer</li>
</ul>
<p>Order checkbox options alphabetically by default.</p>
<p>In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for ‘What is your nationality?’ based on population size.</p>
<p>Group checkboxes together in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes them, as shown in the examples on this page. This is usually a question, like ‘How would you like to be contacted?’.</p>
<h3>If you’re asking one question on the page</h3>
<p>If you&#39;re asking just <a href="/patterns/question-pages/#start-by-asking-one-question-per-page">one question per page</a> as recommended, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<p>Read more about <a href="/get-started/labels-legends-headings/">why and how to set legends as headings</a>.</p>
<p>There are 2 ways to use the checkboxes component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>If you’re asking more than one question on the page</h3>
<p>If you&#39;re asking more than one question on the page, do not set the contents of the <code>&lt;legend&gt;</code> as the page heading. Read more about <a href="/patterns/question-pages/#asking-multiple-questions-on-a-page">asking multiple questions on Question pages</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;without-heading&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h3>Checkbox items with hints</h3>
<p>You can add hints to checkbox items to provide additional information about the options.</p>
<p>Keep each hint to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with an item. This could frustrate users if the text is long.</p>
<p>Do not use links in hint text. While screen readers will read out the link text when describing the item, they usually do not tell users the text is a link.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;hint&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Add an option for ‘none’</h3>
<p>When &#39;none&#39; would be a valid answer, give users the option to check a box to say none of the other options apply to them – without this option, users would have to leave all of the boxes unchecked. Giving users this option also makes sure they do not skip the question by accident.</p>
<p>Remember to <a href="/patterns/question-pages/#start-by-asking-one-question-per-page">start by asking one question per page in your service</a>. You might be able to remove the need for a &#39;none&#39; option by asking the user a better question or filtering them out with a ‘filter question’ beforehand. The GOV.UK Service Manual has guidance on <a href="https://www.gov.uk/service-manual/design/designing-good-questions">designing good questions</a>.</p>
<p>Show the ‘none’ option last. Separate it from the other options using a divider. The text is usually the word ‘or’.</p>
<p>Write a label that repeats the key part of the question.</p>
<p>For example, for the question &#39;Will you be travelling to any of these countries?&#39;, say &#39;No, I will not be travelling to any of these countries.&#39;</p>
<p>To enable some JavaScript that unchecks all other checkboxes when the user clicks &#39;None&#39;, add the <code>exclusive</code> behaviour to the &#39;none&#39; checkbox.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;with-none-option&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<p>If JavaScript is unavailable, and a user selects both the ‘none’ checkbox and another checkbox, display an error message.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;with-none-option-in-error&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<h3>Conditionally revealing a related question</h3>
<p>You can ask the user a related question when they select a particular checkbox, so they only see the question when it&#39;s relevant to them.</p>
<p>This might make 2 related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the &#39;Contact me by phone&#39; option.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;conditional-reveal&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<p>Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead.</p>
<p>You should only conditionally reveal questions - do not show or hide anything that is not a question.</p>
<h4>Known issues</h4>
<p>Users are not always notified when a conditionally revealed question is shown or hidden. This fails <a href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html">WCAG 2.2 success criterion 4.1.2 Name, Role, Value</a>.</p>
<p>However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long as it’s kept simple. It confused our test users when we conditionally revealed complicated questions to them.</p>
<p>We’ll keep looking for opportunities to <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/37">learn more about how conditionally revealed questions should be used in services</a>.</p>
<h3>Smaller checkboxes</h3>
<p>Use standard-sized checkboxes in most cases. However, smaller checkboxes work well on pages where it’s helpful to make them less visually prominent.</p>
<p>For example, on a page of search results, the main user need is to see the results. Using smaller checkboxes lets users see and change search filters without distracting them from the main content.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;small&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>Small checkboxes can work well on information dense screens in services designed for repeat use, like caseworking systems.</p>
<p>In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times.</p>
<h3>Error messages</h3>
<p>Error messages should be styled like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;checkboxes&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<p>Make sure errors follow the guidance in the <a href="/components/error-message/">Error message component</a> and have specific error messages for specific error states.</p>
<h4>If nothing is selected and the question has options in it</h4>
<p>Say ‘Select if [whatever it is]’.<br>
For example, ‘Select if you are British, Irish or a citizen of a different country’.</p>
<h4>If nothing is selected and the question does not have options in it</h4>
<p>Say ‘Select [whatever it is]’.<br>
For example, ‘Select your nationality or nationalities’.</p>
<h4>If users check both a &#39;none&#39; checkbox and another checkbox</h4>
<p>Say:</p>
<div class="govuk-inset-text">Select [option label text] or select ‘[none of the above label text]’</div>

<p>For example:</p>
<div class="govuk-inset-text">Select countries you will be travelling to, or select ‘No, I will not be travelling to any of these countries’</div>

<h2>Research on this component</h2>
<p>If you’ve done any user research involving conditionally revealed questions, particularly with users of assistive technologies, <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/37">tell us what you’ve learned by adding a comment to the discussion about this component</a>.</p>
<p>Read a blog post about <a href="https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/">an update to the radios and checkboxes components in 2016</a>.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Checkboxes
layout: layout-example-form.njk
---

{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukCheckboxes({
  name: "waste",
  fieldset: {
    legend: {
      text: "Which types of waste do you transport?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all that apply"
  },
  items: [
    {
      value: "carcasses",
      text: "Waste from animal carcasses"
    },
    {
      value: "mines",
      text: "Waste from mines or quarries"
    },
    {
      value: "farm",
      text: "Farm or agricultural waste"
    }
  ]
}) }}

```

```html
---
title: Checkboxes
layout: layout-example-form.njk
---








<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport?
    </h1>
  
  </legend>
  

  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>


  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    
    
      
  
  
    
    
    
    
    
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="carcasses">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
      
    </div>
    
  

    
      
  
  
    
    
    
    
    
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
      
    </div>
    
  

    
      
  
  
    
    
    
    
    
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
      
    </div>
    
  

    
    
  </div>

</fieldset>

</div>


```

## Cookie Banner {#cookie-banner}

<hr>
<h2>title: Cookie banner
description: Allow users to accept or reject cookies which are not essential to making your service work.
section: Components
aliases: Cookies banner, consent banner, GDPR banner, tracking banner, analytics banner
backlogIssueId: 12
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}
{% from &quot;_callout.njk&quot; import callout %}</p>
<p>Allow users to accept or reject cookies which are not essential to making your service work.</p>
<p>Example of the Cookie banner component showing the <a href="#brand-refresh-of-the-cookie-banner-component">refreshed GOV.UK branding</a>:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<p>Example of the Cookie banner component showing GOV.UK branding before June 2025:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;without-brand-refresh&quot;, html: false, nunjucks: false, open: false, loading: &quot;eager&quot; }) }}</p>
<p>If you use the page template, you&#39;ll also get the Cookie banner without having to add it, as it&#39;s included by default. However, if you want to customise the default Cookie banner, read the <a href="/styles/page-template/#changing-template-content">page template guidance about customising components</a>.</p>
<h2>When to use this component</h2>
<p>Use this component if your service sets any cookies on a user’s device.</p>
<p>Remember, you must:</p>
<ul>
<li>tell users about the cookies your service sets on their device</li>
<li>let users accept or reject any cookies that are not essential to providing your service</li>
</ul>
<p>The term ‘non-essential cookies’ includes:</p>
<ul>
<li>HTML5 local storage</li>
<li>service workers</li>
<li>any other technologies that store files on the user’s device</li>
</ul>
<p>This cookie banner and the <a href="/patterns/cookies-page/">Cookies page pattern</a> are based on the approach to getting cookie consent used on the GOV.UK website.</p>
<p>This component page shows several options for using a cookie banner, based on the types of cookies you’re using in the service. We also tell you what to cover in your cookie banner, with some text examples.</p>
<h3>Before you start</h3>
<p><a href="/patterns/cookies-page/#auditing-and-categorising-your-cookies">Audit and categorise your cookies</a> as shown in the cookies page pattern to help you choose the best option for your service.</p>
<p>You must not take the information on this page as legal advice. Your organisation is responsible and accountable for what they do to comply with data protection legislation, such as:</p>
<ul>
<li>Privacy and Electronic Communications Regulations (PECR)</li>
<li>General Data Protection Regulation (GDPR)</li>
</ul>
<p>Check with your organisation&#39;s privacy expert to see how data protection legislation affects your website and service.</p>
<h2>How it works</h2>
<p>Show the cookie banner every time the user accesses your service until they either:</p>
<ul>
<li>accept or reject cookies using the buttons in the cookie banner</li>
<li>save their cookie preferences on <a href="/patterns/cookies-page/">your service’s Cookies page</a></li>
</ul>
<p>Once the user has accepted or rejected cookies, the cookie banner should:</p>
<ul>
<li>hide the cookie banner message</li>
<li>show a confirmation message – and a &#39;hide&#39; button to let the user close the banner</li>
<li>set a cookie to save the user’s preferences for 1 year</li>
</ul>
<p>Make sure the cookie banner does not:</p>
<ul>
<li>show when the user visits again, once their preferences have been saved</li>
<li>set any non-essential cookies unless the user accepted them on a previous visit</li>
</ul>
<p>Position the cookie banner after the opening <code>&lt;body&gt;</code> tag and before the ’skip to main content‘ link. If you&#39;re using the Nunjucks page template, use the <code>bodyStart</code> block.</p>
<p>Do not make the Cookie banner component ‘sticky’ to the top of the page by using <code>position: fixed</code> or any other method. This is to make sure it does not cover or obscure any content which has a focus applied. This is to comply with <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html">WCAG 2.2 success criterion 2.4.11 Focus not obscured (minimum)</a>.</p>
<h3>Option 1: If you’re only using essential cookies</h3>
<p>You can choose not to have a cookie banner if the service only sets essential or &#39;strictly necessary&#39; cookies, as these do not need user consent.</p>
<p>However, you must tell users that you set essential cookies. You can do this with a cookies page – link to this page in the footer.</p>
<h3>Option 2: If you set non-essential cookies for users (with or without JavaScript)</h3>
<p>You can choose this option if your service sets non-essential cookies on the server – your service may also set non-essential cookies on the client.</p>
<p>To get consent from the user, display the cookie banner inside a form that lets them submit their choice to accept or reject cookies.</p>
<p>All users will be able to see the banner as this approach does not rely on JavaScript.</p>
<p>Here&#39;s an example of a cookie banner inside a form:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;server-side&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>Once the user has accepted or rejected cookies and set their cookie preferences, reload the page to show a confirmation message.</p>
<p>Here&#39;s an example of a confirmation message inside a form:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;server-side-confirmation&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h4>Show the same message to all users</h4>
<p>In the cookie banner, tell the user about all the cookies you’re using in the service – whether they&#39;ve enabled JavaScript or not. This way, you will not need to ask the user to give their consent again on their next visit.</p>
<h4>Help users keep their place using progressive enhancement</h4>
<p>If the user is entering information into a form as part of the service, they might lose their place when they submit their choice to accept or reject cookies.</p>
<p>To help users running JavaScript on their device, you can write some JavaScript code to let them submit their choice and prevent the page from reloading.</p>
<p>Include all possible messages that the user could see in the cookie banner when the page loads. Hide these with the <code>hidden</code> HTML attribute where needed.</p>
<p>Here&#39;s an example of a progressively enhanced cookie banner that includes all possible messages which are hidden using HTML – the cookie banner message is shown using JavaScript to remove the <code>hidden</code> attribute:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;server-side-multiple-messages-question-visible&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>Here&#39;s the same example of a progressively enhanced cookie banner, with the confirmation message shown instead:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;server-side-multiple-messages-confirmation-visible&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Option 3: If you set non-essential cookies, but only using client-side JavaScript</h3>
<p>You can choose to make your banner only work with JavaScript if your service only needs to set non-essential cookies on the client.</p>
<p>When the page loads, the <code>hidden</code> html attribute hides the component, as well as all the cookie banner messages it contains, which the user might otherwise see.</p>
<h4>Show the cookie banner only to users that have enabled JavaScript</h4>
<p>Use JavaScript to show cookie banner messages to users that have not accepted or rejected cookies by removing the <code>hidden</code> attribute as needed.</p>
<p>Write your own JavaScript code so that when the user accepts or rejects cookies, the cookie banner will:</p>
<ul>
<li>hide the cookie message by adding the hidden attribute</li>
<li>show a confirmation message by removing its hidden attribute</li>
<li>give the confirmation message the <code>tabindex=&quot;-1&quot;</code> and <code>role=&quot;alert&quot;</code> attributes – this will allow the element to be focused so assistive technology can read the message</li>
<li>shift focus to the confirmation message</li>
</ul>
<p>Here’s an example:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;client-side&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h4>When the user has accepted cookies</h4>
<p>Show a confirmation message confirming that the user has either accepted or rejected cookies by removing the <code>hidden</code> attribute.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;client-side-accepted&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h4>When the user has rejected cookies</h4>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;client-side-rejected&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h2>What to cover in your cookie banner</h2>
<p>Include the name of the service in the banner heading to help users understand that the cookies you’re talking about are different from the ones set by the main GOV.UK platform.</p>
<p>You’ll need to change the example cookie banner text if your service:</p>
<ul>
<li>allows third parties to set cookies (tell the user that both your organisation and other organisations will be setting cookies)</li>
<li>uses cookies for reasons other than collecting analytics information or remembering the user’s settings</li>
</ul>
<p>Keep the text as short as possible while making sure it’s an accurate description of how you use cookies. For example, if you use more than one ‘functional’ cookie and there’s not enough space to mention what each of them does, you could ask for permission to set cookies so ‘you can use as many of the service’s features as possible’.</p>
<p><a href="/patterns/cookies-page/">See the Cookies page pattern for more advice on writing about cookies</a>.</p>
<h3>If you’re using essential cookies and analytics cookies</h3>
<p>You can use this example text for a service which sets essential and analytics cookies. Analytics cookies are those set by your organisation to collect information about how people are using your digital service.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h3>If you’re using more than one type of non-essential cookie</h3>
<p>You can use this example text for a service that set:</p>
<ul>
<li>essential cookies</li>
<li>analytics cookies</li>
<li>functional cookies to remember the user’s settings but are not essential</li>
</ul>
<p>{{ example({ group: &quot;components&quot;, item: &quot;cookie-banner&quot;, example: &quot;multiple-cookies&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h2>Creating a cookies page</h2>
<p>You’ll need a <a href="/patterns/cookies-page/">Cookies page in your service</a> as well as a cookie banner.</p>
<h2>Brand refresh of the Cookie banner component</h2>
<p>In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.</p>
<p>The updated Cookie banner component uses light blue as the background colour, instead of grey.</p>
<p>To help teams refresh the GOV.UK brand in their services, we released GOV.UK Frontend v5.10.0 (and later fix versions). For teams on earlier versions, we released GOV.UK Frontend v4.10.0</p>
<p>To see more details and how to update, you can read the <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v5.10.0">release notes for GOV.UK Frontend v5.10.0</a> and <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v4.10.0">release notes for GOV.UK Frontend v4.10.0</a>.</p>
<h2>Research on this component</h2>
<p>When the user accepts or rejects cookies, a confirmation message will display. For example, &quot;Your cookie preferences have been saved.&quot; The focus also shifts to this new message.</p>
<p>However, a visible focus indicator does not display around the confirmation message. This is different from the notification banner, which does display a visible focus indicator.</p>
<p>We decided to remove the visible focus indicator from the confirmation message for a few reasons, as:</p>
<ul>
<li>a user cannot interact with it</li>
<li>it&#39;s the first element, at the very top of the page</li>
<li>it displays in place of the cookie message, which is the last thing the user interacted with</li>
</ul>
<p>In this scenario, we assume that a visible focus indicator would be more likely to confuse users than to help them. However, we need more research to prove this.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Cookie banner
layout: layout-example.njk
---

{% from "govuk/components/cookie-banner/macro.njk" import govukCookieBanner %}

{% set html %}
  <p class="govuk-body">We use some essential cookies to make this service work.</p>
  <p class="govuk-body">We’d also like to use analytics cookies so we can understand how you use the service and make improvements.</p>
{% endset %}

{{ govukCookieBanner({
  ariaLabel: "Cookies on [name of service]",
  messages: [
    {
      headingText: "Cookies on [name of service]",
      html: html,
      actions: [
        {
          text: "Accept analytics cookies",
          type: "button"
        },
        {
          text: "Reject analytics cookies",
          type: "button"
        },
        {
          text: "View cookies",
          href: "#"
        }
      ]
    }
  ]
}) }}

```

```html
---
title: Cookie banner
layout: layout-example.njk
---






<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookies on [name of service]">
  
  <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">
          Cookies on [name of service]
        </h2>
        
        <div class="govuk-cookie-banner__content">
          
          <p class="govuk-body">We use some essential cookies to make this service work.</p>
            <p class="govuk-body">We’d also like to use analytics cookies so we can understand how you use the service and make improvements.</p>
          
        </div>
      </div>
    </div>

    
    <div class="govuk-button-group">
    
      
      <button type="button" class="govuk-button" data-module="govuk-button">
        Accept analytics cookies
      </button>
    
      
      <button type="button" class="govuk-button" data-module="govuk-button">
        Reject analytics cookies
      </button>
    
      
      <a class="govuk-link" href="#">View cookies</a>
    
    </div>
    

  </div>
  
</div>


```

## Date Input {#date-input}

<hr>
<h2>title: Date input
description: Use the date input component to help users enter a memorable date
section: Components
aliases:
backlogIssueId: 42
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use the date input component to help users enter a memorable date or one they can easily look up.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;date-input&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the date input component when you’re asking users for a date they’ll already know, or can look up without using a calendar.</p>
<h2>When not to use this component</h2>
<p>Do not use the date input component if users are unlikely to know the exact date of the event you’re asking about.</p>
<p>Read more in the <a href="/patterns/dates/">Ask users for dates pattern</a>.</p>
<h2>How it works</h2>
<p>The date input component consists of 3 fields to let users enter a day, month and year.</p>
<p>The 3 date fields are grouped together in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes them, as shown in the examples on this page. This is usually a question, like ‘What is your date of birth?’.</p>
<p>If you’re asking <a href="/patterns/question-pages/#start-by-asking-one-question-per-page">one question per page in your service</a>, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<p>Read more about <a href="/get-started/labels-legends-headings/">why and how to set legends as headings</a>.</p>
<p>Make sure that any example dates you use in hint text are valid for the question being asked.</p>
<p>Accept month names written out in full or abbreviated form (for example, ‘january’ or ‘jan’) as some users may enter months in this way.</p>
<p>There are 2 ways to use the date input component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;date-input&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<p>Never automatically tab users between the fields of the date input because this can be confusing and may clash with normal keyboard controls.</p>
<h3>If you’re asking more than one question on the page</h3>
<p>If you&#39;re asking more than one question on the page, do not set the contents of the <code>&lt;legend&gt;</code> as the page heading. Read more about <a href="/patterns/question-pages/#asking-multiple-questions-on-a-page">asking multiple questions on question pages</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;date-input&quot;, example: &quot;without-heading&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Use the autocomplete attribute for a date of birth</h3>
<p>Use the <code>autocomplete</code> attribute on the date input component when you&#39;re asking for a date of birth. This lets browsers autofill the information on a user&#39;s behalf if they’ve entered it previously.</p>
<p>To do this, set the <code>autocomplete</code> attribute on the 3 fields to <code>bday-day</code>, <code>bday-month</code> and <code>bday-year</code>. See how to do this in the HTML and Nunjucks tabs in the following example.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;date-input&quot;, example: &quot;date-of-birth&quot;, html: true, nunjucks: true, open: true, size: &quot;s&quot;, id: &quot;default-2&quot; }) }}</p>
<p>If you are working in production you’ll need to do this to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html">WCAG 2.2 success criterion 1.3.5: Identify input purpose, level AA</a>.</p>
<h3>Error messages</h3>
<p>If you’re highlighting the whole date, style all the fields like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;date-input&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>If you’re highlighting just one field - either the day, month or year - only style the field that has an error. The error message must say which field has an error, like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;date-input&quot;, example: &quot;error-single&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>Make sure errors follow the guidance in the <a href="/components/error-message/">Error message component</a> and have specific error messages for specific error states.</p>
<p>If there’s more than one error, show the highest priority error message. In order of priority, show error messages about:</p>
<ul>
<li>missing or incomplete information</li>
<li>information that cannot be correct (for example, the number ‘13’ in the month field)</li>
<li>information that fails validation for another reason</li>
</ul>
<h4>If nothing is entered</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘Enter [whatever it is]’. For example, ‘Enter your date of birth’.</p>
<h4>If the date is incomplete</h4>
<p>Highlight the day, month or year field where the information is missing or incomplete. If more than one field is missing information, highlight the fields the user needs to fill in.<br></p>
<p>Say ‘[whatever it is] must include a [whatever is missing]’.<br></p>
<p>For example, ‘Date of birth must include a month’, ‘Date of birth must include a day and month’ or ‘Year must include 4 numbers’.</p>
<h4>If the date entered cannot be correct</h4>
<p>For example, ‘13’ in the month field cannot be correct.<br></p>
<p>Highlight the day, month or year field with the incorrect information. Or highlight the date as a whole if there’s incorrect information in more than one field, or it&#39;s not clear which field is incorrect.<br></p>
<p>Say ‘[Whatever it is] must be a real date’. For example, ‘Date of birth must be a real date’.</p>
<h4>If the date is in the future when it needs to be in the past</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be in the past’. For example, ‘Date of birth must be in the past’.</p>
<h4>If the date is in the future when it needs to be today or in the past</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be today or in the past’. For example, ‘Date of birth must be today or in the past’.</p>
<h4>If the date is in the past when it needs to be in the future</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be in the future’. For example, ‘The date your course ends must be in the future’.</p>
<h4>If the date is in the past when it needs to be today or in the future</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be today or in the future’. For example, ‘The date your course ends must be today or in the future’.</p>
<h4>If the date must be the same as or after another date</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be the same as or after [date and optional description]’. For example, ‘The date your course ends must be the same as or after 1 September 2017 when you started the course’.</p>
<h4>If the date must be after another date</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be after [date and optional description]’. For example, ‘The day your course ends must be after 1 September 2017’.</p>
<h4>If the date must be the same as or before another date</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be the same as or before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017 when they left school’.</p>
<h4>If the date must be before another date</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be before [date and optional description]’. For example, ‘The date of Gordon’s last exam must be the same as or before 31 August 2017’.</p>
<h4>If the date must be between two dates</h4>
<p>Highlight the date input as a whole.<br></p>
<p>Say ‘[whatever it is] must be between [date] and [date and optional description]’. For example, ‘The date your contract started must be between 1 September 2017 and 30 September 2017 when you were self-employed’.</p>
<h2>Research on this component</h2>
<p><a href="https://github.com/alphagov/govuk-design-system-backlog/issues/42#issuecomment-1119724868">Findings from the Apply for teacher training service</a> showed that hundreds of users were inputting months using full or abbreviated month names and getting an error. They changed the component to accept month names to be consistent with this observed behaviour. Since changing the service the number of errors has dropped dramatically.</p>
<p>Some users with dyscalculia may struggle to convert month names into numbers, but accepting full or abbreviated month names may help these users.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Date input
layout: layout-example-form.njk
---

{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  id: "passport-issued",
  namePrefix: "passport-issued",
  fieldset: {
    legend: {
      text: "When was your passport issued?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  }
}) }}

```

```html
---
title: Date input
layout: layout-example-form.njk
---








  
<div class="govuk-form-group">

  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-hint">
    
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    
      <h1 class="govuk-fieldset__heading">
        When was your passport issued?
      </h1>
    
    </legend>
    
  
    <div id="passport-issued-hint" class="govuk-hint">
      For example, 27 3 2007
    </div>
  
  
    <div class="govuk-date-input" id="passport-issued">
      
      
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
        
        
          <input
            
                
              
            
                
              
            
                
              
            
                
              
            
            
            
            
            
            
            
            
                
              
            
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="text" inputmode="numeric">
        
        </div>
      </div>
      
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
        
        
          <input
            
                
              
            
                
              
            
                
              
            
                
              
            
            
            
            
            
            
            
            
                
              
            
           class="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="text" inputmode="numeric">
        
        </div>
      </div>
      
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
            Year
          </label>
        
        
          <input
            
                
              
            
                
              
            
                
              
            
                
              
            
            
            
            
            
            
            
            
                
              
            
           class="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="text" inputmode="numeric">
        
        </div>
      </div>
      
      
    </div>
  
  </fieldset>

</div>


```

## Details {#details}

<hr>
<h2>title: Details
description: Make a page easier to scan by letting users reveal more detailed information only if they need it
section: Components
aliases: reveal, progressive disclosure, hidden text, show and hide, ShowyHideyThing
backlogIssueId: 44
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Make a page easier to scan by letting users reveal more detailed information only if they need it.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;details&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the details component to make a page easier to scan when it contains information that only some users will need.</p>
<h2>When not to use this component</h2>
<p>Do not use the details component to hide information that the majority of your users will need.</p>
<h2>Decide between using details, accordions and tabs</h2>
<p>The Details component, <a href="/components/accordion/">Accordion component</a>, and <a href="/components/tabs/">Tabs component</a> all hide sections of content which a user can choose to reveal.</p>
<p>Use the details component instead of tabs or an accordion if you only have 1 section of content.</p>
<p>The details component is less visually prominent than tabs and accordions, so tends to work better for content which is not as important to users.</p>
<h2>How it works</h2>
<p>The details component is a short link that shows more detailed help text when a user clicks on it.</p>
<p>There are 2 ways to use the details component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;details&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Write clear link text</h3>
<p>Make the link text short and descriptive so users can quickly work out if they need to click on it.</p>
<h2>Research on this component</h2>
<p>There is <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/44#issuecomment-629122091">evidence that some users avoid clicking the link to show more details</a>, as they think it will take them away from the page.</p>
<p>There are <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/44#issuecomment-628082040">concerns that some users of voice assist software will not be able to interact with the component</a>. Some software might require the user to specifically refer to the link to show more details as a button in order to interact with it.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Details
layout: layout-example.njk
---

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Help with nationality",
  text: "We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post."
}) }}

```

```html
---
title: Details
layout: layout-example.njk
---



<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>


```

## Error Message {#error-message}

<hr>
<h2>title: Error message
description: When there&#39;s a validation error, use an error message to explain what went wrong and how to fix it
section: Components
aliases: validation message
backlogIssueId: 47
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>This guidance is for government teams that build online services. <a href="https://www.gov.uk/">To find information and services for the public, go to GOV.UK</a>.</p>
<p>Follow the <a href="/patterns/validation/">Validation pattern</a> and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-message&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Show an error message next to the field and in the <a href="/components/error-summary/">Error summary component</a> when there is a validation error.</p>
<p>Use standard messages for different components.</p>
<h2>When not to use this component</h2>
<p>Do not use error messages to tell a user that they are not eligible or do not have permission to do something. Or to tell them about a lack of capacity or other problem the user cannot fix - because the problem is with the service rather than with the information the user has provided.</p>
<p>Instead, take the user to a page that explains the problem (for example, telling them why they’re not eligible) and provides useful information about what to do next.</p>
<p>There are separate patterns for:</p>
<ul>
<li><a href="/patterns/problem-with-the-service-pages/">&#39;There is a problem with the service&#39; pages</a></li>
<li><a href="/patterns/page-not-found-pages/">&#39;Page not found&#39; pages</a></li>
<li><a href="/patterns/service-unavailable-pages/">&#39;Service unavailable&#39; pages</a></li>
</ul>
<h2>How it works</h2>
<p>For each error:</p>
<ul>
<li>put the message in red after the question text and hint text</li>
<li>use a red border to visually connect the message and the question it belongs to</li>
<li>if the error relates to a specific field within the question, give it a red border and refer to that field in the error message - for example: &quot;you must enter a year&quot;</li>
</ul>
<p>Do not clear any form fields when showing the Error message component. Keep both passing and failing answers.</p>
<p>Keeping information that caused errors helps users to:</p>
<ul>
<li>see what went wrong</li>
<li>edit their previous answer</li>
<li>avoid re-entering information</li>
</ul>
<p>To help screen reader users, the error message component includes a hidden &#39;Error:&#39; before the error message. These users will hear, for example, &quot;Error: The date your passport was issued must be in the past&quot;.</p>
<p>If your error message is written in another language, you can change the prefix as needed, as shown in this example.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-message&quot;, example: &quot;custom-prefix&quot;, html: true, nunjucks: true, open: true, displayExample: false, size: &quot;s&quot; }) }}</p>
<p>Summarise all errors at the top of the page the user is on using an <a href="/components/error-summary/">Error summary component</a>.</p>
<p>There are 2 ways to use the error message component. You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.</p>
<h3>Legend</h3>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-message&quot;, example: &quot;legend&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h3>Label</h3>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-message&quot;, example: &quot;label&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Match up error messages to labels</h3>
<p>Error messages should directly include language from the question or fieldset label. This helps match up the error message with the relevant form field.</p>
<p>Here are some examples of label and error message pairs.</p>
<p>Example 1:</p>
<ul>
<li>Label: ‘How many hours do you work a week?’</li>
<li>Error message: ‘Enter how many hours you work a week’</li>
</ul>
<p>Example 2:</p>
<ul>
<li>Label: ‘Address line 1’</li>
<li>Error message: ‘Enter address line 1, typically the building and street’</li>
</ul>
<h3>Be clear and concise</h3>
<p>Describe what has happened and tell them how to fix it. The message must be in plain English, use positive language and get to the point.</p>
<p>Do not use:</p>
<ul>
<li>technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’</li>
<li>words like ‘forbidden’, ‘illegal’, ‘you forgot’ and ‘prohibited’</li>
<li>‘please’ because it implies a choice</li>
<li>‘sorry’ because it does not help fix the problem</li>
<li>‘valid’ and ‘invalid’ because they do not add anything to the message</li>
<li>humourous, informal language like ‘oops’</li>
</ul>
<p>Do not give an example in the error message if there is an example on the screen. For example, if you are asking for a National Insurance number and include ‘QQ 12 34 56 C’ as hint text, do not include an example in the error message.</p>
<p>Above all, aim for clarity.</p>
<p>Read the message out loud to see if it sounds like something you would say.</p>
<h3>Be consistent</h3>
<p>Use the same message next to the field and in the <a href="/components/error-summary/">Error summary component</a> so they:</p>
<ul>
<li>look, sound and mean the same</li>
<li>make sense out of context</li>
<li>reduce the cognitive effort needed to understand what has happened</li>
</ul>
<h3>Be specific</h3>
<p>General errors are not helpful to everyone. They do not make sense out of context. Avoid messages like:</p>
<ul>
<li>‘An error occurred’</li>
<li>‘Answer the question’</li>
<li>‘Select an option’</li>
<li>‘Fill in the field’</li>
<li>‘This field is required’</li>
</ul>
<p>Different errors need different messages. For example, text fields may be:</p>
<ul>
<li>empty</li>
<li>too long</li>
<li>too short</li>
<li>using characters that are not allowed</li>
<li>in the wrong format</li>
</ul>
<p>An error for a specific situation is more helpful. It will tell someone what has happened and how to fix it.</p>
<h3>Use instructions and descriptions</h3>
<p>Some errors work better as instructions and some work better as descriptions. For example:</p>
<ul>
<li>‘Enter your first name’ is clearer, more direct and natural than ‘First name must have an entry’</li>
<li>‘Enter a first name that is 35 characters or less’ is wordier, less direct and natural than ‘First name must be 35 characters or less’</li>
<li>‘Enter a date after 31 August 2017 for when you started the course’ is wordier, less direct and natural than ‘Date you started the course must be after 31 August 2017’</li>
</ul>
<p>Use both instructions and descriptions, but use them consistently. For example, use an instruction for empty fields like ‘Enter your name’, but a description like ‘Name must be 35 characters or less’ for entries that are too long.</p>
<h3>Use error message templates</h3>
<p>Use template messages for common errors on:</p>
<ul>
<li><a href="/patterns/addresses/#error-messages">Addresses pattern</a></li>
<li><a href="/components/character-count/#error-messages">Character count component</a></li>
<li><a href="/components/checkboxes/#error-messages">Checkboxes component</a></li>
<li><a href="/components/date-input/#error-messages">Date input component</a></li>
<li><a href="/patterns/email-addresses/#error-messages">Email address pattern</a></li>
<li><a href="/components/file-upload/#error-messages">File upload component</a></li>
<li><a href="/patterns/names/#error-messages">Names pattern</a></li>
<li><a href="/patterns/national-insurance-numbers/#error-messages">National Insurance numbers pattern</a></li>
<li><a href="/components/radios/#error-messages">Radios component</a></li>
<li><a href="/patterns/phone-numbers/#error-messages">Phone numbers pattern</a></li>
<li><a href="/components/text-input/#error-messages">Text input component</a></li>
<li><a href="/components/textarea/#error-messages">Textarea component</a></li>
</ul>
<h3>Track errors</h3>
<p>Find out how often people see them. This will let you:</p>
<ul>
<li>improve content</li>
<li>A/B test variations</li>
<li>redesign a journey</li>
</ul>
<h2>Research on this component</h2>
<p>Error messages designed using this guidance have been tested with all types of users in live services, including tax credits.</p>
<p>Research showed users:</p>
<ul>
<li>understood what went wrong</li>
<li>knew how to fix the problem</li>
<li>were able to recover from the error</li>
</ul>
<p>If you’ve used this component, get in touch to share your user research findings.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Error message
layout: layout-example-form.njk
---

{% from "govuk/components/date-input/macro.njk" import govukDateInput %}

{{ govukDateInput({
  fieldset: {
    legend: {
      text: "When was your passport issued?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  },
  errorMessage: {
    text: "The date your passport was issued must be in the past"
  },
  id: "passport-issued",
  namePrefix: "passport-issued",
  items: [
    {
      classes: "govuk-input--width-2 govuk-input--error",
      name: "day",
      value: "6"
    },
    {
      classes: "govuk-input--width-2 govuk-input--error",
      name: "month",
      value: "3"
    },
    {
      classes: "govuk-input--width-4 govuk-input--error",
      name: "year",
      value: "2076"
    }
  ]
}) }}

```

```html
---
title: Error message
layout: layout-example-form.njk
---








  
<div class="govuk-form-group govuk-form-group--error">

  <fieldset class="govuk-fieldset" role="group" aria-describedby="passport-issued-hint passport-issued-error">
    
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    
      <h1 class="govuk-fieldset__heading">
        When was your passport issued?
      </h1>
    
    </legend>
    
  
    <div id="passport-issued-hint" class="govuk-hint">
      For example, 27 3 2007
    </div>
  
  
    
    
    <p id="passport-issued-error" class="govuk-error-message">
      
      <span class="govuk-visually-hidden">Error:</span> The date your passport was issued must be in the past
      
    </p>
  
    <div class="govuk-date-input" id="passport-issued">
      
      
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-day">
            Day
          </label>
        
        
          <input
            
                
              
            
                
              
            
                
              
            
                
              
            
            
                
              
            
            
            
            
            
            
                
              
            
           class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="passport-issued-day" name="passport-issued-day" type="text" value="6" inputmode="numeric">
        
        </div>
      </div>
      
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-month">
            Month
          </label>
        
        
          <input
            
                
              
            
                
              
            
                
              
            
                
              
            
            
                
              
            
            
            
            
            
            
                
              
            
           class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="passport-issued-month" name="passport-issued-month" type="text" value="3" inputmode="numeric">
        
        </div>
      </div>
      
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="passport-issued-year">
            Year
          </label>
        
        
          <input
            
                
              
            
                
              
            
                
              
            
                
              
            
            
                
              
            
            
            
            
            
            
                
              
            
           class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="passport-issued-year" name="passport-issued-year" type="text" value="2076" inputmode="numeric">
        
        </div>
      </div>
      
      
    </div>
  
  </fieldset>

</div>


```

## Error Summary {#error-summary}

<hr>
<h2>title: Error summary
description: Use an error summary when there is a validation error
section: Components
aliases:
backlogIssueId: 46
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use this component at the top of a page to summarise any errors a user has made.</p>
<p>When a user makes an error, you must show both an error summary and an <a href="/components/error-message/">Error message component</a> next to each answer that contains an error.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-summary&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Always show an error summary when there is a validation error, even if there’s only one.</p>
<h2>How it works</h2>
<p>You must:</p>
<ul>
<li>move keyboard focus to the error summary (the govuk-frontend javascript will do this for you)</li>
<li>include the heading ‘There is a problem’</li>
<li>link to each of the answers that have validation errors</li>
<li>make sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors</li>
</ul>
<p>As well as showing an error summary, follow the <a href="/patterns/validation/">Validation pattern</a> - for example, by adding ‘Error: ’ to the beginning of the page <code>&lt;title&gt;</code> so screen readers read it out as soon as possible.</p>
<p>And <a href="/components/error-message/#be-clear-and-concise">make your error messages clear and concise</a>.</p>
<p>There are 2 ways to use the error summary component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-summary&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Linking from the error summary to each answer</h3>
<p>You must link the errors in the error summary to the answer they relate to.</p>
<p>For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the field.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-summary&quot;, example: &quot;linking&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<p>When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error.</p>
<p>If you do not know which field contains an error, link to the first field.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-summary&quot;, example: &quot;linking-multiple-fields&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<p>For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-summary&quot;, example: &quot;linking-checkboxes-radios&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Where to put the error summary</h3>
<p>Put the error summary at the top of the <code>main</code> container. If your page includes breadcrumbs or a back link, place it below these, but above the <code>&lt;h1&gt;</code>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;error-summary&quot;, example: &quot;full-page-example&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Error summary
layout: layout-example-form.njk
---

{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#"
    },
    {
      text: "The date your passport was issued must be in the past",
      href: "#"
    }
  ]
}) }}

```

```html
---
title: Error summary
layout: layout-example-form.njk
---



<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      
      
        <ul class="govuk-list govuk-error-summary__list">
        
          <li>
          
            <a href="#">Enter your full name</a>
          
          </li>
        
          <li>
          
            <a href="#">The date your passport was issued must be in the past</a>
          
          </li>
        
        </ul>
      
    </div>
  </div>
</div>


```

## Exit This Page {#exit-this-page}

<hr>
<h2>title: Exit this page
description: Give users a way to quickly and safely exit a service, website or application.
section: Components
aliases:
backlogIssueId: 213
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Give users a way to quickly and safely exit a service, website or application.</p>
<p>For service journeys, you must use this component with the <a href="/patterns/exit-a-page-quickly/">Exit a page quickly pattern</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;exit-this-page&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the component on pages with sensitive information that could:</p>
<ul>
<li>put someone at risk of abuse or retaliation</li>
<li>reveal someone’s plans to avoid or escape from harm</li>
</ul>
<p>For example, when a potential victim is using a service to help them leave a domestic abuser.</p>
<p>You can use this component on either:</p>
<ul>
<li>all the pages in a service</li>
<li>parts of the journey with sensitive information</li>
</ul>
<p>You can also use this component for standalone content pages, such as dashboards and guidance.</p>
<h2>When not to use this component</h2>
<p>Do not use this component if the service or content is unlikely to put a user at risk. See the <a href="/patterns/exit-a-page-quickly/">Exit a page quickly pattern</a> for examples of at-risk and sensitive topics.</p>
<p>The &#39;Exit this page&#39; component is a <a href="/components/button/">Button component</a> that has been marked up with addtional CSS and JavaScript functionality, to make it work in a specific way.</p>
<p>Keep in mind that seeing this component might discourage certain users from using your service. If the user does not identify themselves as being at risk, they might see the button on a service and decide it’s not relevant to them.</p>
<h2>How it works</h2>
<p>There are 2 ways to use this component. You can use HTML or, if you&#39;re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.</p>
<h3>Adding the button</h3>
<p>Position the component at the top of your page, above the beginning of the grid (<code>&lt;div class=&quot;govuk-grid-row&quot;&gt;</code>) but still within the width container (<code>&lt;div class=&quot;govuk-width-container&quot;&gt;</code>).</p>
<h3>Choosing a different website to load</h3>
<p>When activated, the component by default will take the user to the <a href="https://www.bbc.co.uk/weather">homepage of BBC Weather</a>. You can change this if there’s a more appropriate site for your users.</p>
<p>Avoid websites that might show personalised pages (such as frequently visited, last visited or suggested links), as this content could put the user at risk.</p>
<h3>Adding the secondary link</h3>
<p>Add the code for the &#39;secondary link&#39; into the layout file of your service. The &#39;secondary link&#39; is an additional <code>govuk-skip-link</code> that works in a similar way. Place it under the page template&#39;s default skip link at the very top of the body.</p>
<p>When the user interacts with the &#39;secondary link&#39;, it will perform the same action as pressing the button to activate Exit this Page.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;exit-this-page&quot;, example: &quot;secondary-link&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<p>The <code>href</code> for the &#39;secondary link&#39; should be the same as the URL used for the button.</p>
<p>The component will still work if the &#39;secondary link&#39; is not added, but it&#39;ll be less accessible overall.</p>
<h2>Consider what to do with user session data</h2>
<p>You’ll need to decide if your service will store the user’s session data after they’ve activated the Exit this page component and left your service.</p>
<p>For example, you could do this in 2 steps:</p>
<ol>
<li>replace the default website link to a URL in your service, that when visited, will clear the user&#39;s session data</li>
<li>redirect the user to another website, such as BBC Weather</li>
</ol>
<h2>Enhancement features</h2>
<p>These features are included in the component and should work automatically, as long as the user has enabled Javascript in their browser. You do not need to do anything to make these work.</p>
<h3>Loading overlay</h3>
<p>The &#39;loading overlay&#39; will appear immediately when the user activates Exit this page.</p>
<p>The overlay helps users with slow connections clear their screen until the browser loads the next page.</p>
<h3>Showing progress for &#39;shift key&#39; presses</h3>
<p>To show the user the number of times they’ve pressed the shift button, there’s a series of 3 progress dots under the button, provided as a visual enhancement. Each time the shift key is pressed, one of the dots will be filled.</p>
<p>The user has 5 seconds to press the shift key 3 times. After that, the sequence and progress dots will reset.</p>
<h2>Accessibility features and considerations</h2>
<p>In addition to the Exit this page button itself, users have 2 other options to activate the component. We&#39;ve tested and iterated both of these options to be accessible, reliable and as discreet as possible for users.</p>
<p>The keyboard option, where the user can press shift 3 times, gives users a discreet way to activate the component, particularly keyboard-only users. We considered options that used a single key press (such as the &#39;esc&#39; key), but we could not be confident that this would not interfere with other user actions.</p>
<p>The &#39;secondary link&#39; option is a hidden link in the tab order of the page. This gives users of assistive technology an easier way to reliably activate the component.</p>
<p>To help users of speech recognition software activate the &#39;secondary link&#39; more discreetly, we considered changing the link text to something else that hid its real purpose.</p>
<p>However, we decided this was more likely to confuse users. We&#39;re also confident about the other ways users can use speech recognition software to activate the &#39;secondary link&#39; without saying the text out loud, such as choosing the link as an item number on a list.</p>
<h2>Research on this component</h2>
<p>The design of this component is based on research with people with a lived experience of domestic abuse and people with accessibility needs, and in consultation with the Ministry of Justice, Department for Work and Pensions and the Scottish Government.</p>
<p>We plan to show more information about how many services use this component.</p>
<h3>Known issues and gaps</h3>
<p>We&#39;ve tested this component mainly with users at risk of domestic abuse. However we&#39;ve not done extensive testing with any other user groups.</p>
<p>Before using this component, you should do research with your users. If you do, we&#39;d welcome any feedback and findings you can share with us.</p>
<p>We&#39;re particularly interested in investigations into how well this component works on static pages of information (&#39;flat content&#39;).</p>
<p>Share your feedback, use cases and research findings on the <a href="https://github.com/alphagov/govuk-design-system/discussions/categories/exit-this-page">Exit this page discussion space on GitHub</a>.</p>
<p>We also share notes about our decisions, work and research in the GitHub discussion space and welcome your feedback on those.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Exit this page
layout: layout-example.njk
---

{% from "govuk/components/exit-this-page/macro.njk" import govukExitThisPage %}

{{ govukExitThisPage() }}

```

```html
---
title: Exit this page
layout: layout-example.njk
---




<div class="govuk-exit-this-page" data-module="govuk-exit-this-page"
>
  <a href="https://www.bbc.co.uk/weather" role="button" draggable="false" class="govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button" data-module="govuk-button"
      
          
        
      
     rel="nofollow noreferrer">
    <span class="govuk-visually-hidden">Emergency</span> Exit this page
  </a>
</div>


```

## Fieldset {#fieldset}

<hr>
<h2>title: Fieldset
description: Use the fieldset component to group related form inputs
section: Components
aliases:
backlogIssueId: 48
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use the fieldset component to group related form inputs.</p>
<h2>When to use this component</h2>
<p>Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when <a href="/patterns/addresses/">asking for an address in your service</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;fieldset&quot;, example: &quot;address-group&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot;, loading: &quot;eager&quot; }) }}</p>
<p>If you’re using the examples or macros for a <a href="/components/radios/">Radios component</a>, <a href="/components/checkboxes/">Checkboxes component</a> or <a href="/components/date-input/">Date input component</a>, the fieldset will already be included.</p>
<h2>How it works</h2>
<p>The first element inside a fieldset must be a <code>legend</code> which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.</p>
<p>If you’re asking just <a href="/patterns/question-pages/#start-by-asking-one-question-per-page">one question per page in your service</a> as recommended, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<p>Read more about <a href="/get-started/labels-legends-headings/">why and how to set legends as headings</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;fieldset&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>On <a href="/patterns/question-pages/">Question pages in your service</a> containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that&nbsp;question.</p>
<p>Include general help text in the legend if it would help the user fill in the form, and you <a href="/components/text-input/#hint-text">cannot write it as hint text</a>. However, try to keep it as short as possible.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Fieldset
layout: layout-example-form.njk
---

{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{{ govukFieldset({
  legend: {
    text: "Legend as page heading",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) }}

```

```html
---
title: Fieldset
layout: layout-example-form.njk
---



<fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      Legend as page heading
    </h1>
  
  </legend>
  

</fieldset>


```

## File Upload {#file-upload}

<hr>
<h2>title: File upload
description: Help users select and upload a file
section: Components
aliases:
backlogIssueId: 49
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>This guidance is for government teams that build online services. <a href="https://www.gov.uk/">To find information and services for the public, go to GOV.UK</a>.</p>
<p>Help users select and upload a file.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;file-upload&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>You should only ask users to upload something if it’s critical to the delivery of your service.</p>
<p>We improved the component in March 2025, so you’ll need to enable the <a href="#using-the-improved-file-upload-component">improved File upload component</a> as a new feature.</p>
<p>Read a blog post about <a href="https://designnotes.blog.gov.uk/2017/02/14/some-design-tips-for-uploading-things/">design tips for helping users upload things</a>.</p>
<h2>How it works</h2>
<p>To upload a file, the user can either:</p>
<ul>
<li>use the ‘Choose file’ button</li>
<li>drag and drop a file into the file upload input area</li>
</ul>
<h3>Let users reuse uploaded files</h3>
<p>Make sure users can easily reuse a previously uploaded file within a single journey, unless doing so would be a major security or privacy concern.</p>
<p>For example, a user might need to upload a photo of their driving licence to prove their identity, and again to prove their address.</p>
<p>You can make it easier for the user to reuse a file by showing it as an option for the user to select so they do not need to upload it again. Consider users on public devices before choosing to make the file available to preview or download.</p>
<p>There are 2 ways to use the file upload component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;file-upload&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Error messages</h3>
<p>Error messages should be styled like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;file-upload&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>Make sure errors follow the guidance in the <a href="/components/error-message/">Error message component</a> and have specific error messages for specific error states.</p>
<h4>If no file has been selected</h4>
<p>Say ‘Select a [whatever they need to select]’.<br>
For example, ‘Select a report’.</p>
<h4>If the file is the wrong file type</h4>
<p>Say ‘The selected file must be a [list of file types]’.<br>
For example, ‘The selected file must be a CSV or ODS’ or ‘The selected file must be a JPG, BMP, PNG, TIF or PDF’.</p>
<h4>If the file is too big</h4>
<p>Say ‘The selected file must be smaller than [largest file size]’.<br>
For example, ‘The selected file must be smaller than 2MB’.</p>
<h4>If the file is empty</h4>
<p>Say ‘The selected file is empty’.</p>
<h4>If the file contains a virus</h4>
<p>Say ‘The selected file contains a virus’.</p>
<h4>If the file is password protected</h4>
<p>Say ‘The selected file is password protected’.</p>
<h4>If there was a problem and the file was not uploaded</h4>
<p>Say ‘The selected file could not be uploaded – try again’.</p>
<h4>If there is a limit on how many files the user can select</h4>
<p>Say ‘You can only select up to [highest number] files at the same time’.<br>
For example, ‘You can only select up to 10 files at the same time’.</p>
<h4>If the file is not in a template that must be used or the template has been changed</h4>
<p>Say ‘The selected file must use the template’.</p>
<h2>Using the improved File upload component</h2>
<p>In March 2025, we introduced changes to the File upload component that service teams can opt in to as part of GOV.UK Frontend 5.9.0.</p>
<p>The improved component is intended to:</p>
<ul>
<li>fix accessibility issues</li>
<li>improve the user experience</li>
<li>allow text in the component to be translated</li>
</ul>
<p>We recommend service teams start using the latest component to improve the experience for users. However, it&#39;s a visual change from the previous component and might affect existing designs and layouts.</p>
<p>To let teams migrate at their own pace, the improvements are only enabled if you use the <code>javascript</code> macro option or extra markup in your HTML.</p>
<p>This example shows you how to enable the improved File upload component:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;file-upload&quot;, example: &quot;enhanced&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h3>Changes in the improved component</h3>
<p>To make it easier for users to drag and drop files, we’ve made the drop zone:</p>
<ul>
<li>bigger</li>
<li>visible at all times</li>
<li>more visually responsive to user interactions</li>
</ul>
<p>We’ve also changed the ‘Choose file’ button to be more consistent with the secondary button in the <a href="/components/button">Button component</a>.</p>
<p>Service teams can change the text on the button and in the ‘No file chosen’ message. We decided to make this text changeable for translation purposes and to let teams be specific about the file to upload. However, teams should aim to keep the text as short as possible for accessibility purposes. For example, screen reader users might find it difficult to use the component if the text is too long.</p>
<p>All the text in the component can now be translated to match the language of the page content when JavaScript is running.</p>
<h4>Improvements for assistive technology users</h4>
<p>Users of Dragon, a speech recognition tool, <a href="https://github.com/alphagov/govuk-frontend/issues/3686">cannot activate their browser’s native file inputs</a> by using commands for interacting with <a href="https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/Web/working_with_chrome.htm?Highlight=click%20button">web page controls</a>. They have to rely on <a href="https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/CommandandControl/using_your_mouse.htm">mouse commands</a> or <a href="https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/CommandandControl/using_your_keyboard.htm">keyboard commands</a>, which take multiple steps to activate the component.</p>
<p>With the improved File upload component, users can say commands for interacting with web page controls to choose files.</p>
<p>However, due to <a href="https://developer.mozilla.org/en-US/docs/Web/Security/User_activation">browser security features</a>, this may not work on subsequent interactions on the same page. If the component needs to be used more than once (for example, to correct a mistake), users will first need to perform another action, such as a mouse click.</p>
<h2>Research on this component</h2>
<p>An accessibility audit has shown some users have encountered a problem when using File upload.</p>
<h3>Known issues and gaps</h3>
<p>The earlier version of the File upload component does not show a visual target area when dragging and dropping a file. The component inherits and uses the browser’s default behaviour. More detail on the findings can be found in the <a href="https://github.com/alphagov/govuk-frontend/issues/3685">GitHub issue: ‘Upload file component has no visual target area when dragging and dropping a file’</a>.</p>
<p>We revisited this issue in March 2025 and have published an improved File upload component to improve accessibility. Although we’re confident the new component is an improvement on the browser’s default behaviour, teams can continue to use the existing component until the next major release, when the new version will be enabled by default.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: File upload
layout: layout-example-form.njk
---

{% from "govuk/components/file-upload/macro.njk" import govukFileUpload %}

{{ govukFileUpload({
  id: "file-upload-1",
  name: "fileUpload1",
  label: {
    text: "Upload a file"
  }
}) }}

```

```html
---
title: File upload
layout: layout-example-form.njk
---







<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>




  <input class="govuk-file-upload" id="file-upload-1" name="fileUpload1" type="file">


</div>


```

## Footer {#footer}

<hr>
<h2>title: GOV.UK footer
description: The footer provides copyright, licensing and other information about your service and department
section: Components
aliases: privacy notice, accessibility statement, terms and conditions
backlogIssueId: 96
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}
{% from &quot;_callout.njk&quot; import callout %}
{%- from &quot;govuk/components/tag/macro.njk&quot; import govukTag -%}</p>
<p>The GOV.UK footer provides copyright, licensing and other information about your service.</p>
<p>Example of the GOV.UK footer component showing the <a href="#brand-refresh-of-the-govuk-footer-component">refreshed GOV.UK branding</a>:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;footer&quot;, example: &quot;default&quot;, id: &quot;default-1&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<p>Example of the GOV.UK footer component showing GOV.UK branding before June 2025:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;footer&quot;, example: &quot;without-brand-refresh&quot;, html: false, nunjucks: false, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<p>If you use the page template, you&#39;ll also get the footer without having to add it, as it&#39;s included by default. However, if you want to customise the default footer, read the <a href="/styles/page-template/#changing-template-content">page template guidance about customising components</a>.</p>
<h2>When to use this component</h2>
<p>Use the footer at the bottom of every page of your service.</p>
<h2>How it works</h2>
<p>Add a copyright notice to the footer to clarify who owns the copyright. For GOV.UK services, add the coat of arms to keep things consistent with the rest of GOV.UK.</p>
<p>Make it clear whether content is available for re-use - and if it is, under what sort of licence. Use an <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence</a> unless you have permission from the National Archives to use a <a href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/open-government-licence/other-licences/">different type of licence</a>.</p>
<h3>Footer without links</h3>
<p>{{ example({ group: &quot;components&quot;, item: &quot;footer&quot;, example: &quot;default&quot;, titleSuffix: &quot;second&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Footer with links</h3>
<p>{{ example({ group: &quot;components&quot;, item: &quot;footer&quot;, example: &quot;with-meta&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h2>Adding links</h2>
<p>You can add links to:</p>
<ul>
<li><a href="https://www.gov.uk/service-manual/design/collecting-personal-information-from-users">your service&#39;s privacy notice</a></li>
<li><a href="https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement">your service&#39;s accessibility statement</a></li>
<li><a href="/patterns/cookies-page/">your service&#39;s Cookies page</a></li>
<li>terms and conditions</li>
<li>other language options</li>
<li>help content</li>
</ul>
<p>Use ‘Privacy’, ‘Accessibility’, ‘Cookies’ and ‘Terms and conditions’ for the link text.</p>
<p>If you include links to ‘help’ pages within the GOV.UK footer component, make sure to place those links consistently within the footer content.</p>
<p>Also make sure that ‘help’ links always function in a similar way across each page. This is to comply with <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html">WCAG 2.2 success criterion 3.2.6 Consistent help</a>.</p>
<h2>Adding secondary navigation</h2>
<p>Only add secondary GOV.UK navigation if you’re creating a GOV.UK service, and you want users to be able to navigate away from the service to somewhere else on the GOV.UK website. For example, you probably don’t want to encourage a user to navigate away from a linear, form-type service.</p>
<h3>Footer with secondary navigation</h3>
<p>{{ example({ group: &quot;components&quot;, item: &quot;footer&quot;, example: &quot;with-navigation&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<h3>Footer with links and secondary navigation</h3>
<p>{{ example({ group: &quot;components&quot;, item: &quot;footer&quot;, example: &quot;full&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<h2>Brand refresh of the GOV.UK footer component</h2>
<p>In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.</p>
<p>The updated GOV.UK footer component:</p>
<ul>
<li>uses a light blue as the background colour, instead of grey</li>
<li>adds a thick blue top border</li>
<li>adds a small crown logo, in addition to the existing coat of arms</li>
</ul>
<p>To help teams refresh the GOV.UK brand in their services, we released GOV.UK Frontend v5.10.0 (and later fix versions). For teams on earlier versions, we released GOV.UK Frontend v4.10.0</p>
<p>To see more details and how to update, you can read the <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v5.10.0">release notes for GOV.UK Frontend v5.10.0</a> and <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v4.10.0">release notes for GOV.UK Frontend v4.10.0</a>.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Footer
layout: layout-example.njk
---

{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({}) }}

```

```html
---
title: Footer
layout: layout-example.njk
---



<footer class="govuk-footer">
  <div class="govuk-width-container">
    
    
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
</footer>


```

## Header {#header}

<hr>
<h2>title: GOV.UK header
description: The GOV.UK header shows users that they are on GOV.UK
section: Components
aliases: GOV.UK masthead
backlogIssueId: 97
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}
{% from &quot;_callout.njk&quot; import callout %}</p>
<p>The GOV.UK header component tells users they’re using a service on GOV.UK and lets them use GOV.UK-wide tools. Also known as the GOV.UK masthead.</p>
<p>Example of the GOV.UK header component showing the <a href="#brand-refresh-of-the-govuk-header-component">refreshed GOV.UK branding</a>:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;header&quot;, example: &quot;default&quot;, id: &quot;default-1&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<p>Example of the GOV.UK header component showing GOV.UK branding before June 2025:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;header&quot;, example: &quot;without-brand-refresh&quot;, html: false, nunjucks: false, open: false, loading: &quot;eager&quot; }) }}</p>
<p>If you use the page template, you&#39;ll also get the GOV.UK header without having to add it, as it&#39;s included by default. However, if you want to customise the default GOV.UK header, read the <a href="/styles/page-template/#changing-template-content">page template guidance about customising components</a>.</p>
<h2>When to use this component</h2>
<p>If your service is being hosted on one of these domains, use the GOV.UK header component:</p>
<ul>
<li>gov.uk/[myservice]</li>
<li>[myservice].service.gov.uk</li>
<li>[myblog].blog.gov.uk</li>
</ul>
<p>You must use the GOV.UK header component at the top of every page. The Service Manual explains why it’s important for you to <a href="https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk">make your service look like GOV.UK</a>.</p>
<h2>When not to use this component</h2>
<p>If your service is not hosted on one of the gov.uk domains outlined, you must not use the GOV.UK header component as it’s not considered part of GOV.UK.</p>
<p>You can still build from this component, but you’ll need to <a href="https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk#if-your-service-isnt-on-govuk">make some changes to make sure users do not confuse your website with GOV.UK</a>.</p>
<h2>How it works</h2>
<p>Together, the GOV.UK header and <a href="/components/service-navigation/">Service navigation component</a> both ensure users get a consistent experience on GOV.UK.</p>
<p>This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.</p>
<p>For guidance on how to plan your header and navigation, see the <a href="/patterns/navigate-a-service">Help users navigate a service pattern</a>.</p>
<h3>Default GOV.UK header</h3>
<p>Most services on GOV.UK should use the default GOV.UK header.</p>
<p>It should only show the GOV.UK logo and any GOV.UK-wide links and tools to help your users. <a href="https://insidegovuk.blog.gov.uk/2021/11/11/launching-gov-uks-new-menu-bar/">Do not add the menu of GOV.UK topic links</a> to your service’s GOV.UK header.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;header&quot;, example: &quot;default&quot;, titleSuffix: &quot;second&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Previous variants of the GOV.UK header</h3>
<p>The GOV.UK header component was originally released with 2 variants:</p>
<ul>
<li>with service name</li>
<li>with service name and navigation</li>
</ul>
<p>These 2 variants will be removed from the GOV.UK header component in the next breaking release of GOV.UK Frontend.</p>
<p>In August 2024, we introduced a separate <a href="/components/service-navigation">Service navigation component</a>. This is to better help users understand that they’re using your service and let them navigate around your service.</p>
<p>We recommend using the Service navigation component to show your service name and navigation links instead of the GOV.UK header, and to start updating existing services.</p>
<p>See the <a href="/patterns/navigate-a-service">Help users navigate a service pattern</a> for more guidance.</p>
<h4>GOV.UK header with service name</h4>
<p>We’ve deprecated the <a href="/components/header/with-service-name">GOV.UK header with service name</a> and will remove this option in the next breaking release of GOV.UK Frontend.</p>
<p>Use the Service navigation component to show your service name instead. We recommend teams to start updating existing services.</p>
<h4>GOV.UK header with navigation</h4>
<p>We’ve deprecated the <a href="/components/header/with-service-name-and-navigation/">GOV.UK header with navigation</a> and will remove this option in the next breaking release of GOV.UK Frontend.</p>
<p>Use the Service navigation component to add navigation links instead.</p>
<h3>GOV.UK header with One Login</h3>
<p>GOV.UK One Login maintains their own header on the <a href="https://www.sign-in.service.gov.uk/documentation/design-recommendations/let-users-navigate-sign-out">Let users navigate to their GOV.UK One Login and sign out easily</a> page.</p>
<h2>Brand refresh of the GOV.UK header component</h2>
<p>In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.</p>
<p>The updated GOV.UK header component:</p>
<ul>
<li>uses blue as the background colour, instead of black</li>
<li>uses a refreshed GOV.UK logo and wordmark lockup</li>
<li>extends to a height of 60px, instead of 50px with a 10px bottom border</li>
</ul>
<p>To help teams refresh the GOV.UK brand in their services, we released GOV.UK Frontend v5.10.0 (and later fix versions). For teams on earlier versions, we released GOV.UK Frontend v4.10.0</p>
<p>To see more details and how to update, you can read the <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v5.10.0">release notes for GOV.UK Frontend v5.10.0</a> and <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v4.10.0">release notes for GOV.UK Frontend v4.10.0</a>.</p>
<h2>Research on this component</h2>
<p>See the <a href="/patterns/navigate-a-service/#research-on-this-pattern">research section in the Help users navigate a service pattern</a> for a summary of our research on the GOV.UK header and navigation, and how you can share your feedback with us.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Header
layout: layout-example.njk
---

{% from "govuk/components/header/macro.njk" import govukHeader %}

{{ govukHeader({
  homepageUrl: "#"
}) }}

```

```html
---
title: Header
layout: layout-example.njk
---



<header class="govuk-header" data-module="govuk-header">
  <div class="govuk-header__container govuk-width-container">
    <div class="govuk-header__logo">
      <a href="#" class="govuk-header__link govuk-header__link--homepage">
        <svg
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 296 60"
            height="30"
            width="148"
            fill="currentcolor" class="govuk-header__logotype" aria-label="GOV.UK"
          ><title>GOV.UK</title>
            <g>
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
            
              <path d="M88.6,33.2c0,1.8.2,3.4.6,5s1.2,3,2,4.4c1,1.2,2,2.2,3.4,3s3,1.2,5,1.2,3.4-.2,4.6-.8,2.2-1.4,3-2.2,1.2-1.8,1.6-3c.2-1,.4-2,.4-3v-.4h-10.6v-6.4h18.8v23h-7.4v-5c-.6.8-1.2,1.6-2,2.2-.8.6-1.6,1.2-2.6,1.8-1,.4-2,.8-3.2,1.2s-2.4.4-3.6.4c-3,0-5.8-.6-8-1.6-2.4-1.2-4.4-2.6-6-4.6s-2.8-4.2-3.6-6.8c-.6-2.8-1-5.6-1-8.6s.4-5.8,1.4-8.4,2.2-4.8,4-6.8,3.8-3.4,6.2-4.6c2.4-1.2,5.2-1.6,8.2-1.6s3.8.2,5.6.6c1.8.4,3.4,1.2,4.8,2s2.8,1.8,3.8,3c1.2,1.2,2,2.6,2.8,4l-7.4,4.2c-.4-.8-1-1.8-1.6-2.4-.6-.8-1.2-1.4-2-2s-1.6-1-2.6-1.4-2.2-.4-3.4-.4c-2,0-3.6.4-5,1.2-1.4.8-2.6,1.8-3.4,3-1,1.2-1.6,2.8-2,4.4-.6,1.6-.8,3.8-.8,5.4ZM161.4,24.6c-.8-2.6-2.2-4.8-4-6.8s-3.8-3.4-6.2-4.6c-2.4-1.2-5.2-1.6-8.4-1.6s-5.8.6-8.4,1.6c-2.2,1.2-4.4,2.8-6,4.6-1.8,2-3,4.2-4,6.8-.8,2.6-1.4,5.4-1.4,8.4s.4,5.8,1.4,8.4c.8,2.6,2.2,4.8,4,6.8s3.8,3.4,6.2,4.6c2.4,1.2,5.2,1.6,8.4,1.6s5.8-.6,8.4-1.6c2.4-1.2,4.6-2.6,6.2-4.6,1.8-2,3-4.2,4-6.8.8-2.6,1.4-5.4,1.4-8.4-.2-3-.6-5.8-1.6-8.4h0ZM154,33.2c0,2-.2,3.8-.8,5.4-.4,1.6-1.2,3.2-2.2,4.4s-2.2,2.2-3.4,2.8c-1.4.6-3,1-4.8,1s-3.4-.4-4.8-1-2.6-1.6-3.4-2.8c-1-1.2-1.6-2.6-2.2-4.4-.4-1.6-.8-3.4-.8-5.4v-.2c0-2,.2-3.8.8-5.4.4-1.6,1.2-3.2,2.2-4.4,1-1.2,2.2-2.2,3.4-2.8,1.4-.6,3-1,4.8-1s3.4.4,4.8,1,2.6,1.6,3.4,2.8c1,1.2,1.6,2.6,2.2,4.4.4,1.6.8,3.4.8,5.4v.2ZM177.8,54l-11.8-42h9.4l8,31.4h.2l8-31.4h9.4l-11.8,42h-11.4,0ZM235.4,46.7c1.2,0,2.4-.2,3.4-.6,1-.4,2-.8,2.8-1.6s1.4-1.6,1.8-2.8c.4-1.2.6-2.4.6-4V11.8h8.2v27.2c0,2.4-.4,4.4-1.2,6.2s-2,3.4-3.6,4.8c-1.4,1.4-3.2,2.4-5.4,3-2,.8-4.4,1-6.8,1s-4.8-.4-6.8-1c-2-.8-3.8-1.8-5.4-3-1.6-1.4-2.6-3-3.6-4.8-.8-1.8-1.2-4-1.2-6.2V11.7h8.4v26c0,1.6.2,2.8.6,4,.4,1.2,1,2,1.8,2.8s1.6,1.2,2.8,1.6c1.2.4,2.2.6,3.6.6h0ZM261.4,11.9h8.4v18.2l14.8-18.2h10.4l-14.4,16.8,15.4,25.2h-9.8l-11-18.8-5.4,6v12.8h-8.4V11.9h0ZM206.2,44.2c-3,0-5.4,2.4-5.4,5.4s2.4,5.4,5.4,5.4,5.4-2.4,5.4-5.4-2.4-5.4-5.4-5.4Z"/>
            
          </svg>
        
      </a>
    </div>
  
  </div>
</header>


```

## Inset Text {#inset-text}

<hr>
<h2>title: Inset text
description: Use the inset text component to differentiate a block of text from the content that surrounds it
section: Components
aliases: highlighted text, callout
backlogIssueId: 136
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;inset-text&quot;, example: &quot;default&quot;, html: true, nunjucks: true, size: &quot;s&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the inset text component to differentiate a block of text from the content that surrounds it, for example:</p>
<ul>
<li>quotes</li>
<li>examples</li>
<li>additional information about the page</li>
</ul>
<h2>When not to use this component</h2>
<p>Some users do not notice inset text if it’s used on complex pages or near to other visually prominent elements. For this reason, avoid using inset text as a way of highlighting very important information that users need to see.</p>
<p>If you need to draw attention to very important content, like legal information, use the <a href="/components/warning-text/">Warning text component</a> instead.</p>
<h2>How it works</h2>
<p>Use inset text very sparingly - it’s less effective if it’s overused.</p>
<p>There are 2 ways to use the inset text component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;inset-text&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Inset text
layout: layout-example.njk
---

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}

{{ govukInsetText({
  text: "It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application."
}) }}

```

```html
---
title: Inset text
layout: layout-example.njk
---



<div class="govuk-inset-text">
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
</div>


```

## Notification Banner {#notification-banner}

<hr>
<h2>title: Notification banner
description: Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content
section: Components
aliases: alert, warning, success message, important message, flash message
backlogIssueId: 2
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;notification-banner&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>A notification banner lets you tell the user about something that’s not directly relevant to the thing they’re trying to do on that page of the service. For example:</p>
<ul>
<li>telling the user about a problem that’s affecting the service as a whole (for example, delays in processing applications because of an emergency)</li>
<li>telling the user about something that affects them in particular (for example, an approaching deadline they need to meet)</li>
<li>telling the user about the outcome of something they&#39;ve just done on a previous page (for example, confirming that an email has been sent)</li>
</ul>
<h2>When not to use this component</h2>
<p>Use notification banners sparingly. There’s <a href="https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/">evidence that people often miss them</a>, and using them too often is likely to make this problem worse.</p>
<p>If the information is directly relevant to the thing the user is doing on that page, put the information in the main page content instead. Use an <a href="/components/inset-text/">Inset text component</a> or <a href="/components/warning-text/">Warning text component</a> if it needs to stand out.</p>
<p>Do not:</p>
<ul>
<li>use a notification banner to tell the user about validation errors - use an <a href="/components/error-message/">Error message component</a> and <a href="/components/error-summary/">Error summary component</a> instead</li>
<li>show a notification banner and an <a href="/components/error-summary/">Error summary component</a> on the same page - just show the error summary</li>
</ul>
<h2>How it works</h2>
<p>Position a notification banner immediately before the page <code>h1</code>. The notification banner should be the same width as the page&#39;s other content, such as components, headings and body text. For example, if the other content takes up two-thirds of the screen on desktop devices, then the notification banner should also take up two-thirds. <a href="https://design-system.service.gov.uk/styles/layout/">Read about how to lay out pages</a>.</p>
<p>Use <code>role=&quot;region&quot;</code> and <code>aria-labelledby=&quot;govuk-notification-banner-title&quot;</code> (with <code>id=&quot;govuk-notification-banner-title&quot;</code> on <code>&lt;govuk-notification-banner__title&gt;</code>) so that screen reader users can navigate to the notification banner.</p>
<p>Avoid showing more than one notification banner on the same page. Instead, combine the messages in a single notification banner. If the messages are too different to combine, only show the highest priority notification banner.</p>
<h3>Notification banner headings</h3>
<p>You can use <code>&lt;h3&gt;</code> headings in the <code>govuk-notification-banner__content</code> to help structure your content.</p>
<p>Avoid using headings for single-line notifications that do not need them.</p>
<h2>Telling the user about a problem that affects the whole service</h2>
<p>Use a ‘neutral’ blue notification banner if the user needs to know about a problem with the service as a whole.</p>
<p>For example:</p>
<ul>
<li>in a service that lets the user register or apply for something, they might need to know that it’s taking longer than usual to process applications because of an emergency</li>
<li>in an account-type service, the user might need to know that the service will be down for scheduled maintenance</li>
</ul>
<p>{{ example({ group: &quot;components&quot;, item: &quot;notification-banner&quot;, example: &quot;whole-service&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<p>If your service is on GOV.UK and it’s affected by an emergency, ask your department’s content team to <a href="https://www.gov.uk/guidance/contact-the-government-digital-service/request-a-thing#change-govuk-content">request a change to the service start page</a>.
If your service is getting more demand than usual, check that you’ve set up <a href="/patterns/problem-with-the-service-pages/">There is a problem with the service pages</a> and <a href="/patterns/service-unavailable-pages/">Service unavailable pages</a>, and the wording is up to date.</p>
<h2>Telling the user about something that’s happening elsewhere</h2>
<p>Use a ‘neutral’ notification banner if the user needs to know about something that’s happening elsewhere in the service. For example:</p>
<ul>
<li>in a case working system, the user might need to know that there are new cases waiting for their attention</li>
<li>in an account-type service, you might need to tell the user that there’s a deadline approaching or that a payment is overdue</li>
</ul>
<p>{{ example({ group: &quot;components&quot;, item: &quot;notification-banner&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h2>Reacting to something the user has done</h2>
<p>You can also use a notification banner to tell the user about the outcome of something they’ve just done - but they have not finished the current journey, so it does not make sense to use a <a href="/patterns/confirmation-pages/">Confirmation page at this point in your service</a>.</p>
<p>Using a notification banner is unlikely to be the right approach in a linear service - for example, a service that lets the user register or apply for a thing. For a linear service, it will usually make sense to stick to the <a href="https://www.gov.uk/service-manual/design/form-structure">‘one thing per page’ approach</a>, and avoid using a notification banner.</p>
<p>Use a <a href="/patterns/confirmation-pages/">Confirmation page in a linear service</a> to tell users that they’ve finished using the service instead of a notification banner.</p>
<p>Use the green version of the notification banner to confirm that something they’re expecting to happen has happened.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;notification-banner&quot;, example: &quot;success&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<p>Since you’re using the notification banner to tell the user about the outcome of something they’ve just done, add <code>role=&quot;alert&quot;</code> so focus shifts to the notification banner on page load.</p>
<p>Remove a green notification banner when the user moves to a new page.</p>
<p>To make the green version of the notification banner accessible:</p>
<ul>
<li>use headings like ‘Success’ - so that you’re not relying on colour alone to convey meaning – to <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">meet WCAG 2.2 success criterion 1.4.1 Use of colour</a></li>
<li>use the same heading for green notification banners within the same service - so that you’re identifying components that work in the same way consistently – this is to <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification">meet WCAG 2.2 success criterion 3.2.4 Consistent identification</a></li>
</ul>
<h2>Research on this component</h2>
<p>We need more research to understand:</p>
<ul>
<li>how common it is for users to miss important information in notification banners (including users of assistive technology, who might skip straight to the <code>h1</code>)</li>
<li>whether it’s sometimes helpful to allow users to dismiss notifications, and how to do this</li>
</ul>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Notification banner
layout: layout-example.njk
---

{% from "govuk/components/notification-banner/macro.njk" import govukNotificationBanner %}

{% set html %}
  <p class="govuk-notification-banner__heading">
    You have 7 days left to send your application.
    <a class="govuk-notification-banner__link" href="#">View application</a>.
  </p>
{% endset %}

{{ govukNotificationBanner({
  html: html
}) }}

```

```html
---
title: Notification banner
layout: layout-example.njk
---







  <div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
  
    <p class="govuk-notification-banner__heading">
        You have 7 days left to send your application.
        <a class="govuk-notification-banner__link" href="#">View application</a>.
      </p>
  
  </div>
</div>


```

## Pagination {#pagination}

<hr>
<h2>title: Pagination
description: Help users navigate collections of numbered pages like search results
section: Components
aliases:
backlogIssueId: 77
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Help users navigate forwards and backwards through a series of pages. For example, search results or guidance that&#39;s divided into multiple website pages – like <a href="https://prototype-kit.service.gov.uk/docs/templates/mainstream-guide">the GOV.UK mainstream guide format</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;pagination&quot;, example: &quot;default&quot;, html: true, nunjucks: true, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Consider using pagination when:</p>
<ul>
<li>showing all the content on a single page makes the page take too long to load</li>
<li>most users will only need the content on the first page or first few pages</li>
</ul>
<h2>When not to use this component</h2>
<p>Only break up content onto separate pages if it improves the performance or usability of your service.</p>
<p>Avoid using the &#39;infinite scroll&#39; technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users.</p>
<p>Do not use this Pagination component for linear journeys – for example, where you’re asking the user to complete a form. Instead, use the <a href="/components/button/">Button component</a> (usually a &#39;Continue&#39; button) to let the user move to the next page – and a <a href="/components/back-link/">Back link component</a> to let them move to the previous page.</p>
<h2>How it works</h2>
<p>Add the pagination component after the content on each page that you&#39;re paginating.</p>
<p><a href="in-page/index.html">View an example of Pagination in a standard GOV.UK page template</a>.</p>
<p>Do not show pagination if there&#39;s only one page of content.</p>
<p>Redirect users to the first page if they enter a URL of a page that no longer exists.</p>
<h2>For navigating between content pages</h2>
<p>Use the &#39;block&#39; style of pagination to let users navigate through related content that has been split across multiple pages. Stack the links vertically, so they’re more obvious to screen magnifier users when they’re zoomed in.</p>
<p>You can use link labels to give context on what the neighbouring pages are about.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;pagination&quot;, example: &quot;for-content-pages&quot;, html: true, nunjucks: true }) }}</p>
<h2>For navigating between pages of items</h2>
<p>Use a list-type layout if users need to navigate through pages of similar items. For example, a list of search results or a list of cases in a case working system.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;pagination&quot;, example: &quot;for-list-pages&quot;, html: true, nunjucks: true }) }}</p>
<p>Show the page number in the page <code>&lt;title&gt;</code> so that screen reader users know they’ve navigated to a different page. For example, &#39;Search results (page 1 of 4)&#39;.</p>
<p>Show an appropriate number of pages to fit the horizontal space available.</p>
<p>For smaller screens, show page numbers for:</p>
<ul>
<li>the current page</li>
<li>previous and next pages</li>
<li>first and last pages</li>
</ul>
<p>For larger screens, show page numbers for:</p>
<ul>
<li>the current page</li>
<li>at least one page immediately before and after the current page</li>
<li>first and last pages</li>
</ul>
<p>Use ellipses (…) to replace any skipped pages. For example:</p>
<ul>
<li><strong>[1]</strong> 2 … 100</li>
<li>1 <strong>[2]</strong> 3 … 100</li>
<li>1 2 <strong>[3]</strong> 4 … 100</li>
<li>1 2 3 <strong>[4]</strong> 5 … 100</li>
<li>1 … 4 <strong>[5]</strong> 6 … 100</li>
<li>1 … 97 <strong>[98]</strong> 99 100</li>
<li>1 … 98 <strong>[99]</strong> 100</li>
<li>1 … 99 <strong>[100]</strong></li>
</ul>
<h3>First and last pages</h3>
<p>Do not show the previous page link on the first page – and do not show the next page link on the last page.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;pagination&quot;, example: &quot;first-page&quot;, html: true, nunjucks: true }) }}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;pagination&quot;, example: &quot;last-page&quot;, html: true, nunjucks: true }) }}</p>
<h3>Filtering and sorting</h3>
<p>Consider adding filtering or sorting options if it helps users to find what they need in a long list of pages. For example, <a href="https://www.gov.uk/business-finance-support">the business support finder on GOV.UK</a> has filtering options.</p>
<p>If the user filters or sorts the list of pages, apply this to the whole list (not just the current page) and redirect them back to the first page of the new results.</p>
<p>Set defaults to minimise how many pages most users have to click through to find what they need.</p>
<h2>Research on this component</h2>
<p>This component is based on similar ones developed and used successfully by the Government Digital Service, Ministry of Justice and the Home Office, and on feedback in the Design System backlog.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Pagination
layout: layout-example.njk
---

{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      current: true,
      href: "#"
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}

```

```html
---
title: Pagination
layout: layout-example.njk
---



<nav class="govuk-pagination" aria-label="Pagination">
  
  
    
  
  <div class="govuk-pagination__prev">
    <a class="govuk-link govuk-pagination__link" href="#" rel="prev">
          
      <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
      </svg>
      
      <span class="govuk-pagination__link-title">
        Previous<span class="govuk-visually-hidden"> page</span>
      </span>
      
      
    </a>
  </div>

  <ul class="govuk-pagination__list">
  
    <li class="govuk-pagination__item">
    
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 1">
        1
      </a>
    
    </li>
  
    <li class="govuk-pagination__item govuk-pagination__item--current">
    
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 2" aria-current="page">
        2
      </a>
    
    </li>
  
    <li class="govuk-pagination__item">
    
      <a class="govuk-link govuk-pagination__link" href="#" aria-label="Page 3">
        3
      </a>
    
    </li>
  
  </ul>
  
    
  
  <div class="govuk-pagination__next">
    <a class="govuk-link govuk-pagination__link" href="#" rel="next">
      
      <span class="govuk-pagination__link-title">
        Next<span class="govuk-visually-hidden"> page</span>
      </span>
      
          
      <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
      </svg>
      
    </a>
  </div>

  
</nav>


```

## Panel {#panel}

<hr>
<h2>title: Panel
description: The panel component is a visible container used on confirmation or results pages
section: Components
aliases: confirmation box, results box, reference number, application complete, application number
backlogIssueId: 55
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>The panel component is a visible container used on confirmation or results pages to highlight important content.
{{ example({ group: &quot;components&quot;, item: &quot;panel&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the panel component to display important information when a transaction has been&nbsp; completed.</p>
<p>In most cases, the panel component is used on <a href="/patterns/confirmation-pages/">Confirmation pages in your service</a>, to tell the user they have successfully completed the transaction.</p>
<h2>When not to use this component</h2>
<p>Never use the panel component to highlight important information within body content.</p>
<h2>How it works</h2>
<p>There are 2 ways to use the panel component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;panel&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>How to write panel text</h3>
<p>Keep your panel text brief, as it&#39;s only meant for a high-level explanation of what has happened. For example, &#39;Application complete&#39;.</p>
<p>Aim to use short words and phrases to make sure highlighted information is easy to read at different screen sizes. For example, shorter amounts of information is less likely to wrap around the panel, which can happen when using the zoom function on mobiles.</p>
<p>If you need to give detailed information, or more context, use the description text under the heading text.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Panel
layout: layout-example.njk
---

{% from "govuk/components/panel/macro.njk" import govukPanel %}

{{ govukPanel({
  titleText: "Application complete",
  html: "Your reference number<br><strong>HDJ2123F</strong>"
}) }}

```

```html
---
title: Panel
layout: layout-example.njk
---



<div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">
    Application complete
  </h1>
  
  <div class="govuk-panel__body">
    Your reference number<br><strong>HDJ2123F</strong>
  </div>
  
</div>


```

## Password Input {#password-input}

<hr>
<h2>title: Password input
description: Help users accessibly enter passwords
section: Components
aliases: pass word, pass phrase
backlogIssueId: 240
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Help users to create and enter passwords.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;password-input&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use this component whenever you need users to create or enter a password.</p>
<p>Before using this component, you should also read the guidance on the <a href="/patterns/passwords/">Ask users for passwords pattern</a> and <a href="/patterns/create-accounts/">Creating user accounts pattern</a>.</p>
<h2>When not to use this component</h2>
<p>Do not use this component to ask for any information other than a password.</p>
<p>Use a <a href="/components/text-input/">Text input component</a> to ask for other security information, such as:</p>
<ul>
<li>multi-factor authentication codes</li>
<li>answers to security questions</li>
<li>other personally identifiable information</li>
</ul>
<p>Also see the <a href="/patterns/confirm-a-phone-number/">Confirm a phone number pattern</a>.</p>
<h2>How it works</h2>
<p>This component allows users to enter a password, with an option to show what they’ve entered as plain text.</p>
<p>This allows users to visually check their password before they submit it, which helps them reduce errors and choose passwords that are more unique and secure.</p>
<h3>Error messages</h3>
<p>{{ example({ group: &quot;components&quot;, item: &quot;password-input&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<p>If the user enters their account details incorrectly, do not reveal whether they got the username or password wrong. Clear any information entered into the password input.</p>
<p>Revealing the source of the error can help fraudsters break into people’s accounts.</p>
<p>See how to handle incorrect login attempts and help users who forget their password in the <a href="/patterns/passwords/">Ask users for passwords pattern</a>.</p>
<h3>Showing and hiding passwords</h3>
<p>Hide passwords by default until the user chooses to show it using the ‘show’ button. Users might not be in a private space when entering or creating a password, so you should hide passwords by default.</p>
<p>If you do choose to include two or more password inputs on a page, the ‘show’ and ‘hide’ toggles and labels for each password input must be different.</p>
<p>For example, you can label:</p>
<ul>
<li>the first input as &#39;Password&#39; with a toggle of &#39;show password&#39;</li>
<li>the second input as &#39;Re-enter password&#39; with a toggle of &#39;show re-entered password&#39;</li>
</ul>
<h3>Avoid adding a ‘confirm password’ field</h3>
<p>It’s not necessary to add a second password field, also known as a ‘confirm password’ field, particularly as this component allows users to show and hide passwords.</p>
<p>See <a href="#research-on-this-component">Research on this component</a> and why we decided having a second field is not helpful for users.</p>
<h3>Define the input’s type as ‘password’</h3>
<p>When the form is submitted, the password input should automatically change its <code>type</code> to <code>password</code>, if it has not already done so.</p>
<p>This is to prevent browsers from remembering it as a previously-provided value and potentially displaying it as an autofill option on non-password inputs.</p>
<h3>Use the autocomplete attribute</h3>
<p>Use the <code>autocomplete</code> attribute on password inputs to help users complete forms faster.</p>
<p><code>Autocomplete</code> indicates to browsers and password managers what kind of password is needed so it can be entered for the user.</p>
<p>Set the <code>autocomplete</code> attribute to <code>new-password</code> if the user is creating a password. Otherwise, use <code>current-password</code>.</p>
<p>Many browsers will autofill password inputs, even when the <code>autocomplete</code> attribute is missing or set to <code>off</code>.</p>
<h3>Allow copy and paste</h3>
<p>Always allow users to copy and paste in password fields. People may have very good reasons why they want to do this, for example if they’re using a password manager.</p>
<h4>Copying text from password fields</h4>
<p>Users can copy any text from a password field when it’s set on ‘show’ – this is a feature of browser behaviour and cannot be overridden.</p>
<p>This can be useful for users, such as to save a password that the browser has suggested into a separate password manager.</p>
<h3>Avoid restricting the user&#39;s input</h3>
<p>See the <a href="/patterns/passwords/">Ask users for passwords pattern</a> to see how to help users choose strong passwords.</p>
<p>Support all the characters users may need to enter a password, including numbers and symbols.</p>
<p>If you must place password restrictions on users, such as for technical or security reasons, be clear and consistent.</p>
<p>Any restrictions must be identical wherever the user creates or enters a password. If you change the restrictions over time, you must continue to support existing user passwords or ask them to set a new one.</p>
<h4>Do not use maxlength to restrict password length</h4>
<p>Users will not get any feedback when they’ve reached the <code>maxlength</code> and their text input has been truncated. This happens when a user has pasted text from elsewhere or it’s been autofilled by a password manager.</p>
<p>If you must restrict the length of a password, show an error message instead using the <a href="/patterns/validation/">Validation pattern</a>.</p>
<h3>Do not spellcheck or autocapitalise the user&#39;s input</h3>
<p>Some browsers might automatically change what the user is typing when the input’s text is visible, such as correcting spelling or automatically turning on upper case letters at the start of sentences.</p>
<p>You can tell browsers not to correct spellings by setting the <code>spellcheck</code> attribute to <code>false</code>.</p>
<p>Doing this can <a href="https://www.itpro.com/security/vulnerability/370010/what-is-spell-jacking">avoid making your service vulnerable to ‘spell-jacking’</a>, where security researchers have found some spell checking tools gathering personal identifiable information, even user’s passwords, from password input fields to send to third party services.</p>
<p>You can tell browsers not to autocapitalise values by setting the <code>autocapitalize</code> attribute to <code>off</code>.</p>
<h3>Known issues</h3>
<p>Some apps and tools will add their own native functionality to show and hide passwords.</p>
<p>These tools include:</p>
<ul>
<li>browsers (particularly when suggesting new passwords)</li>
<li>password managers</li>
<li>screen readers</li>
</ul>
<p>We’ve tried to minimise duplicate functionality by hiding other types of ‘show password’ buttons where possible.</p>
<p>There’s also other instances where a password could be ‘shown’ or ‘hidden’ without the use of a button – causing a mismatch with the button label (in other words, the user would see a button to ‘show’ a password that’s already visible).</p>
<p><a href="https://github.com/alphagov/govuk-design-system/issues/3552#issuecomment-1976660248">We found this mismatch happens in some browsers</a> when:</p>
<ul>
<li>a keyboard shortcut is pressed</li>
<li>a suggested password is created</li>
</ul>
<h2>Research on this component</h2>
<p>We <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/240#issuecomment-2020125340">decided that having a second field is not helpful for users</a>, particularly on password inputs with show and hide buttons.</p>
<p>However, we’d like to better support our rationale with real life examples from service teams and get your feedback.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Password input
layout: layout-example.njk
---

{% from "govuk/components/password-input/macro.njk" import govukPasswordInput %}

{{ govukPasswordInput({
  label: {
    text: "Password"
  },
  id: "password-input",
  name: "password"
}) }}

```

```html
---
title: Password input
layout: layout-example.njk
---



<div class="govuk-form-group govuk-password-input" data-module="govuk-password-input">
  <label class="govuk-label" for="password-input">
    Password
  </label>


  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    
    
    <input
    
        
      
    
        
      
    
        
      
    
        
      
    
        
      
    
    
    
    
        
      
    
        
      
    
    
    
   class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password-input" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none">
    
        <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button"
        
            
          
        
            
          
        
            
        
       aria-controls="password-input" aria-label="Show password" hidden>
      Show
    </button>
    
  </div>

</div>


```

## Phase Banner {#phase-banner}

<hr>
<h2>title: Phase banner
description: Use the phase banner component to show users your service is still being worked on
section: Components
aliases: alpha banner, beta banner, prototype banner, status banner, feedback banner
backlogIssueId: 57
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use the phase banner component to show users your service is still being worked on.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;phase-banner&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Services hosted on a service.gov.uk domain must use the phase banner until they pass a live assessment.</p>
<h2>How it works</h2>
<p>There are 2 ways to use the phase banner component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>Use an alpha banner when your service is in alpha, and a beta banner if your service is in private or public beta.</p>
<p>Show the Phase banner directly under either:</p>
<ul>
<li>the <a href="/components/service-navigation/">Service navigation component</a></li>
<li>the <a href="/components/header/">GOV.UK header component</a> and its blue colour bar (if your service does not use the Service navigation component)</li>
</ul>
<p>Phase banners are shown across all pages of a service, so users should understand it as a service-level message.</p>
<p>You can choose to place the Phase banner in a more appropriate place for your service, however you’ll need to customise the component and provide your own CSS code to make it show correctly.</p>
<h3>Add a feedback link</h3>
<p>Use a ‘feedback’ link to collect on-page feedback about your service. This can open an email or take the user to a dedicated page or form.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;phase-banner&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;phase-banner&quot;, example: &quot;beta&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>Whatever option you use, make sure that users do not lose their place in the service and can return to the page they were on.</p>
<p><a href="https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction#user-satisfaction-through-each-service-phase">Find out what feedback you need to collect at each phase</a> in the GOV.UK Service Manual.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Phase banner
layout: layout-example.njk
---

{% from "govuk/components/phase-banner/macro.njk" import govukPhaseBanner %}

{{ govukPhaseBanner({
  tag: {
    text: "Alpha"
  },
  html: 'This is a new service. Help us improve it and <a class="govuk-link" href="#">give your feedback by email</a>.'
}) }}

```

```html
---
title: Phase banner
layout: layout-example.njk
---




<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      Alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service. Help us improve it and <a class="govuk-link" href="#">give your feedback by email</a>.
    </span>
  </p>
</div>


```

## Radios {#radios}

<hr>
<h2>title: Radios
description: Let users select a single option from a list using the radios component
section: Components
aliases: radio buttons, option buttons
backlogIssueId: 59
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the radios component when users can only select one option from a list.</p>
<h2>When not to use this component</h2>
<p>Do not use the radios component if users might need to select more than one option. In this case, you should use the <a href="/components/checkboxes/">Checkboxes component</a> instead.</p>
<h2>How it works</h2>
<p>Always position radios to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.</p>
<p>Unlike with checkboxes, users can only select one option from a list of radios. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.</p>
<p>If needed, add a hint explaining this, for example, &#39;Select one option&#39;.</p>
<p>Do not pre-select radio options as this makes it more likely that users will:</p>
<ul>
<li>not realise they&#39;ve missed a question</li>
<li>submit the wrong answer</li>
</ul>
<p>Users cannot go back to having no option selected once they have selected one, without refreshing their browser window. Therefore, you should include &#39;None of the above&#39; or &#39;I do not know&#39; if they are valid options.</p>
<p>Order radio options alphabetically by default.</p>
<p>In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for &#39;Where do you live?&#39; based on population size.</p>
<p>However you should do this with extreme caution as it can reinforce bias in your service. If in doubt, order alphabetically.</p>
<p>Group radios together in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.</p>
<h3>If you’re asking one question on the page</h3>
<p>If you are asking just <a href="/patterns/question-pages/#start-by-asking-one-question-per-page">one question per page in your service</a> as recommended, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<p>Read more about <a href="/get-started/labels-legends-headings/">why and how to set legends as headings</a>.</p>
<p>There are 2 ways to use the radios component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>If you’re asking more than one question on the page</h3>
<p>If you&#39;re asking more than one question on the page, do not set the contents of the <code>&lt;legend&gt;</code> as the page heading. Read more about <a href="/patterns/question-pages/#asking-multiple-questions-on-a-page">asking multiple questions on Question pages</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;without-heading&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Inline radios</h3>
<p>In some cases, you can choose to display radios &#39;inline&#39; beside one another (horizontally).</p>
<p>Only use inline radios when:</p>
<ul>
<li>the question only has two options</li>
<li>both options are short</li>
</ul>
<p>Remember that on small screens such as mobile devices, the radios will still be &#39;stacked&#39; on top of one another (vertically).</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;inline&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Radio items with hints</h3>
<p>You can add hints to radio items to provide additional information about the options.</p>
<p>Keep each hint to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with an item. This could frustrate users if the text is long.</p>
<p>Do not use links in hint text. While screen readers will read out the link text when describing the item, they usually do not tell users the text is a link.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;hint&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Radio items with a text divider</h3>
<p>If one or more of your radio options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;divider&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Conditionally revealing a related question</h3>
<p>You can ask the user a related question when they select a particular radio option, so they only see the question when it&#39;s relevant to them.</p>
<p>This might make two related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the &#39;Contact me by phone&#39; option.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;conditional-reveal&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<p>Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead.</p>
<p>Do not conditionally reveal questions to inline radios, such as ‘yes’ and ‘no’ options placed next to each other.</p>
<p>Conditionally reveal questions only - do not show or hide anything that is not a question.</p>
<h4>Known issues</h4>
<p>Users are not always notified when a conditionally revealed question is shown or hidden. This fails <a href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html">WCAG 2.2 success criterion 4.1.2 Name, role, value</a>.</p>
<p>However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long it’s kept simple. Users we tested with did get confused when complicated questions were conditionally revealed to them, particularly questions with more than one part.</p>
<p>We’ll keep looking for opportunities to <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/59">learn more about how conditionally revealed questions be used in services</a>.</p>
<h3>Smaller radios</h3>
<p>Use standard-sized radios in nearly all cases. However, smaller versions work well on pages where it’s helpful to make them less visually prominent.</p>
<p>For example, on a page of search results, the primary user need is to see the results. Using smaller radios lets users see and change search filters without distracting them from the main content.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;small&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>Small radios can work well on information dense screens in services designed for repeat use, like caseworking systems.</p>
<p>In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times.</p>
<h3>Error messages</h3>
<p>Display an error message if the user has not:</p>
<ul>
<li>selected any radios</li>
<li>answered a conditionally revealed question</li>
</ul>
<p>Error messages should be styled like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<p>Make sure errors follow the guidance in the <a href="/components/error-message/">Error message component</a> and have specific error messages for specific error states.</p>
<h4>If it’s a ‘yes’ or ‘no’ question</h4>
<p>Say ‘Select yes if [whatever it is is true]’. For example, ‘Select yes if Sarah normally lives with you’.</p>
<h4>If there are two options which are not ‘yes’ and ‘no’</h4>
<p>Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.</p>
<h4>If there are more than two options</h4>
<p>Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.</p>
<h4>If it&#39;s a conditionally revealed question</h4>
<p>Include an <a href="/components/error-message/">Error message component</a> that is clearly related to the initial question.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;radios&quot;, example: &quot;conditional-reveal-error&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h2>Research on this component</h2>
<p>If you’ve done any user research involving conditionally revealed questions, particularly with users of assistive technologies, <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/59">tell us what you’ve learned by adding a comment to the discussion about this component</a>.</p>
<p>Read a blog post about <a href="https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/">an update to the radios and checkboxes components in 2016</a>.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Radios
layout: layout-example-form.njk
---

{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}

```

```html
---
title: Radios
layout: layout-example-form.njk
---







<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
  
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
  
    <h1 class="govuk-fieldset__heading">
      Where do you live?
    </h1>
  
  </legend>
  

  <div class="govuk-radios" data-module="govuk-radios">
    
    
      
  
    
    
    
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
        England
      </label>
      
    </div>
    
  
    
      
  
    
    
    
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
        Scotland
      </label>
      
    </div>
    
  
    
      
  
    
    
    
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
        Wales
      </label>
      
    </div>
    
  
    
      
  
    
    
    
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
      <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
        Northern Ireland
      </label>
      
    </div>
    
  
    
    
  </div>

</fieldset>

</div>


```

## Select {#select}

<hr>
<h2>title: Select
description: Help users select an item from a list
section: Components
aliases: drop down menu, list box, drop down list, combo box, pop-up menu
backlogIssueId: 60
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;select&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.</p>
<h2>When not to use this component</h2>
<p>The select component allows users to choose an option from a long list. Before using the select component, try asking users questions which will allow you to present them with fewer options.</p>
<p>Asking questions means you’re less likely to need to use the select component, and can consider using a different solution, such as a <a href="/components/radios/">Radios component</a>.</p>
<h2>How it works</h2>
<p>If you use the component for settings, you can make an option pre-selected by default when users first see it.</p>
<p>If you use the component for questions, you should not pre-select any of the options in case it influences users&#39; answers.</p>
<p>There are 2 ways to use the select component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;select&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Select with hint</h3>
<p>You can add hint text to help the user understand the options and choose one of them.</p>
<p>Keep hint text to a single short sentence, without any full stops.</p>
<p>Do not use links in hint text. While screen readers will read out the link text, they usually do not tell users the text is a link.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;select&quot;, example: &quot;with-hint&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Error messages</h3>
<p>Display an error message if the user has not selected an option.</p>
<p>Style error messages as shown in the example:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;select&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Avoid adding functionality to allow selecting multiple options</h3>
<p>The select component does not support selecting multiple options, <a href="https://www.24a11y.com/2019/select-your-poison/">as there’s a history of poor usability and assistive technology support for <code>&lt;select multiple&gt;</code></a>. If you need to ask the user to pick more than one item from a list, it’s almost always better to use another method, such as a list of checkboxes.</p>
<h2>Research on this component</h2>
<p>User research has shown that some users struggle with selects.</p>
<h3>Known issues and gaps</h3>
<p>Research shows that users can struggle with selects, particularly when users have:</p>
<ul>
<li>been unable to close the select</li>
<li>tried to type into the select</li>
<li>confused focused items with selected items</li>
<li>tried to pinch zoom select options on smaller devices</li>
<li>not understood that they can scroll down to see more items, or how to</li>
</ul>
<p>For more detail watch this video with <a href="https://www.youtube.com/watch?v=-dH6a6eMdXE">examples of users struggling with selects</a>.</p>
<p>This blog shows <a href="https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/">an example where a text input is used over a select</a> for asking a user for a date.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Select
layout: layout-example-form.njk
---

{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated",
      selected: true
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}

```

```html
---
title: Select
layout: layout-example-form.njk
---






<div class="govuk-form-group">
  <label class="govuk-label" for="sort">
    Sort by
  </label>



  <select class="govuk-select" id="sort" name="sort">
  
    
    <option value="published">Recently published</option>
    
  
    
    <option value="updated" selected>Recently updated</option>
    
  
    
    <option value="views">Most views</option>
    
  
    
    <option value="comments">Most comments</option>
    
  
  </select>

</div>


```

## Service Navigation {#service-navigation}

<hr>
<h2>title: Service navigation
description: Service navigation helps users understand that they’re using your service and lets them navigate around your service
section: Components
aliases: Primary navigation
backlogIssueId: 76
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}
{% from &quot;_callout.njk&quot; import callout %}
{% from &quot;govuk/components/inset-text/macro.njk&quot; import govukInsetText %}</p>
<p>Service navigation helps users understand that they’re using your service and lets them navigate around your service.</p>
<p>Example of the Service navigation component showing the <a href="#brand-refresh-of-the-service-navigation-component">refreshed GOV.UK branding</a>:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;service-navigation&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<p>Example of the Service navigation component showing GOV.UK branding before June 2025:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;service-navigation&quot;, example: &quot;without-brand-refresh&quot;, html: false, nunjucks: false, open: false, loading: &quot;eager&quot; }) }}</p>
<p>If you use the page template, you&#39;ll also get the Service navigation without having to add it, as it&#39;s included by default. However, if you want to customise the default Service navigation, read the <a href="/styles/page-template/#changing-template-content">page template guidance about customising components</a>.</p>
<h2>When to use this component</h2>
<p>Use the Service navigation to help users understand that they’re using your service.</p>
<p>To decide when to use navigation links in your service, see the <a href="/patterns/navigate-a-service/">Help users to navigate a service pattern</a>.</p>
<h2>How it works</h2>
<p>Together, the <a href="/components/header/">GOV.UK header component</a> and Service navigation component ensure users get a consistent experience on GOV.UK.</p>
<p>This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.</p>
<p>For guidance on how to plan your header and navigation, see the <a href="/patterns/navigate-a-service/">Help users navigate a service pattern</a>.</p>
<h3>Change the blue colour bar under the GOV.UK header to full width</h3>
<p>To use the GOV.UK header and Service navigation and make them fit together visually, you’ll need to change the bottom blue border of the GOV.UK header to full width.</p>
<p>Apply a class <code>govuk-header--full-width-border</code> to the GOV.UK header.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;service-navigation&quot;, example: &quot;with-govuk-header&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>{% call callout({ tagText: &quot;Brand&quot;, colour: &quot;green&quot; }) %}</p>
<p class="govuk-body">You do not need to change the bottom border of the updated GOV.UK header component with the refreshed GOV.UK branding.</p>

<p>{% endcall %}</p>
<h3>Showing your service name only</h3>
<p>Use the Service navigation component to show your service name.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;service-navigation&quot;, example: &quot;with-service-name&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Showing service name and navigation links</h3>
<p>Show navigation links to let users navigate to different parts of your service and find useful links and tools.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;service-navigation&quot;, example: &quot;with-service-name-and-navigation&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>See when and how to show navigation links in the <a href="/patterns/navigate-a-service/">Help users navigate a service pattern</a>.</p>
<h2>Use ‘slots’ to add custom elements</h2>
<p>The Service navigation includes the option to use ‘slots’ to insert custom HTML code at specific points inside the component. This helps you extend the component to add custom elements, such as language selectors.</p>
<p>You must provide your own styles and JavaScript code for the content within a slot, particularly if you’re not using an existing component. You’ll need to decide on the most appropriate layout and positioning.</p>
<p>The <a href="/patterns/navigate-a-service">Help users to navigate a service pattern</a> includes some guidance on ‘Adding other header and navigation elements’.</p>
<h3>Ensure the ‘aria-label’ is accurate for users of assistive technology</h3>
<p>When a service name is shown, we let users know that there’s information about the service with a ‘region landmark’ using the <code>&lt;section&gt;</code> element.</p>
<p>Depending on what you add in the slots, you might need to rename the <code>aria-label</code> to accurately describe what’s in the section.</p>
<h3>Test with each update of GOV.UK Frontend</h3>
<p>There’s a risk that slot contents may look or work differently in a future release of GOV.UK Frontend.</p>
<p>You’ll need to ensure that slot content still works as intended after each update.</p>
<h2>Brand refresh of the Service navigation component</h2>
<p>In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.</p>
<p>The updated Service navigation component:</p>
<ul>
<li>uses light blue as the background colour, instead of grey</li>
<li>slightly reduces overall padding</li>
</ul>
<p>To help teams refresh the GOV.UK brand in their services, we released GOV.UK Frontend v5.10.0 (and later fix versions). For teams on earlier versions, we released GOV.UK Frontend v4.10.0</p>
<p>To see more details and how to update, you can read the <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v5.10.0">release notes for GOV.UK Frontend v5.10.0</a> and <a href="https://github.com/alphagov/govuk-frontend/releases/tag/v4.10.0">release notes for GOV.UK Frontend v4.10.0</a>.</p>
<h2>Research on this component</h2>
<p>See the <a href="/patterns/navigate-a-service/#research-on-this-pattern">research section in the Help users navigate a service pattern</a> for a summary of our research on the GOV.UK header and Service navigation, and how you can share your feedback with us.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Service navigation
layout: layout-example.njk
---

{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{{ govukServiceNavigation({
  navigation: [
    {
      href: "#",
      text: "Navigation item 1"
    },
    {
      href: "#",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#",
      text: "Navigation item 3"
    }
  ]
}) }}

```

```html
---
title: Service navigation
layout: layout-example.njk
---





  <div 
class="govuk-service-navigation"
data-module="govuk-service-navigation"
>
    
  <div class="govuk-width-container">

    <div class="govuk-service-navigation__container">
      
      

      
      
      
      
        <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
          
          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden>
            Menu
          </button>
          

          <ul class="govuk-service-navigation__list" id="navigation" >

            
              

              
              <li class="govuk-service-navigation__item">
                
                  <a class="govuk-service-navigation__link" href="#">
                    
                
                Navigation item 1
              
                  </a>
                
              </li>
            
              

              
              <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
                
                  <a class="govuk-service-navigation__link" href="#" aria-current="true">
                    
                
                
                  <strong class="govuk-service-navigation__active-fallback">Navigation item 2</strong>
                
              
                  </a>
                
              </li>
            
              

              
              <li class="govuk-service-navigation__item">
                
                  <a class="govuk-service-navigation__link" href="#">
                    
                
                Navigation item 3
              
                  </a>
                
              </li>
            

            </ul>
        </nav>
      
    </div>

    </div>

  </div>



```

## Skip Link {#skip-link}

<hr>
<h2>title: Skip link
description: Use the skip link component to help keyboard-only users skip to the main content on a page
section: Components
aliases: Skip navigation link
backlogIssueId: 66
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use the skip link component to help keyboard-only users skip to the main content on a page.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;skip-link&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<p>If you use the page template, you&#39;ll also get the skip link without having to add it, as it&#39;s included by default. However, if you want to customise the default skip link, read the <a href="/styles/page-template/#changing-template-content">page template guidance about customising components</a>.</p>
<h2>When to use this component</h2>
<p>All GOV.UK pages must include a skip link. Usually, you should place the skip link immediately after the opening <code>&lt;body&gt;</code> tag. However, if you&#39;re using a <a href="/components/cookie-banner/">Cookie banner component</a>, place the skip link immediately after the cookie banner.</p>
<p>Some automated accessibility testing tools may warn that the skip link element is not inside a landmark. This warning does not apply to skip links, so you can ignore it. Do not wrap the skip link in a <code>&lt;nav&gt;</code> region, or move it inside the header.</p>
<h2>How it works</h2>
<p>Some people use the tab key on their keyboard to navigate through the links and form elements on a web page.</p>
<p>Including the skip link component gives users the option to bypass the top-level navigation links and jump to the main content on a page.</p>
<p>The skip link component is visually hidden until a keyboard press activates it.</p>
<p>There are 2 ways to use the skip link component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;skip-link&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Skip link
layout: layout-example.njk
---

<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>

{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}

{{ govukSkipLink({
  text: "Skip to main content",
  href: "#"
}) }}

```

```html
---
title: Skip link
layout: layout-example.njk
---

<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>



<a href="#" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>


```

## Summary List {#summary-list}

<hr>
<h2>title: Summary list
description: Use the summary list to summarise information, for example, a user’s responses at the end of a form.
section: Components
aliases: Summary card
backlogIssueId: 182
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use a summary list to summarise information, for example, a user’s responses at the end of a form.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use a summary list to show information as a list of key facts.</p>
<p>You can use it to display metadata like ‘Last updated’ with a date like ‘22 June 2018’, or to summarise a user’s responses at the end of a form like the <a href="/patterns/check-answers/">Check answers pattern</a>.</p>
<p><a href="#summary-cards">Summary cards are a variant within this component</a>. You can use summary cards to show multiple summary lists that describe the same type of thing, such as people. You can also add card actions that apply to the entire summary list.</p>
<h2>When not to use this component</h2>
<p>The summary list uses the description list (<code>&lt;dl&gt;</code>) HTML element, so only use it to present information that has a key and at least one value.</p>
<p>Do not use it for tabular data or a simple list of information or tasks, like a <a href="/components/task-list/">Task list component</a>. For those use a <code>&lt;table&gt;</code>, <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>.</p>
<h2>How it works</h2>
<p>Each row of a summary list is made up of a:</p>
<ul>
<li>‘key’ that’s a description or label of a piece of information, like “Name”</li>
<li>‘value’ which is the piece of information itself, such as “John Smith”</li>
</ul>
<p>You can show a single or multiple summary lists on a page. If you’re showing multiple summary lists on a page, you can add structure by using headings or summary cards.</p>
<p>There are 2 ways to use the summary list component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;without-actions&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Adding actions to each row</h3>
<p>You can add ‘row actions’ to a summary list. For example, you can help users go back and edit an answer by adding a ‘change’ link.</p>
<p>When navigating visually, the borders above and below each row help to show which row action is tied to which piece of information.</p>
<p>Assistive technology users, including those who use a screen reader, might hear a row action link out of context and might not know what it will do. To give more context, add visually hidden text to the links. This means a screen reader user will hear the row action and the ‘key’ label for the information it will affect, like ‘Change name’ or ‘Change date of birth’.</p>
<p>If a user decides to go back to a previous answer through a card or row action, make sure information they&#39;ve already entered is pre-populated.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<h4>Showing rows with and without actions</h4>
<p>If you’re showing a mix of rows (where some rows include actions and some do not), add the <code>govuk-summary-list__row--no-actions</code> modifier class to the rows without actions. This is to ensure the bottom border is drawn correctly in some browsers.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;mixed-actions&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Removing the borders</h3>
<p>The summary list includes separating borders to help users by joining the information on each row and its action together.</p>
<p>Think carefully before you remove row borders. Borders help many users find and read information that’s laid out in rows, especially users who zoom in on pages or use assistive technologies to magnify their screen.</p>
<p>If your summary list does not have any actions, you can choose to remove the separating borders with the <code>govuk-summary-list--no-border</code> class.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;without-borders&quot;, html: true, nunjucks: true, open: false }) }}</p>
<p>To remove borders on a single row, use the <code>govuk-summary-list__row--no-border</code> class.</p>
<h3>Showing missing information</h3>
<p>In some contexts, you might need to show rows that have missing information. This can happen when:</p>
<ul>
<li>a user returns to an incomplete journey</li>
<li>you&#39;ve added or changed the questions in a service.</li>
</ul>
<p>Show a link to the appropriate question page in the <code>value</code> column so the user can enter the missing information, instead of showing a &#39;change&#39; link on that row.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;with-missing-information&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h2>Summary cards</h2>
<p>If you’re showing multiple summary lists on a page, you can show each list within a summary card. This lets you visually separate each summary list and give each a title and some actions.</p>
<p>Use summary cards when you need to show:</p>
<ul>
<li>multiple summary lists that all describe the same type of thing, such as people</li>
<li>actions that will apply to all the items in a list</li>
</ul>
<p>Summary cards are often used in case working systems to help users quickly view a set of information and related actions.</p>
<p>Do not use summary cards if you only need to show a small amount of related information. Use summary lists instead, and structure them with headings if needed.</p>
<p>If you’re showing summary cards at the end of a longer journey, you might want to familiarise the user with them earlier on – such as when the user reviews individual sections.</p>
<h3>Card titles</h3>
<p>Use the summary card’s header area to give each summary list a title.</p>
<p>Each title must be unique and help identify what the summary list describes. For example, this could be the name of a specific person, organisation or professional qualification.</p>
<p>Try to keep titles short and relevant. You can use one or two important values in the summary list – such as the first and last name of a person.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;card-with-title&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h3>Adding card actions</h3>
<p>You can add card actions in the header, which will be shown after the summary card&#39;s title.</p>
<p>For example, if you have multiple rows with &quot;change&quot; actions that all take the user to the same place, you can show a single “change” card action instead. This helps avoid repeating the same row action on every row.</p>
<p>Card actions are shown in bold text to make them visually distinct from row actions – and help alert the user that the card action will affect the entire summary card.</p>
<p>Write link text for card actions to tell the user what the card action will do and that it will apply to the entire summary card. It should also be as short as possible, usually 2 words.</p>
<p>Example card actions include:</p>
<ul>
<li>Remove tenant</li>
<li>Edit qualification</li>
<li>Update issue</li>
<li>Approve application</li>
<li>Cancel order</li>
</ul>
<p>Keep it short and do not add more than 2 to 3 actions in a header.</p>
<p>If a card action cannot easily be undone or might have serious consequences, consider adding a warning or asking the user for confirmation.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;summary-list&quot;, example: &quot;card-with-actions&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h2>Research on this component</h2>
<p>This component was developed and tested by the Government Digital Service as part of the <a href="/patterns/check-answers/">check answers pattern</a>.</p>
<p>The Department for Education contributed the summary card. It’s being used in some of their services, such as:</p>
<ul>
<li><a href="https://www.gov.uk/apply-for-teacher-training">Apply for teacher training</a>, used by the general public</li>
<li><a href="https://www.register-trainee-teachers.service.gov.uk/">Register trainee teachers</a>, used by people that work for training providers</li>
</ul>
<p>The summary card is also used in services run by other departments, such us:</p>
<ul>
<li>manage supervisions (Ministry of Justice)</li>
<li>submit social housing lettings and sales data (Department for Levelling Up, Housing &amp; Communities)</li>
</ul>
<h3>Next steps</h3>
<p>We still want to learn more about when this component works well.</p>
<p>If you use this component in your service, we&#39;d like to hear about how you use the summary list and summary card, as well as any research findings you might have.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Summary list
layout: layout-example.njk
---

{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Philips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Add",
            visuallyHiddenText: "contact details"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}

```

```html
---
title: Summary list
layout: layout-example.njk
---





  

  

  

  
<dl class="govuk-summary-list">

  
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Philips
    </dd>
    
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
      
    </dd>
    
  </div>
  

  
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
      
    </dd>
    
  </div>
  

  
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    
    <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
      
    </dd>
    
  </div>
  

  
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    
    <dd class="govuk-summary-list__actions">
      
      <ul class="govuk-summary-list__actions-list">
        
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        
      </ul>
      
    </dd>
    
  </div>
  

</dl>


```

## Table {#table}

<hr>
<h2>title: Table
description: Use the table component to make information easier to compare and scan for users
section: Components
aliases:
backlogIssueId: 61
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{% from &quot;govuk/components/inset-text/macro.njk&quot; import govukInsetText %}</p>
<p>Use the table component to make information easier to compare and scan for users.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;table&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the table component to let users compare information in rows and columns.</p>
<h2>When not to use this component</h2>
<p>Never use the table component to layout content on a page. Instead, use the <a href="/styles/layout/#using-the-grid-system">grid system</a>.</p>
<h2>How it works</h2>
<h3>Table captions</h3>
<p>Use the <code>&lt;caption&gt;</code> element to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.</p>
<p>There are other styling options for table captions. You can use <code>govuk-table__caption--s</code>, <code>govuk-table__caption--m</code>, <code>govuk-table__caption--l</code> and <code>govuk-table__caption--xl</code> classes to make them larger or smaller from the default.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;table&quot;, example: &quot;caption-l&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h3>Table headers</h3>
<p>Use table headers to tell users what the rows and columns represent. Use the <code>scope</code> attribute to help users of assistive technology distinguish between row and column headers.</p>
<p>There are 2 ways to use the table component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;table&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h2>Numbers in a table</h2>
<p>When comparing columns of numbers, align the numbers to the right in table cells.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;table&quot;, example: &quot;numbers&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h2>Custom column widths</h2>
<p>You can use the <a href="/styles/layout/#width-override-classes">width override classes</a> to set the width of table columns.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;table&quot;, example: &quot;column-widths&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>If the <a href="/styles/layout/#width-override-classes">width override classes</a> do not meet your needs you can create your own width classes and apply them to the cells in the table head. These can be added using the <code>classes</code> option in the Nunjucks macro or adding the class directly to the individual cells within <code>govuk-table__head</code> as below.</p>
<p>To learn more about this, read guidance on <a href="/get-started/extending-and-modifying-components/">extending and modifying components in production</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;table&quot;, example: &quot;column-widths-custom-classes&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h2>Tables with a lot of data</h2>
<p>If possible, you should aim to have less data in your tables. If you have a lot of data, try to organise it into multiple tables or multiple pages.</p>
<p>If you cannot split your data, you can use the CSS class <code>govuk-table--small-text-until-tablet</code>. This class reduces the size of the text on small screens so large amounts of data has more empty space around it. This makes it easier to visually differentiate between each piece of data when read on small screens.</p>
<p>{{ govukInsetText({
  html: &quot;<p>The CSS class <code>govuk-table--small-text-until-tablet</code> is only available in version 5.2 of GOV.UK Frontend and later.</p><p>Read about &lt;a href=&quot;/get-started/new-type-scale/&quot;&gt;updating your service to use the new type scale</a>.</p>&quot;
}) }}</p>
<p>You should not use this class on tables unless your table has a lot of data, because a smaller amount of data is easier to read if the text is larger.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;table&quot;, example: &quot;lots-of-data&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Table
layout: layout-example.njk
---

{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Amount"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      }
    ]
  ]
}) }}

```

```html
---
title: Table
layout: layout-example.njk
---



<table class="govuk-table">

  <caption class="govuk-table__caption govuk-table__caption--m">Dates and amounts</caption>


  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
    
      <th scope="col" class="govuk-table__header">Date</th>
    
      <th scope="col" class="govuk-table__header">Amount</th>
    
    </tr>
  </thead>

  <tbody class="govuk-table__body">

  
    <tr class="govuk-table__row">
    
      
      
      <th scope="row" class="govuk-table__header">First 6 weeks</th>
      
    
      
      
      <td class="govuk-table__cell">£109.80 per week</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <th scope="row" class="govuk-table__header">Next 33 weeks</th>
      
    
      
      
      <td class="govuk-table__cell">£109.80 per week</td>
      
    
    </tr>
  

  
    <tr class="govuk-table__row">
    
      
      
      <th scope="row" class="govuk-table__header">Total estimated pay</th>
      
    
      
      
      <td class="govuk-table__cell">£4,282.20</td>
      
    
    </tr>
  

  </tbody>
</table>


```

## Tabs {#tabs}

<hr>
<h2>title: Tabs
description: Tabs can be a helpful way of letting users quickly switch between related information
section: Components
aliases:
backlogIssueId: 100
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>The tabs component lets users navigate between related sections of content, displaying one section at a time.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;tabs&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Tabs can be a helpful way of letting users quickly switch between related information if:</p>
<ul>
<li>your content can be usefully separated into clearly labelled sections</li>
<li>the first section is more relevant than the others for most users</li>
<li>users will not need to view all the sections at once</li>
</ul>
<p>Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use.</p>
<h2>When not to use this component</h2>
<p>Do not use the tabs component if the total amount of content the tabs contain will make the page slow to load. For this reason, do not use the tabs component as a form of page navigation.</p>
<p>Tabs hide content from users and not everyone will notice them or understand how they work.</p>
<p>Do not use tabs if your users might need to:</p>
<ul>
<li>read through all of the content in order, for example, to understand a step-by-step process</li>
<li>compare information in different tabs - having to memorise the information and switch backwards and forwards can be frustrating and difficult</li>
</ul>
<p>Test your content without tabs first. Consider if it’s better to:</p>
<ul>
<li>simplify and reduce the amount of content</li>
<li>split the content across multiple pages</li>
<li>keep the content on a single page, separated by headings</li>
<li>use a table of contents to let users navigate quickly to specific sections of content</li>
</ul>
<h2>Decide between using tabs, accordion and details</h2>
<p>The Tabs component, <a href="/components/accordion/">Accordion component</a>, and <a href="/components/details/">Details component</a> all hide sections of content which a user can choose to reveal.</p>
<p>If you decide to use one of these components, consider if:</p>
<ul>
<li>the user does not need to view more than one section at a time – consider using tabs</li>
<li>the user needs to switch quickly between sections – tabs can show content without pushing other sections down the page, unlike accordions</li>
<li>there are many pieces of content – tabs can fit fewer sections as they’re arranged horizontally, unlike accordions which are arranged vertically</li>
<li>there’s only one or two pieces of short, less important content – the details component is more suitable as it’s visually smaller and less prominent than an accordion or tabs</li>
</ul>
<h2>How it works</h2>
<p>There are 2 ways to use the tabs component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;tabs&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<p>The tabs component uses JavaScript. When JavaScript is not available, users will see the tabbed content on a single page, in order from first to last, with a table of contents that links to each of the sections.</p>
<p>This is also how the component currently behaves on small screens, though more research is needed on this.</p>
<h3>The current tab gets stored in the URL</h3>
<p>When moving between tabs, the URL gets updated with a fragment (<code>#id-of-the-tab</code>) corresponding to the current tab&#39;s <code>id</code> attribute&#39;s value.</p>
<p>If the tab&#39;s name is &quot;United Kingdom&quot; then the fragment could be <code>#tab_united-kingdom</code>.</p>
<p>Because of this feature, pressing the browser&#39;s &#39;back&#39; button should navigate back to the previous tab.</p>
<h3>Use clear labels</h3>
<p>Tabs hide content, so the tab labels need to make it very clear what they link to, otherwise users will not know if they need to click on them.</p>
<p>If you struggle to come up with clear labels, it might be because the way you’ve separated the content is not clear.</p>
<h3>Order the tabs according to user needs</h3>
<p>The first tab should be the most commonly-needed section. Arrange the other tabs in the order that makes most sense for your users.</p>
<h3>Do not disable tabs</h3>
<p>Disabling elements is normally confusing for users. If there is no content for a tab, either remove the tab or, if that would be confusing for your users, explain why there is no content when the tab is selected.</p>
<h3>Avoid tabs that wrap over more than one line</h3>
<p>If you use too many tabs or they have long labels then they may wrap over more than one line. This makes it harder for users to see the connection between the selected tab and its content.</p>
<h3>Add headings to tab content</h3>
<p>Include a heading at the beginning of each tab that duplicates the information in the tab label. Providing a heading improves navigation on smaller screen sizes and for screen reader users.</p>
<h2>Research and testing</h2>
<p>This component has not yet been tried in research with users.</p>
<p>The design, code and guidance here are based on recommendations from <a href="https://inclusive-components.design/tabbed-interfaces/">Inclusive Components</a> and the <a href="https://www.nngroup.com/articles/tabs-used-right/">Nielsen Norman Group</a> as well as user research findings and examples of tabs in the following services:</p>
<ul>
<li>Manage bereavement support payment (DWP)</li>
<li>Support for check your state pension (DWP)</li>
<li>Access to work integrated system (DWP)</li>
<li>Bank holidays (GDS)</li>
<li>Universal Credit (DWP)</li>
<li>Criminal Justice Services (CPP)</li>
<li>Judiciary UI internal systems (HMCTS)</li>
<li>Rural Payments (Defra)</li>
</ul>
<h3>Next steps</h3>
<p>User research is needed to confirm:</p>
<ul>
<li>which types of services tabs work best in</li>
<li>that this approach to tabs is the best option for screen reader users and sighted keyboard users</li>
<li>how this component should behave on small screen sizes</li>
</ul>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Tabs
layout: layout-example.njk
---

{% from "govuk/components/tabs/macro.njk" import govukTabs %}
{% from "govuk/components/table/macro.njk" import govukTable %}

{% set pastDayHtml %}
<h2 class="govuk-heading-l">Past day</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "3"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1"
      },
      {
        text: "0"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "2"
      },
      {
        text: "0"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastWeekHtml %}
<h2 class="govuk-heading-l">Past week</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "24"
      },
      {
        text: "18"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "16"
      },
      {
        text: "20"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      },
      {
        text: "27"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastMonthHtml %}
<h2 class="govuk-heading-l">Past month</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "98"
      },
      {
        text: "95"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "122"
      },
      {
        text: "131"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "126"
      },
      {
        text: "142"
      }
    ]
  ]
}) }}
{% endset -%}

{% set pastYearHtml %}
<h2 class="govuk-heading-l">Past year</h2>
{{ govukTable({
  head: [
    {
      text: "Case manager"
    },
    {
      text: "Cases opened"
    },
    {
      text: "Cases closed"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      },
      {
        text: "1472"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      },
      {
        text: "1083"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "1539"
      },
      {
        text: "1265"
      }
    ]
  ]
}) }}
{% endset -%}

{{ govukTabs({
  items: [
    {
      label: "Past day",
      id: "past-day",
      panel: {
        html: pastDayHtml
      }
    },
    {
      label: "Past week",
      id: "past-week",
      panel: {
        html: pastWeekHtml
      }
    },
    {
      label: "Past month",
      id: "past-month",
      panel: {
        html: pastMonthHtml
      }
    },
    {
      label: "Past year",
      id: "past-year",
      panel: {
        html: pastYearHtml
      }
    }
  ]
}) }}

```

```html
---
title: Tabs
layout: layout-example.njk
---




<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>

  <ul class="govuk-tabs__list">
    
          <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#past-day">
        Past day
      </a>
    </li>
      
    
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-week">
        Past week
      </a>
    </li>
      
    
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-month">
        Past month
      </a>
    </li>
      
    
          <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-year">
        Past year
      </a>
    </li>
      
    
  </ul>
  
      <div class="govuk-tabs__panel" id="past-day">
  
    <h2 class="govuk-heading-l">Past day</h2>
    <table class="govuk-table">
    
    
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
        
          <th scope="col" class="govuk-table__header">Case manager</th>
        
          <th scope="col" class="govuk-table__header">Cases opened</th>
        
          <th scope="col" class="govuk-table__header">Cases closed</th>
        
        </tr>
      </thead>
    
      <tbody class="govuk-table__body">
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">David Francis</td>
          
        
          
          
          <td class="govuk-table__cell">3</td>
          
        
          
          
          <td class="govuk-table__cell">0</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Paul Farmer</td>
          
        
          
          
          <td class="govuk-table__cell">1</td>
          
        
          
          
          <td class="govuk-table__cell">0</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Rita Patel</td>
          
        
          
          
          <td class="govuk-table__cell">2</td>
          
        
          
          
          <td class="govuk-table__cell">0</td>
          
        
        </tr>
      
    
      </tbody>
    </table>
  
  </div>
    
  
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
  
    <h2 class="govuk-heading-l">Past week</h2>
    <table class="govuk-table">
    
    
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
        
          <th scope="col" class="govuk-table__header">Case manager</th>
        
          <th scope="col" class="govuk-table__header">Cases opened</th>
        
          <th scope="col" class="govuk-table__header">Cases closed</th>
        
        </tr>
      </thead>
    
      <tbody class="govuk-table__body">
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">David Francis</td>
          
        
          
          
          <td class="govuk-table__cell">24</td>
          
        
          
          
          <td class="govuk-table__cell">18</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Paul Farmer</td>
          
        
          
          
          <td class="govuk-table__cell">16</td>
          
        
          
          
          <td class="govuk-table__cell">20</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Rita Patel</td>
          
        
          
          
          <td class="govuk-table__cell">24</td>
          
        
          
          
          <td class="govuk-table__cell">27</td>
          
        
        </tr>
      
    
      </tbody>
    </table>
  
  </div>
    
  
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
  
    <h2 class="govuk-heading-l">Past month</h2>
    <table class="govuk-table">
    
    
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
        
          <th scope="col" class="govuk-table__header">Case manager</th>
        
          <th scope="col" class="govuk-table__header">Cases opened</th>
        
          <th scope="col" class="govuk-table__header">Cases closed</th>
        
        </tr>
      </thead>
    
      <tbody class="govuk-table__body">
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">David Francis</td>
          
        
          
          
          <td class="govuk-table__cell">98</td>
          
        
          
          
          <td class="govuk-table__cell">95</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Paul Farmer</td>
          
        
          
          
          <td class="govuk-table__cell">122</td>
          
        
          
          
          <td class="govuk-table__cell">131</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Rita Patel</td>
          
        
          
          
          <td class="govuk-table__cell">126</td>
          
        
          
          
          <td class="govuk-table__cell">142</td>
          
        
        </tr>
      
    
      </tbody>
    </table>
  
  </div>
    
  
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
  
    <h2 class="govuk-heading-l">Past year</h2>
    <table class="govuk-table">
    
    
      <thead class="govuk-table__head">
        <tr class="govuk-table__row">
        
          <th scope="col" class="govuk-table__header">Case manager</th>
        
          <th scope="col" class="govuk-table__header">Cases opened</th>
        
          <th scope="col" class="govuk-table__header">Cases closed</th>
        
        </tr>
      </thead>
    
      <tbody class="govuk-table__body">
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">David Francis</td>
          
        
          
          
          <td class="govuk-table__cell">1380</td>
          
        
          
          
          <td class="govuk-table__cell">1472</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Paul Farmer</td>
          
        
          
          
          <td class="govuk-table__cell">1129</td>
          
        
          
          
          <td class="govuk-table__cell">1083</td>
          
        
        </tr>
      
    
      
        <tr class="govuk-table__row">
        
          
          
          <td class="govuk-table__cell">Rita Patel</td>
          
        
          
          
          <td class="govuk-table__cell">1539</td>
          
        
          
          
          <td class="govuk-table__cell">1265</td>
          
        
        </tr>
      
    
      </tbody>
    </table>
  
  </div>
    
  

</div>


```

## Tag {#tag}

<hr>
<h2>title: Tag
description: The tag component indicates the status of something, such as an item on a task list or a phase banner
section: Components
aliases: chip, badge, flag, token
backlogIssueId: 62
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>Use the tag component to show users the status of something.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;tag&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the tag component when it’s possible for something to have more than one status and it’s useful for the user to know about that status. For example, you can use a tag to show whether an item in a <a href="/components/task-list/">Task list component</a> has been ‘completed’.</p>
<h2>How it works</h2>
<p>There are two ways to use the tag component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>Tags are only used to indicate a status. Do not make a tag interactive by making it into a link or button. Use adjectives (descriptive words) and not verbs (action words) for the names of your tags. Using a verb might make a user think that clicking on them will do something.</p>
<p>Do not use tags to create links, buttons or other interactive elements, as users:</p>
<ul>
<li>are unlikely to identify the tags as something they’re meant to interact with</li>
<li>would see no visual difference between interactive and non-interactive tags</li>
</ul>
<h2>Showing one or two statuses</h2>
<p>Sometimes a single status is enough. For example if you need to tell users which parts of an application they’ve finished and which they have not, you may only need a ‘Completed’ tag. Because the user understands that if something does not have a tag, that means it’s incomplete.</p>
<p>The <a href="/patterns/complete-multiple-tasks/">Complete multiple tasks pattern</a> has an example of how to show one status using tags.</p>
<p>Or it can make sense to have two statuses. For example you may find that there’s a need to have one tag for ‘Active’ users and one for ‘Inactive’ users.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;tag&quot;, example: &quot;multiple-tags&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h2>Showing multiple statuses</h2>
<p>Tags should be helpful to users. The more you add, the harder it is for users to remember them. So start with the smallest number of statuses you think might work, then add more if your user research shows there’s a need for them.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;tag&quot;, example: &quot;coloured-tags&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h2>Using colour with tags</h2>
<p>You can use colour to help distinguish between different tags – or to help draw the user’s attention to a tag if it’s especially important. For example, it probably makes sense to use <code>govuk-tag--red</code> for a tag that reads ‘Urgent’.</p>
<p>Do not use colour alone to convey information, because it’s not accessible. If you use the same tag in more than one place, make sure you keep the colour consistent. This is to <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">meet WCAG 2.2 success criterion 1.4.1 Use of colour</a>.</p>
<h3>Additional colours</h3>
<p>If you need more tag colours, you can use the following colours.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;tag&quot;, example: &quot;all-colours&quot;, html: true, nunjucks: true, open: false }) }}</p>
<h2>Research on this component</h2>
<p>The Department for Education contributed the coloured tags. They’re being used in:</p>
<ul>
<li>apply for teacher training (used by citizens)</li>
<li>manage teacher training applications (used by teacher training providers)</li>
</ul>
<p>The tag component previously used uppercase bold text for the tags. This was changed as some research has shown that uppercase text can be harder to read, particularly for longer tag text.</p>
<p>The tag component previously used white text on a dark coloured background. Research from multiple teams found that some users perceived these as buttons and tried to click on them. The design was changed to try and avoid this, by using a lighter background colour and darker text.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Tag
layout: layout-example.njk
---

{%- from "govuk/components/tag/macro.njk" import govukTag -%}

{{ govukTag({
  text: "Completed"
}) }}

```

```html
---
title: Tag
layout: layout-example.njk
---<strong class="govuk-tag">
  Completed
</strong>


```

## Task List {#task-list}

<hr>
<h2>title: Task list
description: The task list component displays all the tasks a user needs to do, and allows users to easily identify which ones are done and which they still need to do.
section: Components
aliases:
backlogIssueId: 72
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>The task list component displays all the tasks a user needs to do, and allows users to easily identify which ones are done and which they still need to do.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;task-list&quot;, example: &quot;default&quot;, id: &quot;default-1&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the task list to give users more control over how they complete long, complex services.</p>
<p>Only use the task list if there’s evidence that users:</p>
<ul>
<li>do not want to, or cannot, complete all the tasks in one sitting</li>
<li>need to be able to choose the order they complete the tasks in</li>
</ul>
<h2>When not to use this component</h2>
<p>Try to simplify the service before you use a task list. If you’re able to reduce the number of tasks or steps involved, you might not need one.</p>
<p>Do not use the task list for a long service that needs to be completed in a specific order. If it needs to be completed over multiple sessions, consider allowing users to save their progress, and then to continue where they left off when they return. Use the start page to explain what users will be expected to do during the service.</p>
<p>The task list should not be used as a way of showing users their answers. For this, you should use a <a href="/components/summary-list/">Summary list component</a> instead.</p>
<h2>How it works</h2>
<p>There are 2 ways to use the task list component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk/docs/">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;task-list&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<p>Users should be able to complete tasks in whatever order they like.</p>
<p>The status alongside the task indicates whether they can start it. Users can select a task to start completing it. Once they have completed it and returned to the task list, the status for that task will have changed to ‘Completed’.</p>
<p>Users can only move on from the task list when all tasks are shown as ‘Completed’.</p>
<p>Read the <a href="/patterns/complete-multiple-tasks/">Complete multiple tasks pattern guidance</a> for more information on how to use the task list within a service.</p>
<h3>Tasks</h3>
<p>Tasks are usually actions that the user needs to take to complete a service. In a task list, the user should be able to choose to complete tasks in any order that works for them.</p>
<p>Each task within a task list includes a task name and a status. It can also include hint text if you decide this is needed.</p>
<p>The whole row is linked, allowing users to select anywhere within it to start the task.</p>
<h4>Write clear task descriptions</h4>
<p>The task name gives users a reasonable expectation of what that task is about. For example, ‘Your contact details’ or ‘Upload evidence’. Use sentence case, and keep it short. Users of screen readers might find it difficult to navigate the task list if the task names are too long.</p>
<p>If you’re finding it difficult to come up with a clear and concise task name, it might be because the task itself is too complex and may need to be separated into smaller tasks. Group questions and actions into tasks in a way that makes sense to users, based on their needs.</p>
<h4>Adding hint text</h4>
<p>Only use hint text if there is evidence that the user needs more information about what the task will include.</p>
<p>Keep hint text to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with the task link. This could frustrate users if the text is long.</p>
<p>Do not include links within the hint text. The whole task row links users to the task itself, so any links within the hint text will not work.</p>
<h4>Grouping tasks</h4>
<p>If there are a lot of tasks to complete, you might find that grouping them makes it easier for users to understand and plan what they need to do. Tasks can be grouped into separate task lists on a page. Give each task list a short heading that clearly explains the grouping.</p>
<p>Read the <a href="/patterns/complete-multiple-tasks/">Complete multiple tasks pattern guidance</a> for more information on grouping tasks.</p>
<h3>Statuses</h3>
<p>Statuses use colour and a short descriptor to give users a quick overview of how much of the task list they have completed, and how much is left to do.</p>
<p>Read the <a href="/patterns/complete-multiple-tasks/">Complete multiple tasks pattern guidance</a> for more information on status colours and text.</p>
<h2>Research on this component</h2>
<p>This component was created by a cross-government group using research from the previous task list pattern.</p>
<h3>Linking the whole task row to the task</h3>
<p>User feedback from the task list pattern has shown that some users currently try to select task statuses, thinking they are buttons or links. The statuses have been redesigned to look less like buttons, and now the whole task row is linked so that users can select anywhere within it to enter and begin the task.</p>
<h3>Formatting of statuses</h3>
<p>The use of uppercase in task statuses makes them harder to read. User research has also shown that once a few tasks have been completed, it is harder for users to scan the page and spot incomplete tasks.</p>
<p>Statuses are now written in sentence case to make them easier to read. The ‘Completed’ task now uses black text with no background colour, which will draw more attention to tasks that require action.</p>
<p>We have also introduced a new colour palette for statuses, using colour contrasts that meet accessibility guidance.</p>
<h3>Known issues and gaps</h3>
<p>While this new component is based on user research from the task list pattern, we still need to carry out user testing with this new component. In particular, we would like to test the following assumptions:</p>
<ul>
<li>the benefits of linking the whole task row outweigh the risks of accidental clicking</li>
<li>the contrast of the statuses is sufficient</li>
<li>the suggested wording of the statuses make the most sense to users</li>
</ul>
<p>If you are using this component in a service, we would like to hear about any user research so that we can identify any potential issues.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Task list
layout: layout-example.njk
---

{% from "govuk/components/task-list/macro.njk" import govukTaskList %}

{{ govukTaskList({
  idPrefix: "company-details",
  items: [
    {
      title: {
        text: "Company Directors"
      },
      href: "#",
      status: {
        text: "Completed"
      }
    },
    {
      title: {
        text: "Registered company details"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Financial history"
      },
      hint: {
        text: "Include 5 years of the company’s relevant financial information"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Business plan"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "References"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "govuk-tag--blue"
        }
      }
    }
  ]
}) }}

```

```html
---
title: Task list
layout: layout-example.njk
---






<ul class="govuk-task-list">
  
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
    
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-1-status">
        Company Directors
      </a>
    
    
    </div>
    <div class="govuk-task-list__status" id="company-details-1-status">
    
      Completed
    
    </div>
  </li>
  
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
    
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-2-status">
        Registered company details
      </a>
    
    
    </div>
    <div class="govuk-task-list__status" id="company-details-2-status">
    
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    
    </div>
  </li>
  
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
    
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-3-hint company-details-3-status">
        Financial history
      </a>
    
    
      <div id="company-details-3-hint" class="govuk-task-list__hint">
        Include 5 years of the company’s relevant financial information
      </div>
    
    </div>
    <div class="govuk-task-list__status" id="company-details-3-status">
    
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    
    </div>
  </li>
  
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
    
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-4-status">
        Business plan
      </a>
    
    
    </div>
    <div class="govuk-task-list__status" id="company-details-4-status">
    
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    
    </div>
  </li>
  
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
    
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="company-details-5-status">
        References
      </a>
    
    
    </div>
    <div class="govuk-task-list__status" id="company-details-5-status">
    
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    
    </div>
  </li>
  
</ul>


```

## Text Input {#text-input}

<hr>
<h2>title: Text input
description: Help users enter information with the text input component
section: Components
aliases: text box, text field, input field, text entry box
backlogIssueId: 51
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.</p>
<h2>When not to use this component</h2>
<p>Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the <a href="/components/textarea/">Textarea component</a>.</p>
<h2>How it works</h2>
<p>All text inputs must have labels, and in most cases the label should be visible.</p>
<p>You should align labels above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.</p>
<h3>Avoid placeholder text</h3>
<p>Do not use placeholder text in place of a label, or for hints or examples, as:</p>
<ul>
<li>it vanishes when the user starts typing, which can cause problems for users with memory conditions or when reviewing answers</li>
<li>not all screen readers read it out</li>
<li>its browser default styles often do not meet <a href="https://www.w3.org/TR/WCAG22/#contrast-minimum">WCAG 2.2 success criterion 1.4.3 Contrast (minimum)</a></li>
</ul>
<h3>If you&#39;re asking one question on the page</h3>
<p>If you’re asking just <a href="/patterns/question-pages/#start-by-asking-one-question-per-page">one question per page in your service</a> as recommended, you can set the contents of the <code>&lt;label&gt;</code> as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<p>Read more about <a href="/get-started/labels-legends-headings/">why and how to set legends as headings</a>.</p>
<p>There are 2 ways to use the text input component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>If you’re asking more than one question on the page</h3>
<p>If you&#39;re asking more than one question on the page, do not set the contents of the <code>&lt;label&gt;</code> as the page heading. Read more about <a href="/patterns/question-pages/#asking-multiple-questions-on-a-page">asking multiple questions on Question pages</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;without-heading&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h3>Use appropriately-sized text inputs</h3>
<p>Help users understand what they should enter by making text inputs the right size for the content they’re intended for.</p>
<p>By default, the width of text inputs is fluid and will fit the full width of the container they are placed into.</p>
<p>If you want to make the input smaller, you can either use a fixed width input, or use the width override classes to create a smaller, fluid width input.</p>
<h4>Fixed width inputs</h4>
<p>Use fixed width inputs for content that has a specific, known length. Postcode inputs should be postcode-sized, phone number inputs should be phone number-sized.</p>
<p>The widths are designed for specific character lengths and to be consistent across a range of browsers. They include extra padding to fit icons that some browsers might insert into the input (for example to show or generate a password).</p>
<p>On fixed width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-fixed-width&quot;, html: true, nunjucks: true, open: false, size: &quot;l&quot; }) }}</p>
<h4>Fluid width inputs</h4>
<p>Use the width override classes to reduce the width of an input in relation to its parent container, for example, to two-thirds.</p>
<p>Fluid width inputs will resize with the viewport.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-fluid-width&quot;, html: true, nunjucks: true, open: false, size: &quot;xl&quot; }) }}</p>
<h3>Hint text</h3>
<p>Use hint text for help that’s relevant to the majority of users, like how their information will be used, or where to find it.</p>
<p>Keep hint text to a single short sentence, without any full stops.</p>
<p>Do not use links in hint text. While screen readers will read out the link text when describing the field, they usually do not tell users the text is a link.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-hint-text&quot;, html: true, nunjucks: true, open: false, size: &quot;s&quot; }) }}</p>
<h4>When not to use hint text</h4>
<p>Do not use hint text to explain anything that&#39;s longer than a short, simple sentence. Screen readers read out the entire text when users interact with the form element. This could frustrate users if the text is long.</p>
<p>If you’re asking a question that needs a detailed explanation, see <a href="/patterns/question-pages/#asking-complex-questions-without-using-hint-text">asking complex questions without using hint text</a>.</p>
<h4>Avoid links</h4>
<p>Do not include links within hint text. While screen readers will read out the link text when describing the field, they will not tell users that the text is a link.</p>
<h3>Numbers</h3>
<h4>Asking for whole numbers</h4>
<p>If you&#39;re asking the user to enter a whole number, set the <code>inputmode</code> attribute to <code>numeric</code> to use the numeric keypad on devices with on-screen keyboards.</p>
<p>See how to do this by opening the HTML and Nunjucks tabs in this example:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;number-input&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>There is specific guidance on:</p>
<ul>
<li><a href="/patterns/dates/">how to ask for dates</a></li>
<li><a href="/patterns/phone-numbers/">how to ask for phone numbers</a></li>
</ul>
<h4>Asking for decimal numbers</h4>
<p>If you&#39;re asking the user to enter a number that might include decimal places, use <code>input type=&quot;text&quot;</code>.</p>
<p>Do not set the <code>inputmode</code> attribute to <code>decimal</code> as it causes some devices to bring up a keypad without a key for the decimal separator.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;decimal-input&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<h4>Avoid using inputs with a type of number</h4>
<p>Do not use <code>&lt;input type=&quot;number&quot;&gt;</code> unless your user research shows that there’s a need for it. With <code>&lt;input type=&quot;number&quot;&gt;</code> there’s a risk of users accidentally incrementing a number when they’re trying to do something else - for example, scroll up or down the page. And if the user tries to enter something that’s not a number, there’s no explicit feedback about what they’re doing wrong.</p>
<h3>Codes and sequences</h3>
<p>Help the user visually check the code they&#39;ve typed is correct by styling the input&#39;s text to visually separate each character. This is important if you&#39;re asking the user to enter a code or sequence they&#39;re unlikely to have memorised, such as an application reference ID, account number or security code.</p>
<p>You do not need to do this for memorable information, such as phone numbers and postcodes.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;code-sequence&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot; }) }}</p>
<p>There is specific guidance on:</p>
<ul>
<li><a href="/patterns/bank-details/">how to ask for bank account details</a></li>
<li><a href="/patterns/national-insurance-numbers/">how to ask for National Insurance numbers</a></li>
<li><a href="/patterns/confirm-a-phone-number/">how to confirm a phone number</a></li>
</ul>
<h3>Prefixes and suffixes</h3>
<p>Use prefixes and suffixes to help users enter things like currencies and measurements.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-prefix-suffix&quot;, html: true, nunjucks: true, closed: true, size: &quot;s&quot; }) }}</p>
<p>Prefixes and suffixes are useful when there&#39;s a commonly understood symbol or abbreviation for the type of information you&#39;re asking for. Do not rely on prefixes or suffixes alone, because screen readers will not read them out.</p>
<p>If you need a specific type of information, say so in the input label or hint text as well. For example, put &#39;Cost, in pounds&#39; in the input label and use the &#39;£&#39; symbol in the prefix.</p>
<p>Position prefixes and suffixes so that they&#39;re outside of their input. This is to avoid interfering with some browsers that might insert an icon into the input (for example to show or generate a password).</p>
<p>Some users may miss that the input already has a suffix or prefix, and enter a prefix or suffix into the input. Allow for this in your validation and do not show an error.</p>
<h4>Text inputs with a prefix</h4>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-prefix&quot;, html: true, nunjucks: true, closed: true, size: &quot;s&quot; }) }}</p>
<h4>Text inputs with a suffix</h4>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-suffix&quot;, html: true, nunjucks: true, closed: true, size: &quot;s&quot; }) }}</p>
<h3>Use the autocomplete attribute</h3>
<p>Use the <code>autocomplete</code> attribute on text inputs to help users complete forms more quickly. This lets you specify an input&#39;s purpose so browsers can autofill the information on a user&#39;s behalf if they’ve entered it previously.</p>
<p>For example, to enable autofill on a postcode field, set the <code>autocomplete</code> attribute to <code>postal-code</code>. See how to do this in the HTML and Nunjucks tabs in the following example.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-autocomplete-attribute&quot;, displayExample: false, html: true, nunjucks: true, open: true, size: &quot;s&quot; }) }}</p>
<p>If you are working in production and there is a relevant <a href="https://www.w3.org/TR/WCAG22/#input-purposes">input purpose</a>, you&#39;ll need to use the <code>autocomplete</code> attribute to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html">WCAG 2.2 success criterion 1.3.5 Identify input purpose, level AA</a>.</p>
<p>You will not normally need to use the <code>autocomplete</code> attribute in prototypes, as users will not generally be using their own devices.</p>
<h3>Do not disable copy and paste</h3>
<p>Users often need to copy and paste information into a text input, so do not stop them from doing this.</p>
<h3>Avoid restricting the length of a user&#39;s input</h3>
<p>Using the <code>maxlength</code> attribute means there is no feedback to users that their text input is truncated. This is especially true where the text has been copied and pasted from elsewhere. This can cause users to accidentally provide incorrect or incomplete information.</p>
<p>A restrictive maximum length can stop users from formatting information in their usual way. For example, putting spaces in a postcode or commas in a large number.</p>
<p>Some assistive technologies do not tell users if an input has a <code>maxlength</code> set or if the user has passed the limit. Voice control software may insert additional spaces into the input.</p>
<p>If you must enforce a maximum length for technical reasons, inform the user of the limit in the hint, but allow them to provide more information. Only return an error if the value is longer than allowed after normalisation. For longer values, consider using the <a href="/components/character-count/">Character count component</a> instead.</p>
<h3>How and when to spellcheck a user’s input</h3>
<p>Sometimes, browsers will spellcheck the information a user puts into a text input. If a user enters something which is recognised as a spelling error, sighted users will see a red line under the word.</p>
<p>If you are asking users for information which is not appropriate to spellcheck, like a reference number, name, email address or National Insurance number, disable the spellcheck.</p>
<p>To do this set the <code>spellcheck</code> attribute to <code>false</code> as shown in this example.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-spellcheck-disabled&quot;, html: true, nunjucks: true, displayExample: false, open: true, size: &quot;s&quot; }) }}</p>
<p>Browsers do not consistently spellcheck user’s input by default. If you are asking a question where spellcheck would be useful, set the <code>spellcheck</code> attribute to <code>true</code>.</p>
<h3>Error messages</h3>
<p>Error messages should be styled like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;error&quot;, html: true, nunjucks: true, closed: true, size: &quot;s&quot; }) }}</p>
<h4>If the input has a prefix or a suffix</h4>
<p>{{ example({ group: &quot;components&quot;, item: &quot;text-input&quot;, example: &quot;input-prefix-suffix-error&quot;, html: true, nunjucks: true, closed: true, size: &quot;s&quot; }) }}</p>
<p>Make sure errors follow the guidance in the <a href="/components/error-message/">Error message component</a> and have specific error messages for specific error states.</p>
<h4>If the input is empty</h4>
<p>Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter your first name’.</p>
<h4>If the input is too long</h4>
<p>Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Address line 1 must be 35 characters or less’.</p>
<h4>If the input is too short</h4>
<p>Say ‘[whatever it is] must be [number] characters or more’.<br>
For example, ‘Full name must be 2 characters or more’.</p>
<h4>If the input has both a minimum and maximum length</h4>
<p>Say ‘[whatever it is] must be between [number] and [number] characters’.<br>
For example, ‘Last name must be between 2 and 35 characters’.</p>
<h4>If the input uses characters that are not allowed and you know what the characters are</h4>
<p>Say ‘[whatever it is] must not include [characters]’.<br>
For example, ‘Town or city must not include è and £’.</p>
<p>Support all the characters the user might need to enter, including numbers and symbols.</p>
<h4>If the input uses characters that are not allowed and you do not know what the characters are</h4>
<p>Say ‘[whatever it is] must only include [list of allowed characters]’.<br>
For example, ‘Full name must only include letters a to z, and special characters such as hyphens, spaces and apostrophes’.</p>
<p>Support all the characters the user might need to enter, including numbers and symbols.</p>
<h4>If the input is not a number</h4>
<p>Say ‘[whatever it is] must be a number [optional example]’.<br>
For example, ‘Hours worked a week must be a number, like 30’.</p>
<p>If the input requires a decimal, use a decimal in the example. If the input allows both whole numbers and decimals, use both in the example.</p>
<h4>If the input is not a whole number</h4>
<p>Say ‘[whatever it is] must be a whole number [optional example]’.<br>
For example, ‘Hours worked a week must be a whole number, like 30’.</p>
<h4>If the number is too low</h4>
<p>Say ‘[whatever it is] must be [lowest] or more’.<br>
For example, ‘Hours worked a week must be 16 or more’.</p>
<h4>If the number is too high</h4>
<p>Say ‘[whatever it is] must be [highest] or fewer’.<br>
For example, ‘Hours worked a week must be 99 or fewer’.</p>
<h4>If the input must be between 2 numbers</h4>
<p>Say ‘[whatever it is] must be between [lowest] and [highest]’.<br>
For example, ‘Hours worked a week must be between 16 and 99’.</p>
<h4>If the input is an amount of money that needs decimals</h4>
<p>Say ‘[whatever it is] must include pence, like 123.45 or 156.00’.<br>
For example, ‘How much you earn a week must include pence, like 123.45 or 156.00’.</p>
<h4>If the input is an amount of money that must not have decimals</h4>
<p>Say ‘[whatever it is] must not include pence, like 123 or 156’.<br>
For example, ‘How much you earn a week must not include pence, like 123 or 156’.</p>
<h2>Research on this component</h2>
<p>Read a blog post about <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">the problems we discovered with input type=&quot;number&quot;</a>.</p>
<p>The prefix and suffix design has tested well in a number of services, but <a href="https://github.com/alphagov/govuk-design-system-backlog/issues/134#issuecomment-655615251">some users have been observed clicking on prefixes</a>, on the assumption that this would do something.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Text input
layout: layout-example-form.njk
---

{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "event-name",
  name: "eventName"
}) }}

```

```html
---
title: Text input
layout: layout-example-form.njk
---






<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="event-name">
      What is the name of the event?
    </label>
  </h1>


  <input
    
        
      
    
        
      
    
        
      
    
        
      
    
    
    
    
    
    
    
    
    
   class="govuk-input" id="event-name" name="eventName" type="text">

</div>


```

## Textarea {#textarea}

<hr>
<h2>title: Textarea
description: Help users provide detailed information using the textarea component
section: Components
aliases: multi-line text box, multi-line text field
backlogIssueId: 65
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;textarea&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.</p>
<h2>When not to use this component</h2>
<p>Users can find open-ended questions difficult to answer. It might be better to break up one complex question into a series of simple ones, for example where users can select from options using a <a href="/components/radios/">Radios component</a>.</p>
<h3>If you need to ask an open question</h3>
<p>Do not use the textarea component if you need to let users enter shorter answers no longer than a single line, such as a phone number or name. In this case, you should use the <a href="/components/text-input/">Text input component</a>.</p>
<h2>How it works</h2>
<p>You must label textareas. Placeholder text is not a suitable substitute for a label, as it disappears when users click inside the textarea.</p>
<p>Labels must be aligned above the textarea they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.</p>
<p>There are 2 ways to use the textarea component. You can use HTML or, if you’re using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;textarea&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, size: &quot;m&quot;, titleSuffix: &quot;second&quot; }) }}</p>
<h3>Use appropriately-sized textareas</h3>
<p>Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by specifying the <code>rows</code> attribute.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;textarea&quot;, example: &quot;specifying-rows&quot;, html: true, nunjucks: true, open: false, size: &quot;l&quot; }) }}</p>
<h3>Do not disable copy and paste</h3>
<p>Users will often need to copy and paste information into a textarea, so do not stop them from doing this.</p>
<h3>If you’re asking more than one question on the page</h3>
<p>If you&#39;re asking more than one question on the page, do not set the contents of the <code>&lt;label&gt;</code> as the page heading. Read more about <a href="/patterns/question-pages/#asking-multiple-questions-on-a-page">asking multiple questions on Question pages</a>.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;textarea&quot;, example: &quot;without-heading&quot;, html: true, nunjucks: true, open: false, size: &quot;l&quot; }) }}</p>
<h3>Limiting the number of characters</h3>
<p>If there’s a good reason to limit the number of characters users can enter, you can use the <a href="/components/character-count/">Character count component</a>.</p>
<h3>Error messages</h3>
<p>Error messages should be styled like this:</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;textarea&quot;, example: &quot;error&quot;, html: true, nunjucks: true, open: false, size: &quot;l&quot; }) }}</p>
<p>Make sure errors follow the guidance in the <a href="/components/error-message/">Error message component</a> and have specific error messages for specific error states.</p>
<h4>If the input is empty</h4>
<p>Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter summary’.</p>
<h4>If the input is too long</h4>
<p>Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Summary must be 400 characters or less’.</p>
<h4>If the input is too short</h4>
<p>Say ‘[whatever it is] must be [number] characters or more’.<br>
For example, ‘Summary must be 10 characters or more’.</p>
<h4>If the input is too long or too short</h4>
<p>Say ‘[whatever it is] must be between [number] and [number] characters’.<br>
For example, ‘Summary must be between 10 and 400 characters’.</p>
<h4>If the input uses characters that are not allowed and you know what the characters are</h4>
<p>Say ‘[whatever it is] must not include [characters]’.<br>
For example, ‘Summary must not include è and £’.</p>
<h4>If the input uses characters that are not allowed and you do not know what the characters are</h4>
<p>Say ‘[whatever it is] must only include [list of allowed characters]’.<br>
For example, ‘Summary must only include letters a to z, hyphens, spaces and apostrophes.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Textarea
layout: layout-example-form.njk
---

{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "moreDetail",
  id: "more-detail",
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information, like your National Insurance number or credit card details"
  }
}) }}

```

```html
---
title: Textarea
layout: layout-example-form.njk
---






<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="more-detail">
      Can you provide more detail?
    </label>
  </h1>

  
  
  <div id="more-detail-hint" class="govuk-hint">
    Do not include personal or financial information, like your National Insurance number or credit card details
  </div>



  <textarea class="govuk-textarea" id="more-detail" name="moreDetail" rows="5" aria-describedby="more-detail-hint"></textarea>

</div>


```

## Warning Text {#warning-text}

<hr>
<h2>title: Warning text
description: Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take
section: Components
aliases: important text, legal text
backlogIssueId: 71
layout: layout-pane.njk</h2>
<p>{% from &quot;_example.njk&quot; import example %}</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;warning-text&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, loading: &quot;eager&quot; }) }}</p>
<h2>When to use this component</h2>
<p>Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might&nbsp;take.</p>
<h2>How it works</h2>
<p>There are 2 ways to use the warning text component. You can use HTML or, if you are using <a href="https://mozilla.github.io/nunjucks/">Nunjucks</a> or the <a href="https://prototype-kit.service.gov.uk">GOV.UK Prototype Kit</a>, you can use the Nunjucks macro.</p>
<p>{{ example({ group: &quot;components&quot;, item: &quot;warning-text&quot;, example: &quot;default&quot;, html: true, nunjucks: true, open: false, titleSuffix: &quot;second&quot; }) }}</p>
<p>You might need to rewrite the hidden text (‘Warning’ in the example) to make it appropriate for your context.</p>


### Default Example

```njk
{% from "govuk/components/components/macro.njk" import govukComponents %}

---
title: Warning text
layout: layout-example.njk
---

{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "You can be fined up to £5,000 if you do not register.",
  iconFallbackText: "Warning"
}) }}

```

```html
---
title: Warning text
layout: layout-example.njk
---



<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You can be fined up to £5,000 if you do not register.
  </strong>
</div>


```

