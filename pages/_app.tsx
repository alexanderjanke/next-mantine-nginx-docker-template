import { AppShell, ColorScheme, ColorSchemeProvider, Header, MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme): void =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <AppShell
            padding="md"
            fixed
            header={
              <Header height={60} p="xs">
                <div>Topbar</div>
              </Header>
            }
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
              },
            })}
          >
            {/* Your application here */}
            <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
