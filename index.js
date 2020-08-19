require('dotenv').config();
const express = require('express');
const postRoute = require('./routes/post');
const comRoute = require('./routes/comment');
const frondEnd = require('./routes/frontend');
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

app.use('/bloggPost', postRoute);
app.use('/bloggComment', comRoute);
app.use('/', frondEnd);

/*
app.post('/addComment/:postId', (req, res) => {
    Post.findById(req.params.postId, (err, postDoc) => {
        if (err) {
            res.status(500).json(err);
            return;
        }

        Comment.create(req.body, (err, commentDoc) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            commentDoc.text = req.body.text;
            commentDoc.save();
            postDoc.comments.push(commentDoc);
            postDoc.save();
            res.status(201).json(commentDoc);
        });
    });
});

*/


app.listen(port, () => {
    console.log(`Listen on ${port}`);
})
