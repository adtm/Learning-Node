const util = require("util");

const obj = {
  name: "name",
  file: "file"
};
util.inspect(obj, true, null, true);

function first() {
  this.name = "first";
  this.test = () => {
    console.log(this.name);
  };
}

first.prototype.output = function() {
  console.log(this.name);
};

// inheritance from the second one
function second() {
  second.super_.call(this);
  this.name = "second";
}
util.inherits(second, first);

const two = new second();

function third(func) {
  this.name = "third";
  this.callMethod = func;
}
const three = new third(two.test);

two.output();
two.test();
three.callMethod();
