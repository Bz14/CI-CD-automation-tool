/**
 * Python CI workflow generator configuration.
 *
 * This module defines the setup for generating a CI workflow for a Python application. It prompts the user
 * for details about the Python version to use and then generates a custom CI workflow based on the provided
 * answer.
 *
 * **Prompts:**
 * 1. `python_version` - The version of Python to use. Defaults to `3.9`.
 *
 * **Workflow Creation:**
 * The `createWorkflow` function takes the user's answers and uses them to create a Python CI workflow file
 * using the `createPythonWorkflow` function, passing the details into a template for a `python-ci-workflow.yml`.
 */

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
    {
      type: "input",
      name: "working_directory",
      message: "Enter the working directory for your React project:",
      default: "app",
    },
  ],
  createWorkflow: (answers) => {
    const { python_version, working_directory } = answers;
    createPythonWorkflow({
      template_name: "python-ci-workflow.yml",
      python_version,
      working_directory,
    });
  },
};
