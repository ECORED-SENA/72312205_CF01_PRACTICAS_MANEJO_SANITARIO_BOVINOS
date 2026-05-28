<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Bienestar animal
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1(data-aos="fade-right")
          p.mb-0 El bienestar animal es un componente esencial en la producción bovina moderna y un pilar fundamental de las Buenas Prácticas Ganaderas (BPG). Su correcta aplicación garantiza animales sanos, productivos y alimentos inocuos, además de cumplir con la normatividad vigente en Colombia.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img10.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto y principios del bienestar animal
    p.mb-5 El bienestar animal es el estado físico y mental del animal según sus condiciones de vida, garantizando salud, comodidad y ausencia de sufrimiento. Se basa en estas cinco libertades que orientan un manejo adecuado:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img11.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Libre de hambre y sed").ajuste-cajaAcordion
            p.mb-3 El animal debe tener acceso permanente a agua limpia y a una alimentación suficiente y balanceada que cubra sus necesidades nutricionales.
          .row(titulo="Libre de incomodidades").ajuste-cajaAcordion
            p.mb-3 Debe contar con un ambiente adecuado, con sombra, abrigo, buena ventilación y un espacio limpio y confortable para su descanso.
          .row(titulo="Libre de dolor, lesiones y enfermedades").ajuste-cajaAcordion
            p.mb-3 Se deben prevenir y tratar oportunamente las enfermedades, así como evitar prácticas que causen daño o sufrimiento innecesario.
          .row(titulo="Libre para expresar su comportamiento natural").ajuste-cajaAcordion
            p.mb-3 El animal debe tener espacio y condiciones que le permitan moverse, socializar y realizar conductas propias de su especie.
          .row(titulo="Libre de miedo y angustia").ajuste-cajaAcordion
            p.mb-3 Se debe garantizar un manejo tranquilo, evitando el maltrato, el estrés y situaciones que generen temor o sufrimiento.
    p.mb-0 Estos principios están alineados con la normatividad colombiana. Como la Ley 1774 de 2016 y las resoluciones del ICA.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Manejo adecuado del bovino
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 El manejo adecuado del bovino consiste en aplicar prácticas que respeten sus necesidades, como alimentación balanceada, agua limpia, instalaciones adecuadas y programas sanitarios. Esto reduce enfermedades, mejora la productividad y garantiza la calidad del producto final.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img12.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Relación con la sanidad y productividad
    p.mb-0 El bienestar animal mejora la sanidad y productividad, ya que reduce enfermedades, optimiza la producción de carne y leche y permite obtener productos de mayor calidad e inocuidad.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Buenas prácticas ganaderas (BPG)
    p.mb-5 Las Buenas Prácticas Ganaderas (BPG) garantizan alimentos seguros y de calidad mediante manejo adecuado, uso responsable de medicamentos y control sanitario, base de una ganadería responsable. En el siguiente cuadro se resumen los principales requisitos sanitarios y de uso de medicamentos.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Resumen de los principales requisitos sanitarios y de uso de medicamentos.
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Componente
                th.ajuste-border-tabla.texto-left Requisito
                th.ajuste-border-tabla.texto-left Descripción clave
                th.texto-left Referencia
            tbody
              tr.ajuste-color-tabla
                td(rowspan="8").ajuste-border-tabla.texto-left #[b Sanidad Animal]
                td.ajuste-border-tabla.texto-left Plan sanitario
                td.ajuste-border-tabla.texto-left Plan elaborado por MV o MVZ con acciones preventivas, listado de vacunas y RUV actualizado.
                td.texto-left Art. 5.1.1
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Certificación sanitaria
                td.ajuste-border-tabla.texto-left Predio con certificado vigente libre de brucelosis y tuberculosis.
                td.texto-left Art. 5.1.2
              tr
                td.ajuste-border-tabla.texto-left Manejo de animales enfermos
                td.ajuste-border-tabla.texto-left Protocolo de aislamiento, identificación y control de animales en tratamiento.
                td.texto-left Art. 5.1.3
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Registro de enfermedades
                td.ajuste-border-tabla.texto-left Registro de diagnósticos, mortalidades, fechas, identificación animal y responsable.
                td.texto-left Art. 5.1.4
              tr
                td.ajuste-border-tabla.texto-left Instructivo sanitario
                td.ajuste-border-tabla.texto-left Documento sobre enfermedades de control oficial y rutas de notificación al ICA.
                td.texto-left Art. 5.1.5
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Área de enfermería
                td.ajuste-border-tabla.texto-left Espacio identificado para aislamiento y tratamiento de animales.
                td.texto-left Art. 5.1.6
              tr
                td.ajuste-border-tabla.texto-left Control de mastitis
                td.ajuste-border-tabla.texto-left Programa documentado con diagnóstico, registros y manejo de casos positivos.
                td.texto-left Art. 5.1.7
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Cuarentena
                td.ajuste-border-tabla.texto-left Procedimiento de ingreso con aislamiento mínimo de 21 días.
                td.texto-left Art. 5.3.3
              tr
                td(rowspan="12").ajuste-border-tabla.texto-left #[b Medicamentos Veterinarios (BPMV)]
                td.ajuste-border-tabla.texto-left Registro ICA
                td.ajuste-border-tabla.texto-left Uso exclusivo de productos con registro ICA vigente.
                td.texto-left Art. 8.1
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Vigencia productos
                td.ajuste-border-tabla.texto-left Medicamentos no vencidos y sin alteraciones físicas.
                td.texto-left Art. 8.2
              tr
                td.ajuste-border-tabla.texto-left Almacenamiento
                td.ajuste-border-tabla.texto-left Condiciones adecuadas, clasificación y control de temperatura.
                td.texto-left Art. 8.3 – 8.5
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Sustancias prohibidas
                td.ajuste-border-tabla.texto-left Prohibición de uso de sustancias no autorizadas.
                td.texto-left Art. 8.6
              tr
                td.ajuste-border-tabla.texto-left Uso de materias primas
                td.ajuste-border-tabla.texto-left Prohibido uso directo como promotores o terapéuticos.
                td.texto-left Art. 8.7
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tiempo de retiro
                td.ajuste-border-tabla.texto-left Cumplimiento y registro de tiempos de retiro, identificación de animales.
                td.texto-left Art. 8.8
              tr
                td.ajuste-border-tabla.texto-left Prescripción veterinaria
                td.ajuste-border-tabla.texto-left Soporte escrito del MV o MVZ para tratamientos requeridos.
                td.texto-left Art. 8.9 – 8.15
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Registros de tratamientos
                td.ajuste-border-tabla.texto-left Registro detallado (medicamento, dosis, lote, animal, responsable).
                td.texto-left Art. 8.10
              tr
                td.ajuste-border-tabla.texto-left Equipos
                td.ajuste-border-tabla.texto-left Equipos limpios, desinfectados y uso de agujas desechables.
                td.texto-left Art. 8.11 – 8.12
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Inventario
                td.ajuste-border-tabla.texto-left Control de entradas, salidas y existencias de medicamentos.
                td.texto-left Art. 8.13
              tr
                td.ajuste-border-tabla.texto-left Personal autorizado
                td.ajuste-border-tabla.texto-left Aplicación por personal capacitado y autorizado.
                td.texto-left Art. 8.14
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Eventos adversos
                td.ajuste-border-tabla.texto-left Notificación obligatoria al ICA.
                td.texto-left Art. 8.16
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img69.svg" style="max-width: 60px").m-auto
      .col
        h3 Objetivos de las buenas prácticas ganaderas bovina 
    p.mb-5 Entender de manera clara y práctica cómo las Buenas Prácticas Ganaderas impactan la producción bovina es vital y para ello, tenemos un pódcast. A lo largo del episodio se descubrirá cómo la inocuidad, el control de enfermedades, el bienestar animal, la protección ambiental y la trazabilidad se integran para garantizar una producción segura, responsable y competitiva.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img13.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Objetivos de las buenas prácticas ganaderas bovina"
              :audio="require('@/assets/componentes/audios/Objetivos_buenas_practicas_ganaderas_bovina.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img14.png" ).m-auto
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Conducción e inmovilización de animales
    p.mb-5 La conducción e inmovilización de bovinos debe realizarse de forma segura y humanitaria, garantizando el bienestar animal y la seguridad del operario, además de facilitar los procedimientos y reducir riesgos. Los aspectos clave son:
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img15.jpg', alt="" ).m-auto
            h4.text-center Conducción: desplazamiento seguro del animal
            .box___card_sinbordes_p
              p Para realizar el desplazamiento seguro del animal se requiere:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso de mangas, corrales y pasillos diseñados adecuadamente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar golpes, gritos o el uso de elementos agresivos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aprovechar el comportamiento natural del bovino, especialmente su zona de fuga. 
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img16.jpg', alt="" ).m-auto
            h4.text-center Inmovilización: control seguro para procedimientos
            .box___card_sinbordes_p
              p El control seguro para procedimientos consiste en:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso de bretes o cepos para un manejo controlado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Sujeción manual en procedimientos menores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de sedación cuando sea necesario, bajo supervisión veterinaria. 
    p.mb-5 Este la tabla 2 presenta de forma clara y práctica los principios básicos para el manejo seguro del bovino, orientando acciones que protegen al animal y al operario.
    .row.justify-content-center.mb-0
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Cuadro didáctico: manejo seguro del bovino
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Etapa
                th.ajuste-border-tabla.texto-left ¿Qué hacer?
                th.texto-left ¿Por qué es importante?
            tbody
              tr
                td.ajuste-border-tabla.texto-left Conducción
                td.ajuste-border-tabla.texto-left Guiar con calma y sin agresión
                td.texto-left Reduce estrés y evita accidentes
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Inmovilización
                td.ajuste-border-tabla.texto-left Usar brete o sujeción adecuada
                td.texto-left Facilita procedimientos seguros
              tr
                td.ajuste-border-tabla.texto-left Comportamiento
                td.ajuste-border-tabla.texto-left Respetar zona de fuga
                td.texto-left Mejora la eficiencia del manejo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Seguridad
                td.ajuste-border-tabla.texto-left Evitar elementos agresivos
                td.texto-left Protege al animal y al operario
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Reducción del estrés y manejo humanitario
    p.mb-5 El estrés en los bovinos afecta negativamente su salud, comportamiento y productividad, por lo que es fundamental implementar prácticas que lo minimicen en todas las etapas del manejo. A continuación, se presentan algunas recomendaciones y su importancia.
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img17.jpg', alt="" ).m-auto
            h4.text-center Prácticas recomendadas
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Realizar un manejo tranquilo, evitando la violencia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar la sobrecarga de animales en corrales o transporte. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reducir los tiempos de espera prolongados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Capacitar al personal en comportamiento animal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicar técnicas de manejo de bajo estrés (#[i Low Stress Handling]). 
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img18.jpg', alt="" ).m-auto
            h4.text-center Importancia del manejo adecuado
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejora la calidad de la carne (pH y textura). 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disminuye pérdidas productivas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reduce el riesgo de enfermedades. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Favorece el cumplimiento de normativas de bienestar animal. 

</template>

<script>
export default {
  name: 'Tema2',
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
