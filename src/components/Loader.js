import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { useProjectStore } from './store';

function ImageLoader(callback) {
  const images = [
    loadImage('/assets/projects/kia-worldwide/cover-lg.jpg'),
    loadImage('/assets/projects/fujifilm/cover-lg.jpg'),
    loadImage('/assets/projects/laneige/cover-lg.png'),
    loadImage('/assets/projects/galleria/main.png'),
    loadImage('/assets/projects/vyvydstudio/cover.png'),
    loadImage('/assets/projects/vyvydstudio/shot-02.png'),
  ]

  let count = 0

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      let image = new Image()
  
      image.onload = () => {
        callback(Math.floor(++count / images.length * 100))
        resolve(image)
      }
      image.onerror = () => reject(new Error(`Could not load image at ${url}`))
      image.src = url
    })
  }

  Promise.all(images)
  .then(res => {
    // console.log('load', res)
  })
  .catch(err => console.log(err))
}

function Loader() {
  const isLoaded = useProjectStore((state) => state.isLoaded)
  const setIsLoaded = useProjectStore((state) => state.setIsLoaded)
  const [status, setStatus] = useState(0)

  const firstUpdate = useRef(true)
  useLayoutEffect(() => {
    if(firstUpdate.current) {
      firstUpdate.current = false
      document.body.style.overflow = 'hidden'
      ImageLoader(count => {
        setStatus(count)
        if(count === 100) {
          setTimeout(() => {
            setIsLoaded(true)
            document.body.style.overflow = ''
          }, 500)
        }
      })
      return
    }
  })

  const loadingPanel = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: '10000',
    background: '#ffffff',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: 'opacity 500ms',
  }

  const progressContainer = {
    position: 'relative',
    background: 'aliceblue',
    width: '320px',
    height: '1px',
    marginBottom: '2rem',
  }

  const progressBar = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${status}%`,
    background: '#E06D72',
    transition: 'width 100ms',
  }

  const text = {
    marginLeft: '0.8rem',
    fontSize: '13px',
  }

  return(
    <>
      {!isLoaded ? 
      <div style={loadingPanel}>
        <div style={progressContainer}>
          <div style={progressBar}></div>
        </div>
        <div>
          <span style={text}>{status}%</span>
          <span style={text}>Loading..</span>
        </div>
      </div>
      : null
      }
      
    </>
  )
}

export default Loader