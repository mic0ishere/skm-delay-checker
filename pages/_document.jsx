import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="application-name" content="SKM Delay Checker" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SKM Delay Checker" />
        <meta
          name="description"
          content="Check delays of SKM's in Tricity, Poland"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#009688" />

        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://skm.mic0.me" />
        <meta name="twitter:title" content="SKM Delay Checker" />
        <meta
          name="twitter:description"
          content="Check delays of SKM's in Tricity, Poland"
        />
        <meta name="twitter:image" content="https://skm.mic0.me/icon-192.png" />
        <meta name="twitter:creator" content="@mic0ishere" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SKM Delay Checker" />
        <meta
          property="og:description"
          content="Check delays of SKM's in Tricity, Poland"
        />
        <meta property="og:site_name" content="SKM Delay Checker" />
        <meta property="og:url" content="https://skm.mic0.me" />
        <meta
          property="og:image"
          content="https://skm.mic0.me/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
