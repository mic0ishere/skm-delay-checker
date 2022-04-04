import "../style/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SKM Delay Checker</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
