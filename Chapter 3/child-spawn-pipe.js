const { spawn } = require("child_process");

const find = spawn("find", [".", "-ls"]);
const grep = spawn("grep", ["example-1"]);

grep.stdout.setEncoding("utf8");

find.stdout.on("data", data => grep.stdin.write(data));
grep.stdout.on("data", function(data) {
  console.log(data);
});

find.stderr.on("data", data => console.log("[find] stderr: " + data));
grep.stderr.on("data", data => console.log("[grep] stderr: " + data));

find.on("exit", code => {
  console.log("[find] exiting with code: " + code);
  grep.stdin.end(); // in order to pipe
});
grep.on("exit", code => console.log("[grep] exiting with code: " + code));
