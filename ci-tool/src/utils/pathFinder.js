const path = require("path");

/**
 * Utility module for constructing file and directory paths using Node.js `path` module.
 *
 * Function:
 * ---------
 *
 * 1. `findPath(paths)`
 *    - Description:
 *        Joins an array of path segments into a single normalized path.
 *    - Parameters:
 *        - `paths` (array of strings): An array of path segments to be joined.
 *    - Returns:
 *        - `newPath` (string): The constructed path string.
 *    - Example Usage:
 *        ```javascript
 *        const findPath = require('./findPath');
 *
 *        const fullPath = findPath(['home', 'user', 'documents', 'file.txt']);
 *        console.log(fullPath);
 *        // Outputs (on Linux/Mac): 'home/user/documents/file.txt'
 *        // Outputs (on Windows): 'home\\user\\documents\\file.txt'
 *        ```
 *
 * Dependencies:
 * -------------
 * - `path`: Node.js module for handling file and directory paths.
 */

const findPath = (paths) => {
  const newPath = path.join(...paths);
  return newPath;
};

module.exports = findPath;
