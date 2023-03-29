import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

interface ConnectWalletButtonProps {}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = () => {
  const { connected, connect } = useWallet();

  function handleConnect() {
    if (!connected) {
      connect();
    }
  }

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handleConnect}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
