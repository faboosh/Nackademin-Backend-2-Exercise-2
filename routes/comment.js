const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);

router.get('/:commentId', commentController.getComment);

router.post('/:postId', commentController.addComment);

router.delete('/:commentId', commentController.deleteComment);

router.patch('/:commentId', commentController.updateComment);

module.exports = router;