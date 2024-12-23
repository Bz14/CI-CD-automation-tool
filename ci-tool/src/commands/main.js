const reactWorkflow = require("./workflows/react-workflow");
const pythonWorkflow = require("./workflows/python-workflow");
const reactDeployWorkflow = require("./workflows/react-deploy-workflow");

module.exports = [reactWorkflow, pythonWorkflow, reactDeployWorkflow];
