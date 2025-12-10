import React from 'react';
import Head from '@docusaurus/Head';

export default function SchemaHead({ 
  type = 'Article', 
  question = null, 
  answer = null,
  author = 'P.H.R.O.N.O.S. Observatory',
  datePublished = new Date().toISOString().split('T')[0],
  headline = null,
  description = null
}) {
  
  const generateSchema = () => {
    if (type === 'FAQ' && question && answer) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
          }
        }]
      };
    }
    
    // Default Article schema
    return {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": headline || "P.H.R.O.N.O.S. Observatory Research",
      "description": description || "Research from the P.H.R.O.N.O.S. Observatory on strategic foresight and decision-making.",
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "P.H.R.O.N.O.S. Observatory",
        "url": "https://phronos.org"
      },
      "datePublished": datePublished,
      "inLanguage": "en-US"
    };
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Head>
  );
}
