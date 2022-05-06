import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { FaustJsDecorator } from "./FaustJsDecorator";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const decorators = [FaustJsDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
