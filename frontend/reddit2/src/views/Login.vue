<template>
  <div class="login-container border">
    <p>Username</p>
    <input v-model="username" type="text">
    <p>Password</p>
    <input v-model="password"  type="password">
    <button class="btn-login" @click="login">Login</button>
  </div>
</template>

<script>

import { apiPath } from '@/util/apiPath'

export default {
  name: 'Login',
  data() {
    return {
      username: "", 
      password: "",
      apiPath
    }
  },
  methods: {
    login: async function() {
      const {username, password} = this;
      const token = await this.auth({username, password});

      if(token) {
        localStorage.setItem('token', token);
        console.log(localStorage.getItem('token'));
      }
    },
    auth: async function(credentials) {
      try {
        const { token } = await fetch(`${this.apiPath}/auth`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          }
        ).then(res => res.json());

        return token;
      } catch(err) {
        console.error(err);
        return false;
      }
    }
  }
}

</script>

<style lang="scss">
  .login-container {
    margin-top: 35vh;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;

    * {
      margin-bottom: 15px;
    }
  }

  .btn-login {

  }
</style>
