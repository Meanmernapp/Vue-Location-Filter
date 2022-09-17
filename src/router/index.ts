import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TaskOneView from "../views/TaskOneView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "taskone",
    component: TaskOneView,
  },
  {
    path: "/tasktwo",
    name: "tasktwo",
    component: () => import("../views/TaskTwoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
