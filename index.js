require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const postRoute = require('./routes/post');
const comRoute = require('./routes/comment');
const frondEnd = require('./routes/frontend');
const authRoute = require('./routes/auth');
const path = require('path')

const app = express();
const port = process.env.PORT || 8080;


/**
 * Middleware
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('./public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/posts', postRoute);
app.use('/comments', comRoute);
app.use('/', frondEnd);
app.use('/auth', authRoute);


app.listen(port, () => {
    console.log(`Listen on ${port}`);
})
