/**
 * there is no 100% sure that a setTimeout will fire
 * after N seconds - it depends on the environement
 */

/**
 * Socket - endpoint in communication
 * Network Socket - communication between applications
 * running on different computer on the network
 *
 * Stream - data flow between sockets, where data
 * can be transmitted in binary or Unicode
 *
 * ^^ Both are transported in packets
 * , also the is a FIN packet which signals the end of transfer
 */

const net = require("net");

// TCP Server
net
  .createServer(conn => {
    conn.on("data", data => {
      console.log(data + " from " + conn.remoteAddress + " " + conn.remotePort);
      conn.write("Repeating: " + data);
    });

    conn.on("close", () => {
      console.log("[server]: Connection closed!");
    });
  })
  .listen(8080);

console.log("[server]: Listening on port: 8080");

// TCP Client

const client = new net.Socket();
client.setEncoding("utf8");

client.connect(
  8080,
  "localhost",
  () => {
    console.log("[client]: Connected to server");
    client.write("We have landed!");
  }
);

process.stdin.resume();

process.stdin.on("data", data => {
  client.write(data);
});

client.on("data", data => {
  console.log("[got from server]: " + cdata);
});

client.on("close", () => {
  console.log("[client]: connection closed");
});
