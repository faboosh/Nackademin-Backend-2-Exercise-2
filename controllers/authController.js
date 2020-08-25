const userModel = require('../models/userModel');

class authController {
    async authenticate(req, res) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            if(!username || !password) {
                throw new Error('Missing username or password!');
            }

            let user = await userModel.getUserByUsername(username);
            if (!user) {
                throw new Error('Username not found!');
            }
            if(!await userModel.verifyPassword(password, user.passwordHash)) {
                throw new Error('Username or password incorrect!');
            }
            let payload = {
                userId: user._id
            }
            let token = await userModel.createToken(payload);
            res.json({token: token});
        } catch(error) {
            res.status(400).json({msg: error.message});
        }
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