const postModel = require('../models/postModel');
const commentModel = require('../models/commentModel');

module.exports = {
    addPost: async (req, res) => {
        let lastId = await postModel.insertPost(req.body.title, req.body.content, req.userId);
        let status = lastId ? 201 : 500;
        res.status(status).json({last_inserted_id: lastId});
    },
    updatePost: async (req, res) => {
        const { title, content } = req.body;
        const { postId } = req.params;
        const { userId } = req;
        let lastId = await postModel.updatePost({title, content, postId, owner: userId});
        let status = lastId ? 200 : 401;
        res.status(status).json({last_inserted_id: lastId});
    },
    deletePost: async (req, res) => {
        let count = await postModel.deletePost({_id: req.params.postId, owner: req.userId})
        let status = count ? 200 : 401;
        res.status(status).json({removed_count: count});
    },
    
    getPosts: async (req, res) => {
        console.log(req.query);
        let posts = await postModel.getPosts({query: req.query.query})
        res.json({posts})
    },

    getPost: async (req, res) => {
        let postId = req.params.postId;
        let post = await postModel.getPost(postId)
        res.json({post});
    },
    getAllComments: async(req, res) => {
        let postId = req.params.postId;
        let commentIds = await postModel.getPostCommentsIds(postId);
        let comments = await commentModel.getCommentsByCommentIdsArray(commentIds);
        res.json(comments)
    },
}