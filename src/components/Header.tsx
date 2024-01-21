/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { css } from "@emotion/react"

export function Header() {
  return (
    <header className="header">
      <div className="left">
        <Link className="" href="/">
          {/* <img src="/assets/img/j-logo2.png" alt="" /> */}
          <strong>
            Jake
            {/* Vincent */}
            {/* Sang */}
          </strong>
          <strong>
            Lee
            {/* Oh */}
            {/* 235 */}
            {/* <span className="dot">.</span> */}
            {/* <span>Contact</span> */}
          </strong>
          <small>
            developer
            {/* protestant */}
          </small>
        </Link>
      </div>
      <div className="menu-container">
        <Link href="/work" className="">Work</Link>
        <a href="#" className="">About</a>
        <a href="#" className="">Articles</a>
        <a href="#" className="contact">Contact</a>
      </div>
    </header>
  )
}