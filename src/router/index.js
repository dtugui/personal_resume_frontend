import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
<<<<<<< HEAD
import StudentShow from "../views/StudentShow.vue";
=======
import Logout from "../views/Logout.vue";
>>>>>>> be32143e05b4fa2a6124fba6e884594e58bf77ca

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
<<<<<<< HEAD
  { path: "/students/:id", name: "student-show", component: StudentShow },
=======
  { path: "/logout", name: "logout", component: Logout },
>>>>>>> be32143e05b4fa2a6124fba6e884594e58bf77ca
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
