<template>

<div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Iniciar Sesion</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Usuario:</label><br>
                                <input type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Contraseña:</label><br>
                                <input type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="recordar contraseña" class="text-info"><span>Recordar contraseña</span> <span><input id="recordar contraseña" name="recordar contraseña" type="checkbox"></span></label><br>
                                <!-- <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"> -->
                                   <button type="submit" class="btn btn-primary" @click="irInicio()">
                                    Iniciar sesion
                                  </button>
      
                            </div>
                            <div id="register-link" class="text-right" @click="irRegistro()">
                                <a href="#" class="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

  <!-- End Main -->
</template>

<script>
import CrearCuenta from "./CrearCuenta.vue";

export default {
  methods: {
    irRegistro() {
      this.$router.push("/registro");
},
  irInicio(){
      this.$router.push("/inicio");
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#login .container #login-row #login-column #login-box {
  margin-top: -10px;
  max-width: 600px;
  height: 400px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
} 
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}

</style>