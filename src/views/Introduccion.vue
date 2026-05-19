<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El curso virtual de prácticas de manejo sanitario en bovinos tiene como propósito desarrollar competencias orientadas a la planificación y ejecución de actividades sanitarias en sistemas de producción ganadera. Mediante una modalidad virtual, el estudiante adquiere conocimientos teóricos y prácticos sobre el alistamiento de implementos, equipos, medicamentos e insumos, así como la aplicación del plan sanitario conforme a cronogramas y recomendaciones técnicas.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante el proceso formativo se abordan temas fundamentales como las normas de seguridad y salud en el trabajo, el bienestar animal, la normativa sanitaria, los procesos de limpieza y desinfección, y las técnicas de administración de medicamentos. Asimismo, se fortalecen habilidades relacionadas con el manejo e inmovilización de animales, la interpretación de protocolos y el registro adecuado de la información sanitaria.
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 El curso incorpora el uso de herramientas digitales y el análisis de casos prácticos, promoviendo el aprendizaje autónomo y significativo. De esta manera, el estudiante estará en capacidad de aplicar procedimientos sanitarios adecuados, contribuyendo a la salud, el bienestar y la productividad del hato bovino.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img2.svg", alt="").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
