import React, { useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, clusterApiUrl } from '@solana/web3.js';

// Set up the Solana connection
const network = clusterApiUrl('devnet'); // Change 'devnet' to the desired network
const connection = new Connection(network);

function ChoiceComponent() {
  const { connected, connect, publicKey } = useWallet();
  const [submitting, setSubmitting] = useState(false);

  async function handleChoiceSubmit(userChoice: number) {
    setSubmitting(true);
    try {
      // Create Solana instructions for the smart contract
      const instructions = createInstructionsForSmartContract(userChoice); // Replace with your actual function to create instructions

      // Execute Solana transaction
      const transactionId = await sendTransaction(connection, publicKey, instructions);

      // Store user choice in the database
      const storedChoice = await storeUserChoice(publicKey.toString(), userChoice);

      console.log('Choice submitted successfully:', storedChoice);
    } catch (error) {
      console.error('Error submitting choice:', error);
    } finally {
      setSubmitting(false);
    }
  }

  function handleConnect() {
    if (!connected) {
      connect();
    }
  }

  return (
    <div>
      <ConnectWalletButton />
      <button onClick={() => handleChoiceSubmit(1)} disabled={!connected || submitting}>
        Option 1
      </button>
      <button onClick={() => handleChoiceSubmit(2)} disabled={!connected || submitting}>
        Option 2
      </button>
    </div>
  );
}

export default ChoiceComponent;