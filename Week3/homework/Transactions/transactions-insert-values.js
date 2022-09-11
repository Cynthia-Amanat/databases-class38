export const INSERT_ACCOUNT_DATA = `
  INSERT INTO account ( account_number , balance )
  VALUES
  (101, 2000),
  (102, 3000);
`;

export const INSERT_ACCOUNT_CHANGES_DATA = `INSERT INTO account_changes 
(change_number, account_number, amount, changed_date, remark)
 VALUES (2,101,1000,"2022-09-06", "Amount Transfer");`;
