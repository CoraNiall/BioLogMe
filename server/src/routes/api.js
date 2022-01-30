import express from 'express';
import { mongoclient } from '../../index.js';
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../../db/userDetails.js';

const router = express.Router();

router.post('/login', (req, res) => {
  console.log('Hello World! This will eventually be a login page');
});

router.post('/profile-page/create-user', async (req, res) => {
  const newUser = req.body.formData;
  await createUser(mongoclient, newUser);
  res.send(newUser);
});

router.get('/profile-page/show-user', (req, res) => {
  console.log(req.body);
  res.send({ message: 'To show a user' });
});

router.put('/profile-page/update-user', (req, res) => {
  console.log(req.body);
  res.send({ message: 'To update a user' });
});

router.delete('/profile-page/delete-user', (req, res) => {
  console.log(req.body);
  res.send({ message: 'To delete a user' });
});

router.get('/home', (req, res) => {
  res.send({
    message:
      'This is where the user will eventually view their data visualisations',
  });
});

export default router;
