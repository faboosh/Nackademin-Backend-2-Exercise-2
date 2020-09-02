require('dotenv').config();
const postModel = require('../models/postModel')
const {expect} = require('chai');
const { ObjectID } = require('mongodb');

describe('A created post gets an ID when made', () => {
    it('should return an id object if post was created successfully', async () => {
        var result = await postModel.insertPost({title: 'posten', content: 'innehållet', owner: 'pelle'});
        expect(typeof result).to.equal('object');
        expect(result).to.be.instanceof(ObjectID); 
    })  
    it('Id is 24 characters long', async () => {
        var idObject = await postModel.insertPost({title: 'posten', content: 'innehållet', owner: 'pelle'});
        var result = idObject.toString().length
        expect(result).length.to.equal(24)
    })
})
describe('dotenv', () => {
    it('Connection to env', () => {
        const result = require('dotenv').config();
        expect(result).to.have.own.property('parsed')
    })
})
describe('postTest', () => {
    it('should count number of inserted posts', () => {

        beforeEach(() => {
            postModel.clearPosts()
        })
        it('should count number of posts', async () => {

            await postModel.insertPost({title: 'posten', content: 'innehållet', owner: 'pelle'})
            await postModel.insertPost({title: 'posten', content: 'innehållet', owner: 'pelle'})
            await postModel.insertPost({title: 'posten', content: 'innehållet', owner: 'pelle'})
            const counter = await postModel.count();

            expect(counter).to.equal(3);

        })

    })  
})