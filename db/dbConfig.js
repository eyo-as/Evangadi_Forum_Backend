require("dotenv").config();
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "evangadi-user",
  database: "evangadi_forum",
  host: "localhost",
  password: "@eyo4s78DataBase",
  connectionLimit: 10,
});

dbConnection.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully!");
    connection.release();
  }
});

module.exports = dbConnection.promise();
