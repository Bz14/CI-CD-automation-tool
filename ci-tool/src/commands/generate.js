const inquirer = require("inquirer");
const workflows = require("../commands/main");
const main_prompts = require("../prompts/main_prompt");

const generateWorkflow = () => {
  const prompt = inquirer.createPromptModule();
  prompt(main_prompts).then(({ language }) => {
    const choice = workflows.find((workflow) => workflow.name === language);
    prompt(choice.prompts).then((answers) => {
      choice.createWorkflow(answers);
    });
  });
};
module.exports = generateWorkflow;
