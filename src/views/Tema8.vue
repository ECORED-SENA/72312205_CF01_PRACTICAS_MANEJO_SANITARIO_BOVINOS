<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Enfermedades y tratamientos en bovinos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1(data-aos="fade-right")
          p.mb-0 Las enfermedades en bovinos afectan la salud del hato y la productividad, por lo que requieren prevención y control mediante planes sanitarios. Su tratamiento debe basarse en diagnóstico veterinario, uso adecuado de medicamentos y cumplimiento de tiempos de retiro, garantizando sanidad, productividad e inocuidad.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img68.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Principales enfermedades
    p.mb-5 Las enfermedades en bovinos pueden clasificarse según su importancia sanitaria y su impacto en la producción. A continuación, se estudiarán las enfermedades de control oficial (ICA).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img69.svg" style="max-width: 60px").m-auto
      .col
        h3 Enfermedades de control oficial (ICA)
    p.mb-5 Son enfermedades de notificación obligatoria, bajo vigilancia del Estado debido a su impacto en la salud pública, la sanidad animal y la economía.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fiebre Aftosa
                p.mb-0 Enfermedad viral altamente contagiosa que afecta bovinos y otros animales. Presenta alta morbilidad en no vacunados y genera grandes pérdidas económicas, afectando el comercio internacional y la producción ganadera. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img70.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Encefalopatía Espongiforme Bovina (EEB)
                p.mb-0 Enfermedad neurológica degenerativa, progresiva y mortal del ganado adulto, causada por priones. Tiene largo periodo de incubación y representa riesgo para la salud pública y la producción.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tuberculosis bovina
                p.mb-0 Enfermedad infecciosa crónica causada por #[i Mycobacterium bovis], que forma lesiones granulomatosas. Es una zoonosis de importancia en salud pública y limita la comercialización de productos pecuarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estomatits Vesicular
                p.mb-0 Enfermedad viral que afecta bovinos y otras especies, causando lesiones en boca y patas. Puede transmitirse al ser humano y genera impacto sanitario y económico en la producción.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Brucelosis
                p.mb-0 Enfermedad bacteriana que provoca abortos en bovinos y afecta la reproducción. Es zoonótica, representa riesgo para la salud humana y afecta la productividad y el comercio ganadero.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Rabia bovina
                p.mb-0 Enfermedad viral mortal que afecta el sistema nervioso, transmitida por murciélagos. Provoca alteraciones neurológicas y muerte, siendo además una zoonosis de alto riesgo para humanos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.mb-5
      .col-xl-8
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img76.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p #[b Medidas obligatorias:]
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Vacunación (según programa nacional).
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Diagnóstico periódico.
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Notificación inmediata al ICA. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Restricción de movilización.
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img69.svg" style="max-width: 60px").m-auto
      .col
        h3 Enfermedades comunes en sistemas productivos (lechería y carne)
    p.mb-5 Las enfermedades más comunes en sistemas productivos son:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img11.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Mastitis").ajuste-cajaAcordion
            p.mb-3 Inflamación de la ubre, que puede presentarse de forma clínica o subclínica y afecta directamente la producción de leche.
          .row(titulo="Metritis").ajuste-cajaAcordion
            p.mb-3 Infección uterina que ocurre después del parto, generando problemas reproductivos en el animal.
          .row(titulo="Enfermedades podales").ajuste-cajaAcordion
            p.mb-3 Incluyen afecciones como dermatitis digital y cojeras, causando pérdida de movilidad y dificultad para desplazarse.
          .row(titulo="Enfermedades respiratorias").ajuste-cajaAcordion
            p.mb-3 Como neumonías en terneros, que pueden provocar alta mortalidad si no se controlan oportunamente.
          .row(titulo="Enfermedades digestivas").ajuste-cajaAcordion
            p.mb-3 Incluyen diarreas neonatales que ocasionan deshidratación y afectan la supervivencia de los animales jóvenes.
    p.mb-0 La mastitis es una de las principales causas de pérdidas económicas y refleja fallas en higiene y manejo.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Mecanismos de transmisión
    p.mb-5 Las enfermedades pueden propagarse por diferentes vías, lo que hace fundamental el control sanitario en el predio. Las enfermedades se pueden transmitir así:
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img77.png').m-auto
            h4.mb-3.estilo-text Directa
            p.mb-0.text-center Contacto entre animales (lamido, secreciones).
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img78.png').m-auto
            h4.mb-3.estilo-text Indirecta
            p.mb-0.text-center Equipos, ropa, instalaciones contaminadas.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img79.png').m-auto
            h4.mb-3.estilo-text Vectorial
            p.mb-0.text-center Insectos, garrapatas, murciélagos.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img80.png').m-auto
            h4.mb-3.estilo-text Alimentaria
            p.mb-0.text-center Agua o alimento contaminado.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img81.png').m-auto
            h4.mb-3.estilo-text Vertical
            p.mb-0.text-center Madre a cría (placenta, calostro).
        p.mb-0 El control de la transmisión de enfermedades en el marco de las Buenas Prácticas Ganaderas (BPG) depende de la implementación de medidas de bioseguridad, la adecuada limpieza y desinfección de instalaciones y equipos, y el manejo controlado del ingreso de animales al predio.
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.3 Diagnóstico básico, tratamientos y profilaxis
        p.mb-5 El diagnóstico básico permite detectar enfermedades; los tratamientos adecuados y la profilaxis, mediante vacunación y bioseguridad, previenen riesgos, protegen la salud del hato y mejoran la producción. En primer lugar, se conocerá lo que implicar realizar un diagnóstico en campo:
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="A. Evaluación clínica").ajuste-cajaAcordion
            p Consiste en realizar:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Medición de temperatura corporal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Frecuencia respiratoria. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Frecuencia cardíaca. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Observación del comportamiento general. 
          .row(titulo="B. Signos clínicos").ajuste-cajaAcordion
            p Se debe revisar:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presencia de secreciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cojeras o dificultad para caminar. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Inflamaciones visibles. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pérdida de apetito. 
          .row(titulo="C. Pruebas diagnósticas").ajuste-cajaAcordion
            p Las principales pruebas diagnósticas son:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b CMT (California Mastitis Test)]: se utiliza para detectar mastitis subclínica en bovinos, permitiendo identificar alteraciones en la leche que no son visibles a simple vista.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b RCS (Recuento de células somáticas)]: permite evaluar la calidad de la leche y detectar posibles infecciones en la ubre.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cultivo microbiológico]: se emplea para identificar las bacterias causantes de infecciones, facilitando la selección del tratamiento adecuado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Pruebas oficiales (ICA)]: se utilizan para el diagnóstico de enfermedades como brucelosis y tuberculosis, bajo lineamientos sanitarios establecidos.
            p.mb-3 El diagnóstico definitivo debe ser confirmado por un médico veterinario.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img82.png", alt="" ).m-auto
    p.mb-5 Por otra parte, el tratamiento de las enfermedades depende del agente causal y del estado del animal, mientras que la profilaxis tiene como objetivo prevenir su aparición. A continuación, se estudiarán cada uno de estos:
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img83.jpg', alt="" ).m-auto
            h4.text-center Tratamiento
            .box___card_sinbordes_p
              p Los tratamientos son:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Antibióticos: para infecciones bacterianas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Antiinflamatorios (AINEs): control del dolor y la fiebre. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Antiparasitarios: control de parásitos internos y externos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fluidoterapia: tratamiento de la deshidratación.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.fit___color_card-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img84.jpg', alt="" ).m-auto
            h4.text-center Profilaxis (prevención)
            .box___card_sinbordes_p
              p La profilaxis se hace a través de:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Programas de vacunación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Desparasitación periódica. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo nutricional adecuado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de medidas de bioseguridad. 
    p.mb-5 En la siguiente tabla se presentan los principales tratamientos y medidas de profilaxis en bovinos, destacando su acción, ejemplos y objetivos para controlar enfermedades y fortalecer la salud del hato.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Tratamientos y profilaxis en bovinos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tipo
                th.ajuste-border-tabla.texto-left Acción
                th.ajuste-border-tabla.texto-left Ejemplo
                th.texto-left Objetivo
            tbody
              tr
                td.ajuste-border-tabla.texto-left Tratamiento
                td.ajuste-border-tabla.texto-left Antibióticos
                td.ajuste-border-tabla.texto-left Infecciones bacterianas
                td.texto-left Eliminar el agente causal
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tratamiento
                td.ajuste-border-tabla.texto-left Antiinflamatorios
                td.ajuste-border-tabla.texto-left Fiebre, dolor
                td.texto-left Reducir inflamación y malestar
              tr
                td.ajuste-border-tabla.texto-left Tratamiento
                td.ajuste-border-tabla.texto-left Antiparasitarios
                td.ajuste-border-tabla.texto-left Parásitos internos/externos
                td.texto-left Controlar infestaciones
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tratamiento
                td.ajuste-border-tabla.texto-left Fluidoterapia
                td.ajuste-border-tabla.texto-left Deshidratación
                td.texto-left Restablecer líquidos y electrolitos
              tr
                td.ajuste-border-tabla.texto-left Profilaxis
                td.ajuste-border-tabla.texto-left Vacunación
                td.ajuste-border-tabla.texto-left Fiebre aftosa, brucelosis
                td.texto-left Prevenir enfermedades
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Profilaxis
                td.ajuste-border-tabla.texto-left Desparasitación
                td.ajuste-border-tabla.texto-left Control periódico
                td.texto-left Reducir carga parasitaria
              tr
                td.ajuste-border-tabla.texto-left Profilaxis
                td.ajuste-border-tabla.texto-left Manejo nutricional
                td.ajuste-border-tabla.texto-left Dieta balanceada
                td.texto-left Fortalecer el sistema inmune
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Profilaxis
                td.ajuste-border-tabla.texto-left Bioseguridad
                td.ajuste-border-tabla.texto-left Control de ingreso, desinfección
                td.texto-left Evitar transmisión de enfermedades
    p.mb-0 La prevención es más económica y efectiva que el tratamiento, ya que reduce la incidencia de enfermedades y mejora la productividad del sistema.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Aplicación de tratamientos veterinarios
    p.mb-5 La aplicación de tratamientos veterinarios garantiza la salud animal, la productividad y la inocuidad; incluye procedimientos técnicos, buenas prácticas y registro obligatorio.
    .box___style_5.p-5.mb-3(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          h4 Procedimiento técnico
          p El tratamiento debe realizarse siguiendo criterios clínicos y técnicos:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Diagnóstico previo]: Evaluación realizada por un médico veterinario para identificar la enfermedad. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Selección del medicamento adecuado]: Elección del fármaco según el agente causal y su eficacia comprobada. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Dosis según peso]: Cálculo preciso basado en el peso vivo del animal para evitar subdosificación o sobredosificación. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Vía de administración correcta]: Aplicación según indicación técnica (intramuscular – IM, subcutánea – SC, intravenosa – IV u oral). 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img85.png', alt="" ).m-auto
    .box___style_5.p-5.mb-3(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          h4 Buenas prácticas en la aplicación
          p Para asegurar la eficacia del tratamiento y el bienestar animal:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Uso de agujas estériles y material adecuado. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Desinfección del sitio de aplicación para prevenir infecciones secundarias. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Manejo adecuado del animal para reducir el estrés y evitar accidentes. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Registro completo del tratamiento aplicado. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img86.png', alt="" ).m-auto
    .box___style_5.p-5.mb-0(data-aos="zoom-in")
      h4 Registro obligatorio de tratamientos
      p El registro de tratamientos es esencial para la trazabilidad sanitaria y el cumplimiento del ICA y las BPG; a continuación, se presenta la información que debe incluir.
      .row.justify-content-center.mb-0
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 5.
            span Formato de registro de tratamientos veterinarios
          .tabla-a(data-aos="zoom-in")
            table
              caption Nota: Este registro es obligatorio según la normativa del ICA y las BPG.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Campo
                  th.texto-left Descripción
              tbody
                tr
                  td.ajuste-border-tabla.texto-left Fecha
                  td.texto-left Día de aplicación
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left Animal
                  td.texto-left Identificación del animal
                tr
                  td.ajuste-border-tabla.texto-left Diagnóstico
                  td.texto-left Enfermedad identificada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left Medicamento
                  td.texto-left Nombre comercial del producto
                tr
                  td.ajuste-border-tabla.texto-left Dosis
                  td.texto-left Cantidad aplicada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left Vía
                  td.texto-left IM, SC, IV, oral, etc.
                tr
                  td.ajuste-border-tabla.texto-left Lote
                  td.texto-left Número del producto
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left Registro ICA
                  td.texto-left Verificación de legalidad
                tr
                  td.ajuste-border-tabla.texto-left Tiempo de retiro
                  td.texto-left Periodo para carne o leche
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left Responsable
                  td.texto-left Firma del encargado
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Plan sanitario del hato (Integración)
    p.mb-5 El plan sanitario es un documento obligatorio que integra todas las acciones preventivas y de control para mantener la salud del hato.
    .row.justify-content-center.mb-0
      .col-xl-8
        .box___style_2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img87.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p Debe incluir:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cronograma de vacunación. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Programas de desparasitación. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Protocolos de bioseguridad. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estrategias de manejo de enfermedades. 
                li.mb-1
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registros sanitarios actualizados. 
              p.mb-0 #[b Nota]: Es un requisito indispensable para la certificación en Buenas Prácticas Ganaderas (BPG) exigidas por el ICA.
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.6 Monitoreo y seguimiento sanitario
    p.mb-5 El monitoreo sanitario permite evaluar continuamente la condición de salud del hato y la efectividad de las medidas implementadas. Su importancia y componentes son:
    .row.justify-content-center.mb-0
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Importancia del monitoreo").ajuste-cajaAcordion
            .col-xl-7.mb-4.mb-lg-0.fit___vineta-acordion
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Detección temprana de enfermedades. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evaluación de la eficacia de los tratamientos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejora en la productividad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplimiento de la normativa sanitaria vigente. 
            .col-xl-5
              figure
                img(src='@/assets/curso/temas/img88.png', alt='' style="width: 350px").m-auto
          .row(titulo="Componentes del monitoreo").ajuste-cajaAcordion
            .col-xl-7.mb-4.mb-lg-0.fit___vineta-acordion
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registros continuos y sistemáticos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evaluación de indicadores sanitarios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Implementación de acciones correctivas. 
            .col-xl-5
              figure
                img(src='@/assets/curso/temas/img89.png', alt='' style="width: 350px").m-auto
          .row(titulo="Beneficios").ajuste-cajaAcordion
            .col-xl-7.mb-4.mb-lg-0.fit___vineta-acordion
              p.ajuste__p-acordion Un adecuado manejo sanitario y control de enfermedades permite:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar la producción de leche y carne. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reducir pérdidas económicas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Proteger la salud pública. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplir con la normativa del ICA.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Garantizar la inocuidad de los alimentos.
            .col-xl-5
              figure
                img(src='@/assets/curso/temas/img90.png', alt='' style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Tema8',
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
