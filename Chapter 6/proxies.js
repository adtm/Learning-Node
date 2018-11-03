/**
 * A proxy is a way of routing request from several different sources
 * throught one server for whatever reason.
 *
 * - Forward proxy is when you forward a request of a person making it "originate
 * from some other source"
 *
 * - Reverse proxy, when you proxy f.e incomming server requests so people couldn't
 * access them directly. This can be used for load balancing + caching
 */

const http = require("http");
const httpProxy = require("http-proxy");

httpProxy.createProxyServer({ target: "http://localhost:8080" }).listen(8000);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Request proxied! \n" + JSON.stringify(req.headers, true, 2));
    res.end();
  })
  .listen(8080);
