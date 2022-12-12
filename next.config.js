/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:
    [
      // Enter the domain of each photo as a string to resolve errors
    ]
  }
});

module.exports = nextConfig;
