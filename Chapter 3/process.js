/**
 * Process
 *
 * each node application is an instance of a Node
 * process object.
 *
 * process is inside of global
 */

// Some of the in build process properties
console.log(process.execPath);
console.log(process.version);
console.log(process.platform);

// stdin (standard input),
// stdout (standard output) -> async
// stderr -> sync

// stdin is paused by default
process.stdin.resume();

process.stdin.on("data", chunk => {
  process.stdout.write("data: " + chunk);
});
