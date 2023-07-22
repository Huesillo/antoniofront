import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/administrator/Home.vue';
import Inicio from '@/views/administrator/Inicio.vue'
import {routes as Administrator} from './administrator'
Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Home,
  },
  {
    path: "/",
    name: "home",
    component: Inicio,
  },
  ...Administrator,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
