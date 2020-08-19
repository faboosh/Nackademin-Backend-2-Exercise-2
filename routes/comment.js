const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.post('/add/:postId', (req, res) => {
    commentController.addComment(req, res);
});

module.exports = router;