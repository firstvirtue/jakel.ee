/** @jsxImportSource @emotion/react */
'use client'
import Link from "next/link"
import LayoutWork from "@/components/Post/LayoutWork"
import Cover from "@/components/Post/Cover"
import RelatedPost from "@/components/Post/RelatedPost"
import Image from "next/image"
import { css } from "@emotion/react"

import projectData from '../../data/project-data.json'
import { getProjectInformation } from "@/lib/helper"

import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation, Trans, i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Post(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  
  const currentProject = getProjectInformation('iconic20')
  const prevProject = getProjectInformation('hankooktire')
  const nextProject = getProjectInformation('galaxystudio')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Hold &amp; Drag</h2>

          <figure data-size="lg">
            <img src="/assets/projects/iconic20/shot-01.png" alt=""/>
          </figure>

          <h3>인터랙티브 비주얼</h3>
          <p>
            원래 스마일게이트의 TF는 아니었지만 아이코닉20 페이지 구동시안 영상을 봤을 때, 도전해 보고 싶은 열망이 생겼습니다.<br />
            카드의 일그러진 움직임과 연출이 WebGL, Shader를 사용해야 했고 제가 그린 기술 로드맵의 이정표였기 때문입니다.
          </p>

          <p>개인 프로젝트가 아니었기 때문에 shader 효과의 피저빌리티 체크를 한 뒤 디자이너/기획자와 공유한 후 해봐도 좋을 것 같다는 피드백을 받았습니다. </p>

          <figure data-size="lg">
            <img src="/assets/projects/iconic20/shot-02.png" alt=""/>
          </figure>

          <figure data-size="lg" className="flex justify-center gap-2">
            <img className="w-1/2" src="/assets/projects/iconic20/making-01.png" alt=""/>
            <img className="w-1/2" src="/assets/projects/iconic20/making-02.png" alt=""/>
          </figure>

          <p className="standalone">
            Shader와 디스토션 효과 보다 20도 정도 기울여져 있는 레이아웃 특징때문에 굉장히 애먹었습니다. 
            HTML 구조라면 쉽게 될 부분도 웹지엘 공간으로 옮기는 것이 쉽지 않았는데 HTML로 레이아웃을 구성하고 이를 가져와 웹지엘 좌표계로 변환하여 카드 오브젝트를 배치했습니다.
          </p>
          <p>
            리스트 - 상세로 이동할 때 카드의 로테이션 계산이 생각보다 어려웠는데, 기울어져 있는 부분이 카드 리스트 기준이어서 카드와 상위 컨테이너들의 좌표/기울기까지 계산에 넣어야 의도대로 동작했습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/iconic20/play-02.mp4" poster="/assets/projects/iconic20/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
            상세에서 리스트로 되돌아 가는 것도 역시나 쉽지 않았습니다. 기억해야 할 값들이 대단히 복잡해서 너무 애먹었었습니다. 
            마지막 알고리즘이 풀리고 모든게 해결되었을 때 너무 기쁜 나머지 새벽 3시였는데 집에 갈 택시를 바로 잡지 않고, 회사 앞 경의선 숲길을 춤추며 걸어갔던 기억이 납니다 :)
          </p>

        </div>

      </div>

    </LayoutWork>

    <RelatedPost prev={prevProject} next={nextProject} />
    
    </>
  )
}

type Props = {
  // Add custom props here
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'second-page',
      'footer',
    ])),
  },
})