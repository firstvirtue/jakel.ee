import { useEffect, useRef } from 'react'

export function useKeyPress(target, event) {
  useEffect(() => {
    const downHandler = ({ key, code }) => {
      // 키 이름과 키 코드 모두 확인
      const isTargetKey = target.indexOf(key) !== -1 || target.indexOf(code) !== -1
      if (isTargetKey) {
        event(true)
      }
    }
    const upHandler = ({ key, code }) => {
      // 키 이름과 키 코드 모두 확인
      const isTargetKey = target.indexOf(key) !== -1 || target.indexOf(code) !== -1
      if (isTargetKey) {
        event(false)
      }
    }
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])
}

export function useControls() {
  const keys = useRef({ forward: false, backward: false, left: false, right: false, brake: false, reset: false })
  useKeyPress(['ArrowUp', 'w', 'KeyW'], (pressed) => (keys.current.forward = pressed))
  useKeyPress(['ArrowDown', 's', 'KeyS'], (pressed) => (keys.current.backward = pressed))
  useKeyPress(['ArrowLeft', 'a', 'KeyA'], (pressed) => (keys.current.left = pressed))
  useKeyPress(['ArrowRight', 'd', 'KeyD'], (pressed) => (keys.current.right = pressed))
  useKeyPress([' ', 'Space'], (pressed) => (keys.current.brake = pressed))
  useKeyPress(['r', 'KeyR'], (pressed) => (keys.current.reset = pressed))
  return keys
}
