const path = require("path");

const findPath = (paths) => {
  const newPath = path.join(...paths);
  return newPath;
};

module.exports = findPath;
