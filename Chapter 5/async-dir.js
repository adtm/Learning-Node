const fs = require("fs");

const writeStream = fs.createWriteStream("./log.txt", {
  flags: "a",
  encoding: "utf8"
});

let counter = 0;
try {
  fs.readdir("./data/", (err, files) => {
    if (err) throw err;

    files.forEach(name => {
      fs.stat("./data/" + name, (err, stats) => {
        if (err) throw err;

        if (stats.isFile())
          fs.readFile("./data/" + name, "utf8", (err, data) => {
            if (err) throw err;

            const adjData = data.replace(
              /somecompany\.com/g,
              "burningbird.net"
            );

            fs.writeFile(
              "./data-processed/" + name + "-changed",
              adjData,
              err => {
                if (err) throw err;

                counter++;
                if (counter === files.length)
                  console.log("Finished processing files");

                writeStream.write("changed " + name + "\n", err => {
                  if (err) throw err;
                });
              }
            );
          });
      });
    });
  });
} catch (err) {
  console.log(err);
}
