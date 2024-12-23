const loadTemplate = require("../utils/templateLoader");
const findPath = require("../utils/pathFinder");
const { writeFile } = require("../utils/fileUtils");
const createReactWorkflow = (config) => {
  const { template_name, package_manager, node_version, working_directory } =
    config;
  const reactWorkFlowTemplate = loadTemplate(template_name, {
    package_manager,
    node_version,
    working_directory,
  });
  const filePath = findPath([
    process.cwd(),
    ".github",
    "workflows",
    "react-ci-workflow.yml",
  ]);
  writeFile(filePath, reactWorkFlowTemplate);
};

module.exports = { createReactWorkflow };
