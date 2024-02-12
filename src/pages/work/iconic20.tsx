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

          <h3>{t('second-page:projects.iconic20.h01')}</h3>
          <p>
            <Trans i18nKey={'second-page:projects.iconic20.p01'} />
          </p>

          <p>{t('second-page:projects.iconic20.p02')} </p>

          <figure data-size="lg">
            <img src="/assets/projects/iconic20/shot-02.png" alt=""/>
          </figure>

          <figure data-size="lg" className="flex justify-center gap-2">
            <img className="w-1/2" src="/assets/projects/iconic20/making-01.png" alt=""/>
            <img className="w-1/2" src="/assets/projects/iconic20/making-02.png" alt=""/>
          </figure>

          <p className="standalone">
          {t('second-page:projects.iconic20.p03')} <br />
          {t('second-page:projects.iconic20.p04')}
          </p>
          <p>
          {t('second-page:projects.iconic20.p05')}
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/iconic20/play-02.mp4" poster="/assets/projects/iconic20/play-02.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
          {t('second-page:projects.iconic20.p06')}
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