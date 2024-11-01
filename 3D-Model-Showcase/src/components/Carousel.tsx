// src/components/Carousel.tsx

import React, { useState } from 'react';
import ModelViewer from './ModelViewer';
import Navigation from './Navigation';
import DotIndicator from './DotIndicator';
import Border from './Border';

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
    <div className="flex flex-col items-center relative">
      {/* Top Navigation Buttons */}
      <div className="flex items-center justify-between w-full px-4 mb-4">
        <Navigation direction="prev" onClick={handlePrev} />
        <Navigation direction="next" onClick={handleNext} />
      </div>

      <div className="flex items-center justify-center space-x-8 mb-4">
        {/* Left Model - slightly smaller */}
        <div className="w-52 h-52 flex items-center justify-center opacity-80">
          <ModelViewer
            isSelected={false} // Left model is not selected, so it won't spin
            model={visibleModels[0]}
            blurred={true}
          />
        </div>

        {/* Middle Model - larger with border */}
        <Border>
          <div className="w-64 h-64 flex items-center justify-center">
            <ModelViewer
              isSelected={true} // Middle model is selected, so it will spin
              model={visibleModels[1]}
              blurred={false}
            />
          </div>
        </Border>

        {/* Right Model - slightly smaller */}
        <div className="w-52 h-52 flex items-center justify-center opacity-80">
          <ModelViewer
            isSelected={false} // Right model is not selected, so it won't spin
            model={visibleModels[2]}
            blurred={true}
          />
        </div>
      </div>

      {/* Display model count (e.g., "2 / 10") */}
      <div className="text-white text-lg mb-2">
        {selectedIndex + 1} / {modelNames.length}
      </div>

      {/* Dot indicators */}
      <DotIndicator count={modelNames.length} selectedIndex={selectedIndex} />
    </div>
  );
};

export default Carousel;
