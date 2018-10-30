const readline = require("readline");

const interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question(">> What is the meaning of life? ", ans => {
  console.log("You said that the meaning is: " + ans);
  interface.setPrompt(">>");
  interface.prompt();
});

interface.on("line", cmd => {
  if (cmd.trim() === ".leave") {
    console.log("Leaving inteface..");
    interface.close();
  } else {
    console.log("[repeating]: " + cmd);
  }

  interface.setPrompt(">>");
  interface.prompt();
});

interface.on("close", () => process.exit());
