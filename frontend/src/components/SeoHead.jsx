import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const SeoHead = ({ path }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'it';

  // Genera URL per le versioni localizzate della pagina
  const baseUrl = window.origin; // Cambia con il tuo dominio
  const currentUrl = `${baseUrl}${path || ''}`;

  // Definisci le lingue alternative disponibili
  const languages = [
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'English' }
  ];

  // Genera gli URL alternativi per ciascuna lingua
  const alternateUrls = languages.map(lang => ({
    hrefLang: lang.code,
    href: `${baseUrl}${path || ''}${path ? '' : lang.code === 'it' ? '' : `?lng=${lang.code}`}`
  }));

  return (
    <Helmet>
      {/* Meta tag fondamentali */}
      <html lang={currentLanguage} />
      <title>{t('seo.title')}</title>
      <meta name="description" content={t('seo.description')} />

      {/* Meta tag Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={t('seo.ogTitle')} />
      <meta property="og:description" content={t('seo.ogDescription')} />
      <meta property="og:image" content={`${baseUrl}/og-image.svg`} />
      <meta property="og:locale" content={currentLanguage === 'it' ? 'it_IT' : 'en_US'} />
      {currentLanguage === 'it' ? <meta property="og:locale:alternate" content="en_US" /> : <meta property="og:locale:alternate" content="it_IT" />}

      {/* Meta tag Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('seo.twitterTitle')} />
      <meta name="twitter:description" content={t('seo.twitterDescription')} />
      <meta name="twitter:image" content={`${baseUrl}/twitter-image.svg`} />

      {/* Meta tag per la localizzazione */}
      <meta name="geo.region" content={currentLanguage === 'it' ? 'IT' : 'US'} />
      <meta name="geo.placename" content={currentLanguage === 'it' ? 'Italia' : 'United States'} />

      {/* Tag Link per le pagine alternative in altre lingue */}
      <link rel="canonical" href={currentUrl} />
      {alternateUrls.map((alt) => (
        <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}

      {/* Schema.org JSON-LD structured data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "${t('seo.schemaName')}",
            "description": "${t('seo.schemaDescription')}",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "inLanguage": "${currentLanguage}",
            "author": {
              "@type": "Organization",
              "name": "SimpleQR",
              "url": "${baseUrl}"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

SeoHead.propTypes = {
  path: PropTypes.string
};

export default SeoHead;
