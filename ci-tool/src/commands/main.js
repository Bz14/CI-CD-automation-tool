/**
 * This module imports and exports the workflow configurations for different programming languages.
 * The workflows can be used to generate CI/CD configurations based on the user's choice during the workflow generation process.
 *
 * **Workflows included:**
 * 1. `reactWorkflow` - A CI workflow for React applications.
 * 2. `reactDeployWorkflow` - A CI workflow for React applications with deployment to GitHub Pages.
 * 3. `nodeWorkflow` - A CI workflow for Node.js applications.
 *
 * The workflows are listed in an array and can be used in the CLI application to prompt the user for their desired configuration.
 *
 */

const reactWorkflow = require("./workflows/react-workflow");
const reactDeployWorkflow = require("./workflows/react-deploy-workflow");
const nodeWorkflow = require("./workflows/node-workflow");

module.exports = [reactWorkflow, reactDeployWorkflow, nodeWorkflow];
