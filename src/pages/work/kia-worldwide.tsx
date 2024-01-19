/** @jsxImportSource @emotion/react */
'use client'
import LinkTransition from "@/components/LinkTransition"
import Link from "next/link"
import PostMenu from "@/components/Post/PostMenu"
import Image from "next/image"
import { css } from "@emotion/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <div className="flex justify-center">
        <div
        css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 500px;
        /* height: ; */
        `}
        >
          <h1 className="">기아 월드와이드 브랜드 쇼케이스</h1>
          <p>
            기아의 환골탈태 브랜드 리론칭
          </p>
        </div>

        <div className="">
          <div
            className="relative"
            css={css`
              aspect-ratio: 1 / 1.4;
              height: 100vh;
            `}
          >
            <Image
              src="/assets/projects/kia-worldwide/cover-lg.jpg"
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                view-transition-name: p_202112;
              `}
              width={800} height={800}
              alt=""
            />

            <h2 className="absolute text-11xl bottom-44 right-52 text-white uppercase">
              Kia
            </h2>

          </div>
        </div>
      </div>
      
      <div className="flex w-full max-w-screen-2xl">
      <PostMenu />

        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio libero provident at nobis dicta nulla dolore laboriosam ea nemo, earum voluptates, eaque cupiditate sunt soluta animi molestiae? Fugiat, ab sed!
        </div>
      </div>

    </main>
  )
}
