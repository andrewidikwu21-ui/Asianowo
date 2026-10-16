import type { APIRoute } from 'astro';
import siteData from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = site ? new URL('sitemap-index.xml', site).href : `https://${siteData.contact.domain}/sitemap-index.xml`;

  if (!siteData.LAUNCH) {
    return new Response(
      `User-agent: *\nDisallow: /\n`,
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      }
    );
  }

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
};
