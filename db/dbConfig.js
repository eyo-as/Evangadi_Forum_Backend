const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "deveyomw_forum_user",
  database: "deveyomw_forum_database",
  host: "localhost",
  password: "@eyo4s78DataBase",
  connectionLimit: 10,
});

module.exports = dbConnection.promise();
