const {Post, Comment} = require('../database/mongodb');

module.exports = {
    insertComment: async (postId, text) => {

        return await Post.findById(postId)
            .then(async (postDoc, err) => {
                if (err) return false;
                return await Comment.create({})
                    .then((comDoc, err) => {
                       if (err) return false;
                       comDoc.text = text;
                       comDoc.save();
                       postDoc.comments.push(comDoc);
                       postDoc.save();
                       return comDoc;
                    });
            });
    },
}