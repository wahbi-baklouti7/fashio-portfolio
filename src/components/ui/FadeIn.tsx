import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing to prevent re-triggering (optional preference for portfolios)
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  const transitionStyle = {
    transitionDuration: '1000ms',
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)', // Ease-out
  };

  return (
    <div
      ref={domRef}
      className={`transform transition-all ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  );
};

export default FadeIn;