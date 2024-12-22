const inquirer = require("inquirer");
const { reactWorkflowPrompts } = require("../prompts/react-workflow-prompts");
const { createReactWorkflow } = require("../workflows/react-workflow");

const generateReactWorkflow = () => {
  const prompt = inquirer.createPromptModule();
  prompt(reactWorkflowPrompts).then((answers) => {
    const { package_manager, node_version } = answers;
    createReactWorkflow({
      template_name: "react-ci-workflow.yml",
      package_manager,
      node_version,
    });
  });
};

module.exports = generateReactWorkflow;
