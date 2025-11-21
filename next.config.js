// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use the turbopack section for Turbopack-specific settings
  turbopack: {
    resolveAlias: {
      '@': './app', // Map '@' to the 'app' directory
    },
  },
};

module.exports = nextConfig;