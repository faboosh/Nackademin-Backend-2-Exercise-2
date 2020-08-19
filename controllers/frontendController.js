const postModel = require('../models/postModel');

module.exports = {
    getPosts: async (req, res) => {
        let posts = await postModel.getPosts()
        res.render('index', {posts: posts})
    },
    addPost: async (req, res) => {
        res.render('addPost')
    },
    getPost: async(req, res) => {
        let post = await postModel.getPost(req.params.postId)
        res.render('viewPost', {post: post})
    }
}