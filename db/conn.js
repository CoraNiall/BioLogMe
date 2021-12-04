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
      db = mongoclient.db('biologmeUsers');
      console.log('Successfully connected to the DB');
      return db;
    });
  },

  getUsersCollection: function (db) {
    db = mongoclient.db('biologmeUsers');
    const collection = db.collection('users');
    console.log(`Connected to users collection`);
    return collection;
  },

  closeConnection: function () {
    console.log('DB connection closed');
    mongoclient.close();
  },
};
