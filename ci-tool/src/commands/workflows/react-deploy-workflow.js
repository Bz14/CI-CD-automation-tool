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
