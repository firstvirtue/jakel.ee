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
  
  const currentProject = projectData.find(x => x.id === 'bespoke')
  const prevProject = projectData.find(x => x.id === 'galaxystudio')
  const nextProject = projectData.find(x => x.id === 'kia-worldwide')

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

          <figure data-size="lg" className="flex justify-center">
            <img src="/assets/projects/bespoke/bespoke02.png" alt=""/>
          </figure>

          <figure data-size="lg" className="flex justify-center">
            <video css={{maxHeight: '60vh'}} src="/assets/projects/bespoke/play-02.mp4" poster="/assets/projects/bespoke/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
          저는 냉장고 제품 조합 UI를 맡았는데 냉장고 제품 가이드를 기반으로 HTML div 조각을 만들어 형태와 색상/질감을 바꿀 수 있는 기능을 넣었습니다.
          <br/>
          모든 데이터는 json으로 통합 관리되도록 하여 유지보수에 용이하도록 했습니다.
          </p>

          <figure data-size="lg">
            <img src="/assets/projects/bespoke/bespoke03.png" alt=""/>
          </figure>

          <p className="standalone">
          다수의 Promise를 사용할 기회가 있었는데, CTA 버튼을 누르면 UI를 이미지로 저장하는 기능이 있었습니다.
          원래는 모바일 디바이스의 꾹 누르기로 저장하는 것이 기획이었지만 제대로 되지 않는 디바이스가 있어, 기능을 넣었던 기억이 납니다.
          <br/>
          Promise 자체가 비동기여서 키 값을 적용해 두고 promise.all 로 처리했던 기억이 나는군요!
          </p>

          <figure data-size="lg" className="flex justify-center">
            <img src="/assets/projects/bespoke/bespoke04.png" alt=""/>
          </figure>
        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}
