import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({ title, description, keywords, canonical, ogImage }: SEOProps) {
  const siteUrl = 'https://www.lukmanglobal.com';
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const fullTitle = title.includes('LukmanGlobal') ? title : `${title} | LukmanGlobal Medical Tourism`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical || siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:site_name" content="LukmanGlobal Medical Tourism" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Schema.org structured data */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "LukmanGlobal Medical Tourism",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 44",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122003",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-1234567890",
          "contactType": "Patient Support",
          "availableLanguage": ["English", "Hindi", "Arabic"],
          "contactOption": "TollFree",
          "areaServed": "Worldwide"
        },
        "sameAs": [
          "https://www.facebook.com/lukmanglobal",
          "https://www.instagram.com/lukmanglobal"
        ]
      })}</script>
    </Helmet>
  );
}
