import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../styles/components/animations/SignatureAnimation.module.scss';

interface SignatureAnimationProps {
  delay?: number;
  duration?: number;
  className?: string;
}

const SignatureAnimation: React.FC<SignatureAnimationProps> = ({
  delay = 0,
  duration = 4,
  className = ''
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set up the initial state
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate the signature drawing
    const tl = gsap.timeline({ delay });
    
    tl.to(path, {
      strokeDashoffset: 0,
      duration,
      ease: "power2.inOut",
    })
    .to(path, {
      fill: 'rgba(255, 255, 255, 0.9)',
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, [delay, duration]);

  return (
    <div className={`${styles.signatureContainer} ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 800 200"
        className={styles.signatureSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cursive signature path for "Shubh Singh Garg" */}
        <path
          ref={pathRef}
          d="M50,120 Q60,80 80,100 Q100,120 120,100 Q140,80 160,100 Q180,120 200,100 
             M220,120 Q240,80 260,100 Q280,120 300,100 Q320,80 340,100 
             M360,120 Q380,80 400,100 Q420,120 440,100 Q460,80 480,100 Q500,120 520,100 
             M540,120 Q560,80 580,100 Q600,120 620,100 Q640,80 660,100 Q680,120 700,100 Q720,80 740,100"
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          className={styles.signaturePath}
        />
        
        {/* Decorative flourish */}
        <path
          d="M740,100 Q760,80 780,100 Q790,110 785,120 Q780,130 770,125"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          className={styles.flourish}
        />
      </svg>
    </div>
  );
};

export default SignatureAnimation;
