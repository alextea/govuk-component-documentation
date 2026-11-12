# GOV.UK Prototype Kit guide

Guidance for building research prototypes with the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/). This guide complements the [GOV.UK Frontend guide](govuk-frontend-guide.md) and the component references; it focuses on prototype journeys, session data and routes.

The recommendations are for prototypes, not production services. They draw on the GOV.UK Prototype Kit, transferable ideas from the [NHS prototype kit guide](https://github.com/edwardhorsford/NHS-LLM-documentation/blob/main/guides/nhs-prototype-kit-guide.instructions.md) and [Ministry of Justice AI guidelines](https://github.com/ministryofjustice/gov-reuse/blob/main/assets/ai-context.md), and patterns observed in a GOV.UK Prototype Kit project.

## Prototype for research

- Build only enough behaviour to make the journey being explored credible. Prefer a simple, understandable prototype over production architecture.
- Do not add a database, real account management, email delivery, production-grade error handling, automated tests or linting unless the research need or user request calls for them.
- Use synthetic data. Do not put real personal data, passwords or credentials into prototype session data or source control.
- Simulate consequential actions such as invitations, downloads or background processing unless the research specifically needs a real integration. Make any simulation clear to the team.
- A prototype is not a production service. Do not assume its code or security controls are ready to deploy as a live service.

## Start with a research task

Organise pages around the tasks participants need to try. A prototype home page can link to scenarios that put the participant into a useful starting state.

For each iteration, record:

- when it was created or updated
- what changed
- the hypothesis or task being explored
- user-testing outcomes and learnings, when available

Use realistic but fictional content rather than placeholder text. When a scenario needs known starting data, initialise it deliberately and make it easy to start again. Reset only the state that scenario needs, and avoid carrying over data that could make the journey confusing. If the prototype has multiple iterations, keep their pages and routes separate so participants stay within the scenario they started.

## Pages and GOV.UK Frontend

- Follow the existing project's page, layout and naming conventions. Prototype Kit pages usually live in `app/views/`; check the project's setup before adding routes for pages.
- Set a useful page title and a single, descriptive page heading. Use the project's shared layout and navigation conventions.
- Use GOV.UK Frontend Nunjucks macros for Design System components. Read the [GOV.UK Frontend guide](govuk-frontend-guide.md) and the relevant component reference; do not guess macro parameters or recreate components by hand.
- Prefer real links to known destinations, including for back links. Do not rely on browser-history JavaScript for essential navigation.
- Use a form submit button for an action and a link for navigation.
- Prefer GOV.UK Frontend classes and components to custom CSS. Organise any necessary styles by page or component, and avoid inline styles in templates.
- Keep pages usable without JavaScript. Use JavaScript only for enhancements needed by the prototype, not to replace ordinary server-rendered pages and form submissions.

For exact page structure, layout, accessible form patterns, typography and component parameters, use the Frontend guide and component references rather than duplicating that guidance here.

## Forms and session data

The Prototype Kit saves submitted form fields to the session using their `name`. Views can read these values from `data`, and routes can read or update them through `req.session.data`.

- Choose clear, consistent field names and preserve them when a journey spans multiple pages.
- Prefill fields from saved session data when participants may return to change an answer. Use the correct macro option for the component: for example, an input uses `value`, while checkboxes use `values`.
- Keep scenario answers and temporary state in the session. Use the project's session defaults for reusable example or reference data, not as a substitute for deciding what each scenario should initialise.
- Keep data scoped to the participant's session. Do not use shared mutable objects for values that one participant can change.
- Treat the session as temporary prototype state, not durable storage. Explain or provide a way to restart a scenario when clearing it would otherwise be confusing.

## Routes and branching

The Kit handles straightforward form submissions and page navigation. Add a custom route only when the journey needs branching, state changes, data preparation, a confirmation step, or a simulated process. Do not add a route that merely redirects to the next page when a form can post there directly.

For form submissions and other state-changing actions, prefer a POST route and redirect to a GET page afterwards. This keeps refreshes from repeating the action and gives the participant a stable destination. A scenario-start link may deliberately initialise session data, but make its reset behaviour clear and predictable.

```javascript
router.post('/contact-method-answer', (req, res) => {
  const contactMethod = req.session.data.contactMethod

  if (contactMethod === 'Email') {
    return res.redirect('/email-address')
  }

  if (contactMethod === 'Phone') {
    return res.redirect('/phone-number')
  }

  return res.redirect('/contact-method')
})
```

Keep route logic focused on the journey. Put page content in views, and use shared macros or includes when the same content appears on multiple pages. Keep branching in routes rather than building complex conditional logic into a template.

## Validation and feedback

Do not add validation or error states by default. Add them when the research task is specifically about errors, or when the participant must make a choice for the prototype to continue coherently. Allow forms to proceed even without content; only build a full error journey when it is needed.

After an action, show a clear confirmation when it helps the participant understand what happened. If the confirmation is intended to appear once, consume its session flag when rendering it so a refresh does not show it again.

## Nunjucks and template code

- Follow the syntax and formatting used by the project. Nunjucks does not support JavaScript template syntax such as trailing commas.
- Use `set` blocks or macros to prepare reusable content. When passing markup to a component's `html` option, build it in a Nunjucks block rather than embedding a long HTML string.
- Keep conditional logic in templates simple. Prepare complex data in a route or a shared helper.
- Check component documentation for the correct heading, label, legend, hint and prefill options. Do not use deprecated options or manually set checked states when saved form data can provide them.

## Lightweight checks

Before sharing a prototype, walk through each research scenario with realistic synthetic data. Check that:

- the participant can start, complete and restart the intended journey
- answers persist where expected and can be changed
- branching, confirmation, cancel and return paths go to the right pages
- the key pages remain understandable at a narrow viewport and with JavaScript disabled
- controls have labels, headings are meaningful, and links describe their destinations

Use the project's existing preview and browser-checking workflow. Add automated checks or new tooling only when requested or justified by the prototype's needs.

## Further reading

- [GOV.UK Prototype Kit documentation](https://prototype-kit.service.gov.uk/docs)
- [GOV.UK Frontend guide](govuk-frontend-guide.md) and [component references](components/)
- [NHS prototype kit guide](https://github.com/edwardhorsford/NHS-LLM-documentation/blob/main/guides/nhs-prototype-kit-guide.instructions.md)
- [Ministry of Justice AI guidelines for GOV.UK Prototype Kit](https://github.com/ministryofjustice/gov-reuse/blob/main/assets/ai-context.md)
