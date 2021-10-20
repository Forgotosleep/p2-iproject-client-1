<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/activities">My Activities</router-link> |
      <router-link to="/add-activity">Add Activity</router-link> |
      <router-link to="/add-record">Add Record</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/test">Testing Grounds</router-link> |
      <a href="#" @click="logout"><GoogleLogin :params="params" :logoutButton="true" @click="logout"
        >Logout</GoogleLogin
      ></a>
      
    </div>
    <router-view />
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "App",
  components: {
    GoogleLogin,
  },
  computed: {
    params() {
      return this.$store.state.params;
    },
  },
  methods: {
    // toHome() {
    //   this.$router.push("/");
    // },
    logout() {
      console.log("CLICK!"); // Not working for google logout for some reason
      localStorage.removeItem("access_token");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
/* body {
    background-color: black;
  } */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
