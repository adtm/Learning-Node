/**
 * Streams are opened in the background,
 * reads + writes are queued
 */

const fs = require("fs");
const util = require("util");
const eventEmitter = require("events").EventEmitter;

function inputChecker(name, fileName) {
  this.name = name;
  this.writeStream = fs.createWriteStream("./" + fileName + ".txt", {
    flags: "a",
    encoding: "utf8"
  });
}

util.inherits(inputChecker, eventEmitter);

inputChecker.prototype.check = function(input) {
  const command = input
    .toString()
    .trim()
    .substr(0, 3);
  if (command === "wr:") {
    this.emit("write", input.substr(3, input.length));
  } else if (command === "en:") {
    this.emit("end");
  } else {
    this.emit("echo", input);
  }
};

const ic = new inputChecker("Tomas", "output");

// function let's us take "this"
ic.on("write", function(data) {
  this.writeStream.write(data, "utf8");
});

// on is equivavelt to "addListener"
ic.on("echo", function(data) {
  console.log(this.name + " emited: " + data);
});

ic.on("end", () => {
  process.exit();
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  ic.check(data);
});
