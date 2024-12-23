/**
 * React with Deployment to GitHub Pages CI workflow generator configuration.
 *
 * This module defines the setup for generating a CI workflow for a React application with deployment to
 * GitHub Pages. It prompts the user for details about the package manager, Node version, and the working
 * directory for the React project. Once the user provides this information, a CI workflow is created.
 *
 * **Prompts:**
 * 1. `package_manager` - The package manager to use (either `npm` or `yarn`). Defaults to `npm`.
 * 2. `node_version` - The version of Node.js to use. Defaults to `14`.
 * 3. `working_directory` - The working directory for the React project. Defaults to `app`.
 *
 * **Workflow Creation:**
 * The `createWorkflow` function takes the user's answers and uses them to create a React CI workflow file
 * with deployment instructions to GitHub Pages using the `createPagesDeploymentWorkflow` function,
 * which generates a `react-ci-deploy-workflow.yml` file.
 *
 */

const {
  createPagesDeploymentWorkflow,
} = require("../../generate_workflow/pages-deployment-workflow.js");

module.exports = {
  name: "React with deployment to GitHub Pages",
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
};
