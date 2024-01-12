import Link from "next/link"

export function Header() {
  return (
    <header className="header">
      <div className="left">
        <Link href="/">
          {/* <img src="/assets/img/j-logo2.png" alt="" /> */}
          <strong>
            Jake
          </strong>
          <strong>
            Lee
            <span className="dot">.</span>
            {/* <span>Contact</span> */}
          </strong>
        </Link>
      </div>
      <div className="menu-container">
        <Link href="/work" className="">Work</Link>
        <a href="#" className="">Lab</a>
        <a href="#" className="contact">Contact</a>
      </div>
    </header>
  )
}