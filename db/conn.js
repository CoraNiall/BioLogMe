const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mongoclient = new MongoClient(process.env.URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = {
  connectToServer: function () {
    mongoclient.connect(function (err, mongoclient) {
      assert.equal(null, err);
      db = mongoclient.db('users');
      console.log('Successfully connected to the DB');
      return db;
    });
  },

  getDb: function () {
    return db;
  },

  getCollection: function (collName) {
    const collection = db.collection(collName);
    return collection;
  },

  closeConnection: function () {
    console.log('DB connection closed');
    mongoclient.close();
  },
};
