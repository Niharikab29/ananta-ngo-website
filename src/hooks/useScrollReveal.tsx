import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = <T extends HTMLElement = HTMLElement>(options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // If triggerOnce is true, stop observing after animation
            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.triggerOnce === false) {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return elementRef;
};

export const useCountUpAnimation = <T extends HTMLElement = HTMLElement>(
  endValue: number,
  duration: number = 2000,
  startDelay: number = 0
) => {
  const elementRef = useRef<T>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            setTimeout(() => {
              let startTime: number;
              const startValue = 0;
              
              const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
                
                if (element) {
                  element.textContent = currentValue.toString();
                }
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else if (element) {
                  element.textContent = endValue.toString();
                }
              };
              
              requestAnimationFrame(animate);
            }, startDelay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [endValue, duration, startDelay]);

  return elementRef;
};