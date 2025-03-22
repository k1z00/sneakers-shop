import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './home-page/home-page.vue'
import BacketPage from './backet-page/basket-page.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }, {
    path: '/backet',
    name: 'Backet',
    component: BacketPage
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;