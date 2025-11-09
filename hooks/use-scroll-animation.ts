'use client';

import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const elementsRef = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up the intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-scroll-id');
          if (id) {
            setIsVisible(prev => ({
              ...prev,
              [id]: entry.isIntersecting
            }));
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Adjust the margin as needed
      }
    );

    // Function to observe elements
    const observeElements = () => {
      Object.values(elementsRef.current).forEach((element) => {
        if (element && observerRef.current) {
          observerRef.current.observe(element);
        }
      });
    };

    // If observer is already set up and elements exist, observe them
    if (observerRef.current) {
      observeElements();
    }

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const registerElement = (id: string, element: HTMLElement | null) => {
    if (element) {
      element.setAttribute('data-scroll-id', id);
      elementsRef.current[id] = element;
      
      // If observer is ready, observe the element immediately
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    } else {
      if (observerRef.current) {
        const currentElement = elementsRef.current[id];
        if (currentElement) {
          observerRef.current.unobserve(currentElement);
        }
      }
      delete elementsRef.current[id];
      setIsVisible(prev => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
    }
  };

  return { isVisible, registerElement };
};