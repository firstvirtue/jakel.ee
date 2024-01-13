import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "./store"
import Link from 'next/link'

export default function Item(props) {
  const { project } = props

  return (
    <>
    <Link
      // onClick={e => {
      //   e.target.style.viewTransitionName = 'expand'
      // }}
      href={project.link ? project.link : '#'}
      className='block pl-10 pr-10 pt-3 pb-3 mb-5 rounded-xl'
    >
      <div className='aspect-[4/3] rounded-2xl overflow-hidden'
      style={{
        'viewTransitionName': project.id ? project.id : '',
      }}
      >
        {/* <video src="/prj.mp4" autoPlay muted loop playsInline></video> */}
        <img className='object-cover h-full w-full' src={project.keyImage ?? "/1.jpeg"} alt=''></img>
      </div>

      <div className='mt-5 text-gray-500'>
        { project.keywords.map((x, i) => {
          return <span key={`tag-${i}`}>{`#${x}`} </span>
        }) }
      </div>

      <div className="text-gray-900 pt-1 text-3xl">
          { project.nm }
      </div>
      <div className='text-gray-900 text-lg pt-2'>
          { '역대급 프로젝트' }
      </div>
    </Link>
    </>
  )
}