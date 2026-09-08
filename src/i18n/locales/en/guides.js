export const guides = {
  ui: {
    hubTitle: 'Guides',
    hubIntro:
      'Practical reads for board game designers and publishers: who is open to submissions, how to pitch without cold emails, and how to find partners on Pubblo.',
    hubSeoTitle: 'Board Game Publishing Guides',
    hubSeoDescription:
      'Guides for board game designers and publishers: submission lists, pitching tips, and how to get discovered on Pubblo.',
    updatedLabel: 'Updated:',
    readGuide: 'Read guide',
    backToGuides: '← Back to guides',
    statusLabel: 'Status:',
    faqTitle: 'FAQ',
    relatedPagesTitle: 'Learn more',
    relatedPagesAria: 'Related Pubblo pages',
    notFoundTitle: 'Guide not found',
    notFoundBody: 'This guide could not be found.',
    notFoundSeoTitle: 'Guide Not Found',
    notFoundSeoDescription:
      'The requested Pubblo guide could not be found.',
  },
  articles: {
    'board-game-publishers-accepting-submissions': {
      seo: {
        title:
          'Board Game Publishers Accepting Submissions (Updated 2026) | Pubblo',
        description:
          'A running list of board game publishers currently open to submissions, plus why waiting for the right inbox to open is not the only way to get noticed.',
        exactTitle: true,
      },
      title: 'Board Game Publishers Accepting Submissions Right Now',
      lastChecked: 'September 2026',
      intro: [
        'Submission windows open and close all the time. Always confirm on the publisher\'s own page before you send anything.',
        'If you have designed a game and you are wondering who is actually open to hearing about it, you have probably already discovered the annoying truth: there is no single, reliable, up-to-date answer. Publisher websites get out of date. Forum threads are three years old. Someone\'s "currently accepting submissions" tweet from last spring is now wishful thinking. So here is a real, checked snapshot, plus a look at why even a careful list like this one only solves half the problem.',
        'We will keep this list updated when we can. We also know that by the time you are reading it, at least one line below is probably already wrong. That is not us being sloppy. Submission windows just move faster than any blog post.',
      ],
      listTitle: 'Publishers currently open (as of September 2026)',
      listIntro:
        'The details below are summarized from each publisher\'s own submission pages. Criteria marked with * are our reading of what they are looking for and may not capture every nuance.',
      listDisclaimer:
        '*Always verify requirements, themes, and prototype expectations on the publisher\'s own site before you submit.',
      publishers: [
        {
          name: 'Stonemaier Games',
          status: 'Tentatively open.',
          fields: [
            {
              label: 'Looking for',
              text: '*One light, cooperative, highly replayable game for 3–7+ players (think Just One or The Gang). Generally: 1–2 hour tabletop games (no RPGs), 2 to 5–6+ players, a genuinely new mechanic, no historical events, people, or religions as themes.',
            },
            {
              label: 'Prototype stage',
              text: 'Fully built, polished, and extensively playtested. Not an early idea.',
            },
            {
              label: 'How to submit',
              text: 'Fill out the submission form on their',
              link: {
                href: 'https://stonemaiergames.com/about/submission-guidelines/',
                label: 'submission guidelines page',
                suffix: ', with a sell sheet, visual overview, and/or a short gameplay video. Expect a response within about a month.',
              },
            },
          ],
        },
        {
          name: 'Inside Up Games',
          status: 'Open.',
          fields: [
            {
              label: 'Looking for',
              text: '*Strongly themed tabletop games with high player interaction, a clear hook, and smooth turns, for 1–2 up to 5–6+ players.',
            },
            {
              label: 'Prototype stage',
              text: 'Complete and playtested with a near-final rule set, including blind playtests (people who can play it without you explaining anything).',
            },
            {
              label: 'How to submit',
              text: 'Their',
              link: {
                href: 'https://insideupgames.com/game-design-submissions/',
                label: 'Game Design Submissions form',
                suffix: '. Digital prototypes on Tabletopia or Tabletop Simulator are strongly preferred; physical copies are accepted but shipping is on you.',
              },
            },
          ],
        },
        {
          name: 'Board&Dice',
          status: 'Open.',
          fields: [
            {
              label: 'Looking for',
              text: '*Heavy and medium-weight euro games (roughly 2.7–4.1 on the BGG weight scale), 2–4 players, 60–150 minutes, with mechanics like worker placement, engine building, dice workers, area majority, or rondels. They explicitly pass on negative player interaction, push-your-luck, real-time play, party games, and family games.',
            },
            {
              label: 'How to submit',
              text: 'Contact details and full guidelines are on their',
              link: {
                href: 'https://boardanddice.com/designer-submissions',
                label: 'designer submissions page',
                suffix: '. A 2–3 minute video walking through the core mechanics goes a long way.',
              },
            },
          ],
        },
        {
          name: 'The Op Games',
          status: 'Open, through an ongoing Inventor Submissions Program.',
          fields: [
            {
              label: 'Looking for',
              text: '*Mass-market tabletop games, ages 8+, 2+ players, retail price roughly $19.99–$29.99, high interaction, short turns, broad family appeal.',
            },
            {
              label: 'Prototype stage',
              text: 'A full playable prototype is required. No early-stage ideas.',
            },
            {
              label: 'How to submit',
              text: 'Their multi-step',
              link: {
                href: 'https://theop.games/pages/inventor-submissions',
                label: 'Inventor Submissions process',
                suffix: ' (sign-up, game details, prototype, contact info, plus a signed Product Disclosure Agreement). They specifically say the strongest pitches lead with a short, energetic sizzle video.',
              },
            },
          ],
        },
        {
          name: 'Rock Manor Games',
          status: 'Open.',
          fields: [
            {
              label: 'Looking for',
              text: '*Games with an unconventional theme or hook, across two lines: $60+ crowdfunding tentpole games (medium weight, 60+ minutes) and $30–40 Bookbag games (medium-light, 45+ minutes). They are drawn to sci-fi, fantasy, horror, theme-park/hospitality and cozy themes; they pass on roll-and-move, TCGs, political games, war games, and pure abstracts.',
            },
            {
              label: 'How to submit',
              text: 'Guidelines and a submission form are on their',
              link: {
                href: 'https://rockmanorgames.com/game-submissions/',
                label: 'game submissions page',
                suffix: '. A gameplay video helps, and they note that language-independent designs are looked on favorably.',
              },
            },
          ],
        },
      ],
      listFootnote: {
        parts: [
          {
            type: 'text',
            text: 'Know a publisher that should be on here, or spotted one that has closed? ',
          },
          { type: 'link', to: '/contact', text: 'Let us know' },
          {
            type: 'text',
            text: '. If you are reading this months from now and something is off, yeah, we probably know too. We just have not caught up yet.',
          },
        ],
      },
      sections: [
        {
          title: 'The problem with any list like this one',
          paragraphs: [
            'Here is the thing nobody says out loud: even if this list were perfectly accurate the hour we published it, it would still only tell you who happened to be open on the day you read it. Submission windows are not really open or closed so much as they are a moving target. A publisher fills next year\'s schedule and quietly stops reading new pitches, or clears a backlog and reopens with no announcement at all.',
            'The standard advice, including the advice we are about to give you, is to bookmark pages like this and check back regularly. Weekly, if you are serious. We wrote a list, so we are obliged to say that.',
            'We also know, because we maintain one, that "check back weekly" mostly means discovering that something changed without anyone telling you. Should you bookmark this and check it every week? In theory, yes. In practice, you will mostly be confirming that someone closed submissions three days ago and we have not updated yet. That is not negligence. It is just what static lists do.',
          ],
          richParagraphs: [
            {
              parts: [
                {
                  type: 'text',
                  text: 'Directories like ',
                },
                {
                  type: 'external',
                  href: 'https://cardboardedison.com/publisher-directory',
                  text: "Cardboard Edison's publisher list",
                },
                {
                  type: 'text',
                  text: ' are genuinely useful for research and contact details; we use them ourselves. What neither they nor we can promise is that you will always land on the right week. You are still catching the industry at whatever moment you happened to look.',
                },
              ],
            },
            {
              parts: [
                {
                  type: 'text',
                  text: 'And even when a publisher is open, "submit" usually still means one specific form or inbox, competing with a pile of other pitches that landed in the same window. Most of those never hear back at all.',
                },
              ],
            },
          ],
        },
        {
          title: 'A different way to get found',
          paragraphs: [
            'This is the actual reason Pubblo exists. Instead of racing to catch a publisher\'s submission window, or worse, sending your pitch into an inbox that quietly closed three months ago, you build one standardized pitch and put it on Pubblo once. Publishers on the platform set what they are looking for (genres, player counts, weight, themes), and your game can be matched and scored against that. When a publisher is actively scouting and your game fits, that is when you show up on their radar, not only when you guessed the right week to hit send.',
            'It also flips who is doing the waiting. A cold email sits in an inbox until someone gets around to it, if they ever do. On Pubblo, you can see when a publisher has actually opened your materials, so you are not left wondering if anyone even looked.',
          ],
        },
      ],
      ctaSection: {
        title: 'What to do next',
        steps: [
          {
            title: 'Build your pitch (free)',
            body: 'Turn your prototype into one decision-ready submission you can send to any publisher on this list, or keep ready for when they reopen. Creating your pitch, sending it to publishers, and tracking who views your materials is free.',
          },
          {
            title: 'List on the Marketplace (when you want to be found)',
            body: 'Instead of checking whether Rock Manor is open this Tuesday, put your game where publishers are already scouting. Matching and view-tracking are built in. Marketplace listing is a paid add-on per game slot. See pricing for current tiers.',
          },
        ],
        primaryCta: {
          label: 'Start your free pitch',
          to: '/launch#/create-account/1-email-password',
        },
        secondaryCta: {
          label: 'List on the Marketplace',
          to: '/marketplace',
        },
      },
      tipsTitle: 'How to tell if a publisher is actually open (without emailing to ask)',
      tips: [
        'Check the publisher\'s own submissions, designers, or about page directly, not a list (including this one) that might be a few months stale.',
        'Look for a recent announcement on their newsletter or social channels. Publishers who reopen submissions almost always say so, because they would rather get organized pitches than a flood of cold emails.',
        'Conventions matter: publishers often announce open or paused submissions around GenCon, Spiel Essen, or GAMA Expo, since that is when they are reassessing next year\'s catalogue.',
        'If a publisher\'s page explicitly says closed or gives no submission process at all, do not email asking for an exception. It rarely works, and it is the fastest way to be filed under ignore.',
        'If you do not want to keep doing this check manually for every publisher whenever you have a new game, that is exactly the repetitive work Pubblo\'s matching is built to remove.',
      ],
      faq: [
        {
          question: 'How often do publishers open and close submissions?',
          answer:
            'It varies enormously. Some publishers (like Stonemaier above) review submissions continuously even with a full schedule; others open briefly once or twice a year and close the moment they are overwhelmed. There is no universal cadence, which is exactly why a standing pitch that publishers can discover on their own timeline works better than trying to time a window.',
        },
        {
          question: 'Do I need a finished prototype to submit anywhere?',
          answer:
            'Almost always, yes. Every publisher above expects a complete, playtested prototype (several specifically require blind playtesting), not an early concept. A pitch built before your prototype is fully ready will get passed over regardless of how the game plays. Pubblo is a pretty good place to put the finished version when you get there: build your pitch once, send it when a publisher reopens, or list on the Marketplace so you are not refreshing this page every Monday wondering if Rock Manor changed their mind.',
        },
        {
          question: 'What if the publisher I want is currently closed?',
          answer:
            'Do not email asking to be an exception. Build your pitch now so it is ready the moment they reopen, or list it on the Marketplace so publishers can find it on their own schedule instead of yours.',
        },
        {
          question: 'Is it bad etiquette to submit to a publisher that says it is closed?',
          answer:
            'Yes. Publishers remember, and it does not help your case. Respecting a closed sign is table stakes for being taken seriously later.',
        },
        {
          question: 'How much does it cost?',
          answer:
            'Creating your pitch, sending it to publishers, and tracking who views your materials is free. Listing your game on the searchable Marketplace so publishers can discover you is a paid add-on per slot. See our pricing page for current Marketplace tiers.',
        },
      ],
      internalLinks: [
        { to: '/pitch', label: 'The Pitch tool' },
        { to: '/marketplace', label: 'The Marketplace' },
        { to: '/pitch-to-publishers', label: 'Pitch to publishers without cold emails' },
        { to: '/pricing#marketplace-designers', label: 'Marketplace pricing for designers' },
        { to: '/compare', label: 'Compare Pubblo to directories and CRMs' },
        { to: '/contact', label: 'Contact us' },
      ],
    },
  },
};
