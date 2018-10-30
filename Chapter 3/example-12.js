/**
 * Child Process Exec / ExecFile
 *
 * Also to spawing new child processes, you can use these command to run a command
 * in the shell and buffer the results
 *
 * Only difference - exec runs a command
 * execFile runs an application in a file
 */

/**
 * Spawn doesn't create a shell like exec does,
 * it buffers the output to a callback
 */

const { exec } = require("child_process");

// watch out for command injection
// command + '; rm -rf ~'
exec("find . -ls | grep example", (err, stdout, stderr) => {
  if (err) {
    console.log("exec error: " + err);
    return;
  }
  console.log(stdout);
});

// spawn -> big files
// exec -> small ones
