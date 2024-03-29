import '@/styles/fonts.css'
import '@/styles/globals.css'
import '@/styles/styles.css'

import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useRouter, NextRouter } from "next/router";
import { useNextRouterViewTransitions } from 'use-view-transitions/next'
// import { usePathname } from "next/navigation"
// import useViewTransitionRouter from '@/hooks/useViewTransitionRouter'
import Layout from '@/components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  const router: NextRouter = useRouter();
  // @ts-ignore
  useNextRouterViewTransitions(router);
  // const transitionRouter = useViewTransitionRouter(router)
  // const pathname = usePathname();
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)