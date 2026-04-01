import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  const base = 'https://ngala.co.ke';
  const routes = ['', '/about', '/work', '/tech', '/contact'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
};

export default sitemap;
