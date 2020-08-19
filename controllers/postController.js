const postModel = require('../models/postModel');

module.exports = {
    addPost: async (req, res) => {
        let lastId = await postModel.insertPost(req.body.title, req.body.content);
        let status = lastId ? 201 : 500;
        res.status(status).json({last_inserted_id: lastId});
    },
    updatePost: async (req, res) => {
        let lastId = await postModel.updatePost(req.body.title, req.body.content, req.params.postId)
        let status = lastId ? 201 : 500;
        res.status(status).json({last_inserted_id: lastId});
    },
    deletePost: async (req, res) => {
        let count = await postModel.deletePost(req.params.postId)
        let status = count ? 201 : 500;
        res.status(status).json({removed_count: count});
    },
    getPosts: async (req, res) => {
        let posts = await postModel.getPosts()
        res.json({posts})
    },
}