/**
 * React CI workflow generator configuration.
 *
 * This module defines the setup for generating a CI workflow for a React application. It prompts the user
 * for the package manager, Node version, and the working directory for the React project. Once the user
 * provides this information, a CI workflow file is created.
 *
 * **Prompts:**
 * 1. `package_manager`: The package manager to use (`npm` or `yarn`). Defaults to `npm`.
 * 2. `node_version`: The version of Node.js to use. Defaults to `14`.
 * 3. `working_directory`: The working directory for the React project. Defaults to `app`.
 *
 * **Workflow Creation:**
 * The `createWorkflow` function generates a React CI workflow YAML file (`react-ci-workflow.yml`) using the
 * provided inputs.
 *
 */
const {
  createReactWorkflow,
} = require("../../generate_workflow/react-workflow");

const {
  createPagesDeploymentWorkflow,
} = require("../../generate_workflow/pages-deployment-workflow");

module.exports = {
  name: "React",
  types: [
    {
      name: "React Simple workflow",
      value: "react-ci",
      prompts: [
        {
          type: "list",
          name: "package_manager",
          message: "Select a package manager",
          choices: ["npm", "yarn"],
          default: "npm",
        },
        {
          type: "input",
          name: "node_version",
          message: "Enter the Node version:",
          default: "14",
        },
        {
          type: "input",
          name: "working_directory",
          message: "Enter the working directory for your React project:",
          default: "app",
        },
      ],
      createWorkflow: (answers) => {
        const { package_manager, node_version, working_directory } = answers;
        createReactWorkflow({
          template_name: "react-ci-workflow.yml",
          package_manager,
          node_version,
          working_directory,
        });
      },
    },
    {
      name: "React with deployment to GitHub Pages",
      value: "react-deploy",
      prompts: [
        {
          type: "list",
          name: "package_manager",
          message: "Select a package manager",
          choices: ["npm", "yarn"],
          default: "npm",
        },
        {
          type: "input",
          name: "node_version",
          message: "Enter the Node version:",
          default: "14",
        },
        {
          type: "input",
          name: "working_directory",
          message: "Enter the working directory for your React project:",
          default: "app",
        },
      ],
      createWorkflow: (answers) => {
        const { package_manager, node_version, working_directory } = answers;
        createPagesDeploymentWorkflow({
          template_name: "react-ci-deploy-workflow.yml",
          package_manager,
          node_version,
          working_directory,
        });
      },
    },
  ],
};
