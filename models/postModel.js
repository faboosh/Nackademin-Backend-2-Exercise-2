const {Post} = require('../database/mongodb');

class postModel {
    async insertPost(title, content) {
        return await Post.create({
            title: title,
            content: content
        }).then((document, err) => {
            if (err) return false;
            return document._id;
        });
    }

    async updatePost(title, content, postId) {
        return await Post.findByIdAndUpdate(postId, {"title": title, "content": content}, {
            useFindAndModify: false,
            versionKey: false
        })
            .then((document, err) => {
                if (err) return false;
                return document._id;
            });
    }

    async updatePost(title, content, postId) {
        return await Post.findByIdAndUpdate(postId, {"title": title, "content": content}, {
            useFindAndModify: false,
            versionKey: false
        })
            .then((document, err) => {
                if (err) return false;
                return document._id;
            });
    }

    async deletePost(postId) {
        return await Post.deleteOne({_id: postId})
            .then((document, err) => {
                if (err) return false;
                return document.deletedCount;
            });
    }

    async getPosts() {
        return await Post.find({}, {'title': 1, 'content': 1, 'comments': 1});
    }

    async getPost(postId) {
        return await Post.findOne({_id: postId}, {'title': 1, 'content': 1, 'comments': 1});
    }

    async getPostCommentsIds(postId) {
        let post = await this.getPost(postId);
        return post.comments;
    }
}

module.exports = new postModel();