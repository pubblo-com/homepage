export const guides = {
  ui: {
    hubTitle: 'Guides',
    hubIntro:
      'Articles pratiques pour créateurs de jeu et éditeurs de jeux de société : qui accepte les soumissions en ce moment, comment pitcher sans mails à froid, et comment trouver des partenaires sur Pubblo.',
    hubSeoTitle: 'Guides sur l\'édition de jeux de société',
    hubSeoDescription:
      'Guides pour créateurs de jeu et éditeurs : éditeurs ouverts aux soumissions, conseils de pitch et comment te faire découvrir sur Pubblo.',
    updatedLabel: 'Mis à jour :',
    readGuide: 'Lire le guide',
    backToGuides: '← Retour aux guides',
    statusLabel: 'Statut :',
    faqTitle: 'FAQ',
    relatedPagesTitle: 'En savoir plus',
    relatedPagesAria: 'Pages Pubblo associées',
    notFoundTitle: 'Guide introuvable',
    notFoundBody: 'Ce guide n\'a pas pu être trouvé.',
    notFoundSeoTitle: 'Guide introuvable',
    notFoundSeoDescription:
      'Le guide Pubblo demandé n\'a pas pu être trouvé.',
  },
  articles: {
    'board-game-publishers-accepting-submissions': {
      seo: {
        title:
          'Liste d\'éditeurs de jeux de société acceptant les soumissions (2026) | Pubblo',
        description:
          'Liste à jour d\'éditeurs de jeux de société ouverts aux soumissions (gratuit), plus pourquoi attendre la bonne boîte mail ne suffit pas — te faire découvrir sur Pubblo.',
        exactTitle: true,
      },
      title: 'Éditeurs de jeux de société qui acceptent les soumissions en ce moment',
      lastChecked: 'septembre 2026',
      intro: [
        'Les fenêtres de soumission s\'ouvrent et se ferment en permanence. Vérifie toujours le site de l\'éditeur avant d\'envoyer.',
        'Tu as conçu un jeu et tu te demandes qui a vraiment envie d\'en entendre parler ? Tu connais probablement déjà la vérité agaçante : il n\'y a pas une seule réponse fiable et à jour. Les sites d\'éditeurs se périment. Les fils de forum ont trois ans. Le tweet « on accepte les soumissions » du printemps dernier est depuis longtemps un vœu pieux. Voici un état des lieux vérifié, plus pourquoi même une liste soignée comme celle-ci ne règle que la moitié du problème.',
        'On met la liste à jour quand on peut. On sait aussi qu\'au moins une ligne ci-dessous est probablement déjà fausse quand tu lis ça. Ce n\'est pas de la négligence de notre part. Les fenêtres de soumission bougent plus vite qu\'un article de blog.',
      ],
      listTitle: 'Éditeurs avec soumissions ouvertes (septembre 2026)',
      listIntro:
        'Les détails ci-dessous résument les pages de soumission de chaque éditeur. Les critères marqués * sont notre lecture de ce qu\'ils cherchent et peuvent ne pas couvrir chaque nuance.',
      listDisclaimer:
        '*Vérifie toujours les exigences, thèmes et attentes prototype sur le site de l\'éditeur avant d\'envoyer quoi que ce soit.',
      publishers: [
        {
          name: 'Stonemaier Games',
          status: 'Ouvert avec prudence.',
          fields: [
            {
              label: 'Recherché',
              text: '*Un jeu coopératif léger, très rejouable pour 3–7+ joueurs (dans l\'esprit de Just One ou The Gang). En général : jeux de table de 1–2 heures (pas de JDR), 2 à 5–6+ joueurs, une mécanique vraiment nouvelle, pas d\'événements historiques, personnes ou religions comme thème.',
            },
            {
              label: 'État du prototype',
              text: 'Entièrement construit, mûr et largement playtesté. Pas une idée précoce.',
            },
            {
              label: 'Comment envoyer',
              text: 'Remplir le formulaire sur leur',
              link: {
                href: 'https://stonemaiergames.com/about/submission-guidelines/',
                label: 'page de guidelines de soumission',
                suffix: ', avec sell sheet, aperçu visuel et/ou courte vidéo de gameplay. Réponse généralement sous environ un mois.',
              },
            },
          ],
        },
        {
          name: 'Inside Up Games',
          status: 'Ouvert.',
          fields: [
            {
              label: 'Recherché',
              text: '*Jeux de table fortement thématisés avec beaucoup d\'interaction entre joueurs, une accroche claire et des tours fluides, pour 1–2 à 5–6+ joueurs.',
            },
            {
              label: 'État du prototype',
              text: 'Terminé et playtesté avec livret de règles quasi final, incluant des tests en aveugle (des gens qui peuvent jouer sans ton explication).',
            },
            {
              label: 'Comment envoyer',
              text: 'Leur',
              link: {
                href: 'https://insideupgames.com/game-design-submissions/',
                label: 'formulaire Game Design Submissions',
                suffix: '. Prototypes digitaux sur Tabletopia ou Tabletop Simulator fortement préférés ; exemplaires physiques possibles, frais d\'envoi à ta charge.',
              },
            },
          ],
        },
        {
          name: 'Board&Dice',
          status: 'Ouvert.',
          fields: [
            {
              label: 'Recherché',
              text: '*Eurogames lourds et moyens (environ 2,7–4,1 sur l\'échelle de poids BGG), 2–4 joueurs, 60–150 minutes, avec mécaniques comme worker placement, engine building, dice workers, area majority ou rondell. Ils refusent explicitement l\'interaction négative, push-your-luck, jeu en temps réel, jeux d\'ambiance et jeux familiaux.',
            },
            {
              label: 'Comment envoyer',
              text: 'Contact et toutes les guidelines sur leur',
              link: {
                href: 'https://boardanddice.com/designer-submissions',
                label: 'page Designer Submissions',
                suffix: '. Une vidéo de 2–3 minutes sur les mécaniques clés aide énormément.',
              },
            },
          ],
        },
        {
          name: 'The Op Games',
          status: 'Ouvert, via un programme Inventor Submissions en cours.',
          fields: [
            {
              label: 'Recherché',
              text: '*Jeux de table pour le grand public, à partir de 8 ans, 2+ joueurs, prix de vente conseillé d\'environ 19,99–29,99 $, beaucoup d\'interaction, tours courts, pour toute la famille.',
            },
            {
              label: 'État du prototype',
              text: 'Prototype jouable obligatoire. Pas d\'idées de concept précoce.',
            },
            {
              label: 'Comment envoyer',
              text: 'Leur processus',
              link: {
                href: 'https://theop.games/pages/inventor-submissions',
                label: 'Inventor Submissions',
                suffix: ' en plusieurs étapes (inscription, détails du jeu, prototype, coordonnées plus Product Disclosure Agreement (l\'accord de confidentialité sur le produit) signé). Les bons pitchs commencent selon l\'éditeur par une courte vidéo sizzle énergique.',
              },
            },
          ],
        },
        {
          name: 'Rock Manor Games',
          status: 'Ouvert.',
          fields: [
            {
              label: 'Recherché',
              text: '*Jeux avec thème ou accroche inhabituelle, en deux lignes : grosses gammes vitrines financées par crowdfunding à partir de 60 $ (moyen, 60+ minutes) et jeux Bookbag à 30–40 $ (moyen-léger, 45+ minutes). Ils aiment sci-fi, fantasy, horreur, les univers parc d\'attractions, hôtellerie et ambiances cosy ; ils refusent roll-and-move, TCG, jeux politiques, wargames et abstracts purs.',
            },
            {
              label: 'Comment envoyer',
              text: 'Guidelines et formulaire sur leur',
              link: {
                href: 'https://rockmanorgames.com/game-submissions/',
                label: 'page Game Submissions',
                suffix: '. Une vidéo de gameplay aide ; designs indépendants de la langue bien vus.',
              },
            },
          ],
        },
      ],
      listFootnote: {
        parts: [
          {
            type: 'text',
            text: 'Un éditeur manque, ou un est fermé ? ',
          },
          { type: 'link', to: '/contact', text: 'Fais-nous signe !' },
          {
            type: 'text',
            text: '. Si tu lis ça des mois plus tard et que quelque chose ne colle pas : oui, on le sait probablement aussi. On n\'a juste pas encore mis à jour.',
          },
        ],
      },
      sections: [
        {
          title: 'Le problème avec toute liste comme celle-ci',
          paragraphs: [
            'Ce que peu de gens disent à voix haute : même si cette liste est parfaite à l\'heure de publication, elle te dit seulement qui était ouvert le jour où tu es passé par là. Les fenêtres de soumission sont moins « ouvert ou fermé » qu\'une cible mobile. Un éditeur remplit son plan pour l\'année suivante et arrête discrètement de lire de nouveaux pitchs, ou vide son backlog et rouvre sans annonce.',
            'Le conseil standard, y compris celui qu\'on va te donner, c\'est : garder sous le coude des pages comme celle-ci et revenir régulièrement. Chaque semaine si tu prends ça au sérieux. On a écrit une liste, donc on doit le dire.',
            'Parce qu\'on en maintient une nous-mêmes, on sait aussi que « revenir chaque semaine » veut surtout dire constater que quelque chose a changé sans que personne l\'ait dit. Tu devrais garder sous le coude et vérifier chaque semaine ? En théorie oui. En pratique tu confirmes surtout qu\'un éditeur a fermé il y a trois jours et qu\'on n\'a pas encore rattrapé. Ce n\'est pas de la négligence. Voilà comment fonctionnent les annuaires figés.',
          ],
          richParagraphs: [
            {
              parts: [
                {
                  type: 'text',
                  text: 'Des annuaires comme ',
                },
                {
                  type: 'external',
                  href: 'https://cardboardedison.com/publisher-directory',
                  text: 'la liste d\'éditeurs de Cardboard Edison',
                },
                {
                  type: 'text',
                  text: ' sont vraiment utiles pour la recherche et les contacts ; on les utilise nous aussi. Ce qu\'eux ni nous ne pouvons promettre : que tu arrives toujours la bonne semaine. Tu attrapes l\'industrie seulement au moment où tu as regardé par hasard.',
                },
              ],
            },
            {
              parts: [
                {
                  type: 'text',
                  text: 'Et même quand un éditeur est ouvert, « soumettre » veut souvent dire un formulaire ou une boîte mail précise, en concurrence avec plein d\'autres pitchs dans la même fenêtre. La plupart n\'entendent plus jamais rien.',
                },
              ],
            },
          ],
        },
        {
          title: 'Une autre façon de te faire découvrir',
          paragraphs: [
            'C\'est pour ça qu\'il y a Pubblo. Au lieu de courir après une fenêtre de soumission, ou pire, envoyer ton pitch dans une boîte mail qui a fermé discrètement il y a trois mois, tu construis une fois un pitch standardisé et tu le mets sur Pubblo. Les éditeurs sur la plateforme définissent ce qu\'ils cherchent (genres, nombre de joueurs, poids, thèmes) et ton jeu est mis en relation et évalué automatiquement par rapport à ça. Quand un éditeur recherche activement et que ton jeu correspond, tu es sur le radar, pas seulement si tu as visé la bonne semaine pour envoyer.',
            'Et ça inverse qui attend. Un mail à froid reste dans la boîte jusqu\'à ce que quelqu\'un ait le temps, si jamais. Sur Pubblo, tu vois quand un éditeur a vraiment ouvert tes matériaux, au lieu de deviner si quelqu\'un a regardé.',
          ],
        },
      ],
      ctaSection: {
        title: 'Ce que tu peux faire ensuite',
        steps: [
          {
            title: 'Créer un pitch (gratuit)',
            body: 'Transforme ton prototype en soumission tout ce qu\'il faut pour trancher que tu peux envoyer à n\'importe quel éditeur de cette liste, ou garder prête pour quand ils rouvrent. Créer ton pitch, l\'envoyer aux éditeurs et suivre qui consulte tes matériaux est gratuit.',
          },
          {
            title: 'Publier ta fiche sur le Marketplace (si tu veux te faire découvrir)',
            body: 'Au lieu de vérifier chaque mardi si Rock Manor est ouvert : mets ton jeu là où les éditeurs recherchent déjà activement. Mise en relation et suivi des vues sont intégrés. La publication de ta fiche sur le Marketplace est une option payante par emplacement jeu. Les niveaux actuels sont sur la page tarifs.',
          },
        ],
        primaryCta: {
          label: 'Lancer un pitch gratuit',
          to: '/launch#/create-account/1-email-password',
        },
        secondaryCta: {
          label: 'Publier ta fiche sur le Marketplace',
          to: '/marketplace',
        },
      },
      tipsTitle:
        'Comment savoir si un éditeur est vraiment ouvert (sans envoyer de mails en plus)',
      tips: [
        'Vérifie directement la page submissions, la page créateurs (souvent « Designers » en anglais) ou la page « About » de l\'éditeur, pas une liste (même celle-ci) qui peut avoir des mois.',
        'Cherche une annonce récente dans la newsletter ou sur les réseaux. Les éditeurs qui rouvrent le disent presque toujours, parce qu\'ils préfèrent des pitchs structurés à un flot de mails à froid.',
        'Les salons comptent : les éditeurs annoncent souvent des soumissions ouvertes ou en pause autour de GenCon, Spiel Essen ou GAMA Expo quand ils trient le catalogue pour l\'année suivante.',
        'Si la page dit explicitement « closed » ou qu\'il n\'y a pas de processus de soumission, n\'envoie pas de mail pour une exception. Ça marche rarement et tu finis vite sous « ignorer ».',
        'Si tu ne veux pas faire ces vérifications manuellement pour chaque éditeur à chaque nouveau jeu, c\'est exactement pour ça que la mise en relation Pubblo existe.',
      ],
      faq: [
        {
          question: 'À quelle fréquence les éditeurs ouvrent-ils et ferment-ils les soumissions ?',
          answer:
            'Très variable. Certains (comme Stonemaier ci-dessus) regardent les soumissions en continu, même avec un plan plein ; d\'autres ouvrent brièvement une ou deux fois par an et ferment quand c\'est trop. Il n\'y a pas de rythme fixe, et c\'est exactement pourquoi un pitch permanent que les éditeurs trouvent à leur rythme marche mieux que de viser une fenêtre de soumission.',
        },
        {
          question: 'Ai-je besoin d\'un prototype terminé partout ?',
          answer:
            'Presque toujours oui. Chaque éditeur ci-dessus attend un prototype terminé et playtesté (plusieurs exigent explicitement des tests en aveugle), pas un concept précoce. Un pitch avant que le prototype soit vraiment prêt sera écarté, peu importe à quel point le jeu est bon. Pubblo est un bon endroit pour la version finie : construis ton pitch une fois, envoie quand un éditeur rouvre, ou publie ta fiche sur le Marketplace au lieu de rafraîchir cette page chaque lundi en espérant que Rock Manor a changé d\'avis.',
        },
        {
          question: 'Et si mon éditeur de rêve est fermé en ce moment ?',
          answer:
            'N\'envoie pas de mail pour une exception. Construis ton pitch maintenant pour qu\'il soit prêt dès qu\'ils rouvrent, ou publie ta fiche sur le Marketplace pour que les éditeurs le trouvent à leur rythme, pas au tien.',
        },
        {
          question:
            'Est-ce mal vu d\'envoyer à un éditeur qui dit « fermé » ?',
          answer:
            'Oui. Les éditeurs s\'en souviennent, et ça n\'aide pas ta cause. Respecter un panneau « closed » est le minimum pour être pris au sérieux plus tard.',
        },
        {
          question: 'Combien ça coûte ?',
          answer:
            'Créer ton pitch, l\'envoyer aux éditeurs et suivre qui consulte tes matériaux est gratuit. Publier ta fiche sur le Marketplace consultable pour que les éditeurs te découvrent est une option payante par emplacement. Les niveaux Marketplace actuels sont sur notre page tarifs.',
        },
      ],
      internalLinks: [
        { to: '/pitch', label: 'L\'outil Pitch' },
        { to: '/marketplace', label: 'Le Marketplace' },
        {
          to: '/pitch-to-publishers',
          label: 'Pitcher aux éditeurs sans mails à froid',
        },
        {
          to: '/pricing#marketplace-designers',
          label: 'Tarifs Marketplace pour créateurs de jeu',
        },
        {
          to: '/compare',
          label: 'Comparer Pubblo aux annuaires et CRM',
        },
        { to: '/contact', label: 'Contact' },
      ],
    },
  },
};
