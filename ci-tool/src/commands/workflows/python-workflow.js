const {
  createPythonWorkflow,
} = require("../../generate_workflow/python-workflow");

module.exports = {
  name: "Python",
  prompts: [
    {
      type: "input",
      name: "python_version",
      message: "Enter the python version:",
      default: "3.9",
    },
  ],
  createWorkflow: (answers) => {
    const { python_version } = answers;
    createPythonWorkflow({
      template_name: "python-ci-workflow.yml",
      python_version,
    });
  },
};
