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
  const currentProject = getProjectInformation('kia-worldwide')
  const prevProject = getProjectInformation('bespoke')
  const nextProject = getProjectInformation('fujifilm')

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
          {t('second-page:projects.kia-worldwide.h01')}
          </h3>

          <p>
          {t('second-page:projects.kia-worldwide.p01')}
          </p>

          <p>
          {t('second-page:projects.kia-worldwide.p02')}
          </p>

          <figure>
            <video src="/assets/projects/kia-worldwide/cover.mp4" poster="/assets/projects/kia-worldwide/cover.png" autoPlay muted loop playsInline></video>
            <figcaption>{t('second-page:projects.kia-worldwide.c01')}</figcaption>
          </figure>

          <h3 className="center">{t('second-page:projects.kia-worldwide.h02')}</h3>

          <p>
          {t('second-page:projects.kia-worldwide.p03')}
          </p>

          <p>
          {t('second-page:projects.kia-worldwide.p04')}
          </p>

          <p>
          {t('second-page:projects.kia-worldwide.p05')}
          </p>

          <figure data-size="lg" data-shade="dark">
            <video src="/assets/projects/kia-worldwide/video-01.mp4" poster="/assets/projects/kia-worldwide/video-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
          {t('second-page:projects.kia-worldwide.p06')}
          </p>

          <figure data-size="lg" data-shade="dark">
            <img src="/assets/projects/kia-worldwide/screenshot-01.png" alt=""/>
          </figure>

          <figure data-size="lg" data-shade="dark">
            <img src="/assets/projects/kia-worldwide/screenshot-02.png" alt=""/>
          </figure>

          <p className="standalone">
          {t('second-page:projects.kia-worldwide.p07')}
          </p>

          <p>
          {t('second-page:projects.kia-worldwide.p08')}
          </p>

          <p>{t('second-page:projects.kia-worldwide.p09')}</p>

          <figure data-size="max" data-shade="dark">
            <img src="/assets/projects/kia-worldwide/screenshot-03.jpg" alt=""/>
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