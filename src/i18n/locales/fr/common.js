import { fr as legacyFr } from '../fr.js';

export const nav = legacyFr.nav;
export const footer = legacyFr.footer;

export const seo = {
  ...legacyFr.seo,
  pages: {
    ...legacyFr.seo.pages,
    portal: {
      title: 'Le Portal – Gestion des soumissions de jeux de société',
      description:
        'Pubblo Portal : plateforme de soumissions pour éditeurs de jeux de société. Évalue les pitchs automatiquement, déniche de nouveaux titres et décide en équipe.',
    },
    marketplace: {
      title: 'Le Marketplace — fais découvrir tes jeux aux éditeurs',
      description:
        'Marketplace de jeux de société sur Pubblo : publie des fiches jeu, pitch aux éditeurs et trouve des partenaires de localisation — sans mails à froid.',
    },
    pitch: {
      title: 'L\'outil Pitch – Pitch deck et sell sheet de jeux de société',
      description:
        'Crée un pitch deck de jeu de société et exporte un sell sheet avec Pubblo. Outil Pitch pour joindre les éditeurs avec une soumission prête à trancher.',
    },
    briefs: {
      title: 'Briefs – Bientôt disponible',
      description:
        'Pubblo Briefs permettra aux éditeurs et détenteurs d\'IP de publier des demandes de jeux structurées et de se connecter aux créateurs de jeu. Bientôt disponible.',
    },
    users: {
      title: 'Pour éditeurs, créateurs de jeu et distributeurs',
      description:
        'Découvre qui utilise Pubblo : éditeurs qui gèrent les soumissions, créateurs de jeu qui pitchent, et distributeurs qui recherchent activement des titres pour de nouveaux marchés.',
    },
    compare: {
      title: 'Pubblo vs annuaires de pitch, CRM et salons',
      description:
        'Compare Pubblo aux annuaires de pitch, services de mise en relation, salons et CRM. Pourquoi le marketplace vaut mieux qu\'acheter des listes ou annuaires d\'éditeurs.',
    },
    pricing: {
      title: 'Tarifs – Marketplace et outil Pitch',
      description:
        'Tarifs Pubblo pour le marketplace de jeux de société et l\'outil Pitch. Plans pour éditeurs, distributeurs et créateurs de jeu — gratuit pour commencer.',
    },
    company: {
      title: 'À propos de Pubblo',
      description:
        'Rencontre l\'équipe Pubblo et découvre comment on a construit le Marketplace pour créateurs de jeu, éditeurs et distributeurs dans le monde entier.',
    },
    news: {
      title: 'Actualités',
      description:
        'Dernières actus Pubblo : lancements Marketplace, partenariats, Game Inventors Convention 2027 et actualités de l\'industrie du jeu de société.',
    },
    guides: {
      title: 'Guides sur l\'édition de jeux de société',
      description:
        'Guides pour créateurs de jeu et éditeurs : éditeurs ouverts aux soumissions, conseils de pitch et comment te faire découvrir sur Pubblo.',
    },
    contact: {
      title: 'Contact',
      description:
        'Contacte Pubblo pour une démo, des questions sur le pitch aux éditeurs de jeux de société, la localisation ou les soumissions sur le Marketplace.',
    },
    privacy: {
      title: 'Confidentialité',
      description:
        'Comment Pubblo AB collecte, utilise et protège les données personnelles sur le Marketplace Pubblo et la plateforme associée, conformément au RGPD.',
    },
    terms: {
      title: 'CGU',
      description:
        'Conditions générales Pubblo pour l\'utilisation du Marketplace Pubblo, de la plateforme de soumission et des services associés.',
    },
    gic2027: {
      title: 'Partenariat Game Inventors Convention 2027',
      description:
        'Pubblo alimente la plateforme de soumission derrière la Game Inventors Convention 2027 à la Spielwarenmesse. Plateforme white-label pour salons, concours et partenaires de l\'industrie.',
    },
  },
  landing: {
    'pitch-to-publishers': {
      title: 'Pitch ton jeu de société aux éditeurs | Pubblo',
      description:
        'Pitch ton jeu de société aux éditeurs : soumission standardisée sans mails à froid. Les éditeurs cherchent déjà — gratuit pour commencer.',
    },
    'localization-partners': {
      title: 'Partenaires de localisation pour jeux de société | Pubblo',
      description:
        'Jeu déjà publié ? Trouve distributeurs et partenaires de localisation pour de nouveaux marchés — profils standardisés, éditeurs vérifiés.',
    },
    'skip-the-publisher-list': {
      title: 'Fini d\'acheter des listes d\'éditeurs — fais-toi découvrir | Pubblo',
      description:
        'Alternative à l\'achat de listes d\'éditeurs de jeux de société : un pitch à la place de l\'annuaire statique — les bons éditeurs te trouvent. Gratuit.',
    },
  },
};
