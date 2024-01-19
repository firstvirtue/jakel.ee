/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function PostMenu() {

  const skills = ["react", "next.js", "webgl", "typescript", "webpack"]
  const softwareDesigns = ["SOLID", "mvvm"]

  return (
    <>
    <div className="pt-10 pl-8 pr-8 pb-10"
    css={css`
      background-color: hotpink;
    `}
    >
      <div className="menu sticky top-0 rounded-lg"
      css={css`
        background-color: #000;
      `}
      >
        <div className="text-white p-4">
          <span className="text-xs opacity-40">Work</span>
          <h2 className="text-3xl uppercase font-bold pb-2">
            { '기아 브랜드 글로벌 쇼케이스' }
          </h2>
          
          <hr className="opacity-30 my-2" />
          <span className="text-xs opacity-40">Client</span>
          <ul className="menu__list text-lg pt-2 pb-2">
            { skills.map((item, i) => {
              return <li className="menu__item" key={`project-${i}`}>
                <button className="pt-1 pb-1" type='button'>
                { item }
                </button>
              </li>
            })}
          </ul>
          
          <span className="text-xs opacity-40">Role</span>
          <ul className="menu__list text-lg pt-2 pb-2">
            { softwareDesigns.map((item, i) => {
              return <li className="menu__item" key={`project-${i}`}>
                <button className="pt-1 pb-1" type='button' >
                { item }
                </button>
              </li>
            })}
          </ul>
          <hr className="opacity-30 my-2" />

          <span className="text-xs opacity-40">Completed</span>
          <br />
          <button className="text-lg text-left" type='button'>
            <span> Side Project</span>
          </button>
          <br />
          <button className="text-lg pt-2 pb-2" type='button'>
            Awards
          </button>
        </div>
      </div>
    </div>
    </>
  )
}