const { readFile } = require("./fileUtils");
const findPath = require("./pathFinder");

const templateLoader = (templateName, variables) => {
  const templatePath = findPath([__dirname, "..", "templates", templateName]);
  let template = readFile(templatePath);
  Object.keys(variables).forEach((key) => {
    const variable = variables[key];
    const regex = new RegExp(`{{${key}}}`, "g");
    template = template.replace(regex, variable);
  });
  return template;
};

module.exports = templateLoader;
