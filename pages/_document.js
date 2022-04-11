import { Html, Head, Main, NextScript } from "next/document";
import Layout from "../components/Layout/Layout";
export default function Document() {
  return (
    <Html lang="en">
      <Layout>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Layout>
    </Html>
  );
}
