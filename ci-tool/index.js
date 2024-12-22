// const templateLoader = require("./src/utils/templateLoader");

// console.log(
//   templateLoader("react-ci-workflow.yml", {
//     node_version: "14",
//     package_manager: "npm",
//   })
// );

const generateReactWorkflow = require("./src/commands/generate");
generateReactWorkflow();
