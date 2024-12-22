const { program } = require("commander");
const generateWorkflow = require("../commands/generate");

const CLI = () => {
  program
    .version("0.0.1")
    .command("generate")
    .description("Generate a CI workflow")
    .action(generateWorkflow)
    .parse(process.argv);
};

module.exports = CLI;
