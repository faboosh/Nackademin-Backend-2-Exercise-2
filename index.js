require('dotenv').config();
const express = require('express');
const postRoute = require('./routes/post');
const comRoute = require('./routes/comment');
const frondEnd = require('./routes/frontend');
const authRoute = require('./routes/auth');
const path = require('path')

const app = express();
const port = process.env.PORT || 8080;
const jwt = require('jsonwebtoken');

/**
 * Middleware
 */
function verifyJWT(req, res, next) {
    if(!req.headers.authorization) return res.sendStatus(403)
    const token = req.headers.authorization.replace("Bearer ", "");
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = payload;
        next();
    } catch(error) {
        res.sendStatus(403);
    }

}
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('./public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/**
 * Routes
 */

app.use('/posts', verifyJWT, postRoute);
app.use('/comments', verifyJWT, comRoute);
app.use('/', frondEnd);
app.use('/auth', authRoute);


app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
