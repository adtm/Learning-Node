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
const net = require("net");
const redis = require("redis");

net
  .createServer(conn => {
    console.log("[connected]");

    const client = redis.createClient(); // params: port, host, options
    client.on("error", err => console.error("[error]: " + err));

    client.select(5); // change database for currect connection

    conn.on("data", data => {
      console.log(data + " from " + conn.remoteAddress + " " + conn.remotePort);
      try {
        console.log(data.toString());
        const obj = JSON.parse(data);

        client.hset(obj.member, "first_name", obj.first_name, redis.print);
        client.hset(obj.member, "last_name", obj.last_name, redis.print);
        client.hset(obj.member, "score", obj.score, redis.print);
        client.hset(obj.member, "date", obj.date, redis.print);

        client.zadd("Zowie!", parseInt(obj.score), obj.member);
      } catch (err) {
        console.log(err);
      }
    });
    conn.on("close", () => {
      console.log("[client] connection closed");
      client.quit();
    });
  })
  .listen(8080, () => console.log("Listening on port: 8080"));

/**
 * curl -X POST -H
 * "Content-Type: application/json" -d
 * "{
 *     \"member\": 400,
 *     \"first_name"\: \"Tomas\",
 *     \"last_name\": \"Loverance\",
 *     \"score\": 5,
 *     \"date\": \"10/10/1893\" }"
 */
