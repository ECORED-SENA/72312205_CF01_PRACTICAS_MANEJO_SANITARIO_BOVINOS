<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Normas de seguridad y salud en el trabajo (SST)
    p.mb-5 En esta unidad se estudiará la seguridad y salud en el trabajo, incluyendo el uso de elementos de protección personal, el manejo seguro de medicamentos y biológicos, la prevención de riesgos y la aplicación de normas SST, destacando su relación con el bienestar animal y la inocuidad.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos básicos de SST
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 La Seguridad y Salud en el Trabajo (SST) comprende normas y medidas orientadas a proteger la salud y el bienestar de los trabajadores, siendo fundamental en actividades de riesgo como el manejo de animales y el uso de medicamentos. En la sanidad bovina, su aplicación previene accidentes y enfermedades, reduce riesgos asociados al trabajo con animales y garantiza condiciones seguras, contribuyendo a la eficiencia y seguridad en las actividades sanitarias.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img1.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Elementos de protección personal (EPP)
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 Los elementos de protección personal (EPP), como guantes, botas y mascarillas, son obligatorios en sanidad bovina para prevenir enfermedades. Su efectividad depende del uso correcto, limpieza constante y reemplazo periódico, garantizando así la seguridad del trabajador ante fluidos y contaminantes.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img2.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Manejo seguro de medicamentos y biológicos
    p.mb-5 El manejo de medicamentos veterinarios y biológicos debe basarse en criterios técnicos que garanticen su seguridad y eficacia, respetando dosis, vías de administración y tiempos de retiro, y empleando material estéril para prevenir riesgos sanitarios y asegurar la inocuidad de los productos. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img3.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p En el caso de los biológicos (como vacunas), se deben considerar los siguientes aspectos:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mantener la cadena de frío entre 2 °C y 8 °C en todo momento (transporte, almacenamiento y uso). 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar la exposición directa a la luz solar y a temperaturas extremas. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | No congelar los biológicos, ya que esto altera su eficacia. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Verificar la fecha de vencimiento antes de su aplicación. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Utilizar el producto inmediatamente después de su reconstitución, cuando aplique. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Agitar suavemente según las indicaciones del fabricante. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Desechar adecuadamente los sobrantes y envases, siguiendo normas sanitarias.
    p.mb-0 Un manejo inadecuado de medicamentos puede generar riesgos para la salud y la inocuidad. En Colombia, su uso es regulado por el ICA y las Buenas Prácticas Ganaderas.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Prevención de riesgos laborales
    p.mb-5 Las actividades sanitarias en bovinos implican la exposición a diversos riesgos que pueden afectar la seguridad y la salud del trabajador. Para prevenirlos es fundamental identificarlos y aplicar medidas de control. Estos riesgos pueden clasificarse en diferentes tipos. 
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img4.jpg', alt="" ).m-auto
            h4.text-center Tipos de riesgos
            .box___card_sinbordes_p
              p Los tipos de riesgos son:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[ Riesgos físicos]: golpes, patadas y atrapamientos durante el manejo del animal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[ Riesgos biológicos]: exposición a bacterias, virus y parásitos transmisibles al ser humano. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[ Riesgos químicos]: uso de medicamentos, desinfectantes u otras sustancias peligrosas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[ Riesgos ergonómicos]: posturas inadecuadas o esfuerzos físicos repetitivos durante las labores.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img5.jpg', alt="" ).m-auto
            h4.text-center Medidas básicas de seguridad
            .box___card_sinbordes_p
              p Entre las medidas básicas de seguridad, se destacan las siguientes:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso adecuado de elementos de protección personal (EPP). 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo correcto del animal, evitando prácticas que generen estrés o maltrato. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Utilización de instalaciones seguras, como manga o brete, que faciliten el control del bovino. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Capacitación continua del personal en técnicas de manejo y prevención de riesgos. 
    p.mb-0 La implementación de estas acciones contribuye a reducir accidentes, proteger la salud del trabajador y mejorar la eficiencia en las actividades sanitarias.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Aplicación de normas SST en actividades sanitarias
    p.mb-5 Para las actividades sanitarias en bovinos, es esencial un proceso ordenado que minimice riesgos y garantice la seguridad tanto del operario como del animal. El proceso paso a paso se aplica así:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Preparación del área
              p.mb-0 Antes de iniciar, se debe acondicionar el espacio de trabajo, verificando que esté limpio, seco y libre de riesgos. Asimismo, es importante revisar que los equipos, herramientas y materiales se encuentren en buen estado y listos para su uso.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img6.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img7.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Preparación del operario
              p.mb-0 El trabajador debe contar con todos los elementos de protección personal (EPP) requeridos y realizar un adecuado lavado de manos antes de iniciar el procedimiento, garantizando condiciones básicas de bioseguridad.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Manejo del animal
              p.mb-0 El bovino debe ser conducido de manera tranquila, evitando generar estrés o maltrato, y posteriormente inmovilizado de forma segura en instalaciones adecuadas como la manga o el brete.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img8.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img9.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Aplicación del procedimiento
              p.mb-0 Se debe emplear la técnica correcta según el tipo de tratamiento, procurando realizar la actividad con precisión y evitando movimientos bruscos que puedan poner en riesgo al operario o al animal.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Finalización
              p.mb-0 Al concluir, es necesario realizar la disposición adecuada de los residuos generados, como agujas y envases, siguiendo las normas sanitarias. Además, se debe registrar la actividad realizada para efectos de control y seguimiento.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img9.png', alt='' style="width: 300px").m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Relación entre SST, bienestar animal e inocuidad
    p.mb-5 La Seguridad y Salud en el Trabajo (SST), el bienestar animal y la inocuidad están interrelacionados; su adecuada aplicación permite un manejo seguro, reduce el estrés y mejora la calidad sanitaria, garantizando productos seguros. La importancia de esta integración se refleja en:
    .tarjeta--container.row.justify-content-center.mb-0.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        h4 Aspectos clave
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Un manejo adecuado del animal contribuye a mejorar la calidad de los productos obtenidos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | La reducción del estrés disminuye la aparición de enfermedades. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Se garantiza la producción de alimentos seguros para el consumidor. 
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        h4 Normatividad
        p En Colombia, se destacan las siguientes:
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Resolución 067449 de 2020 del ICA: relacionada con las Buenas Prácticas Ganaderas (BPG).
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Decreto 1500 de 2007: enfocado en la inocuidad de la carne.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Ley 1774 de 2016: establece disposiciones sobre el bienestar animal.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
