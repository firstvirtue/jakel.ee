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
  
  const currentProject = getProjectInformation('hanwhadefense')
  const prevProject = getProjectInformation('lotteshopping')
  const nextProject = getProjectInformation('hankooktire')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-5xl font-bold text-center">Invaluable path for better world</h2>

          <h3>실무 레벨의 3D 에셋</h3>
          <p>
            그 동안 개인 작업으로 샘플 3D를 만져본 적은 많았지만 이렇게 본격적으로 실무 프로젝트를 경험해 보니 감회가 새로웠습니다.
          </p>
          <p>
            이전 한국타이어 때의 3D 모델이 비교적 경량의 단순한 모델이었던 반면 이 쇼룸은 모델도 많아지고 그에 따른 요건이 조금 더 복잡해져 이전보다 더 많은 챌린지가 있었습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/hanwhadefense/play-01.mp4" poster="/assets/projects/hanwhadefense/play-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
            포인트 클릭, UI 연동을 넘어 에셋의 분할 로드, 뷰 전환, 애니메이션, 스프라이트 처리 등 꽤 다양한 3D 기술과 UI 기법을 적용할 수 있었던 알찬 프로젝트 였습니다! 
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/hanwhadefense/play-02.mp4" poster="/assets/projects/hanwhadefense/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/hanwhadefense/play-03.mp4" poster="/assets/projects/hanwhadefense/play-03.png" autoPlay muted loop playsInline></video>
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