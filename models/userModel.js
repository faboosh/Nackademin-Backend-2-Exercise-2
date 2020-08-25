const {User} = require('../database/mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserExistsError extends Error {
    constructor(message) {
        super(message);
        this.name = "UserExistsError";
    }
}

class userModel {
    async getUserPasswordHash(userId) {
        let result = await User.find({_id: userId});
        return result.passwordHash
    }

    async getUserByUsername(username) {
        return await User.findOne({username: username});
    }

    async userExists(username) {
        let result = await this.getUserByUsername(username);
        if(result) {
            return true;
        }
        return false;
    }

    async verifyPassword(password, passwordHash){
        return bcrypt.compareSync(password, passwordHash);
    }

    async createToken(payload) {
        return await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
    }

    async addUser(requestBody) {
        if(!requestBody.password) {
            throw new Error('Missing password!');
        }
        if( await this.userExists(requestBody.username)) {
            throw new UserExistsError("Try another username!");
        }
        let userObject = {
            "username": requestBody.username,
            "passwordHash": bcrypt.hashSync(requestBody.password, 10),
            "firstname": requestBody.firstname,
            "surname": requestBody.surname
        }
        let result = await User.create(userObject);
        return result;
    }
}

module.exports = new userModel();