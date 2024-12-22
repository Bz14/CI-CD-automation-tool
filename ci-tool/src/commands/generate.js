const inquirer = require("inquirer");
const workflows = require("../commands/main");

const generateWorkflow = () => {
  const prompt = inquirer.createPromptModule();
  prompt([
    {
      type: "list",
      name: "language",
      message: "Choose language for CI workflow:",
      choices: workflows.map((workflow) => workflow.name),
    },
  ]).then(({ language }) => {
    const choice = workflows.find((workflow) => workflow.name === language);
    prompt(choice.prompts).then((answers) => {
      choice.createWorkflow(answers);
    });
  });
};

module.exports = generateWorkflow;
