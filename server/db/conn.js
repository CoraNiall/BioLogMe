import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import assert from 'assert';

dotenv.config();

async function connectToDb() {
  const mongoclient = new MongoClient(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  try {
    await mongoclient
      .connect()
      .then(console.log('Successfully connected to the DB'));
  } catch (e) {
    console.error(e);
  }

  return mongoclient;
}

async function closeConnection(mongoclient) {
  await mongoclient.close();
  console.log('DB connection now closed');
}

export { connectToDb, closeConnection };
