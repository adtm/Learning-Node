const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "my-mega-db";

// All communication with mongo happens through TCP
// Connection pool: a cache of database connections to reuse for future requests

MongoClient.connect(
  url,
  (err, client) => {
    if (err) throw err;
    console.log("[connected]!");

    const db = client.db(dbName);
    const collection = db.collection("widgets");

    collection.deleteMany({}).then((result, err) => {
      if (err) throw err;

      const widget1 = {
        title: "First Great Widget",
        descr: "Greatest Widget of All",
        price: 20
      };

      const widget2 = {
        title: "Second Great Widget",
        descr: "Second Greatest Widget of All",
        price: 10
      };

      // if one fails, both will - have to set a flag
      collection.insertMany([widget1, widget2]).then((response, err) => {
        if (err) throw err;

        collection
          .find()
          .toArray()
          .then((response, err) => {
            if (err) throw err;

            console.log(response);
          });

        client.close();
      });
    });
  }
);

// update & remove doesn't return a result
// findAndModify & findAndRemove modifies
