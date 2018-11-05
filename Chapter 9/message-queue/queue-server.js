const net = require("net");
const redis = require("redis");

const server = net
  .createServer(socket => {
    socket.setEncoding("utf8");

    const client = redis.createClient();
    client.on("error", err => console.log("[redis] err: " + err));

    client.select(6);
    socket.on("data", chunk => {
      console.log(chunk + " from " + socket.remoteAddress + " " + socket.remotePort);
      client.rpush("texties", chunk);
    });
  })
  .listen(3000, () => console.log("[server] listening on 3000"));

server.on("close", () => client.quit());
