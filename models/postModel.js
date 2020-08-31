const {Post} = require('../database/mongodb');

class postModel {
    async insertPost(title, content, owner) {
        try {
            const document = await Post.create({
                title: title,
                content: content,
                owner
            })

            return document ? document._id : false;
        } catch(err) {
            console.error(err);
            return false;
        }
    }

    async updatePost({title, content, postId, owner}) {
        try {
            const document = await Post.findOneAndUpdate({_id: postId, owner}, {"title": title, "content": content}, {
                useFindAndModify: false,
                versionKey: false
            });

            return document ? document._id : false;
        } catch(err) {
            console.error(err);
            return false;
        }
    }

    async deletePost({postId, owner}) {
        try {
            const document = await Post.deleteOne({_id: postId, owner})

            return document ? document._id : false;
        } catch(err) {
            console.error(err);
            return false;
        }
    }

    async getPosts() {
        return await Post.find({}, {'title': 1, 'content': 1, 'comments': 1, 'owner': 1});
    }

    async getPost(postId) {
        return await Post.findOne({_id: postId}, {'title': 1, 'content': 1, 'comments': 1});
    }

    async getPostCommentsIds(postId) {
        let post = await this.getPost(postId);
        return post.comments;
    }

    async Count() {
        return await Post.count()
    }
}

module.exports = new postModel();