require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const db = require('../db/conn');
const routes = require('./src/routes/api');

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public'));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  db.connectToServer();
});
