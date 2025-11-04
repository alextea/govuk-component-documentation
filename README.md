# GOV.UK Component Documentation Generator

A Node.js tool that generates comprehensive documentation for GOV.UK Design System components. This tool processes components from the GOV.UK Design System repository and creates a single markdown file containing documentation, code examples, and rendered output for each component.

## Features

- Generates a single, easy-to-navigate markdown file for all components
- Includes component documentation from source files
- Shows Nunjucks template code for each component's default example
- Displays rendered HTML output for each example
- Provides a table of contents for quick navigation
- Components are sorted alphabetically for easy reference

## Prerequisites

- Node.js 16 or higher
- A local copy of the [GOV.UK Design System repository](https://github.com/alphagov/govuk-design-system)

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

Run the documentation generator by providing the path to your local GOV.UK Design System repository:

```bash
npm start /path/to/govuk-design-system
```

The script will:
1. Scan the Design System repository for components in `src/components/`
2. Extract documentation from each component's `index.md` file
3. Process the default example from each component's `default/index.njk` template
4. Generate a comprehensive markdown file at `docs/components.md`

## Output Structure

The generated documentation (`docs/components.md`) includes:

- A table of contents linking to all components
- For each component:
  - Component name and description from the source documentation
  - Default example with:
    - Nunjucks template code
    - Rendered HTML output
  - Additional documentation from the component's markdown files

## Dependencies

- `glob`: For finding component files
- `nunjucks`: For rendering component templates
- `marked`: For processing markdown content
- `govuk-frontend`: For component macros and templates

## Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Related Resources

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend)
- [GOV.UK Design System Repository](https://github.com/alphagov/govuk-design-system)