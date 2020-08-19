const commentModel = require('../models/commentModel');

module.exports = {
    addComment: async (req, res) => {
        let doc = await commentModel.insertComment(req.params.postId, req.body.text);
        let status = doc ? 201 : 500;
        res.status(status).json({object: doc});
    }
}