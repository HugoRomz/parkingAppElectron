import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "@/Layout/MainLayout.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/Home.vue"),
        },
        {
          path: "/tickets",
          name: "tickets",
          component: () => import("@/views/Tickets.vue"),
        },
        {
          path: "/reports",
          name: "reports",
          component: () => import("@/views/Reports.vue"),
        },
        {
          path: "/config",
          name: "config",
          component: () => import("@/views/Config.vue"),
        },
      ],
    },
  ],
});

export default router;
