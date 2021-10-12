import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // Crear Cuenta de usuario
    path: '/registro',
    name: 'Registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/CrearCuenta.vue')
  },
  {
    // Recuperar Cuenta de usuario
    path: '/recuperar',
    name: 'Recuperar',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/RecuperarCuenta.vue')
  },
  {
    path: '/stock',
    name: 'Stock',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Stock.vue')
  },
  {
    
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Ventas.vue')
  },
  
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Pedidos.vue')
  },
  {
    
    path: '/seguimiento',
    name: 'Seguimiento',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Seguimiento.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Inicio.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
