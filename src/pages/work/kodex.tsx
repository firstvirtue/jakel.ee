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
  
  const currentProject = projectData.find(x => x.id === 'kodex')
  const prevProject = projectData.find(x => x.id === 'samsungcnt')
  const nextProject = projectData.find(x => x.id === 'casscool')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">All investments in the world</h2>

          <h3>Hybrid React</h3>
          <p>백엔드 팀과 연계하며 고객사 요건을 충족시키기 위해 Spring boot 위에 뷰 라이브러리 형태로 필요한 부분에 React를 사용하게 되었습니다. <br />단순 게시글 리스트류를 제외하면 데이터 연동을 위한 모든 부분은 React로 처리하게 되었습니다.</p>

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
