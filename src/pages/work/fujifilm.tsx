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
  
  const currentProject = getProjectInformation('fujifilm')
  const prevProject = getProjectInformation('kia-worldwide')
  const nextProject = getProjectInformation('laneige')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Value from Innovation</h2>

          <h3>브랜드 후지필름</h3>
          <p>
            카메라 브랜드 후지필름의 웹사이트 리뉴얼은 29cm, 라이카와 같은 브랜드 고급화 전략으로 기획/디자인되었습니다. 좋아하는 콘셉트이어서 화면 개발에 즐거웠던 기억이 나는군요.
          </p>
          <p>
            특히 회사 프로젝트에 canvas를 사용해 인터랙션을 처음 적용해 본 개인적으로 의미 있는 프로젝트였습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/fujifilm/video-01.mp4" poster="/assets/projects/fujifilm/video-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <h3 className="center">파티클</h3>

          <p>
            파티클이 <em>떨어지는</em> 모션은 원래 디자인에는 없었는데 파티클이 점점 커지며 화면을 덮는 모션과의 연결성을 극대화하고자 아이디어가 떠올라 넣었습니다. 다행히 반응이 좋아 기획자와 디자이너의 동의를 얻어 페이지에 적용하기로 했습니다. 사실 이때 굉장히 기뻤는데 화면 개발자로서 생각하고 구현한 것이 디자인 요소에 반영되었기 때문이었죠.
          </p>
          <p>
            캔버스를 써 본 것이 처음은 아니지만 실 프로젝트에 적용해 본 것은 처음이라 좀 긴장되더라구요! :)
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/fujifilm/video-02.mp4" poster="/assets/projects/fujifilm/video-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/fujifilm/shot-01.png" alt=""/>
          </figure>

          <figure data-size="lg">
            <img src="/assets/projects/fujifilm/shot-02.png" alt=""/>
          </figure>
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