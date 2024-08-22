import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { TonConnectUIProvider, useIsConnectionRestored } from '@tonconnect/ui-react';
import { ThemeProvider } from 'styled-components';

import MainPage from 'pages/Main';
import { HOME, GHOME, WALLET } from 'constants/routes';
import ConnectWallet from 'pages/ConnectWallet';
import basicTheme from 'themes/basic';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

function Router() {
  const connectionRestored = useIsConnectionRestored();

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
        <Route exact path={HOME} element={<MainPage />} />
        <Route exact path={GHOME} element={<MainPage />} />
        <Route path={WALLET} element={<ConnectWallet />} />
      </Routes>
    </>
  ) : (<h3>Loading...</h3>);
}

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TonConnectUIProvider>
    </ThemeProvider>
  );
}

export default App;
