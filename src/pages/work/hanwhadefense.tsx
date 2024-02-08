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
  
  const currentProject = projectData.find(x => x.id === 'hanwhadefense')
  const prevProject = projectData.find(x => x.id === 'lotteshopping')
  const nextProject = projectData.find(x => x.id === 'hankooktire')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-5xl font-bold text-center">Invaluable path for better world</h2>

          <figure data-size="lg">
            {/* <img src="/assets/projects/iconic20/shot-01.png" alt=""/> */}
          </figure>

          <figure data-size="lg">
            {/* <img src="/assets/projects/iconic20/shot-02.png" alt=""/> */}
          </figure>
        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}
