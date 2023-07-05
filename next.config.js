/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ["image.tmdb.org"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
