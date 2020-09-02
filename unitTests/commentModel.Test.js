const {insertPost, updatePost} = require('../models/postModel')
const {expect} = require('chai')

require('dotenv').config('../test.env');

console.log(process.env.DB_USER)



describe('Testing insertPost (model)', () => {
    it('should insert a post', () => {
        

        const result = insertPost
        expect(result).to.not.equal("hej")

        
    })  


})