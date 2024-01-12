'use client'

import Image from 'next/image'
import LinkTransition from '@/components/LinkTransition'
// import Link from 'next/link'
import Link from '@/components/transition-link'
import KeyVisual from './index/KeyVisual'
import KeyMessage from './index/KeyMessage'
import ProjectList from '@/components/ProjectList'

export default function Home() {

  return (
    <main className="page flex min-h-screen flex-col items-center justify-between p-24">

      <KeyVisual />
      <KeyMessage />
      <ProjectList />

      {/* <Link href="/work/samsung-fund">
        <img 
        src="/1.jpeg" 
        style={{
          'viewTransitionName': 'expand',
          width: '200px',
          height: 'auto',
        }} 
        alt="" />
        dds
      </Link> */}

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

      
    </main>
  )
}
