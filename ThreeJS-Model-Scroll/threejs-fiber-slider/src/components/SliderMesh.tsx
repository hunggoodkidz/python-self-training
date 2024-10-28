import { useRef } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SliderMeshProps extends MeshProps {
  color: string;
  position: [number, number, number];
}

export const SliderMesh = ({ color, position, ...props }: SliderMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} {...props}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};