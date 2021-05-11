import Vue from 'vue'
import VueRouter from 'vue-router'
import Maintenance from '../views/Maintenance.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
