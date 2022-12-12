import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
// import { Faucet } from "~~/components/scaffold-eth";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full p-8">
        <div className="flex items-center space-x-2 w-full font-medium">
          <Link href="https://ethereum.org/en/whitepaper/">
            <span className="text-[19px] font-extralight">Read the </span>
            <span className="text-xl font-light transition-all ease-in-out hover:text-purple-100 duration-200">Ethereum Whitepaper</span></Link>
        </div>
      </div>
    </footer>
  );
}
