'use client';

import { useEffect, useRef, useState, memo } from 'react';

interface AnimatedNumberProps {
  value: number;
  className?: string;
  duration?: number;
}

const AnimatedNumber = ({ value, className, duration = 2000 }: AnimatedNumberProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Cancel any previous animation
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const startAnimation = (timestamp: number) => {
      startTimeRef.current = timestamp;
      setCurrentValue(0); // Reset to 0 at the start of each animation
      
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        
        if (progress < 1) {
          const currentValue = 0 + (value - 0) * progress;
          setCurrentValue(Math.floor(currentValue));
          rafIdRef.current = requestAnimationFrame(animate);
        } else {
          setCurrentValue(value);
          rafIdRef.current = null;
        }
      };
      
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(startAnimation);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [value, duration]);

  return <span className={className}>{currentValue}</span>;
};

export default memo(AnimatedNumber);