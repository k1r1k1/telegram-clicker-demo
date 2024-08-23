import React, { useState } from 'react';
import {
  useTonAddress, useTonConnectUI, useTonWallet,
} from '@tonconnect/ui-react';
import '@twa-dev/sdk';

import logo from '../../logo.svg';
import './main.css';
import {
  AppLogo, BasePage, ButtonClicker, DonationButton, ReactLink, ReactSpinnerContainer, TopButtons,
} from './styled-ui';

function MainPageComponent() {
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
    <BasePage>
      <TopButtons>
        {wallet && (
        <DonationButton
          type="button"
          onClick={handleDonate}
        >
          Donate 1 TON
        </DonationButton>
        )}
      </TopButtons>
      <ReactSpinnerContainer>
        <span>Clicks: {clicks}</span>
        <ButtonClicker
          type="button"
          onClick={() => setClicks(clicks + 1)}
        >
          <AppLogo
            src={logo}
            alt="logo"
            $multiplier={clicks}
          />
        </ButtonClicker>
        <ReactLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </ReactLink>
      </ReactSpinnerContainer>
    </BasePage>
  );
}

export default MainPageComponent;
