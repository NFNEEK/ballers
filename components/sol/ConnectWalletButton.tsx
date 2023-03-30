import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectWalletButton: React.FC = () => {
  const wallet = useWallet();

  return (
    <button onClick={() => wallet.connect()}>
      {wallet.connected ? 'Connected' : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWalletButton;
