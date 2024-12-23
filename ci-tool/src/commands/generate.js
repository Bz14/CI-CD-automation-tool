const inquirer = require("inquirer");
const main_prompts = require("../prompts/main_prompt");
const workflows = require("../commands/main");
const generateWorkflow = () => {
  const prompt = inquirer.createPromptModule();
  process.on("SIGINT", () => {
    console.log("\nProcess terminated by user. Exiting gracefully...");
    process.exit(0);
  });

  prompt(main_prompts)
    .then(({ language }) => {
      const choice = workflows.find((workflow) => workflow.name === language);
      prompt(choice.prompts).then((answers) => {
        choice.createWorkflow(answers);
      });
    })
    .catch((error) => {
      if (error.message.includes("Prompt closed")) {
        console.log("\nPrompt closed by user. Exiting gracefully...");
        process.exit(0);
      } else {
        console.error(
          "An unexpected error occurred while generating the workflow."
        );
        process.exit(1);
      }
    });
};
module.exports = generateWorkflow;
