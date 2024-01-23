/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Image from "next/image"

export default function Cover(props) {

  const { project } = props

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
                  className="cover-transition-el"
                  css={css`view-transition-name: item_t;`}>
                    { project.keywords.map((keyword, i) => <span key={`keyword${i}`}>{ `#${keyword} ` }</span>) }
                  </span>
                  <h1
                  className="cover-transition-el text-4xl font-bold"
                  css={css`view-transition-name: item_h;`} 
                  >{ project.title }</h1>
                  <p
                  className="cover-transition-el text-xl m-7"
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
                  className="relative"
                  css={css`
                    aspect-ratio: 1 / ${project.aspect};
                    height: ${project.aspect * 53 + "vh"};
                    max-height: 70vh;
                  `}
                >
                  <Image
                    className="cover-transition-el"
                    src={project.coverImage}
                    css={css`
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      view-transition-name: item_img;
                    `}
                    width={800} height={800}
                    alt=""
                  />

                  <h2 className="absolute text-6xl bottom-44 right-24 text-white uppercase">
                    { project.client }
                  </h2>
                </div>
              </div>

            </div>

          </div>
  )
}