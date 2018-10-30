/**
 * Process.nextTick, this fuction attaches a calback function
 * that's fired during the next tick in the Node
 * event loop;
 *
 * You would use Process.nextTick if you wanted
 * to delay a function for some reason
 */

const asyncFunction = function(data, callback) {
  process.nextTick(function() {
    callback(data);
  });
};

asyncFunction("after 1", console.log); // puts on queue
console.log("before 1");

// also you could use a setTimeout with 0
// but process.nextTick is more efficient

// puts on queue
setTimeout(() => {
  console.log("after 2");
}, 0);
console.log("before 2");
