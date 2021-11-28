const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  console.log('Hello World! This will eventually be a login page');
});

router.post('/user-dashboard', (req, res) => {
  res.send({
    message:
      "This route is for the User's dashboard where they can log their data",
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
module.exports = router;
