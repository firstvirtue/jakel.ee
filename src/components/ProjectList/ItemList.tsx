import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "./store"
import Item from './Item'
import { AnimatePresence, motion } from 'framer-motion'
import MasonryLayout from '../MasonryLayout'

export default function ItemList() {
  const currentProject = useProjectStore((state) => state.currentProject)

  const [selectedItems, setSelectedItems] = useState<any>(projectData)

  const boxVariants = {
    initial: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.1,
      },
    },
    leaving: { opacity: 0, y: -10 },
  };

  const boxChildVariants = {
    initial: { opacity: 0, y: 20, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
    leaving: { opacity: 0, y: -20, scale: 0.96 },
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
    <div className="item-container flex-1 pr-8 pl-8 backdrop-blur-xl"
    // style={{ 'backgroundColor': 'rgba(255, 255, 255, 0.2)' }}
    style={{ 'backgroundColor': 'rgba(255, 255, 255, 1)' }}
    >
      <motion.ul 
        className="item-list flex flex-wrap -ml-3 -mr-3 pt-24 [&>*:nth-child(2n)]:mt-24"
        variants={boxVariants}
        initial="initial"
        animate="visible"
        exit="leaving"
        >
        
        { selectedItems.map((item, i) => {
          return <li 
            className="menu__item w-2/4"
            key={`project-${item.id}`}>
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