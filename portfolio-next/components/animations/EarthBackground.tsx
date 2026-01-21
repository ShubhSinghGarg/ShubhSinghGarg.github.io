import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../styles/components/animations/EarthBackground.module.scss';

interface EarthBackgroundProps {
  className?: string;
}

const EarthBackground: React.FC<EarthBackgroundProps> = ({ className = '' }) => {
  const earthRef = useRef<HTMLDivElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!earthRef.current || !atmosphereRef.current || !starsRef.current) return;

    // Earth rotation animation
    const earthRotation = gsap.to(earthRef.current, {
      rotation: 360,
      duration: 120,
      ease: "none",
      repeat: -1
    });

    // Earth breathing/pulsing animation
    const earthBreathing = gsap.to(earthRef.current, {
      scale: 1.02,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Atmosphere glow animation
    const atmosphereGlow = gsap.to(atmosphereRef.current, {
      opacity: 0.6,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Stars twinkling animation
    const starsTwinkle = gsap.to(starsRef.current, {
      opacity: 0.8,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      earthRotation.kill();
      earthBreathing.kill();
      atmosphereGlow.kill();
      starsTwinkle.kill();
    };
  }, []);

  return (
    <div className={`${styles.earthContainer} ${className}`}>
      {/* Stars background */}
      <div ref={starsRef} className={styles.stars}>
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Earth with atmosphere */}
      <div className={styles.earthWrapper}>
        {/* Atmosphere glow */}
        <div ref={atmosphereRef} className={styles.atmosphere} />
        
        {/* Earth sphere */}
        <div ref={earthRef} className={styles.earth}>
          <div className={styles.earthSurface} />
          <div className={styles.earthClouds} />
        </div>
      </div>
    </div>
  );
};

export default EarthBackground;
