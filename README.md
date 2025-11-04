# GOV.UK Component Documentation Generator

This tool generates comprehensive documentation for GOV.UK Design System components by processing the component examples and configurations from a local copy of the govuk-frontend repository.

## Prerequisites

- Node.js 16 or higher
- A local copy of the [GOV.UK Design System repository](https://github.com/alphagov/govuk-frontend)

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

Run the script by providing the path to your local GOV.UK Design System repository:

```bash
npm start /path/to/govuk-frontend
```

The script will:
1. Scan the Design System repository for component definitions
2. Process each component's YAML configuration
3. Extract examples and their associated templates
4. Generate a comprehensive markdown file with:
   - Component descriptions
   - Parameter documentation
   - Code examples (both Nunjucks templates and rendered HTML)
   - Usage guidelines

The generated documentation will be saved to `docs/components.md`.

## Output Format

The generated documentation includes:

- Component name and description
- Parameter tables with type information and descriptions
- Examples with:
  - Example name and description
  - Nunjucks template code
  - Rendered HTML output

## Error Handling

The script includes robust error handling and will:
- Log errors for individual component processing failures
- Continue processing other components if one fails
- Provide clear error messages in the console
- Include error notifications in the generated documentation where applicable