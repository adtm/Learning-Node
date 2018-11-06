const express = require("express");
const app = express();

const redis = require("redis");
const getStats = require("./middleware");

app.use(getStats);
app.get("/", (req, res) => res.end("whoa whoa"));
app.get("/whoa", (req, res) => res.end("whoa whoa whoaaa.."));
app.get("/stats", (req, res) => {
  const client = redis.createClient();
  client.select(2);

  // commands are not chained but done in isolation
  client
    .multi()
    .smembers("ip")
    .hgetall("myurls")
    .exec((err, res) => {
      const [ips, urls] = res;
      console.log(ips, urls);
      client.quit();
    });
  res.end("look stats bro");
});

app.listen(3000);
