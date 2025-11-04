import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import nunjucks from 'nunjucks';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class ComponentDocumentationGenerator {
    constructor(designSystemPath) {
        this.designSystemPath = designSystemPath;
        this.outputPath = path.join(__dirname, '../docs/components.md');
        
        // Configure nunjucks with multiple template paths
        const nodeModulesPath = path.join(__dirname, '../node_modules/govuk-frontend');
        nunjucks.configure([
            path.join(designSystemPath, 'src'),
            nodeModulesPath,
            path.join(nodeModulesPath, 'dist')
        ]);
    }

    async generate() {
        try {
            // Find all component folders
            const componentPaths = await glob('src/components/*/', {
                cwd: this.designSystemPath,
                absolute: true
            });

            let documentation = '# GOV.UK Design System Components\n\n';

            for (const componentPath of componentPaths) {
                const componentName = path.basename(componentPath);
                console.log(`Processing component: ${componentName}`);

                const componentDoc = await this.processComponent(componentPath, componentName);
                documentation += componentDoc;
            }

            // Ensure the docs directory exists
            await fs.mkdir(path.dirname(this.outputPath), { recursive: true });

            // Write the documentation
            await fs.writeFile(this.outputPath, documentation, 'utf8');
            console.log(`Documentation generated successfully at ${this.outputPath}`);

        } catch (error) {
            console.error('Error generating documentation:', error);
            throw error;
        }
    }

    async processComponent(componentPath, componentName) {
        let componentDoc = `## ${componentName}\n\n`;

        try {
            // Read the component's markdown documentation
            const mdPath = path.join(componentPath, 'index.md');
            const mdContent = await fs.readFile(mdPath, 'utf8');
            
            // Process the markdown content
            componentDoc += await marked.parse(mdContent) + '\n\n';

            // Process the default example
            const defaultExamplePath = path.join(componentPath, 'default');
            componentDoc += await this.processExample(defaultExamplePath, 'Default');

            return componentDoc;

        } catch (error) {
            console.error(`Error processing component ${componentName}:`, error);
            return `## ${componentName}\n\nError processing component documentation.\n\n`;
        }
    }

    async processExample(examplePath, exampleName) {
        let exampleDoc = '';

        try {
            // Add example name as header
            exampleDoc += `### ${exampleName} Example\n\n`;

            // Read and add the Nunjucks template code
            const templatePath = path.join(examplePath, 'index.njk');
            const templateCode = await fs.readFile(templatePath, 'utf8');
            
            // Add the imports for the component macros
            const componentName = path.basename(path.dirname(path.dirname(examplePath)));
            const imports = `{% from "govuk/components/${componentName}/macro.njk" import govuk${componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')} %}\n\n`;
            
            exampleDoc += '```njk\n' + imports + templateCode + '\n```\n\n';

            // Try to read example data if it exists
            try {
                const dataPath = path.join(examplePath, 'data.json');
                const data = JSON.parse(await fs.readFile(dataPath, 'utf8'));
                
                // Render the template with the data
                const renderedHtml = nunjucks.render(templatePath, data);
                exampleDoc += '```html\n' + renderedHtml + '\n```\n\n';
            } catch (err) {
                // If no data file exists, render without data
                const renderedHtml = nunjucks.render(templatePath, {});
                exampleDoc += '```html\n' + renderedHtml + '\n```\n\n';
            }

            return exampleDoc;

        } catch (error) {
            console.error(`Error processing example ${exampleName}:`, error);
            return `### ${exampleName} Example\n\nError processing example.\n\n`;
        }
    }
}

// Main execution
const designSystemPath = process.argv[2];

if (!designSystemPath) {
    console.error('Please provide the path to the GOV.UK Design System repository');
    process.exit(1);
}

const generator = new ComponentDocumentationGenerator(designSystemPath);
generator.generate()
    .catch(error => {
        console.error('Documentation generation failed:', error);
        process.exit(1);
    });