#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const legalPath = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr', 'legal.js');
let c = fs.readFileSync(legalPath, 'utf8');

const fixes = [
  ['On traite vos données personnelles', 'Nous traitons vos données personnelles'],
  ['Tu peux gérer ou désactiver les cookies', 'Vous pouvez gérer ou désactiver les cookies'],
  ['demander tes données', 'demander vos données'],
  ['protéger tes données', 'protéger vos données'],
  ['On met en place', 'Nous mettons en place'],
  ['Si tu continues d\'utiliser', 'Si vous continuez d\'utiliser'],
  ['Si tu penses qu\'on a violé tes droits', 'Si vous estimez que nous avons violé vos droits'],
  ['de ton autorité de contrôle locale', 'de votre autorité de contrôle locale'],
  ['Si tu n\'es pas d\'accord, n\'utilise pas le Service.', 'Si vous n\'êtes pas d\'accord, n\'utilisez pas le Service.'],
  ['l\'entreprise que tu représentes', 'l\'entreprise que vous représentez'],
  ['si tu violes ces CGU', 'si vous violez ces CGU'],
  ['tu acceptes de ne pas', 'vous acceptez de ne pas'],
  ['que tu n\'es pas autorisé(e) à représenter', 'que vous n\'êtes pas autorisé à représenter'],
  ['Tu ne peux pas télécharger', 'Vous ne pouvez pas télécharger'],
  ['Tu conserves la pleine propriété de tout contenu que vous téléversez', 'Vous conservez la pleine propriété de tout contenu que vous téléversez'],
  ['Quand tu partages votre contenu', 'Lorsque vous partagez votre contenu'],
  ['tu accordes aux autres utilisateurs', 'vous accordez aux autres utilisateurs'],
  ['vous êtes propriétaire ou as l\'autorisation d\'uploader', 'vous êtes propriétaire ou avez l\'autorisation de téléverser'],
  ['qu\'à toi jusqu\'à ce que tu autorises', 'qu\'à vous jusqu\'à ce que vous autorisiez'],
  ['viole tes droits, contacte support', 'viole vos droits, contactez support'],
  ['Tu utilises le Service à ta discrétion et à tes propres risques', 'Vous utilisez le Service à votre discrétion et à vos propres risques'],
  ['Tu acceptes d\'indemniser', 'Vous acceptez d\'indemniser'],
  ['Tu peux fermer votre compte', 'Vous pouvez fermer votre compte'],
  ['si tu violes ces CGU ou abuses', 'si vous violez ces CGU ou abusez'],
  ['tes droits d\'accès', 'vos droits d\'accès'],
  ['(créateur de jeu, éditeur', '(créateur de jeu, éditeur'],
  ['uploader et afficher', 'téléverser et afficher'],
  ['uploader et licencier', 'téléverser et licencier'],
  ['Les uploads ne sont', 'Les téléversements ne sont'],
  ['notify l\'uploader', 'notifier la personne ayant téléversé'],
  ['On peut mettre à jour', 'Nous pouvons mettre à jour'],
  ['On peut recevoir', 'Nous pouvons recevoir'],
  ['On ne vend ni ne loue', 'Nous ne vendons ni ne louons'],
  ['On ne partage', 'Nous ne partageons'],
  ['On conserve vos', 'Nous conservons vos'],
  ['On peut supprimer', 'Nous pouvons supprimer'],
  ['On peut modifier', 'Nous pouvons modifier'],
  ['On s\'efforce', 'Nous nous efforçons'],
  ['On peut apporter', 'Nous pouvons apporter'],
  ['On peut mettre à jour ces CGU', 'Nous pouvons mettre à jour ces CGU'],
  ['On peut retirer', 'Nous pouvons retirer'],
  ['On répond à', 'Nous répondons à'],
  ['On utilise les données', 'Nous utilisons les données'],
  ['On peut aussi collecter', 'Nous pouvons aussi collecter'],
  ['matériaux uploadés', 'matériaux téléversés'],
  ['ton contenu uploadé', 'votre contenu téléversé'],
  ['viewers sont enregistrés', 'consultations sont enregistrées'],
  ['uploads publics', 'téléversements publics'],
];

for (const [from, to] of fixes) {
  c = c.split(from).join(to);
}

fs.writeFileSync(legalPath, c, 'utf8');
console.log('Legal.js vous pass 2 done.');
