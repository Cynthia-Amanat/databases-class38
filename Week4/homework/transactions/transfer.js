import { transactionCollection } from "./index.js";

export const transaction = async (
  client,
  senderAccountNumber,
  receiverAccountNumber,
  amount,
  remark
) => {
  const senderAccountChange = await createTransferDocument(
    senderAccountNumber,
    amount * -1,
    remark
  );
  const receiverAccountChange = await createTransferDocument(
    receiverAccountNumber,
    amount,
    remark
  );

  const session = await client.startSession();
  const transactionOptions = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };
  try {
    await session.withTransaction(async () => {
      await transactionCollection.updateOne(
        { account_number: senderAccountNumber },
        {
          $inc: { balance: amount * -1 },
          $push: { account_changes: senderAccountChange },
        },
        { session }
      );
      await transactionCollection.updateOne(
        { account_number: receiverAccountNumber },
        {
          $inc: { balance: amount },
          $push: { account_changes: receiverAccountChange },
        },
        { session }
      );
    }, transactionOptions);
    console.log(`amount transfer successfully `);
  } catch (error) {
    await session.abortTransaction();
    console.log(`amount transfer not possible due to  ${error}`);
  } finally {
    await session.endSession();
  }
};

const createTransferDocument = async (account_number, amount, remark) => {
  const account = await transactionCollection.findOne({
    account_number: account_number,
  });

  const numberOfChanges = account["account_changes"].length;
  let account_change = {
    change_number: numberOfChanges + 1,
    amount: amount,
    changed_date: new Date(),
    remark: remark,
  };
  return account_change;
};
