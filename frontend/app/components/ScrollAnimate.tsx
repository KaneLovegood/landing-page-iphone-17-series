"use client";

import { useState, useEffect, useRef } from "react";

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Custom Intersection Observer wrapper for fade-in animations.
 * Animates children into view when they enter the viewport.
 */
export default function ScrollAnimate({ children, className = "" }: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
    >
      {children}
    </div>
  );
}
