module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Handle face-api.js fs module issue
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "fs": false,
        "path": false,
        "os": false
      };
      
      return webpackConfig;
    }
  }
};
