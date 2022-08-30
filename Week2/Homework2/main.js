import mysql from "mysql";
import util from "util";
import { CREATE_ALTER_AUTHORS } from "./keys.js";
import { CREATE_RELATE } from "./relationships.js";
import { JOIN_QUERIES } from "./join.js";
import { AGGREGATE_QUERIES } from "./sqlfunctions.js";

const connection = mysql.createConnection({
  host: "localhost",
  user: "cynthia",
  password: "123456",
  database: "AuthorsData",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

connection.query(`CREATE DATABASE IF NOT EXISTS AuthorsData`, (err, result) => {
  if (err) throw err;
  console.log("database created");
});
const QueriesResult = (error, results) => {
  if (error) throw error;
  console.log(results);
};

const execQuery = util.promisify(connection.query.bind(connection));
const seedDatabase = () => {
  try {
    CREATE_ALTER_AUTHORS.forEach(
      async (query) => await execQuery(query, QueriesResult)
    );

    CREATE_RELATE.forEach(
      async (query) => await execQuery(query, QueriesResult)
    );
    JOIN_QUERIES.forEach(
      async (query) => await execQuery(query, QueriesResult)
    );
    AGGREGATE_QUERIES.forEach(
      async (query) => await execQuery(query, QueriesResult)
    );
  } catch (err) {
    console.error(err.message);
  }
};

seedDatabase();

connection.end();
