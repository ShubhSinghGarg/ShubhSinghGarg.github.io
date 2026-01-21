import React, { ReactNode } from 'react';
import styles from '../styles/components/VideoBackground.module.scss';

interface VideoBackgroundProps {
  videoSrc: string;
  children: ReactNode;
  id: string;
  overlayClass?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  children, 
  id, 
  overlayClass = "overlay" 
}) => {
  return (
    <div className={styles.videoBg} id={id}>
      <div className={styles.overlay}></div>
      <video playsInline preload="auto" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
