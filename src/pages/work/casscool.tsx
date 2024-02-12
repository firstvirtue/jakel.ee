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

          <h3>{t('second-page:projects.casscool.h01')}</h3>
          <p>
          {t('second-page:projects.casscool.p01')}
          </p>

          <figure data-size="lg" className="flex justify-center">
            <video css={{maxHeight: '60vh'}} src="/assets/projects/casscool/cover.mp4" poster="/assets/projects/casscool/cover.png" autoPlay muted loop playsInline></video>
          </figure>

          <p>
          {t('second-page:projects.casscool.p02')}
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