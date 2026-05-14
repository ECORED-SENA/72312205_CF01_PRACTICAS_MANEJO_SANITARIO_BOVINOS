<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Cálculos y operaciones matemáticas aplicadas
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.1 Dosificación de medicamentos



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.2 Cálculo de concentraciones




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_10_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.3 Conversión de unidades




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_10_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.4 Aplicación de procedimientos sanitarios




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_10_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.5 Importancia en la aplicación segura de tratamientos



</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
