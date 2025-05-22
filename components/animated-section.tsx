"use client";

import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'fadeInUp' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  threshold?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'fadeIn',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000); // Convert delay to milliseconds
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  // Map animation types to CSS classes
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animationType) {
      case 'fadeInUp':
        return 'animate-fade-in';
      case 'slideInLeft':
        return 'animate-slide-left';
      case 'slideInRight':
        return 'animate-slide-right';
      case 'fadeIn':
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${className} ${getAnimationClass()} transition-all duration-800`}
    >
      {children}
    </section>
  );
};