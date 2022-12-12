import React from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full p-8 max-w-5xl">
        <Link href="https://ethereum.org/en/whitepaper/" className="flex items-center space-x-2 transition-all ease-in-out text-slate-800/40 hover:text-slate-900 dark:text-purple-50/40 dark:hover:text-purple-100 duration-200">
          <span className="text-xs md:text-xl">Read the Ethereum Whitepaper</span>
          <ArrowTopRightOnSquareIcon className="h-3 w-3 sm:h-4 sm:w-4 font-bold"/>
        </Link>
      </div>
    </footer>
  );
}
