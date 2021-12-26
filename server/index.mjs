import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import router from './src/routes/api.js';
import {
  dbConnect,
  getUsersCollection,
  closeConnection,
  listDatabases,
} from './db/conn.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public'));

app.use('/', router);

const mongoclient = await dbConnect();
await getUsersCollection(mongoclient);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

export default app;
