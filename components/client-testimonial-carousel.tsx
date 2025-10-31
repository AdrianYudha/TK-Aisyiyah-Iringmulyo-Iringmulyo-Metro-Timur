'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the TestimonialCarousel component with no SSR
const DynamicTestimonialCarousel = dynamic(
  () => import('./testimonial-carousel'),
  { 
    loading: () => (
      <div className="w-full py-6 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: false
  }
);

export default function ClientTestimonialCarousel() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full py-6 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <DynamicTestimonialCarousel />;
}