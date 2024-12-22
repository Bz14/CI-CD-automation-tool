const fs = require("fs");
const path = require("path");

const templateLoader = (templateName, variables) => {
  const templatePath = path.join(__dirname, "..", "templates", templateName);
  let template = fs.readFileSync(templatePath, "utf8");
  Object.keys(variables).forEach((key) => {
    const variable = variables[key];
    const regex = new RegExp(`{{${key}}}`, "g");
    template = template.replace(regex, variable);
  });
  return template;
};

module.exports = templateLoader;
