// node-workflow.test.js

const {
  createNodeWorkflow,
} = require("../src/generate_workflow/node-workflow");
const loadTemplate = require("../src/utils/templateLoader");
const findPath = require("../src/utils/pathFinder");
const { writeFile } = require("../src/utils/fileUtils");

// Mock dependencies
jest.mock("../src/utils/templateLoader");
jest.mock("../src/utils/pathFinder");
jest.mock("../src/utils/fileUtils");

describe("createNodeWorkflow", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should load the correct template with provided config", () => {
    const config = {
      template_name: "node-ci-template",
      package_manager: "npm",
      node_version: "16.x",
      working_directory: "./",
    };

    const mockTemplate = "mock template content";
    loadTemplate.mockReturnValue(mockTemplate);
    findPath.mockReturnValue("/mock/path/to/workflow.yml");

    createNodeWorkflow(config);

    // Verify loadTemplate is called with correct arguments
    expect(loadTemplate).toHaveBeenCalledWith("node-ci-template", {
      package_manager: "npm",
      node_version: "16.x",
      working_directory: "./",
    });
  });

  test("should find the correct file path for the workflow", () => {
    const config = {
      template_name: "node-ci-template",
      package_manager: "yarn",
      node_version: "14.x",
      working_directory: "./src",
    };

    loadTemplate.mockReturnValue("mock content");
    findPath.mockReturnValue("/mock/path/to/workflow.yml");

    createNodeWorkflow(config);

    // Verify findPath is called with correct arguments
    expect(findPath).toHaveBeenCalledWith([
      process.cwd(),
      "..",
      ".github",
      "workflows",
      "node-ci-workflow.yml",
    ]);
  });

  test("should write the generated workflow to the correct file path", () => {
    const config = {
      template_name: "node-ci-template",
      package_manager: "npm",
      node_version: "16.x",
      working_directory: "./",
    };

    const mockTemplate = "mock workflow content";
    const mockPath = "/mock/path/to/workflow.yml";

    loadTemplate.mockReturnValue(mockTemplate);
    findPath.mockReturnValue(mockPath);

    createNodeWorkflow(config);

    // Verify writeFile is called with correct arguments
    expect(writeFile).toHaveBeenCalledWith(mockPath, mockTemplate);
  });
});
