const { Post, Comment } = require('../database/mongodb');

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
    getComments: async () => {
        return await Comment.find({}, {});
    },
    getComment: async (commentId) => {
        return await Comment.find({ _id: commentId }, {});
    },
    deleteComment: async (commentId) => {
        return await Comment.findOneAndDelete({ _id: commentId });
    },
    updateComment: async (commentId, object) => {
        return await Comment.findOneAndUpdate({ _id: commentId }, object, {
            new: true
        });
    },
    getCommentsByCommentIdsArray: async (commentIds) => {
        return await Comment.find({
            _id: { $in: commentIds }
        })
    },
    getCommentsByCommentOwnerArray: async (_owner) => {
        return await Comment.find({
            owner: { $in: _owner }
        })
    },
    getCommentByQuery: async (query) => {
        return await Comment.find({text: { $in: query }})
    }
}