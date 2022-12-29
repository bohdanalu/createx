import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Courses from "../views/Courses.vue";
import Events from "../views/Events.vue";
import Blog from "../views/Blog.vue";
import Contacts from "../views/Contacts.vue";
import Course from "../views/Course.vue";
import Event from "../views/Event.vue";
import Post from "../views/Post.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/About", name: "About", component: About },
    { path: "/Courses", name: "Courses", component: Courses },
    { path: "/Events", name: "Events", component: Events },
    { path: "/Blog", name: "Blog", component: Blog },
    { path: "/Contacts", name: "Contacts", component: Contacts },
    { path: "/Course", name: "Course", component: Course },
    { path: "/Event", name: "Event", component: Event },
    { path: "/Post", name: "Post", component: Post, props: true },
  ],
  scrollBehavior() {
    return window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
});

export default router;
