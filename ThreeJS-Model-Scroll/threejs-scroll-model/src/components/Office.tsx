import { useGLTF, useScroll } from '@react-three/drei';
import { Mesh, Material } from 'three';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define the structure based on the GLTF model's nodes and materials
interface GLTFResult {
  nodes: {
    '01_office'?: Mesh;
    '02_library'?: Mesh;
    '03_attic'?: Mesh;
  };
  materials: {
    '01': Material;
    '02': Material;
    '03': Material;
  };
}

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

// Define props as GroupProps for common 3D group elements
type OfficeProps = JSX.IntrinsicElements['group'];

export function Office(props: OfficeProps) {
  const { nodes, materials } = useGLTF('./models/WawaOffice.glb') as unknown as GLTFResult;
  const ref = useRef<THREE.Group>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const libraryRef = useRef<THREE.Group>(null);
  const atticRef = useRef<THREE.Group>(null);

  const scroll = useScroll();

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useLayoutEffect(() => {
    // Check if all refs are defined before initializing the timeline
    if (ref.current && libraryRef.current && atticRef.current) {
      tl.current = gsap.timeline();

      // VERTICAL ANIMATION
      tl.current.to(
        ref.current.position,
        {
          duration: 2,
          y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
        },
        0
      );

      // Office Rotation
      tl.current.to(ref.current.rotation, { duration: 1, x: 0, y: Math.PI / 6, z: 0 }, 0);
      tl.current.to(ref.current.rotation, { duration: 1, x: 0, y: -Math.PI / 6, z: 0 }, 1);

      // Office movement
      tl.current.to(ref.current.position, { duration: 1, x: -1, z: 2 }, 0);
      tl.current.to(ref.current.position, { duration: 1, x: 1, z: 2 }, 1);

      // LIBRARY FLOOR
      tl.current.from(libraryRef.current.position, { duration: 0.5, x: -2 }, 0.5);
      tl.current.from(libraryRef.current.rotation, { duration: 0.5, y: -Math.PI / 2 }, 0);

      // ATTIC
      tl.current.from(atticRef.current.position, { duration: 1.5, y: 2 }, 0);
      tl.current.from(atticRef.current.rotation, { duration: 0.5, y: Math.PI / 2 }, 1);
      tl.current.from(atticRef.current.position, { duration: 0.5, z: -2 }, 1.5);
    }
  }, []);

  return (
    <group {...props} dispose={null} ref={ref} position={[0.5, -1, -1]} rotation={[0, -Math.PI / 3, 0]}>
      <mesh geometry={nodes['01_office']?.geometry} material={materials['01']} />
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <mesh geometry={nodes['02_library']?.geometry} material={materials['02']} />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh geometry={nodes['03_attic']?.geometry} material={materials['03']} />
        </group>
      </group>
    </group>
  );
}

// Preload the GLTF model to optimize loading time
useGLTF.preload('./models/WawaOffice.glb');
