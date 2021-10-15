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
    path: '/stock',
    name: 'Stock',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Stock.vue')
  },
  {
    
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Ventas.vue')
  },
/*   router.post('/Ventas',async(req, res)=>{
    const body =req.body;
    try{
      const notaDB= await Venta.create(body);
      res.status(200).json(notaDB);
    } catch(error){
      message:'Ocurrió un error'
    }
  }
  ) */

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
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
