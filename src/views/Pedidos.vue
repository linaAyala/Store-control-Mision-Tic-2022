<template>
    <!-- Aqui va codigo HTML -->
    <div>
        
        <h1>Pedidos</h1>

       <div id="formulario">
           

           <span class="border border-dark">
       <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Codigo:</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar codigo...">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Cantidad:</label>
          <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Ingresar cantidad...">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Nombre del producto:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Ingresar nombre del producto...">
          </div>
      
        <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        </span>
        </div>

        <div>
        <table style="width:70%">
            <caption>Productos</caption>
            <tr>
               <!--  <th scope="col">{{item.ID}}</th>
                <th>{{item.Referenciapedido}}</th>
                <th>{{item.Codigo}}</th>
                <th>{{item.Cantidad}}</th>
                <th>{{item.Nombredelproducto}}</th> -->
            </tr>
            <tr>
                <th scope="row">1</th>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                

            </tr>
            <tr>
                <th scope="row">2</th>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
        </table> 
    </div>
            <table style="width:70%">
                <caption>VIVERES</caption>
                <tr>
              <!--       <th>{{item.Producto}}</th>
                    <th>{{item.Unidades}}</th>
                    <th>{{item.Cantidad}}</th> -->
                </tr>
                <tr>
                    <td>Atun </td>
                    <td>Caja de 6</td>
                    <td>50</td>

                </tr>
                <tr>
                    <td>Aceite</td>
                    <td>Caja de 4 unidades</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Arroz </td>
                    <td>Caja de 10 Libras</td>
                    <td>55</td>
                </tr>
            </table> 
        </div>    
        <hr> 
        <div> 
            <table style="width:70%">
                <caption>BEBIDAS</caption>
                <tr>
                   <!--  <th>{{item.Producto}}</th>
                    <th>{{item.Unidades}}</th>
                    <th>{{item.Cantidad}}</th> -->
                </tr>
                <tr>
                    <td>Gaseosa</td>
                    <td>Canasta 30</td>
                    <td>10</td>

                </tr>
                <tr>
                    <td>Jugos de fruta</td>
                    <td>Caja de 4 unidades</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Gaseosa Litro</td>
                    <td>Caja de 6 Libras</td>
                    <td>33</td>
                </tr>
            </table> 
        </div>
        <hr> 
        <div>  
        <table style="width:70%">
            <caption>FRUTAS Y VERDURAS</caption>
            <tr>
               <!--  <th>{{item.Producto}}</th>
                <th>{{item.Unidades}}</th>
                <th>{{item.Cantidad}}</th> -->
            </tr>
            <tr>
                <td>Naranjas </td>
                <td>Bolsa de 10 Libras</td>
                <td>44</td>

            </tr>
            <tr>
                <td>Fresas</td>
                <td>Caja de 5 Libras</td>
                <td>18</td>
            </tr>
            <tr>
                <td>Manzanas </td>
                <td>Caja de 8 Libras</td>
                <td>8</td>
            </tr>
        </table> 
    </div>    
    <hr> 
    <div> 
        <table style="width:70%">
            <caption>CONDIMENTOS</caption>
            <tr>
         <!--        <th>{{item.Producto}}</th>
                <th>{{item.Unidades}}</th>
                <th>{{item.Cantidad}}</th> -->
            </tr>
            <tr>
                <td>Ajo en Polvo</td>
                <td>Caja de 7 sobres</td>
                <td>10</td>

            </tr>
            <tr>
                <td>Cafe Granulado</td>
                <td>Caja de 10 unidades</td>
                <td>19</td>
            </tr>
            <tr>
                <td>Pimienta</td>
                <td>Caja de 12 sobres</td>
                <td>15</td>
            </tr>
        </table> 
    </div>    
        <hr> 
        <div> 
            <table style="width:70%">
                <caption>ENLATADOS</caption>
                <tr>
                  <!--   <th>{{item.Producto}}</th>
                    <th>{{item.Unidades}}</th>
                    <th>{{item.Cantidad}}</th> -->
                </tr>
                <tr>
                    <td>Salchicha en Lata 80 Gramos </td>
                    <td>Caja de 50 Unidades</td>
                    <td>3</td>

                </tr>
                <tr>
                    <td>Frijol enlatado por 500 Gramos</td>
                    <td>Caja de 50 unidades</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Maiz Enlatado por 500 Gramos</td>
                    <td>Caja de 25 Unidades</td>
                    <td>7</td>
                </tr>
            </table> 
            </div>    
            <hr> 
            <div> 
                <table style="width:70%">
                    <caption>GRANOS Y CEREALES</caption>
                    <tr>
                  <!--       <th>{{item.Producto}}</th>
                        <th>{{item.Unidades}}</th>
                        <th>{{item.Cantidad}}</th> -->
                    </tr>
                    <tr>
                        <td>Lenteja por 250 gramos</td>
                        <td>Caja de 15 libras</td>
                        <td>12</td>
    
                    </tr>
                    <tr>
                        <td>Arveja</td>
                        <td>Caja de 20 Libras</td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <td>Arina Promasa</td>
                        <td>Caja de 10 Libras</td>
                        <td>10</td>
                    </tr>
                </table>   
            </div>    
            
            
    
</template>

<script>
// import Vista from "./Vista.vue";
//import Vista from "../components/Vista.vue";
 import axios from "axios";

export default {
/*    data(){
     return{
        pedidos:[]
        
     }
   },
 
 created(){

   this.listarPedidos();
 },

 methods:{
   listarPedidos(){
     this.axios.get('Pedidos')
     .then((response)=>{
        // console.log(response.data)
        this.pedidos=response.data;
     })
     .catch(e=>{
           console.log(e.response)
     })
   }
 }
 */} 
</script>

<style>
    /* <!-- Aqui va CSS --> */

            table,th, td {
            background-color:   rgb(0, 238, 255);
            border: 1px solid   black;
            border-collapse: collapse;
            border-spacing: 15px; 
            margin-top: 30px;
            }
            th, td { 
            padding: 5px;
            text-align: center;
            } 

            #formulario{
            display:flex;
            position: relative;
            width: 70%;
            
            

            }
        
</style>