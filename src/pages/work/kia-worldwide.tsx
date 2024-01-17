'use client'
import LinkTransition from "@/components/LinkTransition"
import Link from "next/link"
import Menu from "@/components/ProjectList/Menu"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

    <div
    className="p-20"
    style={{
      'viewTransitionName': 'p_202112',
    }}
    >
      <Image
        src="/assets/projects/kia-worldwide/cover-lg.jpg"
        width={1400} height={1000}
        className=""
        alt=""
      />

    </div>
      
      <div className="flex w-full max-w-screen-2xl">
        <Menu />        
      </div>

    </main>
  )
}
