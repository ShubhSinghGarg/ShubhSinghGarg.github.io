import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationConfig {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onUpdate?: (progress: number) => void;
  onEnter?: () => void;
  onLeave?: () => void;
}

export const useScrollAnimations = () => {
  const animationsRef = useRef<ScrollTrigger[]>([]);

  const createScrollAnimation = (
    element: HTMLElement | string,
    animation: gsap.core.Tween | gsap.core.Timeline,
    config: ScrollAnimationConfig
  ) => {
    if (typeof window === 'undefined') return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: config.trigger,
      start: config.start || 'top 80%',
      end: config.end || 'bottom 20%',
      scrub: config.scrub || false,
      pin: config.pin || false,
      animation: animation,
      onUpdate: (self) => {
        if (config.onUpdate) {
          config.onUpdate(self.progress);
        }
      },
      onEnter: config.onEnter,
      onLeave: config.onLeave,
    });

    animationsRef.current.push(scrollTrigger);
    return scrollTrigger;
  };

  const createParallaxEffect = (
    element: HTMLElement | string,
    speed: number = 0.5,
    trigger?: string
  ) => {
    if (typeof window === 'undefined') return;

    const tl = gsap.timeline();
    tl.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
    });

    return createScrollAnimation(element, tl, {
      trigger: trigger || element as string,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    });
  };

  const createFadeInAnimation = (
    element: HTMLElement | string,
    trigger?: string,
    direction: 'up' | 'down' | 'left' | 'right' = 'up'
  ) => {
    if (typeof window === 'undefined') return;

    const initialProps: any = { opacity: 0 };
    const animateProps: any = { opacity: 1, duration: 1, ease: 'power2.out' };

    switch (direction) {
      case 'up':
        initialProps.y = 50;
        animateProps.y = 0;
        break;
      case 'down':
        initialProps.y = -50;
        animateProps.y = 0;
        break;
      case 'left':
        initialProps.x = 50;
        animateProps.x = 0;
        break;
      case 'right':
        initialProps.x = -50;
        animateProps.x = 0;
        break;
    }

    gsap.set(element, initialProps);
    const tl = gsap.timeline();
    tl.to(element, animateProps);

    return createScrollAnimation(element, tl, {
      trigger: trigger || element as string,
      start: 'top 80%',
    });
  };

  const createScaleAnimation = (
    element: HTMLElement | string,
    fromScale: number = 0.8,
    toScale: number = 1,
    trigger?: string
  ) => {
    if (typeof window === 'undefined') return;

    gsap.set(element, { scale: fromScale, opacity: 0 });
    const tl = gsap.timeline();
    tl.to(element, {
      scale: toScale,
      opacity: 1,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    return createScrollAnimation(element, tl, {
      trigger: trigger || element as string,
      start: 'top 80%',
    });
  };

  const createRotateAnimation = (
    element: HTMLElement | string,
    rotation: number,
    trigger?: string,
    scrub: boolean = true
  ) => {
    if (typeof window === 'undefined') return;

    const tl = gsap.timeline();
    tl.to(element, {
      rotation: rotation,
      ease: 'none',
    });

    return createScrollAnimation(element, tl, {
      trigger: trigger || element as string,
      start: 'top bottom',
      end: 'bottom top',
      scrub: scrub,
    });
  };

  const createProgressiveAnimation = (
    elements: (HTMLElement | string)[],
    trigger: string,
    stagger: number = 0.2
  ) => {
    if (typeof window === 'undefined') return;

    gsap.set(elements, { opacity: 0, y: 50 });
    const tl = gsap.timeline();
    tl.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: stagger,
      ease: 'power2.out',
    });

    return createScrollAnimation(elements[0], tl, {
      trigger: trigger,
      start: 'top 80%',
    });
  };

  const cleanup = () => {
    animationsRef.current.forEach((trigger) => {
      trigger.kill();
    });
    animationsRef.current = [];
    ScrollTrigger.refresh();
  };

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, []);

  return {
    createScrollAnimation,
    createParallaxEffect,
    createFadeInAnimation,
    createScaleAnimation,
    createRotateAnimation,
    createProgressiveAnimation,
    cleanup,
  };
};

export default useScrollAnimations;
