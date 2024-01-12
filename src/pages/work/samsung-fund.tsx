'use client'
import LinkTransition from "@/components/LinkTransition"
import Link from "next/link"
import Menu from "@/components/ProjectList/Menu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <Link href="/contact">
        <video 
          src="/prj.mp4" 
          autoPlay muted loop
          className=""
          style={{
            'viewTransitionName': 'p_202303',
          }}
          />
        dds
      </Link>

      <div className="flex w-full max-w-screen-2xl">
        <Menu />

        <div>

          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">src/app/page.tsx</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
