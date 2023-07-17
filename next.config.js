/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/personal',
        destination: '/multiple'
      },
      {
        source: '/confirm',
        destination: '/multiple'
      }
    ]
  },
  images: {
    loader: 'custom'
  }
}

module.exports = nextConfig
