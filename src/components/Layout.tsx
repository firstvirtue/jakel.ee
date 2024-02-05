import { useEffect } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { useProjectStore } from "./store"

export default function Layout({ children }) {

  const currentScrollY = useProjectStore((state) => state.currentScrollY)
  const setCurrentScrollY = useProjectStore((state) => state.setCurrentScrollY)

  useEffect(() => {
    
    function scroll() {
      setCurrentScrollY(window.scrollY)
    }

    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <>
    <Header />
    { children }
    <Footer />
    </>
  )
}