import Vue from "vue";
import VueRouter from "vue-router";
import VueAnalytics from "vue-ua";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: "erikdyrrflooring.com",
  // [Required] The version of your app.
  appVersion: "1.0",
  // [Required] Your Google Analytics tracking ID.
  trackingId: "UA-53484838-7",
  // If you're using vue-router, pass the router instance here.
  vueRouter: router
});



export default router;
