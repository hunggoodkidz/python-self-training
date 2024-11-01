import { useRef } from 'react';
import { MeshProps} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface RotatingMeshProps extends MeshProps {
  color: string;
  position: [number, number, number];
  isSelected: boolean;
}

export const RotatingMesh = ({ color, position, isSelected }: RotatingMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color} />

      {/* Apply OrbitControls only if this is the selected object */}
      {isSelected && <OrbitControls enableZoom={false} />}
    </mesh>
  );
};