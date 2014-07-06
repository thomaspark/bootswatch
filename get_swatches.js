var grunt = require('grunt');

// Returns an Array of the names of all Bootswatch themes in the current
// directory.
module.exports = function () {
  return grunt.file.expand(
    { filter: 'isDirectory' },
    "*",
    "!2",
    "!api",
    "!assets",
    "!bower_components",
    "!default",
    "!fonts",
    "!global",
    "!help",
    "!node_modules",
    "!tests"
  );
};