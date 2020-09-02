require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const {expect, request} = chai
const app = require('../index');
const postModel = require('../models/postModel')


it('Sökfunktionen', async () => {
    beforeEach(async () => {
        return postModel.clearPosts()
    })
    const input = {
        title: 'Testcaset',
        content: 'Massa text'
    }

    await postModel.insertPost({title: 'posten12312', content: 'innehållet', owner: 'pelle'});
    await postModel.insertPost({title: 'postis', content: 'annat innehåll', owner: 'pelle'});
    await postModel.insertPost({title: 'postnord', content: 'lite nytt innehåll', owner: 'peter'});
    await postModel.insertPost({title: 'orelaterad titel brrrr', content: 'lite nytt innehåll', owner: 'peter'});

    const result = await request(app).get('/posts');
    const posts = result.body.posts;

    expect(posts.length).to.equal(3)


    let str = "4nvänd4rnamn1337";
    let pattern = 'post'
    let regex = / + processedString + /g;
    str = str.replace(regex, '');

})