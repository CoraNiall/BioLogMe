const User = require('../../../db/models/user')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'Hello World!'})
})

router.post('/login', ( req, res ) => {
  res.send('This route is for logging in')
})

router.post('/register', ( req, res ) => {
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;
  const newUser = new User({
    email,
    userName,
    password
  })
  newUser.save();
    if (res.statusCode === 200) {
        res.send({message: 'User successfully registered'});
    }
})

router.get('/dashboard', ( req, res ) => {
  res.send('This route is for the User\'s dashboard')
})

module.exports = router;