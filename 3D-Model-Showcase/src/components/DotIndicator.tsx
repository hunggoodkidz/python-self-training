import React from 'react';

interface DotIndicatorProps {
  count: number;
  selectedIndex: number;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({ count, selectedIndex }) => {
  return (
    <div className="flex space-x-2 mt-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-white' : 'bg-gray-500'}`}
        />
      ))}
    </div>
  );
};

export default DotIndicator;