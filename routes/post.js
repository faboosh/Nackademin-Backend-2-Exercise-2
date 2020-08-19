const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', (req, res ) => {
    postController.getPosts(req, res);
})

router.post('/add', (req, res) => {
    postController.addPost(req, res);
});
router.put('/update/:postId', (req, res) => {
    postController.updatePost(req, res);
});

router.delete('/delete/:postId', (req, res) => {
    postController.deletePost(req, res);
});

module.exports = router