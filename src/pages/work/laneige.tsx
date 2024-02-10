/** @jsxImportSource @emotion/react */
'use client'
import Link from "next/link"
import LayoutWork from "@/components/Post/LayoutWork"
import Cover from "@/components/Post/Cover"
import RelatedPost from "@/components/Post/RelatedPost"
import Image from "next/image"
import { css } from "@emotion/react"


import projectData from '../../data/project-data.json'

export default function Home() {

  const currentProject = projectData.find(x => x.id === 'laneige')
  const prevProject = projectData.find(x => x.id === 'fujifilm')
  const nextProject = projectData.find(x => x.id === 'galleria')

  return (
    <>
    <LayoutWork project={ currentProject }>
      
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Luminous Beauty</h2>

          <h3>
          글로벌 코스메틱 브랜드
          </h3>

          <p>
            코스메틱 브랜드 라네즈의 글로벌 웹사이트는 10개국 지역 사이트가 오픈 예정이어서 특별히 설계가 매우 중요했습니다. 관리자 페이지에서 섹션의 순서를 바꿔도 정해진 모션이 매끄럽게 진행되도록 스크립트의 변수를 모두 동적으로 계산했죠.
          </p>
          <p>
            이듬해, 3월과 5월에 각각 영어로 된 글로벌 웹사이트와 중국 사이트를 차례로 론칭 했습니다. 그러나 나머지 지역 사이트는 안타깝게도 COVID-19로 인하여 무기한 연기되었습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/laneige/main.mp4" poster="/assets/projects/laneige/main.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/laneige/shot-01.png" alt=""/>
          </figure>

          <h3 className="center">브랜드 스토리</h3>
          <p>
            라네즈의 브랜드를 소개하는 브랜드 스토리는 3개의 챕터로 구성되어 풀 페이지 인터랙션을 가지고 있습니다. 스크롤 되었다가 다시 풀페이지가 되었다가 패럴랙스가 되고 배경의 영상은 뷰에 따라 바뀌는 등 상태 관리가 매우 복잡했는데 오토마타(automata) 알고리즘을 흉내내서 매시브한 스위치문을 그래도 관리하기 편하도록 구현했습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/laneige/brand-story.mp4" poster="/assets/projects/laneige/brand-story.png" autoPlay muted loop playsInline></video>
            <figcaption>만들면서도 &lsquo;몇 명이나 이 페이지를 끝까지 볼까..&rsquo; 했던 복잡도 최상의 페이지 브랜드 스토리</figcaption>
          </figure>

          <h3>다국어</h3>

          <p>
            10개국이 예정되어 있었으나 COVID-19로 안타깝게 2개국만 추가되었습니다. 단순히 콘텐츠만 바뀌는 것이 아닌 제품 페이지의 스텝을 보여주는 추가 인터랙션 요소도 포함되었습니다.
          </p>

          <figure data-size="lg">
            <img src="/assets/projects/laneige/beautystep.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/laneige/cn.png" alt=""/>
          </figure>

          <p>
            중국 웹사이트의 경우 크로스 브라우징이 특히 기억에 남는데 UC 브라우저의 경우 자체 동영상 플레이어가 내장되어 있어 배경으로 지정된 모든 영상들을 팝업 형태로 보여주었습니다. 처음엔 굉장히 난감했는데 배경에 영상을 사용한 페이지가 많았기 때문이죠. 자바스크립트로 UC 브라우저에서만 배경이 영상일 때 포스터 이미지로 교체하는 형태로 해결했습니다.
          </p>

        </div>

      </div>

    </LayoutWork>


    <RelatedPost prev={prevProject} next={nextProject} />
    </>
  )
}
