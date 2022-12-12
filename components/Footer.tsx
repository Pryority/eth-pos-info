import React from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full p-8 max-w-3xl">
        <div className="flex items-center space-x-2 w-full justify-center font-light ">
          <Link href="https://ethereum.org/en/whitepaper/" className="flex items-center space-x-1 transition-all ease-in-out text-slate-800/40 hover:text-slate-900 dark:text-purple-50/40 dark:hover:text-purple-100 duration-200">
            <span className="text-base md:text-xl">Read the Ethereum Whitepaper</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4 font-bold"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}
