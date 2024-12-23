const { readFile } = require("./fileUtils");
const findPath = require("./pathFinder");
const logger = require("./logger");

/**
 * Template Loader Module
 *
 * This module provides a function to load and process template files, replacing placeholders with dynamic values.
 * It utilizes helper modules for reading files and constructing paths, making it efficient and platform-independent.
 *
 * Function:
 * ---------
 *
 * 1. `templateLoader(templateName, variables)`
 *    - Description:
 *        Loads a template file from the `templates` directory, processes it by replacing placeholder variables
 *        with corresponding values, and returns the processed content.
 *    - Parameters:
 *        - `templateName` (string): The name of the template file (e.g., "email.html").
 *        - `variables` (object): An object containing key-value pairs, where keys represent placeholder names
 *          (e.g., `{{name}}`) in the template, and values are the replacements.
 *    - Returns:
 *        - `template` (string): The processed template content with placeholders replaced by actual values.
 *    - Example Usage:
 *        ```javascript
 *        const templateLoader = require('./templateLoader');
 *
 *        const variables = { name: 'John Doe', age: 30 };
 *        const content = templateLoader('welcomeEmail.html', variables);
 *        console.log(content);
 *        ```
 *
 * Dependencies:
 * -------------
 * - `readFile` (from `fileUtils`): Reads the content of the template file.
 * - `findPath` (from `pathFinder`): Constructs the path to the template file.
 */

const templateLoader = (templateName, variables) => {
  try {
    const templatePath = findPath([__dirname, "..", "templates", templateName]);
    let template = readFile(templatePath);
    Object.keys(variables).forEach((key) => {
      const variable = variables[key];
      const regex = new RegExp(`{{${key}}}`, "g");
      template = template.replace(regex, variable);
    });
    return template;
  } catch (err) {
    logger.error(`Error loading template: ${err.message}`);
    return "";
  }
};

module.exports = templateLoader;
