import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: () => import('../views/testimonial.vue'),
  },
  {
    path: '/ContactMe',
    name: 'ContactMe',
    component: () => import('../views/ContactMe.vue'),
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import('../views/Projects.View.vue'),
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/resumeView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
