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
      // staggerChildren: 0.1,
      // delayChildren: 0.1,
      },
    },
    leaving: { opacity: 0, y: -10 },
  };

  const boxChildVariants = {
    initial: { opacity: 0, x: 20, y: 40, scale: 0.96 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    leaving: { opacity: 0, x: -20, y: -40, scale: 0.96 },
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

  function arrangeMasonryLayout(items, containerWidth, columnWidth) {
    const numColumns = Math.floor(containerWidth / columnWidth);
    let columnHeights = new Array(numColumns).fill(0);
    let h = 0

    items.forEach((item, index) => {
        // Find the shortest column
        let shortestColumn = 0;
        for (let i = 1; i < numColumns; i++) {
            if (columnHeights[i] < columnHeights[shortestColumn]) {
                shortestColumn = i;
            }
        }

        // Calculate position for the item
        const top = columnHeights[shortestColumn];
        const left = shortestColumn * columnWidth;
        item.style.position = 'absolute';
        item.style.top = top + 'px';
        item.style.left = left + 'px';

        // Update the height of the shortest column
        columnHeights[shortestColumn] += item.offsetHeight;

        if(index === items.length - 1) {
          h = columnHeights[shortestColumn]
        }
    });

    return h
  }

  useEffect(() => {
    
    const h = arrangeMasonryLayout(
      document.querySelectorAll('.card'),
      document.querySelector('.item-container')?.clientWidth,
      document.querySelector('.card')?.clientWidth
    )

    document.querySelector('.item-container').parentNode.style.height = `${h + 96 + 96}px`
    console.log(h)

  }, [selectedItems])
  
  return (
    <>
    <div className="item-container flex-1 pr-8 pl-8"
    // style={{ 'backgroundColor': 'rgba(255, 255, 255, 0.2)' }}
    style={{ 'backgroundColor': 'rgba(255, 255, 255, 1)' }}
    >
      <motion.ul 
        className="relative item-list flex flex-wrap mt-24 mb-24"
        variants={boxVariants}
        initial="initial"
        animate="visible"
        exit="leaving"
        >
        
        { selectedItems.map((item, i) => {
          return <li 
            className="card w-1/4 p-2"
            key={`project-${item.id}`}>
              <motion.div
                variants={boxChildVariants}
              >
                <Item project={item} index={ i + 1 } />
              </motion.div>
          </li>
        })}
      </motion.ul>
    </div>
    </>
  )
}