// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      // {
      //   path: "",
      //   name: "Home",
      //   // route level code-splitting
      //   // this generates a separate chunk (Home-[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import("@/views/Home.vue"),
      // },
      {
        path: "",
        name: "MyPage",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/TopPage.vue"),
      },
      {
        path: "aboutpage",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/AboutPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
