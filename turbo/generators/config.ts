import { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper('removeDashes', (txt) => txt.replace(/-/g, ''));
  plop.setGenerator('react-primitive', {
    description:
      'Generate a new primitive component with documentation and tests',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/react/src/primitives/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/react-primitive-component.hbs',
      },
      {
        type: 'add',
        path: 'packages/react/src/primitives/{{pascalCase name}}/index.ts',
        template: "export { {{pascalCase name}} } from './{{pascalCase name}}'",
      },
      {
        type: 'add',
        path: 'docs/src/pages/[platform]/components/{{removeDashes name}}/index.page.mdx',
        templateFile: 'templates/react-primitive-docs-mdx-page.hbs',
      },
      {
        type: 'add',
        path: 'packages/react/src/primitives/types/{{name}}.ts',
        templateFile: 'templates/react-primitive-component-types.txt',
      },
      {
        type: 'append',
        path: 'packages/react/src/primitives/types/index.ts',
        pattern: /(?<insertion>\/\/ add primitive component types here)/g,
        template: "export * from './{{name}}';",
      },
      {
        type: 'append',
        path: 'docs/src/data/links.tsx',
        pattern: /(?<insertion>\/\/ put docs link here)/g,
        templateFile: 'templates/react-primitive-docs-links.txt',
      },
      {
        type: 'append',
        path: 'packages/react/src/primitives/components.ts',
        pattern: /(?<insertion>\/\/ add primitive component here)/g,
        template: "export { {{pascalCase name}} } from './{{pascalCase name}}'",
      },
    ],
  });
}
