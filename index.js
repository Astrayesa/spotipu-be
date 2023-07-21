const mongodb = require('mongodb');
const express = require('express');

const url = "mongodb://127.0.0.1:27017/";
const client = new mongodb.MongoClient(url);

const app = express();

app.get('/', (req, res) => {
    res.send('Hai World!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
