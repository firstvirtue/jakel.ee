'use client'

import Image from 'next/image'
import LinkTransition from '@/components/LinkTransition'
// import Link from 'next/link'
import Link from '@/components/transition-link'
import MainCover from '../components/Main/Cover'
import KeyMessage from '../components/Main/KeyMessage'
import ProjectList from '@/components/ProjectList'
import PlayGround from '../components/Main/PlayGround'
// import { useIntoStore } from '@/components/Main/store'
// import { useEffect } from 'react'

import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { t } = useTranslation(['common', 'second-page'])
  // const setIsHelloWorld = useIntoStore((state) => state.setIsHelloWorld)
  // const isView = useIntoStore((state) => state.isView)

  // useEffect(() => {
  //   setIsHelloWorld(false)
  // }, [isView])

  return (
    <main className="page flex min-h-screen flex-col items-center justify-between pr-24 pl-24">

      <MainCover />
      <KeyMessage />

      {t('second-page:h1')}

      <ProjectList />

      <div className='spacer'></div>
      
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <PlayGround />
    </main>
  )
}

type Props = {
  // Add custom props here
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'second-page',
      'footer',
    ])),
  },
})