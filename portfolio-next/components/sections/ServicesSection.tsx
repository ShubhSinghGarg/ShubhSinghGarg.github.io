import React from 'react';
import VideoBackground from '../VideoBackground';
import styles from '../../styles/components/sections/ServicesSection.module.scss';

const ServicesSection: React.FC = () => {
  return (
    <VideoBackground id="services" videoSrc="/videos/Sunrise-1844.mp4">
      <div className={`container ${styles.serviceContent}`}>
        <h2 id="services-heading" className="sr-only">Services</h2>
        <div className="row">
          {/* Left Section */}
          <div className="col-4">
            <div className={styles.leftText}>
              <h3 data-aos="fade-down">What I can do</h3>
              <div data-aos="fade-down" className={styles.lineDec}></div>
              <p data-aos="fade-down">
                I am an emerging Computer Science major at UT Dallas. I am a Programmer, designer, and developer. 
                I have extensive experience with multiple programming langugaes, design softaware and frameworks.
              </p>
              <div data-aos="fade-down" className={styles.primaryButton}>
                <a href="#projects">Peek at my work</a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <div data-aos="fade-down" className={styles.serviceItem}>
                  <h4 data-aos="fade-down">What others say about me</h4>
                  <div data-aos="fade-down" className={styles.lineDec}></div>
                  <p data-aos="fade-down">Coming soon</p>
                </div>
              </div>
              <div className="col-6">
                <div data-aos="fade-down" className={styles.serviceItem}>
                  <h4 data-aos="fade-down">What others say about me</h4>
                  <div data-aos="fade-down" className={styles.lineDec}></div>
                  <p data-aos="fade-down">Coming soon</p>
                </div>
              </div>
              <div className="col-6">
                <div data-aos="fade-down" className={styles.serviceItem}>
                  <h4 data-aos="fade-down">What others say about me</h4>
                  <div data-aos="fade-down" className={styles.lineDec}></div>
                  <p data-aos="fade-down">Coming soon</p>
                </div>
              </div>
              <div className="col-6">
                <div data-aos="fade-down" className={styles.serviceItem}>
                  <h4 data-aos="fade-down">What others say about me</h4>
                  <div data-aos="fade-down" className={styles.lineDec}></div>
                  <p data-aos="fade-down">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default ServicesSection;
