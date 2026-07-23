module.exports = {
  images: {
    unoptimized: true,
    domains: ['*'],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/_next/static/:path*',
        destination: '/_next/static/:path'
      }
    ]
  }
}
