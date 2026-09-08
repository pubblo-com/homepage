#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const FR_DIR = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr');
const FR_ROOT = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr.js');

const files = [
  FR_ROOT,
  ...fs.readdirSync(FR_DIR).map((f) => path.join(FR_DIR, f)),
].filter((f) => f.endsWith('.js'));

const fixes = [
  ['le édition', "l'édition"],
  ['le évaluer', "l'évaluation"],
  ['la évaluer', "l'évaluation"],
  ['l\'réception', "la réception"],
  ['un option payante payant', 'une option payante'],
  ['le notation', 'la notation'],
  ['Le notation', 'La notation'],
  ['une circuit de validation', 'un circuit de validation'],
  ['évaluer d\'équipe', 'évaluation d\'équipe'],
  ['Le mise en relation', 'La mise en relation'],
  ['le mise en relation', 'la mise en relation'],
  ['Comment fonctionne le mise en relation', 'Comment fonctionne la mise en relation'],
  ['d\'prospection', 'de prospection'],
  ['portfolio édition', "portfolio d'édition"],
  ['partenaires édition et distribution', "partenaires d'édition et de distribution"],
  ['évaluateur les pitchs', 'évaluer les pitchs'],
  ['invité(e) à évaluer', "invité à évaluer"],
  ['https://boardanddice.com/créateur de jeu-submissions', 'https://boardanddice.com/designer-submissions'],
  ['/pricing#marketplace-créateurs de jeu', '/pricing#marketplace-designers'],
  ['créateurs de jeu:', 'designers:'],
  ["Demander l'accès", "Demander l\\'accès"],
  ["En phase avec les préférences de l'éditeur", "En phase avec les préférences de l\\'éditeur"],
  ["Ai-je besoin d'un prototype terminé ?", "Ai-je besoin d\\'un prototype terminé ?"],
  ['accès tracké', 'accès suivi'],
  ['contrôlé et loggé', 'contrôlé et enregistré'],
  ['bodyHighlight: \'trackée\'', "bodyHighlight: 'suivie'"],
  ['Postuler', "Demander l\\'accès"],
  ['juste créateur de jeu et laisser', 'être créateur de jeu et laisser'],
  ['Statistiques et retours et feedback', 'Statistiques et retours'],
  ['performance et feedback Marketplace', 'performance sur le Marketplace'],
  ['pour le meilleur match', 'pour la meilleure adéquation'],
  ['scouts de nouveaux titres', 'recherchent de nouveaux titres'],
  ['tu scouts de nouveaux titres', 'tu recherches de nouveaux titres'],
  ['scout de nouveaux titres', 'recherche de nouveaux titres'],
  ['scoutent déjà', 'recherchent déjà activement'],
  ['scoutent activement', 'recherchent activement'],
  ['scoutent des titres', 'recherchent activement des titres'],
  ['scoutent avec', 'recherchent avec'],
  ['scouter le Marketplace', 'parcourir le Marketplace'],
  ['plateforme de scouting', 'plateforme de recherche active'],
  ['parcours de scouting', 'parcours de recherche active'],
  ['un éditeur scout activement', 'un éditeur recherche activement'],
  ['être matché', 'être mis en relation'],
  ['est matché et scoré', 'est mis en relation et évalué automatiquement'],
  ['qui matchent', 'qui correspondent'],
  ['matchent ton', 'correspondent à ton'],
  ['matchent leur', 'correspondent à leur'],
  ['matchent ton jeu', 'correspondent à ton jeu'],
  ['score contre', 'obtient un score par rapport à'],
  ['de bonnes reviews', 'de bons retours'],
  ['Il me faut d\'abord un deal éditeur', 'Ai-je besoin d\'abord d\'un accord avec un éditeur'],
  ['Il me faut un prototype fini partout', 'Ai-je besoin d\'un prototype terminé partout'],
  ['créateurs de jeu ou about', 'designers ou about'],
  ['page submissions, créateurs de jeu', 'page submissions, designers'],
  ['le mise en relation Pubblo', 'la mise en relation Pubblo'],
  ['whoAreYou', 'whoAreYou'], // noop anchor
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [from, to] of fixes) {
    if (from === 'whoAreYou') continue;
    content = content.split(from).join(to);
  }
  fs.writeFileSync(file, content, 'utf8');
}

console.log(`Repaired ${files.length} files.`);
