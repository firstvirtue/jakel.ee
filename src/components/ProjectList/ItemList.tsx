import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "./store"

export default function ItemList() {
  const currentProject = useProjectStore((state) => state.currentProject)

  const [selectedItems, setSelectedItems] = useState<any>(projectData)

  useEffect(() => {
    const refine = projectData.reduce((acc, cur) => {
      // console.log(acc, cur.keywords, currentProject)
      if (cur.keywords.filter(x => x === currentProject).length > 0) {
        acc.push(cur)
      }

      return acc
    }, [])

    setSelectedItems(refine)
    // console.log(currentProject, refine)
  }, [currentProject])
  
  return (
    <>
    <div className="item-container w-3/4">
      <ul className="item-list">
        { selectedItems.map((item, i) => {
          return <li className="menu__item" key={`project-${item.id}`}>
            <button type='button'>
            { item.nm }
            </button>
          </li>
        })}
      </ul>
    </div>
    </>
  )
}