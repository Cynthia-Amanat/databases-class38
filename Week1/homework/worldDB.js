import mysql from "mysql";
import { worldQuery } from "./data.js";
const connection = mysql.createConnection({
  host: "localhost",
  user: "cynthia",
  password: "123456",
  database: "world",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

const worldDataQuery = (query) => {
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.table(result);
  });
};

worldQuery.forEach((query) => worldDataQuery(query));
