import express from 'express';
import { mongoclient } from '../../../index.js';
import {
  registerUser,
  getUser,
  updateUserById,
  deleteUserById,
} from '../../../db/userDetails.js';

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
  const newUser = req.body.formData;
  await registerUser(mongoclient, newUser);
  res.send(newUser);
});

userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body.user;
  try {
    const userObj = await mongoclient
      .db('biologme')
      .collection('users')
      .findOne({ email: email, password: password });

    if (!userObj) {
      res.send({ message: 'User not found' });
    } else {
      res.send({ message: 'Successful login', user: userObj.id });
    }
  } catch (e) {
    console.error(e);
  }
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
