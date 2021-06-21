const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb+srv://admin:admin@cluster0.macl3.mongodb.net/demo?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    await listDatabases(client);
  } catch(e) {
    console.error(e);
  } finally {
    client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("databasesList: ", databasesList);
  databasesList.databases.forEach(db=> console.log(`- ${db.name}`));
}
