import React from 'react';

interface BorderProps {
  children: React.ReactNode;
}

const Border: React.FC<BorderProps> = ({ children }) => {
  return (
    <div className="p-2 border-4 border-white rounded-lg">
      {children}
    </div>
  );
};

export default Border;