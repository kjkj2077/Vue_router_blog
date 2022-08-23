import { createWebHistory, createRouter } from "vue-router";
import TheList from './components/TheList.vue'
import TheHome from './components/TheHome.vue'
import TheDetail from './components/TheDetail.vue'
const routes = [
  {
    path: "/list",
    component: TheList,
  },
  {
    path: "/",
    component: TheHome,
  },
  {
    path: "/detail/:id*",
    component: TheDetail,
  },
  {
    path: "/:anything(.*)",
    component: TheHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router