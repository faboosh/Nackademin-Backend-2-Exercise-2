const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', postController.getPosts);

router.get('/:postId', postController.getPost);

router.post('/', postController.addPost);

router.patch('/:postId', postController.updatePost);

router.delete('/:postId', postController.deletePost);

router.get('/:postId/comments', postController.getAllComments);

module.exports = router