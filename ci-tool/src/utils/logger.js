import chalk from "chalk";
/**
 * Logger utility module using Chalk for styled console output.
 *
 * This module provides a simple logging utility for displaying styled messages
 * in the terminal with different levels of importance:
 * Functions:
 * ----------
 *
 * 1. `success(message)`
 *    - Description:
 *        Logs a success message in green with a check mark.
 *    - Parameters:
 *        - `message` (string): The message to display.
 *    - Example Usage:
 *        ```javascript
 *        logger.success('Operation completed successfully.');
 *        // Outputs: ✔ Operation completed successfully.
 *        ```
 *
 * 2. `error(message)`
 *    - Description:
 *        Logs an error message in red with a cross.
 *    - Parameters:
 *        - `message` (string): The message to display.
 *    - Example Usage:
 *        ```javascript
 *        logger.error('An error occurred while processing your request.');
 *        // Outputs: ✖ An error occurred while processing your request.
 *        ```
 *
 * 3. `info(message)`
 *    - Description:
 *        Logs an informational message in blue with an information symbol.
 *    - Parameters:
 *        - `message` (string): The message to display.
 *    - Example Usage:
 *        ```javascript
 *        logger.info('Fetching data from the server...');
 *        // Outputs: ℹ Fetching data from the server...
 *        ```
 *
 * 4. `warn(message)`
 *    - Description:
 *        Logs a warning message in yellow with a warning symbol.
 *    - Parameters:
 *        - `message` (string): The message to display.
 *    - Example Usage:
 *        ```javascript
 *        logger.warn('The disk space is running low.');
 *        // Outputs: ⚠ The disk space is running low.
 *        ```
 *
 * Dependencies:
 * -------------
 * - `chalk`: Library for terminal string styling.
 */

const logger = {
  success: (message) => {
    console.log(chalk.green(`✔ ${message}`));
  },
  error: (message) => {
    console.log(chalk.red(`✖ ${message}`));
  },
  info: (message) => {
    console.log(chalk.blue(`ℹ ${message}`));
  },
  warn: (message) => {
    console.log(chalk.yellow(`⚠ ${message}`));
  },
};

export default logger;
