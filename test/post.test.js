// require('dotenv').config('../')

const chai = require('chai')
chai.should()
const {Post} = require('../database/mongodb');

const postModel = require('../models/postModel');

describe('Post model', () => {
    afterEach(async () => {
        await Post.collection.drop()
    })
    it('Should return x count of posts', async () => {
        // arrange
        await postModel.insertPost('testing post', 'this is a testing post', 'randomId for owner')

        // act
        const postCount = await postModel.Count()

        // assert
        postCount.should.be.equal(1)
    })
    it('Should return the post owner', async () => {
        // arrange
        await postModel.insertPost('testing post', 'this is a testing post', 'owner1Id')

        //act
        const ownerId = 'owner1Id'
        const postOwner = await postModel.getPostOwner(ownerId)

        //assert
        postOwner.forEach(post => {
            post.owner.should.be.equal(ownerId)
        });
    })
    it('Should searh for post with query', async () => {
        await postModel.insertPost('testing Query', 'testing Query', 'queryOwnerId')

        const query = {title: 'testing Query', content: 'testing Query'}
        const postQuery = await postModel.getPostByQuery(query)

        postQuery.forEach(post => {
            post.title.should.be.equal(query.title)
            post.content.should.be.equal(query.content)
        });
    })

})