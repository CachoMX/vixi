/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://vixiagency.com',
  generateRobotsTxt: true,
  exclude: [
    '/careers',
    '/contact/thank-you',
    '/api/*',
    '/api-docs/*'
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // Add all your specific service pages and other dynamic routes
  additionalPaths: async (config) => {
    // Define all your service pages
    const servicePages = [
      // New services
      'website-design',
      'social-media-management', 
      'ads-management',
      'monthly-graphic-design',
      'hyros-marketing-automation',
      // Previous services - if these pages actually exist
      'web-development',
      'digital-advertising',
      'social-media',
      'seo',
      'graphic-design',
      'automation'
    ];

    const servicesPaths = servicePages.map(service => ({
      loc: `/services/${service}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }));
    
    // Add blog categories to sitemap
    const blogCategories = [
      'web-development',
      'social-media',
      'digital-advertising',
      'graphic-design',
      'seo',
      'automation'
    ];
    
    const blogCategoryPaths = blogCategories.map(category => ({
      loc: `/blog/category/${category}`,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date().toISOString()
    }));
    
    // Make sure to include main pages
    const mainPages = [
      '',             // Home page
      'about',
      'services',
      'portfolio',
      'packages',
      'privacy',
      'terms',
      'contact',
      'blog'
    ];
    
    const mainPagePaths = mainPages.map(page => ({
      loc: `/${page}`,
      changefreq: 'weekly',
      priority: page === '' ? 1.0 : 0.8, // Home page gets highest priority
      lastmod: new Date().toISOString()
    }));
    
    return [...mainPagePaths, ...servicesPaths, ...blogCategoryPaths];
  },
  // This tells next-sitemap to still auto-discover pages as well
  autoLastmod: true
};