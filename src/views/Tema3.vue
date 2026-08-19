<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Normativa sanitaria vigente
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1-1(data-aos="fade-right")
          p.mb-0 La normativa sanitaria en la producción bovina en Colombia establece lineamientos obligatorios para garantizar la inocuidad, el bienestar animal, la trazabilidad y la sostenibilidad, bajo la supervisión del ICA y otras entidades del sector.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img19.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Legislación aplicable
    p.mb-5 En Colombia, la producción bovina se encuentra regulada por un conjunto de normas que integran aspectos sanitarios, ambientales y de bienestar animal. Estas son:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img11.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Resolución ICA 068167 de 2020").ajuste-cajaAcordion
            p.mb-3 Establece los requisitos para la certificación en Buenas Prácticas Ganaderas (BPG) en la producción de carne de bovinos y bufalinos. Define criterios en infraestructura, manejo sanitario, alimentación, bienestar animal, trazabilidad, uso de medicamentos y gestión ambiental. Esta resolución busca garantizar que la producción primaria cumpla estándares de inocuidad y calidad exigidos a nivel nacional e internacional.  
          .row(titulo="Resolución ICA 0000002341 de 2007").ajuste-cajaAcordion
            p Reglamenta los requisitos para la certificación en BPG, incluyendo: 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo sanitario del hato. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Programas de alimentación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bienestar animal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Trazabilidad e identificación animal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo ambiental y de residuos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Documentación y registros técnicos. 
          .row(titulo="Decreto 1500 de 2007 (y Decreto 2270 de 2012)").ajuste-cajaAcordion
            p.mb-3 Regula el sistema oficial de inspección, vigilancia y control de la carne y productos cárnicos. Aunque se enfoca en plantas de beneficio, impacta directamente la producción primaria, ya que exige condiciones sanitarias desde el predio hasta el consumidor final.
          .row(titulo="Ley 1774 de 2016").ajuste-cajaAcordion
            p.mb-3 Reconoce a los animales como seres sintientes y establece sanciones frente al maltrato animal. Es base legal para la implementación obligatoria del bienestar animal en los sistemas productivos.
          .row(titulo="Manual de Buenas Prácticas Ganaderas del ICA").ajuste-cajaAcordion
            p.mb-3  Documento técnico que orienta la implementación de BPG en los predios, sirviendo como guía para cumplir con los requisitos de certificación.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Requisitos sanitarios
    p.mb-5 Los predios ganaderos deben cumplir requisitos básicos que garanticen la sanidad animal y la inocuidad, reduciendo riesgos biológicos, químicos y físicos en la producción. Entre los principales requisitos se destacan:
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img20.jpg', alt='').m-auto
            .col-xl.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Implementación de programas sanitarios, como vacunación y desparasitación. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Control de enfermedades de vigilancia o control oficial. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso adecuado y responsable de medicamentos veterinarios. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplimiento estricto de los tiempos de retiro. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo adecuado de residuos sólidos y líquidos. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disponibilidad de agua potable y alimentación segura. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registro y documentación de todas las actividades sanitarias. 
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Protocolos oficiales
    p.mb-5 Los protocolos sanitarios corresponden a procedimientos establecidos por las autoridades competentes para prevenir, controlar y mitigar riesgos en la producción ganadera. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p Su correcta aplicación implica:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Implementación de protocolos de bioseguridad. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejecución de planes sanitarios con vacunación. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de limpieza y desinfección. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso adecuado de medicamentos y biológicos. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Control de enfermedades. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplimiento de protocolos de movilización animal.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img21.jpg', alt='').m-auto
    p.mb-0 Estos protocolos deben ser aplicados de manera continua, documentados y supervisados periódicamente.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Responsabilidades del productor
    p.mb-0 El productor ganadero es responsable de cumplir la normativa sanitaria, garantizar el bienestar animal, ejecutar el plan sanitario, mantener registros, asegurar la trazabilidad y usar correctamente los medicamentos. Su incumplimiento genera sanciones, pérdidas y riesgos para la salud pública.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Aplicación de la normativa sanitaria en campo
    p.mb-5 En la práctica, la normativa sanitaria se implementa a través de acciones concretas en el día a día del predio ganadero. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img22.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p Entre las más importantes se encuentran:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso de implementos y equipos adecuados para cada actividad. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de Buenas Prácticas Ganaderas (BPG). 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo higiénico en todas las etapas del proceso productivo. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Control del ingreso de personas y vehículos al predio. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disposición adecuada de residuos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Monitoreo permanente del estado sanitario del hato. 
    p.mb-0 La correcta aplicación de estas medidas en campo es fundamental para garantizar la producción de alimentos seguros, de alta calidad y aptos para el consumo.
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Normativa sobre bienestar animal y uso de medicamentos
    .box___style_4.mb-3(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img23.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Decreto 2113 de 2017
          p.mb-0 Para la movilización de animales existe el Decreto 2113 de 2017. Este define las condiciones que debe cumplir el transporte para garantizar el bienestar animal. La fuente normativa está disponible seguidamente:
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/1_Decreto_2113_de_2017.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .box___style_4.mb-3(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img23.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Resolución ICA No. 136 de 2020
          p.mb-0 El bienestar animal está regulado por normas específicas, tales como, la Resolución ICA No. 136 de 2020, que estable los requisitos para el manejo adecuado de animales de producción, incluyendo transporte, manejo y condiciones de bienestar. Esta se encuentra disponible para descarga a continuación:
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/2_Resolucion_ICA_136_de_2020.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .box___style_4.mb-3(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img23.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Resolución ICA 067449 de 2020
          p.mb-0 Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas en la producción de leche. El documento puede consultarse aquí: 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/3_Resolucion_ICA_067449_de_2020.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .box___style_4.mb-3(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img23.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Resolución ICA 4703 de 2024
          p.mb-0 En cuanto a los requisitos y condiciones para habilitar los operadores del SINIGAN como agentes del SNIITA, con sus respectivas responsabilidades, se tiene la Resolución ICA 4703 de 2024. Se puede acceder a la versión vigente en la siguiente opción de descarga:
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/4_Resolucion_ICA_4703_2024.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .box___style_4.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img23.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Resolución ICA 15843 de 2026
          p.mb-0 Esta norma deroga de forma definitiva la Resolución 1056 a partir del 2 de octubre de 2026. Adopta los lineamientos de la Decisión Andina 960 de 2025 para regular integralmente los insumos veterinarios. Esta se encuentra disponible para descarga a continuación:
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/5_Resolucion_15843_de_2026.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    p.mb-5 Por otra parte, el uso de medicamentos veterinarios debe realizarse de manera responsable y bajo criterios técnicos, con el fin de garantizar la salud animal y la inocuidad de los productos de origen animal. 
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img24.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p Para ello, es importante tener en cuenta los siguientes aspectos:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Deben estar autorizados por el Instituto Colombiano Agropecuario (ICA). 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Su aplicación debe realizarse bajo criterio técnico o supervisión de un médico veterinario. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Es obligatorio respetar la dosis, la vía de administración y los tiempos de retiro establecidos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Todo uso debe registrarse en el historial sanitario del animal para asegurar la trazabilidad. 

</template>

<script>
export default {
  name: 'Tema3',
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
