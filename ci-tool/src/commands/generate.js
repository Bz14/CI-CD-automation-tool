const inquirer = require("inquirer");
const { writeFile, readFile } = require("../utils/fileUtils");
const path = require("path");
const findPath = require("../utils/pathFinder");
const loadTemplate = require("../utils/templateLoader");

const generateReactWorkflow = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Package Manager",
        message: "Select a package manager",
        choices: ["npm", "yarn"],
        default: "npm",
      },
      {
        type: "input",
        name: "Node version",
        message: "Enter the Node version",
        default: "14",
      },
    ])
    .then((answers) => {
      const { package_manager, node_version } = answers;
      const reactWorkFlowTemplate = loadTemplate("react-workflow", {
        package_manager,
        node_version,
      });
      const filePath = findPath([
        process.cwd(),
        "ci-tool",
        "workflows",
        "react-ci-workflow.yml",
      ]);
      console.log(filePath);
    });
};

module.exports = generateReactWorkflow;
