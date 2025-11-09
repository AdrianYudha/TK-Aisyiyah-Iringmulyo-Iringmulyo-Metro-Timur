'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  delay?: number;
  threshold?: number; // How much of the element should be visible before triggering animation
}

export default function ScrollAnimatedSection({
  children,
  className = '',
  animationType = 'fade-in',
  delay = 0,
  threshold = 0.1,
}: ScrollAnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const animationClasses = {
    'fade-in': `opacity-0 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`,
    'slide-up': `opacity-0 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`,
    'slide-down': `opacity-0 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
    }`,
    'slide-left': `opacity-0 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`,
    'slide-right': `opacity-0 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
    }`,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={ref} 
      className={`${animationClasses[animationType]} ${className}`}
    >
      {children}
    </div>
  );
}