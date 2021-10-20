import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AddToCalendar from 'vue-add-to-calendar'

// var AddToCalendar = require('vue-add-to-calendar');
Vue.use(AddToCalendar);

// VUE-BOOTSTRAP
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
