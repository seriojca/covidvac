import { createWebHistory, createRouter } from "vue-router";
import Map from "../views/Map.vue";
import Data from "../views/Data.vue";
import Sources from "../views/Sources.vue"

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
  {
    path: "/sources",
    name: "Sources",
    component: Sources,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;