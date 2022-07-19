import "@vercel/examples-ui/globals.css";

import type {AppProps} from "next/app";

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    // <Layout title="Geolocation" path="edge-functions/geolocation">
    <Component {...pageProps} />
    // </Layout>
  );
}
