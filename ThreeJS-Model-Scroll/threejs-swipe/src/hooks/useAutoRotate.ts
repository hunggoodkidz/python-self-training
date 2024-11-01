import { useFrame } from '@react-three/fiber';
import { MutableRefObject } from 'react';
import { Mesh } from 'three';

const useAutoRotate = (ref: MutableRefObject<Mesh | null>) => {
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Slow auto-rotation
    }
  });
};

export default useAutoRotate;