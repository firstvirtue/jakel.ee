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
        <Link href="/about" className="">About</Link>
        {/* <a href="#" className="">Articles</a> */}
        <Link href="#" className="contact">Contact</Link>

        <div className="social flex gap-2 ml-8">
          <a className="w-7 h-7 p-1" href="https://www.linkedin.com/in/firstvirtue/" target="_blank"><img className="social-icon" src='/assets/icons/linkedin-svgrepo-com.svg' /></a>
          <a className="w-7 h-7 p-1" href="https://github.com/firstvirtue" target="_blank"><img className="social-icon" src='/assets/icons/github-svgrepo-com.svg' /></a>
        </div>
      </div>
    </header>
  )
}