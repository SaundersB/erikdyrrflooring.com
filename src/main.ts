import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
import router from "./router";
import store from "./store";
import "@/assets/styles/tailwind.css";
// @ts-ignore
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueAnalytics, {
  id: "UA-53484838-7",
  checkDuplicatedScript: true
});
