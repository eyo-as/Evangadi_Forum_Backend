const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "evangadi-user",
  database: "evangadi_forum",
  host: "localhost",
  password: "@eyo4s78DataBase",
  connectionLimit: 10,
});

module.exports = dbConnection.promise();
