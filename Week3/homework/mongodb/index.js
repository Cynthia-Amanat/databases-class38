import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();

import { seedDatabase } from "./seedDatabase.js";

async function createEpisodeExercise(collection) {
  const episode13 = {
    episode: "S09E13",
    title: "MOUNTAIN HIDE-AWAY",
    elements: [
      "CIRRUS",
      "CLOUDS",
      "CONIFER",
      "DECIDIOUS",
      "GRASS",
      "MOUNTAIN",
      "MOUNTAINS",
      "RIVER",
      "SNOWY_MOUNTAIN",
      "TREE",
      "TREES",
    ],
  };
  try {
    const result = await collection.insertOne(episode13);
    const data = JSON.stringify(result.insertedId);
    if (data)
      console.log(
        `Created season 9 episode 13 and the document got the id ${data}`
      );
  } catch (err) {
    console.log(err.message);
  }
}

async function findEpisodesExercises(collection) {
  try {
    // find "WINTER SUN"
    await collection
      .find({ episode: "S02E02" })
      .toArray()
      .then((items) => {
        if (items) {
          console.log(
            `The title of episode 2 in season 2 is ${JSON.stringify(
              items[0].title
            )}`
          );
        }
      });
    // find episode "BLACK RIVER"
    await collection
      .find({ title: "BLACK RIVER" })
      .toArray()
      .then((items) => {
        if (items) {
          console.log(
            `The season and episode number of the "BLACK RIVER" episode is ${items[0].episode}`
          );
        }
      });
    // episode titles where Bob Ross painted a CLIFF
    await collection
      .find({ elements: "CLIFF" })
      .toArray()
      .then(async (items) => {
        if (items) {
          const titles = await items.map((item) => item.title);
          console.log(
            `The episodes that Bob Ross painted a CLIFF are ${titles}`
          );
        }
      });
    // episode titles where Bob Ross painted a CLIFF and a LIGHTHOUSE

    await collection
      .find({ $and: [{ elements: "CLIFF" }, { elements: "LIGHTHOUSE" }] })
      .toArray()
      .then(async (items) => {
        if (items) {
          const titles = await items.map((item) => item.title);
          console.log(
            `The episodes that Bob Ross painted a CLIFF and a LIGHTHOUSE are ${titles}`
          );
        }
      });
  } catch (err) {
    console.log(err.message);
  }
}

async function updateEpisodeExercises(collection) {
  try {
    const updatedEpisode = await collection.findOneAndUpdate(
      {
        title: "BLUE RIDGE FALLERS",
      },
      { $set: { title: "BLUE RIDGE FALLS" } }
    );

    console.log(
      `Ran a command to update episode 13 in season 30 and it updated ${JSON.stringify(
        updatedEpisode.lastErrorObject.n
      )} episode`
    );
    const updateMany = await collection.updateMany(
      { elements: "BUSHES" },
      { $set: { elements: "BUSH" } },
      { multi: true }
    );
    console.log(
      `Ran a command to update all the BUSHES to BUSH and it updated ${JSON.stringify(
        updateMany.modifiedCount
      )} episodes`
    );
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteEpisodeExercise(collection) {
  try {
    const deletedEpisode = await collection.findOneAndDelete({
      episode: "S31E14",
    });

    console.log(
      `Ran a command to delete episode and it deleted ${deletedEpisode.lastErrorObject.n} episodes`
    );
    console.log();
  } catch (err) {
    console.log(err.message);
  }
}

async function main() {
  if (process.env.MONGODB_URL == null) {
    throw Error(
      `You did not set up the environment variables correctly. Did you create a '.env' file and add a package to create it?`
    );
  }
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();

    // Seed our database
    await seedDatabase(client);

    const collection = await client
      .db("databaseWeek3")
      .collection("bob_ross_episodes");

    // CREATE;
    await createEpisodeExercise(collection);
    // READ
    await findEpisodesExercises(collection);

    // UPDATE
    await updateEpisodeExercises(collection);

    // // DELETE
    await deleteEpisodeExercise(collection);
  } catch (err) {
    console.error(err);
  } finally {
    // Always close the connection at the end
    client.close();
  }
}

main();

/**
 * In the end the console should read something like this:

Created season 9 episode 13 and the document got the id 625e9addd11e82a59aa9ff93
The title of episode 2 in season 2 is WINTER SUN
The season and episode number of the "BLACK RIVER" episode is S02E06
The episodes that Bob Ross painted a CLIFF are NIGHT LIGHT, EVENING SEASCAPE, SURF'S UP, CLIFFSIDE, BY THE SEA, DEEP WILDERNESS HOME, CRIMSON TIDE, GRACEFUL WATERFALL
The episodes that Bob Ross painted a CLIFF and a LIGHTHOUSE are NIGHT LIGHT
Ran a command to update episode 13 in season 30 and it updated 1 episodes
Ran a command to update all the BUSHES to BUSH and it updated 120 episodes
Ran a command to delete episode and it deleted 1 episodes

*/
