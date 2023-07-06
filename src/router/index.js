import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact me',
    component: () => import('../views/ContactMe.vue'),
  },
  {
    path: '/Project',
    name: 'Projects',
    component: () => import('../views/ProjectsView.vue'),
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: () => import('../views/testimonial.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
