const connect = require("connect");
const http = require("http");

const app = connect()
  .use(connect.favicon())
  .use(connect.logger())
  .use((req, res) => {
    res.end("Hello World");
  });

http.createServer(app).listen(8080);
