var fs = require('fs');

// Returns an Array of all directories in the current directory, excluding
// hidden directories.
function getDirs() {
  return fs.readdirSync('.').filter(function (file) {
    return file[0] !== "." && fs.statSync(file).isDirectory();
  });
}

// Returns a copy of the given Array with all elements of the blacklist Array
// removed.
function removeBlacklisted(array, blacklist) {
  return array.filter(function (item) {
    return blacklist.indexOf(item) === -1;
  });
}

// Returns an Array of the names of all Bootswatch themes in the current
// directory.
module.exports = function () {
  return removeBlacklisted(getDirs(), [
    "2",
    "api",
    "assets",
    "bower_components",
    "default",
    "fonts",
    "global",
    "help",
    "node_modules",
    "tests"
  ]);
};