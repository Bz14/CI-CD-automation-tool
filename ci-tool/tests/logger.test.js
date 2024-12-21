import logger from "../src/utils/logger";
import chalk from "chalk";

describe("Logger", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test("should log a success message in green", () => {
    const message = "Operation successful!";
    logger.success(message);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.green(`✔ ${message}`));
  });

  test("should log an error message in red", () => {
    const message = "An error occurred!";
    logger.error(message);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.red(`✖ ${message}`));
  });

  test("should log an info message in blue", () => {
    const message = "This is an info message.";
    logger.info(message);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.blue(`ℹ ${message}`));
  });

  test("should log a warning message in yellow", () => {
    const message = "This is a warning.";
    logger.warn(message);
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow(`⚠ ${message}`));
  });
});
