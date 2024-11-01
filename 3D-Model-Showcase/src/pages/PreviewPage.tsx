import React from 'react';
import Carousel from '../components/Carousel';

const PreviewPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-300 text-white">
      <Carousel />
    </div>
  );
};

export default PreviewPage;