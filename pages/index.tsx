import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full justify-start items-start p-4'>
      <Head>
        <title>Nemiwind</title>
        <meta name="description" content="Generated by Nemiwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={"flex flex-col space-y-16 w-full"}>
        <div className={"grid h-full space-y-8 md:space-y-6 leading-[20px] lg:space-y-8 md:text-xl cursor-default items-between text-stone-50"}>
          <span>
            <Link href={"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"} className="text-yellow-100 transition-all ease-in-out hover:text-yellow-300 duration-75">Proof of Stake</Link> is a <Link href={"https://ethereum.org/en/developers/docs/consensus-mechanisms/"} className="transition-all ease-in-out hover:text-violet-400 duration-75">consensus protocol</Link> used in <Link href={"https://ethereum.org/en/what-is-ethereum/"} className="transition-all ease-in-out hover:text-blue-400 duration-75">Ethereum</Link> <Link href={"https://ethereum.org/en/upgrades/merge/"} className="transition-all ease-in-out hover:text-orange-400 duration-75">2.0 (ETH2)</Link>. It is different from the <Link href={"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow"} className="transition-all ease-in-out hover:text-stone-400 duration-75">Proof of Work (PoW) protocol</Link>, which you may have heard of before, because <Link href={"https://bitcoin.org/en/"} className="transition-all ease-in-out hover:text-yellow-500 duration-75">Bitcoin</Link> uses <Link href={"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow"} className="transition-all ease-in-out hover:text-stone-400 duration-75">PoW</Link>. With a decentralised <Link href={"https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-a-blockchain"} className="transition-all ease-in-out hover:text-lime-500 duration-75">blockchain</Link>, these <Link href={"https://ethereum.org/en/developers/docs/consensus-mechanisms/"} className="transition-all ease-in-out hover:text-violet-400 duration-75">consensus protocols</Link> help keep everyone on the same page, so we all know what transactions have been processed and in what order. This is known as validation.
          </span>
          
          <span><Link href={"https://ethereum.org/en/upgrades/merge/"} className="transition-all ease-in-out hover:text-orange-400 duration-75">ETH2 </Link> currently has a <Link href={"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"} className="transition-all ease-in-out hover:text-yellow-300 duration-75">Proof of Stake (PoS)</Link> chain called the <Link href={"https://beaconcha.in/"} className="transition-all ease-in-out hover:text-teal-300 duration-75">Beacon Chain</Link>, <Link href={"https://beaconcha.in/"} className="transition-all ease-in-out hover:text-green-500 duration-75">which is faster, more energy efficient and more decentralised</Link> than <Link href={"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow"} className="transition-all ease-in-out hover:text-stone-400 duration-75">PoW</Link>. {"It's"} <Link href={"https://rocketpool.net/"} className="transition-all ease-in-out hover:text-cyan-400 duration-75">powered by users depositing ETH and providing an Ethereum node online 24/7 to perform the required validation</Link>. As a reward for providing the node, the <Link href={"https://beaconcha.in/"} className="transition-all ease-in-out hover:text-teal-300 duration-75">Beacon Chain</Link> gives node operators additional ETH on top of their deposits. It can be viewed similarly to earning interest in a bank account, with the exception that these rewards are generated in return for helping secure the network.</span>

          <Link href="https://vitalik.eth.limo/general/2017/12/31/pos_faq.html#what-is-proof-of-stake" className="flex items-center space-x-1 transition-all ease-in-out hover:text-pink-300 duration-75 w-full justify-end">
            <span className="text-[11px] sm:text-sm">How does <span className="font-medium">Vitalik</span> explain Proof-Of-Stake (POS)?</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4 font-bold"/>
          </Link>


          <iframe className="rounded border-2" src="https://dune.com/embeds/609518/1138523/5a23e409-945f-400d-b979-5d8fffb8f732" height="500" width="100%" title="chart 1"/>
        </div>
      </main>
    </div>
  );
}
