var grunt = require('grunt');
var fs = require ('fs');

// Returns an Array of the names of all Bootswatch themes in the current
// directory.
module.exports = function () {
  return grunt.file.expand(
    {
      filter: function (src) {
        return fs.statSync(src).isDirectory() &&
               grunt.file.exists(src, 'bootswatch.less') &&
               grunt.file.exists(src, 'variables.less');
      }
    },
    '*'
  );
};