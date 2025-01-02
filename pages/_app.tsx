import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
