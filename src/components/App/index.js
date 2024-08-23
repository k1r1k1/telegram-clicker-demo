import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { TonConnectUIProvider, useIsConnectionRestored } from '@tonconnect/ui-react';
import { ThemeProvider } from 'styled-components';
import WebApp from '@twa-dev/sdk';

import MainPage from 'pages/Main';
import {
  HOME, GHOME, WALLET, SEARCH,
} from 'constants/routes';
import ConnectWallet from 'pages/ConnectWallet';
import basicTheme from 'themes/basic';
import SearchPage from 'pages/Search';

const manifestUrl = 'https://raw.githubusercontent.com/k1r1k1/telegram-clicker-build/main/tonconnect-manifest.json';

function Router() {
  const connectionRestored = useIsConnectionRestored();
  if (connectionRestored) WebApp.expand();

  return connectionRestored ? (
    <>
      <Helmet>
        <title>Clicker Clicker | Game</title>
        <meta name="description" content="Clicker Clicker / Clicking game" />
        <meta property="og:title" content="Clicker Clicker" />
        <meta
          property="og:description"
          content="Clicker Clicker / Click to win"
        />
      </Helmet>
      <Routes>
        <Route path={HOME} element={<MainPage />} />
        <Route path={SEARCH} element={<SearchPage />} />
        <Route path={WALLET} element={<ConnectWallet />} />
      </Routes>
    </>
  ) : (<h3>Loading...</h3>);
}

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <BrowserRouter basename={GHOME}>
          <Router />
        </BrowserRouter>
      </TonConnectUIProvider>
    </ThemeProvider>
  );
}

export default App;
