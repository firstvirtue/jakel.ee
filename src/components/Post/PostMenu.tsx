/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from 'react'
import { css } from "@emotion/react"
import Link from "next/link"
import Image from "next/image"
import projectData from '../../data/project-data.json'
import { useRouter } from "next/router"
import { motion, useScroll } from "framer-motion"
import useInterval from '@/hooks/useInterval'

export default function PostMenu(props) {
  const { project } = props
  // const project = projectData[8]
  const [isOpen, setIsOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isUp, setIsUp] = useState(false)
  const [isDown, setIsDown] = useState(false)

  function handleProgress() {
    if(progress >= 0.99) {
      setIsOpen(true)
    }

    setProgress(progress + 0.1)
  }

  useEffect(() => {
    if(isOpen) {
      setIsUp(true)
      setTimeout(() => {
        setIsUp(false)
        setProgress(0)
      }, 400)
    }
  }, [isOpen])

  useInterval(handleProgress, progress !== 0 ? 100 : null)

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
              transition: "all 0.5s ease",
              paddingTop: "1rem",
              minWidth: isOpen ? "24rem" : "20rem",
              paddingLeft: isOpen ? "3rem" : "1rem",
              paddingRight: isOpen ? "3rem" : "1rem",
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
              <div
                css={{
                  opacity: isOpen ? 0 : 1,
                  transition: 'all 0.34s',
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

                { project.outlink &&
                <Link className="inline-flex gap-2 items-center pt-4 text-sm text-white" 
                  href={ project.outlink } target="_blank"
                >
                  <span className="leading-normal"
                    css={{
                      textDecoration: project.strikeThrough ? 'line-through' : '',
                    }}
                  >
                    { project.outlink }
                  </span>

                  <span className="material-symbols-outlined text-xl leading-none">
                  open_in_new
                  </span>
                </Link>
                }
                { project.strikeThrough && <div className='text-xs'>{ project.strikeThrough }</div> }
              </div>

              <div 
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 'calc(100% - 50px)',
                  left: 0,
                  transition: progress > 0.99 ? 'transform 0.5s ease' : 'transform 0.34s ease',
                  backgroundColor: '#080808',
                  zIndex: 1,
                  transform: isOpen ? 'translate3d(0, calc(-100% + 50px), 0)' : 'none',
                }}
                onMouseLeave={e => setIsOpen(false)}
              >
                <div
                  css={{
                    position: 'relative',
                    color: '#fff',
                    backgroundColor: '#080808',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    textAlign: 'center',
                    minHeight: '50px',
                    cursor: 'pointer',
                  }}
                  onClick={e => setIsOpen(!isOpen)}
                  onMouseEnter={e => {
                    
                    if(progress === 0 && !isOpen) {
                      handleProgress()
                    }

                    if(isOpen) {
                      setIsDown(true)
                    }
                    
                  }}
                  onMouseLeave={e => {
                    setProgress(0)
                    setIsDown(false)
                  }}
                >
                  <div
                    css={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '40px',
                      height: '4px',
                      // backgroundColor: isUp || isDown ? 'transparent' : 'white',
                      borderRadius: '25px',
                      // overflow: 'hidden',
                      transition: 'all 0.2s ease',
                      '::after': {
                        content: "''",
                        position: 'absolute',
                        zIndex: 1,
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: progress * 100 + '%',
                        borderRadius: '25px',
                        backgroundColor: '#fff',
                        transition: isUp ? '' : 'all 0.2s',
                      }
                    }}
                  >
                    <span
                    css={{
                      display: 'block',
                      position: 'absolute',
                      left: '1px',
                      width: '20px',
                      height: '4px',
                      borderRadius: '25px',
                      backgroundColor: '#999',
                      transformOrigin: 'right',
                      transform: isUp ? 'rotateZ(-30deg)' : isDown ? 'rotateZ(30deg)' : '',
                      transition: 'all 0.4s ease',
                    }}
                    ></span>
                    <span
                    css={{
                      display: 'block',
                      position: 'absolute',
                      right: '1px',
                      width: '20px',
                      height: '4px',
                      
                      borderRadius: '25px',
                      backgroundColor: '#999',
                      transformOrigin: 'left',
                      transform: isUp ? 'rotateZ(30deg)' : isDown ? 'rotateZ(-30deg)' : '',
                      transition: 'all 0.4s ease',
                    }}
                    ></span>
                  </div>

                </div>
                <div
                  css={{
                    overflowY: 'auto',
                    paddingBottom: '1rem',
                    padding: '1rem 0.5rem',
                    '::-webkit-scrollbar': {
                      width: '5px',
                      height: '8px',
                      backgroundColor: '#aaa',
                    },
                    '::-webkit-scrollbar-thumb': {
                      backgroundColor: '#000'
                    },

                  }}
                >
                {projectData.map((project, i) => {
                  return <Link
                  key={`post-${i}`}
                  href={project.link ? project.link : '#'}
                  css={{
                    display: 'flex',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    ':hover': {
                      backgroundColor: '#191919',
                    }
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
    </div>
    </>
  )
}