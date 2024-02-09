/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { css } from "@emotion/react"
import Image from "next/image"

export default function AppBanner() {
  return (
    <div
      css={{
        position: "absolute",
        width: "560px",
        height: "110px",
        backgroundColor: "#E5E5E5",
        borderRadius: "25px",
        right: 0,
        bottom: "2rem",
        transform: "translate(0, 100%)",
        overflow: "hidden",
      }}
    >
      <Image src="/app.png" width={372} height={72} alt="" css={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }} />
    </div>
  )
}