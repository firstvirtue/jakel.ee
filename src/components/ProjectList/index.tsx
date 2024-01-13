import Menu from "./Menu"
import ItemList from "./ItemList"
import Link from 'next/link'

function ProjectList() {
  return (
    <>
    {/* <div className="fixed w-full h-full top-0">
      <video src="/prj.mp4" className="absolute w-full h-full object-cover" autoPlay muted loop playsInline></video>

      <div className="absolute w-full h-full"
      style={{ 'background': 'rgba(0, 0, 0, 0.44)' }}
      ></div>
    </div> */}
    <div className="guide z-10">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem', paddingLeft: '4rem', paddingRight: '4rem'}}>
        {/* <img src='/assets/img/menu.png' width={'24%'} height={'auto'} />
        <img src='/assets/img/sc-no-menu.png' width={'70%'} /> */}
        {/* <img src="/assets/screen.png" width={'100%'} alt="" /> */}
      </div>
    </div>

    <div className="flex w-full max-w-screen-2xl rounded-3xl shadow-xl overflow-hidden">
      <Menu />
      <ItemList />
    </div>

    <div className="mt-16">
      <Link className="bg-white px-12 py-4 rounded-full overflow-hidden shadow-xl" href="/work">More</Link>
    </div>
    </>
  )
}

export default ProjectList