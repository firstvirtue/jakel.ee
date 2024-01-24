/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { RevealText } from '../../lib/RevealText'

export default function Item(props) {
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
        refWrap.current.style.display = 'flex'
        refWrap.current.style.flex = 1
        refWrap.current.style.paddingBottom = '24px'
        refImg.current.style.width = '130px'
        refImg.current.style.height = '130px'
        refImg.current.style.aspectRatio = '1 / 1'

        refBot.current.style.fontSize = '5rem'
        refBot.current.style.transformOrigin = 'right'
        refBot.current.style.textAlign = 'left'
        refBot.current.style.transform = 'rotateZ(-90deg) translate(100%, -25%)'

        // refH.current.style.fontSize = '1rem'
        
      } catch (error) {
        
      }
    }

  }, [related])

  useEffect(() => {
    refMo.current = new RevealText(refT.current)
    refMo.current.reset()
    setTimeout(() => { refMo.current.animate() }, 200)
  }, [])

  return (
    <>
    <Link
      href={project.link ? project.link : '#'}
      className='project-item block relative text-black pb-28 rounded-3xl overflow-hidden hover:bg-black shadow-lg'
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
        document.querySelector('.menu').style.opacity = 0

        // Remove duplicate transition
        document.querySelectorAll('.cover-transition-el').forEach((x, i) => x.style.viewTransitionName = `xx${i}` )

        refImg.current.style.viewTransitionName = 'item_img'
        refT.current.style.viewTransitionName = 'item_t'
        refH.current.style.viewTransitionName = 'item_h'
        refD.current.style.viewTransitionName = 'item_d'
        refWrap.current.style.viewTransitionName = 'item_wrap'

        
        router.push(project.link ?? '#')
        // router.push('/work/samsung-fund')
      }}

      onMouseEnter={e => {
        refMo.current.reset()
        refMo.current.animate()
      }}
    >
      <div className='v-wrap relative overflow-hidden rounded-2xl'
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
      
      <div className='pl-7 pr-7'>
        <div ref={refT} className='mt-5 '>
          { project.keywords.map((x, i) => {
            return <>{`#${x}`} </>
          }) }
        </div>

        <div ref={refH}
        className=" pt-1 text-3xl font-bold">
            { project.title }
        </div>
        <div ref={refD} className=' text-lg pt-2'>
            { project.desc ?? '역대급 프로젝트 추억 그 기억 아련함' }
        </div>
      </div>
      
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