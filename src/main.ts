import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Community from "./views/Community.vue";
import Install from "./views/Install.vue";
import Playground from "./views/Playground.vue";
import Docs from "./views/Docs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }, {
      path: "/community",
      name: "Community",
      component: Community
    }, {
      path: "/install",
      name: "Install",
      component: Install
    }, {
      path: "/playground",
      name: "playground",
      component: Playground
    }, {
      path: "/docs",
      name: "Docs",
      component: Docs,
    }
  ]
});

createApp(App)
  .use(router)
  .mount("#app");