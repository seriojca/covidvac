import { createWebHistory, createRouter } from "vue-router";
import Map from "../views/Map.vue";
import Data from "../views/Data.vue";

const routes = [
  {
    path: "/",
    name: "Data",
    component: Data,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;