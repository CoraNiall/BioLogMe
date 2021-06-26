require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose');

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'})
})

app.post('/login', ( req, res ) => {
  res.send('This route is for logging in')
})

app.post('/register', ( req, res ) => {
  res.send('This route is for registering as a new user')
})

app.get('/dashboard', ( req, res ) => {
  res.send('This route is for the User\'s dashboard')
})

app.get('/view', ( req, res ) => {
    res.send('This route is for User\'s viewing charts of data')
})

app.post('/upload', ( req, res ) => {
    res.json({message: 'This route is for uploading new data'})
})

app.delete('/remove', ( req, res ) => {
  res.send('This route is for deleting data')
})

mongoose.connect(process.env.DBURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('DB connected');
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
});
