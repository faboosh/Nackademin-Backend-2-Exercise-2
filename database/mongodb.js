const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`;
mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
    Post: mongoose.model('post', {
        title: String,
        content: String,
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"
        }]
    }),
    Comment: mongoose.model('comment', {
        text: String,
    })
}
