/**
 * Unlike a network socket, IPC sockets
 * allow to communicate between processes within
 * the same system
 */

// UDP sockets only accept buffers
// UDP does not require an approval of connection,
// it is less reliable but usually more fast, used for VoIP f.e

const dgram = require("dgram");
const client = dgram.createSocket("udp4");

process.stdin.resume();

// UDP Client
process.stdin.on("data", data => {
  console.log(data);
  client.send(
    data,
    0,
    data.length,
    8124,
    "examples.burningbird.net",
    (err, bytes) => {
      if (err) console.log("error: " + err);
      else console.log("succesfull!");
    }
  );
});

// UDP Server
const server = dgram.createSocket("udp4");
server.on("message", (msg, rinfo) => {
  console.log("Message: " + msg + " from " + rinfo.address + ":" + rinfo.port);
});
server.bind(8124);
