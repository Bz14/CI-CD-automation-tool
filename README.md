# CI/CD Automation Tool

This project is a command-line interface (CLI) tool for generating custom workflows for various development environments, including Node.js, React and GitHub Pages deployment. The tool allows users to quickly integrate workflows based on their preferences (e.g., package manager, Node version, working directory, etc.).

## Table of Contents

- [Project Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Supported Workflows](#supported-workflows)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgment](#acknowledgment)

## Project Overview

This CI/CD automation tool simplifies the setup of CI/CD pipelines by automating workflow generation. It guides users through a selection process to create customized workflows based on their project requirements.

## Installation

To install the CI/CD automation tool, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/CI-CD-automation-tool.git

# Navigate to the project directory
cd CI-CD-automation-tool

# Install the required dependencies
npm install
```

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can check if it's installed by running:

```bash
node -v
```

If not installed, download and install it from the official website.

## Usage

To generate a CI/CD workflow, use the following command:

```bash
node ci-tool/index.js init
```

### Steps for generating workflows:

1.  **Run the tool**: After running the above command, the tool will prompt you to select the technology stack.
2.  **Select options**: Depending on the stack selected (e.g., Node.js, React, Python), you will be asked to choose different configuration options such as:

    - Package manager (npm or yarn)
    - Version of Node.js
    - Working directory for your project

3.  **Create the workflow**: Based on your responses, the tool will generate the appropriate configuration file for the selected stack.

### Example Usage:

```bash
$ node ci-tool/index.js init
? Select your environment: Node.js
? Select a package manager: npm
? Enter the Node version: 14
? Enter the working directory for your Node project: app

Creating Node.js CI workflow...
✔ Node.js workflow created successfully at ci-tool/generated/node-ci-workflow.yml
```

## Features

- **Support for multiple technologies**: The tool supports creating CI/CD workflows for Node.js, React, and GitHub Pages deployment.
- **Customizable**: Allows users to choose configurations like package manager, versioning, and directory structure.
- **Simple CLI interface**: Just run a single command and answer the prompts to generate workflows.

## Supported Workflows

- **Node.js**: Generate a Node.js CI workflow with the selected version and package manager (npm or yarn).
- **React**: Generate a CI workflow for React applications.
- **GitHub Pages Deployment**: Generate a deployment workflow for React apps using GitHub Pages.

## Contributing

Contributions to this project are welcome! If you have suggestions, bug fixes, or improvements, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (git checkout -b feature-branch).
3.  Make your changes.
4.  Commit your changes (git commit -m 'Add new feature').
5.  Push to your forked repository (git push origin feature-branch).
6.  Create a pull request from your fork to the main repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please reach out to:

- Eyerusalem Bezu - bezueyerusalem@gmail.com
- GitHub: BZ14

## Acknowledgements

- Inspired by various open-source projects and community contributions.
- Special thanks to the contributors and users for their feedback and support.
