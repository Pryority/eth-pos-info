import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Props = {}

export const RocketPool = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 text-sm sm:text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 bg-clip-text text-transparent bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-600">
          <Link href={"https://rocketpool.net"} className="font-bold ">Rocket Pool</Link><ArrowTopRightOnSquareIcon className="h-4 w-4 text-orange-500"/>
        </div> 
        <div className="text-orange-500/70">
          A base layer protocol for <span className="underline">decentralized and trustless ETH staking</span>.
        </div>
      </div>

      <span>
        Designed to support stakers of all shapes and sizes, Rocket Pool was built with the intent to allow anyone to trustlessly stake ETH to a network of decentralised node operators with full autonomy underpinned by RPL collateral.
      </span>

      <span>
        The core premise behind a protocol is to ensure the network is not beholden to any one party. This is a principle directly linked to Ethereum and ETH2 itself, and a mindset used at every stage of the process as we develop Rocket Pool for its upcoming launch.
      </span>
    </div>
  );
};