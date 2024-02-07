/** @jsxImportSource @emotion/react */
'use client'
import LinkTransition from "@/components/LinkTransition"
import Link from "next/link"
import LayoutWork from "@/components/Post/LayoutWork"
import Cover from "@/components/Post/Cover"
import RelatedPost from "@/components/Post/RelatedPost"
import Image from "next/image"
import { css } from "@emotion/react"

import projectData from '../../data/project-data.json'

export default function Post() {
  
  const currentProject = projectData.find(x => x.id === 'galaxystudio')
  const prevProject = projectData.find(x => x.id === 'iconic20')
  const nextProject = projectData.find(x => x.id === 'bespoke')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Unfold Your World</h2>

          <figure data-size="lg">
          <video src="/assets/projects/galaxystudio/video-03.mp4" poster="" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
          <video src="/assets/projects/galaxystudio/video-05.mp4" poster="" autoPlay muted loop playsInline></video>
          </figure>

        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}
