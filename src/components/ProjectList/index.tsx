import Menu from "./Menu"
import ItemList from "./ItemList"

function ProjectList() {
  return (
    <>
    <div className="guide">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem', paddingLeft: '4rem', paddingRight: '4rem'}}>
        <img src='/assets/img/menu.png' width={'24%'} height={'auto'} />
        <img src='/assets/img/sc-no-menu.png' width={'70%'} />
      </div>
    </div>

    <div className="flex w-full max-w-screen-2xl">
      <Menu />
      <ItemList />
    </div>
    </>
  )
}

export default ProjectList