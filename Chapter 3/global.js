/**
 * Global
 *
 * modules exist in their own global namespaces,
 * only what is exported becomes
 */

var globalValue;

exports.setGlobal = function(value) {
  globalValue = value;
};

exports.getGlobal = function() {
  console.log(global);
  return globalValue;
};
