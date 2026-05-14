<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de conocimientos en manejo sanitario de bovinos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión y apropiación de los conocimientos relacionados con la sanidad y bioseguridad en sistemas de producción bovina, incluyendo normas de seguridad y salud en el trabajo, bienestar animal, manejo de medicamentos, limpieza y desinfección, y aplicación de planes sanitarios, con el fin de verificar el desarrollo de competencias técnicas orientadas a la producción ganadera segura, eficiente e inocua.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la Seguridad y Salud en el Trabajo (SST)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger la salud, integridad y bienestar laboral.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la producción sin control sanitario alguno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir costos eliminando equipos de protección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizar el rendimiento sobre la seguridad laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un elemento de protección personal en bovinos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balde metálico para el ordeño del animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guantes de látex o nitrilo para protección.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Manga de manejo para conducción animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Báscula ganadera para control de peso vivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué rango de temperatura se debe mantener para biológicos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entre 10 °C y 20 °C durante almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre 0 °C y 2 °C en todo momento requerido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre 2 °C y 8 °C durante su conservación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Entre 15 °C y 25 °C en el transporte normal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es un riesgo biológico en actividades sanitarias?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Golpes ocasionados por el manejo del animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exposición a bacterias, virus o parásitos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de herramientas en mal estado general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Posturas incorrectas durante el trabajo diario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué relación existe entre SST, bienestar animal e inocuidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existe relación directa entre estos conceptos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo aplica en sistemas industriales avanzados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Son independientes en la producción ganadera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Están integrados y mejoran calidad productiva.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué describe el bienestar animal correctamente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado físico y mental según condiciones de vida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo la ausencia de enfermedades visibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente el aumento de productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente el acceso a alimento constante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una de las cinco libertades del bienestar animal?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libre de hambre y sed permanentemente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Libre de intervención humana en todo momento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Libre de reproducción en sistemas productivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libre de contacto con otros animales siempre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué beneficio tiene el bienestar animal en la producción?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la necesidad de registros sanitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuye la productividad del sistema ganadero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejora la salud y aumenta la productividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina completamente las enfermedades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué entidad regula la sanidad animal en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Educación Nacional de Colombia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Instituto Colombiano Agropecuario ICA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organización Mundial de la Salud global.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Secretaría de Movilidad municipal local.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué son las Buenas Prácticas Ganaderas (BPG)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas solo enfocadas en la producción lechera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medidas técnicas para alimentos seguros y calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Actividades opcionales sin la regulación oficial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategias comerciales sin la base sanitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué se debe hacer con animales enfermos según BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclarlos con el resto del hato productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar síntomas hasta que desaparezcan solos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aislarlos y aplicar protocolos de tratamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sacrificarlos inmediatamente sin evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es un ejemplo de implemento sanitario?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Jeringa utilizada para aplicar medicamentos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Manga ganadera para inmovilizar animales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema de ventilación en las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Báscula electrónica para pesaje del ganado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza a los equipos sanitarios?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son materiales desechables de uso inmediato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son dispositivos que facilitan procedimientos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son únicamente productos químicos activos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son alimentos suplementarios para bovinos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el primer paso en limpieza y desinfección?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar directamente el desinfectante químico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Secar completamente la superficie tratada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Remover residuos sólidos y materia orgánica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enjuagar con abundante agua sin detergente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué tipo de desinfección usa sustancias químicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desinfección mecánica mediante presión de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desinfección física mediante vapor caliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desinfección manual con herramientas básicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desinfección química con agentes específicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es un medicamento veterinario común?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Antibióticos para infecciones bacterianas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Detergentes para limpieza de instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desinfectantes para superficies externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Equipos de ordeño en producción lechera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué función tienen las vacunas en bovinos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tratar enfermedades ya desarrolladas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar inmunidad preventiva en animales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el peso sin control sanitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir completamente los tratamientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es una vía de administración de medicamentos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mecánica mediante equipos industriales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Intramuscular aplicada en el músculo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ambiental mediante dispersión aérea.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nutricional mediante alimentos balanceados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué debe incluir un plan sanitario?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo registros de producción diaria del hato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actividades recreativas del personal rural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cronogramas de vacunación y desparasitación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente información financiera del predio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Por qué es importante el registro sanitario?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para cumplir únicamente requisitos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para evitar el uso de medicamentos legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para documentar y controlar actividades sanitarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para eliminar la trazabilidad en producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
