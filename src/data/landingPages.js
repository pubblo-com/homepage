import { SITE_URL } from '../constants/seo';

export const LANDING_PAGES = {
  'pitch-to-publishers': {
    path: '/pitch-to-publishers',
    seo: {
      exactTitle: true,
      title: 'Pitch Your Board Game to Publishers | Pubblo',
      description:
        'Turn your prototype into a standardized pitch publishers can evaluate fast. Free to start — no more cold emails.',
      canonical: `${SITE_URL}/pitch-to-publishers`,
    },
    h1: 'Pitch Your Game to Publishers — Without the Cold Emails',
    subtitle:
      'Create one standardized pitch and get discovered by publishers who are already looking for games like yours.',
    cta: {
      text: 'Start Your Free Pitch',
      href: '/launch#/create-account/1-email-password',
    },
    sections: [
      {
        title: 'How it works',
        type: 'steps',
        steps: [
          {
            title: 'Build your pitch for free',
            body: 'Use the Pubblo Pitch tool to turn your prototype into a structured, decision-ready submission — mechanics, audience, components, and market fit in one place.',
          },
          {
            title: 'Get matched to publisher preferences',
            body: 'Publishers set what they are looking for. Your pitch is scored automatically so the right partners can find games that fit their catalogue.',
          },
          {
            title: 'See who actually viewed your pitch',
            body: 'Track which publishers opened your materials and when. No more wondering if your email disappeared into an inbox.',
          },
        ],
      },
      {
        title: 'Why designers trust Pubblo',
        type: 'text',
        paragraphs: [
          'Pubblo was founded by Marcus Carleson, creator of HITSTER — Europe\'s best-selling game in 2024. Marcus started with a modest Kickstarter in 2019 and learned firsthand how hard it is for great games to reach the right publisher at the right time.',
          'Pubblo exists so designers spend less time chasing contacts and more time on games worth publishing. The same structured workflow that helped a close-call campaign become a continent-wide hit is now built into the platform.',
        ],
      },
      {
        title: 'Your ideas, your control',
        type: 'text',
        paragraphs: [
          'You choose who sees your pitch and your materials. Every view is tracked — you can see which publishers accessed your rulebook, sell sheet, or pitch page and when.',
          'At trade fairs and in cold-email threads, hand-offs are hard to audit after the fact. In Pubblo, access is controlled and logged, giving you more transparency and a stronger paper trail.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much does it cost?',
        answer:
          'Creating your pitch, sending it to publishers, and tracking who views your materials is free — statistics included. Listing your game on the searchable Marketplace so publishers can discover you is a paid add-on. See pricing for current Marketplace tiers.',
      },
      {
        question: 'Do I need a finished prototype?',
        answer:
          'No. Many designers pitch with a solid prototype and clear sell sheet. What matters is that publishers can evaluate theme, mechanics, audience, and commercial potential quickly.',
      },
      {
        question: 'How is this different from emailing publishers myself?',
        answer:
          'Cold emails often disappear in busy inboxes and every publisher wants information formatted differently. Pubblo standardises your pitch and puts it where publishers are already scouting — with matching and view-tracking built in.',
      },
      {
        question: 'Can I reuse my pitch elsewhere?',
        answer:
          'Yes. Your Pubblo pitch can be shared outside the platform — send it to publishers you met at a fair, found through your own research, or already know. You choose who gets access to your rulebook, sell sheet, or sales data, and you can combine Pubblo with outreach you do on your own.',
      },
    ],
    internalLinks: [
      { to: '/pitch', label: 'The Pitch tool — full product details' },
      { to: '/compare', label: 'Compare Pubblo to directories and CRMs' },
      { to: '/pricing', label: 'Pricing' },
    ],
  },

  'localization-partners': {
    path: '/localization-partners',
    seo: {
      exactTitle: true,
      title: 'Find Localization Partners for Your Board Game | Pubblo',
      description:
        'Already published? Find distributors and localization partners for new markets in one place. Standardized profiles, vetted publishers.',
      canonical: `${SITE_URL}/localization-partners`,
    },
    h1: 'Already Published? Find Localization Partners on Pubblo',
    subtitle:
      'Reach vetted publishers and distributors in new markets — without chasing contacts country by country.',
    cta: {
      text: 'List Your Game for New Markets',
      href: '/launch#/create-account/1-email-password',
    },
    sections: [
      {
        title: 'Who this is for',
        type: 'text',
        paragraphs: [
          'This page is for designers and publishers who already have a published game — or rights to one — and want to expand into new territories through localization, co-publishing, or distribution deals.',
          'If your game has proven sales, strong reviews, or a clear audience in one market, Pubblo Marketplace helps you find partners actively scouting titles for their catalogues elsewhere.',
        ],
      },
      {
        title: 'How matching works',
        type: 'text',
        paragraphs: [
          'Publishers and distributors set preferences: themes, complexity, price points, and markets they want to grow in. Your game profile is scored automatically against those preferences.',
          'Instead of researching who might be open to a German edition or a Nordic co-publishing deal, you list once and let matching surface the partners whose current needs align with your title.',
        ],
      },
      {
        title: 'From one market to the next',
        type: 'text',
        paragraphs: [
          'Imagine a strategy game that sells steadily in its home market. The designer lists it on Pubblo with sales data, component footprint, and localization notes. A distributor browsing for family-weight strategy titles in Central Europe scores it highly against their brief — and initiates a conversation through the platform.',
          'That is the workflow Pubblo is built for: proven games meeting partners who are already looking, without a year of unanswered outreach.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do I need an existing publisher deal first?',
        answer:
          'You need the rights to pursue deals in the territories you are targeting — whether you self-publish, hold full rights, or co-publish with a partner who has approved expansion.',
      },
      {
        question: 'Which markets can I reach?',
        answer:
          'Pubblo connects buyers and sellers globally. The partners you reach depend on who is active on the Marketplace and how your game scores against their stated preferences.',
      },
      {
        question: 'How is this different from a translation agency?',
        answer:
          'Translation agencies localise content. Pubblo helps you find publishing and distribution partners who want to license, co-publish, or distribute your game in new markets — the commercial relationship comes first.',
      },
    ],
    internalLinks: [
      { to: '/marketplace', label: 'The Marketplace — full product details' },
      { to: '/pricing', label: 'Pricing for publishers and distributors' },
    ],
  },

  'skip-the-publisher-list': {
    path: '/skip-the-publisher-list',
    seo: {
      exactTitle: true,
      title: 'Stop Buying Publisher Lists — Get Discovered Instead | Pubblo',
      description:
        'Skip the static directory. Post one pitch and let publishers who match your game find you — free to start.',
      canonical: `${SITE_URL}/skip-the-publisher-list`,
    },
    h1: "You Don't Need a $35 Publisher List. You Need to Be Found.",
    subtitle:
      "Directories give you contacts to cold-email one by one. Pubblo gets your pitch in front of publishers who've already told us what they're looking for.",
    cta: {
      text: 'Post Your Pitch Instead',
      href: '/launch#/create-account/1-email-password',
    },
    sections: [
      {
        title: 'The old way vs Pubblo',
        type: 'columns',
        columns: [
          {
            title: 'Buy a list & email every contact yourself',
            items: [
              'Static spreadsheet of names and addresses',
              'Same pitch sent blindly to dozens of inboxes',
              'No way to know who opened or cared',
              'Pay again when the list goes out of date',
            ],
          },
          {
            title: 'Post one pitch & get matched',
            items: [
              'One structured submission on Pubblo',
              'Publishers scout with stated preferences',
              'Automatic scoring against what they want',
              'View-tracking shows real engagement',
            ],
          },
        ],
      },
      {
        title: 'Stop guessing the right recipient',
        type: 'text',
        paragraphs: [
          'Publisher directories give you volume, not fit. Pubblo lets buyers set preferences — genre, complexity, audience, price point — and scores your pitch against them automatically.',
          'You spend less time researching who might be interested and more time improving the game. The platform routes your pitch toward publishers who have already said what they are looking for.',
        ],
      },
      {
        title: 'Your ideas, your control',
        type: 'text',
        paragraphs: [
          'You decide who can access your pitch and materials. Every view is logged so you know which publishers engaged with your rulebook or sell sheet.',
          'Directories cannot tell you if anyone read your email. Pubblo gives you a clearer trail — who looked, when, and whether the conversation is worth continuing.',
        ],
      },
    ],
    faq: [
      {
        question: 'How is this different from a publisher directory?',
        answer:
          'Directories list contacts. Pubblo is a workflow: structured pitches, buyer preferences, automatic matching, team review for publishers, and tracked access for designers. You are discovered by fit, not buried in a spreadsheet.',
      },
      {
        question: 'Do I still need to research publishers myself?',
        answer:
          'Pubblo works alongside your own outreach — not instead of it. Matching and scoring help publishers who are already on the platform find you, but you can also share your Pubblo pitch with contacts you found elsewhere: at fairs, through your network, or your own research. Your presentation can be sent outside Pubblo, and you decide exactly who gets access to your rulebook, sell sheet, or sales data.',
      },
      {
        question: 'What does it cost?',
        answer:
          'Creating your pitch, sending it to publishers, and tracking views is free — statistics included. Listing your game on the searchable Marketplace, where publishers actively scout for titles, is a paid add-on. See pricing for current tiers.',
      },
    ],
    internalLinks: [
      { to: '/compare', label: 'Full comparison table' },
      { to: '/pitch', label: 'The Pitch tool' },
    ],
  },
};

export const LANDING_PAGE_LIST = Object.values(LANDING_PAGES);

export function getLandingPageByPath(path) {
  return LANDING_PAGE_LIST.find((page) => page.path === path) || null;
}
