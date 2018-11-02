const fs = require("fs");

try {
  const timeStart = console.time();

  fs.readFile("./apples.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log(data.length);

    const adjData = data.replace(/[A|a]pple/g, "orange");

    fs.writeFile("./oranges.txt", adjData, err => {
      if (err) throw err;
    });
    const timeEnd = console.timeEnd();
    console.log(timeEnd - timeStart); // 1
  });
} catch (err) {
  console.error(err);
}
