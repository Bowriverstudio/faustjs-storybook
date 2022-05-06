const path = require("path");
const webpack = require("webpack");
const toPath = (_path) => path.join(process.cwd(), _path);

/**
 * Configure Storybook.
 *
 * @see https://storybook.js.org/docs/react/configure/overview
 */
module.exports = {
  core: {
    builder: "webpack5",
  },
  env: (config) => ({
    ...config,
    ...process.env,
  }),
  stories: ["../src/**/**/*.stories.@(js|mdx)"],
  addons: [
    // "@storybook/preset-typescript",
    // {
    //   name: "@storybook/preset-create-react-app",
    //   options: {
    //     tsDocgenLoaderOptions: {}
    //   }
    // },
    // "storybook-addon-react-docgen",

    /**
     * The Storybook Links addon can be used to create links that navigate between stories in Storybook.
     *
     * @see https://www.npmjs.com/package/@storybook/addon-links
     */
    "@storybook/addon-links",

    /**
     * Present including "essential" Storybook addons, such as:
     *
     * - Actions - Storybook Addon Actions can be used to display data received by event handlers in Storybook.
     *    It's where the action you do are being logged.
     *
     * - Backgrounds - Storybook Addon Backgrounds can be used to change background colors inside the preview in Storybook.
     *
     * - Controls - Controls gives you a graphical UI to interact with a component's arguments dynamically, without needing to code.
     *    It creates an addon panel next to your component examples ("stories"), so you can edit them live.
     *
     * - Docs - Storybook Docs transforms your Storybook stories into world-class component documentation.
     *    - DocsPage: Out of the box, all your stories get a DocsPage. DocsPage is a zero-config aggregation
     *      of your component stories, text descriptions, docgen comments, props tables, and code examples into clean, readable pages.
     *    - MDX: If you want more control, MDX allows you to write long-form markdown documentation and stories in one file.
     *      You can also use it to write pure documentation pages and embed them inside your Storybook alongside your stories.
     *
     * - Viewport - Storybook Viewport Addon allows your stories to be displayed in different sizes and layouts in Storybook.
     *    This helps build responsive components inside of Storybook.
     *
     * - Toolbars - The Toolbars addon controls global story rendering options from Storybook's toolbar UI. It's a general purpose addon that can be used to:
     *    - set a theme for your components
     *    - set your components' internationalization (i18n) locale
     *    - configure just about anything in Storybook that makes use of a global variable
     *
     * @see https://storybook.js.org/addons/essentials
     * @see https://github.com/storybookjs/storybook/tree/master/addons/essentials
     * @see https://github.com/storybookjs/storybook/tree/next/addons/actions
     * @see https://github.com/storybookjs/storybook/tree/next/addons/backgrounds
     * @see https://github.com/storybookjs/storybook/tree/next/addons/controls
     * @see https://github.com/storybookjs/storybook/tree/next/addons/docs
     * @see https://github.com/storybookjs/storybook/tree/next/addons/viewport
     * @see https://github.com/storybookjs/storybook/tree/next/addons/toolbars
     *
     * You can disable addons you don't want through configuration.
     * @see https://github.com/storybookjs/storybook/tree/master/addons/essentials#disabling-addons
     */
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: true,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport: true,
        toolbars: true,
      },
    },
  ],
  typescript: {
    reactDocgen: false,
  },

  webpackFinal: async (config) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // https://github.com/graphql/graphql-js/issues/2721#issuecomment-752699621
    // (probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
    config.module.rules.push({
      test: /\.m?jsx?$/,
      resolve: {
        fullySpecified: false,
      },
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,

          /**
           * Map our module path aliases, so that Storybook can understand modules loaded using "components" and load the proper file.
           * Required, or Storybook will fail to import dependencies from Stories.
           * In our app we use absolute paths for importing. As an example if we have a path which is relative to the src folder, we can just write import module from "components/myComponent".
           *
           * If you set modules to ["node_modules", "src"] then you're telling Webpack to try resolve the module name react in the current directory, then work its way up. The knobs directory has a directory src with a matching package react.
           *
           * @see https://github.com/storybookjs/storybook/issues/2704#issuecomment-357407742
           */
          components: path.resolve(__dirname, "../src/components/"),
          client: path.resolve(__dirname, "../src/client/"),
          scss: path.resolve(__dirname, "../src/scss/"),
          // lib: path.resolve(__dirname, "../src/lib/"),
        },
      },
    };
  },
};
