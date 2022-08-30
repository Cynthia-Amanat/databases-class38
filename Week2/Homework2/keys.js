export const CREATE_ALTER_AUTHORS = [
  `CREATE TABLE IF NOT EXISTS authors(
    author_no INT   PRIMARY KEY,
    author_name VARCHAR(200),
    university VARCHAR(200),
    date_of_birth DATE,
    h_index INT,
    gender ENUM ('M','F')
);`,
  `ALTER TABLE authors
  ADD mentor INT NULL REFERENCES authors(author_no);`,
];
