// utils/user.ts
import prisma from "./prisma";

export async function storeUserChoice(walletAddress: string, choice: string) {
  try {
    const newUser = await prisma.user.create({
      data: {
        wallet: walletAddress,
        choice: choice,
      },
    });
    return newUser;
  } catch (error) {
    console.error("Error storing user choice:", error);
    throw error;
  }
}
