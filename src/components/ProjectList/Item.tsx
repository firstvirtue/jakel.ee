/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "./store"
import Link from 'next/link'
import Image from "next/image"
import { css } from "@emotion/react"

export default function Item(props) {
  const { project, index } = props

  return (
    <>
    <Link
      href={project.link ? project.link : '#'}
      className='block relative text-black pb-28 rounded-3xl overflow-hidden hover:bg-black shadow-lg'
      style={{
        'backgroundColor': project.cardColor ?? '#ffffff',
        'border': project.cardColor ? '2px solid transparent' : '2px solid #f3f3f3',
        'color': project.textColor ?? '#000000',
        // 'viewTransitionName': project.id ? project.id : '',
      }}
    >
      <div className='v-wrap relative overflow-hidden rounded-3xl'
      style={{
        'aspectRatio': `1 / ${ project.aspect }`,
        'viewTransitionName': project.id ? project.id : '',
      }}
      >
        {/* <video className='object-cover h-full w-full' src="/prj.mp4" autoPlay muted loop playsInline></video> */}
        <Image className='object-cover h-full w-full rounded-3xl'
        src={project.CoverImage ?? "/1.jpeg"} alt=''
        style={{
          // 'viewTransitionName': project.id ? project.id : '',
        }}
        width={800} height={800}
        />

        <div className='rounded-border absolute w-full h-full top-0 left-0'
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
        </div>
      </div>
      
      <div className='pl-7 pr-7'>
        <div className='mt-5 '>
          { project.keywords.map((x, i) => {
            return <span key={`tag-${i}`}>{`#${x}`} </span>
          }) }
        </div>

        <div className=" pt-1 text-3xl font-bold">
            { project.title }
        </div>
        <div className=' text-lg pt-2'>
            { project.desc ?? '역대급 프로젝트 추억 그 기억 아련함' }
        </div>
      </div>
      
      <div className='num absolute text-white left-0 -bottom-14 text-10xl leading-none text font-bold pt-2 text-center w-full'
      style={{
        'color': project.cardColor ? undefined : '#f3f3f3'
      }}
      >
          { '0' + index }
      </div>
    </Link>
    </>
  )
}