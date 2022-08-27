import express from 'express';
import { mongoclient } from '../../../index.js';
import {
  registerUser,
  getUser,
  updateUserById,
  deleteUserById,
  checkUserExists,
} from '../../../db/userDetails.js';

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
  const newUser = req.body.formData;
  try {
    const userObj = await checkUserExists(mongoclient, newUser.email);
    if (!userObj) {
      await registerUser(mongoclient, newUser);
      res.send({ message: 'User successfully registered', user: newUser });
    } else {
      res.send({ message: 'User already registered' });
    }
  } catch (e) {
    console.error(e);
  }
});

userRouter.post('/login', async (req, res) => {
  const user = req.body.user;
  try {
    const userObj = await getUser(mongoclient, user);
    if (!userObj) {
      res.send({ message: 'User not found' });
    } else {
      res.send({ message: 'Successful login', user: userObj });
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
