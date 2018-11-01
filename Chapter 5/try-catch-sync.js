const fs = require("fs");

try {
  const timeStart = console.time();
  const data = fs.readFileSync("./apples.txt", "utf8");
  console.log(data);

  const adjData = data.replace(/[A|a]pple/g, "orange");

  fs.writeFileSync("./oranges.txt", adjData);

  const timeEnd = console.timeEnd();
  console.log(timeEnd - timeStart); // 10 - 14
} catch (err) {
  console.error(err);
}
