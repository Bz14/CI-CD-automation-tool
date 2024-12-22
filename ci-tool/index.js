const templateLoader = require("./src/utils/templateLoader");

templateLoader("react-ci-workflow.yml", {
  node_version: "14",
  package_manager: "npm",
});
