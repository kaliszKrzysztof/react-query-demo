import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="pl" data-theme="dark">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
