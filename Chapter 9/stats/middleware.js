const redis = require("redis");

module.exports = function getStat(req, res, next) {
  console.log("[getStats]");
  const client = redis.createClient();
  client.on("error", err => console.log(err));

  client.select(2);

  client.sadd("ip", req.socket.remoteAddress);
  client.hincrby("myurls", req.url, 1);

  client.quit();
  next();
};
