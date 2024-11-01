import React from 'react';

type ThreeObjectProps = {
  position: [number, number, number];
};

const ThreeObject: React.FC<ThreeObjectProps> = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" opacity={0.3} transparent />
    </mesh>
  );
};

export default ThreeObject;
