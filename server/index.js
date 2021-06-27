require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose');
const routes = require('./src/routes/api');

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public'));

app.use('/', routes);

mongoose.connect(process.env.DBURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('DB connected');
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
});

