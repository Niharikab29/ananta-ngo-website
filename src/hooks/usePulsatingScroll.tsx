import { useEffect, useRef, useCallback } from 'react';

interface PulsatingScrollOptions {
  threshold?: number[];
  rootMargin?: string;
  intensity?: number;
  pulseSpeed?: number;
  triggerOnce?: boolean;
  syncWithScroll?: boolean;
}

export const usePulsatingScroll = <T extends HTMLElement = HTMLElement>(
  options: PulsatingScrollOptions = {}
) => {
  const elementRef = useRef<T>(null);
  const animationFrameRef = useRef<number>();
  const isVisibleRef = useRef(false);
  const scrollProgressRef = useRef(0);

  const {
    threshold = [0, 0.25, 0.5, 0.75, 1],
    rootMargin = '0px',
    intensity = 1,
    pulseSpeed = 2000,
    triggerOnce = false,
    syncWithScroll = true
  } = options;

  const updatePulseAnimation = useCallback(() => {
    const element = elementRef.current;
    if (!element || !isVisibleRef.current) return;

    const time = Date.now();
    const progress = scrollProgressRef.current;
    
    // Create pulsating effect synchronized with scroll progress
    const baseIntensity = syncWithScroll ? progress : 1;
    const pulseIntensity = Math.sin((time / pulseSpeed) * 2 * Math.PI) * 0.3 + 0.7;
    const finalIntensity = baseIntensity * pulseIntensity * intensity;

    // Apply performant transforms and opacity changes
    const scale = 1 + (finalIntensity * 0.1);
    const opacity = 0.7 + (finalIntensity * 0.3);
    const shadowIntensity = finalIntensity * 20;

    element.style.transform = `scale(${scale})`;
    element.style.opacity = `${opacity}`;
    element.style.filter = `brightness(${1 + finalIntensity * 0.2})`;
    element.style.boxShadow = `0 0 ${shadowIntensity}px rgba(var(--primary-rgb, 34, 197, 94), ${finalIntensity * 0.4})`;

    // Add pulsating glow effect
    element.style.setProperty('--pulse-glow', `${finalIntensity * 0.6}`);

    animationFrameRef.current = requestAnimationFrame(updatePulseAnimation);
  }, [intensity, pulseSpeed, syncWithScroll]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add CSS custom properties for pulsating glow
    element.style.setProperty('--primary-rgb', '34, 197, 94');
    element.style.transition = 'all 0.3s ease-out';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersectionRatio = entry.intersectionRatio;
          scrollProgressRef.current = intersectionRatio;

          if (entry.isIntersecting) {
            isVisibleRef.current = true;
            entry.target.classList.add('pulse-active');
            
            // Start animation loop
            if (!animationFrameRef.current) {
              updatePulseAnimation();
            }
          } else {
            isVisibleRef.current = false;
            entry.target.classList.remove('pulse-active');
            
            // Stop animation loop and reset styles
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
              animationFrameRef.current = undefined;
            }

            if (!triggerOnce) {
              // Reset element styles when out of view
              entry.target.removeAttribute('style');
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, updatePulseAnimation]);

  return elementRef;
};

// Enhanced scroll-linked pulsating hook for content blocks
export const useContentPulse = <T extends HTMLElement = HTMLElement>(
  options: PulsatingScrollOptions = {}
) => {
  return usePulsatingScroll<T>({
    threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
    intensity: 0.8,
    pulseSpeed: 3000,
    syncWithScroll: true,
    ...options
  });
};

// Scroll indicator specific pulsating hook
export const useScrollIndicatorPulse = <T extends HTMLElement = HTMLElement>() => {
  return usePulsatingScroll<T>({
    threshold: [0.5],
    intensity: 1.2,
    pulseSpeed: 1500,
    syncWithScroll: false,
    triggerOnce: false
  });
};