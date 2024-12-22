const pythonWorkflow = {
  name: "Python",
  prompts: [
    {
      type: "input",
      name: "python_version",
      message: "Enter the python version:",
      default: "3.9",
    },
  ],
};

module.exports = { pythonWorkflow };
