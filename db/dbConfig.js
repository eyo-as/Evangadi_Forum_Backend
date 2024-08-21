require("dotenv").config();
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  // user: process.env.DB_USER,
  // database: process.env.DB_NAME,
  // host: process.env.DB_HOST,
  // password: process.env.DB_PASSWORD,
  // connectionLimit: 10,

  user: "evangadi-user",
  database: "evangadi_forum",
  host: "localhost",
  password: "@eyo4s78DataBase",

  // user: "deveyomw_evangadi-forum-user",
  // database: "deveyomw_evangadi-forum-db",
  // host: "109.70.148.62",
  // password: "!q?y}.IEv9~1",
  // connectionLimit: 10,
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
