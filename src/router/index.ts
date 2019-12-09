import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
];

let routeConfig = {
  mode: "history",
  base: process.env.BASE_URL,
  routes
};

let router: object;
// @ts-ignore
router = new VueRouter(routeConfig);

export default router;
