import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage = '/og-image.jpg',
  structuredData
}) => {
  const fullTitle = title ? `${title} | Pubblo` : 'Pubblo - The Deal Engine for Board Game Licensing';
  const fullDescription = description || 'The deal engine connecting board game designers, publishers, and distributors worldwide. Streamline licensing deals with standardized pitches, automated scoring, and team collaboration.';
  const fullKeywords = keywords || 'board games, game publishing, game licensing, game design, publishers, distributors, pitch platform, deal engine';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pubblo" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
