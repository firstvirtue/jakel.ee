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

    <div className="flex w-full max-w-screen-2xl rounded-3xl shadow-xl overflow-hidden ml-auto mr-auto"
    style={{
      minHeight: '44rem',
    }}
    >
      <Menu />
      <ItemList />
    </div>

    <div className="mt-16 text-center">
      <Link className="bg-white px-12 py-4 rounded-full overflow-hidden shadow-xl" href="/work">More</Link>
    </div>
    </>
  )
}

export default ProjectList