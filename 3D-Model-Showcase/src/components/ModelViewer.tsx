// src/components/ModelViewer.tsx

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpinningMesh from './SpinningMesh';

interface ModelViewerProps {
  isSelected: boolean;
  model: string;
  blurred: boolean;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ isSelected, model, blurred }) => {
  // Define a dynamic color for each model as a placeholder
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

  const color = colors[model] || 'gray'; // Fallback color if model name isn't in colors

  // State to control spinning
  const [isSpinning, setIsSpinning] = useState(true);

  // Handlers to pause and resume spinning
  const handlePointerDown = () => setIsSpinning(false);
  const handlePointerUp = () => setIsSpinning(true);

  return (
    <div className={`w-64 h-64 ${blurred ? 'opacity-50' : 'opacity-100'}`}>
      <Canvas camera={{ position: [0, 0, 3.5] }}> {/* Adjust the camera for closer view */}
        {/* Improved lighting for better visibility */}
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={1.0} />
        <spotLight position={[10, 10, 10]} intensity={1.5} angle={0.2} />

        {/* Render SpinningMesh with automatic rotation only if selected */}
        <SpinningMesh
          color={color}
          isSpinning={isSelected && isSpinning} // Only spin if selected and isSpinning is true
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        />

        {/* Enable controls only for the selected model */}
        {isSelected && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
