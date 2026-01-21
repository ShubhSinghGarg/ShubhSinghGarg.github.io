import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../styles/components/animations/VoxelLandscape.module.scss';

interface VoxelLandscapeProps {
  className?: string;
  animated?: boolean;
}

const VoxelLandscape: React.FC<VoxelLandscapeProps> = ({ 
  className = '', 
  animated = true 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (!animated || !containerRef.current) return;

    const elements = elementsRef.current.filter(Boolean);
    
    // Animate landscape elements
    elements.forEach((element, index) => {
      if (!element) return;
      
      // Subtle floating animation for trees and buildings
      gsap.to(element, {
        y: `+=${3 + index}`,
        duration: 4 + index * 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.2
      });
    });

    return () => {
      gsap.killTweensOf(elements);
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
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB"/>
            <stop offset="70%" stopColor="#98D8E8"/>
            <stop offset="100%" stopColor="#90EE90"/>
          </linearGradient>
          
          <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#90EE90"/>
            <stop offset="100%" stopColor="#228B22"/>
          </linearGradient>
          
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#32CD32"/>
            <stop offset="100%" stopColor="#228B22"/>
          </linearGradient>
          
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D3D3D3"/>
            <stop offset="100%" stopColor="#A9A9A9"/>
          </linearGradient>

          <filter id="voxelShadow">
            <feDropShadow dx="3" dy="6" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Background sky */}
        <rect width="100%" height="100%" fill="url(#skyGradient)"/>
        
        {/* Ground/grass layer */}
        <rect x="0" y="600" width="100%" height="200" fill="url(#grassGradient)"/>
        
        {/* Voxel trees */}
        <g ref={el => { elementsRef.current[0] = el; }} className={styles.tree}>
          {/* Tree trunk */}
          <rect x="150" y="520" width="20" height="80" fill="#8B4513" filter="url(#voxelShadow)"/>
          {/* Tree foliage - voxel style */}
          <rect x="130" y="480" width="60" height="60" fill="url(#treeGradient)" filter="url(#voxelShadow)"/>
          <rect x="140" y="470" width="40" height="20" fill="#32CD32"/>
          <rect x="145" y="460" width="30" height="15" fill="#90EE90"/>
        </g>

        <g ref={el => { elementsRef.current[1] = el; }} className={styles.tree}>
          <rect x="300" y="530" width="18" height="70" fill="#8B4513" filter="url(#voxelShadow)"/>
          <rect x="285" y="490" width="48" height="48" fill="url(#treeGradient)" filter="url(#voxelShadow)"/>
          <rect x="292" y="482" width="34" height="16" fill="#32CD32"/>
        </g>

        <g ref={el => { elementsRef.current[2] = el; }} className={styles.tree}>
          <rect x="800" y="540" width="16" height="60" fill="#8B4513" filter="url(#voxelShadow)"/>
          <rect x="788" y="505" width="40" height="40" fill="url(#treeGradient)" filter="url(#voxelShadow)"/>
          <rect x="794" y="498" width="28" height="14" fill="#32CD32"/>
        </g>

        {/* Voxel buildings */}
        <g ref={el => { elementsRef.current[3] = el; }} className={styles.building}>
          <rect x="500" y="450" width="80" height="150" fill="url(#buildingGradient)" filter="url(#voxelShadow)"/>
          <rect x="510" y="460" width="15" height="20" fill="#4169E1"/> {/* Window */}
          <rect x="535" y="460" width="15" height="20" fill="#4169E1"/>
          <rect x="560" y="460" width="15" height="20" fill="#4169E1"/>
          <rect x="510" y="490" width="15" height="20" fill="#4169E1"/>
          <rect x="535" y="490" width="15" height="20" fill="#4169E1"/>
          <rect x="560" y="490" width="15" height="20" fill="#4169E1"/>
          {/* Building top */}
          <polygon points="500,450 540,420 580,450" fill="#B0B0B0" filter="url(#voxelShadow)"/>
        </g>

        <g ref={el => { elementsRef.current[4] = el; }} className={styles.building}>
          <rect x="650" y="480" width="60" height="120" fill="url(#buildingGradient)" filter="url(#voxelShadow)"/>
          <rect x="660" y="490" width="12" height="15" fill="#4169E1"/>
          <rect x="680" y="490" width="12" height="15" fill="#4169E1"/>
          <rect x="660" y="515" width="12" height="15" fill="#4169E1"/>
          <rect x="680" y="515" width="12" height="15" fill="#4169E1"/>
          <polygon points="650,480 680,460 710,480" fill="#B0B0B0" filter="url(#voxelShadow)"/>
        </g>

        {/* Voxel roads */}
        <g className={styles.roads}>
          <rect x="0" y="580" width="1200" height="20" fill="#696969" opacity="0.8"/>
          <rect x="480" y="0" width="20" height="800" fill="#696969" opacity="0.6"/>
          {/* Road markings */}
          <rect x="5" y="588" width="30" height="4" fill="#FFFF00" opacity="0.8"/>
          <rect x="50" y="588" width="30" height="4" fill="#FFFF00" opacity="0.8"/>
          <rect x="95" y="588" width="30" height="4" fill="#FFFF00" opacity="0.8"/>
        </g>

        {/* Voxel cars */}
        <g ref={el => { elementsRef.current[5] = el; }} className={styles.car}>
          <rect x="200" y="570" width="40" height="20" fill="#FF4500" filter="url(#voxelShadow)"/>
          <rect x="205" y="565" width="30" height="8" fill="#FF6347"/>
          <circle cx="210" cy="595" r="6" fill="#2F4F4F"/>
          <circle cx="230" cy="595" r="6" fill="#2F4F4F"/>
        </g>

        {/* Voxel landscape details */}
        <g className={styles.landscapeDetails}>
          <rect x="100" y="590" width="12" height="12" fill="#32CD32" opacity="0.7"/>
          <rect x="120" y="585" width="8" height="8" fill="#90EE90" opacity="0.8"/>
          <rect x="350" y="595" width="10" height="10" fill="#32CD32" opacity="0.6"/>
          <rect x="750" y="588" width="14" height="14" fill="#90EE90" opacity="0.7"/>
          <rect x="900" y="592" width="9" height="9" fill="#32CD32" opacity="0.8"/>
        </g>
      </svg>
    </div>
  );
};

export default VoxelLandscape;
