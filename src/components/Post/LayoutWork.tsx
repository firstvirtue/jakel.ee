/** @jsxImportSource @emotion/react */
'use client'
import PostMenu from "@/components/Post/PostMenu"
import { css } from "@emotion/react"

export default function LayoutWork(props) {

  const { children, project } = props

  return(
    <main className="min-h-screen pt-28">
      <div className="flex justify-center max-w-screen-2xl mr-auto ml-auto">
        <PostMenu project={project} />
        
        { children }
      </div>

    </main>
  )
}