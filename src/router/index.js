import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "paint",
    component: () =>
      import("../views/paint.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
