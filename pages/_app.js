import { SessionProvider } from "next-auth/react";
import AppProviders from "../components/AppProviders";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </SessionProvider>
  );
}

export default MyApp;
