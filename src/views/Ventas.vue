<template>
  <!-- Aqui va codigo HTML -->
  <!--doctype html-->
<div>
  <h1 id="registrar" align="center">Registrar Las Ventas</h1>

  <div class="contenedor">
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
        <th scope="col">Fecha</th>

        <th>Codigo</th>

        <th>Producto</th>

        <th>Cantidad</th>

        <th>P.unitario</th>

        <th>P.Total</th>
      </tr>

      <tr>
        <td>02/04/2021</td>

        <td>A34568</td>

        <td>Aceite girasol 1000 ml</td>

        <td>2</td>

        <td>$24.000</td>

        <td>$28.000</td>
      </tr>

      <tr>
        <td>25/05/2021</td>

        <td>A56785</td>

        <td>Azucar morena 3kg</td>

        <td>4</td>

        <td>$8.000</td>

        <td>$10.500</td>
      </tr>

      <tr>
        <td>18/06/2021</td>

        <td>B75398</td>

        <td>Sal refisal 3kg</td>

        <td>3</td>

        <td>$6.500</td>

        <td>$7.300</td>
      </tr>
    </table>
  </div>

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
        <th scope="col">Producto</th>

        <th>Stock de Seguridad</th>

        <th>Stock Actual</th>

        <th>Precio Promedio</th>
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
  </div>
</template>

<script>
//import Vista from "../components/Vista.vue";
export default {
  // /* <!-- Aqui van Scripts VueJS --> */
  
 }; 

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
  right: 237px;
  top: 40px;
}
</style>