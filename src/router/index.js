import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HopeView from "../views/HopeView.vue";
import GoodView from "../views/GoodView.vue";
import HiView from "../views/HiView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/hope",
    name: "hope",
    component: HopeView,
  },
  {
    path: "/good",
    name: "good",
    component: GoodView,
  },
  {
    path: "/hi",
    name: "hi",
    component: HiView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
