import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Courses from "@/views/Courses.vue";
import Events from "@/views/Events.vue";
import Blog from "@/views/Blog.vue";
import Contacts from "@/views/Contacts.vue";

// const Home = { template: "<div>Home</div>" };
// const About = { template: "<div>About</div>" };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/About", name: "About", component: About },
    { path: "/Courses", name: "Courses", component: Courses },
    { path: "/Events", name: "Events", component: Events },
    { path: "/Blog", name: "Blog", component: Blog },
    { path: "/Contacts", name: "Contacts", component: Contacts },
  ],
});

export default router;
