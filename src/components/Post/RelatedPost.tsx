/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Item from "@/components/ProjectList/Item"

export default function RelatedPost(props: any) {
  const { prev, next } = props

  return (
    <div className="flex gap-8 pt-40 pb-20 max-w-screen-xl m-auto">
      <Item project={prev} related prev />
      <Item project={next} related next />
    </div>
  )
}