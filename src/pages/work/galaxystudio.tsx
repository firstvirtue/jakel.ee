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

          <h3>
          Samsung Unpack
          </h3>
          <p>
            삼성 언팩 프로젝트는 유달리 기간이 촉박하기로 유명했습니다. <br />
            제한된 시간에 완성도있는 결과물을 내는 것이 최우선 과제였고, 고도의 집중력을 가져야만 했던 기억이 납니다.
          </p>

          <figure data-size="lg" className="flex justify-center">
          <video src="/assets/projects/galaxystudio/video-03.mp4" poster="/assets/projects/galaxystudio/video-03.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg" className="flex justify-center">
          <video src="/assets/projects/galaxystudio/video-05.mp4" poster="/assets/projects/galaxystudio/video-05.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
            저는 UI와 라우팅을 맡았습니다. GNB를 클릭하면 해당 제품이 나오도록 WebGL 파트와 통신했고 뒤로가기와 제품/메뉴 클릭의 조건 처리를 라우팅 로직에 넣었습니다.
            보기보다 복잡하여 쿼리스트링이나 내부 파라미터 등 조건 처리를 위해 최대한 분기했던 기억이 나는군요.
          </p>

          <figure data-size="lg" className="flex justify-center">
          <video css={{maxHeight: '60vh'}} src="/assets/projects/galaxystudio/play-04.mp4" poster="/assets/projects/galaxystudio/play-04.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
            제품 UI에서는 특별히 워치 페이스와 스트랩을 교체하는 UI를 맡았습니다, 
            모두 같은 크기의 이미지를 디자인팀에 요청하여 레이어에 올리고, 조건에 맞는 이미지가 슬라이드 되도록 구현하였습니다.
          </p>

        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}
