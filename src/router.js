import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Resume from "@/views/Resume.vue";
import Contact from "@/views/Contact.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});