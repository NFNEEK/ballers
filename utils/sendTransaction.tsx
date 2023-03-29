// utils/sendTransaction.ts

import { Connection, PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js";

export async function sendTransaction(connection: Connection, wallet: any, instructions: TransactionInstruction[]) {
  const transaction = new Transaction().add(...instructions);
  transaction.feePayer = wallet.publicKey;

  const { blockhash } = await connection.getRecentBlockhash();
  transaction.recentBlockhash = blockhash;

  const signedTransaction = await wallet.signTransaction(transaction);
  const transactionId = await connection.sendRawTransaction(signedTransaction.serialize());

  return transactionId;
}
