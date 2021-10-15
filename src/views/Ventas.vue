<template>

<h1 id="registrar" align="center">Registrar Las Ventas</h1>
  <b-alert
  :show="dismissCountDown"
  dismissible
  :variant="mensaje.color"
  @dismissed="dismissCountDown=0"
  @dismiss-count-down="countDownChanged">
  {{mensaje.texto}}
  </b-alert>

  <form @submit.prevent="ingresarProd()">
           <input type="text" class="form-control">
           
           <div id="formulario">
        <!-- <span class="border border-dark">  -->
        
           <div class="form-group">
            <label for="exampleInputEmail1">Fecha de ingreso:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="fechaIngreprod...">
          </div>
          <div class="form-group">
           <label for="exampleInputPassword1">Cantidad:</label>
           <input type="number" class="form-control" id="exampleInputPassword1" placeholder="cantidad...">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Nombre del producto:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="nombreProducto..." v-model="venta.nombreProducto">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Codigo:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="codigoProd..." v-model="venta.codigoProd">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Precio Unitario:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="precioUnit..." v-model="venta.precioUnit">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Precio Total:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="precioTotal..." v-model="venta.precioTotal">
          </div>
          <button class="btn btn-primary" type="submit">Ingresar Producto</button>
          </div> 
  </form>
      
      <button type="button" class="btn btn-primary btn-lg">
        Eliminar producto
      </button>

    <div>
    <table border="1">
      <tr v-for="(item, index) in ventas" :key="index">

        <th scope="col">{{item.Fecha}}</th>

        <th>{{item.Codigo}}</th>

        <th>{{item.Producto}}</th>

        <th>{{item.Cantidad}}</th>

        <th>{{item.P.unitario}}</th>

        <th>{{item.P.Total}}</th>
      
        <th>{{item.descuento}}</th>   
      </tr>


      <tr>
        <td>02/04/2021</td>

        <td>A34568</td>

        <td>Aceite girasol 1000 ml</td>

        <td>2</td>

        <td>$24.000</td>

        <td>$28.000</td>

        <td>5%</td>

      </tr>

      <tr>
        <td>25/05/2021</td>

        <td>A56785</td>

        <td>Azucar morena 3kg</td>

        <td>4</td>

        <td>$8.000</td>

        <td>$10.500</td>

        <td>8%</td>

      </tr>

      <tr>
        <td>18/06/2021</td>

        <td>B75398</td>

        <td>Sal refisal 3kg</td>

        <td>3</td>

        <td>$6.500</td>

        <td>$7.300</td>

        <td>3%</td>

      </tr>
    </table>
  </div>

    <b-button @click="eliminarVenta()">eliminarVenta(item.Codigo)</b-button>
    <b-button @click="activarEdicion()">editar()</b-button>

  <div class="contenedor">
    <h1 align="center">Stock Actual</h1>

      <div class="espacio">
        <button type="button" class="btn btn-primary btn-lg">
          Ingresar producto vendido
        </button>
        <button type="button" class="btn btn-primary btn-lg">
          Eliminar producto
        </button>
      </div>

    <table border="1">
      <tr>
    <!--     <th scope="col">{{item.Producto}}</th>

        <th>{{item.StockdeSeguridad}}</th>

        <th>{{item.StockActual}}</th>

        <th>{{item.PrecioPromedio}}</th> -->
      </tr>

      <tr>
        <td>Aceite girasol 1000 ml</td>

        <td>35</td>

        <td>42</td>

        <td>$26.000</td>
      </tr>

      <tr>
        <td>Azucar morena 3kg</td>

        <td>38</td>

        <td>40</td>

        <td>$8.300</td>
      </tr>

      <tr>
        <td>Sal refisal 3kg</td>

        <td>36</td>

        <td>41</td>

        <td>$6.800</td>
      </tr>
    </table>
  </div>

</template>

<script>
//import Vista from "../components/Vista.vue";
import vueaxios from 'vue-axios'
import axios from 'axios'
vue.use (axios, vueaxios);
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
   data(){
     return{
        ventas:[],
        mensaje:{color: 'success', texto:''},
        dismissSecs: 5,
        dismissCountDown: 0,

        venta:{fechaIngreprod:"",cantidad:"", nombreProducto:"", codigoProd:"", precioUnit:"", precioTotal:""}

     }
   },
 
 created(){

   this.listarVentas();
 },

 methods:{
   listarVentas(){
     this.axios.get('/api/venta/todas')
     .then((response)=>{
        console.log(response.data)
        this.ventas=response.data;
     })
     .catch(e=>{
           console.log(e.response)
     })
   },
   Ingresarprod(){

     this.axios.post('/api/venta/nueva',this.ventas)
     .then(res=>{
         
        this.ventas.push(res.data);
        this.venta.fechaIngreprod="";
        this.venta.cantidad="";
        this.venta.nombreProducto="";
        this.venta.codigoProd="";
        this.ventas.precioUnit="";
        this.ventas.precioTotal="";
        this.mensaje.color="success";
        this.mensaje.texto="Venta Agregada";
        this.showAlert();


     })
     .catch(e=>{
       console.log(e.response);
     })

   },
   eliminarVenta(codigo){
     this.axios.delete(`/venta/${codigo}`)
     .then(res=>{
      const index =this.ventas.findIndex(item=> item_codigo===res.data._codigo)
      this.ventas.splice(index, 1);
      this.mensaje.color="success";
      this.mensaje.texto="Venta Eliminada";
      this.showAlert();


     })
     .catch(e=>{
      console.log(e.response);

     })
 },
   countDownChanged(dismissCountDown){
     this.dismissCountDown = dismissCountDown
   },
   showAlert(){
     this.dismissCountDown= this.dismissSecs
   }
 }
} 
</script>
 
<style>
/* <!-- Aqui va CSS --> */
.contenedor {
  text-align: center;
}

table {
  margin: 0 auto;
  width: 60%;
  height: 50%;
  text-align: center;
}

button {
  margin: 40px 40px 40px 40px;
}

#registrar {
  position: relative;
  left: 50px;
  top: 5px;
  
}
 #formulario{
            display:flex;
            position: relative;
            width: 70%;
            left: 100px;
            }
</style>