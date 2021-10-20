import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    activities: [],
    records: [],
    params: {
      // First one is Blogger's, second one is iDid's
      client_id:
        // "1041028257227-f7k06539fauhoeohb7l67fubcsou0pnd.apps.googleusercontent.com",
        "526869245640-evqtu4oc9qf9e2mhdh86tmeqgl6bth86.apps.googleusercontent.com",
    },
    // only needed if you want to render the button with the google ui
    renderParams: {
      width: 250,
      height: 50,
      longtitle: true,
    },
  },
  mutations: {
    CHANGE_LOGIN_STATUS(state, payload) {
      state.isLoggedIn = payload;
    },
    FETCH_ACTIVITIES(state, payload) {
      state.activities = payload.data;
    },
    FETCH_RECORDS(state, payload) {
      state.records = payload.data;
    },
  },
  actions: {
    // LOGIN-REGISTER
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
            `${typeof err.response.data.message === "string"
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
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    // ACTIVITIES
    fetchActivities(context) {
      axios({
        url: `http://localhost:3000/activities`,
        method: "GET",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then((response) => {
          context.commit("FETCH_ACTIVITIES", response);
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },
    addActivity(context, payload) {
      axios({
        url: `http://localhost:3000/activities`,
        method: "POST",
        headers: { access_token: localStorage.getItem("access_token") },
        data: payload,
      })
        .then(() => {
          console.log("New Activity has been added!");
          router.push("/activities");

        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    editActivity(context, payload) {
      axios({
        url: `http://localhost:3000/activities/${payload.id}`,
        method: "PUT",
        headers: { access_token: localStorage.getItem("access_token") },
        data: payload,
      })
        .then(() => {
          console.log("An Activity has been edited!");
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    deleteActivity(context, payload) {
      axios({
        url: `http://localhost:3000/activities/${payload.id}`,
        method: "DELETE",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(() => {
          console.log("An Activity has been deleted!");
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    // RECORDS
    fetchRecords(context) {
      axios({
        url: `http://localhost:3000/user-activities`,
        method: "GET",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then((response) => {
          context.commit("FETCH_RECORDS", response);
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },
    addRecords(context, payload) {
      axios({
        url: `http://localhost:3000/user-activities/`,
        method: "POST",
        headers: { access_token: localStorage.getItem("access_token") },
        data: payload,
      })
        .then(() => {
          console.log(`A new record has been added`);
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },
    editRecords(context, payload) {
      axios({
        url: `http://localhost:3000/user-activities/${payload.id}`,
        method: "PUT",
        headers: { access_token: localStorage.getItem("access_token") },
        data: payload,
      })
        .then(() => {
          console.log(`A record has been edited`);
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    patchRecords(context, payload) {
      axios({
        url: `http://localhost:3000/user-activities/${payload.id}`,
        method: "PATCH",
        headers: { access_token: localStorage.getItem("access_token") },
        data: { status: "complete" },
      })
        .then(() => {
          console.log(`Record status has been updated`);
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
              ? err.response.data.message
              : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    deleteRecords(context, payload) {
      axios({
        url: `http://localhost:3000/user-activities/${payload.id}`,
        method: "PATCH",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(() => {
          console.log(`A record has been deleted`);
        })
        .catch((err) => {
          console.log(err);
          swal(
            `${err.response.status} ${err.response.statusText}`,
            `${typeof err.response.data.message === "string"
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
