const redis = require("redis");
const http = require("http");

const messageServer = http.createServer();

messageServer.on("request", (req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end();
  }

  console.log("[hit!]");
  const client = redis.createClient();
  client.on("error", err => console.log("[redis]" + err));
  client.select(6);

  client.lpop("texties", (err, reply) => {
    if (err) return console.error("[error]: " + err);

    console.log(reply);

    if (reply) {
      res.write(reply + "\n");
    } else {
      res.write("End of queue");
    }
    res.end();
  });
  client.quit();
});

messageServer.listen(8080, () => console.log("[messageServer] listening on 8080"));
