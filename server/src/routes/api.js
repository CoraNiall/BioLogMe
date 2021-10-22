const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Hello World!');
});

router.get('/dashboard', (req, res) => {
  res.send("This route is for the User's dashboard");
});

module.exports = router;
