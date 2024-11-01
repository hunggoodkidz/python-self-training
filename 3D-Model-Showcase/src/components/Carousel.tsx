// src/components/Carousel.tsx

import React, { useState } from 'react';
import ModelViewer from './ModelViewer';
import Navigation from './Navigation';

// Imagine this array is loaded from your database
const modelNames = ['Model1', 'Model2', 'Model3', 'Model4', 'Model5', 'Model6', 'Model7', 'Model8', 'Model9', 'Model10'];

const Carousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  // Handlers to navigate models
  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? modelNames.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === modelNames.length - 1 ? 0 : prevIndex + 1));
  };

  // Calculate indices for the visible window of 3 models
  const visibleModels = [
    modelNames[(selectedIndex - 1 + modelNames.length) % modelNames.length],
    modelNames[selectedIndex],
    modelNames[(selectedIndex + 1) % modelNames.length],
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center space-x-6 mb-4">
        <Navigation direction="prev" onClick={handlePrev} />

        <div className="flex space-x-8">
          {visibleModels.map((model, index) => (
            <ModelViewer
              key={model}
              isSelected={index === 1} // Center model is always at index 1 in visibleModels
              model={model}
              blurred={index !== 1} // Only center model is not blurred
            />
          ))}
        </div>

        <Navigation direction="next" onClick={handleNext} />
      </div>

      {/* Display model count (e.g., "2 / 10") */}
      <div className="text-white text-lg mb-2">
        {selectedIndex + 1} / {modelNames.length}
      </div>

      {/* Dot indicators */}
      <div className="flex space-x-2">
        {modelNames.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
