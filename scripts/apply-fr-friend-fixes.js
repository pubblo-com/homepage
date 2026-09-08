#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const FR_DIR = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr');
const FR_ROOT = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr.js');
const LEGAL = path.join(FR_DIR, 'legal.js');

const files = [
  FR_ROOT,
  ...fs.readdirSync(FR_DIR).map((f) => path.join(FR_DIR, f)),
].filter((f) => f.endsWith('.js'));

const shared = [
  ['tu recherchent de nouveaux titres', 'tu recherches de nouveaux titres'],
  [
    'Évalue les pitchs automatiquement, recherche de nouveaux titres et collabore avec ton équipe.',
    'Évalue les pitchs automatiquement, déniche de nouveaux titres et travaille en équipe.',
  ],
  ['ne matchent tout simplement pas la stratégie portfolio', 'ne correspondent tout simplement pas à la stratégie de portefeuille'],
  ['circuit de validation de licensing légère', 'circuit de validation de licence léger'],
  ['décisions de licensing transparentes', 'décisions de licence transparentes'],
  ['opportunités de licensing et de distribution', 'opportunités de licence et de distribution'],
  ['pour le licensing de jeux de société', 'pour l\'édition de jeux de société'],
  ['parcours de licensing', 'parcours de licence'],
  ['partenaires de licensing qui veulent', 'partenaires de licence qui veulent'],
  ['self-édition', 'auto-édition'],
  ['co-édition', 'coédition'],
  ['co-éditeur', 'coéditeur'],
  ['co-publier', 'coéditer'],
  ['co-publies', 'coédites'],
  ['matchmaking', 'mise en relation'],
  ['meeting pitch', 'rendez-vous pitch'],
  ['les évaluateurs scannent', 'les évaluateurs parcourent'],
  ['prête à décider', 'tout ce qu\'il faut pour trancher'],
  ['prêtes à décider', 'avec tout ce qu\'il faut pour trancher'],
  ['adéquation marché', 'adéquation au marché'],
  ['positionnement marché', 'positionnement sur le marché'],
  ['Le Marketplace – Marketplace de jeux de société pour créateurs de jeu', 'Le Marketplace — fais découvrir tes jeux aux éditeurs'],
  ['Un marketplace où créateurs', 'Le Marketplace où créateurs'],
  ['product, sales et marketing', 'produit, ventes et marketing'],
  ['matchmaking organise des meetings', 'mise en relation organise des réunions'],
  ['sans mailer en plus', 'sans envoyer de mails en plus'],
  ['ne mail pas pour', 'n\'envoie pas de mail pour'],
  ['Ne mail pas pour', 'N\'envoie pas de mail pour'],
  ['mailer chaque contact', 'envoyer un mail à chaque contact'],
  ['Le listing Marketplace est', 'La publication de ta fiche sur le Marketplace est'],
  ['Le listing Marketplace est', 'La publication de ta fiche sur le Marketplace est'],
  ['listing de tes propres jeux', 'publication de tes fiches jeu'],
  ['Les listings Marketplace s\'achètent', 'Les fiches Marketplace s\'achètent'],
  ['un listing avec de vrais chiffres', 'une fiche avec de vrais chiffres'],
  ['Tous les listings sont', 'Toutes les fiches sont'],
  ['s\'arrêtent au listing', 's\'arrêtent à la simple fiche'],
  [
    'Vérifie directement la page submissions, designers ou about de l\'éditeur',
    'Vérifie directement la page submissions, créateurs (souvent « Designers » en anglais) ou about de l\'éditeur',
  ],
  ['pourquoi un marketplace de jeux', 'pourquoi le Marketplace de jeux'],
  ['sur le licensing et la gestion', 'sur la licence et la gestion'],
];

for (const file of files) {
  if (file === LEGAL) continue;
  let content = fs.readFileSync(file, 'utf8');
  for (const [from, to] of shared) {
    content = content.split(from).join(to);
  }
  fs.writeFileSync(file, content, 'utf8');
}

let legal = fs.readFileSync(LEGAL, 'utf8');
const legalFixes = [
  ['Opposition : t\'opposer', 'Opposition : vous opposer'],
  ['9. Cookies et tracking', '9. Cookies et suivi'],
  ['On a activé l\'anonymisation IP et n\'utilisons pas Google Analytics pour la pub ou le cross-site tracking.', 'Nous avons activé l\'anonymisation IP et n\'utilisons pas Google Analytics pour la pub ou le traçage intersites.'],
  ['Cookies analytics, pour comprendre les patterns d\'usage (agrégés).', 'Cookies de statistiques d\'utilisation, pour comprendre les habitudes d\'utilisation (agrégées).'],
  ['notification in-app', 'notification dans l\'application'],
  ['niveaux d\'abo', 'niveaux d\'abonnement'],
  ['pour les fonctions essentielles de la plateforme et les analytics (voir section 9).', 'pour les fonctions essentielles de la plateforme et les statistiques d\'utilisation (voir section 9).'],
  ['Fournisseurs d\'analytics pour', 'Fournisseurs de statistiques d\'utilisation pour'],
  ['(hébergement, analytics, envoi', '(hébergement, statistiques d\'utilisation, envoi'],
  ['Cookies analytics autorisés.', 'Cookies de statistiques autorisés.'],
  ['Cookies analytics refusés.', 'Cookies de statistiques refusés.'],
  ['Autoriser Analytics', 'Autoriser les statistiques'],
  ['Refuser Analytics', 'Refuser les statistiques'],
];
for (const [from, to] of legalFixes) {
  legal = legal.split(from).join(to);
}
// Remaining informal "on" in legal (privacy sections only)
legal = legal.replace(/\bOn ne collecte pas/g, 'Nous ne collectons pas');
legal = legal.replace(/\bOn apprend qu'/g, 'Nous apprenons qu\'');
legal = legal.replace(/\bon les supprime/g, 'nous les supprimons');
fs.writeFileSync(LEGAL, legal, 'utf8');

console.log('Applied friend-approved French fixes.');
