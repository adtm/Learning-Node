const repl = require("repl");
const context = repl.start(">>", null, null, null, true).context;

context.http = require("http");
context.util = require("util");
context.os = require("os");
