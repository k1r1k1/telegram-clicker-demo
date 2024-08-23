import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { BasePage } from 'components/Main/styled-ui';
import React from 'react';

function ConnectWallet() {
  const wallet = useTonWallet();

  return (
    <BasePage>
      <h2>{wallet ? 'Wallet connected' : 'Connect your wallet'}</h2>
      <TonConnectButton />
    </BasePage>
  );
}

export default ConnectWallet;
