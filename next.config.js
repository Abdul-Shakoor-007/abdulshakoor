const nextConfig = {
  output: 'export', // <-- This must be present for static export
  images: {
    unoptimized: true, // <-- This must be present for static export
  },
};

module.exports = nextConfig;