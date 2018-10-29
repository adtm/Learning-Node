const http = require("http");

const options = {
  host: "localhost",
  port: 8080,
  path: "/?file=secondary",
  method: "GET"
};

const processRequestTimeline = function() {
  console.log("finished request");
};

for (let i = 0; i < 2000; ++i) {
  http.request(options, processRequestTimeline).end();
}
