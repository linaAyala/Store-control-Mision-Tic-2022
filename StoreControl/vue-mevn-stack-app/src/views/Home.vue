<template>
  <div>
  <Login/>
  <Ventas/>
  <Pedidos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from './Login.vue'
import Pedidos from './Pedidos.vue'
import Ventas from './Ventas.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Ventas,
    Pedidos,
  },
}
</script>