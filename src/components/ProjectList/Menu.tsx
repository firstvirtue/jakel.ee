import { useProjectStore } from "../store"

export default function Menu(props: any) {
  const { featured } = props
  const setCurrentProject = useProjectStore((state) => state.setCurrentProject)

  const tech = ["react", "webgl", "typescript", "webpack"]
  const softwareDesigns = ["mvvm"]

  return (
    <>
    <div className="pt-10 pl-8 pr-8 pb-10"
    // style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.34)' }}
    style={{ 'backgroundColor': 'rgba(255, 255, 255, 1)' }}
    >
      <div className="menu sticky rounded-lg"
      style={{ 
        'backgroundColor': 'rgba(0, 0, 0, 1)',
        'minWidth': '185px',
      }}
      >
        <div className="text-white p-4">
          <h2 className="text-3xl uppercase font-bold pb-11">{featured && <>Featured <br/></> } Work</h2>
          <button className="text-lg pt-2 pb-2" type='button' onClick={e => setCurrentProject('')}>
            All
          </button>
          <hr className="opacity-30 my-2" />
          <span className="text-xs opacity-40">Tech</span>
          <ul className="menu__list text-lg pt-2 pb-2">
            { tech.map((item, i) => {
              return <li className="menu__item" key={`project-${i}`}>
                <button className="pt-1 pb-1" type='button' onClick={e => setCurrentProject(item)}>
                { item }
                </button>
              </li>
            })}
          </ul>
          <hr className="opacity-30 my-2" />
          <span className="text-xs opacity-40">Software Designs</span>
          <ul className="menu__list text-lg pt-2 pb-2">
            { softwareDesigns.map((item, i) => {
              return <li className="menu__item" key={`project-${i}`}>
                <button className="pt-1 pb-1" type='button' onClick={e => setCurrentProject(item)}>
                { item }
                </button>
              </li>
            })}
          </ul>
          <hr className="opacity-30 my-2" />
          <button className="text-lg text-left" type='button' onClick={e => setCurrentProject('side_project')}>
            <span> Side Projects</span>
          </button>
          <br />
          <button className="text-lg pt-2 pb-2" type='button' onClick={e => setCurrentProject('awards')}>
            Awards
          </button>
        </div>
      </div>
    </div>
    </>
  )
}