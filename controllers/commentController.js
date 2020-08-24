const commentModel = require('../models/commentModel');

module.exports = {
    addComment: async (req, res) => {
        let doc = await commentModel.insertComment(req.params.postId, req.body.text);
        let status = doc ? 201 : 500;
        res.status(status).json({object: doc});
    },
    getComments: async (req, res) => {
        let doc = await commentModel.getComments()
        res.json(doc);
    },
    getComment: async (req, res) => {
        let commentId = req.params.commentId;
        let doc = await commentModel.getComment(commentId);
        res.json(doc);
    },
    deleteComment: async (req, res) => {
        let commentId = req.params.commentId;
        let doc = await commentModel.deleteComment(commentId);
        res.json(doc);
    },
    updateComment: async (req, res) => {
        let commentId = req.params.commentId;
        let object = req.body;
        let doc = await commentModel.updateComment(commentId, object);
        res.json(doc);
    }
}