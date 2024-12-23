const fs = require("fs");
const path = require("path");
const logger = require("./logger");
/**
 * Utility module for handling file operations such as writing and reading files.
 *
 * Functions:
 * -----------
 *
 * 1. `writeFile(filePath, content)`
 *    - Description:
 *        Writes the specified content to a file at the given path.
 *        Ensures that any required directories in the path are created.
 *    - Parameters:
 *        - `filePath` (string): The path of the file to be written.
 *        - `content` (string): The content to write into the file.
 *    - Returns:
 *        None.
 *    - Notes:
 *        - If the file already exists, it will be overwritten.
 *    - Example Usage:
 *        ```javascript
 *        const { writeFile } = require('./fileUtils');
 *        writeFile('output/data.txt', 'Hello, World!');
 *        ```
 *
 * 2. `readFile(filePath)`
 *    - Description:
 *        Reads and returns the content of the file at the given path.
 *    - Parameters:
 *        - `filePath` (string): The path of the file to be read.
 *    - Returns:
 *        - `content` (string): The content of the file.
 *    - Notes:
 *        - Throws an error if the file does not exist.
 *    - Example Usage:
 *        ```javascript
 *        const { readFile } = require('./fileUtils');
 *        const content = readFile('output/data.txt');
 *        console.log(content); // Outputs: 'Hello, World!'
 *        ```
 *
 * Dependencies:
 * -------------
 * - `fs`: Node.js module for file system operations.
 * - `path`: Node.js module for handling file and directory paths.
 *
 */

const writeFile = (filePath, content) => {
  const dir = path.dirname(filePath);
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, "utf8");
    logger.success(`File saved: ${filePath}`);
  } catch (err) {
    logger.error(`Error saving file: ${err.message}`);
  }
};

const readFile = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    logger.error(`Error reading file: ${err.message}`);
  }
};

module.exports = { writeFile, readFile };
