import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://niormedia.online';

  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/process',
    '/free-ad-audit',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const currentDateTime = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDateTime,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
