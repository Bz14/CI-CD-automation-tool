const loadTemplate = require("../utils/templateLoader");
const findPath = require("../utils/pathFinder");
const { writeFile } = require("../utils/fileUtils");
const createNodeWorkflow = (config) => {
  const { template_name, package_manager, node_version } = config;
  const reactWorkFlowTemplate = loadTemplate(template_name, {
    package_manager,
    node_version,
  });
  const filePath = findPath([
    process.cwd(),
    "..",
    ".github",
    "workflows",
    "node-ci-workflow.yml",
  ]);
  writeFile(filePath, reactWorkFlowTemplate);
};

module.exports = { createNodeWorkflow };
