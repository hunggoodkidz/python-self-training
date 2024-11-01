import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type CenterObjectProps = {
  position: [number, number, number];
};

const CenterObject: React.FC<CenterObjectProps> = ({ position }) => {
  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01; // Only the center object rotates
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default CenterObject;
