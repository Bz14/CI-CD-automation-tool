/**
 * This module handles the generation of a CI workflow based on user input. It uses the `inquirer`
 * package to prompt the user for necessary details, such as the programming language for the workflow,
 * and then creates the workflow based on the user's choices.
 *
 * **Steps involved:**
 * 1. The user is prompted to select a programming language for which they want to generate a CI workflow.
 * 2. Based on the selected language, additional prompts are displayed to gather configuration details.
 * 3. A CI workflow is then created based on the user's responses.
 *
 * If the user interrupts the process (e.g., pressing `Ctrl+C`), the process exits gracefully with a message.
 * If an unexpected error occurs, an error message is shown and the process exits with a non-zero status.
 */
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
        console.log(`Creating ${choice.name} CI workflow...`);
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
