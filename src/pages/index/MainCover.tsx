/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { css } from "@emotion/react"
import Image from "next/image"
import SceneContainer from "./SceneContainer"

export default function MainCover() {
  const dd = (() => {
    const date = new Date()

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  })()

  return (
    
    <>
    {/* Filter: https://css-tricks.com/gooey-effect/ */}
    <svg style={{visibility: 'hidden', position: 'absolute'}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>

      <div className="key-visual w-full max-w-screen-2xl">
        <div className="flex pt-40 pb-24 gap-8">
          <div className="relative visual w-2/3 pt-32 pb-16">
            <div className="absolute top-0 text-8xl font-bold italic capitalize"
            style={{
              'letterSpacing': '-0.03em',
              'minHeight': '100vmin'
            }}
            >
              The best of my work
            </div>

            <Link href={'/work/samsung-fund'} className="block relative rounded-2xl overflow-hidden p-8 pt-20 shadow-xl"
            style={{'backgroundColor': '#9EBED7'}}>
              <video id="key-visual" className="w-full h-full object-cover rounded-2xl shadow-xl" src="/prj.mp4" autoPlay loop muted playsInline
              style={{'viewTransitionName': 'q'}}
              ></video>

            <div className="absolute top-12 left-16 z-10">
            {/* <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path></svg> */}
              <div className="goo">
                React를 이용한
                데이터 핸들링<br />
                삼성자산운용 통합 플랫폼
              </div>
              {/* <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path></svg> */}
            </div>
            </Link>

            {/* <div
              css={{
                position: "absolute",
                width: "560px",
                height: "110px",
                backgroundColor: "#E5E5E5",
                borderRadius: "25px",
                right: 0,
                bottom: "2rem",
                transform: "translate(0, 100%)",
                overflow: "hidden",
              }}
            >
              <Image src="/app.png" width={372} height={72} alt="" css={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }} />
            </div> */}
          </div>
          <div className="flex flex-col justify-end gap-8 w-1/3">

            <div className="h-2/4 rounded-2xl overflow-hidden"
            style={{
              "backgroundColor": "#B8D2D8", 
              "width": "92%", 
              "height": "42%",
            }}
            >
            </div>

            <div className="h-2/4 rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundColor: "#83936F"
            }}>
              <img className="w-full h-full object-cover" src="/iconic20.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px', color: '#777' }}>
          이상오 (Jake Lee, firstvirtue)
          <br />
          He feels deeply, he feels tenderly
        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
          
          {/* 
            [TODO] get last published
            https://github.com/orgs/vercel/discussions/587 
          */}
          { `Last published ${dd}` }
        </div>
      </div>{' '}

      <SceneContainer />

    </>
  )
}