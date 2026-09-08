#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const legalPath = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr', 'legal.js');
let c = fs.readFileSync(legalPath, 'utf8');

const legalFixes = [
  ["t'intéresser", "vous intéresser"],
  ["t'opposer", "vous opposer"],
  ['Si tu continues d\'utiliser', 'Si vous continuez d\'utiliser'],
  ['Si tu penses qu\'on a violé tes droits', 'Si vous estimez que nous avons violé vos droits'],
  ['Si tu n\'es pas d\'accord, n\'utilise pas le Service.', 'Si vous n\'êtes pas d\'accord, n\'utilisez pas le Service.'],
  ['Si tu n\'es pas d\'accord, n\'utilise pas le Service. En', 'Si vous n\'êtes pas d\'accord, n\'utilisez pas le Service. En'],
  ['être habilité(e) à respecter', 'être habilité à respecter'],
  ["l'entreprise que tu représentes", "l'entreprise que vous représentez"],
  ['ou abuses du Service', 'ou abusez du Service'],
  ['que tu n\'es pas autorisé(e) à représenter', 'que vous n\'êtes pas autorisé à représenter'],
  ['Uploader ou partager', 'Téléverser ou partager'],
  ['contenu uploadé ou dans', 'contenu téléversé ou dans'],
  ['Uploader ou introduire', 'Téléverser ou introduire'],
  ["ou as l'autorisation d'téléverser", 'ou avez l\'autorisation de téléverser'],
  ["qu'à toi jusqu'à ce que tu autorises", "qu'à vous jusqu'à ce que vous autorisiez"],
  ["notifier l'uploader", 'notifier la personne ayant téléversé'],
  ['Preuve de votre propriété ou autorisation ou autorisation', 'Preuve de votre propriété ou autorisation'],
  ['Tu acceptes d\'indemniser', 'Vous acceptez d\'indemniser'],
  ['contenu uploadé peut être', 'contenu téléversé peut être'],
  ['tes droits d\'accès', 'vos droits d\'accès'],
  ['Si on transfère', 'Si nous transférons'],
  ['on assure des garanties', 'nous assurons des garanties'],
  ['on supprime ou anonymise', 'nous supprimons ou anonymisons'],
  ['on utilise Google Analytics', 'nous utilisons Google Analytics'],
  ['On a activé l\'anonymisation', 'Nous avons activé l\'anonymisation'],
  ['n\'utilisons pas Google Analytics', 'n\'utilisons pas Google Analytics'],
  ['On ne collecte pas', 'Nous ne collectons pas'],
  ['Si on apprend', 'Si nous apprenons'],
  ['on les supprime', 'nous les supprimons'],
  ['On s\'efforce', 'Nous nous efforçons'],
  ['on ne peut garantir', 'nous ne pouvons garantir'],
  ['améliorer et personnaliser le Service via analytics et feedback', 'améliorer et personnaliser le Service via des statistiques d\'usage et des retours utilisateurs'],
];

for (const [from, to] of legalFixes) {
  c = c.split(from).join(to);
}
fs.writeFileSync(legalPath, c, 'utf8');
console.log('legal.js fixed');
