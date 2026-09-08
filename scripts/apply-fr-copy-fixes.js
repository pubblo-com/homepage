#!/usr/bin/env node
/**
 * Apply approved French copy fixes (glossary + specific strings).
 */
const fs = require('fs');
const path = require('path');

const FR_DIR = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr');
const FR_ROOT = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr.js');

const files = [
  FR_ROOT,
  ...fs.readdirSync(FR_DIR).map((f) => path.join(FR_DIR, f)),
].filter((f) => f.endsWith('.js') && !f.endsWith(`${path.sep}legal.js`));

const replacements = [
  [/\bpitches\b/g, 'pitchs'],
  [/\bsearchable\b/g, 'consultable'],
  [/\badd-on\b/g, 'option payante'],
  [/\bUpload\b/g, 'Mets en ligne'],
  [/\boutreach\b/g, 'prospection'],
  [/\bgreenlighting\b/g, 'validation de projet'],
  [/\bpowered by\b/gi, 'propulsé par'],
  [/\bintake\b/g, 'réception des dossiers'],
  [/\bworkflow CRM\b/g, 'parcours CRM'],
  [/\bworkflow\b/g, 'parcours'],
  [/\bpublishing\b/g, 'édition'],
  [/\bauto-scoring\b/g, 'notation automatique'],
  [/\bauto-score\b/g, 'notation automatique'],
  [/\bAuto-scoring\b/g, 'Notation automatique'],
  [/\bscoré\b/g, 'évalué automatiquement'],
  [/\bscoring\b/g, 'notation'],
  [/\bScorer\b/g, 'Évaluer'],
  [/\bscorer\b/g, 'évaluer'],
  [/\bScore les\b/g, 'Évalue les'],
  [/\bScore \b/g, 'Évalue '],
  [/\bmatché\b/g, 'en phase'],
  [/\bmatchés\b/g, 'en phase'],
  [/\bmatching\b/g, 'mise en relation'],
  [/\bMatching\b/g, 'Mise en relation'],
  [/\btrackée\b/g, 'suivie et horodatée'],
  [/\btracké\b/g, 'suivi'],
  [/\btracker\b/g, 'suivre'],
  [/\bloggée\b/g, 'enregistrée'],
  [/\bloggé\b/g, 'enregistré'],
  [/\bPipeline intégrée\b/g, 'Circuit de validation intégré'],
  [/\bPipeline de statut\b/g, 'Circuit de validation des statuts'],
  [/\bpipeline de licensing\b/g, 'circuit de validation de licensing'],
  [/\bpipeline\b/g, 'circuit de validation'],
  [/\bmoteur de deals\b/g, 'moteur de mise en relation'],
  [/\breview d'équipe\b/gi, 'évaluation d\'équipe'],
  [/\breviewer\b/g, 'évaluateur'],
  [/\breviewers\b/g, 'évaluateurs'],
  [/\breview\b/g, 'évaluer'],
  [/\bReview\b/g, 'Évaluation'],
  [/\bcold mails\b/g, 'mails à froid'],
  [/\bcold mail\b/g, 'mail à froid'],
  [/\bcold mailer\b/g, 'contacter'],
  [/\bco-publishing\b/g, 'coédition'],
  [/\bslots portfolio\b/g, 'emplacements portfolio'],
  [/\bSlots\b/g, 'Emplacements'],
  [/\bslots\b/g, 'emplacements'],
  [/\bslot\b/g, 'emplacement'],
  [/\bInsights\b/g, 'Statistiques et retours'],
  [/\binsights\b/g, 'statistiques et retours'],
  [/\bdesigners\b/g, 'créateurs de jeu'],
  [/\bdesigner\b/g, 'créateur de jeu'],
  [/\bgame dev\b/g, 'créateur de jeu'],
  [/\bgame developer\b/g, 'créateur de jeu'],
  [/\bgame creator\b/g, 'créateur de jeu'],
  [/\bgame designers\b/g, 'créateurs de jeu'],
  ['Postuler', 'Demander l\'accès'],
  ['Contactez-moi pour fixer un rendez-vous', 'Contacte-moi pour caler un rendez-vous'],
  ['Comment pouvez-vous m\'aider pour la localisation ?', 'Comment peux-tu m\'aider pour la localisation ?'],
  ['Frapper aux portes des éditeurs m\'a épuisé, parlez-moi du Marketplace !', 'Frapper aux portes des éditeurs m\'a épuisé, parle-moi du Marketplace !'],
  ['Un meilleur workflow pour le publishing de jeux de société', 'Une meilleure façon de publier ton jeu de société'],
  ['Moins de galère. Plus de traction.', 'Moins de galère. Plus de résultats.'],
  ['Il me faut un prototype fini ?', 'Ai-je besoin d\'un prototype terminé ?'],
  ['Il me faut d\'abord un deal éditeur ?', 'Ai-je besoin d\'abord d\'un accord avec un éditeur ?'],
  ['tu seras invité(e) à évaluer les pitchs adaptés', 'on t\'invite à évaluer les pitchs adaptés'],
  ['Match avec les préférences éditeurs', 'En phase avec les préférences de l\'éditeur'],
  ['cold mailer un par un', 'les contacter un par un'],
  ['score haut contre son brief', 'obtient un bon score par rapport à ce que cherche l\'éditeur'],
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [from, to] of replacements) {
    content = content.replace(from, to);
  }
  fs.writeFileSync(file, content, 'utf8');
}

console.log(`Updated ${files.length} French locale files.`);
