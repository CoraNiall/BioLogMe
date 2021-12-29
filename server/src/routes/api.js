import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  console.log('Hello World! This will eventually be a login page');
});

router.post('/user-details', (req, res) => {
  const { userName, email, password } = req.body;
  res.send({
    message: 'User details updated successfully',
  });
});

router.post('/profile-page', (req, res) => {
  res.send({
    message:
      "This is the user's profile route where they can create, read, update and delete their personal lists",
  });
});

router.get('/home', (req, res) => {
  res.send({
    message:
      'This is where the user will eventually view their data visualisations',
  });
});

export default router;
