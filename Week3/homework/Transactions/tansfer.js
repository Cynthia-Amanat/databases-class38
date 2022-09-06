const SEND_AMOUNT = `
  UPDATE account
  SET balance = balance - 1000
  WHERE account_number = 101;
`;

const RECEIVED_AMOUNT = `
  UPDATE account
  SET balance = balance + 1000
  WHERE account_number = 102;
`;
const UPDATE_ACCOUNT_CHANGES = `INSERT INTO account_changes 
(change_number, account_number, amount, changed_date, remark)
 VALUES (2,101,1000,"2022-09-06", "null");`;
export const transfer = [
  "START TRANSACTION",
  SEND_AMOUNT,
  RECEIVED_AMOUNT,
  "COMMIT",
];
