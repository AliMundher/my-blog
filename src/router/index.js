import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/posts/create',
    name: 'Create',
    component: function () {
      return import('../views/CreatePost.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
