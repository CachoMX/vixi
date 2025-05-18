/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vixi.agency', // Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt along with the sitemap
  exclude: [
    '/careers',
    '/contact/thank-you'
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
};
