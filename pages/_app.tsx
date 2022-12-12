import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="justify-center font-mono flex flex-col w-full items-center bg-gradient-to-bl from-teal-50 via-teal-100 to-orange-600/50 dark:from-slate-900 dark:via-slate-900 dark:to-stone-800">
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
