import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "./store"
import Item from './Item'
import { AnimatePresence, motion } from 'framer-motion'

export default function ItemList() {
  const currentProject = useProjectStore((state) => state.currentProject)

  const [selectedItems, setSelectedItems] = useState<any>(projectData)

  const boxVariants = {
    initial: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.14,
      }, 
    },
    leaving: { opacity: 0, y: -10, transition: {
      when: "afterChildren",
    } },
  };

  const boxChildVariants = {
    initial: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    leaving: { opacity: 0, y: -10 },
  }

  useEffect(() => {
    if(currentProject === '') {
      setSelectedItems(projectData) 
    } else {
      const refine = projectData.reduce((acc, cur) => {
        // console.log(acc, cur.keywords, currentProject)
        if (cur.keywords.filter(x => x === currentProject).length > 0) {
          acc.push(cur)
        }
  
        return acc
      }, [])

      setSelectedItems(refine)
    }

    // console.log(currentProject, refine)
  }, [currentProject])
  
  return (
    <>
    <div className="item-container w-3/4">
      <motion.ul className="item-list"
        variants={boxVariants}
        initial="initial"
        animate="visible"
        exit="leaving"
        >
          
        { selectedItems.map((item, i) => {
          return <li className="menu__item" key={`project-${item.id}`}>
              <motion.div
                variants={boxChildVariants}
              >
                <Item project={item} />
              </motion.div>
          </li>
        })}
      </motion.ul>
    </div>
    </>
  )
}