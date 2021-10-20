<template>
  <div>
    <h1>This is the Login Page</h1>
    <div class="container" id="register-form">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>

              <form @submit.prevent="login">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid">
                  <input
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    value="Sign In"
                  />
                </div>
                <hr class="my-4" />
                <div class="row justify-content-center">
                  <div class="d-grid container">
                    <GoogleLogin
                      :params="params"
                      :renderParams="renderParams"
                      @click="click"
                      @onSuccess="onSuccess"
                      @onFailure="onFailure"
                    ></GoogleLogin>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "Login",
  components: {
    GoogleLogin,
  },
  computed: {
    params() {
      return this.$store.state.params;
    },
    renderParams() {
      return this.$store.state.renderParams;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    click() {
      console.log("CLICK!");
    },
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    onSuccess(googleUser) {
      //The google logs in, but it doesn't work. There's no access token generated.
      // GOOGLE LOGIN
      console.log(googleUser, "<<<< GOOGLE USER"); // For testing purpoises
      console.log("HEREEE");
      // console.log(googleUser["$b"].id_token, '<<<< GOOGLE USER ID TOKEN'); // For testing purpoises

      const id_token = googleUser["$b"].id_token;

      axios({
        url: `http://localhost:3000/users/login-google`,
        method: "POST",
        data: {
          idToken: id_token,
        },
      })
        .then((result) => {
          localStorage.setItem("access_token", result.data.access_token);
          this.$store.commit("CHANGE_LOGIN_STATUS", true);
          this.$router.push("/");
        })
        .catch((err) => {
          swal(err.response);
        });
    },
    onFailure() {
      // GOOGLE LOGIN
      // console.log(payload.err);
      swal("Failed to login", "Error");
    },
  },
};
</script>

<style></style>
