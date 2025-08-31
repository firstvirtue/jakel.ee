import * as THREE from 'three'
import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { Box, Plane, useCursor, MeshPortalMaterial, CameraControls, useGLTF, Gltf, Text, Sky, Cloud, Line } from '@react-three/drei'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import type { TrimeshProps } from '@react-three/cannon';
import { Physics, Debug, useCylinder, useTrimesh, useConvexPolyhedron } from '@react-three/cannon';
import { Geometry } from "three-stdlib";
import Vehicle from '../vehicle'

// Extend Window interface for vehicle position and rotation
declare global {
  interface Window {
    vehiclePosition?: { x: number; y: number; z: number };
    vehicleRotation?: { x: number; y: number; z: number };
  }
}

// extend(geometry)
// @ts-ignore
type TerrainGLTF = GLTF & {
  materials: {}
  nodes: {
    // @ts-ignore
    terrain003: Mesh & {
      // @ts-ignore
      geometry: BufferGeometry & { index: ArrayLike<number> }
    }
  }
}

// type Store = {
//   isPaused: boolean
//   pause: () => void
//   play: () => void
// }

// const useStore = create<Store>((set) => ({
//   isPaused: false,
//   pause: () => set({ isPaused: true }),
//   play: () => set({ isPaused: false }),
// }))

function toConvexProps(bufferGeometry: any) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices();
  return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []]; // prettier-ignore
}

const Terrain = ({ position }: Pick<TrimeshProps, 'position'>) => {
  // const { scene } = useGLTF('/assets/model/terrain.002.glb')
  // console.log('scene:: ', scene)

  const {
    nodes: {
      MtFuji_low: { geometry },
    },
  } = useGLTF('/assets/model/Fuji.glb') as TerrainGLTF

  // const { nodes } = useGLTF("/assets/model/Fuji.glb");

  
  const {
    attributes: {
      position: { array: vertices },
    },
    index: { array: indices },
  } = geometry


  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      position
    }),
    // @ts-ignore
    useRef<Mesh>(null),
  )

  // const [hovered, setHover] = useState(false)
  // const { isPaused } = useStore()

  // const geo = useMemo(() => toConvexProps(nodes.MtFuji_low.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));

  return (

    <mesh
      receiveShadow
      ref={ref}
      geometry={geometry}
    >
      <meshStandardMaterial color={'green'} />
    </mesh>

    // <primitive
    //   ref={ref}
    //   object={nodes}
    // >
    //   <meshStandardMaterial color={'green'} />
    // </primitive>
  )
}

const Bowl = ({ rotation }: Pick<TrimeshProps, 'rotation'>) => {
  const {
    nodes: {
      'bowl': { geometry },
    },
    // @ts-ignore
  } = useGLTF('/assets/model/bowl.glb') as BowlGLTF
  const {
    attributes: {
      position: { array: vertices },
    },
    index: { array: indices },
  } = geometry

  

  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      rotation,
    }),
    // @ts-ignore
    useRef<Mesh>(null),
  )

  return (
    <mesh
      ref={ref}
      geometry={geometry}
    >
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
}

const Obje = (props: any) => {
  const [ref] = useCylinder(() => ({ mass: 0.3, args: [1, 1, 2, 16], ...props }));

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <Gltf castShadow src={props.src} scale={1} position={[0, -1, 0]} />
    </mesh>
  );
};

