import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { PCDLoader } from 'three/addons/loaders/PCDLoader.js';
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

type Props = {
  fileType: 'pcd' | 'ply';
  filePath: string;
};

const PointCloudViewer: React.FC<Props> = ({ fileType, filePath }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load the Point Cloud based on file type
    const loadPointCloud = () => {
      let loader;
      if (fileType === 'pcd') {
        loader = new PCDLoader();
      } else if (fileType === 'ply') {
        loader = new PLYLoader();
      }

      loader?.load(filePath, (geometry) => {
        if (geometry instanceof THREE.BufferGeometry) {
          const material = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff });
          const points = new THREE.Points(geometry, material);
          scene.add(points);
        } else {
          console.error("Loaded object is not a BufferGeometry.");
        }
      });
    };

    loadPointCloud();

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [fileType, filePath]);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default PointCloudViewer;
