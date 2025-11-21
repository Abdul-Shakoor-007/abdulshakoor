// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- This is the critical line
  images: {
    unoptimized: true, // Required for static exports
  },
};

module.exports = nextConfig;