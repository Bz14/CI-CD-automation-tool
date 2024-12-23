/**
 * Node.js CI workflow generator configuration.
 *
 * This module defines the setup for generating a CI workflow for a Node.js application. It prompts the user
 * for details about the project setup, such as the package manager, Node.js version, and the working directory
 * for the Node.js project, and then generates a custom CI workflow based on the provided answers.
 *
 * **Prompts:**
 * 1. `package_manager` - The package manager to use (npm or yarn). Defaults to `npm`.
 * 2. `node_version` - The version of Node.js to use. Defaults to `14`.
 * 3. `working_directory` - The working directory of the Node.js project. Defaults to `app`.
 *
 * **Workflow Creation:**
 * The `createWorkflow` function takes the user's answers and uses them to create a Node.js CI workflow file
 * using the `createNodeWorkflow` function, passing the details into a template for a `node-ci-workflow.yml`.
 */

const { createNodeWorkflow } = require("../../generate_workflow/node-workflow");

module.exports = {
  name: "Node.js",
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
    createNodeWorkflow({
      template_name: "node-ci-workflow.yml",
      package_manager,
      node_version,
      working_directory,
    });
  },
};
