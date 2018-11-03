const express = require("express");
const http = require("http");

const app = express();

app.get(/^\/node?(?:\/(\d+)(?:\.\.(\d+))?)?/, function(req, res) {
  console.log(req.params);

  // res.send declares automatic
  // headers for the response
  res.send(req.params);
});

app.get("/content/*", function(req, res) {
  res.send(req.params);
});

app.get("/products/:id/:operation?", function(req, res) {
  console.log(req);
  res.send(req.params.operation + " " + req.params.id);
});

http.createServer(app).listen(3000);

// older browsers did not support PUT or DELETE,
// thus a hidden input was needed with a _method prop, f.e:

// <input type="hidden" value="put" name="_method" />
// which would automatically change the method with express.methodOverride()

console.log("Server listening on port: 3000");
