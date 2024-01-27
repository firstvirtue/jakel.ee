import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import KeyVisual from "./KeyVisual"
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Sky, Cloud } from '@react-three/drei'
import { AppScene } from '@/components/scene'

import { create } from 'zustand'

type State = {
  isView: boolean;
  setIsView: (isView: boolean) => void;
};

const useIntoStore = create<State>((set) => ({
  isView: false,
  setIsView: (isView) => set({ isView }),
}))

export { useIntoStore }


extend(geometry)
// const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
// const medium = import('@pmndrs/assets/fonts/inter_medium.woff')

export default function SceneContainer() {
  const isView = useIntoStore((state) => state.isView)
  const setIsView = useIntoStore((state) => state.setIsView)

  useEffect(() => {
    if(isView) {
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = ''
    }
  }, [isView])

  useEffect(() => {
    function handlePopState() {
      console.log(location.href)
      setIsView(false)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
    
  }, [])

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh', left: 0 }}>
    <Canvas
      colorManagement
      shadows // highlight-lines
      camera={{ fov: 70, position: [0, 0, 2] }} eventPrefix="client">
      {/* <color attach="background" args={['#f0f0f0']} /> */}

      <KeyVisual />

      <Frame id="02" name={`Hello\nWorld`} author="@seoeunggyo5" position={[1.42, 0.3, 0]}>
        <AppScene />
      </Frame>
    <Rig />
    </Canvas>
    </div>
  )
}

function Frame({ id, name, author, bg, width = 1.3, height = 1, children, ...props }) {
  const isView = useIntoStore((state) => state.isView)
  const setIsView = useIntoStore((state) => state.setIsView)

  const portal = useRef()
  
  const [hovered, hover] = useState(false)
  // useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', isView ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.415, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
      <Text fontSize={0.1} anchorX="right" position={[0.4, -0.359, 0.01]} material-toneMapped={false}>
        /{id}
      </Text>
      <Text fontSize={0.04} anchorX="right" position={[0.0, -0.377, 0.01]} material-toneMapped={false}>
        {author}
      </Text>
      {/* window.history.pushState("object or string", "Title", "/new-url") */}
      <mesh name={id} onClick={(e) => (e.stopPropagation(), window.history.pushState('', '', '/hello-world'), setIsView(true))}
      // onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}
      >
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  const isView = useIntoStore((state) => state.isView)
  
  useEffect(() => {
    const active = scene.getObjectByName('02')
    if (isView) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)

    console.log('CameraControls:: ', controls)
  }, [isView])
  controls && (controls.mouseButtons.wheel = 0)

  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}