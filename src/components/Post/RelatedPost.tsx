/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import Item from "@/components/ProjectList/Item"

export default function RelatedPost(props) {
  const { prev, next } = props

  return (
    <div className="flex gap-8 pt-24 pl-24 pr-24">
      <Item project={prev} related prev />
      <Item project={next} related next />
    </div>
  )
}