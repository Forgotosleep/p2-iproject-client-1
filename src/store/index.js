import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // baseUrl: "http://localhost:3000",  // for Local
    baseUrl: "https://brian-idid.herokuapp.com",  // for Deployment
    isLoggedIn: false,
    activity: {},
    activities: [],
    record: {},
    records: [],
    params: {
      client_id:
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
    TARGET_ACTIVITY(state, payload) {
      state.activity = payload;
    },
    TARGET_RECORD(state, payload) {
      state.record = payload;
    },
  },
  actions: {
    // LOGIN-REGISTER
    login(context, payload) {
      axios({
        url: `${context.state.baseUrl}/users/login`,
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
        url: `${context.state.baseUrl}/users/register`,
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

    // ACTIVITIES
    fetchActivities(context) {
      axios({
        url: `${context.state.baseUrl}/activities`,
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
            `${
              typeof err.response.data.message === "string"
                ? err.response.data.message
                : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },
    addActivity(context, payload) {
      axios({
        url: `${context.state.baseUrl}/activities`,
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
            `${
              typeof err.response.data.message === "string"
                ? err.response.data.message
                : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    editActivity(context, payload) {
      axios({
        url: `${context.state.baseUrl}/activities/${payload.id}`,
        method: "PUT",
        headers: { access_token: localStorage.getItem("access_token") },
        data: payload,
      })
        .then(() => {
          console.log("An Activity has been edited!");
          router.push("/activities");
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

    deleteActivity(context, payload) {
      axios({
        url: `${context.state.baseUrl}/activities/${payload.id}`,
        method: "DELETE",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(() => {
          console.log("An Activity has been deleted!");
          context.dispatch("fetchActivities");
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

    // RECORDS
    fetchRecords(context) {
      axios({
        url: `${context.state.baseUrl}/user-activities`,
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
            `${
              typeof err.response.data.message === "string"
                ? err.response.data.message
                : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },
    addRecord(context, payload) {
      axios({
        url: `${context.state.baseUrl}/user-activities/`,
        method: "POST",
        headers: { access_token: localStorage.getItem("access_token") },
        data: payload,
      })
        .then(() => {
          console.log(`A new record has been added`);
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
    editRecords(context, payload) {
      // Depreciated. More intuitive to delete, then add a new activity.
      axios({
        url: `${context.state.baseUrl}/user-activities/${payload.id}`,
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
            `${
              typeof err.response.data.message === "string"
                ? err.response.data.message
                : err.response.data.message.toString().split(",").join(", ")
            }`,
            "error"
          );
        });
    },

    patchRecords(context, payload) {
      axios({
        url: `${context.state.baseUrl}/user-activities/${payload.id}?status=complete`,
        method: "PATCH",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(() => {
          console.log(`Record status has been updated`);
          context.dispatch("fetchRecords");
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

    deleteRecords(context, payload) {
      axios({
        url: `${context.state.baseUrl}/user-activities/${payload.id}`,
        method: "DELETE",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(() => {
          console.log(`A record has been deleted`);
          context.dispatch("fetchRecords");
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
