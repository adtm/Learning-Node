const http = require("http");
const redis = require("redis");
const async = require("async");
const jade = require("jade");

const layout = require("fs").readFileSync(__dirname + "/score.jade", "utf8");
const fn = jade.compile(layout, { filename: __dirname + "/score.jade" });

const client = redis.createClient();
client.select(5);
http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      return res.end;
    }

    client.zrevrange("Zowie!", 0, 4, (err, result) => {
      if (err) {
        console.error(err);
        return res.end("Top Scores currently not available!");
      }

      const callFunctions = new Array();
      for (let i = 0; i < result.length; ++i) callFunctions.push(result[i]);

      async.series(
        callFunctions.map(value => cb => {
          client.hgetall(value, (err, obj) => {
            cb(err, obj);
          });
        }),
        (err, result) => {
          if (err) {
            console.log(err);
            return res.end("Scores not available!");
          }

          console.log(result);
          const str = fn({ scores: result });
          res.end(str);
        }
      );

      console.log("[zowie]");
      console.log(result);
      res.end();
    });
  })
  .listen(3000, () => console.log("Listening on PORT: 3000"));
