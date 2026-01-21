import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../styles/components/animations/VoxelClouds.module.scss';

interface VoxelCloudsProps {
  className?: string;
  animated?: boolean;
}

const VoxelClouds: React.FC<VoxelCloudsProps> = ({ 
  className = '', 
  animated = true 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (!animated || !containerRef.current) return;

    const clouds = cloudsRef.current.filter(Boolean);
    
    // Animate clouds floating
    clouds.forEach((cloud, index) => {
      if (!cloud) return;
      
      gsap.to(cloud, {
        x: `+=${20 + index * 5}`,
        duration: 8 + index * 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.5
      });

      gsap.to(cloud, {
        y: `+=${10 + index * 3}`,
        duration: 6 + index * 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.3
      });
    });

    return () => {
      gsap.killTweensOf(clouds);
    };
  }, [animated]);

  return (
    <div ref={containerRef} className={`${styles.voxelContainer} ${className}`}>
      <svg
        viewBox="0 0 1200 800"
        className={styles.voxelSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cloudGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
            <stop offset="50%" stopColor="#f0f8ff" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#e6f3ff" stopOpacity="0.5"/>
          </linearGradient>
          
          <linearGradient id="cloudGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f8ff" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#f0f0f8" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#e8e8f0" stopOpacity="0.4"/>
          </linearGradient>

          <filter id="cloudShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
          </filter>
        </defs>

        {/* Background sky gradient */}
        <rect width="100%" height="100%" fill="url(#skyGradient)"/>
        
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB"/>
            <stop offset="100%" stopColor="#98D8E8"/>
          </linearGradient>
        </defs>

        {/* Large background cloud */}
        <g ref={el => { cloudsRef.current[0] = el; }} className={styles.cloud}>
          <path
            d="M100,400 Q150,350 200,380 Q250,360 300,390 Q350,370 400,400 Q450,380 500,410 Q500,450 450,470 Q400,480 350,470 Q300,480 250,470 Q200,480 150,470 Q100,460 100,400 Z"
            fill="url(#cloudGradient1)"
            filter="url(#cloudShadow)"
          />
          {/* Voxel details */}
          <rect x="120" y="390" width="15" height="15" fill="#ffffff" opacity="0.8"/>
          <rect x="140" y="385" width="12" height="12" fill="#f8f8ff" opacity="0.7"/>
          <rect x="160" y="395" width="10" height="10" fill="#ffffff" opacity="0.9"/>
        </g>

        {/* Medium cloud */}
        <g ref={el => { cloudsRef.current[1] = el; }} className={styles.cloud}>
          <path
            d="M600,300 Q640,280 680,300 Q720,285 760,305 Q800,290 840,310 Q840,340 800,350 Q760,355 720,350 Q680,355 640,350 Q600,345 600,300 Z"
            fill="url(#cloudGradient2)"
            filter="url(#cloudShadow)"
          />
          <rect x="620" y="310" width="12" height="12" fill="#ffffff" opacity="0.6"/>
          <rect x="640" y="305" width="10" height="10" fill="#f0f8ff" opacity="0.8"/>
        </g>

        {/* Small floating clouds */}
        <g ref={el => { cloudsRef.current[2] = el; }} className={styles.cloud}>
          <ellipse cx="300" cy="200" rx="40" ry="25" fill="url(#cloudGradient1)" opacity="0.7"/>
          <rect x="285" y="190" width="8" height="8" fill="#ffffff" opacity="0.5"/>
        </g>

        <g ref={el => { cloudsRef.current[3] = el; }} className={styles.cloud}>
          <ellipse cx="900" cy="150" rx="35" ry="20" fill="url(#cloudGradient2)" opacity="0.6"/>
          <rect x="890" y="145" width="6" height="6" fill="#f8f8ff" opacity="0.7"/>
        </g>

        {/* Voxel-style cloud particles */}
        <g ref={el => { cloudsRef.current[4] = el; }} className={styles.cloudParticles}>
          <rect x="200" y="250" width="8" height="8" fill="#ffffff" opacity="0.4"/>
          <rect x="220" y="240" width="6" height="6" fill="#f0f8ff" opacity="0.5"/>
          <rect x="240" y="260" width="10" height="10" fill="#ffffff" opacity="0.3"/>
          <rect x="500" y="180" width="7" height="7" fill="#f8f8ff" opacity="0.4"/>
          <rect x="520" y="170" width="9" height="9" fill="#ffffff" opacity="0.3"/>
          <rect x="800" y="220" width="8" height="8" fill="#f0f8ff" opacity="0.5"/>
        </g>

        {/* Atmospheric layers */}
        <g className={styles.atmosphere}>
          <rect x="0" y="0" width="100%" height="200" fill="url(#atmosphereGradient)" opacity="0.3"/>
          <rect x="0" y="600" width="100%" height="200" fill="url(#atmosphereGradient2)" opacity="0.2"/>
        </g>

        <defs>
          <linearGradient id="atmosphereGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </linearGradient>
          
          <linearGradient id="atmosphereGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default VoxelClouds;
