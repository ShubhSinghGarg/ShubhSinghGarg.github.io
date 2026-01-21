import React from 'react';
import VideoBackground from '../VideoBackground';
import styles from '../../styles/components/sections/HomeSection.module.scss';

const HomeSection: React.FC = () => {
  return (
    <VideoBackground videoSrc="/videos/World-2.mp4" id="home-video-bg">
      <div className={`container ${styles.bannerContent}`}>
        <div className={styles.textContainer}>
          <h1>Shubh Singh Garg</h1>
          <span><em>Programmer | Developer | Designer</em></span>
          <div className={styles.primaryButton}>
            <a href="#services">What I do</a>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default HomeSection;
