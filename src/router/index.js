import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cufflinks from '../views/Cufflinks.vue'
import Purchase from '../views/Purchase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cufflinks',
    name: 'Cufflinks',
    component: Cufflinks
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase
  }
]

const router = new VueRouter({
  routes
})

export default router
