const {
  createReactWorkflow,
} = require("../../generate_workflow/react-workflow");

module.exports = {
  name: "React",
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
  ],

  createWorkflow: (answers) => {
    const { package_manager, node_version } = answers;
    createReactWorkflow({
      template_name: "react-ci-workflow.yml",
      package_manager,
      node_version,
    });
  },
};
