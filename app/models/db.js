const mysql = require("mysql");
//import mysql databse modules
const dbConfig = require("../config/db.config");
//dbconfig import from db.config.js

// Create a connection to the database
const sql = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// open the MySQL connection
sql.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = sql;
// exports sql connection to the models.
