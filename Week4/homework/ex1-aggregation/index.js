const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const main = async () => {
  const client = new MongoClient(process.env.uri);

  try {
    await client.connect();
    await calculatePopulationForYear(client, "Netherlands");
    await calculatePopulationContinentForYearAndAge(client, "2010", "100+");
  } catch (err) {
    console.log(err.message);
  } finally {
    await client.close();
  }
};
main().catch(console.error);

const calculatePopulationForYear = async (client, Country) => {
  const pipeline = [
    {
      $match: {
        Country: `${Country}`,
      },
    },
    {
      $group: {
        _id: "$Year",
        countPopulation: {
          $sum: {
            $add: [
              {
                $toInt: "$M",
              },
              {
                $toInt: "$F",
              },
            ],
          },
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];
  const aggCursor = await client
    .db("databaseWeek4")
    .collection("week4")
    .aggregate(pipeline)
    .toArray();

  await aggCursor.forEach((YearlyPopulation) => {
    console.log(
      ` Id:${YearlyPopulation._id}  countPopulation: ${YearlyPopulation.countPopulation}`
    );
  });
};

const calculatePopulationContinentForYearAndAge = async (client, year, age) => {
  const pipeline = [
    {
      $match: {
        Country: {
          $in: [
            "AFRICA",
            "ASIA",
            "EUROPE",
            "LATIN AMERICA AND THE CARIBBEAN",
            "NORTHERN AMERICA",
            "OCEANIA",
          ],
        },
        Year: year,
        Age: age,
      },
    },
    {
      $addFields: {
        TotalPopulation: {
          $add: [
            {
              $toInt: "$M",
            },
            {
              $toInt: "$F",
            },
          ],
        },
      },
    },
  ];

  const aggCursor = await client
    .db("databaseWeek4")
    .collection("week4")
    .aggregate(pipeline)
    .toArray();

  await aggCursor.forEach((YearlyPopulation) => {
    console.log(YearlyPopulation);
  });
};
