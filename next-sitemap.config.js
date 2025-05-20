/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://vixiagency.com',
  generateRobotsTxt: true,
  exclude: [
    '/careers',
    '/contact/thank-you'
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // Add all your dynamic routes
  additionalPaths: async (config) => {
    const services = [
      'web-development',
      'digital-advertising',
      'social-media',
      'seo',
      'graphic-design',
      'automation'
    ]

    return services.map(service => ({
      loc: `/services/${service}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }))
  }
};
