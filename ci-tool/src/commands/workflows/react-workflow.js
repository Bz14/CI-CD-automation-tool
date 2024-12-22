const reactWorkflow = {
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
};

module.exports = { reactWorkflow };
