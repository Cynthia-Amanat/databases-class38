const CREATE_ACCOUNT_TABLE = `
  CREATE TABLE IF NOT EXISTS account (
  account_number INT PRIMARY KEY, 
  balance INT
  );
`;

const CREATE_ACCOUNT_CHANGES_TABLE = `
CREATE TABLE IF NOT EXISTS account_changes(
change_number INT PRIMARY KEY,
account_number INT,
amount INT,
changed_date DATE, 
remark VARCHAR(200),
FOREIGN KEY (account_number) REFERENCES account(account_number)
);
`;

export const createdTables = [
  CREATE_ACCOUNT_TABLE,
  CREATE_ACCOUNT_CHANGES_TABLE,
];
