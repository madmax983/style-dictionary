var path = require('path'),
    fs   = require('fs-extra');


/**
 * Takes the style property object and a format and returns a
 * string that can be written to a file.
 * @memberOf StyleDictionary
 * @param {String} destination
 * @param {Function} format
 * @param {Object} platform
 * @param {Object} dictionary
 * @returns {null}
 */
function buildFile(destination, format, platform, dictionary) {
  if (!format)
    throw new Error('Please enter a valid file format');
  if (!destination)
    throw new Error('Please enter a valid destination');

  // if there is a build path, prepend the destination with it
  if (platform.buildPath) {
    destination = platform.buildPath + destination;
  }

  var dirname = path.dirname(destination);
  if (!fs.existsSync(dirname))
    fs.mkdirsSync(dirname);

  fs.writeFileSync(destination, format(dictionary, platform));
}


module.exports = buildFile;