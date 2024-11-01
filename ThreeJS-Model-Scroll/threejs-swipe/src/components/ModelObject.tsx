import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type ModelObjectProps = {
  position: [number, number, number];
  color: string;
  isSelected: boolean;
};

const ModelObject: React.FC<ModelObjectProps> = ({ position, color, isSelected }) => {
  const mesh = useRef<Mesh>(null);

  // Only the selected object rotates
  useFrame(() => {
    if (isSelected && mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default ModelObject;
