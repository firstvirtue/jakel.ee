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
  const { t } = useTranslation(['common', 'second-page'])
  const currentProject = getProjectInformation('samsungcnt')
  const prevProject = getProjectInformation('vyvydstudio')
  const nextProject = getProjectInformation('kodex')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">
          <h2 className="text-6xl font-bold text-center">Create Value for Your World</h2>

          <h3>심리스한 페이지 트랜지션</h3>
          <p>
            개발 특이점으로는 메인과 주요 페이지인 비즈니스 소개 페이지 간의 심리스한 페이지 전환이었습니다. 백엔드 레거시인 Spring boot 위에 처리되어야 했기에 SPA 프레임워크를 사용할 수는 없었고 상태관리만 React로 하고 history API의 pushState와 popstate event listener를 통해 처리했습니다.
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/samsungcnt/play-01.mp4" poster="/assets/projects/samsungcnt/play-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <figure data-size="lg">
            <video src="/assets/projects/samsungcnt/play-02.mp4" poster="/assets/projects/samsungcnt/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
            비즈니스 소개 상세의 게이트와 같은 진입점 페이지가 있었는데 공통으로 사용하는 background image를 오버레이 해 두었습니다. 겹쳐놓은 이미지들을 마스킹해서 애니메이션을 구현했는데 데스크탑에선 별 문제가 없었지만 모바일에선 자꾸 페이지가 죽는 것이었습니다.
          </p>
          <p>
          해당 사항이 없는 부분은 display: none 처리해서 결국 해결했는데 페이지가 죽는 치명적인 오류가 나서 진땀나는 순간이었습니다. 모바일은 렌더링 최적화에 매우 예민하다는 것을 또 다시 확인하게 되었습니다.
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