import React from "react";

export default function Header() {
  return (
    <footer className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full p-8">
        <div className="flex flex-col items-start w-full font-medium text-xl md:text-3xl">
          <span className="cursor-default uppercase tracking-[-1.62px] bg-clip-text font-bold text-transparent bg-gradient-to-tr from-yellow-500 via-yellow-500 to-orange-500"><span className="font-bold text-yellow-300">E</span>thereum <span className="font-bold text-yellow-300">P</span>roof <span className="font-bold text-yellow-300">O</span>f <span className="font-bold text-yellow-300">S</span>take</span>
        </div>
      </div>
    </footer>
  );
}
