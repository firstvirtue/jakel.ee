/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { css } from "@emotion/react"
import Image from "next/image"
import SceneContainer from "./SceneContainer"
import SceneUI from "./SceneUI"
import AppBanner from "./AppBanner"
import { useIntoStore } from './store'
import { useTranslation, Trans, i18n } from 'next-i18next'
import { motion, AnimatePresence } from "framer-motion"

export default function MainCover() {

  const isView = useIntoStore((state) => state.isView)
  const { t } = useTranslation(['common', 'second-page'])

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

      <div className="key-visual relative w-full max-w-screen-2xl ml-auto mr-auto">
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
              <video id="key-visual" className="w-full h-full object-cover rounded-2xl shadow-xl opacity-0" src="/prj.mp4"
              style={{'viewTransitionName': 'q'}}
              ></video>

              <div id="key-visual" className="w-full h-full object-cover rounded-2xl shadow-xl"></div>

            <div className="absolute top-12 left-16 z-10" css={{
              pointerEvents: 'none',
              maxWidth: '90%'
            }}>
            
            { !isView &&
              <div className="goo">
                <Trans i18nKey={'common:main-cover'} />
              </div>
            }
            
            </div>
            </Link>

            {/* <AppBanner /> */}
          </div>
          <div className="flex flex-col justify-end gap-8 w-1/3">

            <div id="portal-visual" className="h-2/4 rounded-2xl overflow-hidden"
            style={{
              "width": "92%", 
              "height": "42%",
            }}
            >
            </div>

            <AnimatePresence>
            { !isView &&
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-2/4 rounded-2xl overflow-hidden shadow-xl z-20"
              >
              <Link
              href="/work/iconic20"
              style={{
                backgroundColor: '#83936F',
                zIndex: '10'
              }}>
                <video className="w-full h-full object-cover" src="/assets/projects/iconic20/cover.mp4" autoPlay loop muted playsInline></video>
              </Link>
              </motion.div>
            }
            </AnimatePresence>
          </div>
        </div>

        <div style={{ position: 'absolute', width: '100%', bottom: 0, left: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
            
            {/* 
              [TODO] get last published
              https://github.com/orgs/vercel/discussions/587 
            */}
            { `Last published ${dd}` }
          </div>
        </div>
      </div>

      <SceneContainer />
      {isView && <SceneUI />}

    </>
  )
}