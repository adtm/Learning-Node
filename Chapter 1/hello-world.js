const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, "This was a success!", {
      "Content-Type": "text/plain"
    });
    res.end("Hello World \n");
  })
  .listen(8080);

console.log("Server is listening on port: " + server.address().port);

/**
 * 1. Run in the background: "node hello-world.js &",
 * but then you'll have to manually kill the server
 *
 * 2. Prefork Multiprocessing Model - prefork MPM,
 * putting task on different processes, being thread safe.
 * #The advantage - processes (memory intensive) don't scale so much as threads
 *
 * 3. Worker MPM - each request is handled with a separete thread.
 * It's more efficient than a memory perspective, but you have to handle thread
 * safety.
 *
 * Node is based on events and callbacks
 */
