import React from 'react';
import Carousel3D from './components/Carousel3D';
import './index.css';  // TailwindCSS global import

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Carousel3D />
    </div>
  );
};

export default App;