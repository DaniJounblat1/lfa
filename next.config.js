/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: ["placeholder.com"],
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;