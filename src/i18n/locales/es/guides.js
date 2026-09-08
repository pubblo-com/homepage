export const guides = {
  ui: {
    hubTitle: 'Guías',
    hubIntro:
      'Lecturas prácticas para creadores de juegos y editoriales: quién acepta solicitudes, cómo presentar pitch sin correos en frío, y cómo encontrar socios en Pubblo.',
    hubSeoTitle: 'Guías de edición de juegos de mesa',
    hubSeoDescription:
      'Guías para creadores de juegos y editoriales: editoriales abiertas a solicitudes, consejos de pitch y cómo ser descubierto en Pubblo.',
    updatedLabel: 'Actualizado:',
    readGuide: 'Leer guía',
    backToGuides: '← Volver a guías',
    statusLabel: 'Estado:',
    faqTitle: 'FAQ',
    relatedPagesTitle: 'Saber más',
    relatedPagesAria: 'Páginas relacionadas de Pubblo',
    notFoundTitle: 'Guía no encontrada',
    notFoundBody: 'No hemos encontrado esta guía.',
    notFoundSeoTitle: 'Guía no encontrada',
    notFoundSeoDescription:
      'No hemos encontrado la guía de Pubblo solicitada.',
  },
  articles: {
    'board-game-publishers-accepting-submissions': {
      seo: {
        title:
          'Lista de editoriales de juegos de mesa que aceptan solicitudes (2026) | Pubblo',
        description:
          'Lista actualizada de editoriales de juegos de mesa abiertas a solicitudes (gratis), y por qué esperar no basta — alternativa a comprar listas en Pubblo.',
        exactTitle: true,
      },
      title: 'Editoriales de juegos de mesa que aceptan solicitudes ahora mismo',
      lastChecked: 'Septiembre de 2026',
      intro: [
        'Las ventanas de solicitud se abren y cierran todo el tiempo. Confirma siempre en la propia página de la editorial antes de enviar nada.',
        'Si has diseñado un juego y te preguntas quién está realmente abierto a escucharlo, probablemente ya descubriste la incómoda verdad: no hay una respuesta única, fiable y actualizada. Las webs de editoriales caducan. Los hilos de foros tienen tres años. Un tuit de «aceptamos solicitudes ahora mismo» de la primavera pasada ya es deseo. Aquí tienes una instantánea real y comprobada, además de por qué incluso una lista cuidadosa como esta solo resuelve la mitad del problema.',
        'Actualizaremos esta lista cuando podamos. También sabemos que, cuando la leas, al menos una línea de abajo probablemente ya esté desactualizada. No es descuido nuestro. Las ventanas de solicitud se mueven más rápido que cualquier artículo.',
      ],
      listTitle: 'Editoriales abiertas actualmente (a septiembre de 2026)',
      listIntro:
        'Los detalles siguientes resumen las propias páginas de solicitudes de cada editorial. Los criterios marcados con * son nuestra lectura de lo que buscan y pueden no captar todos los matices.',
      listDisclaimer:
        '*Verifica siempre requisitos, temas y expectativas de prototipo en la propia web de la editorial antes de enviar.',
      publishers: [
        {
          name: 'Stonemaier Games',
          status: 'Provisionalmente abierta.',
          fields: [
            {
              label: 'Buscan',
              text: '*Un juego ligero, cooperativo y muy rejugable para 3–7+ jugadores (tipo Just One o The Gang). En general: juegos de mesa de 1–2 horas (no RPG), de 2 a 5–6+ jugadores, una mecánica genuinamente nueva, sin eventos históricos, personas o religiones como temas.',
            },
            {
              label: 'Estado del prototipo',
              text: 'Completamente construido, pulido y con playtest exhaustivo. No una idea inicial.',
            },
            {
              label: 'Cómo enviar',
              text: 'Rellena el formulario de solicitud en su',
              link: {
                href: 'https://stonemaiergames.com/about/submission-guidelines/',
                label: 'página de directrices de solicitud',
                suffix: ', con sell sheet, vista visual y/o un vídeo corto de partida. Respuesta en aproximadamente un mes.',
              },
            },
          ],
        },
        {
          name: 'Inside Up Games',
          status: 'Abierta.',
          fields: [
            {
              label: 'Buscan',
              text: '*Juegos de mesa con tema fuerte, alta interacción entre jugadores, gancho claro y turnos fluidos, de 1–2 hasta 5–6+ jugadores.',
            },
            {
              label: 'Estado del prototipo',
              text: 'Completo y con playtest con reglas casi finales, incluyendo blind playtests (personas que pueden jugarlo sin que expliques nada).',
            },
            {
              label: 'Cómo enviar',
              text: 'Su',
              link: {
                href: 'https://insideupgames.com/game-design-submissions/',
                label: 'formulario Game Design Submissions',
                suffix: '. Prototipos digitales en Tabletopia o Tabletop Simulator muy preferidos; copias físicas aceptadas pero el envío corre por tu cuenta.',
              },
            },
          ],
        },
        {
          name: 'Board&Dice',
          status: 'Abierta.',
          fields: [
            {
              label: 'Buscan',
              text: '*Eurogames pesados y de peso medio (aprox. 2,7–4,1 en la escala BGG weight), 2–4 jugadores, 60–150 minutos, con mecánicas como worker placement, engine building, dice workers, area majority o rondels. Rechazan explícitamente interacción negativa, push-your-luck, juego en tiempo real, party games y family games.',
            },
            {
              label: 'Cómo enviar',
              text: 'Datos de contacto y directrices completas en su',
              link: {
                href: 'https://boardanddice.com/designer-submissions',
                label: 'página de solicitudes de creadores',
                suffix: '. Un vídeo de 2–3 minutos recorriendo las mecánicas centrales ayuda mucho.',
              },
            },
          ],
        },
        {
          name: 'The Op Games',
          status: 'Abierta, mediante un Inventor Submissions Program continuo.',
          fields: [
            {
              label: 'Buscan',
              text: '*Juegos de mesa de mercado masivo, edades 8+, 2+ jugadores, precio retail aprox. 19,99–29,99 $, alta interacción, turnos cortos, amplio atractivo familiar.',
            },
            {
              label: 'Estado del prototipo',
              text: 'Se requiere un prototipo jugable completo. No ideas en fase inicial.',
            },
            {
              label: 'Cómo enviar',
              text: 'Su proceso de varios pasos de',
              link: {
                href: 'https://theop.games/pages/inventor-submissions',
                label: 'Inventor Submissions',
                suffix: ' (registro, detalles del juego, prototipo, datos de contacto, más un Product Disclosure Agreement firmado). Dicen explícitamente que los pitch más fuertes empiezan con un sizzle video corto y enérgico.',
              },
            },
          ],
        },
        {
          name: 'Rock Manor Games',
          status: 'Abierta.',
          fields: [
            {
              label: 'Buscan',
              text: '*Juegos con tema o gancho poco convencional, en dos líneas: tentpole de crowdfunding 60+ $ (peso medio, 60+ minutos) y Bookbag games 30–40 $ (medio-ligero, 45+ minutos). Les atraen sci-fi, fantasy, horror, parques temáticos/hospitalidad y temas cozy; rechazan roll-and-move, TCGs, juegos políticos, wargames y abstractos puros.',
            },
            {
              label: 'Cómo enviar',
              text: 'Directrices y formulario en su',
              link: {
                href: 'https://rockmanorgames.com/game-submissions/',
                label: 'página de solicitudes de juegos',
                suffix: '. Un vídeo de partida ayuda, y señalan que los diseños language-independent se ven con buenos ojos.',
              },
            },
          ],
        },
      ],
      listFootnote: {
        parts: [
          {
            type: 'text',
            text: '¿Conoces una editorial que debería estar aquí, o has visto una que ha cerrado? ',
          },
          { type: 'link', to: '/contact', text: 'Avísanos' },
          {
            type: 'text',
            text: '. Si lees esto meses después y algo no cuadra, sí, probablemente ya lo sabemos. Solo que aún no hemos actualizado.',
          },
        ],
      },
      sections: [
        {
          title: 'El problema con cualquier lista como esta',
          paragraphs: [
            'Lo que nadie dice en voz alta: aunque esta lista fuera perfectamente exacta la hora en que la publicamos, solo te diría quién estaba abierto el día que la leíste. Las ventanas de solicitud no están realmente abiertas o cerradas tanto como son un objetivo móvil. Una editorial llena la agenda del año que viene y deja de leer pitch en silencio, o vacía el backlog y reabre sin anunciarlo.',
            'El consejo estándar — incluido el que vamos a darte — es marcar páginas como esta y volver a comprobar con regularidad. Semanalmente, si vas en serio. Escribimos una lista, así que estamos obligados a decirlo.',
            'También sabemos, porque mantenemos una, que «comprueba cada semana» significa sobre todo descubrir que algo cambió sin que nadie te avisara. ¿Deberías marcar esto y comprobarlo cada semana? En teoría, sí. En la práctica, confirmarás sobre todo que alguien cerró solicitudes hace tres días y nosotros aún no hemos actualizado. No es negligencia. Es lo que hacen las listas estáticas.',
          ],
          richParagraphs: [
            {
              parts: [
                {
                  type: 'text',
                  text: 'Directorios como ',
                },
                {
                  type: 'external',
                  href: 'https://cardboardedison.com/publisher-directory',
                  text: 'la lista de editoriales de Cardboard Edison',
                },
                {
                  type: 'text',
                  text: ' son genuinamente útiles para investigación y datos de contacto; nosotros también los usamos. Lo que ni ellos ni nosotros podemos prometer es que siempre llegues en la semana adecuada. Sigues pillando la industria en el momento en que miraste.',
                },
              ],
            },
            {
              parts: [
                {
                  type: 'text',
                  text: 'Y aunque una editorial esté abierta, «enviar» suele significar un formulario o bandeja concreta, compitiendo con un montón de otros pitch que llegaron en la misma ventana. La mayoría nunca recibe respuesta.',
                },
              ],
            },
          ],
        },
        {
          title: 'Otra forma de ser descubierto',
          paragraphs: [
            'Esta es la razón real por la que existe Pubblo. En lugar de correr para pillar la ventana de solicitud de una editorial, o peor, enviar tu pitch a una bandeja que cerró en silencio hace tres meses, construyes un pitch estandarizado y lo publicas en Pubblo una vez. Las editoriales en la plataforma definen lo que buscan (géneros, número de jugadores, peso, temas), y tu juego puede conectarse y recibir puntuación automática frente a ello. Cuando una editorial busca activamente y tu juego encaja, es entonces cuando apareces en su radar, no solo cuando adivinaste la semana correcta para pulsar enviar.',
            'También invierte quién espera. Un correo en frío se queda en una bandeja hasta que alguien lo mira, si alguna vez lo hace. En Pubblo, puedes ver cuándo una editorial ha abierto realmente tus materiales, así que no te quedas preguntándote si alguien miró siquiera.',
          ],
        },
      ],
      ctaSection: {
        title: 'Qué hacer a continuación',
        steps: [
          {
            title: 'Crea tu pitch (gratis)',
            body: 'Convierte tu prototipo en una solicitud con todo lo necesario para decidir que puedes enviar a cualquier editorial de esta lista, o tener lista cuando reabran. Crear tu pitch, enviarlo a editoriales y seguir quién ve tus materiales es gratis.',
          },
          {
            title: 'Publica en el Marketplace (cuando quieras ser descubierto)',
            body: 'En lugar de comprobar si Rock Manor está abierta este martes, pon tu juego donde las editoriales ya buscan. Conexión y seguimiento de vistas integrados. Publicar en el Marketplace es un complemento de pago por ficha. Consulta precios para los niveles actuales.',
          },
        ],
        primaryCta: {
          label: 'Empieza tu pitch gratis',
          to: '/launch#/create-account/1-email-password',
        },
        secondaryCta: {
          label: 'Publicar en el Marketplace',
          to: '/marketplace',
        },
      },
      tipsTitle: 'Cómo saber si una editorial está realmente abierta (sin enviar un correo para preguntar)',
      tips: [
        'Consulta directamente la propia página de solicitudes, creadores (a menudo «Designers» en inglés) o la página «About» de la editorial, no una lista (incluida esta) que puede llevar meses desactualizada.',
        'Busca un anuncio reciente en su newsletter o redes. Las editoriales que reabren solicitudes casi siempre lo dicen, porque prefieren pitch organizados a una avalancha de correos en frío.',
        'Las convenciones importan: las editoriales suelen anunciar solicitudes abiertas o pausadas alrededor de GenCon, Spiel Essen o GAMA Expo, cuando reevalúan el catálogo del año que viene.',
        'Si la página de una editorial dice explícitamente closed o no da ningún proceso de solicitud, no envíes un correo pidiendo excepción. Rara vez funciona, y es la forma más rápida de acabar archivado.',
        'Si no quieres seguir haciendo esta comprobación manual para cada editorial cada vez que tienes un juego nuevo, ese es exactamente el trabajo repetitivo que la conexión de Pubblo está hecha para eliminar.',
      ],
      faq: [
        {
          question: '¿Con qué frecuencia abren y cierran las editoriales las solicitudes?',
          answer:
            'Varía enormemente. Algunas editoriales (como Stonemaier arriba) revisan solicitudes de forma continua aunque tengan agenda llena; otras abren brevemente una o dos veces al año y cierran en cuanto se saturan. No hay cadencia universal, que es exactamente por qué un pitch permanente que las editoriales pueden descubrir en su propio calendario funciona mejor que intentar acertar una ventana.',
        },
        {
          question: '¿Necesito un prototipo terminado para enviar a cualquier sitio?',
          answer:
            'Casi siempre, sí. Cada editorial de arriba espera un prototipo completo y con playtest (varias exigen blind playtesting específicamente), no un concepto inicial. Un pitch hecho antes de que el prototipo esté listo será descartado independientemente de cómo juegue el juego. Pubblo es un buen sitio para poner la versión terminada cuando llegues: crea tu pitch una vez, envíalo cuando una editorial reabra, o publícalo en el Marketplace para no refrescar esta página cada lunes preguntándote si Rock Manor ha cambiado de opinión.',
        },
        {
          question: '¿Y si la editorial que quiero está cerrada ahora?',
          answer:
            'No envíes un correo pidiendo ser excepción. Crea tu pitch ahora para tenerlo listo en cuanto reabran, o publícalo en el Marketplace para que las editoriales lo encuentren en su propio calendario en lugar del tuyo.',
        },
        {
          question: '¿Es mala etiqueta enviar a una editorial que dice estar cerrada?',
          answer:
            'Sí. Las editoriales recuerdan, y no ayuda a tu caso. Respetar un cartel de cerrado es lo mínimo para ser tomado en serio después.',
        },
        {
          question: '¿Cuánto cuesta?',
          answer:
            'Crear tu pitch, enviarlo a editoriales y seguir quién ve tus materiales es gratis. Publicar tu ficha en el Marketplace buscable para que las editoriales te descubran es un complemento de pago por ficha. Consulta nuestra página de precios para los niveles actuales del Marketplace.',
        },
      ],
      internalLinks: [
        { to: '/pitch', label: 'La herramienta Pitch' },
        { to: '/marketplace', label: 'El Marketplace' },
        { to: '/pitch-to-publishers', label: 'Presenta pitch a editoriales sin correos en frío' },
        { to: '/pricing#marketplace-designers', label: 'Precios del Marketplace para creadores de juegos' },
        { to: '/compare', label: 'Compara Pubblo con directorios y CRM' },
        { to: '/contact', label: 'Contacto' },
      ],
    },
  },
};
