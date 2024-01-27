import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree} from "@react-three/fiber"
import { useAspect, useVideoTexture, useTexture, shaderMaterial } from '@react-three/drei'
import * as THREE from "three"
import { easing, geometry } from 'maath'
extend(geometry)

export default function KeyVisual({}) {
  const size = useAspect(200, 100)
  // console.log('size', size)
  const ref = useRef()
  const { camera, pointer } = useThree()
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0
  })
  const [geoSize, setGeoSize] = useState({
    width: 1.5,
    height: 1.2
  })

  useEffect(() => {
    const updateR3FMesh = () => {

      const fov = camera.fov * (Math.PI / 180)
      const viewport_height = 2 * Math.tan(fov / 2) * camera.position.z
      const viewport_width = viewport_height * camera.aspect
      setViewportSize({
        width: viewport_width,
        height: viewport_height
      })

      console.log('viewport:: ', viewport_width, viewport_height)

      // const htmlElement = htmlElementr3fMesh.current;
      const htmlElement = document.querySelector('#key-visual')

      const r3fMesh = ref.current

      // Get the position and size of the HTML element
      const htmlRect = htmlElement.getBoundingClientRect()

      const elSizeX = viewport_width * htmlRect.width / window.innerWidth
      const elSizeY = viewport_height * htmlRect.height / window.innerHeight

      setGeoSize({
        width: elSizeX,
        height: elSizeY
      })

      // Set the position and size of the R3F mesh
      r3fMesh.position.x = -(viewport_width / 2) + (elSizeX / 2) + ((htmlRect.left) / window.innerWidth) * viewport_width
      r3fMesh.position.y = (viewport_height / 2) - (elSizeY / 2) - (htmlRect.top / window.innerHeight) * viewport_height
      // r3fMesh.scale.set(htmlRect.width / window.innerWidth, htmlRect.height / window.innerHeight, 1)

      console.log('pos, scale', r3fMesh.position, r3fMesh.scale)
    };

    // Call the updateR3FMesh function whenever the window is resized
    window.addEventListener('resize', updateR3FMesh);
    updateR3FMesh(); // Initial update

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateR3FMesh);
    };
  }, []);

  useFrame(({pointer}) => {
    if(ref.current.material.uniforms) {
      // ref.current.material.needsUpdate = true

      let refineX = (pointer.x + 1) / 2
      let refineY = (pointer.y + 1) / 2
      // refineX = refineX - r3fMesh.position.x

      ref.current.material.uniforms.mouse.value.x = THREE.MathUtils.lerp(ref.current.material.uniforms.mouse.value.x, refineX, 0.05)
      ref.current.material.uniforms.mouse.value.y = THREE.MathUtils.lerp(ref.current.material.uniforms.mouse.value.y, refineY, 0.05)
      
      
      // console.log((mouse.x + 1) / 2, (mouse.y + 1) / 2)
    }

  })

  return(<>
    <mesh ref={ref}>
      <roundedPlaneGeometry args={[geoSize.width, geoSize.height, 0.05]}/>
      <Suspense fallback={<FallbackMaterial url="/qt.png" />}>
        <VideoMaterial url="/prj.mp4" />
      </Suspense>
    </mesh>
  </>)
}

function VideoMaterial({ url }) {
  
  const texture = useVideoTexture(url)
  const [hovered, setHover] = useState(false)
  return <imageFadeMaterial tex={texture} mouse={[0.5, 0.5]} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

export const ImageFadeMaterial = shaderMaterial(
  {
    tex: null,
    resolution: new THREE.Vector2(1.,800/800),
    mouse: new THREE.Vector2(0, 0),
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