// 파티클 컴포넌트
const Particle = ({ position, velocity, onDestroy }: { 
  position: THREE.Vector3; 
  velocity: { x: number; y: number; z: number }; 
  onDestroy: () => void 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [life, setLife] = useState(0);
  const maxLife = 1.0; // 1초 후 사라짐 (더 빠르게)
  const [color] = useState(() => {
    // 밝고 화려한 색상들
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', 
      '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
      '#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#ff6348'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  });

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // 파티클 움직임 (더 빠르고 경쾌한 움직임)
    meshRef.current.position.x += velocity.x * delta;
    meshRef.current.position.y += (velocity.y - 0.3) * delta; // 가벼운 중력
    meshRef.current.position.z += velocity.z * delta;
    
    // 수명 관리
    setLife(prev => {
      const newLife = prev + delta;
      if (newLife >= maxLife) {
        onDestroy();
        return maxLife;
      }
      return newLife;
    });
    
    // 크기 변화 (파티클처럼 작아지면서 사라짐)
    const scale = Math.max(0.1, 1.0 - (life / maxLife) * 0.9);
    meshRef.current.scale.setScalar(scale);
    
    // 회전 효과 (빠른 회전)
    meshRef.current.rotation.x += delta * 2.0;
    meshRef.current.rotation.y += delta * 1.5;
    meshRef.current.rotation.z += delta * 1.0;
    
    // 투명도 변화 (빠른 페이드아웃)
    const opacity = Math.max(0, 1.0 - (life / maxLife));
    if (meshRef.current.material) {
      (meshRef.current.material as THREE.Material).opacity = opacity;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.06, 0.06, 0.06]} /> {/* 더 작은 큐브 파티클 */}
      <meshBasicMaterial 
        color={color}
        transparent 
        opacity={1.0}
      />
    </mesh>
  );
};

// 파티클 시스템 컴포넌트
interface ParticleData {
  id: number;
  position: THREE.Vector3;
  velocity: { x: number; y: number; z: number };
}

// 궤적 시스템 컴포넌트
interface TrailPoint {
  position: THREE.Vector3;
  timestamp: number;
  color: string; // 랜덤 색상
  life: number; // 수명 (0-1, 1이 최대 수명)
}

const ParticleSystem = ({ vehicleRef }: { vehicleRef: React.RefObject<THREE.Group> }) => {
  const [particles, setParticles] = useState<ParticleData[]>([]);
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const lastPosition = useRef(new THREE.Vector3());
  const velocityThreshold = 0.05; // 움직임 감지 임계값을 낮춤
  const frameCount = useRef(0);
  


  useFrame((state, delta) => {
    frameCount.current++;
    
    // 궤적 포인트 수명 관리
    setTrailPoints(prev => {
      const fadeSpeed = 0.5; // 페이드 아웃 속도
      const updatedPoints = prev.map(point => ({
        ...point,
        life: Math.max(0, point.life - fadeSpeed * delta) // 시간에 따라 수명 감소
      })).filter(point => point.life > 0); // 수명이 0 이하인 포인트 제거
      
      return updatedPoints;
    });
    
    // window.vehiclePosition에서 정확한 차량 위치 가져오기
    if (!window.vehiclePosition) return;
    
    const currentPosition = new THREE.Vector3(
      window.vehiclePosition.x,
      window.vehiclePosition.y,
      window.vehiclePosition.z
    );
    
    // 이전 위치와 현재 위치의 차이로 속도 계산
    const velocity = currentPosition.clone().sub(lastPosition.current);
    const speed = velocity.length();
    
    // 궤적 포인트 추가 (차량이 움직일 때만)
    if (speed > 0.05) {
      const groundPosition = currentPosition.clone();
      groundPosition.y = -0.95; // 지면에 더 가깝게 붙임
      
      setTrailPoints(prev => {
        const paintColor = '#00ffff'; // 청록색 형광
        
        const newPoints = [...prev, {
          position: groundPosition,
          timestamp: Date.now(),
          color: paintColor,
          life: 1.0 // 최대 수명으로 시작
        }];
        
        // 최근 150개 포인트만 유지 (더 많은 궤적)
        if (newPoints.length > 150) {
          return newPoints.slice(-150);
        }
        return newPoints;
      });
    }
    
    // 자동차가 움직이고 있을 때만 파티클 생성 (성능 최적화)
    if (frameCount.current % 15 === 0 && speed > 0.01) { // 15프레임마다 생성, 덜 자주
      // 자동차 뒷부분 위치 계산 (차량의 뒤쪽)
      const carDirection = velocity.clone().normalize();
      const particlePosition = currentPosition.clone().add(
        carDirection.clone().multiplyScalar(-1.8) // 차량 뒤쪽 거리
      );
      
      // 더 촘촘한 위치 오프셋 (작은 범위)
      particlePosition.x += (Math.random() - 0.5) * 0.8;
      particlePosition.y += Math.random() * 0.6;
      particlePosition.z += (Math.random() - 0.5) * 0.8;
      
      // 파티클 개수 제한 (성능 최적화)
      const particleCount = Math.min(
        Math.floor(speed * 10) + Math.floor(Math.random() * 3) + 3, // 3-8개로 제한
        8 // 최대 8개
      );
      
      for (let i = 0; i < particleCount; i++) {
        const id = Date.now() + Math.random();
        const offsetPosition = particlePosition.clone();
        // 더 촘촘한 분포
        offsetPosition.x += (Math.random() - 0.5) * 0.6;
        offsetPosition.y += Math.random() * 0.4;
        offsetPosition.z += (Math.random() - 0.5) * 0.6;
        
        // 더 빠르고 경쾌한 움직임
        const particleVelocity = {
          x: (Math.random() - 0.5) * 1.5,
          y: Math.random() * 2.0 + 1.2, // 위로 더 많이 올라감
          z: (Math.random() - 0.5) * 1.5
        };
        
        setParticles(prev => {
          // 파티클 개수 제한 (최대 50개)
          if (prev.length >= 50) {
            return prev.slice(-40); // 오래된 파티클 10개 제거
          }
          return [...prev, {
            id,
            position: offsetPosition,
            velocity: particleVelocity
          }];
        });
      }
    }
    
    lastPosition.current.copy(currentPosition);
  });

  const removeParticle = (id: number) => {
    setParticles(prev => prev.filter(particle => particle.id !== id));
  };



  return (
    <>
            {/* 형광색 스플라인 라인 궤적 */}
      {(() => {
        // 연속된 포인트들을 그룹화하여 라인 생성
        const lineGroups = [];
        for (let i = 0; i < trailPoints.length - 1; i += 2) {
          const group = trailPoints.slice(i, i + 6);
          if (group.length >= 3) {
            lineGroups.push(group);
          }
        }
        
        return lineGroups.map((group, groupIndex) => {
          const points = group.map(point => point.position);
          
          // 그룹의 평균 수명 계산
          const avgLife = group.reduce((sum, point) => sum + point.life, 0) / group.length;
          
          return (
            <Line
              key={groupIndex}
              points={points}
              color={group[0].color}
              lineWidth={8}
              transparent
              opacity={0.9 * avgLife}
            />
          );
        });
      })()}
      
      {/* 파티클들 */}
      {particles.map(particle => (
        <Particle
          key={particle.id}
          position={particle.position}
          velocity={particle.velocity}
          onDestroy={() => removeParticle(particle.id)}
        />
      ))}
      

    </>
  );
};

