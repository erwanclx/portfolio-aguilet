import "@/styles/globals.css";
import "@/styles/card.css";
import type { AppProps } from "next/app";
import Preloader from "@/components/animations/preloader";
import Header from "@/components/navigation/header/header";
import Footer from "@/components/navigation/footer/footer";

// import SmoothScrolling from "@/components/animations/scrolling";
import { TextReveal } from "@/components/animations/text_reveal";
import { SpeedInsights } from "@vercel/speed-insights/next";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <div>
//         <Header />
//         <Component {...pageProps} />
//         <Footer />
//       </div>
//     </>
//   );
// }

export default function App({ Component, pageProps }: AppProps) {
  TextReveal();
  return (
    <>
      {/* <Preloader /> */}
      {/* <SmoothScrolling> */}
      <div>
        <Header />
        <Component {...pageProps} />
        <SpeedInsights />
        <Footer />
      </div>
      {/* </SmoothScrolling> */}
    </>
  );
}
