/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import projectData from '../../data/project-data.json'
import { useProjectStore } from "../store"
import Item from './Item'
import { AnimatePresence, motion } from 'framer-motion'

import MasonryLayout from '../MasonryLayout'
import { debounce } from '@/lib/helper'
import { css } from '@emotion/react'

export default function ItemList() {
  const currentProject = useProjectStore((state) => state.currentProject)

  const [selectedItems, setSelectedItems] = useState<any>(projectData)
  const [isNoData, setIsNoData] = useState<boolean>(false)

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
    // console.log('::: ', items, containerWidth, columnWidth)

    if(items.length === 0) {
      setIsNoData(true)
      return
    }

    setIsNoData(false)

    const numColumns = Math.floor(containerWidth / columnWidth);
    let columnHeights = new Array(numColumns).fill(0);
    let h = 0
    let maxH = 0

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

        if(maxH < columnHeights[shortestColumn]) {
          maxH = columnHeights[shortestColumn]
        }

        if(index === items.length - 1) {
          h = columnHeights[shortestColumn]
        }
    });

    return maxH
  }

  useEffect(() => {

    console.log(selectedItems)

    const arrangeLayout = debounce(() => {
      const $container = document.querySelector('.item-container')
      if($container && $container.parentNode) {
        const h = arrangeMasonryLayout(
          document.querySelectorAll('.card'),
          $container?.clientWidth,
          document.querySelector('.card')?.clientWidth
        )
    
        $container.parentNode.style.height = `${h + 96 + 96}px`
        // console.log(h)
      }
    })
    
    arrangeLayout()
    setTimeout(arrangeLayout, 1000)
    window.addEventListener('resize', arrangeLayout)

    return () => {
      window.removeEventListener('resize', arrangeLayout)
    }
  }, [selectedItems])
  
  return (
    <>
    <div className="item-container flex-1 pr-8 pl-8"
    // style={{ 'backgroundColor': 'rgba(255, 255, 255, 0.2)' }}
    style={{ 
      'backgroundColor': 'rgba(255, 255, 255, 1)',
      'marginLeft': '-0.8rem',
      'marginRight': '-0.8rem',
    }}
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
            className="card 2xl:w-1/4 xl:w-1/3 lg:w-1/2 p-2"
            css={{
              transition: 'all 0.34s',
            }}
            key={`project-${item.id}`}>
              <motion.div
                variants={boxChildVariants}
              >
                <Item project={item} index={ i + 1 } />
              </motion.div>
          </li>
        })}
      </motion.ul>

      { isNoData &&
      <>
      <div css={{
        display: 'block',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20rem',
      }}>
      (;-;)
      </div>
      <p className='block text-center'>
      May be preparing..
      </p>
      </>
      
      }
    </div>
    </>
  )
}