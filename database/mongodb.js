const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`;
mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
    Post: mongoose.model('post', {
        title: String,
        content: String,
        owner: String,
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"
        }]
    }),
    Comment: mongoose.model('comment', {
        text: { type: String },
        owner: { type: String, default:'Pat' },
    }),
    User: mongoose.model('user', {
        username: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        groups: {
            type: Array,
            default: ['user']
        }
    }),
}
