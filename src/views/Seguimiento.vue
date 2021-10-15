<template>
    <!-- Aqui va codigo HTML -->
    <div id="tablas">

  <table class="table table-hover table-striped table-responsive" id="tabla1">
    <caption>PRODUCTOS DISPONIBLES</caption>
            <thead class="bg-primary"> 
                <tr>
                  <!--  <th>{{item.Referenciapedido}}</th>
                      <th>{{item.ID}}</th>
                      <th> {{item.Codigo}}</th>
                      <th>{{item.Productos}}</th>
                      <th>{{item.Altademanda}}</th>
                      <th>{{item.Cantidad}}</th>
                      <th>{{item.Fecha-venta}}</th>
                      <th>{{item.Ofertas}}</th> -->
                </tr>
                 </thead>
                 <tbody>
                    <tr>
                      <th scope="row">1</th>
                       <td>A26687</td>
                       <td>Azucar morena</td>
                       <td>No</td>
                       <td>2-D, 6-S, 22-M</td>
                       <td>11/09/2021</td>
                       <td>-35%</td>
                     </tr>
                       <tr>
                         <th scope="row">2</th>
                           <td>B34569</td>
                           <td>Arroz 1L</td>
                           <td>Si</td>
                           <td>20-D, 40-S, 150-M</td>
                           <td>01/11/2021</td>
                           <td>-15%</td>
                       </tr>
                       <tr>
                         <th scope="row">3</th>
                         <td>B34569</td>
                         <td>Arroz 1L</td>
                         <td>Si</td>
                         <td>20-D, 40-S, 150-M</td>
                         <td>01/11/2021</td>
                         <td>-15%</td>
                       </tr>
                  </tbody>
             </table> 
            </div> 
            <button type="button" class="btn btn-primary btn-lg">
              Consultar
            </button>
            <button type="button" class="btn btn-primary btn-lg">
              Eliminar
            </button>
            <button type="button" class="btn btn-primary btn-lg">
              Editar
            </button>



             <div id="tablas">
             <table class="table table-hover table-striped table-responsive"  id="tabla2">
              <caption>INVENTARIO (STOCK) ACTUAL</caption>
                  <thead class="bg-primary"> 
                      <tr>
                         <!--    <th>{{item.ID}}</th>
                            <th>{{item.Codigo}}</th>
                            <th>{{item.Nombre}}</th>
                            <th>{{item.Categoria}}</th>
                            <th>{{item.Precio}}</th>
                            <th>{{item.Unidad}}</th>
                            <th>{{item.Stock-minimo}}</th>
                            <th>{{item.Fecha-vencimiento}}</th> -->
                      </tr>
                       </thead>
                       <tbody>
                          <tr>
                            <th scope="row">1</th>
                             <td>20210911</td>
                             <td>Leche Deslactosada</td>
                             <td>Lacteos</td>
                             <td>2800</td>
                             <td>30</td>
                             <td>5</td>
                             <td>01/10/2021</td>
                           </tr>
                             <tr>
                               <th scope="row">2</th>
                                 <td>B34569</td>
                                 <td>Arroz 1L</td>
                                 <td>Granos</td>
                                 <td>2500</td>
                                 <td>22</td>
                                 <td>20</td>
                                 <td>07/18/2023</td>
                             </tr>
                             <tr>
                               <th scope="row">3</th>
                               <td> </td>
                               <td> </td>
                               <td> </td>
                               <td> </td>
                               <td> </td>
                               <td> </td>
                               <td> </td>
                             </tr>
                        </tbody>
                   </table> 
              </div> 
              <button type="button" class="btn btn-primary btn-lg" id="boton">
                Consultar
              </button>
              <button type="button" class="btn btn-primary btn-lg" id="boton">
                Eliminar
              </button>
              <button type="button" class="btn btn-primary btn-lg" id="boton">
                Editar
              </button>

</template>

<script>
// import Vista from "./Vista.vue";
//import Vista from "../components/Vista.vue";
/* import axios from "axios";

export default {
   data(){
     return{
        seguimiento:[]

     }
   },
 
 created(){

   this.listarSeguimiento();
 },

 methods:{
   listarSeguimiento(){
     this.axios.get('Seguimiento')
     .then((response)=>{
        // console.log(response.data)
        this.seguimiento=response.data;
     })
     .catch(e=>{
           console.log(e.response)
     })
   }
 }
} */
</script>

<style>
    /* <!-- Aqui va CSS --> */
    .table-striped>tbody>tr:nth-child(odd)>td,
.table-striped>tbody>tr:nth-child(odd)>th {
     background-color: #3ea8ff;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background-color: rgb(105, 255, 67);
}
table{
    text-align: center;
}
#tablas{
  display: flex;
  position: relative;
}

#tabla2{
    margin-top: 20px;
}

</style>