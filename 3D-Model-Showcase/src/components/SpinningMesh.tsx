// src/components/SpinningMesh.tsx

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface SpinningMeshProps {
  color: string;
  isSpinning: boolean;
  onPointerDown: () => void;
  onPointerUp: () => void;
}

const SpinningMesh: React.FC<SpinningMeshProps> = ({ color, isSpinning, onPointerDown, onPointerUp }) => {
  const meshRef = useRef<Mesh>(null);

  // Apply rotation animation if isSpinning is true
  useFrame(() => {
    if (isSpinning && meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default SpinningMesh;
