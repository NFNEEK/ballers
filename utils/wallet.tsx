import { Connection, PublicKey } from '@solana/web3.js';

export const NETWORK = "https://api.mainnet-beta.solana.com";
export const connection = new Connection(NETWORK);

export async function connectWallet() {
  if (window.solana) {
    try {
      await window.solana.connect();
      const walletPublicKey = new PublicKey(window.solana.publicKey);
      return walletPublicKey;
    } catch (err) {
      console.error(err);
      return null;
    }
  } else {
    alert("Please install a Solana wallet like Phantom or Solflare.");
    return null;
  }
}
