import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import router from './src/routes/api.js';
import { connectToDb, getUsersCollection } from './db/conn.js';
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from './src/components/userDetails.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public'));

app.use('/', router);

const mongoclient = await connectToDb();
await getUsersCollection(mongoclient);

// await createUser(mongoclient, {
//   name: 'Caroline Reiss',
//   email: 'caz@caz.com',
//   password: 'a-password',
// });

// await getUserById(mongoclient, '12345');

// await deleteUserById(mongoclient, '123456');

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

export default app;