export const AppScene = () => {
  // @ts-ignore
  const boxRef = useRef<Mesh>(null);
  const vehicleRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.004;
      boxRef.current.rotation.x += 0.004;
      boxRef.current.rotation.z += 0.004;
    }
  });

  // console.log('Scene:: ')
  
  return (
    <>
      {/* 3D Scene */}
      <group scale={[0.2, 0.2, 0.2]}>
        <color attach="background" args={['#f0f0f0']} />        
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 22, 15]} 
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left = {-20}
        shadow-camera-right = {20}
        shadow-camera-top = {20}
        shadow-camera-bottom = {-20}
        />
        <Sky />

        <Physics>
        <Box ref={boxRef} castShadow position={[0, 0.5, 0]}></Box>
          {/* <Debug> */}
            <group>
            <Obje src={"/assets/model/eiffel.glb"} position={[-11, 1, 12]} userData={{ id: 'box-1', health: 80 }}/>
            <Obje src={"/assets/model/colosseum.glb"} position={[-3, 1, 15]} userData={{ id: 'box-2', health: 80 }}/>
            <Obje src={"/assets/model/pisa.glb"} position={[-2.5, 1, 17]} userData={{ id: 'box-3', health: 80 }}/>
            </group>
            <Terrain position={[16, -1, 13]} />
            
            <group position={[0, -1, 50]}>
              <Gltf src="/assets/model/terrain.004.glb" scale={1} position={[0, 0, 0]} />
              <Gltf src="/assets/model/terrain.002.glb" scale={1} position={[0, 0, 0]} />
              <Gltf receiveShadow src="/assets/model/europe.glb" scale={1} position={[0, 0, 0]} />
            </group>
          <Vehicle ref={vehicleRef} />
          <ParticleSystem vehicleRef={vehicleRef} />
          {/* </Debug> */}
        </Physics>
      </group>


    </>
  )
}
