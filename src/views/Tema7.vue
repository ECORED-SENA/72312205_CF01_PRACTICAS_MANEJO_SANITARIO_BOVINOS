<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Técnicas de administración de medicamentos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1-1(data-aos="fade-right")
          p.mb-0 Las técnicas de administración de medicamentos en bovinos garantizan tratamientos eficaces y el bienestar animal, mediante el uso adecuado de la vía, la dosis correcta y el cumplimiento de recomendaciones veterinarias.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img57.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Vías de administración
    p.mb-5 La elección de la vía de administración depende del tipo de medicamento, el objetivo del tratamiento y las condiciones del animal. Una correcta selección garantiza mayor eficacia y reduce riesgos. Las principales vías son:
    .row.justify-content-center.mb-3
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img58.jpg', alt="" ).m-auto
            h4.text-center Intramuscular (IM)
            .box___card_sinbordes_p
              p.mb-0.text-center Se aplica en el músculo, preferiblemente en el cuello (zona recomendada) para evitar daños en cortes de valor comercial.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img59.jpg', alt="" ).m-auto
            h4.text-center Subcutánea (SC)
            .box___card_sinbordes_p
              p.mb-0.text-center Se administra debajo de la piel, comúnmente en la tabla del cuello.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img60.jpg', alt="" ).m-auto
            h4.text-center Intravenosa (IV)
            .box___card_sinbordes_p
              p.mb-0.text-center Se aplica directamente en la vena yugular, permitiendo una acción rápida del medicamento.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img61.jpg', alt="" ).m-auto
            h4.text-center Oral
            .box___card_sinbordes_p
              p.mb-0.text-center Se suministra por vía digestiva mediante dosificadores o jeringas orales.
    .row.justify-content-center.mb-0
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img62.jpg', alt="" ).m-auto
            h4.text-center Intramamaria
            .box___card_sinbordes_p
              p.mb-0.text-center Se aplica en el pezón, principalmente para el tratamiento de mastitis o durante el secado.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img63.jpg', alt="" ).m-auto
            h4.text-center Tópica
            .box___card_sinbordes_p
              p.mb-0.text-center Se aplica directamente sobre la piel, en heridas o como productos tipo #[i pour-on].
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img64.jpg', alt="" ).m-auto
            h4.text-center Intraruminal
            .box___card_sinbordes_p
              p.mb-0.text-center Se administra en la fosa del ijar izquierdo, generalmente mediante bolos o sondas.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___card_sinbordes-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img65.jpg', alt="" ).m-auto
            h4.text-center Intraperitoneal
            .box___card_sinbordes_p
              p.mb-0.text-center Se realiza en la fosa del ijar derecho, utilizada en casos específicos bajo supervisión veterinaria.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Técnicas de aplicación (según BPG)
    p.mb-5 Para garantizar una aplicación segura y efectiva conforme a las Buenas Prácticas Ganaderas (BPG), es esencial usar la aguja adecuada, respetar el ángulo de inserción y evitar la contaminación. A continuación, se presentan recomendaciones sobre tipos de agujas, ángulos y buenas prácticas.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA" data-aos="zoom-in")
      .row(titulo="Uso de agujas (recomendación clave BPG)").ajuste-cajaAcordion
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Utilizar #[b una aguja por animal] para prevenir la transmisión de enfermedades. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | En procedimientos grupales, cambiar la aguja inmediatamente si se dobla, contamina o pierde filo. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Mantener siempre agujas estériles y en buen estado. 
      .row(titulo="Tipo de aguja y ángulo según vía de aplicación").ajuste-cajaAcordion
        ul.fa-ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Intramuscular (IM)]: Se utiliza aguja calibre 16–18, con una longitud de 1 a 1.5 pulgadas y un ángulo de aplicación de 90°.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Subcutánea (SC)]: Requiere aguja calibre 16–18, con una longitud de ½ a 1 pulgada y un ángulo de 45°.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Intravenosa (IV)]: Se emplea aguja calibre 16–18, con una longitud de 1 a 1.5 pulgadas y un ángulo entre 20° y 30°.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Intramamaria]: Se utiliza cánula intramamaria, con longitud según la presentación del producto y aplicación mediante inserción directa.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Oral]: Se administra con dosificador sin aguja; no requiere longitud específica ni ángulo de aplicación.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Tópica]: Se aplica mediante aplicador tipo pour-on; no requiere aguja ni ángulo.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Intraruminal]: Se emplea sonda o aplicador de bolo, con técnica específica según el procedimiento.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Intraperitoneal]: Se utiliza aguja calibre 16–18, con una longitud de 1.5 pulgadas y un ángulo de 90°.
      .row(titulo="Buenas prácticas adicionales").ajuste-cajaAcordion
        ul.fa-ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Desinfectar el sitio de aplicación antes de inyectar. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | No aplicar más de 10–15 ml por punto en vía intramuscular. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Rotar los sitios de aplicación en tratamientos repetidos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Evitar aplicar en zonas de alto valor comercial (preferir cuello). 
        p.mb-3 El uso correcto de agujas y técnicas de aplicación reduce el riesgo de abscesos, mejora la absorción del medicamento y garantiza el bienestar animal.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Manejo del animal durante el procedimiento
    p.mb-5 El manejo adecuado del animal durante la aplicación de medicamentos es fundamental para garantizar la seguridad, reducir el estrés y mejorar la efectividad del tratamiento.
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Utilizar brete o manga para lograr una inmovilización segura y controlada. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar golpes, gritos o prácticas que generen estrés. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicar técnicas de manejo de bajo estrés (#[i Low Stress Handling]). 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Contar con personal capacitado en manejo animal y procedimientos sanitarios. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img66.jpg', alt='').m-auto
    p.mb-0 Un manejo adecuado favorece el bienestar animal y mejora la respuesta al tratamiento.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Cuidados post-aplicación
    p.mb-0 Después de la administración del medicamento, es fundamental realizar un seguimiento para asegurar su efectividad y detectar posibles complicaciones, observando reacciones adversas, verificando la ausencia de abscesos, manteniendo la higiene del área tratada y registrando el procedimiento. Esto permite evaluar el tratamiento y tomar acciones correctivas si es necesario.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Buenas prácticas en la aplicación de medicamentos
    p.mb-5 La aplicación de medicamentos debe realizarse bajo estándares que garanticen la sanidad animal y la seguridad del proceso:
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Utilizar elementos de protección personal (EPP) como guantes y botas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | No reutilizar agujas contaminadas o en mal estado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | No mezclar medicamentos sin indicación técnica o veterinaria. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar la contaminación cruzada entre animales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Capacitar continuamente al personal encargado. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img67.jpg', alt='').m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_7_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.6 Impacto en la inocuidad y calidad del producto
    p.mb-0 La correcta administración de medicamentos garantiza productos seguros, cumple normativas, protege la salud pública y fortalece una producción bovina sostenible.

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
