import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import KeyVisual from "./KeyVisual"
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Sky, Cloud } from '@react-three/drei'
import { AppScene } from '@/components/scene'
import { useIntoStore } from './store'

const cameraVector = [0, 0, 2]

extend(geometry)
// const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
// const medium = import('@pmndrs/assets/fonts/inter_medium.woff')

export default function SceneContainer() {
  const isView = useIntoStore((state) => state.isView)
  const setIsView = useIntoStore((state) => state.setIsView)
  const setIsHelloWorld = useIntoStore((state) => state.setIsHelloWorld)

  useEffect(() => {
    console.log('isVew:: ', isView)
    if(isView) {
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = ''
    }
  }, [isView])

  useEffect(() => {
    
    function handlePopState() {

      if(location.pathname === '/') {
        setIsView(false)
      }
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
    
  }, [])

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}>
      <Canvas
        colorManagement
        shadows // highlight-lines
        // @ts-ignore
        camera={{ fov: 70, position: cameraVector }} eventPrefix="client">

        <KeyVisual />

        {/* @ts-ignore */}
        <Frame id="02" name={`Hello\nWorld`} author="@seoeunggyo5">
          <AppScene />
        </Frame>
        <Rig />
      </Canvas>
    </div>
  )
}

function Frame({ id, name, author, bg, width = 1.3, height = 1, children, ...props }: any) {
  const isHelloWorld = useIntoStore((state) => state.isHelloWorld)
  const setIsHelloWorld = useIntoStore((state) => state.setIsHelloWorld)

  const [hovered, hover] = useState(false)
  useCursor(hovered)
  const isView = useIntoStore((state) => state.isView)
  const setIsView = useIntoStore((state) => state.setIsView)

  const ref = useRef()
  const { camera, pointer } = useThree()
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0
  })
  const [frameSize, setFrameSize] = useState({
    width: 1.5,
    height: 1.2
  })

  useEffect(() => {
    const updateR3FMesh = () => {

      // @ts-ignore
      const fov = camera.fov * (Math.PI / 180)
      const viewport_height = 2 * Math.tan(fov / 2) * camera.position.z
      // @ts-ignore
      const viewport_width = viewport_height * camera.aspect
      setViewportSize({
        width: viewport_width,
        height: viewport_height
      })

      console.log('viewport:: ', viewport_width, viewport_height)

      // const htmlElement = htmlElementr3fMesh.current;
      const htmlElement = document.querySelector('#portal-visual')
      const r3fMesh = ref.current as any
      if(!htmlElement|| !r3fMesh) return

      // Get the position and size of the HTML element
      const htmlRect = htmlElement.getBoundingClientRect()

      const elSizeX = viewport_width * htmlRect.width / (window.innerWidth - 16)
      const elSizeY = viewport_height * htmlRect.height / window.innerHeight

      setFrameSize({
        width: elSizeX,
        height: elSizeY
      })

      // Set the position and size of the R3F mesh
      r3fMesh.position.x = -(viewport_width / 2) + (elSizeX / 2) + ((htmlRect.left) / (window.innerWidth - 16)) * viewport_width
      r3fMesh.position.y = (viewport_height / 2) - (elSizeY / 2) - ((htmlRect.top + window.scrollY) / window.innerHeight) * viewport_height
      // r3fMesh.scale.set(htmlRect.width / (window.innerWidth - 16), htmlRect.height / window.innerHeight, 1)

      // console.log('pos, scale', r3fMesh.position, r3fMesh.scale)
    };
    // Call the updateR3FMesh function whenever the window is resized
    window.addEventListener('resize', updateR3FMesh);
    updateR3FMesh(); // Initial update
    
    if(isHelloWorld) {
      setIsView(true)
      setIsHelloWorld(false)
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateR3FMesh);
    }
  }, [])

  const portal = useRef()
  // @ts-ignore
  useFrame((state, dt) => easing.damp(portal.current, 'blend', isView ? 1 : 0, 0.2, dt))
  return (
    <group {...props} ref={ref}>
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
      onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}
      >
        {/* @ts-ignore */}
        <roundedPlaneGeometry args={[frameSize.width, frameSize.height, 0.05]} />
        {/* @ts-ignore */}
        <MeshPortalMaterial ref={portal} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(cameraVector[0], cameraVector[1], cameraVector[2]), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  const isView = useIntoStore((state) => state.isView)
  
  useEffect(() => {
    const active = scene.getObjectByName('02')
    if (isView) {
      active?.parent?.localToWorld(position.set(0, 0.5, 0.25))
      active?.parent?.localToWorld(focus.set(0, 0.5, 0))
    }
    // @ts-ignore
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)

    // console.log('CameraControls:: ', controls)
  }, [isView])
  // @ts-ignore
  controls && (controls.mouseButtons.wheel = 0)
  // @ts-ignore
  controls && (controls.mouseButtons.left = 0)

  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}