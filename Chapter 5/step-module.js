const fs = require("fs");
const Step = require("step");

try {
  Step(
    function readData() {
      fs.readFile("./apples.txt", "utf8", this);
    },
    function modify(err, text) {
      if (err) throw err;
      return text.replace(/apple/g, "banana");
    },
    function writeData(err, text) {
      if (err) throw err;
      fs.writeFile("./apple-banana.tx", text, this);
    }
  );
} catch (err) {
  console.error(err);
}
