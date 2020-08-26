<template>
  <div class="post border">
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
    <button v-if="isOwnPost" @click="deletePost">delete</button>
  </div>
</template>

<script>

import { apiPath } from '@/util/apiPath'

export default {
  props: ['post'],
  data() {
    return {
      apiPath
    }
  },
  computed: {
    isOwnPost() {
      if(!this.token) return false;
      
      const { userId } = JSON.parse(atob(this.token.split('.')[1]));
      console.log(userId);
      return userId == this.post.owner;
    },
    token() {
      return localStorage.getItem('token');
    }
  },
  methods: {
    deletePost() {
      console.log(this.post._id);
      if(this.isOwnPost) {
        fetch(`${this.apiPath}/posts/${this.post._id}`, {method: "DELETE", authorization: `Bearer ${this.token}`})
          .then(res => res.json())
          .then(res => {
            console.log(res);
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .post {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
