import "../../faust.config";
import { HeadlessProvider } from "@faustjs/next";
import { client } from "client";
import Header from "components/Header";

/**
 * Header Wrapper.
 */
const HeaderWrapper: React.FC = () => {
  return (
    <>
      <HeadlessProvider
        client={client}
        pageProps={{ __AUTH_CLIENT_CACHE_PROP: "", __CLIENT_CACHE_PROP: "" }}
      >
        <Header />
      </HeadlessProvider>
    </>
  );
};

export default HeaderWrapper;
