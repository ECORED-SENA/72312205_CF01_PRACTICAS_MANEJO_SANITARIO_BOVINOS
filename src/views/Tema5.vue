<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Limpieza, higiene y desinfección
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1-1(data-aos="fade-right")
          p.mb-0 La limpieza, higiene y desinfección son fundamentales para prevenir la propagación de enfermedades y garantizar condiciones sanitarias adecuadas. Su correcta aplicación reduce riesgos, protege la salud animal y asegura la inocuidad en la producción bovina.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img32.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Conceptos básicos e importancia en la sanidad animal
    p.mb-5 A continuación, se estudiarán los conceptos de limpieza, higiene y desinfección y su importancia en la sanidad animal.
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img33.jpg', alt="" ).m-auto
            h4.text-center Conceptos básicos
            .box___card_sinbordes_p
              p.mb-0 La limpieza, higiene y desinfección son procesos esenciales en la sanidad bovina, ya que eliminan suciedad, reducen microorganismos y previenen enfermedades. Incluyen la remoción de materia orgánica, el mantenimiento de condiciones sanitarias y la eliminación de patógenos, constituyendo la base de la bioseguridad en los sistemas ganaderos.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img34.jpg', alt="" ).m-auto
            h4.text-center Importancia en la sanidad animal
            .box___card_sinbordes_p
              p La correcta aplicación de la limpieza y desinfección aporta múltiples beneficios en la producción bovina:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reduce la presencia de bacterias, virus y parásitos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Previene enfermedades como mastitis, brucelosis y trastornos digestivos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disminuye la mortalidad y las pérdidas productivas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Protege la salud del operario. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Garantiza la inocuidad de productos como la carne y la leche.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Tipos de limpieza y desinfección
    p.mb-5 La limpieza y desinfección son procesos fundamentales para el control sanitario en los sistemas ganaderos. A continuación, se estudiarán las formas principales de limpieza y la clasificación de la desinfección:
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img35.jpg', alt="" ).m-auto
            h4.text-center Formas de limpieza
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Manual]: Se lleva a cabo con herramientas básicas como cepillos, escobas y agua, siendo útil en áreas pequeñas o de difícil acceso. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Mecánica]: Emplea equipos como hidrolavadoras, lo que facilita y agiliza la remoción de suciedad, especialmente en superficies amplias.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img36.jpg', alt="" ).m-auto
            h4.text-center Clasificación de desinfección
            .box___card_sinbordes_p
              p La #[b desinfección] se clasifica en:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Física]: Utiliza métodos como el calor, a través de agua caliente o vapor, para eliminar microorganismos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Química]: Consiste en la aplicación de sustancias desinfectantes como yodo, cloro, amonios cuaternarios, fenoles, glutaraldehído y formaldehído.
    p.mb-5 Para comprender mejor los tipos de limpieza y desinfección, se presenta un cuadro comparativo.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Cuadro comparativo: Tipos de limpieza y desinfección
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Proceso
                th.ajuste-border-tabla.texto-left Tipo
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Ejemplo
            tbody
              tr
                td.ajuste-border-tabla.texto-left Limpieza
                td.ajuste-border-tabla.texto-left Manual
                td.ajuste-border-tabla.texto-left Se realiza con herramientas básicas.
                td.texto-left Cepillos, escobas, agua.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Limpieza
                td.ajuste-border-tabla.texto-left Mecánica
                td.ajuste-border-tabla.texto-left Utiliza equipos para facilitar el proceso.
                td.texto-left Hidrolavadoras.
              tr
                td.ajuste-border-tabla.texto-left Desinfección
                td.ajuste-border-tabla.texto-left Física
                td.ajuste-border-tabla.texto-left Emplea calor para eliminar microorganismos.
                td.texto-left Agua caliente, vapor.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Desinfección
                td.ajuste-border-tabla.texto-left Química
                td.ajuste-border-tabla.texto-left Uso de sustancias desinfectantes.
                td.texto-left Cloro, yodo, amonios cuaternarios.
    p.mb-0 La elección del método debe realizarse según el nivel de contaminación, el tipo de superficie y el riesgo sanitario del área a tratar.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Procedimientos y protocolos
    p.mb-5 Un protocolo adecuado de limpieza y desinfección debe seguir una secuencia lógica que garantice su eficacia:
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img37.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p Las buenas prácticas para el uso adecuado son:
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | 
                  p.mb-0 Remoción de residuos sólidos (estiércol y restos orgánicos). 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | 
                  p.mb-0 Lavado con agua y detergente para eliminar grasa y suciedad. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 
                  p.mb-0 Enjuague para retirar residuos de detergente. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | 
                  p.mb-0 Aplicación del desinfectante según la dosis recomendada. 
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | 
                  p.mb-0 Cumplimiento del tiempo de contacto, fundamental para su efectividad. 
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | 
                  p.mb-0 Secado natural o mediante ventilación. 
    p.mb-0 Estos procedimientos deben estar estandarizados, documentados y aplicarse de manera rutinaria.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Insumos utilizados
    p.mb-5 Para la limpieza y desinfección se emplean diversos insumos, cuya selección debe basarse en su eficacia, seguridad y cumplimiento de la normatividad vigente, tales como:
    .fondo___carrusel
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img40.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Detergentes
                p.mb-0.text-center Eliminan grasa y materia orgánica. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img41.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Desinfectantes más comunes
                p.mb-0 Hipoclorito de sodio (cloro). 
                p.mb-0 Yodóforos (yodo). 
                p.mb-0 Amonios cuaternarios. 
                p.mb-0 Fenoles. 
                p.mb-0 Glutaraldehído. 
                p.mb-0 Formaldehído. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img42.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Agentes tensoactivos
                p.mb-0.text-center Facilitan la remoción de suciedad. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Agua potable
                p.mb-0.text-center Elemento esencial en todo el proceso. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img44.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Equipos de aplicación
                p.mb-0.text-center Aspersores, bombas y baldes.
        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Preparación de soluciones desinfectantes e higienización de áreas de trabajo
        p.mb-5 Seguidamente, se estudiarán estos conceptos y los aspectos fundamentales:
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Preparación de soluciones desinfectantes
                p.mb-0 La preparación de soluciones desinfectantes debe realizarse siguiendo estrictamente las indicaciones técnicas, con el fin de garantizar su eficacia en la eliminación de microorganismos y evitar riesgos para la salud humana y animal.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Concentraciones recomendadas de preparaciones
                p Las concentraciones recomendadas son:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Hipoclorito de sodio: 0.1% – 0.5% (para superficies generales). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Yodóforos: 0.5% – 1%. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Amonios cuaternarios: 0.1% – 0.2%. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Glutaraldehído: 2% (desinfección de alto nivel en equipos). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Formaldehído: 2% – 5% (uso controlado). 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recomendaciones de uso de las preparaciones
                p Las recomendaciones son:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Preparar las soluciones diariamente para asegurar su efectividad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Utilizar agua limpia durante la preparación. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Respetar los tiempos de contacto (entre 10 y 30 minutos). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Usar elementos de protección personal (EPP) durante su manipulación. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Higienización de áreas de trabajo
                p.mb-0 La higienización de las áreas de trabajo es fundamental para mantener condiciones sanitarias adecuadas en la producción bovina. Incluye la limpieza y desinfección de corrales, establos, salas de ordeño, áreas sanitarias, equipos y utensilios. Este proceso debe realizarse periódicamente, intensificarse ante brotes y organizarse mediante cronogramas y responsables para asegurar su cumplimiento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img49.png', alt='' style="max-width: 500px").m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.6 Relación con BPG y bioseguridad
    p.mb-0 La limpieza y desinfección son fundamentales en las BPG y la bioseguridad, ya que permiten el control sanitario, previenen enfermedades, aseguran la trazabilidad y reducen la contaminación, siendo clave para una producción bovina segura y sostenible.

</template>

<script>
export default {
  name: 'Tema5',
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
