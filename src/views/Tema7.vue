<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Técnicas de administración de medicamentos
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Vías de administración



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Técnicas de aplicación (según BPG)




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Manejo del animal durante el procedimiento




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Cuidados post-aplicación




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Buenas prácticas en la aplicación de medicamentos




    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_7_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.6 Impacto en la inocuidad y calidad del producto





</template>

<script>
export default {
  name: 'Tema7',
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
