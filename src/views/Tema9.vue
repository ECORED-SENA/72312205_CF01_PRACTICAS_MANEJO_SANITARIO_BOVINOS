<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Plan y cronograma sanitario
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1(data-aos="fade-right")
          p.mb-0 El plan y cronograma sanitario es un conjunto organizado de actividades programadas en el tiempo que orientan la prevención, control y tratamiento de enfermedades en el hato bovino, incluyendo vacunaciones, desparasitaciones y otras acciones sanitarias, con el fin de garantizar la salud animal, la productividad y el cumplimiento de las Buenas Prácticas Ganaderas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img91.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.1 Concepto e importancia
    p.mb-5 El plan sanitario es un documento técnico, estructurado y de carácter obligatorio dentro de los sistemas de producción bovina y para profundizar en la fundamentación conceptual y su importancia, se invita a reproducir el siguiente video: 
    figure(data-aos="zoom-in").mb-0
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video #[b Video]. Plan sanitario bovino: fundamentos, aplicación y normatividad.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.2 Componentes del plan sanitario
    p.mb-5 Un plan sanitario debe ser integral, organizado, documentado y ajustado a las condiciones epidemiológicas y productivas de la unidad pecuaria. Seguidamente, se detallarán los programas que comprende un plan sanitario:
    .box___style_5.p-5.mb-3(data-aos="zoom-in")
      ol.lista-ol--cuadro.mb-3
        li
          .lista-ol--cuadro__vineta
            span A
          | 
          p.mb-0 Programa de vacunación
      p Debe diseñarse de acuerdo con la normatividad del ICA y el análisis de riesgo epidemiológico de la región.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          h4 Incluye:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Vacunación contra fiebre aftosa (obligatoria a nivel nacional). 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Vacunación contra brucelosis (en hembras jóvenes según lineamientos oficiales). 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Vacunas contra clostridiosis.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Vacunación contra rabia bovina en zonas endémicas.
        .col-xl.mb-4.mb-lg-0
          h4 Requisitos técnicos:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Mantenimiento de la cadena de frío (entre 2 °C y 8 °C). 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Registro detallado de lotes, fechas y animales vacunados. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Aplicación por personal capacitado o bajo supervisión veterinaria. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img92.png', alt="" ).m-auto
    .box___style_5.p-5.mb-3(data-aos="zoom-in")
      ol.lista-ol--cuadro.mb-3
        li
          .lista-ol--cuadro__vineta
            span B
          | 
          p.mb-0 Programa de desparasitación
      p Está orientado al control integral de parásitos internos y externos que afectan la salud y productividad del hato.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          h4 Incluye:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  #[b Endoparásitos]: nematodos y cestodos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Ectoparásitos]: garrapatas, moscas y otros artrópodos. 
        .col-xl.mb-4.mb-lg-0
          h4 Consideraciones técnicas:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Rotación de principios activos para evitar resistencia. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ajuste del programa según clima, carga parasitaria y sistema productivo.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evaluación periódica de la eficacia del tratamiento.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img93.png', alt="" ).m-auto
    .box___style_5.p-5.mb-3(data-aos="zoom-in")
      ol.lista-ol--cuadro.mb-3
        li
          .lista-ol--cuadro__vineta
            span C
          | 
          p.mb-0 Manejo de enfermedades
      p Comprende las acciones para la detección, tratamiento y control de enfermedades dentro del hato.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          p #[b Incluye:]
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Protocolos de diagnóstico clínico y confirmación por laboratorio. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Tratamientos bajo prescripción de un médico veterinario. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Aislamiento de animales enfermos para evitar la propagación. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Notificación obligatoria de enfermedades de control oficial ante el ICA. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img94.png', alt="" ).m-auto
    .box___style_5.p-5.mb-3(data-aos="zoom-in")
      ol.lista-ol--cuadro.mb-3
        li
          .lista-ol--cuadro__vineta
            span D
          | 
          p.mb-0 Bioseguridad
      p Conjunto de medidas destinadas a prevenir el ingreso, establecimiento y diseminación de agentes patógenos en la unidad productiva.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          p #[b Incluye:]
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Control del ingreso de animales, personas y vehículos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Uso de pediluvios y sistemas de desinfección. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Manejo adecuado de cadáveres (disposición sanitaria).
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Programas de control de plagas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img95.png', alt="" ).m-auto
    .box___style_5.p-5.mb-0(data-aos="zoom-in")
      ol.lista-ol--cuadro.mb-3
        li
          .lista-ol--cuadro__vineta
            span E
          | 
          p.mb-0 Registros sanitariosO
      p Los registros sanitarios constituyen una herramienta fundamental dentro del sistema de gestión pecuaria, ya que permiten documentar, controlar y verificar todas las actividades relacionadas con la salud del hato.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          p #[b Documentación obligatoria]
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Vacunaciones aplicadas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Tratamientos veterinarios realizados. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Mortalidad del hato. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Producción (leche, carne u otros indicadores). 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Eventos sanitarios relevantes (brotes, enfermedades, alertas). 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img96.png', alt="" ).m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.3 Elaboración del cronograma
    p.mb-5 El cronograma sanitario es una herramienta de planificación que permite organizar, distribuir y programar en el tiempo todas las actividades sanitarias del sistema productivo, garantizando su cumplimiento oportuno y eficiente. Fases para su elaboración son:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Diagnóstico del hato
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estado sanitario actual. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Historial de enfermedades. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Condición productiva del sistema (leche o carne).
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img97.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img98.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Identificación de riesgos
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ubicación geográfica del predio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Condiciones climáticas (épocas de lluvia y sequía). 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Tipo de sistema productivo. 
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Definición de actividades sanitarias
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Vacunación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Desparasitación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Monitoreo sanitario. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Limpieza y desinfección. 
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img99.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img100.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Programación de actividades
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mensual. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Trimestral. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Semestral. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Anual.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Asignación de responsables
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Médico veterinario. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Personal operativo u operarios del predio. 
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img101.png', alt='' style="width: 300px").m-auto
    p.mb-5 En la siguiente tabla se presenta un ejemplo de cronograma sanitario.
    .row.justify-content-center.mb-0
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Ejemplo de cronograma sanitario
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Actividad
                th.ajuste-border-tabla.texto-left Frecuencia
                th.texto-left Responsable
            tbody
              tr
                td.ajuste-border-tabla.texto-left Vacunación aftosa
                td.ajuste-border-tabla.texto-left Semestral
                td.texto-left Médico veterinario
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Desparasitación
                td.ajuste-border-tabla.texto-left Trimestral
                td.texto-left Operario
              tr
                td.ajuste-border-tabla.texto-left Control de mastitis
                td.ajuste-border-tabla.texto-left Mensual
                td.texto-left Ordeñador
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Limpieza y desinfección
                td.ajuste-border-tabla.texto-left Semanal
                td.texto-left Personal general
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_9_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.4 Seguimiento y control
    p.mb-5 El seguimiento y control del plan sanitario permite evaluar su ejecución, eficacia y cumplimiento dentro del sistema productivo. Las actividades de control e indicadores sanitarios son:
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img102.jpg', alt="" ).m-auto
            h4.text-center Actividades de control
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Verificación del cumplimiento del cronograma. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evaluación de resultados sanitarios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Identificación de fallas o desviaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Implementación de acciones de mejora.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img103.jpg', alt="" ).m-auto
            h4.text-center Indicadores sanitarios
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mortalidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Morbilidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Niveles de producción. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Incidencia y prevalencia de enfermedades.
    p.mb-0 #[b Nota]: Estos indicadores son obligatorios dentro de los esquemas de certificación en BPG.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_9_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.5 Interpretación de protocolos sanitarios
    p.mb-5 Los protocolos sanitarios son documentos técnicos estandarizados que establecen la forma correcta de ejecutar procedimientos veterinarios y sanitarios. Para comprender este tema, seguidamente se detallarán los elementos que incluyen y se presentará un ejemplo:
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img104.jpg', alt="" ).m-auto
            h4.text-center Elementos que incluyen
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Procedimiento paso a paso. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Equipos e insumos necesarios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Dosis y medicamentos recomendados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Medidas de bioseguridad.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img105.jpg', alt="" ).m-auto
            h4.text-center Ejemplo: Protocolo de vacunación
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Verificar la cadena de frío del biológico. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Desinfectar el sitio de aplicación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicar la vacuna según la técnica indicada. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registrar la información en el sistema sanitario. 
    p.mb-0 Los protocolos deben ser claros, documentados y ejecutados únicamente por personal capacitado o bajo supervisión profesional.
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_9_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.6 Registro de información sanitaria
    p.mb-5 El registro de información sanitaria garantiza la trazabilidad, el control epidemiológico y el cumplimiento normativo del sistema productivo. En la siguiente tabla se presenta la información que debe contener un formato básico de registro:
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 7.
          span Formato básico de registro
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Campo
                th.texto-left Descripción
            tbody
              tr
                td.ajuste-border-tabla.texto-left Fecha
                td.texto-left Día de la actividad
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Animal
                td.texto-left Identificación individual
              tr
                td.ajuste-border-tabla.texto-left Procedimiento
                td.texto-left Vacunación o tratamiento
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Medicamento
                td.texto-left Nombre del producto
              tr
                td.ajuste-border-tabla.texto-left Dosis
                td.texto-left Cantidad aplicada
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Vía
                td.texto-left IM, SC, IV, entre otras
              tr
                td.ajuste-border-tabla.texto-left Tiempo de retiro
                td.texto-left Carne o leche
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Responsable
                td.texto-left Firma del encargado
    p.mb-0 La implementación de estas acciones es fundamental para garantizar el cumplimiento de la normatividad del ICA, mantener un adecuado control sanitario del hato, servir como soporte en auditorías oficiales y asegurar la inocuidad de los alimentos de origen animal.
    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_9_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.7 Integración con Buenas Prácticas Ganaderas (BPG)
    p.mb-5 El plan sanitario constituye un pilar esencial dentro del sistema de Buenas Prácticas Ganaderas (BPG), ya que articula las acciones sanitarias con los estándares de producción inocua y sostenible. Los aportes del plan sanitario a las BPG y los requisitos asociados son:
    .tarjeta--container.row.justify-content-center.mb-0.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        h4 Aportes del plan sanitario a las BPG
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Garantiza la inocuidad de los alimentos de origen animal. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Mejora el bienestar animal. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Permite la trazabilidad completa del sistema productivo. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Contribuye al control y prevención de enfermedades.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        h4 Requisitos asociados a BPG
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Plan sanitario documentado y actualizado. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Registros completos y verificables. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Uso responsable de medicamentos veterinarios. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Cumplimiento estricto de la normatividad vigente del ICA. 

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
