var grunt = require('grunt');

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
  var dirs = grunt.file.expand({ filter: 'isDirectory' }, '*');

  return removeBlacklisted(dirs, [
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