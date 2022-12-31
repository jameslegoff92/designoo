const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  process.env.MONGODB_URI || "mongodb+srv://jameslegoff:HadefMni69James@designocluster.gkgcuwa.mongodb.net/designo";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('designo');

    const movies = database.collection('customers');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Anayis' };
    const movie = await movies.findOne(query);

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

module.exports = client;