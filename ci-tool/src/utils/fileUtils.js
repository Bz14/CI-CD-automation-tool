const fs = require("fs");
const path = require("path");

const writeFile = (filePath, content) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`File saved: ${filePath}`);
};

const readFile = (filePath) => {
  return fs.readFileSync(filePath, "utf8");
};

module.exports = { writeFile, readFile };
