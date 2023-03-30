import React, { ReactNode } from "react";
import Meta from "./meta";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import CombinedWallet from '@/sol/CombinedWallet';

// In your component



interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const scrolled = useScroll(50);

  return (
    <>



{/*header*/} 



      <Meta />
      
     
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
    
      <div 
        className={`fixed ${
          scrolled 
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl" 
            : "bg-white/0"
        } z-30 transition-all top-1 right-5 bottom-10`}
      >

    <div className="align-right">{<CombinedWallet />}</div>

 
</div>
   


        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="https://twitter.com/NF_NEEK ">

            <div className="flex items-center font-display text-2xl">
              
              <Image
                src="/logo.png"
                alt="H00PS LOGO"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              >
              </Image>

              <p>H00PS</p>

            </div>

          </Link>
        
        </div>


      </div>

{/*BODY*/} 



      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>


{/*FOOTER*/} 

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
