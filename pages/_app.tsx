import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {

  console.log(`打印数据: ${JSON.stringify(pageProps)}`);
  
  return <Component {...pageProps} />;

}

export default MyApp;
