/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { RevealText } from '../../lib/RevealText'
import { Fragment } from 'react'

export default function Item(props: any) {
  const { project, index, related, prev, next } = props
  const router = useRouter()
  const refImg = useRef()
  const refT = useRef()
  const refH = useRef()
  const refD = useRef()
  const refWrap = useRef()
  const refBot = useRef()
  const refMo = useRef()

  function setBottomText() {
    if(prev) return 'Prev'
    if(next) return 'Next'
    
    return String(index).padStart(2, '0')
  }

  useEffect(() => {
    if(related) {
      try {
        const $wrap = refWrap.current as any
        const $img = refImg.current as any
        const $bot = refBot.current as any

        $wrap.style.display = 'flex'
        $wrap.style.flex = 1
        $wrap.style.paddingBottom = '24px'
        $img.style.width = '130px'
        $img.style.minWidth = '130px'
        $img.style.height = '130px'
        $img.style.aspectRatio = '1 / 1'

        $bot.style.fontSize = '5rem'
        $bot.style.transformOrigin = 'right'
        $bot.style.textAlign = 'left'
        $bot.style.transform = 'rotateZ(-90deg) translate(100%, -25%)'

        // refH.current.style.fontSize = '1rem'
        
      } catch (error) {
        
      }
    }

  }, [related])

  useEffect(() => {
    if(!refMo.current) {
      // @ts-ignore
      refMo.current = new RevealText(refT.current)
      // @ts-ignore
      refMo.current.reset()
      // @ts-ignore
      setTimeout(() => { refMo.current.startAnimating() }, 200)
    }
  }, [])

  return (
    <>
    <Link
      href={project.link ? project.link : '#'}
      className='project-item block relative text-black pb-28 rounded-3xl overflow-hidden hover:bg-black shadow-lg'
      // @ts-ignore
      ref={refWrap}
      css={{
        'backgroundColor': project.cardColor ?? '#ffffff',
        'border': project.cardColor ? '2px solid transparent' : '2px solid #f3f3f3',
        'color': project.textColor ?? '#000000',
        // 'viewTransitionName': project.id ? project.id : '',
        // 'viewTransitionName': project.id ? project.id + '_wrap' : '',

        paddingTop: '24px',
        paddingLeft: '24px',
        paddingRight: '24px',

        ':hover .num': {
          transform: related ? 'rotateZ(-90deg) translate(100%, -35%) !important' : 'translateY(-5%)',
        }
      }}

      onClick={e => {
        e.preventDefault()

        // [NOTE] 모션 간섭이 일어나서 시각 효과에서 제거
        // @ts-ignore
        document.querySelector('.menu').style.opacity = 0

        // Remove duplicate transition
        {/* @ts-ignore */}
        document.querySelectorAll('.cover-transition-el').forEach((x, i) => x.style.viewTransitionName = `xx${i}` )

        if(refImg.current) {
          // @ts-ignore
          refImg.current.style.viewTransitionName = 'item_img'
        }
        // @ts-ignore
        refT.current.style.viewTransitionName = 'item_t'
        // @ts-ignore
        refH.current.style.viewTransitionName = 'item_h'
        // @ts-ignore
        refD.current.style.viewTransitionName = 'item_d'
        // @ts-ignore
        refWrap.current.style.viewTransitionName = 'item_wrap'

        
        router.push(project.link ?? '#')
        // router.push('/work/samsung-fund')
      }}

      onMouseEnter={e => {
        // @ts-ignore
        refMo.current.reset()
        // @ts-ignore
        refMo.current.startAnimating()
      }}
    >

      { (project.coverVideo || project.coverImage) &&
        <div className='v-wrap relative overflow-hidden rounded-2xl'
        // @ts-ignore
          ref={refImg}
          css={{
            aspectRatio: `1 / ${ project.aspect }`,
          }}
          >
            { project.coverVideo ?
    
            <video className='object-cover h-full w-full rounded-2xl' 
              src={ project.coverVideo } autoPlay muted loop playsInline></video>
            :
            <Image 
              // ref={refImg}
              className='object-cover h-full w-full rounded-2xl'
              src={ project.coverImage ?? "/1.jpeg" } alt=''
              width={800} height={800}
            />
            }
            
          </div>
      }
      
      <div className={`${related ? 'pl-7 pr-7 pt-5 w-full' : 'pt-5'}`}>
        {/* @ts-ignore */}
        <div ref={refT} className=''>
          { project.keywords.map((x: any, i: number) => {
            return <Fragment key={`keyword_${i}`}>{`#${x}`} </Fragment>
          }) }
        </div>

        {/* @ts-ignore */}
        <div ref={refH}
        className=" pt-1 text-3xl font-bold">
            { project.title }
        </div>
        {/* @ts-ignore */}
        <div ref={refD} className=' text-lg pt-2'>
            { project.desc }
        </div>
      </div>

      {/* @ts-ignore */}
      <div ref={refBot} className='num absolute text-white left-0 -bottom-14 text-10xl leading-none text font-bold pt-2 text-center w-full'
      css={{
        color: project.cardColor ? undefined : '#f3f3f3',
      }}
      >
          { setBottomText() }
      </div>
    </Link>
    </>
  )
}