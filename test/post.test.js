require('dotenv').config('../')

const chai = require('chai')
chai.should()
const {Post} = require('../database/mongodb');

const postModel = require('../models/postModel')

describe('Post model', () => {
    afterEach(async () => {
        await Post.collection.drop()
    })
    it('Should return x count of posts', async () => {
        // arrange
        const res = await postModel.insertPost('testing post', 'this is a testing post', 'randomId for owner')

        // act
        const postCount = await postModel.Count()

        // assert
        postCount.should.be.equal(1)
    })
})