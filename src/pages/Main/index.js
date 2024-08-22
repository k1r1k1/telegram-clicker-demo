import React, { useState } from 'react';
import {
  TonConnectButton, useTonAddress, useTonConnectUI, useTonWallet,
} from '@tonconnect/ui-react';
import '@twa-dev/sdk';

import logo from '../../logo.svg';
import './App.css';
import { AppLogo, DonationButton } from './styled-ui';

function MainPage() {
  const [clicks, setClicks] = useState(0);
  const [tonConnectUI] = useTonConnectUI();

  const userFriendlyAddress = useTonAddress();
  const userAddress = useTonAddress(false);
  const wallet = useTonWallet();

  const handleDonate = () => {
    tonConnectUI.sendTransaction({
      messages: [
        {
          address: '0:390a46d59d88f2a529650d0eafc944f9a9bd21f91d52409051d21898952950b9',
          amount: '1000000000',
        },
      ],
    })
      .catch((e) => console.warn(e));
  };

  console.log({ userFriendlyAddress, userAddress, wallet });

  return (
    <div className="App">
      <header className="App-header">
        <div className="head-buttons">
          {wallet && (
            <DonationButton
              type="button"
              onClick={handleDonate}
            >
              Donate 1 TON
            </DonationButton>
          )}
          <TonConnectButton />
        </div>
        <span>Clicks: {clicks}</span>
        <button
          className="button-clicker"
          type="button"
          onClick={() => setClicks(clicks + 1)}
        >
          <AppLogo
            src={logo}
            alt="logo"
            multiplier={clicks <= 20 ? clicks : 20}
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
