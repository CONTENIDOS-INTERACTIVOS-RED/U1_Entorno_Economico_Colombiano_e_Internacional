export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la economía',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El problema económico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La escasez de recursos y la necesidad de elegir ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Preguntas fundamentales de la economía: ¿qué producir?, ¿cómo producir? y ¿para quién producir?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Costos de oportunidad y toma de decisiones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Valor económico ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Concepto de valor económico: valor de uso y valor de cambio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Factores que determinan el valor de los bienes y servicios',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Factores de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Tierra como recurso natural: características e importancia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Trabajo: habilidades humanas aplicadas a la producción',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Capital y emprendimiento: motores de crecimiento económico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sectores económicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Sector primario: explotación de recursos naturales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Sector secundario: transformación de materia primas en bienes',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Sector terciario: servicios y su papel en la economía moderna     ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Organización social para solucionar el problema económico     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo:
              'Sistemas económicos: capitalismo, socialismo y economías mixtas',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Mecanismos de coordinación económica: mercado y planificación central',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Rol del estado en la economía: intervención y regulación ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía. Grupo Editorial Patria.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/39385/?page=70',
    },
    {
      referencia:
        'Hernández Pérez, A. & Hernández Pérez, A. (2014). Economía. Editorial Digital UNID.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/lc/tecnologicadeloriente/titulos/41178/',
    },
    {
      referencia:
        'Burneo, K. (2016). Principios de economía: versión latinoamericana (2a ed.). Ecoe Ediciones.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/lc/tecnologicadeloriente/titulos/70446/',
    },
    {
      referencia: 'Marx, K. (2004). El capital Tomo I. El Cid Editor. ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/35575/?page=1 ',
    },
    {
      referencia:
        'Olivera Novelo, J. (2015). Fundamentos de economía. Editorial Digital UNID.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/41176/?page=51',
    },
    {
      referencia:
        'Olivera Novelo, J. (2015). Fundamentos de economía. Editorial Digital UNID.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/41176/?page=51',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía. Grupo Editorial Patria.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/39385/?page=70',
    },
    {
      referencia:
        'Burneo, K. (2016). Principios de economía: versión latinoamericana (2a ed.). Ecoe Ediciones.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/lc/tecnologicadeloriente/titulos/70446/',
    },
    {
      referencia:
        'Hernández Pérez, A. & Hernández Pérez, A. (2014). Economía. Editorial Digital UNID.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41178',
    },
    {
      referencia:
        'Gaviria Mahecha, R. A. Guardiola Esmeral, A. R. & Ríos Giraldo, A. L. D. L. (2023). Sectores económicos en Colombia y su impacto en el comercio internacional. Fondo Editorial Universidad Cooperativa de Colombia.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/246449/?page=18',
    },
    {
      referencia:
        'Hernández Pérez, A. & Hernández Pérez, A. (2014). Economía. Editorial Digital UNID.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/lc/tecnologicadeloriente/titulos/41178/',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía. Grupo Editorial Patria.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/39385/?page=70',
    },
    {
      referencia:
        'Moré Olivares, E. (2014). Sistemas económicos y modelos de economía moderna. Editorial Universidad Autónoma de Colombia.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/lc/tecnologicadeloriente/titulos/160309/',
    },
    {
      referencia:
        'Olivera Novelo, J. (2015). Fundamentos de economía. Editorial Digital UNID.  ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/ereader/tecnologicadeloriente/41176/?page=37',
    },
    {
      referencia:
        'Gaviria Mahecha, R. A. Guardiola Esmeral, A. R. & Ríos Giraldo, A. L. D. L. (2023). Sectores económicos en Colombia y su impacto en el comercio internacional: (1 ed.). Fondo Editorial Universidad Cooperativa de Colombia. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/246449?page=18 ',
    },
    {
      referencia:
        'Ortega Cárdenas, A. (2016). Economía colombiana: (5 ed.). Ecoe Ediciones.    ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70458?page=1',
    },
    {
      referencia:
        'Montero Olivares, S. (Comp.). (2020). Repensando el desarrollo económico local desde Colombia: (ed.). Universidad de los Andes. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/171624 ',
    },
    {
      referencia:
        'Cortés Cortés, D. Posso, C. & Villamizar-Villegas, M. (2022). Covid-19: consecuencias y desafíos en la economía colombiana. Una mirada desde las universidades: (1 ed.). Editorial Universidad del Rosario. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/219879?page=1 ',
    },
    {
      referencia:
        'Ortega Cárdenas, A. (2016). Economía colombiana: (5 ed.). Ecoe Ediciones.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70458?page=1',
    },
    {
      referencia:
        'Caballero Argáez, C. E. & Machado Rodríguez, G. D. (2023). Crisis y reformas: los desafíos de la economía colombiana en la tercera década del siglo XXI: (1 ed.). Universidad de los Andes. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/246231?page=9 ',
    },
    {
      referencia:
        'Reina, M., Zuluaga, S., & Rozo, M. (2006). El papel del Gobierno y la política fiscal. Departamento de Comunicación Institucional Banco de la República.  ',
      link:
        'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/guia3_el_papel_del_gobierno.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Costo de oportunidad',
      significado:
        'Valor del recurso al que se renuncia al tomar una decisión económica, es decir, el beneficio perdido de la mejor alternativa no elegida.',
    },
    {
      termino: 'Economía',
      significado:
        'Ciencia social que estudia cómo las sociedades administran recursos para satisfacer necesidades ilimitadas.',
    },
    {
      termino: 'Escasez',
      significado:
        'Situación en la cual los recursos disponibles no son suficientes para producir todos los bienes y servicios que la sociedad desea consumir.',
    },
    {
      termino: 'Factores de producción',
      significado:
        'Recursos necesarios para producir bienes y servicios: tierra, trabajo, capital y emprendimiento.',
    },
    {
      termino: 'Sector primario',
      significado:
        'Conjunto de actividades económicas dedicadas a la explotación directa de los recursos naturales, como la agricultura, la pesca o la minería.',
    },
    {
      termino: 'Sector secundario',
      significado:
        'Actividades relacionadas con la transformación de materias primas en productos elaborados, como la industria manufacturera y la construcción.',
    },
    {
      termino: 'Sector terciario',
      significado:
        'Actividades que ofrecen servicios a la población o a otras empresas, como el comercio, la educación, la salud y transporte.',
    },
    {
      termino: 'Utilidad',
      significado:
        'Satisfacción o beneficio que un individuo obtiene del consumo de un bien o servicio.',
    },
    {
      termino: 'Valor de cambio',
      significado:
        'Capacidad de un bien para intercambiarse por otros bienes o servicios en el mercado.',
    },
    {
      termino: 'Valor de uso',
      significado:
        'Utilidad o capacidad que tiene un bien para satisfacer una necesidad o deseo.',
    },
  ],
}
