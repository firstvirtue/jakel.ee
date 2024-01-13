import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "./store"
import Link from 'next/link'

export default function Item(props) {
  const { project, index } = props

  return (
    <>
    <Link
      href={project.link ? project.link : '#'}
      className='block relative text-black pl-10 pr-10 pt-10 pb-28 rounded-xl overflow-hidden'
      style={{
        'viewTransitionName': project.id ? project.id : '',
        'backgroundColor': project.cardColor ?? '#ffffff',
        'border': project.cardColor ? '' : '2px solid #f3f3f3',
        'color': project.textColor ?? '#000000',
      }}
    >
      <div className='aspect-[4/3] rounded-2xl overflow-hidden'
      style={{
        'aspectRatio': `1 / ${ project.aspect }`
      }}
      >
        {/* <video className='object-cover h-full w-full' src="/prj.mp4" autoPlay muted loop playsInline></video> */}
        <img className='object-cover h-full w-full' src={project.keyImage ?? "/1.jpeg"} alt=''
        ></img>
      </div>

      <div className='mt-5 '>
        { project.keywords.map((x, i) => {
          return <span key={`tag-${i}`}>{`#${x}`} </span>
        }) }
      </div>

      <div className=" pt-1 text-3xl font-bold">
          { project.nm }
      </div>
      <div className=' text-lg pt-2'>
          { '역대급 프로젝트' }
      </div>
      <div className='absolute text-white left-0 -bottom-14 text-10xl leading-none text font-bold pt-2 text-center w-full'
      style={{
        'color': project.cardColor ? '' : '#f3f3f3'
      }}
      >
          { '0' + index }
      </div>
    </Link>
    </>
  )
}