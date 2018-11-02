const fs = require("fs");
const async = require("async");

try {
  async.waterfall(
    [
      function readData(callback) {
        fs.readFile("./apples.txt", "utf8", (err, data) => {
          callback(err, data);
        });
      },
      function modify(text, callback) {
        const adjData = text.replace(/apple/g, "bananana");
        callback(null, adjData);
      },
      function writeData(text, callback) {
        fs.writeFile("./bananana.txt", text, err => {
          callback(err, text);
        });
      }
    ],
    function(err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
} catch (err) {
  console.error(err);
}
