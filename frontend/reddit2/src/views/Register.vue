<template>
  <div class="login-container border">
    <p>Username</p>
    <input v-model="username" type="text">
    <p>First name</p>
    <input v-model="firstname" type="text">
    <p>Surname</p>
    <input v-model="surname" type="text">
    <p>Password</p>
    <input v-model="password"  type="password">
    <button class="btn-login" @click="register">Register</button>
  </div>
</template>

<script>

import { apiPath } from '@/util/apiPath'

export default {
  name: 'Register',
  data() {
    return {
      username: "", 
      firstname: "",
      surname: "", 
      password: "",
      apiPath
    }
  },
  methods: {
    register: async function() {
      const {username, password, firstname, surname} = this;
      console.log(username, password);
      fetch(`${apiPath}/auth/register`, 
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({username, password, firstname, surname})
        })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        })
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
