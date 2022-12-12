import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Nav";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="justify-center font-mono flex flex-col w-full items-center bg-gradient-to-bl from-slate-50 via-slate-50 to-stone-50 dark:from-slate-900 dark:via-slate-900 dark:to-stone-800">
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
