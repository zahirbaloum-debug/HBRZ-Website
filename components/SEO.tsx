import { useHead } from '@unhead/react';
import type React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  keywords = 'commodity trading Nigeria, precious metals, institutional consulting, export coordination, NEPC compliance, CBN Form NXP, IT advisory services',
  ogImage = 'https://hbrzglobalpurity.com/favicon.ico',
}) => {
  const fullTitle = `${title} | HBRZ Global Purity`;

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
      {
        property: 'og:site_name',
        content: 'HBRZ Global Purity Trading and Consulting Services',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
    ],
    link: [{ rel: 'canonical', href: canonical }],
  });

  return null;
};

export default SEO;
