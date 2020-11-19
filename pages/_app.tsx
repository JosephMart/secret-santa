import { SSRProvider } from "@react-aria/ssr";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body,
        #__next {
          width: 100%;
          height: 100%;
          margin: 0;
          background-color: #146b3a;
        }
      `}</style>
    </SSRProvider>
  );
}

export default MyApp;
