const main_prompts = [
  {
    type: "list",
    name: "language",
    message: "Choose language for CI workflow:",
    choices: workflows.map((workflow) => workflow.name),
  },
];

module.exports = main_prompts;
