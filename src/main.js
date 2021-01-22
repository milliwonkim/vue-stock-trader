import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Home from "@/components/Home.vue";
import Portfolio from "@/components/portfolio/Portfolio.vue";
import Stocks from "@/components/stocks/Stocks.vue";

import App from "./App.vue";
import store from "./store/index";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-9d377.firebaseio.com/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/portfolio",
    component: Portfolio
  },
  {
    path: "/stocks",
    component: Stocks
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
