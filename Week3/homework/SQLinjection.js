import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "cynthia",
  password: "123456",
  database: "world",
});

const showData = (error, results) => {
  if (error) {
    throw error;
  } else {
    console.log(results);
  }
};
const getPopulation = (Country, name, code, cb) => {
  connection.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    (err, result) => {
      if (err) cb(err);
      cb(result);
    }
  );
};

getPopulation("country", "pakni", "PK ' OR '1'='1", showData);

const getPopulationAvoidInjection = (Country, name, code, cb) => {
  connection.query(
    `SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
    [name, code],
    (err, result) => {
      if (err) cb(err);
      S;
      cb(result);
    }
  );
};
