'use client';

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  className?: string;
  duration?: number;
}

export default function AnimatedNumber({ value, className, duration = 2000 }: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      if (progress < 1) {
        const currentValue = startValue + (endValue - startValue) * progress;
        setCurrentValue(Math.floor(currentValue));
        requestAnimationFrame(updateValue);
      } else {
        setCurrentValue(endValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [value, duration]);

  return <span className={className}>{currentValue}</span>;
}