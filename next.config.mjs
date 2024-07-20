/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
      if (options.isServer) {
        config.devtool = 'source-map';
      } else {
        config.devtool = 'source-map';
      }
      return config;
    },
  };
  
  export default nextConfig;
  