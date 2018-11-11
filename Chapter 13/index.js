// Socket communicate through TCP - 2009
// You can "send" an event with WS, and wait for a "message" event
const app = require("http").createServer(handler);
const io = require("socket.io").listen(app);
const fs = require("fs");

app.listen(8080);

function handler(req, res) {
  fs.readFile(__dirname + "/index.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      console.log(err);
      return res.end("Error loading page!");
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on("connection", socket => {
  socket.counter = 1;
  socket.emit("news", { news: "world" });

  socket.on("echo", data => {
    if (socket.counter < 30) {
      socket.counter++;
      data.back = socket.counter;
      socket.emit("news", { news: data.back });
    }
  });
});
