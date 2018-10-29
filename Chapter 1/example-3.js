const http = require("http");
const fs = require("fs");

let counter = 0;
function writeOutNumber(res) {
  for (let i = 0; i < 100; ++i) res.write(counter++ + "\n");
}

http
  .createServer((req, res) => {
    // the browser can send multiple requests - f.e fetching a favicon,
    // thus it is needed to check for the server if data is provided
    const query = require("url").parse(req.url).query;

    // to check for the multiple requests
    if (query) {
      // querystring module let's you easily pick up url query params
      const textFile = require("querystring").parse(query).file + ".txt";

      res.writeHead(200, { "Content-Type": "text/plain" });
      writeOutNumber(res);

      setTimeout(() => {
        console.log("opening " + textFile);
        fs.readFile(textFile, (err, data) => {
          if (err) res.write("Couldn't find file! " + textFile);
          else res.write(data);
          res.end();
        });
      }, 2000);
    }
  })
  .listen(8080);
