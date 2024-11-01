import React from 'react';

interface DotIndicatorProps {
  totalDots: number;
  currentIndex: number;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({ totalDots, currentIndex }) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
        />
      ))}
    </div>
  );
};

export default DotIndicator;