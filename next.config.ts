/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.shopify.com"],
  },
  experimental: {
    useCache: true,
  },
};

module.exports = nextConfig;
