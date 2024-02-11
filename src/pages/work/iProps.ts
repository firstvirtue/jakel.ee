import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation, Trans, i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


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

// Not work..
// How to use getStaticProps?