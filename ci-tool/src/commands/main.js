const reactWorkflow = require("./workflows/react-workflow");
const pythonWorkflow = require("./workflows/python-workflow");
const reactDeployWorkflow = require("./workflows/react-deploy-workflow");
const nodeWorkflow = require("./workflows/node-workflow");

module.exports = [
  reactWorkflow,
  pythonWorkflow,
  reactDeployWorkflow,
  nodeWorkflow,
];
