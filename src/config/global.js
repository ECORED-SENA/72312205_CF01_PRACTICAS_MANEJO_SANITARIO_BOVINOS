export default {
  global: {
    Name: 'Sanidad y bioseguridad en sistemas de producción bovina',
    Description:
      'Este componente formativo aborda principios, prácticas y normatividad de la sanidad bovina, incluyendo bienestar animal, manejo de enfermedades, uso responsable de medicamentos, bioseguridad y Buenas Prácticas Ganaderas. Desarrolla competencias en prevención, diagnóstico y control sanitario del hato, garantizando inocuidad alimentaria e integrando conocimientos teóricos y prácticos para una producción sostenible, eficiente y acorde al sector agropecuario actual y competitivo global.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normas de seguridad y salud en el trabajo (SST)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de SST',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos de protección personal (EPP)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manejo seguro de medicamentos y biológicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Prevención de riesgos laborales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Aplicación de normas SST en actividades sanitarias',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Relación entre SST, bienestar animal e inocuidad',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y principios del bienestar animal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo adecuado del bovino',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relación con la sanidad y productividad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Buenas prácticas ganaderas (BPG)',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Conducción e inmovilización de animales',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Reducción del estrés y manejo humanitario',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normativa sanitaria vigente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Legislación aplicable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Requisitos sanitarios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos oficiales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Responsabilidades del productor',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Aplicación de la normativa sanitaria en campo',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Normativa sobre bienestar animal y uso de medicamentos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Implementos, equipos e insumos sanitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y clasificación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Uso adecuado según actividad sanitaria',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Mantenimiento y almacenamiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Selección de equipos e insumos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Relación con Buenas Prácticas Ganaderas (BPG)',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Limpieza, higiene y desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conceptos básicos e importancia en la sanidad animal',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de limpieza y desinfección',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procedimientos y protocolos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Insumos utilizados',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Preparación de soluciones desinfectantes e higienización de áreas de trabajo',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Relación con BPG y bioseguridad',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Medicamentos y biológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y clasificación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Tipos de medicamentos veterinarios y biológicos: vacunas y sueros',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Conservación y manejo',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Indicaciones de uso',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Disposición y organización de medicamentos',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo:
              'Buenas prácticas en la aplicación de medicamentos veterinarios',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Técnicas de administración de medicamentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Vías de administración',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Técnicas de aplicación (según BPG)',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Manejo del animal durante el procedimiento',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Cuidados post-aplicación',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Buenas prácticas en la aplicación de medicamentos',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Impacto en la inocuidad y calidad del producto',
            hash: 't_7_6',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Enfermedades y tratamientos en bovinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Principales enfermedades',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Mecanismos de transmisión',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Diagnóstico básico, tratamientos y profilaxis',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Aplicación de tratamientos veterinarios',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Plan sanitario del hato (Integración)',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Monitoreo y seguimiento sanitario',
            hash: 't_8_6',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Plan y cronograma sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Concepto e importancia',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Componentes del plan sanitario',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Elaboración del cronograma',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Seguimiento y control',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Interpretación de protocolos sanitarios',
            hash: 't_9_5',
          },
          {
            numero: '9.6',
            titulo: 'Registro de información sanitaria',
            hash: 't_9_6',
          },
          {
            numero: '9.7',
            titulo: 'Integración con Buenas Prácticas Ganaderas (BPG)',
            hash: 't_9_7',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Cálculos y operaciones matemáticas aplicadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Dosificación de medicamentos',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Cálculo de concentraciones',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Conversión de unidades',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Aplicación de procedimientos sanitarios',
            hash: 't_10_4',
          },
          {
            numero: '10.5',
            titulo: 'Importancia en la aplicación segura de tratamientos',
            hash: 't_10_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas preventivas destinadas a evitar la entrada y propagación de agentes patógenos en el sistema productivo.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'estado físico y mental del animal en relación con las condiciones en las que vive, garantizando salud, comodidad y ausencia de sufrimiento.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'mantenimiento de temperaturas adecuadas para conservar la eficacia de medicamentos y biológicos.',
    },
    {
      termino: 'Cronograma sanitario',
      significado:
        'herramienta que organiza en el tiempo las actividades sanitarias del sistema productivo.',
    },
    {
      termino: 'Desinfección',
      significado:
        'proceso de eliminación de microorganismos patógenos mediante agentes químicos o físicos.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'proceso de identificación de una enfermedad mediante evaluación clínica y pruebas.',
    },
    {
      termino: 'Elementos de protección personal (EPP)',
      significado:
        'dispositivos utilizados por el trabajador para protegerse de riesgos durante las actividades laborales.',
    },
    {
      termino: 'Equipos sanitarios',
      significado:
        'dispositivos que facilitan el manejo y control de los animales, como mangas o básculas.',
    },
    {
      termino: 'Higiene',
      significado:
        'conjunto de prácticas destinadas a mantener condiciones sanitarias adecuadas.',
    },
    {
      termino: 'Implementos sanitarios',
      significado:
        'herramientas de uso manual empleadas en procedimientos como jeringas, agujas o termómetros.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'condición que garantiza que los alimentos no representen riesgos para la salud del consumidor.',
    },
    {
      termino: 'Insumos sanitarios',
      significado:
        'materiales de consumo utilizados en procedimientos, como medicamentos y desinfectantes.',
    },
    {
      termino: 'Medicamentos veterinarios',
      significado:
        'sustancias utilizadas para prevenir, controlar o tratar enfermedades en animales.',
    },
    {
      termino: 'Profilaxis',
      significado:
        'conjunto de medidas preventivas destinadas a evitar la aparición de enfermedades.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'documento técnico que integra acciones de prevención, control y tratamiento para mantener la salud del hato.',
    },
    {
      termino: 'Sanidad bovina',
      significado:
        'conjunto de prácticas orientadas a prevenir, controlar y tratar enfermedades en el ganado bovino para garantizar su salud y productividad.',
    },
    {
      termino: 'Seguridad y Salud en el Trabajo (SST)',
      significado:
        'conjunto de normas y procedimientos orientados a proteger la salud y seguridad de los trabajadores.',
    },
    {
      termino: 'Sueros',
      significado:
        'biológicos que proporcionan inmunidad inmediata de forma pasiva.',
    },
    {
      termino: 'Tiempo de retiro',
      significado:
        'periodo que debe transcurrir entre la aplicación de un medicamento y el consumo de productos del animal.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de seguir el historial sanitario y productivo de un animal.',
    },
    {
      termino: 'Vacunas',
      significado:
        'biológicos que generan inmunidad activa para prevenir enfermedades en los animales.',
    },
    {
      termino: 'Zoonosis',
      significado:
        'enfermedades que pueden transmitirse de los animales a los seres humanos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 067449 de 2020: requisitos para la certificación en buenas prácticas ganaderas en la producción de bovinos. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/normatividad/normas/2020/resolucion-067449-de-2020.pdf.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 068167 de 2020: requisitos para la certificación en buenas prácticas ganaderas en bovinos de carne y/o bufalinos. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/normatividad/normas/2020/resolucion-068167-de-2020.pdf.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2023). Manual de buenas prácticas ganaderas para bovinos. ICA. ',
      link:
        'https://www.ica.gov.co/areas/pecuaria/bovinos/manual-buenas-practicas-ganaderas',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2022). Política nacional de sanidad e inocuidad agropecuaria. Gobierno de Colombia. ',
      link: 'https://www.minagricultura.gov.co',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Lineamientos para el uso prudente de antimicrobianos en producción animal. Gobierno de Colombia. ',
      link: 'https://www.minsalud.gov.co',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2021). Buenas prácticas ganaderas para la producción de carne y leche. FAO. ',
      link: 'https://www.fao.org/animal-production/es',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (OMSA). (2023). Código sanitario para los animales terrestres. OMSA. ',
      link: 'https://www.woah.org/es/que-hacemos/normas/codigo-terrestre/',
    },
    {
      referencia:
        'República de Colombia. (2007). Decreto 1500 de 2007: sistema oficial de inspección, vigilancia y control de la carne y productos cárnicos comestibles. Diario Oficial. ',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_1500_2007.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recuersos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
