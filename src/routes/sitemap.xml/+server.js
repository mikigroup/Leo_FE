export async function GET() {
  const baseUrl = 'https://malyleo.cz'; // Skutečná doména
  
  const pages = [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/faq',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/gdpr',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: '0.5'
    },
    {
      url: '/manifest',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: '0.5'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}