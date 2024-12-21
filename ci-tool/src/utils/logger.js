import chalk from "chalk";

/**
 * Logger utility to log messages with different colors and icons.
 * @module logger
 * @type {object}
 * @property {function} success - Logs a success message.
 * @property {function} error - Logs an error message.
 * @property {function} info - Logs an info message.
 * @property {function} warn - Logs a warning message.
 * @example
 * const logger = require("./logger");
 * logger.success("Message");
 * logger.error("Message");
 * logger.info("Message");
 * logger.warn("Message");
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
