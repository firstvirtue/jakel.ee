/** @jsxImportSource @emotion/react */
'use client'
import Link from "next/link"
import LayoutWork from "@/components/Post/LayoutWork"
import Cover from "@/components/Post/Cover"
import RelatedPost from "@/components/Post/RelatedPost"
import Image from "next/image"
import { css } from "@emotion/react"

import projectData from '../../data/project-data.json'

export default function Post() {
  
  const currentProject = projectData.find(x => x.id === 'lotteshopping')
  const prevProject = projectData.find(x => x.id === 'casscool')
  const nextProject = projectData.find(x => x.id === 'hanwhadefense')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Inspire Your Lifestyle</h2>

          <h3>메인 상태 관리</h3>
          <p>
            복잡도가 높은 메인페이지를 별도의 라이브러리 없이 처리하였습니다. 중간에 fixed 로 고정되거나 오브젝트들이 역방향으로 스크롤 되고 또 상태에 따라 다시 페이지 스크롤로 복귀되는 등 유연한 뷰 상태를 정의했습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/lotteshopping/play-01.mp4" poster="/assets/projects/lotteshopping/play-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/lotteshopping/play-02.mp4" poster="/assets/projects/lotteshopping/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
            중간 영역에 진입 시 타이머와 플래그 등 여러 변수를 통해 안정적으로 상태를 관리하였습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/lotteshopping/play-03.mp4" poster="/assets/projects/lotteshopping/play-03.png" autoPlay muted loop playsInline></video>
          </figure>
        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}
