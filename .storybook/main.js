const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src//stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src//stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-controls'
  ],
}
