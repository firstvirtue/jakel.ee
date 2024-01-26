import { Suspense, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree} from "@react-three/fiber"
import { useAspect, useVideoTexture, useTexture, shaderMaterial } from '@react-three/drei'
import * as THREE from "three"

export default function KeyVisual() {
  const size = useAspect(800, 600)
  const ref = useRef()
  const { mouse } = useThree()

  useFrame(() => {
    if(ref.current.material.uniforms) {
      // ref.current.material.needsUpdate = true
      ref.current.material.uniforms.mouse.value.x = THREE.MathUtils.lerp(ref.current.material.uniforms.mouse.value.x, mouse.x, 0.1)
      ref.current.material.uniforms.mouse.value.y = THREE.MathUtils.lerp(ref.current.material.uniforms.mouse.value.y, mouse.y, 0.1)
      // ref.current.material.uniforms.mouse.x = mouse.x
      // ref.current.material.uniforms.mouse.y = mouse.y
      console.log(mouse)
    }

  })

  return(<>
    <mesh ref={ref} scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="/qt.png" />}>
        <VideoMaterial url="/prj.mp4" />
      </Suspense>
    </mesh>
  </>)
}

function VideoMaterial({ url }) {
  
  const texture = useVideoTexture(url)
  const [hovered, setHover] = useState(false)
  // return <meshBasicMaterial map={texture} toneMapped={false} />
  return <imageFadeMaterial tex={texture} mouse={[0.5, 0.5]} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

export const ImageFadeMaterial = shaderMaterial(
  {
    tex: null,
    resolution: new THREE.Vector2(1.,800/600),
    mouse: new THREE.Vector2(2, 2),
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform vec2 resolution;
    uniform vec2 mouse;
    
    float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
      uv -= disc_center;
      uv*=resolution;
      float dist = sqrt(dot(uv, uv));
      return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
    }

    void main() {
      vec2 newUV = vUv; 
      // get small circle around mouse, with distances to it
      float c = circle(vUv, mouse, 0.0, 0.2);
      // get texture 3 times, each time with a different offset, depending on mouse speed:
      float r = texture2D(tex, newUV.xy += c * (0.1 * .5)).x;
      float g = texture2D(tex, newUV.xy += c * (0.1 * .525)).y;
      float b = texture2D(tex, newUV.xy += c * (0.1 * .55)).z;
      // combine it all to final output
      vec4 color = vec4(r, g, b, 1.);
      
      gl_FragColor = color;
      // gl_FragColor = texture2D(tex, vUv);
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
)

extend({ ImageFadeMaterial })