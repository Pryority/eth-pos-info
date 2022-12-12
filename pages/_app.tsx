import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="justify-center py-8 flex flex-col w-full items-center bg-gradient-to-bl from-slate-50 via-slate-50 to-stone-50 dark:from-slate-900 dark:via-slate-900 dark:to-stone-800">
      <div className="justify-center min-h-screen flex flex-col sm:w-5/6 lg:max-w-3xl items-center">
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </div>
    </div>
  );
}
