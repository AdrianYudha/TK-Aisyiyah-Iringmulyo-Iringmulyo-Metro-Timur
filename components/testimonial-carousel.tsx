"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ibu Siti",
    role: "Orang Tua Murid",
    content: "Alhamdulillah, anak saya sangat senang bersekolah di TK Aisyiyah. Guru-gurunya sangat perhatian dan metode pembelajarannya menyenangkan.",
  },
  {
    id: 2,
    name: "Pak Budi",
    role: "Orang Tua Murid",
    content: "Saya sangat merekomendasikan TK Aisyiyah. Anak saya menjadi lebih mandiri dan berakhlak setelah belajar di sini.",
  },
  {
    id: 3,
    name: "Ibu Rina",
    role: "Orang Tua Murid",
    content: "Fasilitasnya lengkap dan lingkungan sekolahnya aman. Anak saya betah belajar dan bermain di sini.",
  },
  {
    id: 4,
    name: "Pak Joko",
    role: "Orang Tua Murid",
    content: "Tim pendidiknya sangat profesional. Kurikulumnya juga seimbang antara akademik dan keagamaan.",
  },
  {
    id: 5,
    name: "Ibu Maya",
    role: "Orang Tua Murid",
    content: "Prestasi drumband anak saya di sekolah ini luar biasa. Terima kasih TK Aisyiyah telah membentuk kepercayaan dirinya.",
  },
  {
    id: 6,
    name: "Pak Anton",
    role: "Orang Tua Murid",
    content: "Lingkungan belajar yang Islami dan menyenangkan. Anak saya menjadi lebih religius dan disiplin sejak masuk ke TK ini.",
  },
];

export default function TestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const items = Array.from(container.children) as HTMLElement[];
    
    // Clone items to create infinite scroll effect
    items.forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    });

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5; // Adjust speed here - slower for smoother effect
      // When the first set of items has completely scrolled out of view, reset to 0
      if (position <= -items.reduce((acc, item) => acc + item.offsetWidth, 0)) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-6">
      <div 
        ref={containerRef}
        className="flex gap-5"
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0 w-72">
            <Card className="h-full border border-primary/30 bg-card hover:border-primary/70 transition-all shadow-lg hover:shadow-xl">
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 overflow-hidden border border-primary/30 flex items-center justify-center">
                    <Image 
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.name}&backgroundColor=b6e3f4,c0aede,d1d4f9&radius=50&fontSize=40&padding=20`}
                      alt={testimonial.name} 
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Fallback image if the image doesn't load
                        target.src = `https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.name}&backgroundColor=b6e3f4,c0aede,d1d4f9&radius=50&fontSize=40&padding=20`;
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-3 text-sm text-justify">"{testimonial.content}"</p>
                    <div>
                      <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                      <p className="text-xs text-accent">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}