import "../styles/globals.css";
import AppProviders from "./AppProviders";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <AppProviders>
          <Component {...pageProps} />
        </AppProviders>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <AppProviders>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProviders>
    </SessionProvider>
  );
}

export default MyApp;
