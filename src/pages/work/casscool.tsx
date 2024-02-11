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
  
  const currentProject = getProjectInformation('casscool')
  const prevProject = getProjectInformation('kodex')
  const nextProject = getProjectInformation('lotteshopping')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Blue Splash!</h2>

          <h3>온/오프라인 이벤트</h3>
          <p>
          맥주 브랜드 카스에서 온/오프라인 이벤트를 위해 모바일 페이지를 만들었습니다. 정해진 오프라인 행사에 맞춰진 프로젝트여서 빠른 시간에 완성을 하기 위해 react 를 사용했습니다.
          </p>

          <figure data-size="lg" className="flex justify-center">
            <video css={{maxHeight: '60vh'}} src="/assets/projects/casscool/cover.mp4" poster="/assets/projects/casscool/cover.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
            모바일 위주의 페이지여서 작업하는데는 수월한 편이었습니다. 많이 사용한 패턴인 유려한 영상 위에 UI를 배치하여 레이어 배치를 통해 유지보수가 용이하도록 정의했습니다.
          </p>

          <figure data-size="lg" className="flex justify-center">
            <video css={{maxHeight: '60vh'}} src="/assets/projects/casscool/detail.mp4" poster="/assets/projects/casscool/detail.png" autoPlay muted loop playsInline></video>
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