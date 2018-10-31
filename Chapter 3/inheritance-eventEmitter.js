const util = require("util");
const eventEmitter = require("events").EventEmitter;

let counter = 0;
// const em = new eventEmitter();

// setInterval(() => {
//   em.emit("inc", counter++);
// }, 2000);

// em.on("inc", data => {
//   util.log(data);
// });

const someObj = function() {
  this.name = "event-object";
};

util.inherits(someObj, eventEmitter);

someObj.prototype.emitCompleted = function() {
  this.emit("complete", counter++);
};

const objInstance = new someObj();
objInstance.on("complete", data => util.log(data));

setInterval(() => {
  objInstance.emitCompleted();
}, 2000);
