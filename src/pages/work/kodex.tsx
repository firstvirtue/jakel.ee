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
            <video src="/assets/projects/kodex/play-01.mp4" poster="/assets/projects/kodex/play-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <h3>메인 트랜지션</h3>
          <p>
            etf/fund 2개의 도메인으로 나뉘어져 있어 메인 페이지가 2종이 있게 되었습니다. <br />
            두 페이지간 클릭으로 인터랙티브하게 이동할 수 있도록 pushState를 사용하여 화면 전환을 했고 키비주얼의 카드는 디자인 가이드에 맞춰 타입 분류를 했습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/kodex/play-02.mp4" poster="/assets/projects/kodex/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <h3>상품 리스트 파라미터</h3>
          <p>
            수 많은 파라미터를 API로 호출하여 알맞은 상품 데이터를 가져와 유려하게 상품 리스트를 렌더링하는 것은 이번 프로젝트의 핵심 기능 중 하나였습니다.<br />
            필터 프로퍼티를 공용 state로 만들어 컴포넌트간 상호 공유하고 고도화 프로젝트인 active에선 <em>zustand와 provider</em>를 이용하여 필터 프로퍼티 묶음의 변화에 맞춰 컴포넌트들이 렌더링 되도록 만들었습니다. <br />
            촉박한 일정 때문에 상품 모델의 interface 를 제대로 정의하지 못해 typescript의 장점을 십분 활용치 못한 점은 아쉬웠습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/kodex/play-03.mp4" poster="/assets/projects/kodex/play-03.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/kodex/play-04.mp4" poster="/assets/projects/kodex/play-04.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/kodex/play-05.mp4" poster="/assets/projects/kodex/play-05.png" autoPlay muted loop playsInline></video>
          </figure>

          <h3>상품 컴포넌트/템플릿</h3>
          <p>
            또 다른 핵심 기능인 상품 페이지의 컴포넌트/템플릿화 역시 React의 강력한 구조적 성능 덕을 톡톡히 봤습니다. 화면설계/디자인 컴포넌트에 맞춰 스무 개 가량의 컴포넌트를 만든 후 데이터와 상품 종류에 따라 조합하여 렌더링 했습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/kodex/play-06.mp4" poster="/assets/projects/kodex/play-06.png" autoPlay muted loop playsInline></video>
          </figure>
        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}
