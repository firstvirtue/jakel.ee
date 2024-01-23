/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react'
import { useProjectStore } from "./store"
import Link from 'next/link'
import Image from "next/image"
import { css } from "@emotion/react"
import { useRouter } from "next/router"

export default function Item(props) {
  const { project, index, related, prev, next } = props
  const router = useRouter()
  const refImg = useRef()
  const refT = useRef()
  const refH = useRef()
  const refD = useRef()
  const refWrap = useRef()

  function setBottomText() {
    if(prev) return 'Prev'
    if(next) return 'Next'
    
    return String(index).padStart(2, '0')
  }

  return (
    <>
    <Link
      href={project.link ? project.link : '#'}
      className='project-item block relative text-black pb-28 rounded-3xl overflow-hidden hover:bg-black shadow-lg'
      ref={refWrap}
      style={{
        'backgroundColor': project.cardColor ?? '#ffffff',
        'border': project.cardColor ? '2px solid transparent' : '2px solid #f3f3f3',
        'color': project.textColor ?? '#000000',
        // 'viewTransitionName': project.id ? project.id : '',
        // 'viewTransitionName': project.id ? project.id + '_wrap' : '',

        paddingTop: '24px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}

      onClick={e => {
        e.preventDefault()

        // Remove duplicate transition
        document.querySelectorAll('.cover-transition-el').forEach((x, i) => x.style.viewTransitionName = `xx${i}` )

        refImg.current.style.viewTransitionName = 'item_img'
        refT.current.style.viewTransitionName = 'item_t'
        refH.current.style.viewTransitionName = 'item_h'
        refD.current.style.viewTransitionName = 'item_d'
        refWrap.current.style.viewTransitionName = 'item_wrap'

        
        router.push(project.link ?? '#')
        // router.push('/work/samsung-fund')
      }}
    >
      <div className='v-wrap relative overflow-hidden rounded-2xl'
      ref={refImg}
      css={{
        aspectRatio: related ? "1 / 1" : `1 / ${ project.aspect }`,
      }}
      >
        {/* <video className='object-cover h-full w-full' src="/prj.mp4" autoPlay muted loop playsInline></video> */}
        <Image 
          // ref={refImg}
          className='object-cover h-full w-full rounded-2xl'
          src={project.coverImage ?? "/1.jpeg"} alt=''
          width={800} height={800}
        />

        {/* <div className='rounded-border absolute w-full h-full top-0 left-0'
        css={css`
          border: 15px solid ${project.cardColor ?? '#ffffff'};
        `}
        >
          <div className='rounded-border absolute rounded-3xl'
          style={{
            // 'transform': 'scale(1.09)'
          }}
          css={css`
            border: 15px solid ${project.cardColor ?? '#ffffff'};
            top: -7.5px;
            left: -7.5px;
            width: calc(100% + 15px);
            height: calc(100% + 15px);
          `}
          ></div>
        </div> */}
      </div>
      
      <div className='pl-7 pr-7'>
        <div ref={refT} className='mt-5 '>
          { project.keywords.map((x, i) => {
            return <span key={`tag-${i}`}>{`#${x}`} </span>
          }) }
        </div>

        <div ref={refH}
        className=" pt-1 text-3xl font-bold">
            { project.title }
        </div>
        <div ref={refD} className=' text-lg pt-2'>
            { project.desc ?? '역대급 프로젝트 추억 그 기억 아련함' }
        </div>
      </div>
      
      <div className='num absolute text-white left-0 -bottom-14 text-10xl leading-none text font-bold pt-2 text-center w-full'
      style={{
        'color': project.cardColor ? undefined : '#f3f3f3'
      }}
      >
          { setBottomText() }
      </div>
    </Link>
    </>
  )
}