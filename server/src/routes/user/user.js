import express from 'express';
import { mongoclient } from '../../../index.js';
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../../../db/userDetails.js';

const userRouter = express.Router();

userRouter.post('/profile-page/create-user', async (req, res) => {
  const newUser = req.body.formData;
  await createUser(mongoclient, newUser);
  res.send(newUser);
});

userRouter.get('/profile-page/show-user', (req, res) => {
  console.log(req.body);
  res.send({ message: 'To show a user' });
});

userRouter.put('/profile-page/update-user', (req, res) => {
  console.log(req.body);
  res.send({ message: 'To update a user' });
});

userRouter.delete('/profile-page/delete-user', (req, res) => {
  console.log(req.body);
  res.send({ message: 'To delete a user' });
});

export default userRouter;
