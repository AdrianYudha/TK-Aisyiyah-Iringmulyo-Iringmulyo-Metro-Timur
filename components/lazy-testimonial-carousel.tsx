import dynamic from 'next/dynamic';

// Dynamically import the TestimonialCarousel component with no SSR
const LazyTestimonialCarousel = dynamic(
  () => import('./testimonial-carousel'),
  { 
    loading: () => (
      <div className="w-full py-6 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: false // Disable server-side rendering for this component
  }
);

export default LazyTestimonialCarousel;