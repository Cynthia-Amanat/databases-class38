import mysql from "mysql";
import { tables, values } from "./data.js";
const connection = mysql.createConnection({
  host: "localhost",
  user: "cynthia",
  password: "123456",
  database: "meetup",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

connection.query("CREATE DATABASE IF NOT EXISTS meetup", (err, result) => {
  if (err) throw err;
  console.log("DATABASE CREATED");
});

// creating tables
const createTables = (table) => {
  connection.query(table, (err, result) => {
    if (err) throw err;
    console.log("Table CREATED");
  });
};

// Inserting values
const insertValues = (value) => {
  connection.query(value, (err, result) => {
    if (err) throw err;
    console.log(" value inserted in Table");
  });
};

const dropTables = () => {
  const query = `DROP TABLE Room , Meeting , Invitee`;

  connection.query(query, (err, result) => {
    if (err) console.log(err);

    console.log("Tables Droped");
  });
};
dropTables();

tables.forEach((table) => createTables(table));
values.forEach((value) => insertValues(value));
