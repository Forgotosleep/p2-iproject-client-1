<template>
  <div>
    <h1>This is the Register Page</h1>
    <div class="container" id="register-form">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">
                Register
              </h5>

              <form @submit.prevent="register">
                <div class="form-floating mb-3">
                  <input
                    type="string"
                    class="form-control"
                    id="floatingInputName"
                    placeholder="name"
                    v-model="name"
                  />
                  <label for="floatingInputName">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputEmail"
                    placeholder="email@mail.com"
                    v-model="email"
                  />
                  <label for="floatingInputEmail">Email address</label>
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
                    value="Register"
                  />
                </div>
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
