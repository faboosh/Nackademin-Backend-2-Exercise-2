const userModel = require('../models/userModel');

class authController {
    async authenticate(req, res) {

    }

    async createUser(req, res) {
        try {
            let result = await userModel.addUser(req.body);
            res.json(result);
        } catch(error) {
            res.status(400).json({msg: error.message});
        }
    }
}

module.exports = new authController();