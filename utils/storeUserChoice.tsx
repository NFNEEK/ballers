// utils/storeUserChoice.ts
import prisma from './prismaClient';

export async function storeUserChoice(walletAddress: string, userChoice: number) {
  try {
    const choice = await prisma.choice.create({
      data: {
        walletAddress,
        choice: userChoice,
      },
    });

    return choice;
  } catch (error) {
    console.error('Error storing user choice:', error);
    throw error;
  }
}
