import '../styles/global.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Poppins } from 'next/font/google'
import type { AppProps } from 'next/app'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],  // specify the weights you need
  subsets: ['latin'],  // specify the subsets you need
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
          body {
            background: #222222;
          }
        `}</style>
      <Component {...pageProps} />
    </>
  )
}