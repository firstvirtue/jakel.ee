/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { css } from "@emotion/react"
import Image from "next/image"
import { useEffect } from "react"

export default function SceneUI() {

  // useEffect(() => {
  //   const onKeyDown = (event: KeyboardEvent) => {
  //     console.log(event.key)
  //   };
  //   document.addEventListener('keydown', onKeyDown)

  //   return (
  //     document.removeEventListener('keydown', onKeyDown)
  //   )
  // }, [])

  const key = css({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1.7rem',
    height: '1.7rem',
    backgroundColor: `rgba(30, 30, 30, ${1})`,
    color: '#fff',
    borderRadius: '5px',
  })

  const keyMovement = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    position: 'absolute',
    textTransform: 'uppercase',
    top: '82px',
    left: '85px',
    width: 'fit-content',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    'span': key,
    ':before': {
      content: '""',
      position: 'absolute',
      width: '100px',
      height: '2px',
      backgroundColor: 'black',
      left: 0,
      top: '20px',
      transform: 'translate(-70%, 0)'
    },
    ':after': {
      content: '"Movement"',
      position: 'absolute',
      fontSize: '0.8rem',
      left: 0,
      top: '12px',
      transform: 'translate(-200%, 0)',
    }
  })

  const keyReset = css({
    position: 'absolute',
    textTransform: 'uppercase',
    top: '82px',
    left: '173px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    'span': key,
    ':before': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '80px',
      backgroundColor: 'black',
      left: '50%',
      top: 0,
      transform: 'translate(0, -100%)'
    },
    ':after': {
      content: '"Reset"',
      position: 'absolute',
      fontSize: '0.8rem',
      left: '50%',
      top: 0,
      transform: 'translate(-50%, -500%)',
    }
  })

  const space = css({
    position: 'absolute',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '136px',
    bottom: '41px',
    left: '109px',
    height: '1.7rem',
    backgroundColor: '#111',
    borderRadius: '5px',
    ':before': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '40px',
      backgroundColor: 'black',
      left: '50%',
      top: 0,
      transform: 'translate(0, 40%)'
    },
    ':after': {
      content: '"Break"',
      position: 'absolute',
      fontSize: '0.8rem',
      left: '50%',
      top: 0,
      transform: 'translate(-50%, 280%)',
    }
  })


  return (
    <div css={{
      position: 'absolute',
      zIndex: 10,
      bottom: '3rem',
      right: '3rem',
      padding: '1rem 1rem 1rem 1rem',
      borderRadius: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(25px)',
    }}>
      <h3 className="text-lg text-center">Control Guide</h3>
      <div className="relative mt-10 ml-20">
        <Image src={'/assets/projects/hello-world/keyboard.png'} width={500 * 0.8} height={306 * 0.8} alt=""/>

        <div css={keyMovement}>
          <span css={{
            position: 'relative',
            left: '-8px'
          }}>w</span>
          <div css={{
            display: 'flex',
            gap: '5px',
          }}>
            <span>a</span>
            <span>s</span>
            <span>d</span>
          </div>
        </div>

        <div css={keyReset}>
          <span>r</span>
        </div>
        <div css={space}></div>
      </div>


    </div>
  )
}