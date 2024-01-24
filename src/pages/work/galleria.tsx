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
  
    const currentProject = projectData.find(x => x.id === 'galleria')
    const prevProject = projectData.find(x => x.id === 'laneige')
    const nextProject = projectData.find(x => x.id === 'vyvydstudio')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

        <div className="flex pl-24 pr-24 pt-32">
          <div className="content w-full">

            <h2 className="text-6xl font-bold text-center">No.1 Premium Contents Producer</h2>

            <h3>프리미엄 백화점 브랜드</h3>
            <p>
              한화 갤러리아 프로젝트는 한화갤러리아와 타임월드 그리고 백화점 3개의 사이트로 구성되어 있습니다.<br />
              이 중 한화 갤러리아와 타임월드는 PL로서 역할을 담당했는데 이것저것 넣어 보고 싶었던 기술들을 잔뜩 시험해 본 기억이 납니다.
            </p>

            <figure data-size="lg">
            <video src="/assets/projects/galleria/history.mp4" poster="/assets/projects/galleria/history.png" autoPlay muted loop playsInline></video>
          </figure>

          <h3 className="center">Rxjs &amp; Pjax</h3>
          <p>
            인터랙션을 강화하기 위한 방법으로 비동기 라이브러리인 Rxjs와 페이지 전환을 위한 Pjax가 사용되었습니다.<br />
            비동기 라이브러리인 Rxjs를 이용해 스크롤을 내릴 때 위치 값을 쌓아두고 보간하여 스크롤에 따라 부드럽게 따라오는 선을 만들 수 있었습니다. Pjax는 관련 라이브러리인 Barba.js 를 사용했는데 페이지간 이동이 부드럽게 연결되도록하여 웹이 아닌 앱처럼 사용성을 강화하고자 했습니다.
          </p>

          <figure data-size="lg">
            <img src="/assets/projects/galleria/shot-01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/galleria/vision.mp4" poster="/assets/projects/galleria/vision.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
            PL을 맡게되서 담당 디자이너 분과 요렇게 하면 어떨까요 저렇게 하면 어떨까요 하면서 즐겁게 커뮤니케이션하며 작업했던 기억이 납니다. 밑에 백화점에 TF 대부분이 참여해서 그런지 사실 다른 사람들은 별로 신경쓰지 않았었습니다.. (못했을수도) 하지만 결과물은 만족스럽게 나온 것 같습니다. 재밌었고요!
          </p>

          <figure data-size="lg">
            <img src="/assets/projects/galleria/dept-main.png" alt=""/>
          </figure>

          <h3>백화점</h3>

          <p>
            백화점 사이트는 정말 방대한 사이트인데 웬만한 웹사이트 5배 정도는 되는 것 같았습니다. 페이지 작업자로 참여하게 되었고 초기 설계 단계에서 데스크탑 가로 스크롤의 레이아웃 구성을 맡았습니다.<br/>
            데스크탑 브레이크 포인트에서 다수의 flex를 중첩으로 사용하여 가로 레이아웃을 구현했는데 상당히 까다로웠습니다. 레이아웃의 방향이 다르기 때문에 모션도 상이한데 브레이크 포인트가 바뀔 때 스크립트 초기화에 굉장히 신경써서 작업했습니다.
            <a href="https://dept.galleria.co.kr/" target="_blank" rel="noopener noreferrer">https://dept.galleria.co.kr/</a>
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/galleria/dept-horizon-01.mp4" poster="/assets/projects/galleria/dept-horizon-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/galleria/dept-01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/galleria/dept-02.png" alt=""/>
          </figure>
          </div>

        </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    </>
  )
}
