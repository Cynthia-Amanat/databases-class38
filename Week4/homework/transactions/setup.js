import { transactionCollection } from "./index.js";

export const createAccount = async (account_number, balance) => {
  const newAccount = {
    account_number: account_number,
    balance: balance,
    account_changes: [],
  };

  const result = await transactionCollection.insertOne(newAccount);
  console.log(`Account inserted with the id ${result.insertedId}`);
};
