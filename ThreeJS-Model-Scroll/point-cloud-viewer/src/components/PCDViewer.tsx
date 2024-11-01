import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PCDLoader } from 'three/addons/loaders/PCDLoader.js';


function PCDLoaderComponent() {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new PCDLoader();

    loader.load(
      'scene0000_00_vh_clean_2.pcd', // Update with actual path
      (points) => {
        scene.add(points); // Add loaded points to the scene
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    return () => {
      // Cleanup: remove points from the scene when the component unmounts
      scene.clear();
    };
  }, [scene]);

  return null; // No need to return any JSX, as we are only adding to the scene
}

export default function PCDViewer() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ height: '100vh', background: 'black' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <PCDLoaderComponent />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}
