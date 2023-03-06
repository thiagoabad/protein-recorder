import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
//import "../css/customcss.css"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return <Component {...pageProps} />
}
