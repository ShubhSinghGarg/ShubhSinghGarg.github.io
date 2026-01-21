import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../styles/components/animations/VoxelForest.module.scss';

interface VoxelForestProps {
  className?: string;
  animated?: boolean;
  includeWolf?: boolean;
}

const VoxelForest: React.FC<VoxelForestProps> = ({ 
  className = '', 
  animated = true,
  includeWolf = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(SVGGElement | null)[]>([]);
  const wolfRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!animated || !containerRef.current) return;

    const elements = elementsRef.current.filter(Boolean);
    
    // Animate forest elements
    elements.forEach((element, index) => {
      if (!element) return;
      
      gsap.to(element, {
        y: `+=${2 + index * 0.5}`,
        duration: 5 + index * 0.3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.1
      });
    });

    // Wolf animation
    if (includeWolf && wolfRef.current) {
      const wolf = wolfRef.current;
      
      // Wolf breathing animation
      gsap.to(wolf, {
        scaleY: 1.02,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Wolf eyes blinking
      const eyes = wolf.querySelectorAll('.wolf-eye');
      gsap.to(eyes, {
        scaleY: 0.1,
        duration: 0.1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 3
      });
    }

    return () => {
      gsap.killTweensOf(elements);
      if (wolfRef.current) {
        gsap.killTweensOf(wolfRef.current);
      }
    };
  }, [animated, includeWolf]);

  return (
    <div ref={containerRef} className={`${styles.voxelContainer} ${className}`}>
      <svg
        viewBox="0 0 1200 800"
        className={styles.voxelSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="forestSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2F4F2F"/>
            <stop offset="50%" stopColor="#228B22"/>
            <stop offset="100%" stopColor="#006400"/>
          </linearGradient>
          
          <linearGradient id="forestFloorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513"/>
            <stop offset="100%" stopColor="#654321"/>
          </linearGradient>
          
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#228B22"/>
            <stop offset="100%" stopColor="#006400"/>
          </linearGradient>
          
          <linearGradient id="wolfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#696969"/>
            <stop offset="100%" stopColor="#2F4F4F"/>
          </linearGradient>

          <filter id="forestShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* Forest background */}
        <rect width="100%" height="100%" fill="url(#forestSkyGradient)"/>
        
        {/* Forest floor */}
        <rect x="0" y="650" width="100%" height="150" fill="url(#forestFloorGradient)"/>
        
        {/* Dense forest trees */}
        <g ref={el => { elementsRef.current[0] = el; }} className={styles.forestTree}>
          <rect x="50" y="400" width="25" height="250" fill="#8B4513" filter="url(#forestShadow)"/>
          <rect x="25" y="350" width="75" height="80" fill="url(#treeGradient)" filter="url(#forestShadow)"/>
          <rect x="35" y="330" width="55" height="30" fill="#228B22"/>
          <rect x="40" y="310" width="45" height="25" fill="#32CD32"/>
        </g>

        <g ref={el => { elementsRef.current[1] = el; }} className={styles.forestTree}>
          <rect x="200" y="420" width="30" height="230" fill="#8B4513" filter="url(#forestShadow)"/>
          <rect x="170" y="370" width="90" height="70" fill="url(#treeGradient)" filter="url(#forestShadow)"/>
          <rect x="180" y="350" width="70" height="25" fill="#228B22"/>
        </g>

        <g ref={el => { elementsRef.current[2] = el; }} className={styles.forestTree}>
          <rect x="400" y="380" width="35" height="270" fill="#8B4513" filter="url(#forestShadow)"/>
          <rect x="365" y="320" width="105" height="90" fill="url(#treeGradient)" filter="url(#forestShadow)"/>
          <rect x="375" y="300" width="85" height="30" fill="#228B22"/>
          <rect x="385" y="280" width="65" height="25" fill="#32CD32"/>
        </g>

        <g ref={el => { elementsRef.current[3] = el; }} className={styles.forestTree}>
          <rect x="600" y="410" width="28" height="240" fill="#8B4513" filter="url(#forestShadow)"/>
          <rect x="575" y="360" width="78" height="75" fill="url(#treeGradient)" filter="url(#forestShadow)"/>
          <rect x="585" y="340" width="58" height="28" fill="#228B22"/>
        </g>

        <g ref={el => { elementsRef.current[4] = el; }} className={styles.forestTree}>
          <rect x="800" y="430" width="32" height="220" fill="#8B4513" filter="url(#forestShadow)"/>
          <rect x="770" y="380" width="92" height="65" fill="url(#treeGradient)" filter="url(#forestShadow)"/>
          <rect x="780" y="365" width="72" height="22" fill="#228B22"/>
        </g>

        <g ref={el => { elementsRef.current[5] = el; }} className={styles.forestTree}>
          <rect x="1000" y="390" width="40" height="260" fill="#8B4513" filter="url(#forestShadow)"/>
          <rect x="965" y="330" width="110" height="85" fill="url(#treeGradient)" filter="url(#forestShadow)"/>
          <rect x="975" y="310" width="90" height="28" fill="#228B22"/>
          <rect x="985" y="290" width="70" height="22" fill="#32CD32"/>
        </g>

        {/* Forest undergrowth */}
        <g className={styles.undergrowth}>
          <rect x="100" y="620" width="20" height="30" fill="#228B22" opacity="0.8"/>
          <rect x="150" y="630" width="15" height="20" fill="#32CD32" opacity="0.7"/>
          <rect x="250" y="625" width="18" height="25" fill="#228B22" opacity="0.8"/>
          <rect x="350" y="635" width="12" height="15" fill="#90EE90" opacity="0.6"/>
          <rect x="450" y="628" width="16" height="22" fill="#228B22" opacity="0.7"/>
          <rect x="550" y="632" width="14" height="18" fill="#32CD32" opacity="0.8"/>
          <rect x="650" y="626" width="20" height="24" fill="#228B22" opacity="0.7"/>
          <rect x="750" y="634" width="13" height="16" fill="#90EE90" opacity="0.6"/>
          <rect x="850" y="629" width="17" height="21" fill="#228B22" opacity="0.8"/>
          <rect x="950" y="631" width="15" height="19" fill="#32CD32" opacity="0.7"/>
        </g>

        {/* Voxel wolf (for Contact section) */}
        {includeWolf && (
          <g ref={wolfRef} className={styles.wolf}>
            {/* Wolf body */}
            <rect x="500" y="580" width="80" height="40" fill="url(#wolfGradient)" filter="url(#forestShadow)"/>
            {/* Wolf head */}
            <rect x="480" y="570" width="35" height="30" fill="url(#wolfGradient)" filter="url(#forestShadow)"/>
            {/* Wolf ears */}
            <polygon points="485,570 495,555 505,570" fill="#2F4F4F"/>
            <polygon points="495,570 505,555 515,570" fill="#2F4F4F"/>
            {/* Wolf eyes */}
            <circle cx="490" cy="580" r="3" fill="#FFD700" className="wolf-eye"/>
            <circle cx="505" cy="580" r="3" fill="#FFD700" className="wolf-eye"/>
            {/* Wolf legs */}
            <rect x="510" y="620" width="8" height="25" fill="#2F4F4F"/>
            <rect x="525" y="620" width="8" height="25" fill="#2F4F4F"/>
            <rect x="540" y="620" width="8" height="25" fill="#2F4F4F"/>
            <rect x="555" y="620" width="8" height="25" fill="#2F4F4F"/>
            {/* Wolf tail */}
            <rect x="580" y="585" width="25" height="8" fill="url(#wolfGradient)"/>
          </g>
        )}

        {/* Fireflies */}
        <g className={styles.fireflies}>
          <circle cx="300" cy="400" r="2" fill="#FFFF00" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="350" r="2" fill="#FFFF00" opacity="0.6">
            <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="900" cy="450" r="2" fill="#FFFF00" opacity="0.7">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* Mist/fog effect */}
        <g className={styles.mist}>
          <ellipse cx="200" cy="500" rx="100" ry="30" fill="#FFFFFF" opacity="0.1"/>
          <ellipse cx="600" cy="450" rx="150" ry="40" fill="#FFFFFF" opacity="0.08"/>
          <ellipse cx="1000" cy="480" rx="120" ry="35" fill="#FFFFFF" opacity="0.09"/>
        </g>
      </svg>
    </div>
  );
};

export default VoxelForest;
