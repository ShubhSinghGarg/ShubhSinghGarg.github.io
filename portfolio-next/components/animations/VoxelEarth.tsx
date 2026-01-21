import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../styles/components/animations/VoxelEarth.module.scss';

interface VoxelEarthProps {
  className?: string;
}

const VoxelEarth: React.FC<VoxelEarthProps> = ({ className = '' }) => {
  const earthRef = useRef<SVGGElement>(null);
  const cloudsRef = useRef<(SVGGElement | null)[]>([]);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!earthRef.current || !starsRef.current) return;

    // Earth rotation animation - vertical axis with all continents rotating together
    const earthRotation = gsap.to(earthRef.current, {
      rotationY: 360,
      duration: 120,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center"
    });

    // Earth breathing/pulsing animation
    const earthBreathing = gsap.to(earthRef.current, {
      scale: 1.02,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Cloud animations - independent from Earth rotation
    const clouds = cloudsRef.current.filter(Boolean);
    clouds.forEach((cloud, index) => {
      if (!cloud) return;
      
      gsap.to(cloud, {
        rotation: 360,
        duration: 80 + index * 20,
        ease: "none",
        repeat: -1
      });

      gsap.to(cloud, {
        y: `+=${5 + index * 2}`,
        duration: 4 + index * 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.3
      });
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
      starsTwinkle.kill();
      gsap.killTweensOf(clouds);
    };
  }, []);

  return (
    <div className={`${styles.voxelEarthContainer} ${className}`}>
      {/* Stars background */}
      <div ref={starsRef} className={styles.stars}>
        {Array.from({ length: 200 }, (_, i) => (
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

      {/* SVG Voxel Earth */}
      <div className={styles.earthWrapper}>
        <svg
          viewBox="0 0 500 500"
          className={styles.earthSvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ocean gradient with more realistic colors */}
            <radialGradient id="oceanGradient" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#87CEEB"/>
              <stop offset="20%" stopColor="#4169E1"/>
              <stop offset="60%" stopColor="#1E90FF"/>
              <stop offset="100%" stopColor="#003D82"/>
            </radialGradient>
            
            {/* Land gradients */}
            <linearGradient id="forestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#90EE90"/>
              <stop offset="50%" stopColor="#32CD32"/>
              <stop offset="100%" stopColor="#228B22"/>
            </linearGradient>
            
            <linearGradient id="desertGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4A460"/>
              <stop offset="50%" stopColor="#DAA520"/>
              <stop offset="100%" stopColor="#B8860B"/>
            </linearGradient>
            
            {/* Voxel tree gradient */}
            <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#228B22"/>
              <stop offset="100%" stopColor="#006400"/>
            </linearGradient>
            
            {/* Cloud gradient */}
            <radialGradient id="cloudGradient" cx="50%" cy="40%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95"/>
              <stop offset="60%" stopColor="#F8F8FF" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#E6F3FF" stopOpacity="0.4"/>
            </radialGradient>
            
            {/* Atmosphere glow */}
            <radialGradient id="atmosphereGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.1"/>
              <stop offset="60%" stopColor="#64AAFF" stopOpacity="0.4"/>
              <stop offset="80%" stopColor="#4169E1" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>

            <filter id="voxelShadow">
              <feDropShadow dx="3" dy="5" stdDeviation="4" floodOpacity="0.4"/>
            </filter>
            
            <filter id="earthGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Atmosphere glow - larger for better effect */}
          <circle cx="250" cy="250" r="240" fill="url(#atmosphereGradient)" className={styles.atmosphere}/>
          
          {/* Main Earth group - everything rotates together */}
          <g ref={earthRef} className={styles.earthGroup}>
            {/* Ocean base sphere */}
            <circle cx="250" cy="250" r="200" fill="url(#oceanGradient)" filter="url(#voxelShadow)"/>
            
            {/* North America - larger, more detailed */}
            <g className={styles.continent}>
              <rect x="180" y="180" width="45" height="60" rx="6" fill="url(#forestGradient)" filter="url(#voxelShadow)"/>
              {/* Dense forests */}
              <rect x="190" y="190" width="8" height="8" rx="2" fill="url(#treeGradient)"/>
              <rect x="205" y="195" width="8" height="8" rx="2" fill="url(#treeGradient)"/>
              <rect x="220" y="190" width="8" height="8" rx="2" fill="url(#treeGradient)"/>
              <rect x="195" y="210" width="8" height="8" rx="2" fill="url(#treeGradient)"/>
              <rect x="210" y="215" width="8" height="8" rx="2" fill="url(#treeGradient)"/>
              <rect x="185" y="225" width="8" height="8" rx="2" fill="url(#treeGradient)"/>
              <rect x="200" y="230" width="8" height="8" rx="2" fill="url(#treeGradient)"/>
            </g>
            
            {/* South America */}
            <g className={styles.continent}>
              <rect x="190" y="280" width="35" height="70" rx="5" fill="url(#forestGradient)" filter="url(#voxelShadow)"/>
              <rect x="200" y="290" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              <rect x="210" y="305" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              <rect x="205" y="320" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              <rect x="195" y="335" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
            </g>
            
            {/* Europe */}
            <g className={styles.continent}>
              <rect x="270" y="170" width="25" height="30" rx="4" fill="url(#forestGradient)" filter="url(#voxelShadow)"/>
              <rect x="275" y="178" width="6" height="6" rx="1" fill="url(#treeGradient)"/>
              <rect x="285" y="182" width="6" height="6" rx="1" fill="url(#treeGradient)"/>
            </g>
            
            {/* Africa */}
            <g className={styles.continent}>
              <rect x="280" y="220" width="30" height="50" rx="5" fill="url(#desertGradient)" filter="url(#voxelShadow)"/>
              <rect x="290" y="235" width="6" height="6" rx="2" fill="#32CD32"/>
              <rect x="300" y="250" width="6" height="6" rx="2" fill="#32CD32"/>
              <rect x="295" y="265" width="6" height="6" rx="2" fill="#32CD32"/>
            </g>
            
            {/* Asia - large detailed landmass */}
            <g className={styles.continent}>
              <rect x="320" y="160" width="60" height="45" rx="6" fill="url(#forestGradient)" filter="url(#voxelShadow)"/>
              <rect x="330" y="170" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              <rect x="345" y="175" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              <rect x="360" y="170" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              <rect x="335" y="185" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              <rect x="350" y="190" width="7" height="7" rx="2" fill="url(#treeGradient)"/>
              {/* Mountains */}
              <polygon points="355,165 365,180 345,180" fill="#696969" filter="url(#voxelShadow)"/>
              <polygon points="355,165 360,172 350,172" fill="#FFFFFF"/>
            </g>
            
            {/* Australia */}
            <g className={styles.continent}>
              <rect x="360" y="320" width="25" height="20" rx="4" fill="#CD853F" filter="url(#voxelShadow)"/>
              <rect x="368" y="328" width="5" height="5" rx="1" fill="#32CD32"/>
              <rect x="375" y="332" width="5" height="5" rx="1" fill="#32CD32"/>
            </g>
            
            {/* Additional smaller islands for realism */}
            <rect x="150" y="200" width="12" height="8" rx="2" fill="url(#forestGradient)" filter="url(#voxelShadow)"/>
            <rect x="380" y="280" width="10" height="6" rx="2" fill="url(#forestGradient)" filter="url(#voxelShadow)"/>
            <rect x="160" y="320" width="8" height="10" rx="2" fill="url(#forestGradient)" filter="url(#voxelShadow)"/>
            
            {/* Polar ice caps - more prominent */}
            <ellipse cx="250" cy="120" rx="35" ry="18" fill="#FFFFFF" opacity="0.95" className={styles.iceCap} filter="url(#earthGlow)"/>
            <ellipse cx="250" cy="380" rx="35" ry="18" fill="#FFFFFF" opacity="0.95" className={styles.iceCap} filter="url(#earthGlow)"/>
          </g>

          {/* Floating voxel clouds around Earth - independent rotation */}
          <g ref={el => { cloudsRef.current[0] = el; }} className={styles.cloudGroup}>
            <rect x="120" y="200" width="20" height="12" rx="6" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
            <rect x="135" y="195" width="15" height="8" rx="4" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
            <rect x="125" y="210" width="12" height="6" rx="3" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
          </g>
          
          <g ref={el => { cloudsRef.current[1] = el; }} className={styles.cloudGroup}>
            <rect x="380" y="280" width="25" height="15" rx="7" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
            <rect x="395" y="275" width="18" height="10" rx="5" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
          </g>
          
          <g ref={el => { cloudsRef.current[2] = el; }} className={styles.cloudGroup}>
            <rect x="100" y="350" width="30" height="18" rx="9" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
            <rect x="120" y="345" width="22" height="12" rx="6" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
            <rect x="135" y="355" width="15" height="8" rx="4" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
          </g>
          
          <g ref={el => { cloudsRef.current[3] = el; }} className={styles.cloudGroup}>
            <rect x="400" y="220" width="28" height="16" rx="8" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
            <rect x="415" y="215" width="20" height="10" rx="5" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
          </g>
          
          {/* Additional atmospheric clouds */}
          <g ref={el => { cloudsRef.current[4] = el; }} className={styles.cloudGroup}>
            <rect x="80" y="150" width="22" height="14" rx="7" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
            <rect x="95" y="145" width="16" height="9" rx="4" fill="url(#cloudGradient)" filter="url(#voxelShadow)"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default VoxelEarth;
