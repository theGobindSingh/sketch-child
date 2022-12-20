import "../styles/styles.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
// import { useEffect } from "react";
import Head from "next/head";

const kato = localFont({
  src: "../public/assets/fonts/kato.ttf",
  fallback: ["sans-serif"],
  weight: "400",
  variable: "--font-kato",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  // method 2
  // useEffect(() => {
  //   document.getElementById("__next")?.classList.add(kato.className);
  //   console.log(kato.style);
  // }, []);
  return (
    <>
      <Head>
        <style className="dynamic-fonts">
          {
            //method 1
            `:root{   --font-kato: ${kato.style.fontFamily};   }`
          }
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
