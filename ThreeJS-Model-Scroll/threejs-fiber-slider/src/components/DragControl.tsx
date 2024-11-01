import { ReactNode } from 'react';
import { useDrag } from 'react-use-gesture';

interface DragControlProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  children: ReactNode;
}

export const DragControl = ({ onSwipeLeft, onSwipeRight, children }: DragControlProps) => {
  const bind = useDrag(({ direction: [xDir], distance, cancel }) => {
    if (distance > 50) {
      if (xDir > 0) {
        onSwipeRight(); // Trigger the right swipe action
      } else if (xDir < 0) {
        onSwipeLeft(); // Trigger the left swipe action
      }
      cancel(); // Stop the drag event after triggering
    }
  });

  return (
    <div {...bind()} className="w-full h-full cursor-grab">
      {children}
    </div>
  );
};