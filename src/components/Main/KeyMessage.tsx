/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'

export default function KeyMessage() {

  const offset = '12rem'

  const marquee = keyframes`
    0% {
      transform: translateX(calc(-25% + ${offset}));
    }
    100% {
      transform: translateX(calc(-50% + ${offset}));
    }
  `

  return (
    <>
    <p className='slogan hidden'>
      {/* Hello world <br/>
      No Code No Life <br/>
      Generative AI <br/>Change the World! */}
      I <small>&apos;m going to</small> create <br/>
      <small>Everything</small>on the Screen <br/>
      Any platform, <br/>
      Any device. <br/>
      {/* for you only <br/> */}
    </p>

    <p className='slogan'>
    <span 
      css={{
        display: 'block',
        fontSize: '2rem',
        fontWeight: '400',
        marginBottom: '6rem',
        whiteSpace: 'nowrap',
        width: 'fit-content',
        transform: `translate3d(calc(-25% + ${offset}), 0, 0)`,
        animation: `${marquee} 8s linear infinite`,
      }}
    >
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    </span>
      {/* I want to touch people<br/> with my art.<br/>  */}
      "
      I want them to say:<br/> 
      He feels deeply,<br/> 
      He feels tenderly."<br/>
      <span css={{display: 'block', position: 'absolute', bottom: '18rem', right: 0, textAlign: 'right', fontSize: '2rem'}}>Loving Vincent</span>

      <span 
      css={{
        display: 'block',
        fontSize: '2rem',
        fontWeight: '400',
        marginTop: '6rem',
        whiteSpace: 'nowrap',
        width: 'fit-content',
        transform: `translate3d(calc(-25% + ${offset}), 0, 0)`,
        animation: `${marquee} 8s linear infinite`,
        animationDirection: 'reverse',
      }}
    >
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    I want to touch people with my art. <span css={{fontSize: '3rem', fontWeight: 100, marginLeft: '3rem', marginRight: '3rem', }}>+</span>
    </span>
    </p>
    </>
  )
}