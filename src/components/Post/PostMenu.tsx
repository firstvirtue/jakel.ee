/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from 'react'
import { css } from "@emotion/react"
import Link from "next/link"
import Image from "next/image"
import projectData from '../../data/project-data.json'
import { useRouter } from "next/router"
import { motion, useScroll } from "framer-motion"

export default function PostMenu(props) {
  const { project } = props
  // const project = projectData[8]
  const [isOpen, setIsOpen] = useState(false)

  const skills = ["react", "next.js", "webgl", "typescript", "webpack"]
  const softwareDesigns = ["SOLID", "mvvm"]

  return (
    <>
    <div
      className="left"
      css={css`
        display: flex;
        justify-content: flex-end;
        z-index: 1;
        width: 30%;
        /* background-color: pink; */
        view-transition-name: menu;
      `}
    >
      <div className="pt-24 pl-8 pr-8 pb-10"
      css={css`
        /* background-color: hotpink; */
      `}
      >
        <div className="menu sticky top-32 rounded-lg overflow-hidden shadow-2xl"
        
        css={css`
          background-color: #000;
        `}
        >   
          <div className="text-white font-thin">
            <div
            css={{
              transition: "all 0.5s",
              paddingTop: "1rem",
              minWidth: isOpen ? "22rem" : "20rem",
              paddingLeft: isOpen ? "2rem" : "1rem",
              paddingRight: isOpen ? "2rem" : "1rem",
            }}
            >
              <span className="text-sm opacity-50">Selected Work</span>
              <h2 className="text-2xl uppercase font-normal pb-2 opacity-100">
                { project.title }
              </h2>
              <hr className="opacity-30 my-2" />
            </div>

            <div
            css={{
              position: "relative",
              paddingBottom: "70px",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
            >

              <span className="text-sm opacity-50">Client</span>
              <p className="menu__list text-base opacity-100">{ project.client }</p>
              
              <span className="block text-sm opacity-50 pt-4">Role</span>
              <p className="menu__list text-base opacity-100">
                { project.role }
              </p>

              <span className="block text-sm opacity-50 pt-4">Tech</span>
              <p className="menu__list text-base opacity-100">
                { project.keywords.map((keyword, i) => <span css={{display: "block"}} key={`keyword${i}`}>{ `${keyword} ` }</span>) }
              </p>

              <span className="block text-sm opacity-50 pt-4">Completed</span>
              <p className="menu__list text-base opacity-100">{ project.completed }</p>

              { project.awards &&
              <>
              <span className="block text-sm opacity-50 pt-4">Awards</span>
              <p className="menu__list text-base opacity-100">{ project.awards }</p>
              </>
              }

              <Link className="inline-flex gap-2 items-center pt-4 text-sm text-white" 
                href={ project.outlink } target="_blank"
              >
                <span className="leading-normal">{ project.outlink }</span>

                <span className="material-symbols-outlined text-xl leading-none">
                open_in_new
                </span>
              </Link>

              <div 
                css={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: "calc(100% - 50px)",
                  left: 0,
                  transition: "transform 0.34s ease",
                  backgroundColor: "#080808",
                  zIndex: 1,
                  transform: isOpen ? "translate3d(0, calc(-100% + 50px), 0)" : "none",
                }}
              >
                <div
                  css={{
                    position: "relative",
                    color: "#fff",
                    backgroundColor: "#080808",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    textAlign: "center",
                    height: "50px",
                    cursor: "pointer",
                  }}
                  onClick={e => setIsOpen(!isOpen)}
                >
                  <div
                    css={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      "::before": {
                        content: "''",
                        display: "block",
                        position: "absolute",
                        left: "50%",
                        bottom: 0,
                        transform: "translate(-50%, 0)",
                        width: "40px",
                        height: "4px",
                        borderRadius: "25px",
                        backgroundColor: "#ffffff",
                      }
                    }}
                  >
                    {/* More */}
                  </div>
                </div>
                {projectData.map((project, i) => {
                  return <Link
                  key={`post-${i}`}
                  href={project.link ? project.link : "#"}
                  css={{
                    display: "flex",
                    padding: "0.3rem 2rem",
                  }}
                  >
                    <div className="text-white font-normal opacity-70">
                      { project.title }
                    </div>
                  </Link>
                })}
              </div>

            </div>
            

          </div>
        </div>
      </div>
    </div>
    </>
  )
}