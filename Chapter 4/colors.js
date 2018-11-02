/**
 * There is require.cache, which is able to load modules
 * from the cache.
 *
 * Also there is require.resolve, which only returns the filename
 */

// npm ls will show informationa about dependencies
// npm search html5

// Colors: module

const colors = require("colors");

console.log("This rocks as an unicorn!".rainbow.underline);
console.log("Zebra Nodin".zebra.bold);

colors.setTheme({
  warn: "cyan",
  error: "red",
  note: "yellow"
});
console.log("This is a warning".warn);
console.log("This is an error".error);
console.log("This is a side note".note);
