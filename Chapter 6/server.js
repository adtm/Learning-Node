const http = require("http");
const mime = require("mime");
const fs = require("fs");

const base = __dirname + "/assets";

http
  .createServer((req, res) => {
    const pathname = base + req.url;

    fs.stat(pathname, (err, stats) => {
      if (err) {
        res.writeHead(404);
        res.write("Bad request: 404");
        res.end();
      } else if (stats.isFile()) {
        /**
         * fs.readFile puts all file contents into memory,
         */
        const type = mime.lookup(pathname);
        res.writeHead(200, { "Content-Type": type });

        const file = fs.createReadStream(pathname);
        file.on("open", () => file.pipe(res));
        file.on("error", err => console.log(err));
      } else {
        res.writeHead(403);
        res.write("Directory access is forbidden");
        res.end();
      }
    });
  })
  .listen(8080);
