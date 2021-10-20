import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    CHANGE_LOGIN_STATUS(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    login(context, payload) {
      axios({
        url: `http://localhost:3000/users/login`,
        method: "POST",
        data: payload,
      })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
          context.commit("CHANGE_LOGIN_STATUS", true);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${
              typeof err.response.data.message === "string"
                ? err.response.data.message
                : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },
    register(context, payload) {
      axios({
        url: `http://localhost:3000/users/register`,
        method: "POST",
        data: payload,
      })
        .then(() => {
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${
              typeof err.response.data.message === "string"
                ? err.response.data.message
                : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },
  },
  modules: {},
});
