const inquirer = require("inquirer");
const { writeFile, readFile } = require("../utils/fileUtils");
const findPath = require("../utils/pathFinder");
const loadTemplate = require("../utils/templateLoader");

const generateReactWorkflow = () => {
  const prompt = inquirer.createPromptModule();
  prompt([
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
      message: "Enter the Node version",
      default: "14",
    },
  ]).then((answers) => {
    const { package_manager, node_version } = answers;
    const reactWorkFlowTemplate = loadTemplate("react-ci-workflow.yml", {
      package_manager,
      node_version,
    });
    const filePath = findPath([
      process.cwd(),
      "..",
      ".github",
      "workflows",
      "react-ci-workflow.yml",
    ]);
    writeFile(filePath, reactWorkFlowTemplate);
  });
};

module.exports = generateReactWorkflow;
