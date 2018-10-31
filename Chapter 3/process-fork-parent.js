/**
 * Child Process Fork is for spawning node processes
 *
 * fork is different from spawn and exec, because a communication channel
 * is automattically established. Note that each process requires a new instance
 * of V8, which takes both time and memory
 */

const { fork } = require("child_process");

const forked = fork("./example-13-child.js");

forked.on("message", msg => {
  console.log("Message from child: " + msg);
});

forked.send("Hello World");
