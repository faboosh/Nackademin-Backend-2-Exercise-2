const mongodb = require('mongodb');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listen on ${port}`);
})