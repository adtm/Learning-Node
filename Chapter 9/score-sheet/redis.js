/**
 * noSQL - in memory, key pair values
 * Most popular: Cassandra, Memcached, Redis
 */

/**
 * Memcached - caching data queries, good with distributed computing, but has limited
 * support for complex data.
 *
 * Useful for applicatoin with a lot of queries, but not for applications
 * with lots of data writting and reading (Redis - single machine)
 */
const http = require("http");
const redis = require("redis");

http
  .createServer((req, res) => {
    req.setEncoding("utf8");
    console.log("[connected]");

    const client = redis.createClient(); // params: port, host, options
    client.on("error", err => console.error("[error]: " + err));
    client.select(5); // change database for currect connection

    let chunks = "";
    req.on("data", chunk => (chunks += chunk));

    req.on("end", () => {
      try {
        const obj = JSON.parse(chunks);

        client.hset(obj.member, "first_name", obj.first_name, redis.print);
        client.hset(obj.member, "last_name", obj.last_name, redis.print);
        client.hset(obj.member, "score", obj.score, redis.print);
        client.hset(obj.member, "date", obj.date, redis.print);

        client.zadd("Zowie!", parseInt(obj.score), obj.member);
      } catch (err) {
        console.log("err" + err);
      }
    });
  })
  .listen(8080, () => console.log("Listening on port: 8080"));

// curl - d "{ \"member\": 400, \"first_name\": \"Tomas\", \"last_name\": \"Loverance\", \"score\": 5, \"date\": \"10/10/1893\" }" localhost: 8080
