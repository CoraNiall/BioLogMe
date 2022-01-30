import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import apiRouter from './src/routes/api.js';
import userRouter from './src/routes/user/user.js';
import { connectToDb } from './db/conn.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use('/static', express.static('public'));

app.use('/', (apiRouter, userRouter));

export const mongoclient = await connectToDb();

// await getUserById(mongoclient, '123456');

// await updateUserById(mongoclient, '123456', { userName: 'Layla Reiss' });

// await deleteUserById(mongoclient, '123456');

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

export default app;
