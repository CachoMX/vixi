"use client";

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter = ({ end, duration = 2000, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold">
      {count}
      {suffix}
    </div>
  );
};
