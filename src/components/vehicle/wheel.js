import { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useCylinder } from '@react-three/cannon';
import { Gltf } from '@react-three/drei'

// Auto-generated by: https://github.com/pmndrs/gltfjsx
const Wheel = forwardRef(({ radius = 0.7, leftSide, ...props }, ref) => {

  // kinematic bodies move based on their velocity and need to be manually moved.
  useCylinder(() => ({ mass: 1, type: 'Kinematic', material: 'wheel', collisionFilterGroup: 0, args: [radius, radius, 0.2, 16], ...props }), ref);
  return (
    <mesh ref={ref}>
      <mesh rotation={[0, 0, ((leftSide ? 1 : -1) * Math.PI) / 2]}>
        <Gltf src="/assets/model/wheel.glb" rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      </mesh>
    </mesh>
  );
});

export default Wheel;