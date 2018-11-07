const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

connection.query("USE my_db");
connection.query(`CREATE TABLE nodetest2 ( TITLE VARCHAR(255), TEXT VARCHAR(255), CREATED DATE)`);

connection.query(
  "INSERT INTO nodetest2   SET TITLE = ?, TEXT = ?, CREATED = NOW()",
  ["A seventh item", "This is a seventh item"],
  (err, result) => {
    if (err) console.log(err);
    else {
      const id = result.insertId;
      console.log(result);

      connection.query(
        "UPDATE nodetest SET title = ? WHERE title = ?",
        ["A seventh item", "New title"],
        (err, result) => {
          if (err) console.log(err);
          else {
            console.log(result.affectedRows);
            getData();
          }
        }
      );
    }
  }
);

const getData = () => {
  connection.query("SELECT * FROM nodetest2", (err, results, fields) => {
    if (err) console.log(err);
    else {
      console.log(results);
      console.log(fields);
    }
    connection.end();
  });
};
