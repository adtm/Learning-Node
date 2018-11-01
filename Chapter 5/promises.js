/**
 * Promise concept arose in 1970's,
 * also a: "defer", "future", "delay"
 */

// in Node 0.1.30
const fs = require("fs");

function test_and_load(filename) {
  const promise = new process.Promise();

  fs.stat(filename)
    .addCallback(function(stat) {
      if (!stat.isFile()) return promise.emitSuccess();

      fs.readFile(filename)
        .addCallback(data => {
          promise.emitSuccess(data);
        })
        .addErrback(err => {
          promise.emitError(err);
        });
    })
    .addErrback(function(err) {
      promise.emitError(err);
    });
  return promise;
}

const File = require("file");
const promise = File.read("mydata.txt");
promise.addCallback(data => {
  //..
});
promise.addErrback(err => {
  // ..
});

/**
 * The promise object was pulled from Node in version 0.1.30. As Ryan Dahl noted at
the time, the reasoning was:
Because many people (myself included) only want a low-level interface to file system
operations that does not necessitate creating an object, while many other people want
something like promises but different in one way or another. So instead of promises we’ll
use last argument callbacks and consign the task of building better abstraction layers to
user libraries.
 */
