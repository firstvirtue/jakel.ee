import { useProjectStore } from "./store"

export default function Menu() {
  const setCurrentProject = useProjectStore((state) => state.setCurrentProject)

  const skills = ["react", "next.js", "webgl", "typescript", "webpack"]
  const softwareDesigns = ["SOLID", "mvvm"]

  return (
    <>
    <div className="menu w-1/4 sticky top-20 h-fit">
      <button type='button' onClick={e => setCurrentProject('')}>
        All
      </button>
      <hr />
      <span className="text-xs">Skills</span>
      <ul className="menu__list text-base">
        { skills.map((item, i) => {
          return <li className="menu__item" key={`project-${i}`}>
            <button type='button' onClick={e => setCurrentProject(item)}>
            { item }
            </button>
          </li>
        })}
      </ul>
      <hr />
      <span className="text-xs">Software Designs</span>
      <ul className="menu__list text-base text-base">
        { softwareDesigns.map((item, i) => {
          return <li className="menu__item" key={`project-${i}`}>
            <button type='button' onClick={e => setCurrentProject(item)}>
            { item }
            </button>
          </li>
        })}
      </ul>
      <hr />
      <button type='button' onClick={e => setCurrentProject('Lab')}>
        Lab <br/>
        <span>Side Project</span>
      </button>
    </div>
    </>
  )
}