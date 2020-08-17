const mongodb = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`;
const app = express();
const port = process.env.PORT || 8080;

/**
 * Middleware
 */
app.use(bodyParser.json());
const client = new MongoClient(uri);
let db = await client.connect();

/**
 * Posts a new post.
 */
app.post('/addPost', (req, res) => {
    let title = req.body.data.title;
});

app.listen(port, () => {
    console.log(`Listen on ${port}`);
})