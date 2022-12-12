import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Props = {}

export const RocketPool = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 text-sm sm:text-base md:text-lg text-stone-700 dark:text-stone-50 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/70">
      <div className="flex flex-col space-y-2 sm:space-y-0 text-center items-center sm:flex-row sm:space-x-4 md:space-x-6 tracking-wider pb-2">
        {/* <div className=""> */}
        <Link href={"https://rocketpool.net"} className="font-bold justify-center tracking-tighter uppercase text-base flex items-center bg-clip-text text-transparent bg-gradient-to-tr from-orange-500 via-orange-400 w-[140px] sm:w-[180px] to-yellow-600 hover:from-orange-600 hover:via-orange-500 hover:to-yellow-900 transition-all ease-in-out duration-75 md:text-xl">
            Rocket Pool
          <ArrowTopRightOnSquareIcon className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 ml-2"/>
        </Link>
        {/* </div> */}
        <Link href={"https://rocketpool.net"}>
          <div className="text-orange-500/70 text-xs sm:text-start sm:text-sm md:text-lg transition-all ease-in-out duration-75 hover:text-orange-600">
          A base layer protocol for <span className="underline">decentralized and trustless ETH staking</span>.
          </div>
        </Link>
      </div>

      <span>
        Designed to support stakers of all shapes and sizes, Rocket Pool was built with the intent to allow anyone to trustlessly stake ETH to a network of decentralised node operators with full autonomy underpinned by RPL collateral.
      </span>

      <span>
        The core premise behind a protocol is to ensure the network is not beholden to any one party. This is a principle directly linked to Ethereum and ETH2 itself, and a mindset used at every stage of the process as we develop Rocket Pool for its upcoming launch.
      </span>

      <span>
        Rocket Pool strives to embody the core ethos of Ethereum and DeFi, specifically the non-custodial, trustless nature that allows self-sovereignty to truly thrive.
      </span>
      
      <span>
        This is why creating the protocol layer for ETH2 staking is so important, especially with the vast majority of players either not having the technical skills to run a node, or the financial capacity to own 32 ETH.
      </span>
    </div>
  );
};