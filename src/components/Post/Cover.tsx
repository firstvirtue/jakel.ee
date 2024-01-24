/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { RevealText } from "@/lib/RevealText"
import { Fragment } from "react"

export default function Cover(props) {

  const { project } = props
  const refMo = useRef()
  const refT = useRef()

  useEffect(() => {
    refMo.current = new RevealText(refT.current)
    refMo.current.reset()
    setTimeout(() => { refMo.current.animate() }, 700)
    
  }, [])

  return (
    <div 
          className="cover cover-transition-el"
          css={css`
          padding: 4rem;
          border-radius: 24px;
          background-color: white;
          position: relative;
          left: -${70}px;
          width: calc(100% + ${70}px);
          /* background-color: hotpink; */
          view-transition-name: item_wrap;
          `}>

            <div className="flex justify-center">
              <div
              css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              position: relative;
              width: 17vw;
              height: ${project.aspect * 53 + "vh"};
              height: 70vh;
              padding: 3rem;
              `}
              >
                <div
                css={css`
                  position: absolute;
                  bottom: 20%;
                  right: -30%;
                  z-index: 1;
                `}
                >
                  <span
                  ref={refT}
                  className="cover-transition-el"
                  css={{
                    viewTransitionName: 'item_t',
                    display: 'block',
                    marginBottom: '1rem',
                  }}
                  >
                    { project.keywords.map((keyword, i) => <Fragment key={`keyword_${i}`}>{ `#${keyword} ` }</Fragment>) }
                  </span>
                  <h1
                  className="cover-transition-el text-5xl font-bold"
                  css={css`view-transition-name: item_h;`}
                  >{ project.title }</h1>
                  <p
                  className="cover-transition-el text-xl mt-7"
                  css={css`view-transition-name: item_d;`}>
                    { project.desc }
                  </p>
                </div>
              </div>

              <div css={{
                display: "flex",
                alignItems: "center",
              }}>
                <div
                  className="cover-transition-el relative"
                  css={css`
                    aspect-ratio: 1 / ${project.aspect};
                    height: ${project.aspect * 53 + "vh"};
                    max-height: 70vh;
                    view-transition-name: item_img;
                  `}
                >
                  { project.coverVideo ?

                  <video
                    src={ project.coverVideo } 
                    css={css`
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    `}
                    autoPlay muted loop playsInline></video>
                  :
                  <Image
                    src={project.coverImage}
                    css={css`
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    `}
                    width={800} height={800}
                    alt=""
                  />
                  }

                  <h2 className="absolute text-6xl bottom-44 right-24 text-white uppercase">
                    { project.client }
                  </h2>
                </div>
              </div>

            </div>

          </div>
  )
}