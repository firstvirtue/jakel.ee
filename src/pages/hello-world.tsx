import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Sky, Cloud } from '@react-three/drei'
import MainCover from '@/components/Main/Cover'
import { useIntoStore } from '@/components/Main/store'

export default function HelloWorld() {

  const setIsHelloWorld = useIntoStore((state) => state.setIsHelloWorld)

  useEffect(() => {
    setIsHelloWorld(true)
  }, [])

  return (
    <MainCover />
  )
}
