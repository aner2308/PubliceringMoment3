import { createRouter, createWebHistory } from 'vue-router'

//Importerar alla undersidor för routing
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DataView from '../views/DataView.vue'

//Skapar routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/data',
      name: 'data',
      component: DataView,
    },
  ],
})

export default router
