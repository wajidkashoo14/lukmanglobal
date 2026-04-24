import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  const fullTitle = `${title} | Vaidam Medical Tourism`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Schema.org for MedicalOrganization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Vaidam India",
          "url": "https://LukmanGlobal.com",
          "logo": "https://LukmanGlobal.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-123-456-7890",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
}
