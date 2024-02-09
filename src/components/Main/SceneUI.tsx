/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { css } from "@emotion/react"
import Image from "next/image"

export default function SceneUI() {
  return (
    <div css={{
      position: 'absolute',
      zIndex: 10,
      bottom: '3rem',
      right: '3rem',
      padding: '1rem',
      borderRadius: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(25px)',
    }}>
      <h3 className="text-lg text-center">Control Guide</h3>
      <div>
        <Image src={'/assets/projects/hello-world/keyboard.png'} width={500 * 0.8} height={306 * 0.8} alt=""/>
        <div>up</div>
        <div>up</div>
      </div>

    </div>
  )
}