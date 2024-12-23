const loadTemplate = require("../utils/templateLoader");
const findPath = require("../utils/pathFinder");
const { writeFile } = require("../utils/fileUtils");

const createPythonWorkflow = (config) => {
  const { template_name, python_version } = config;
  const pythonWorkFlowTemplate = loadTemplate(template_name, {
    python_version,
  });
  const filePath = findPath([
    process.cwd(),
    ".github",
    "workflows",
    "python-ci-workflow.yml",
  ]);
  writeFile(filePath, pythonWorkFlowTemplate);
};

module.exports = { createPythonWorkflow };
