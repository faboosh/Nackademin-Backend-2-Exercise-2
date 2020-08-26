<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view class="container"/>
  </div>
</template>

<style lang="scss">
  * {
    font-family: sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .container {
    max-width: 1000px;
    margin: 20px auto;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    min-width: 80px;
    background: rgb(150, 30, 86);
    color: white;
  }

  input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.2);
  }

  .border {
    padding: 20px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;
  }
</style>
