/** @jsxImportSource @emotion/react */
'use client'
import LinkTransition from "@/components/LinkTransition"
import Link from "next/link"
import LayoutWork from "@/components/Post/LayoutWork"
import Cover from "@/components/Post/Cover"
import RelatedPost from "@/components/Post/RelatedPost"
import Image from "next/image"
import { css } from "@emotion/react"

import { H3, Paragraph, Figure } from "@/components/Post/Elements"


import projectData from '../../data/project-data.json'

export default function Home() {

  const currentProject = projectData[10]

  return (
    <>
    <LayoutWork project={ currentProject }>
      
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">
          Movement that inspires
          </h2>

          <h3>
          브랜드 리론칭
          </h3>

          <p>
          기아자동차는 2021년을 맞이하여 기아로 사명을 바꾸며 CI와 BI의 변경을 비롯하여 브랜드의 대대적인 리론칭을 시작했습니다.
          이를 구체화하는 단계에서 동적으로 콘텐츠를 보여주는 쇼케이스 웹사이트가 요구 사항으로 나오게 되었습니다.
          </p>

          <p>
          가장 처음 만들어진 페이지는 이벤트 D-day의 해당 시간까지 카운트다운을 보여주고 시간이 되면 쇼케이스로 전환되어 콘텐츠를 볼 수 있는 페이지였습니다. 모두 한 페이지에서 말이죠.
          </p>

          <figure>
            <video src="/assets/projects/kia-worldwide/cover.mp4" poster="/assets/projects/kia-worldwide/cover.png" autoPlay muted loop playsInline></video>
            <figcaption>파티클 모션은 이벤트 시간이 지나가는 찰나의 시간에만 볼 수 있는 비운의 인터랙션이었다..</figcaption>
          </figure>

          <h3 className="center">파티클 인터랙션</h3>

          <p>
            이벤트 시간이 되서 쇼케이스 콘텐츠로 전환될 때 원형 오브젝트가 터지는 파티클 모션을 보여줍니다. 원형 오브젝트가 파티클로 사라지는 모션은 기존 기아 로고를 둘러싸고 있던 원형 오브젝트가 사라지며 새 로고가 만들어지는 것을 의미했습니다.(물론 제 의도는 아니었구요..)
          </p>

          <p>
            파티클 인터랙션은 canvas 엘리먼트로 구현되어 있습니다. 구형 디바이스에서도 쾌적하게 모션이 되도록 테스트를 거쳐 2000개의 파티클 갯수를 정했는데, 시간이 되면 정해진 범위 내에서 랜덤하게 생성 후 간단한 물리 연산을 통해 퍼지며 사라집니다.
          </p>

          <p>
            렌더링 루프 안에서 파티클 각각은 등가속도 회전 운동을 위한 가속도와 질량을 가집니다. 이 갱신된 값을 토대로 cos, sin 함수를 이용해 파티클은 조금씩 움직이게 되죠. 여기에 감속을 위한 댐핑 상수를 가속도에 더해주면 그럴듯한 파티클 움직임이 나옵니다.
          </p>

          <figure data-size="lg" data-shade="dark">
            <video src="/assets/projects/kia-worldwide/video-01.mp4" poster="/assets/projects/kia-worldwide/video-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
            이후에도 이벤트 스케줄에 따라 페이지들이 추가되며 기아의 브랜드 콘셉트를 보여주는 웹사이트는 변화해 갔습니다. 앞선 페이지처럼 동적으로 변화하는 것은 아니지만요.
          </p>

          <figure data-size="lg" data-shade="dark">
            <img src="/assets/projects/kia-worldwide/screenshot-01.png" alt=""/>
          </figure>

          <figure data-size="lg" data-shade="dark">
            <img src="/assets/projects/kia-worldwide/screenshot-02.png" alt=""/>
          </figure>

          <p className="standalone">
            페이지 수는 적었는데 어째 들어간 디자인 요소들이나 모션도 많고 요구 사항도 정신없이 들어와서 고생했던 프로젝트였습니다.
          </p>

          <p>
            영감을 주는 움직임(movement that inspires)이라는 브랜드 슬로건을 작업을 하며 저도 영감을 얻고자 이직이라는 움직임을 준비하게 되었죠..
          </p>

          <p>물론 농담입니다 ㅎㅎ :)</p>

          <figure data-size="max" data-shade="dark">
            <img src="/assets/projects/kia-worldwide/screenshot-03.jpg" alt=""/>
          </figure>

        </div>

      </div>

    </LayoutWork>


      <RelatedPost prev={projectData[0]} next={projectData[9]} />

      
      </>
  )
}
