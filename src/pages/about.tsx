/** @jsxImportSource @emotion/react */
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation, Trans, i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { css } from "@emotion/react"


export default function About(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { t } = useTranslation(['common', 'second-page'])
  
  const tit = css({
    marginBottom: '1rem'
  })
  const awardClient = css({
    opacity: 0.4
  })

  return (
    <>
    <article css={{
        color: '#242424'
      }}>
      <div className="max-w-3xl mr-auto ml-auto mt-64">
        <h1 className="text-7xl font-bold uppercase">About</h1>
        <hr />

        <h2 className="block text-3xl mt-10 mb-3">What I Do</h2>
        
          <p>
          {t('common:about.what-i-do-01')}
          </p>

          <br />
          <p>
          {t('common:about.what-i-do-02')}
          </p>
          <p>
          {t('common:about.what-i-do-03')}
          </p>
          <p>
          {t('common:about.what-i-do-04')}
          </p>
          <p>
          {t('common:about.what-i-do-05')}
          </p>
          <p>
          {t('common:about.what-i-do-06')}
          </p>
          <br />

          <p css={{marginBottom: '0.4em'}}>{t('common:about.strengths-01')}</p>
          <h3 className='font-bold mt-3'>{t('common:about.strengths-02')}</h3>
          <p>{t('common:about.strengths-03')}</p>
          <h3 className='font-bold mt-3'>{t('common:about.strengths-04')}</h3>
          <p>{t('common:about.strengths-05')}</p>
          <br />
          <p>
          {t('common:about.conclusion-01')}
          </p> 
          <br />

          <p>
          {t('common:about.conclusion-02')}
          </p>
          <p>
          {t('common:about.conclusion-03')}
          </p>
          <p>
          {t('common:about.conclusion-04')}
          </p>
        
        
        <h2 className="block text-3xl mt-10 mb-3">Experience</h2>
        <dl css={{ 
          display: 'flex',
          flexWrap: 'wrap',
          'dt': {
            width: '20%'
          },
          'dd': {
            width: '80%'
          }
        }}>
          <dt>2021 - 2023</dt><dd>DOES Interactive</dd>
          <dt>2017 - 2021</dt><dd>Iropke</dd>
          <dt>2017 - 2017</dt><dd>Ninefive</dd>
          <dt>2016 - 2017</dt><dd>Duknsoft</dd>
          <dt>2012 - 2016</dt><dd>Eloicube</dd>
          <dt>2008 - 2010</dt><dd>Flur</dd>
        </dl>


        <div className="text-5xl mt-20 mb-20" css={{
          display: 'flex',
          justifyContent: 'space-between',
          'h3': {
            textAlign: 'center',
            fontWeight: 400,
          },
          'span': {
            display: 'block',
            marginTop: '1rem',
            color: '#E06D72'
          }
        }}>
          <h3>
          Years <br/>
          <span>13</span>
          </h3>
        
          <h3>
          Projects <br/>
          <span>23+</span>
          </h3>

          <h3>
          Awards <br/>
          <span>13</span>
          </h3>
        </div>

        <h2 className="block text-3xl mt-10 mb-3">Awards</h2>
        <ul css={{
          'li': {
            marginTop: '0.4rem'
          }
        }}>
          <li>{t('common:about.award-010')} - <span css={awardClient}>{t('common:about.award-011')}</span></li>
          <li>{t('common:about.award-020')} - <span css={awardClient}>{t('common:about.award-021')}</span></li>
          <li>{t('common:about.award-030')} - <span css={awardClient}>{t('common:about.award-031')}</span></li>
          <li>{t('common:about.award-040')} - <span css={awardClient}>{t('common:about.award-041')}</span></li>
          <li>{t('common:about.award-050')} - <span css={awardClient}>{t('common:about.award-051')}</span></li>
          <li>{t('common:about.award-060')} - <span css={awardClient}>{t('common:about.award-061')}</span></li>
          <li>{t('common:about.award-070')} - <span css={awardClient}>{t('common:about.award-071')}</span></li>
          <li>{t('common:about.award-080')} - <span css={awardClient}>{t('common:about.award-081')}</span></li>
          <li>{t('common:about.award-090')} - <span css={awardClient}>{t('common:about.award-091')}</span></li>
          <li>{t('common:about.award-100')} - <span css={awardClient}>{t('common:about.award-101')}</span></li>
          <li>{t('common:about.award-110')} - <span css={awardClient}>{t('common:about.award-111')}</span></li>
          <li>{t('common:about.award-120')} - <span css={awardClient}>{t('common:about.award-121')}</span></li>
          <li>{t('common:about.award-130')} - <span css={awardClient}>{t('common:about.award-131')}</span></li>
        </ul>
      </div>
    </article>
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
      'common',
    ])),
  },
})