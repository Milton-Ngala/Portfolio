/**
 * StructuredData — server component that injects JSON-LD into <body>.
 *
 * Two schemas:
 *  1. Person  — represents Milton Ngala as a professional software engineer
 *  2. WebSite — represents the portfolio site with a Sitelinks search box hint
 *
 * Placement: rendered once in the root layout, outside ThemeProvider to avoid
 * any hydration mismatch. Script tags with type="application/ld+json" are
 * inert to the browser's JS engine but fully readable by search crawlers.
 */
const StructuredData = () => {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Milton Ngala',
    alternateName: 'Milton Antony Ngala',
    url: 'https://ngala.co.ke',
    image: 'https://ngala.co.ke/Ngala_Logo.png',
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior Software Engineer specialising in .NET, C#, React, Next.js, and cloud-native architecture. Building scalable enterprise systems and full-stack applications.',
    knowsAbout: [
      '.NET Core',
      'C#',
      'ASP.NET Core',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Azure',
      'Docker',
      'Microservices',
      'REST APIs',
      'SQL Server',
      'PostgreSQL',
      'Clean Architecture',
      'Domain-Driven Design',
      'CI/CD',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    sameAs: [
      'https://linkedin.com/in/milton-antony-ngala',
      'https://github.com/milton-ngala',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'professional enquiries',
      url: 'https://ngala.co.ke/contact',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Milton Ngala — Senior Software Engineer',
    url: 'https://ngala.co.ke',
    description:
      'Portfolio and professional website of Milton Ngala, Senior Software Engineer specialising in .NET, React, and cloud architecture.',
    author: {
      '@type': 'Person',
      name: 'Milton Ngala',
      url: 'https://ngala.co.ke',
    },
    inLanguage: 'en',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Next.js 14 supports dangerouslySetInnerHTML on script tags in Server Components
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
};

export default StructuredData;
