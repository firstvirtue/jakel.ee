import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "./store"
import Link from 'next/link'

export default function Item(props) {
  const { project } = props

  return (
    <>
    <Link href={project.link ? project.link : '#'}
      style={{
        'viewTransitionName': project.link ? 'expand' : '',
      }}
    >
      <div className="w-64 h-20 text-2xl">
          { project.nm }
      </div>
    </Link>
    </>
  )
}