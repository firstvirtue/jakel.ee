import '@/styles/fonts.css'
import '@/styles/globals.css'
import '@/styles/styles.css'


import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useNextRouterViewTransitions } from 'use-view-transitions/next'
import { usePathname } from "next/navigation"
import useViewTransitionRouter from '@/hooks/useViewTransitionRouter'
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useNextRouterViewTransitions(router);
  // const transitionRouter = useViewTransitionRouter(router)
  const pathname = usePathname();
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
