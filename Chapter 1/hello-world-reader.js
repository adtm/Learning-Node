const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    fs.readFile("./hello-world.js", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      if (err) res.write("Could not read file!");
      else res.write(data);

      res.end();
    });
  })
  .listen(8080);
console.log("Listening on port: " + server.address().port);
