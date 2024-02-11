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
  
  const currentProject = getProjectInformation('hankooktire')
  const prevProject = getProjectInformation('hanwhadefense')
  const nextProject = getProjectInformation('iconic20')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Driving Emotion</h2>

          <h3>한국타이어 글로벌/세일즈 플랫폼</h3>
          <p>
            한국타이어 프로젝트는 브랜드 중심의 글로벌과 제품 중심의 세일즈 플랫폼으로 나뉘어져 많은 기간과 인원이 들어간 대형 프로젝트였습니다.
          </p>
          <p>
            이 프로젝트에서 저의 역할과 책임은 대량의 페이지를 관리하기 위해 AEM 컴포넌트를 설계하는 것과 이를 빌딩할 프론트엔드 빌드 시스템을 개발하는 것, 그리고 외부 인력들을 확충하고 교육하는 것이었습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/hankooktire/play-01.mp4" poster="/assets/projects/hankooktire/play-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/hankooktire/play-02.mp4" poster="/assets/projects/hankooktire/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/hankooktire/play-03.mp4" poster="/assets/projects/hankooktire/play-03.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
            Inside Hankook, technoring 같은 비주얼 특화 페이지 개발도 빼놓을 수 없는 역할 이었습니다. 양적/질적으로 챌린지 된 순간들이 많았기에 상당히 어려웠던 프로젝트로 기억에 남습니다.
          </p>
          <p>
            하지만 라이브러리의 도움을 최소화한 컴포넌트 시스템을 설계하고 외부 협력사와 커뮤니케이션하며 개발을 조율했던 점. 퍼블리싱 외부 인력팀 빌딩과 교육. WebGL 실무를 경험했던 점 등 수상을 제외하고도 매우 큰 성과가 있었던 프로젝트였습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/hankooktire/play-04.mp4" poster="/assets/projects/hankooktire/play-04.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
            운영 중에는 CDN 퍼포먼스 이슈가 있어 이미지 시퀀스를 사용했던 페이지들에 큰 문제가 생겼습니다. 
            CDN 리소스 로드 퍼포먼스는 프론트엔드에서 어떻게 할 수 없는 문제지만 로딩을 분할해서 40%만 로딩했을 때 완료로 처리하고 사용자가 스크롤을 내리는 중 나머지가 모두 로드되는 시간을 벌도록 기획적으로 처리했습니다.
            나머지 60%는 로드되는 순서도 중요하다 판단되어 generator 를 사용해 로드 프로미스를 동기적으로 처리했습니다.
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
