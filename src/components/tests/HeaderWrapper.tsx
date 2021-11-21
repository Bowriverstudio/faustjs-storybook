import "../../faust.config";
import { FaustProvider } from "@faustjs/next";
import { client } from "client";
import Header from "components/Header";

/**
 * Header Wrapper.
 */
const HeaderWrapper: React.FC = () => {
  return (
    <>
      <FaustProvider
        client={client}
        pageProps={{ __AUTH_CLIENT_CACHE_PROP: "", __CLIENT_CACHE_PROP: "" }}
      >
        <Header />
      </FaustProvider>
    </>
  );
};

export default HeaderWrapper;
