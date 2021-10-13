<template>
  <!-- Main -->
  <main class="main d-flex justify-content-start" role="main" name="main">
    <div class="container-fluid">
      <section id="main-section">
        <div class="row">
          <article class="col" id="main-content">
            <!-- Main Content -->
            <!--Aqui puedes colocar tu codigo html/boostrap de tu modulo -->

            <div class="container-fluid">
              <form class="row g-3">
                <div class="col-md-6">
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label"
                        >NIT / Usuario</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label"
                        >Contreseña</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-6">
                      <button type="submit" class="btn btn-primary">
                        Iniciar sesion
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h1>{{ msg }}</h1>
            </div>

            <!-- End Main Content -->
          </article>
        </div>
      </section>
    </div>
  </main>
  <!-- End Main -->
</template>

<script>
import CrearCuenta from "./CrearCuenta.vue";
import RecuperarCuenta from "./RecuperarCuenta.vue";
export default {
  methods: {
    irRegistro() {
      this.$router.push("/registro");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
