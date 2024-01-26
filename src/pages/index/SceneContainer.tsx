import { Canvas } from "@react-three/fiber"
import KeyVisual from "./KeyVisual"

export default function SceneContainer() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh', left: 0 }}>
    <Canvas
      colorManagement
      shadows // highlight-lines
      camera={{ fov: 70, position: [0, 0, 2] }} eventPrefix="client">
      {/* <color attach="background" args={['#f0f0f0']} /> */}

      {/* <KeyVisual /> */}
    </Canvas>
    </div>
  )
}