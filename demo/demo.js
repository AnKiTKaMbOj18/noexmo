const { MongoClient } = require("mongodb");

async function main() {
  const uri = process.env.CONNECTION_URL;

  const client = new MongoClient(uri);

  try {
    await client.connect();
    await listDatabases(client);
    await createListing(client, {
      name: "test",
      summary: "test summary",
      bedrooms: 1,
      bathrooms: 1
    })
  } catch(e) {
    console.error(e);
  } finally {
    client.close();
  }
}

main().catch(console.error);

async function createListing(client, newListing) {
  const result = await client.db("test").collection("demo").insertOne(newListing);
  console.log("New record inserted: ",result);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("databasesList: ", databasesList);
  databasesList.databases.forEach(db=> console.log(`- ${db.name}`));
}
