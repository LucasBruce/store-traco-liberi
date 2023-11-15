const { defineConfig } = require("@vue/cli-service");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const analyzer = new BundleAnalyzerPlugin({
  openAnalyzer: false,
  generateStatsFile: false,
  analyzerMode: "disabled",
});

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "development"
) {
  console.info("--------------------ENDPOINT-------------------");
  console.info(`    ENVERONMENT => ${process.env.NODE_ENV}`);
  console.info(`API-ENVERONMENT => ${process.env.VUE_APP_API_URL}`);
  console.info("-----------------------------------------------");
}

if (process.env.NODE_ENV === "production") {
  analyzer.opts.openAnalyzer = true;
  analyzer.opts.generateStatsFile = true;
  analyzer.opts.analyzerMode = "static";
}

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV,
  configureWebpack: {
    plugins: [analyzer],
  },
  transpileDependencies: true,
});
