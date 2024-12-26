const { program } = require("commander");
const generateWorkflow = require("../commands/generate");
/**
 * Command-Line Interface (CLI) module using Commander.js for generating a CI workflow.
 *
 * Functions:
 * ----------
 *
 * 1. `CLI()`
 *    - Description:
 *        Initializes and configures the CLI with version information, commands, and actions.
 *        In this case, it sets up a `generate` command to trigger the generation of a CI workflow.
 *    - Parameters:
 *        None.
 *    - Returns:
 *        None.
 *    - Example Usage:
 *        ```javascript
 *        const CLI = require('./CLI');
 *        CLI();
 *        // This will run the CLI, accepting commands and arguments from the terminal.
 *        ```
 *
 * Command Structure:
 * ------------------
 * - `version("0.0.1")`: Sets the version of the CLI tool.
 * - `.command("generate")`: Defines the `generate` command for generating a CI workflow.
 * - `.description("Generate a CI workflow")`: Provides a description for the `generate` command.
 * - `.action(generateWorkflow)`: Specifies the function to run when the `generate` command is called.
 * - `.parse(process.argv)`: Parses the command-line arguments passed to the script.
 *
 * Dependencies:
 * -------------
 * - `commander`: A popular library for building command-line interfaces in Node.js.
 * - `generateWorkflow`: A custom function responsible for handling the `generate` command logic.
 *
 */

const CLI = () => {
  program
    .version("0.0.1")
    .command("init")
    .description("Generate a CI workflow")
    .action(generateWorkflow);
  program.parse(process.argv);
};

module.exports = CLI;
