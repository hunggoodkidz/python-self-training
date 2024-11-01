// src/components/ModelViewer.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface ModelViewerProps {
  isSelected: boolean;
  model: string; // Use a general string type for model name to handle dynamic model sets
  blurred: boolean;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ isSelected, model, blurred }) => {
  // Define a dynamic color based on the model name for now
  const colors: Record<string, string> = {
    Model1: 'orange',
    Model2: 'blue',
    Model3: 'green',
    Model4: 'purple',
    Model5: 'red',
    Model6: 'yellow',
    Model7: 'cyan',
    Model8: 'pink',
    Model9: 'lime',
    Model10: 'teal',
  };

  const color = colors[model] || 'gray'; // Use 'gray' as default if model name isn't in colors

  return (
    <div className={`w-64 h-64 ${blurred ? 'opacity-50' : 'opacity-100'}`}>
      <Canvas camera={{ position: [0, 0, 3.5] }}> {/* Adjust the camera for closer view */}
        {/* Improved lighting for better visibility */}
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={1.0} />
        <spotLight position={[10, 10, 10]} intensity={1.5} angle={0.2} />

        {/* Placeholder model - now with color and larger size */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} /> {/* Increase the box size for better visibility */}
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Enable controls only for the selected model */}
        {isSelected && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
