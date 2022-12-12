import React from "react";

export default function Nav() {
  return (
    <header className="flex flex-col items-center w-full md:p-4">
      <div className="grid grid-cols-4 items-center text-[8px] sm:text-base md:text-lg w-full justify-around bg-black/40 rounded-lg border-2 border-stone-700/30 text-lime-400 p-2 leading-3">
        <div className="flex justify-center text-center items-center cols-span-2">
          <span className="capitalize">
            Solo home staking
          </span>
        </div>

        <div className="flex justify-center text-center items-center cols-span-2">
          <span className="capitalize">
              Staking as a service
          </span>
        </div>

        <div className="flex justify-center text-center items-center cols-span-2">
          <span className="capitalize">
              Pooled staking
          </span>
        </div>


        <div className="flex justify-center text-center items-center cols-span-2">
          <span className="capitalize">
              Centralized exchanges
          </span>
        </div>
      </div>
    </header>
  );
}
