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
      style={{
        'viewTransitionName': project.id ? project.id : '',
      }}
      className='block pb-4'
    >
      <div className='aspect-square rounded-2xl overflow-hidden'>
        {/* <video src="/prj.mp4" autoPlay muted loop playsInline></video> */}
        <img className='object-cover h-full w-full' src="/1.jpeg" alt=''></img>
      </div>
      <div className="w-64 text-2xl">
          { project.nm }
      </div>
      <div>
          { '역대급 프로젝트' }
      </div>
    </Link>
    </>
  )
}