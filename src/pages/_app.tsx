import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useNextRouterViewTransitions } from 'use-view-transitions/next'
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useNextRouterViewTransitions(router);
  const pathname = usePathname();
  
  return <Component {...pageProps} />
}
