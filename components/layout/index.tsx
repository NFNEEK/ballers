import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import UserDropdown from "./user-dropdown";
import { connectWallet } from "../../utils/wallet";
import ConnectWalletButton from '../sol/ConnectWalletButton';
import React,{ ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
const { data: session, status } = useSession();
const scrolled = useScroll(50);// ...
const [walletConnected, setWalletConnected] = useState(false);

  const handleWalletConnection = async () => {
    try {
      await connectWallet();
      setWalletConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };


  return (
    <>
      <Meta />
      <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/">
            <a className="flex items-center font-display text-2xl">
              <Image
                src="/logo.png"
                alt="H00PS LOGO"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              ></Image>
              <p>H00PS</p>
            </a>
          </Link>
          <div>
            <AnimatePresence>
              {!session && status !== "loading" ? (
                <ConnectWalletButton
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={handleWalletConnection}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  CONNECT WALLET
                </ConnectWalletButton>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">
          Brought to you by{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/drippy_lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            DRIPPY LABS
          </a>
        </p>
      </div>
    </>
  );
};

export default Layout;