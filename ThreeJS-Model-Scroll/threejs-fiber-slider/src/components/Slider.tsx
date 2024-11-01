import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { RotatingMesh } from './RotatingMesh'; // Import the updated RotatingMesh

const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff"];

export const Slider = () => {
  const [index, setIndex] = useState(0);

  // Animated position for sliding effect
  const { x } = useSpring({ x: -index * 3 });

  // Functions to handle slide navigation
  const goLeft = () => index > 0 && setIndex(index - 1);
  const goRight = () => index < colors.length - 3 && setIndex(index + 1);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Render each object, applying rotation controls to the selected (middle) one */}
        <animated.group position-x={x}>
          {colors.map((color, i) => (
            <RotatingMesh
              key={i}
              color={color}
              position={[i * 3, 0, 0]}
              isSelected={i === index} // Enables independent OrbitControls only for the selected object
            />
          ))}
        </animated.group>
      </Canvas>

      {/* Navigation Buttons */}
      <button onClick={goLeft} className="absolute left-10 top-1/2 text-white text-3xl">{'<'}</button>
      <button onClick={goRight} className="absolute right-10 top-1/2 text-white text-3xl">{'>'}</button>

      {/* Dots for indicating the current slide */}
      <div className="absolute bottom-10 flex space-x-2">
        {colors.slice(0, colors.length - 2).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};