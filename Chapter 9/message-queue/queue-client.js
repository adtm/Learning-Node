/**
 * Message queue listens for incomming messages on PORT 3000 and stores
 * whatever is sent into a Redis data store
 *
 * When an http server is hit, the top of the queue is poped,
 * if it's nil, a message that the end was reached is sent
 */

// when you init a proc, you tell a system command
// which will be started

const spawn = require("child_process").spawn;
const net = require("net");

const client = new net.Socket();

client.connect(
  3000,
  "localhost",
  () => console.log("[connect] to server")
);

const logs = spawn("tail", [
  "-f",
  __dirname + "/logs/food.log",
  __dirname + "/logs/drinks.log",
  __dirname + "/logs/fiesta.log"
]);

logs.stdout.setEncoding("utf8");
logs.stdout.on("data", chunk => {
  client.write(chunk);
});

logs.stderr.on("data", chunk => console.log("stderr: " + data));
logs.on("exit", code => {
  console.log("Child Process killed with code: " + code);
  client.end();
});
