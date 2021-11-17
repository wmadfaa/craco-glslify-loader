const { loaderByName, addBeforeLoader } = require("@craco/craco");

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const glslifyLoader = {
      test: pluginOptions.test || /\.(glsl|vs|fs|vert|frag)$/,
      exclude: pluginOptions.exclude || /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    };

    addBeforeLoader(webpackConfig, loaderByName("file-loader"), glslifyLoader);

    return webpackConfig;
  },
};
