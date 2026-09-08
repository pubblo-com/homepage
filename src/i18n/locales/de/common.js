import { de as legacyDe } from '../de.js';

export const nav = legacyDe.nav;
export const footer = legacyDe.footer;

export const seo = {
  ...legacyDe.seo,
  pages: {
    ...legacyDe.seo.pages,
    portal: {
      title: 'Das Portal – Einsendungs-Management für Brettspiele',
      description:
        'Pubblo Portal: Einsendungsplattform für Brettspiel-Publisher. Pitches automatisch scoren, neue Titel scouten und Einsendungen im Team bewerten.',
    },
    marketplace: {
      title: 'Der Marketplace – Brettspiel-Marktplatz für Spieleautoren',
      description:
        'Brettspiel-Marktplatz auf Pubblo: Spiele listen, bei Publishern pitchen und Lokalisierungspartner finden — Einsendungen statt Cold Mails.',
    },
    pitch: {
      title: 'Das Pitch-Tool – Brettspiel Pitch-Deck & Sell Sheet',
      description:
        'Brettspiel Pitch-Deck und Sell Sheet mit Pubblo erstellen. Pitch-Tool für Spieleautoren, die Publisher mit einer entscheidungsreifen Einsendung erreichen.',
    },
    briefs: {
      title: 'Briefs – Demnächst',
      description:
        'Pubblo Briefs lässt Publisher und IP-Inhaber strukturierte Spieleanfragen posten und mit Designern verbinden. Demnächst verfügbar.',
    },
    users: {
      title: 'Für Publisher, Spieleautoren & Distributoren',
      description:
        'Wer Pubblo nutzt: Publisher mit Einsendungs-Management, Spieleautoren die pitchen, und Distributoren die Brettspiele für neue Märkte scouten.',
    },
    compare: {
      title: 'Pubblo vs. Pitch-Verzeichnisse, CRMs & Messen',
      description:
        'Pubblo vs. Pitch-Verzeichnisse, Matchmaking, Messen und CRM: Warum ein Brettspiel-Marktplatz besser ist als Publisher-Listen oder Verzeichnisse kaufen.',
    },
    pricing: {
      title: 'Preise – Marketplace & Pitch-Tool',
      description:
        'Pubblo Preise für Brettspiel-Marketplace und Pitch-Tool. Pläne für Publisher, Distributoren und Spieleautoren — kostenlos starten.',
    },
    company: {
      title: 'Über Pubblo',
      description:
        'Lerne das Pubblo-Team kennen und erfahre, wie wir den Brettspiel-Marktplatz für Designer, Publisher und Distributoren weltweit aufgebaut haben.',
    },
    news: {
      title: 'News',
      description:
        'Aktuelles von Pubblo: Marketplace-Launches, Partnerschaften, Game Inventors Convention 2027 und Updates aus der Brettspiel-Branche.',
    },
    guides: {
      title: 'Ratgeber für Brettspiel-Publishing',
      description:
        'Ratgeber für Spieleautoren und Publisher: Publisher mit offenen Einsendungen, Pitch-Tipps und wie du auf Pubblo gefunden wirst.',
    },
    contact: {
      title: 'Kontakt',
      description:
        'Kontaktiere Pubblo für eine Demo, Fragen zum Brettspiel-Pitch bei Publishern, Lokalisierungspartnern oder Einsendungen auf dem Marketplace.',
    },
    privacy: {
      title: 'Datenschutz',
      description:
        'Wie Pubblo AB personenbezogene Daten auf der Brettspiel-Marktplatz-Plattform erhebt, nutzt und schützt — gemäß DSGVO.',
    },
    terms: {
      title: 'AGB',
      description:
        'Pubblo AGB für die Nutzung des Brettspiel-Marktplatzes, der Einsendeplattform und verwandter Services.',
    },
    gic2027: {
      title: 'Game Inventors Convention 2027 Partnerschaft',
      description:
        'Pubblo betreibt die Einsendeplattform hinter der Game Inventors Convention 2027 auf der Spielwarenmesse. White-Label für Messen, Wettbewerbe und Branchenpartner.',
    },
  },
  landing: {
    'pitch-to-publishers': {
      title: 'Brettspiel bei Publishern pitchen | Pubblo',
      description:
        'Brettspiel bei Publishern pitchen: standardisierter Pitch statt Cold Mails. Publisher finden Spiele wie deins — kostenlos starten.',
    },
    'localization-partners': {
      title: 'Lokalisierungspartner für Brettspiele finden | Pubblo',
      description:
        'Brettspiel schon veröffentlicht? Lokalisierungspartner und Distributoren für neue Märkte finden — standardisierte Profile, geprüfte Publisher.',
    },
    'skip-the-publisher-list': {
      title: 'Schluss mit Publisher-Listen kaufen — werde gefunden | Pubblo',
      description:
        'Alternative zum Kauf von Publisher-Listen für Brettspiele: Ein Pitch statt statischem Verzeichnis — passende Publisher finden dich. Kostenlos starten.',
    },
  },
};
