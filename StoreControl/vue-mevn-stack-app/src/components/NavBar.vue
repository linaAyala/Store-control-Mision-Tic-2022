<template>
<!-- Barra de navegacion-->
    <nav class="navbar navbar-expand-lg navbar-light">
      <img src="../assets/logo.png" alt="" id="logo"/>
      <!-- <a href="#"><img src="../assets/logo.png" width="72px" height="72px" id="logo" /></a> -->
      <!-- <a id="l" class="navbar-brand">STORE CONTROL</a> -->
      <button class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div id="menu">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Inicio<span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                @click="irIniciarsesion()" 
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Iniciar sesion</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                @click="irStock()"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Stock
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link dropdown"
                href="#"
                @click="irPedidos()"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Pedidos</a
              >
            </li>
            <li class="nav-item" >
              <a
                class="nav-link dropdown"
                href="#"
                @click="irVentas()"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                
                >Ventas</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Seguimiento</a
              >
            </li>
          </ul>
        </div>
        <form class="form-inline my-2 my-lg-0" id="m">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
          />
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
            <i class="fa fa-fw fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
</template>

<script>
export default {
 methods: {
    irVentas() {
      this.$router.push("/ventas");
    },
    irPedidos() {
      this.$router.push("/pedidos");
    },
    irStock() {
      this.$router.push("/stock");
    },
    irInicio() {
      this.$router.push("/inicio");
    },
  },
}
</script>

<style>
#menu{
    margin-left: 50px;
    
}
nav li{
    padding: 0px 10px;
    font-size: 20px;
}
#m{
    margin-left: 50px;
}

nav{
    background-color: rgb(248, 248, 248);
}
#l{
    margin-left: 20px;
}

#logo{
    border-radius:150px;
    border: 2px solid #666;
    cursor: pointer;
    width: 64px;
    height: 64px;
}
</style>