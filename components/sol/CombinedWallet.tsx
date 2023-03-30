import React from 'react';
import WalletProvider from './WalletProvider';
import ConnectWalletButton from './ConnectWalletButton';

const CombinedWallet: React.FC = () => {
  return (
    <WalletProvider>
      <ConnectWalletButton />
    </WalletProvider>
  );
};

export default CombinedWallet;
