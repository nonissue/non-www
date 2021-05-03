/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import type { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Inspect from "inspx";
import { SiteContextProvider } from "src/lib/context";
import { Header } from "src/components";

import "./app.css";

type ComponentWithLayout<P> = NextComponentType<NextPageContext, any, P> & {
  getLayout?: (
    page: JSX.Element,
    layoutProps: Record<string, unknown>
  ) => JSX.Element;
};

type AppPropsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  Component: ComponentWithLayout<P> & { theme: string };
};

const MyApp: React.FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Inspect>
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
        enableSystem={true}
      >
        <SiteContextProvider>
          <Head>
            <title>non</title>
          </Head>

          <Header />
          {getLayout(<Component {...pageProps} />, pageProps)}
        </SiteContextProvider>
      </ThemeProvider>
    </Inspect>
  );
};

export default MyApp;
