const loadTemplate = require("../utils/templateLoader");
const findPath = require("../utils/pathFinder");
const { writeFile } = require("../utils/fileUtils");

const createPythonWorkflow = (config) => {
  const { template_name, python_version, working_directory } = config;
  const pythonWorkFlowTemplate = loadTemplate(template_name, {
    python_version,
    working_directory,
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
