const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use((req, res, next) => {
    res.send("Welcome to BioLogMe");
});

app.listen((port, () => {
    console.log(`Server is running on port ${port}`);
}))