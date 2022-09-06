import mysql from "mysql";
import util from "util";
import { createdTables } from "./transactions-create-tables.js";
import { insertData } from "./transactions-insert-values.js";
import { transfer } from "./tansfer.js";

const connection = mysql.createConnection({
  host: "localhost",
  user: "cynthia",
  password: "123456",
  database: "BankAccount",
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected");
  }
});
const queriesResult = (err, results) => {
  if (err) {
    throw err;
  } else {
    console.log(results);
    console.log("Query ok");
  }
};

connection.query(`CREATE DATABASE IF NOT EXISTS BankAccount`, (err, result) => {
  if (err) throw err;
  console.log("database created");
});

const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  createdTables.forEach(
    async (query) => await execQuery(query, console.log("table created"))
  );
  insertData.forEach(
    async (query) => await execQuery(query, console.log("data inserted"))
  );
  try {
    transfer.forEach(async (query) => {
      await execQuery(query);
    });
    console.log("amount transfer");
  } catch (err) {
    await execQuery("ROLLBACK");
    console.log(err);
  }
  connection.end();
};
seedDatabase();
