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
  const currentProject = getProjectInformation('iropke-batang')
  const prevProject = getProjectInformation('iconic20')
  const nextProject = getProjectInformation('galaxystudio')

  return (
    <>
    <LayoutWork project={ currentProject }>
      <Cover project={ currentProject } />

      <div className="flex pl-24 pr-24 pt-32">
        <div className="content w-full">

          <h2 className="text-6xl font-bold text-center">Masking &amp; Motion</h2>

          <figure data-size="lg" data-shade="dark">
            <img src="/assets/projects/iropke-batang/ae1.png" alt=""/>
          </figure>

          <h3>{t('second-page:projects.iropke-batang.h01')}</h3>
          <p>
            <Trans i18nKey={'second-page:projects.iropke-batang.p01'} />
          </p>

          <figure data-size="lg">
            <video src="/assets/projects/iropke-batang/edit.mp4" poster="/assets/projects/iropke-batang/edit.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>{t('second-page:projects.iropke-batang.p02')} </p>
          <p>{t('second-page:projects.iropke-batang.p03')} </p>

          <figure data-size="lg">
            <video src="/assets/projects/iropke-batang/preview.mp4" poster="/assets/projects/iropke-batang/preview.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>{t('second-page:projects.iropke-batang.p04')} </p>
          

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