<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Enfermedades y tratamientos en bovinos
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Principales enfermedades



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Mecanismos de transmisión




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.3 Diagnóstico básico, tratamientos y profilaxis




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Aplicación de tratamientos veterinarios




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Plan sanitario del hato (Integración)




    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.6 Monitoreo y seguimiento sanitario







</template>

<script>
export default {
  name: 'Tema8',
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
