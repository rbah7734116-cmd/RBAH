/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    stackbitPreview: process.env.STACKBIT_PREVIEW,
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecomplaybook.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
