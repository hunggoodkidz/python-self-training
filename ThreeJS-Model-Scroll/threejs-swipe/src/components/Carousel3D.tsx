import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ModelObject from './ModelObject';
import Controls from './Controls';

const Carousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle model as selected

  const objects = [
    { id: 0, position: [-2, 0, 0], color: 'gray' },
    { id: 1, position: [0, 0, 0], color: 'white' }, // Middle (selected by default)
    { id: 2, position: [2, 0, 0], color: 'gray' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % objects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + objects.length) % objects.length);
  };

  return (
    <div className="relative">
      <button className="absolute left-4 top-1/2 text-white" onClick={handlePrev}>{"<"}</button>
      <button className="absolute right-4 top-1/2 text-white" onClick={handleNext}>{">"}</button>

      <Canvas style={{ background: 'black', height: '100vh', width: '100vw' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} />

        {objects.map((obj, index) => (
          <ModelObject
            key={obj.id}
            position={obj.position}
            color={obj.color}
            isSelected={currentIndex === index} // Only the selected model rotates
          />
        ))}
        <Controls />
      </Canvas>
    </div>
  );
};

export default Carousel3D;
