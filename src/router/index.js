import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");
  if (to.name === "Home" && !access_token) {
    next({ name: "Login" });
  } else if (to.name === "Login" && access_token) {
    next({ name: "Home" });
  } else if (to.name === "Register" && access_token) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
