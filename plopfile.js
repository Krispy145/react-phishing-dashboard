module.exports = function (plop) {
  plop.setGenerator("component-web", {
    description: "Create a React WEB component with test and index",
    prompts: [{ type: "input", name: "name", message: "Component name (PascalCase):" }],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/web/Component.tsx.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/web/Component.test.tsx.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        template: "export { default } from './{{pascalCase name}}';"
      }
    ]
  });
};
