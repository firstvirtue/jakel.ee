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

          <h3>{t('second-page:projects.hanwhadefense.h01')}</h3>
          <p>
          {t('second-page:projects.hanwhadefense.p01')}
          </p>
          <p>
          {t('second-page:projects.hanwhadefense.p02')}
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/hanwhadefense/play-01.mp4" poster="/assets/projects/hanwhadefense/play-01.png" autoPlay muted loop playsInline></video>
          </figure>

          <p className="standalone">
          {t('second-page:projects.hanwhadefense.p03')}
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