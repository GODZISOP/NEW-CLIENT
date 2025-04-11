/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ext.same-assets.com'], // ✅ Add this line
  },
  // experimental: {
  //   turbopack: true
  // }
};

module.exports = nextConfig;
