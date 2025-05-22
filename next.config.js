/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false // It's good practice to keep this false to catch build errors
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Allows any path under this hostname
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com', // Added in case you use images from my generation attempts
        port: '',
        pathname: '/**',
      },
      // You can add other allowed hostnames here in the future
      // For example, if you use a CDN or another image hosting service:
      // {
      //   protocol: 'https',
      //   hostname: 'your-cdn-domain.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
}

module.exports = nextConfig
