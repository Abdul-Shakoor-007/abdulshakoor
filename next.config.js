// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Add alias for '@' to point to the 'src' or 'app' directory
    config.resolve.alias['@'] = __dirname + '/app';
    return config;
  },
};

module.exports = nextConfig;