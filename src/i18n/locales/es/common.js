import { es as legacyEs } from '../es.js';

export const nav = legacyEs.nav;
export const footer = legacyEs.footer;

export const seo = {
  ...legacyEs.seo,
  pages: {
    ...legacyEs.seo.pages,
    portal: {
      title: 'El Portal – Gestión de solicitudes de juegos de mesa',
      description:
        'Pubblo Portal: plataforma de solicitudes para editoriales de juegos de mesa. Puntuación automática de pitch, búsqueda de títulos y revisión en equipo.',
    },
    marketplace: {
      title: 'El Marketplace — descubre y publica fichas de juegos',
      description:
        'Marketplace de juegos de mesa en Pubblo: publica fichas, presenta pitch a editoriales y encuentra socios de localización — sin correos en frío.',
    },
    pitch: {
      title: 'La herramienta Pitch – Pitch deck y sell sheet de juegos de mesa',
      description:
        'Crea un pitch deck de juego de mesa y exporta un sell sheet con Pubblo. Herramienta Pitch para llegar a editoriales con una solicitud lista para decidir.',
    },
    briefs: {
      title: 'Briefs – Próximamente',
      description:
        'Pubblo Briefs permitirá a editoriales y titulares de IP publicar solicitudes de juegos estructuradas y conectar con creadores de juegos. Próximamente.',
    },
    users: {
      title: 'Para editoriales, creadores de juegos y distribuidores',
      description:
        'Descubre quién usa Pubblo: editoriales que gestionan solicitudes, creadores de juegos que presentan pitch y distribuidores que buscan títulos para nuevos mercados.',
    },
    compare: {
      title: 'Pubblo vs directorios de pitch, CRM y ferias',
      description:
        'Compara Pubblo con directorios de pitch, servicios de conexión, ferias y CRM. Por qué un marketplace supera comprar listas o directorios de editoriales.',
    },
    pricing: {
      title: 'Precios – Marketplace y herramienta Pitch',
      description:
        'Precios Pubblo para marketplace de juegos de mesa y herramienta Pitch. Planes para editoriales, distribuidores y creadores — gratis para empezar.',
    },
    company: {
      title: 'Sobre Pubblo',
      description:
        'Conoce al equipo Pubblo y descubre cómo construimos el marketplace de juegos de mesa que conecta creadores de juegos, editoriales y distribuidores en todo el mundo.',
    },
    news: {
      title: 'Noticias',
      description:
        'Últimas noticias de Pubblo: lanzamientos del Marketplace, alianzas, Game Inventors Convention 2027 y novedades de la industria del juego de mesa.',
    },
    guides: {
      title: 'Guías de edición de juegos de mesa',
      description:
        'Guías para creadores de juegos y editoriales: editoriales abiertas a solicitudes, consejos de pitch y cómo ser descubierto en Pubblo.',
    },
    contact: {
      title: 'Contacto',
      description:
        'Contacta con Pubblo para reservar una demo, preguntar sobre pitch a editoriales de juegos de mesa, localización o solicitudes en el Marketplace.',
    },
    privacy: {
      title: 'Política de privacidad',
      description:
        'Cómo Pubblo AB recopila, usa y protege datos personales en la plataforma marketplace de juegos de mesa, conforme al RGPD.',
    },
    terms: {
      title: 'Términos y condiciones',
      description:
        'Términos y condiciones Pubblo para usar el marketplace de juegos de mesa, la plataforma de solicitudes y servicios relacionados.',
    },
    gic2027: {
      title: 'Alianza Game Inventors Convention 2027',
      description:
        'Pubblo impulsa la plataforma de solicitudes detrás de Game Inventors Convention 2027 en Spielwarenmesse. Plataforma de marca blanca para ferias, concursos y socios de la industria.',
    },
  },
  landing: {
    'pitch-to-publishers': {
      title: 'Presenta tu juego de mesa a editoriales | Pubblo',
      description:
        'Presenta tu juego de mesa a editoriales con un pitch estandarizado, sin correos en frío. Las editoriales ya buscan — gratis para empezar.',
    },
    'localization-partners': {
      title: 'Socios de localización para juegos de mesa | Pubblo',
      description:
        '¿Juego ya publicado? Encuentra distribuidores y socios de localización para nuevos mercados — perfiles estandarizados, editoriales verificadas.',
    },
    'skip-the-publisher-list': {
      title: 'Deja de comprar listas de editoriales — haz que te descubran | Pubblo',
      description:
        'Alternativa a comprar listas de editoriales de juegos de mesa: publica tu pitch y deja que las editoriales adecuadas te encuentren. Gratis para empezar.',
    },
  },
};
