const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const URI = process.env.URI;

// Use connect method to connect to the Server
const mongoclient = new MongoClient(URI);

async function run() {
  try {
    // Connect the client to the server
    await mongoclient.connect(function (err) {
      assert.equal(null, err);
    });
    // Establish and verify connection
    await mongoclient.db('users');
    console.log('Connected successfully to server');
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoclient.close();
  }
}
run().catch(console.dir);
