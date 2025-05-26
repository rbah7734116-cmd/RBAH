/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    stackbitPreview: process.env.STACKBIT_PREVIEW,
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      'ecomplaybook.co',       // ← سابقًا أضفناه
      'cdn.shopify.com'        // ← الآن نضيف هذا أيضًا
    ],
  },
};

module.exports = nextConfig;
