/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  }
}

module.exports = nextConfig
