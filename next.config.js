/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    serverActions: true,
  },
  // Server configuration
  serverOptions: {
    port: 7011,
    hostname: '0.0.0.0'
  }
}

module.exports = nextConfig 