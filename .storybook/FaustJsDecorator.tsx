import "../src/faust.config";

import * as React from "react";

import { StoryContext, StoryFn } from "@storybook/addons";

import { client } from "../src/client";
import { FaustProvider } from "@faustjs/next";

export const FaustJsDecorator = (
  Story: StoryFn<any>,
  context: StoryContext
) => {
  return (
    <>
      <FaustProvider
        client={client}
        pageProps={{ __AUTH_CLIENT_CACHE_PROP: "", __CLIENT_CACHE_PROP: "" }}
      >
        <Story {...context} />
      </FaustProvider>
    </>
  );
};
