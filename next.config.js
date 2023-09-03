module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    };

    // Réinitialiser la valeur de publicPath
    // config.output.publicPath = undefined;

    return config;
  },
};
