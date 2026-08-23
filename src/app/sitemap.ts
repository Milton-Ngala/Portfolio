import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  const base = 'https://ngala.co.ke';

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [
    { path: '',           priority: 1.0, changeFrequency: 'weekly'  }, // homepage
    { path: '/work',      priority: 0.9, changeFrequency: 'monthly' }, // case studies — high recruiter value
    { path: '/services',  priority: 0.9, changeFrequency: 'monthly' }, // services — high conversion value
    { path: '/about',     priority: 0.8, changeFrequency: 'monthly' },
    { path: '/tech',      priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact',   priority: 0.8, changeFrequency: 'yearly'  },
    { path: '/privacy',   priority: 0.2, changeFrequency: 'yearly'  },
    { path: '/terms',     priority: 0.2, changeFrequency: 'yearly'  },
    { path: '/cookies',   priority: 0.2, changeFrequency: 'yearly'  },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
};

export default sitemap;
