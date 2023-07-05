import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = 
  {
    path: '/testimonial',
    name: 'testimonial',
    component: () => import('../views/testimonial.vue'),
  }
 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
