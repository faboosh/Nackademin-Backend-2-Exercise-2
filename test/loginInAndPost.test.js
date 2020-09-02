const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const { expect, request } = chai
const app = require('../index')

const { User } = require('../database/mongodb');

const userModel = require('../models/userModel')

describe('My RESTful resource', () => {
    beforeEach(async function () {
        await User.deleteMany({})
        const fields = {
            username: 'ashur',
            password: '123',
            firstname: 'ashur',
            surname: 'warda'
        }
        const user = await userModel.addUser(fields)
        let payload = {
            userId: user._id
        }
        // console.log(user)
        this.currentTest.token = await userModel.createToken(payload)
    })
    it('should login in and create post', async function () {
        const postData = {
            title: 'test',
            content: 'testing test content'
        }
        console.log(this.test.token)
        request(app)
            .post('/posts')
            .set('authorization', `Bearer ${this.test.token}`)
            .set('Content-Type', `application/json`)
            .send(postData)
            .end(function (err, res) {
                if (err) {
                    // console.log(err)
                } else {
                    // console.log(res)
                    expect(res).to.have.status(201)
                    expect(res).to.be.json
                }
            })
    })
})