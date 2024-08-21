import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router';
import MainPage from 'pages/Main';
import { HOME, WALLET } from 'constants/routes';
import ConnectWallet from 'pages/ConnectWallet';
import { ThemeProvider } from 'styled-components';
import basicTheme from 'themes/basic';
import { BrowserRouter } from 'react-router-dom';

function Router() {
  return (
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
        <Route path={WALLET} element={<ConnectWallet />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
