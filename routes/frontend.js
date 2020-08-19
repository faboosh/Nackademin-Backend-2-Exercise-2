const router = require('express').Router();
const frontendController = require('../controllers/frontendController');

router.get('/', (req, res) => {
    frontendController.getPosts(req, res)
})

router.get('/addPost', (req, res) => {
    frontendController.addPost(req, res)
})

router.get('/viewPost/:postId', (req, res) => {
    frontendController.getPost(req, res)
})
module.exports = router;