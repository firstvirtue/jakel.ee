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

          <h3>{t('second-page:projects.hankooktire.h01')}</h3>
          <p>
          {t('second-page:projects.hankooktire.p01')}
          </p>
          <p>
          {t('second-page:projects.hankooktire.p02')}
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
          {t('second-page:projects.hankooktire.p03')}
          </p>
          <p>
          {t('second-page:projects.hankooktire.p04')}
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/hankooktire/play-04.mp4" poster="/assets/projects/hankooktire/play-04.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
          {t('second-page:projects.hankooktire.p05')}
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
