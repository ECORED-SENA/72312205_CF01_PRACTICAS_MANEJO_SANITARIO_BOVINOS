<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Medicamentos y biológicos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1-1(data-aos="fade-right")
          p.mb-0 En esta unidad de aprendizaje se abordará de manera integral el concepto de medicamentos y biológicos, así como su clasificación, tipos, conservación y manejo adecuado.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img50.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Concepto y clasificación
    p.mb-5 Los medicamentos y biológicos veterinarios son esenciales para prevenir y tratar enfermedades, mantener la salud del hato, mejorar la productividad y garantizar la inocuidad de los productos. Estos se pueden clasificar así:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        h2 Clasificación principal
        p Se clasifican en dos grandes grupos:
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Medicamentos]: sustancias químicas o farmacológicas con acción terapéutica, empleadas para el tratamiento, control o alivio de enfermedades. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Biológicos]: productos derivados de microorganismos vivos o inactivados que estimulan el sistema inmunológico del animal para prevenir enfermedades, como las vacunas. 
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        h2 Clasificación por finalidad
        p Adicionalmente, según su finalidad, pueden clasificarse en:
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Preventivos]: se utilizan para evitar la aparición de enfermedades (ej. vacunas). 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Terapéuticos]: se emplean para tratar enfermedades ya presentes.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Metafilácticos]: se administran a grupos de animales para controlar la diseminación de una enfermedad en poblaciones en riesgo.
    p.mb-0 Su uso debe estar siempre respaldado por criterio técnico o supervisión de un médico veterinario.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Tipos de medicamentos veterinarios y biológicos: vacunas y sueros
    p.mb-5 Los medicamentos más utilizados en bovinos incluyen:
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Antibióticos
                p.mb-0.text-center Utilizados para tratar infecciones bacterianas. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Antiparasitarios
                p.mb-0.text-center Controlan parásitos internos (helmintos) y externos (garrapatas, moscas).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Antiinflamatorios
                p.mb-0.text-center Reducen la inflamación, el dolor y la fiebre. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Analgésicos
                p.mb-0.text-center Disminuyen el dolor en procedimientos o enfermedades.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Vitaminas y minerales
                p.mb-0.text-center Suplementan deficiencias nutricionales. 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Hormonas
                p.mb-0.text-center Regulan funciones reproductivas o metabólicas. 
        p.mb-5 En cuanto a los biológicos, estos son productos esenciales para la prevención de enfermedades en bovinos, ya que fortalecen el sistema inmunológico y disminuyen la incidencia de patologías en el hato. Estos son:
        .row.justify-content-center.mb-5
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___card_sinbordes.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img52.jpg', alt="" ).m-auto
                h4.text-center Vacunas
                .box___card_sinbordes_p
                  p.mb-0 Estimulan la producción de anticuerpos y generan inmunidad activa. Ejemplos: fiebre aftosa, brucelosis y clostridiosis.
          .col-xl-6.col-md-9(data-aos="fade-left")
            .box___card_sinbordes.fit___color_card-2.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img53.jpg', alt="" ).m-auto
                h4.text-center Sueros
                .box___card_sinbordes_p
                  p.mb-0 Proporcionan inmunidad inmediata (pasiva) y se utilizan principalmente en situaciones de emergencia sanitaria.
    p.mb-0 Su correcta aplicación contribuye a reducir la mortalidad, mejorar la productividad y fortalecer los programas sanitarios.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Conservación y manejo
    p.mb-5 Para garantizar la eficacia de los medicamentos y biológicos, es indispensable mantener condiciones adecuadas de almacenamiento:
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mantener la cadena de frío entre 2 °C y 8 °C, especialmente en biológicos. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar la congelación de las vacunas. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Proteger los productos de la luz solar directa. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Almacenar en neveras exclusivas para medicamentos veterinarios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Controlar fechas de vencimiento y número de lote. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img54.jpg', alt='').m-auto
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Indicaciones de uso
    p.mb-5 El uso de medicamentos veterinarios debe cumplir con criterios técnicos que garanticen su efectividad y seguridad:
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Realizar un diagnóstico clínico previo. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Calcular la dosis según el peso del animal (uso de báscula o cinta). 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Seleccionar la vía de administración adecuada. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Respetar la frecuencia y duración del tratamiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplir los tiempos de retiro en carne y leche. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img55.jpg', alt='').m-auto
    p.mb-0 Estas prácticas evitan la presencia de residuos químicos y protegen la salud del consumidor.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Disposición y organización de medicamentos
    p.mb-0 Un manejo adecuado de los medicamentos en el predio permite mantener el control sanitario y la trazabilidad, mediante la clasificación de los productos por tipo, la aplicación del sistema PEPS (Primeras Entradas, Primeras Salidas), el almacenamiento en lugares seguros y limpios, la eliminación correcta de productos vencidos y el registro de los tratamientos realizados.
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Buenas prácticas en la aplicación de medicamentos veterinarios
    p.mb-5 La correcta aplicación de medicamentos es un requisito fundamental dentro de las Buenas Prácticas Ganaderas (BPG). Estos son:
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Utilizar medicamentos bajo prescripción o criterio veterinario. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Respetar la dosis y la vía de administración indicada. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Emplear agujas y jeringas estériles. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registrar cada tratamiento (fecha, producto, dosis y animal). 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplir estrictamente los tiempos de retiro. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img56.jpg', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
