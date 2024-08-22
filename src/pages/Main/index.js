import React, { useState } from 'react';
import { TonConnectButton, useTonAddress, useTonWallet } from '@tonconnect/ui-react';
import '@twa-dev/sdk';

import logo from '../../logo.svg';
import './App.css';

function MainPage() {
  const [clicks, setClicks] = useState(0);

  const userFriendlyAddress = useTonAddress();
  const wallet = useTonWallet();

  console.log({ userFriendlyAddress, wallet });

  return (
    <div className="App">
      <header className="App-header">
        <div className="head-buttons">
          <TonConnectButton />
        </div>
        <span>Clicks: {clicks}</span>
        <button className="button-clicker" type="button" onClick={() => setClicks(clicks + 1)}>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainPage;
