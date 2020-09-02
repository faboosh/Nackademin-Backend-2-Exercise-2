require('dotenv').config('../')

const chai = require('chai')
const should = chai.should()
const { expect } = require('chai');

const { Comment } = require('../database/mongodb');
const { Post } = require('../database/mongodb');

const postModel = require('../models/postModel');
const commentModel = require('../models/commentModel');


describe('Comment Model', () => {
    afterEach(async () => {
        await Post.collection.drop()
        await Comment.collection.drop()
    })
    it('should return the owner of post comment', async () => {
        const res = await postModel.insertPost('testing post', 'this is a testing post', 'randomId for owner')
        await commentModel.insertComment(res._id, 'TextComment')

        const commentOwner = await commentModel.getCommentsByCommentOwnerArray('Pat')

        commentOwner.forEach(comment => {
            expect(comment.owner).to.own.include('Pat')
        })
    })
    it('should return comment when search', async () => {
        const res = await postModel.insertPost('testing post', 'this is a testing post', 'randomId for owner')
        const res2 = await commentModel.insertComment(res._id, 'TextComment')

        await commentModel.getComments()

        const searchComment = await commentModel.getCommentByQuery('TextComment')

        if(searchComment.length > 0) {
            searchComment.forEach(comment => {
                comment.text.should.be.equal('TextComment')
            })
        } else {
            searchComment.text.should.be.equal('TextComment')
        }
    })

})