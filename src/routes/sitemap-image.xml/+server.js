export async function GET() {
  const baseUrl = 'https://malyleo.cz';
  
  const images = [
    {
      url: '/',
      images: [
        {
          loc: `${baseUrl}/maly_leo_logo.svg`,
          title: 'Malý Leo Logo',
          caption: 'Logo Malý Leo'
        },
        {
          loc: `${baseUrl}/hp_meal_new.webp`,
          title: 'Hlavní jídlo',
          caption: 'Ukázka hlavního jídla'
        },
        {
          loc: `${baseUrl}/meal_curry.webp`,
          title: 'Curry jídlo',
          caption: 'Ukázka curry jídla'
        },
        {
          loc: `${baseUrl}/meal_cabbage.webp`,
          title: 'Zelí jídlo',
          caption: 'Ukázka zelí jídla'
        },
        {
          loc: `${baseUrl}/meal_carrot.webp`,
          title: 'Mrkev jídlo',
          caption: 'Ukázka mrkev jídla'
        },
        {
          loc: `${baseUrl}/meal_orange.webp`,
          title: 'Oranžové jídlo',
          caption: 'Ukázka oranžového jídla'
        }
      ]
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1">
${images.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
} 