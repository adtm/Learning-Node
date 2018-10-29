const repl = require("repl");
const net = require("net");

repl.start("node via stdin >> ", null, null, null, true);

net
  .createServer(socket => {
    repl.start("node via TCP socket >> ", socket);
  })
  .listen(8080);
