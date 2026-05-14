<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Plan y cronograma sanitario
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.1 Concepto e importancia



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.2 Componentes del plan sanitario




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.3 Elaboración del cronograma




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_9_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.4 Seguimiento y control




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_9_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.5 Interpretación de protocolos sanitarios




    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_9_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.6 Registro de información sanitaria




    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_9_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.7 Integración con Buenas Prácticas Ganaderas (BPG)





</template>

<script>
export default {
  name: 'Tema9',
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
