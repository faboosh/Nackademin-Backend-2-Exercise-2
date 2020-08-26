const router = require('express').Router();
const postController = require('../controllers/postController');
const verifyJWT = require('../util/auth');

router.get('/', postController.getPosts);

router.get('/:postId', postController.getPost);

router.post('/', verifyJWT, postController.addPost);

router.patch('/:postId', verifyJWT, postController.updatePost);

router.delete('/:postId', verifyJWT, postController.deletePost);

router.get('/:postId/comments', postController.getAllComments);

module.exports = router