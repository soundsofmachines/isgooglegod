const path = require("path")
const toPath = (_path) => path.join(process.cwd(), _path)
const webpack = require("webpack")


module.exports = {
  typescript: {
    reactDocgen: "none",
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
  ],
  babel: (options) => {
    options.presets = options.presets.map((preset) => {
      if (Array.isArray(preset) && preset[0].includes("@babel/preset-react")) {
        return [require.resolve("@babel/preset-react"), { runtime: "classic" }]
      }

      return preset
    })

    return options
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": path.join(__dirname, "../src/assets"),
      "@cms": path.join(__dirname, "../src/cms"),
      "@data": path.join(__dirname, "../src/data"),
      "@components": path.join(__dirname, "../src/components"),
      "@constants": path.join(__dirname, "../src/constants"),
      "@hooks": path.join(__dirname, "../src/hooks"),
      "@styles": path.join(__dirname, "../src/styles"),
      "@theme": path.join(__dirname, "../src/theme"),
      "@utils": path.join(__dirname, "../src/utils"),
      "@views": path.join(__dirname, "../src/views"),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.__NEXT_IMAGE_OPTS": JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: "/",
          loader: "default",
        }),
      })
    )

    return config;
  },
}