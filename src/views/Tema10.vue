<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Cálculos y operaciones matemáticas aplicadas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1-1(data-aos="fade-right")
          p.mb-0 Los cálculos matemáticos en ganadería permiten dosificar medicamentos correctamente, controlar la producción y optimizar recursos, mejorando la eficiencia, la toma de decisiones y el cumplimiento de las Buenas Prácticas Ganaderas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img106.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.1 Dosificación de medicamentos
    p.mb-5 La dosificación correcta es fundamental para garantizar la eficacia terapéutica y evitar riesgos en la salud animal.
    .row.justify-content-center.mb-5
      .col-xl-6 
        .box___style_6.p-4(data-aos="zoom-in")
          h4.mb-0.text-center Dosis = Peso (kg) × mg / kg
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img107.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p #[b Ejemplo práctico]
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Peso del animal: 400 kg. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Dosis: 10 mg/kg. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Resultado: 4000 mg.     
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.2 Cálculo de concentraciones
    .row.justify-content-center.align-items-center
      .col-xl-10.mb-4.mb-lg-0
        p.mb-0 La siguiente fórmula permite preparar soluciones con concentraciones exactas y seguras, garantizando eficacia en tratamientos y desinfección.
      .col-xl-2.col-md-4(data-aos="fade-left")
        .box___style_6.p-4(data-aos="zoom-in")
          .row.align-items-center
            .col.p-0
              p.mb-0.texto-right #[b C =]
            .col
              .box___style_7.text-center
                p.mb-0.line--bottom #[b m]
                p.mb-0 #[b VC]
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_10_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.3 Conversión de unidades
    p.mb-5 La siguiente tabla presenta conversiones de unidades, que son esenciales para evitar errores en la administración de medicamentos.
    .row.justify-content-center.mb-0
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 8.
          span Conversión de unidades
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Unidad
                th.texto-left Equivalencia
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 1 g
                td.texto-left 1000 mg
              tr
                td.ajuste-border-tabla.texto-left 1 kg
                td.texto-left 1000 g
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 1 Ml
                td.texto-left 1 cc
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_10_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.4 Aplicación de procedimientos sanitarios
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p Los cálculos matemáticos se aplican en:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Dosificación de medicamentos veterinarios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Preparación de desinfectantes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo de anestesia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Programas de vacunación. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img108.jpg', alt='').m-auto
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_10_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.5 Importancia en la aplicación segura de tratamientos
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p Un cálculo incorrecto puede generar consecuencias graves como:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Sobredosis y toxicidad en los animales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Subdosificación y fallas terapéuticas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Desarrollo de resistencia antimicrobiana. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Riesgos en la inocuidad de los alimentos. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img109.jpg', alt='').m-auto
    p.mb-0 El plan sanitario, junto con los cálculos matemáticos aplicados en el manejo pecuario, constituye una base fundamental para la producción ganadera moderna, ya que permite una producción segura y eficiente, garantiza el cumplimiento normativo del ICA, fortalece el bienestar animal, contribuye a la sostenibilidad, facilita la certificación en Buenas Prácticas Ganaderas y asegura la inocuidad de los alimentos, protegiendo la salud pública.

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
