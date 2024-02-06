/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { css } from "@emotion/react"
import { useEffect, useState } from "react"

export function Header() {
  const [isMore, setIsMore] = useState(false)

  useEffect(() => {
    console.log(isMore)
  }, [isMore])

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
        <Link href="mailto:firstvirtue@gmail.com" className="contact">Contact</Link>

        <div className="util flex gap-2 ml-8">
          <a className="w-7 h-7 p-1" href="https://www.linkedin.com/in/firstvirtue/" target="_blank"><img className="social-icon" src='/assets/icons/linkedin-svgrepo-com.svg' /></a>
          <a className="w-7 h-7 p-1" href="https://github.com/firstvirtue" target="_blank"><img className="social-icon" src='/assets/icons/github-svgrepo-com.svg' /></a>

          {/* <button className="w-7 h-7 p-1" type="button" onClick={e=>setIsMore(!isMore)}>
            <span className="material-symbols-outlined text-xl leading-none">
            more_horiz
            </span>
          </button> */}
        </div>

        {
          isMore &&
          <div css={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            right: '1.5rem',
            top: '3rem',
          }}>
  
            {/* <a className="w-7 h-7 p-1" href="https://www.linkedin.com/in/firstvirtue/" target="_blank"><img className="social-icon" src='/assets/icons/linkedin-svgrepo-com.svg' /></a>
            <a className="w-7 h-7 p-1" href="https://github.com/firstvirtue" target="_blank"><img className="social-icon" src='/assets/icons/github-svgrepo-com.svg' /></a> */}
  
            <ul>
              <li><a className="block pt-1 pb-1 pr-2 pl-2" href="#">KR</a></li>
              <li><a className="block pt-1 pb-1 pr-2 pl-2" href="#">EN</a></li>
            </ul>
          </div>
        }
        

      </div>
    </header>
  )
}