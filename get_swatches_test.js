var assert = require('assert');
var getSwatches = require('./get_swatches');

assert.deepEqual(getSwatches().sort(), [
  "amelia",
  "cerulean",
  "cosmo",
  "custom",
  "cyborg",
  "darkly",
  "flatly",
  "journal",
  "lumen",
  "readable",
  "simplex",
  "slate",
  "spacelab",
  "superhero",
  "united",
  "yeti"
]);