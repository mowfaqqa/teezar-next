import "../styles/globals.css";
import type { AppProps } from "next/app";
import App from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Context } from "../context/Context";
import { CartProvider } from "react-use-cart"; 

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <CartProvider>
      <Context>
        <Component {...pageProps} />
      </Context>
    </CartProvider>
  );
}
