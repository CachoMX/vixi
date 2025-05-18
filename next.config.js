/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:any*',
          has: [
            {
              type: 'host',
              value: 'www.vixi.agency',
            },
          ],
          destination: 'https://vixi.agency/:any*',
        },
      ],
    }
  },
}

module.exports = nextConfig