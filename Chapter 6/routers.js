/**
 * https://yourplace.org/article/your-title
 * https://yourplace.org/node/174
 *
 * both are equivalent, which would be:
 * - access a "node database"
 * - display the node identified by "174"
 */

const crossroads = require("crossroads");
const http = require("http");

crossroads.addRoute("/category/{type}/:pub/:id", (type, pub, id) => {
  if (!id && !pub) {
    console.log("Accessing all entries of category " + type);
    return;
  } else if (!id) {
    console.log(
      "Accessing all entries of category " + type + " and pub " + pub
    );
    return;
  } else {
    console.log(
      "Accessing item " + id + " of pub " + pub + " of category " + type
    );
  }
});

http
  .createServer((req, res) => {
    crossroads.parse(req.url);
    res.end("finito \n");
  })
  .listen(8080);
