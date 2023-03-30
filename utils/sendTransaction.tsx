import { Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';

export async function sendTransaction({
  connection,
  wallet,
  instructions,
}: {
  connection: Connection;
  wallet: any; // Replace with the appropriate wallet type
  instructions: TransactionInstruction[];
}) {
  const transaction = new Transaction();
  transaction.add(...instructions);

  const { blockhash } = await connection.getRecentBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = wallet.publicKey;

  const signedTransaction = await wallet.signTransaction(transaction);
  const transactionId = await connection.sendRawTransaction(signedTransaction.serialize());

  return transactionId;
}
