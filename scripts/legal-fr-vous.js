#!/usr/bin/env node
/**
 * Convert French legal copy from tu to formal vous (CGU norm).
 */
const fs = require('fs');
const path = require('path');

const legalPath = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'fr', 'legal.js');
let content = fs.readFileSync(legalPath, 'utf8');

const replacements = [
  ['Ton choix actuel', 'Votre choix actuel'],
  ['Ton choix est', 'Votre choix est'],
  ['ton choix', 'votre choix'],
  ['ton navigateur', 'votre navigateur'],
  ['ton refus', 'votre refus'],
  ['quand tu utilises', 'lorsque vous utilisez'],
  ['On prend ta vie privée au sérieux et on traite tes données', 'Nous prenons votre vie privée au sérieux et nous traitons vos données'],
  ['tu acceptes les pratiques', 'vous acceptez les pratiques'],
  ['tes données personnelles', 'vos données personnelles'],
  ['de tes données', 'de vos données'],
  ['notre traitement de tes données', 'notre traitement de vos données'],
  ['Si tu as des questions', 'Si vous avez des questions'],
  ['contacte-nous.', 'contactez-nous.'],
  ['Informations que tu nous donnes', 'Informations que vous nous donnez'],
  ['(designer, éditeur', '(créateur de jeu, éditeur'],
  ['designers et distributeurs', 'créateurs de jeu et distributeurs'],
  ['que tu uploades', 'que vous téléversez'],
  ['que tu envoies', 'que vous envoyez'],
  ['tes choix', 'vos choix'],
  ['Comment nous utilisons tes informations', 'Comment nous utilisons vos informations'],
  ['héberger et afficher les matériaux que tu uploades selon tes choix', 'héberger et afficher les matériaux que vous téléversez selon vos choix'],
  ['te contacter', 'vous contacter'],
  ["t'intéresser", "pourraient vous intéresser"],
  ['Tu peux arrêter', 'Vous pouvez arrêter'],
  ['On traite tes données', 'Nous traitons vos données'],
  ['Tu peux retirer ton consentement', 'Vous pouvez retirer votre consentement'],
  ['en te désinscrivant', 'en vous désinscrivant'],
  ['On ne vend ni ne loue tes données', 'Nous ne vendons ni ne louons vos données'],
  ['On ne partage tes informations', 'Nous ne partageons vos informations'],
  ['traiter tes données', 'traiter vos données'],
  ['quand tu partages ton contenu et ton profil, et quand tu consultes', 'lorsque vous partagez votre contenu et votre profil, et lorsque vous consultez'],
  ['ce que tu as consulté ainsi que ton profil', 'ce que vous avez consulté ainsi que votre profil'],
  ['On conserve tes données', 'Nous conservons vos données'],
  ['Si tu supprimes ton compte', 'Si vous supprimez votre compte'],
  ['tes données personnelles', 'vos données personnelles'],
  ['Tu peux gérer ou désactiver les cookies dans les paramètres de ton navigateur', 'Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre navigateur'],
  ['Avec ton consentement', 'Avec votre consentement'],
  ['ton consentement', 'votre consentement'],
  ['que tu peux retirer', 'que vous pouvez retirer'],
  ['dans ton navigateur', 'dans votre navigateur'],
  ['Tes droits sous le RGPD', 'Vos droits sous le RGPD'],
  ['Tu as les droits suivants', 'Vous disposez des droits suivants'],
  ['écris-nous à', 'écrivez-nous à'],
  ['ta demande', 'votre demande'],
  ['tes données personnelles', 'vos données personnelles'],
  ["t'opposer", "vous opposer"],
  ['tu utilises le Service à tes propres risques', 'vous utilisez le Service à vos propres risques'],
  ['te seront communiqués', 'vous seront communiqués'],
  ['Si tu continues d\'utiliser', 'Si vous continuez d\'utiliser'],
  ['Si tu penses qu\'on a violé tes droits', 'Si vous estimez que nous avons violé vos droits'],
  ['tu peux nous contacter', 'vous pouvez nous contacter'],
  ['régissent ton accès et ton utilisation', 'régissent votre accès et votre utilisation'],
  ['tu acceptes ces CGU', 'vous acceptez ces CGU'],
  ['Si tu n\'es pas d\'accord, n\'utilise pas', 'Si vous n\'êtes pas d\'accord, n\'utilisez pas'],
  ['Tu dois avoir au moins 18 ans', 'Vous devez avoir au moins 18 ans'],
  ['Tu es responsable de garder tes identifiants', 'Vous êtes responsable de la confidentialité de vos identifiants'],
  ['ton compte', 'votre compte'],
  ['Tu dois être autorisé(e)', 'Vous devez être autorisé'],
  ["l'entreprise que tu représentes", "l'entreprise que vous représentez"],
  ['Ton entreprise', 'Votre entreprise'],
  ['ton compte si tu violes', 'votre compte si vous violez'],
  ['Si tu n\'es pas d\'accord, n\'utilise pas le Service. En créant un compte ou en utilisant le Service de toute autre façon, tu acceptes de ne pas', 'Si vous n\'êtes pas d\'accord, n\'utilisez pas le Service. En créant un compte ou en utilisant le Service de toute autre façon, vous acceptez de ne pas'],
  ['que tu n\'es pas autorisé(e) à représenter', 'que vous n\'êtes pas autorisé à représenter'],
  ['adressée à toi', 'adressée à vous'],
  ['Tu conserves la pleine propriété de tout contenu que tu uploades', 'Vous conservez la pleine propriété de tout contenu que vous téléversez'],
  ['ton contenu utilisateur', 'votre contenu utilisateur'],
  ['En uploadant du contenu utilisateur, tu accordes', 'En téléversant du contenu utilisateur, vous accordez'],
  ['ton contenu', 'votre contenu'],
  ['Quand tu partages ton contenu', 'Lorsque vous partagez votre contenu'],
  ['ton matériel', 'votre matériel'],
  ['Tu déclares et garantis que', 'Vous déclarez et garantissez que'],
  ['tu es propriétaire', 'vous êtes propriétaire'],
  ['tes uploads', 'vos téléversements'],
  ['à toi jusqu\'à ce que tu autorises', 'à vous jusqu\'à ce que vous autorisiez'],
  ['Si tu penses que du contenu', 'Si vous estimez que du contenu'],
  ['Preuve de ta propriété', 'Preuve de votre propriété ou autorisation'],
  ['ton signalement', 'votre signalement'],
  ['montant que tu as payé', 'montant que vous avez payé'],
  ['Tu acceptes d\'indemniser', 'Vous acceptez d\'indemniser'],
  ['ton contenu utilisateur', 'votre contenu utilisateur'],
  ['Tu peux fermer ton compte', 'Vous pouvez fermer votre compte'],
  ['Tu acceptes nos pratiques', 'Vous acceptez nos pratiques'],
  ['tes droits d\'accès', 'vos droits d\'accès'],
  ['tes informations', 'vos informations'],
  ['contacte-nous à', 'contactez-nous à'],
  ['designers (« clients', 'créateurs de jeu (« clients'],
];

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

// Catch remaining informal second person in legal file
const tuPatterns = [
  [/\btu\b/g, 'vous'],
  [/\bTu\b/g, 'Vous'],
  [/\bton\b/g, 'votre'],
  [/\bTon\b/g, 'Votre'],
  [/\btes\b/g, 'vos'],
  [/\bTes\b/g, 'Vos'],
  [/\bta\b/g, 'votre'],
  [/\bTa\b/g, 'Votre'],
  [/\bte\b/g, 'vous'],
  [/\bTe\b/g, 'Vous'],
];

// Don't run blind tu→vous - too risky for "texte", "site", etc.
// Manual check for stragglers after

fs.writeFileSync(legalPath, content, 'utf8');
console.log('Converted legal.js to vous register.');
