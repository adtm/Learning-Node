/**
 * Child Processes
 *
 * There are four ways to create a child process, the most common one is using spawn
 * It launches a command in a new process, passing in any arguments
 */

const spawn = require("child_process").spawn;
const pwd = spawn("pwd");

pwd.stdout.on("data", data => console.log("stdout: " + data));
pwd.stderr.on("data", data => console.log("stderr: " + data));
pwd.on("exit", code =>
  console.log("child_process exited with status code " + code)
);
