import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Blogs from '../views/Blogs.vue'
import Portfolio from '../views/Portfolio.vue'
import Service from '../views/Service.vue'
import ContactUs from '../views/ContactUs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/Blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    }, 
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
 
  ]
})

export default router
