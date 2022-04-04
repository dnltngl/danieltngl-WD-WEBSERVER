import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Gallery from "@/components/Gallery";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery
    }
  ]
});
