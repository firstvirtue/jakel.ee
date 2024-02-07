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
  
  const currentProject = projectData.find(x => x.id === 'iconic20')
  const prevProject = projectData.find(x => x.id === 'hankooktire')
  const nextProject = projectData.find(x => x.id === 'galaxystudio')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Be<span css={{color: '#E06D72'}}>|</span>spoke</h2>

          <figure data-size="lg">
            <img src="/assets/projects/bespoke/bespoke01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/bespoke/bespoke02.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/bespoke/bespoke03.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/bespoke/bespoke04.png" alt=""/>
          </figure>
        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}
