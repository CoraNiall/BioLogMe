import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import assert from 'assert';

dotenv.config();

async function dbConnect() {
  const mongoclient = new MongoClient(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  mongoclient.connect().then(console.log('Successfully connected to the DB'));

  return mongoclient;
}

async function getUsersCollection(mongoclient) {
  const collection = mongoclient.db('biologmeUsers').collection('users');
  console.log(`Successfully connected to Users collection`);
  return collection;
}

async function closeConnection(mongoclient) {
  mongoclient.close();
  console.log('DB connection now closed');
}

async function listDatabases(mongoclient) {
  const allDatabases = mongoclient.db('biologmeUsers').admin().listDatabases();
  console.log(allDatabases);
}

export { dbConnect, getUsersCollection, closeConnection, listDatabases };
