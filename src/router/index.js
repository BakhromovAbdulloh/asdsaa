import { createRouter, createWebHistory } from "vue-router";
import Address from "../components/address/Address.vue";
import Advantages from "../components/advantages/Advantages.vue";
import Work from "../components/work/Work.vue";
import Info from "../components/info/Info.vue";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: App,
    },

    {
      path: "/info",
      component: Info,
    },

    {
      path: "/work",
      component: Work,
    },

    {
      path: "/advantages",
      component: Advantages,
    },

    {
      path: "/address",
      component: Address,
    },
  ],
});

export default router;
