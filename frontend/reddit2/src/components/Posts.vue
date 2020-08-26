<template>
  <div class="posts">
    <Post v-for="post in posts" :key="post._id" :post="post"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import { apiPath } from '@/util/apiPath'

export default {
  name: 'Home',
  components: {
    Post
  },
  data() {
    return {
      posts: [],
      apiPath
    }
  },
  beforeMount: async function() {
    const { posts } = await fetch(`${this.apiPath}/posts`).then(res => res.json());
    console.log(posts);
    this.posts = posts;
  }
}

</script>

<style lang="scss">

</style>
