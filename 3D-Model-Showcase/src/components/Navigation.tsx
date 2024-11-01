import React from 'react';

interface NavigationProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500"
    >
      {direction === 'prev' ? '<' : '>'}
    </button>
  );
};

export default Navigation;