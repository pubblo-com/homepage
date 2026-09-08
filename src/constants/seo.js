export const SITE_URL = 'https://pubblo.com';

export const HOME_TITLE =
  'Pubblo – Board Game Marketplace for Designers & Publishers';

export const HOME_DESCRIPTION =
  'Pitch your board game to vetted publishers, or scout new titles and localization partners — all in one marketplace. Free to start.';

export const DEFAULT_TITLE = HOME_TITLE;
export const DEFAULT_DESCRIPTION = HOME_DESCRIPTION;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const ORGANIZATION_LOGO = `${SITE_URL}/logo-pubblo.png`;

export const PAGE_SEO = {
  products: {
    title: 'Pubblo Products – Portal, Marketplace, Pitch & Briefs',
    description:
      'Overview of Pubblo products: Portal for publisher submissions, Marketplace for game discovery, Pitch tool for designers, and Briefs for structured game requests.',
    canonical: `${SITE_URL}/products`,
  },
  portal: {
    title: 'The Portal – Board Game Submission Management',
    description:
      'Pubblo Portal helps publishers manage board game submissions in one place. Score pitches automatically, scout new titles, and collaborate with your team.',
    canonical: `${SITE_URL}/portal`,
  },
  marketplace: {
    title: 'The Marketplace – Board Game Marketplace for Designers',
    description:
      'Discover and list board games on Pubblo Marketplace. A submission platform where designers pitch to publishers and publishers scout new titles and localization partners.',
    canonical: `${SITE_URL}/marketplace`,
  },
  pitch: {
    title: 'The Pitch Tool – Board Game Pitch Deck & Sell Sheet',
    description:
      'Create a board game pitch deck and export a sell sheet with Pubblo. The pitch tool for board game designers who want to reach publishers with a decision-ready submission.',
    canonical: `${SITE_URL}/pitch`,
  },
  briefs: {
    title: 'Briefs – Coming Soon',
    description:
      'Pubblo Briefs will let publishers and IP owners post structured game requests and connect with designers. Coming soon.',
    canonical: `${SITE_URL}/briefs`,
  },
  users: {
    title: 'For Publishers, Designers & Distributors',
    description:
      'See who uses Pubblo: publishers managing submissions, designers pitching board games, and distributors scouting titles for new markets.',
    canonical: `${SITE_URL}/users`,
  },
  compare: {
    title: 'Pubblo vs Pitch Directories, CRMs & Trade Fairs',
    description:
      'Compare Pubblo to pitch directories, matchmaking services, trade fairs, and generic CRMs. See why a board game marketplace beats buying publisher lists.',
    canonical: `${SITE_URL}/compare`,
  },
  pricing: {
    title: 'Pricing',
    description:
      'Pubblo pricing for the Marketplace and Pitch tool. Plans for publishers, distributors, and game designers — free to start.',
    canonical: `${SITE_URL}/pricing`,
  },
  faq: {
    title: 'Board Game Publishing FAQ',
    description:
      'Answers about pitching board games, publisher submissions, the Marketplace, IP protection, and localization — for designers and publishers using Pubblo.',
    canonical: `${SITE_URL}/faq`,
  },
  company: {
    title: 'About Pubblo',
    description:
      'Meet the Pubblo team and learn how we built the board game marketplace connecting designers, publishers, and distributors worldwide.',
    canonical: `${SITE_URL}/company`,
  },
  news: {
    title: 'News',
    description:
      'Latest news from Pubblo: Marketplace launches, partnerships, Game Inventors Convention 2027, and updates from the board game industry.',
    canonical: `${SITE_URL}/news`,
  },
  contact: {
    title: 'Contact Us',
    description:
      'Contact Pubblo to book a demo, ask about pitching to publishers, localization partners, or publisher submissions on the Marketplace.',
    canonical: `${SITE_URL}/contact`,
  },
  privacy: {
    title: 'Privacy Policy',
    description:
      'How Pubblo AB collects, uses, and protects personal data on the board game marketplace platform, in accordance with GDPR.',
    canonical: `${SITE_URL}/privacy`,
  },
  terms: {
    title: 'Terms & Conditions',
    description:
      'Pubblo Terms and Conditions for using the board game marketplace, submission platform, and related services.',
    canonical: `${SITE_URL}/terms`,
  },
  gic2027: {
    title: 'Game Inventors Convention 2027 Partnership',
    description:
      'Pubblo powers the submission platform behind Game Inventors Convention 2027 at Spielwarenmesse. White-label platform for fairs, competitions, and industry partners.',
    canonical: `${SITE_URL}/gic-2027`,
  },
};

export const AUDIENCE_SEO = {
  publishers: {
    title: 'Board Game Publishing Platform for Publishers',
    description:
      'Manage submissions in one place, score pitches against your preferences, and discover new designers on the Pubblo board game marketplace.',
    canonical: `${SITE_URL}/publisher`,
  },
  designers: {
    title: 'Pitch Your Board Game to Publishers',
    description:
      'Pitch your board game to vetted publishers on Pubblo. Create a submission, reach partners worldwide, and skip buying publisher lists.',
    canonical: `${SITE_URL}/creator`,
  },
};

export function absoluteUrl(path) {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function truncateDescription(text, maxLength = 160) {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).trimEnd()}…`;
}
