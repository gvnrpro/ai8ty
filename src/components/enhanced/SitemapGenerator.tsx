
import React from 'react';

const SitemapGenerator: React.FC = () => {
  const generateSitemap = () => {
    const baseUrl = 'https://ai8ty.com';
    const currentDate = new Date().toISOString();
    
    const pages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/services', priority: '0.9', changefreq: 'monthly' },
      { url: '#website-audit', priority: '0.8', changefreq: 'monthly' },
      { url: '#why-this-works', priority: '0.7', changefreq: 'monthly' },
      { url: '#guarantee', priority: '0.7', changefreq: 'monthly' },
      { url: '#who-this-is-for', priority: '0.6', changefreq: 'monthly' },
      { url: '#contact', priority: '0.8', changefreq: 'weekly' },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={generateSitemap}
      className="hidden"
      aria-hidden="true"
    >
      Generate Sitemap
    </button>
  );
};

export default SitemapGenerator;
