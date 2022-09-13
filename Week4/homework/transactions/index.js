import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();
import { transaction } from "./transfer.js";
import { createAccount } from "./setup.js";
const client = new MongoClient(process.env.uri);

export const transactionCollection = client
  .db("databaseWeek4")
  .collection("accounts");

const main = async () => {
  await client.connect();
  try {
    await createAccount(101, 5000);
    await createAccount(102, 6000);
    await transaction(client, 101, 102, 1000, "transaction completed");
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
};

main().catch((err) => console.log(err));
