<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-if="isLoggedIn">Home</router-link> |
      <router-link to="/activities" v-if="isLoggedIn"
        >My Activities</router-link
      >
      |
      <router-link to="/add-activity" v-if="isLoggedIn"
        >Add Activity</router-link
      >
      |
      <router-link to="/add-record" v-if="isLoggedIn">Add Record</router-link> |
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link> |
      <router-link to="/register" v-if="!isLoggedIn">Register</router-link> |
      <!-- <router-link to="/test">Testing Grounds</router-link> | -->
      <a href="#" @click="logout"
        ><GoogleLogin :params="params" :logoutButton="true" @click="logout"
          >Logout</GoogleLogin
        ></a
      >
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
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
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
