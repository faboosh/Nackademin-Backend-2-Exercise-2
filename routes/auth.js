const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/', authController.authenticate);
router.post('/register', authController.createUser);

module.exports = router;